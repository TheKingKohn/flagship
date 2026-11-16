#!/usr/bin/env python3
"""thewoob_site_check.py - READ-ONLY checker for thewoob.com and its subdomain apps.

Changes nothing: no DNS, no certificate, no config, no network write. It only
  * reads hostnames/ports from ~/.cloudflared/*.yml (hostname and service lines only; never the
    credential json files, never cert.pem),
  * does DNS lookups, TLS handshakes and one GET per site.

Usage (Windows: python scripts\\thewoob_site_check.py ...):
  (no args)                     status of every known site: HTTP code, cert issuer, cert expiry
  --save before.json            also write the result to a file (take this BEFORE any change)
  --compare before.json         run again and report any site that got worse than the saved run
  --name newapp [--port 3190]   is the new subdomain / port / folder free?  (exit 2 if taken)
Exit codes: 0 all fine, 1 a site is down / cert near expiry / got worse, 2 name or port taken.
"""
import argparse, glob, json, os, re, socket, ssl, sys, time, urllib.request, urllib.error
from datetime import datetime, timezone

DOMAIN = "thewoob.com"
CF_DIR = os.path.join(os.path.expanduser("~"), ".cloudflared")
DESKTOP = os.path.join(os.path.expanduser("~"), "OneDrive", "Desktop")
WARN_DAYS = 21
UA = "thewoob-site-check/1 (read-only)"
# Known-by-design answers (checked 2026-11-16). Edit here, not the logic below.
EXPECT_CODE = {"go." + DOMAIN: {401}, "explorer." + DOMAIN: {200, 301, 302}}  # go = password-gated console
DORMANT = {  # in a cloudflared yml but not running today: 530 (tunnel down) or no DNS is normal for these
    "callcenter." + DOMAIN, "claw." + DOMAIN, "oddstock." + DOMAIN, "preview." + DOMAIN,
    "cierra." + DOMAIN, "joplin." + DOMAIN,
}


def known_hosts():
    """{hostname: local port} from every cloudflared yml (config.yml + one per app + retired)."""
    hosts = {}
    for f in glob.glob(os.path.join(CF_DIR, "*.yml")) + glob.glob(os.path.join(CF_DIR, "retired", "*.yml")):
        retired = os.sep + "retired" + os.sep in f
        host = None
        for line in open(f, encoding="utf-8", errors="replace"):
            m = re.match(r"\s*-?\s*hostname:\s*(\S+)", line)
            if m:
                host = m.group(1)
                continue
            m = re.match(r"\s*service:\s*http://localhost:(\d+)", line)
            if m and host:
                hosts[host] = {"port": int(m.group(1)), "retired": retired, "config": os.path.basename(f)}
                host = None
    return hosts


def cert_info(host):
    try:
        ctx = ssl.create_default_context()
        with socket.create_connection((host, 443), timeout=8) as s:
            with ctx.wrap_socket(s, server_hostname=host) as t:
                c = t.getpeercert()
        exp = datetime.strptime(c["notAfter"], "%b %d %H:%M:%S %Y %Z").replace(tzinfo=timezone.utc)
        issuer = dict(x[0] for x in c["issuer"]).get("organizationName", "?")
        return {"valid": True, "expires": exp.date().isoformat(),
                "days_left": (exp - datetime.now(timezone.utc)).days, "issuer": issuer}
    except Exception as e:  # invalid cert, timeout, no DNS
        return {"valid": False, "error": f"{type(e).__name__}: {str(e)[:80]}"}


class _NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k):
        return None


def http_code(url):
    op = urllib.request.build_opener(_NoRedirect)
    try:
        r = op.open(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=12)
        return r.status
    except urllib.error.HTTPError as e:
        return e.code
    except Exception as e:
        return f"ERR {type(e).__name__}"


def probe_all():
    hosts = known_hosts()
    names = [DOMAIN, "www." + DOMAIN] + sorted(h for h, v in hosts.items() if not v["retired"])
    out = {}
    for h in names:
        code = http_code(f"https://{h}/")
        out[h] = {"http": code, **cert_info(h)}
        # www is meant to 301 to the apex; the store hosts may answer 200/30x. Anything 2xx/3xx counts as up.
        okcode = isinstance(code, int) and (code < 400 or code in EXPECT_CODE.get(h, set()))
        out[h]["ok"] = okcode and out[h]["valid"] and out[h].get("days_left", 0) >= WARN_DAYS
        out[h]["dormant"] = h in DORMANT and not out[h]["ok"]
        time.sleep(0.15)  # be gentle
    return out


def show(res):
    print(f"{'host':36} {'http':>5}  {'cert expires':12} {'days':>5}  issuer")
    for h, r in res.items():
        if r["valid"]:
            flag = "  <-- renew soon" if r["days_left"] < WARN_DAYS else ""
            print(f"{h:36} {str(r['http']):>5}  {r['expires']:12} {r['days_left']:>5}  {r['issuer']}{flag}")
        else:
            print(f"{h:36} {str(r['http']):>5}  CERT PROBLEM: {r['error']}")
    bad = [h for h, r in res.items() if not r["ok"] and not r["dormant"]]
    dorm = [h for h, r in res.items() if r["dormant"]]
    print(f"\n{len(res)} sites checked, {len(res) - len(bad) - len(dorm)} fine, {len(dorm)} dormant by design"
          + (f" ({', '.join(dorm)})" if dorm else "") + (f", PROBLEMS: {', '.join(bad)}" if bad else ", no problems"))
    return bad


def dns_exists(host):
    try:
        socket.getaddrinfo(host, 443)
        return True
    except socket.gaierror:
        return False


def check_name(name, port):
    name = name.lower().strip()
    if not re.fullmatch(r"[a-z0-9]([a-z0-9-]{0,40}[a-z0-9])?", name):
        print(f"BAD NAME: {name!r} (letters, digits, hyphen only)"); return 2
    host = f"{name}.{DOMAIN}"
    hosts = known_hosts()
    taken = []
    if host in hosts:
        taken.append(f"hostname already in {hosts[host]['config']}" + (" (retired)" if hosts[host]['retired'] else ""))
    if dns_exists(host):
        taken.append("DNS already resolves (a record exists, or the name is a wildcard hit)")
    if dns_exists(f"zz-no-such-{int(time.time())}.{DOMAIN}"):
        print("NOTE: a wildcard DNS record seems to exist now; this was NOT true on 2026-11-16. Stop and ask the owner.")
    for d in ("", "-lab", "-app"):
        p = os.path.join(DESKTOP, name + d)
        if os.path.exists(p):
            taken.append(f"folder exists: {p}")
    if os.path.exists(os.path.join(CF_DIR, f"{name}.yml")):
        taken.append(f"{name}.yml already in {CF_DIR}")
    if port:
        used = {v["port"] for v in hosts.values()} | {v["port"] + 1 for v in hosts.values()}
        if port in used or port + 1 in used:
            taken.append(f"port {port} or its lock port {port + 1} already used by another app")
        s = socket.socket()
        s.settimeout(1)
        if s.connect_ex(("127.0.0.1", port)) == 0:
            taken.append(f"something is listening on 127.0.0.1:{port} right now")
        s.close()
    else:
        used = sorted({v["port"] for v in hosts.values()})
        print("Ports in use (each app also holds port+1 as a lock):", ", ".join(map(str, used)))
    if taken:
        print(f"{host}: NOT FREE"); [print("  -", t) for t in taken]; return 2
    print(f"{host}: free (no config, no DNS record, no folder" + (f", port {port} unused" if port else "") + ")")
    return 0


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--name"); ap.add_argument("--port", type=int)
    ap.add_argument("--save"); ap.add_argument("--compare")
    a = ap.parse_args()
    if a.name:
        return check_name(a.name, a.port)
    print(f"thewoob site check, {datetime.now().isoformat(timespec='seconds')} (read-only)\n")
    res = probe_all()
    bad = show(res)
    if a.save:
        json.dump(res, open(a.save, "w"), indent=1); print(f"saved to {a.save}")
    if a.compare:
        before = json.load(open(a.compare))
        worse = [h for h, r in before.items() if r.get("ok") and not res.get(h, {}).get("ok")]
        gone = [h for h in before if h not in res]
        print("\nCOMPARE vs", a.compare)
        print("  worse than before:", ", ".join(worse) if worse else "none")
        print("  missing now:", ", ".join(gone) if gone else "none")
        if worse or gone:
            return 1
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
