# thewoob.com: how sites stand up, and how to add one without breaking the others

Written 2026-11-16 by the TheWoob lane from the config on this PC (read-only investigation). Facts marked [dash] could only be seen in a Cloudflare dashboard and are NOT confirmed (see "Questions for the owner"). Nothing here authorizes a push, deploy, DNS change, certificate change or tunnel start: each of those is the owner's, every time.

## How it is set up today (observed)

| Piece | What it is | Where the config lives |
|---|---|---|
| thewoob.com (Flagship, Next.js static export) | Cloudflare Pages project fed from GitHub `main` (`TheKingKohn/flagship`), ~80 s build; `public/_redirects` holds 301s [project settings: dash] | this repo; `.nvmrc` pins Node 20 |
| DNS | Cloudflare is the DNS provider (NS = jaziel/nancy.ns.cloudflare.com). No wildcard record: an unknown name returns NXDOMAIN, so every subdomain has its own record. Mail is Cloudflare Email Routing (MX route1-3.mx.cloudflare.net) plus TXT records | Cloudflare dashboard [dash] |
| Store (leadloom / votervault / nestegg / homeloom / explorer .thewoob.com) | ONE Flask app on `localhost:5000`, host-routed in `dashboard.py`; ONE cloudflared tunnel carries all five hosts; `go.thewoob.com` goes to `localhost:5055` (outreach console, password-gated, answers 401 on purpose) | `~/.cloudflared/config.yml` (tunnel `f08c9302...`) |
| Work/Lab apps (airfoil, skylab, streettimemachine, handfont, circuitlab, lantern, wellspring, granary, roofline, patchwork, haggle, fluxread, donos, memoryspace) | Each is a static (or small node) app in its own Desktop folder, served by `start-<slug>.cjs` on `127.0.0.1:<port>` through the shared front door `Launchers\lib\guard.js`, with its OWN named tunnel | `~/.cloudflared/<slug>.yml` (one tunnel, one hostname, one port) |
| Starting them | `Launchers\other-work.js` (PROJECTS list: site tag, dir, script, host) runs every keeper in one window; `Start Other Work.lnk` is in the Windows Startup folder. Each keeper runs `cloudflared tunnel --config ...\<slug>.yml run` and a 5-minute public-address watch (UP/DOWN lines in `Launchers\logs\other-work.log`) | `Launchers\` |
| TLS | Cloudflare terminates TLS at its edge and issues the visitor-facing certificate (observed issuer: Google Trust Services; apex 90-day cert, expiry 2026-12-18; subdomain certs expire 2027-01-06; these roll automatically, Universal SSL) [dash for the product name and mode]. The tunnel carries traffic to `localhost` over plain http, so NO certificate lives on this PC for any site | Cloudflare dashboard [dash] |
| `~/.cloudflared/cert.pem` | NOT a site certificate. It is the account login token that `cloudflared tunnel create` / `route dns` use. Whoever has it can change DNS for the zone. Never print, copy or commit it | `~/.cloudflared/` |
| `~/.cloudflared/<uuid>.json` | Per-tunnel secret credentials (21 files). Same rule | `~/.cloudflared/` |
| Windows service `cloudflared` | A separate, token-based tunnel (managed from the dashboard, its token is in the service command line). What it serves is unknown [dash]. Do not stop, edit or reinstall it | Windows services |
| Ports in use | store 5000, console 5055; apps 3001 donos, 3020 fluxread, 3040 memoryspace, 3050 airfoil, 3060 skylab, 3070 streettimemachine, 3080 handfont, 3090 circuitlab, 3100 lantern, 3110 wellspring, 3120 granary, 3130 roofline, 3160 patchwork, 3170 haggle, 3180 preview. Each app also holds `port+1` as a one-window lock. Next free by pattern: 3190 | `~/.cloudflared/*.yml`, each `start-*.cjs` |
| Flagship cards | `components/cards/catalog.ts` (+ motion, readout, `src/app/work/<slug>/page.tsx`, `public/projects/<slug>/`, `public/brands/`, `sitemap.ts` PROJECTS). See the lane guide fast path "add a project card" | this repo |

Store hosts and Labs hosts cannot both be in one yml by accident: the store tunnel (`config.yml`) lists only the five brand hosts plus `go`. A new app NEVER goes into `config.yml`.

## Checker (read-only)

`python scripts\thewoob_site_check.py` lists every site: HTTP code, certificate issuer, expiry, days left. Flags under 21 days.
- `--save before.json` before any change, `--compare before.json` after. "worse than before: none" is the pass condition.
- `--name <slug> [--port N]` says whether the new name, config, folder and port are free (exit 2 if not).
It reads only hostname/port lines from the yml files, never `cert.pem` or the credential json, and makes only DNS lookups, TLS handshakes and one GET per site.

## Pre-flight (both kinds)
1. `git status -sb` clean or understood; read `docs/sessions/alerts.md` top 30 lines.
2. `python scripts\thewoob_site_check.py --save %TEMP%\before.json`. Everything fine except the dormant list. Note any cert under 21 days: stop and tell the owner first.
3. For a new app: `... --name <slug> --port <N>` says "free".
4. Owner's word for the specific step is in hand, quoted (push, DNS, tunnel start are his).
5. A backup copy exists of any shared file you will edit (`other-work.js`): `cp other-work.js other-work.js.before-<tag>-YYYYMMDD`.

## (a) New page on thewoob.com (no DNS, no cert)
No DNS or certificate step exists for a page: the apex is already attached to Pages with a Cloudflare certificate.
1. Pre-flight above (checker `--save`).
2. Add the page: `src/app/<route>/page.tsx` (copy an existing page's markup exactly), the sitemap entry, and for a project the catalog/motion/readout steps in the lane guide.
3. `npm run build` once (not while `next dev` runs; move untracked `docs/app-audit` aside if `tsc` trips over it). `grep -c "Gavin Kohn" out/index.html` must be 1.
4. Check 390 and 1280 wide, `scrollWidth > clientWidth` false.
5. Commit plain, no AI lines. Wait for the owner's go; he or a quoted relay pushes.
6. After the push (about 80 s): checker `--compare`, then open the new URL.
Rollback: before the push `git reset --hard HEAD~1` on the unpushed commit (only if it is yours); after the push `git revert <hash>` and push on his go; faster, in the Pages dashboard choose the previous deployment and "Rollback" [dash].

## (b) New app on its own subdomain
Order matters: build and test locally, create the tunnel, route DNS last (DNS is what makes the name public).
1. Pre-flight, including `--name <slug> --port <N>`. Pick the port as the next free one (3190, 3200 ...); lock port = port+1.
2. App folder `Desktop\<slug>` builds to `dist/`. Copy `start-lantern.cjs` to `start-<slug>.cjs` and change ONLY: the two-letter `SITE` tag (unique in `other-work.js`), `HOST`, `PORT`, `LOCK`, the tunnel yml name, the title text. Test without the tunnel first: serve on 127.0.0.1:PORT and open it. Rollback: delete the new folder files; nothing is public yet.
3. Create the tunnel (owner's go): `cloudflared tunnel create <slug>`. This adds one new `<uuid>.json` and registers a new named tunnel; it touches no existing one. Rollback: `cloudflared tunnel delete <slug>` (only after step 4's DNS is gone).
4. Write `~/.cloudflared/<slug>.yml` by copying `lantern.yml`: `tunnel`, `credentials-file` (the new uuid), one `hostname` -> `http://localhost:<PORT>`, then the final `- service: http_status:404`. Never add the hostname to `config.yml` or another app's yml.
5. DNS and certificate (owner's go, the only step that changes DNS): `cloudflared tunnel route dns <slug> <slug>.thewoob.com`. This creates ONE proxied CNAME `<slug>` -> `<tunnel-id>.cfargotunnel.com`. Because it is proxied under thewoob.com, Cloudflare's existing Universal SSL certificate already covers it: there is no certificate to request, install or renew, and none may be ordered. NEVER pass `--overwrite-dns` / `-f` (it replaces an existing record, which could take another site down); if the command says a record already exists, STOP. Rollback: delete exactly that one CNAME in the dashboard (or `cloudflared tunnel route dns` is not reversible from the CLI, so the dashboard) [dash].
6. Register in `Launchers\other-work.js` PROJECTS (copy a line, new tag/dir/script/host/what; backup first) and, if wanted, a `Start <Name> (<slug>.thewoob.com).bat` copied from an existing one. Rollback: restore the `.before-` backup.
7. Start the window (owner's: window starts are his). Expect "tunnel connected to Cloudflare" then "UP ... live at https://<slug>.thewoob.com".
8. Verify: `curl -sI https://<slug>.thewoob.com` is 200, then `python scripts\thewoob_site_check.py --compare %TEMP%\before.json` shows "worse than before: none" and the new site with an expiry date.
9. Flagship card/page: section (a) with the card steps; links to `https://<slug>.thewoob.com`. Do not change `/from/thewoob/<surface>` shapes.
Rollback of the whole thing, in reverse: stop the one window, remove the PROJECTS line, delete the one CNAME, `cloudflared tunnel delete <slug>`, remove the yml. Nothing else is touched.

## Never touch
- `~/.cloudflared/config.yml` (carries all five store brands and `go`): one wrong line takes LeadLoom, HomeLoom, NestEgg, VoterVault, Explorer and the unsubscribe page down together.
- Any other app's `<slug>.yml`, `start-*.cjs`, folder, port, or `Launchers\lib\*` (shared front door and keeper for every app).
- `cert.pem` and every `<uuid>.json` (read, copy, print, commit: no).
- The Windows `cloudflared` service and its token.
- Cloudflare DNS: the apex and `www` records, MX / TXT / SPF / DKIM (email routing), NS, any existing CNAME, and any wildcard record (none exists today; adding `*` would make every typo resolve and change how existing names behave).
- SSL/TLS mode, Universal SSL / Advanced Certificate Manager, Always-HTTPS, Pages custom-domain settings, bulk redirects. Anything that applies zone-wide.
- `--overwrite-dns`, `cloudflared tunnel delete` on a tunnel you did not create in this session, and `cloudflared service install/uninstall`.
- Store restarts, the tunnel windows, `empire.bat`: owner's.

## Questions for the owner (dashboard-only facts)
1. Pages project name, build command and output dir, and whether `www` is attached. `www.thewoob.com` answers 200 (it serves a full copy), so the `_redirects` line `https://www.thewoob.com/* ... 301` is NOT working (Pages `_redirects` only matches paths). Fixing it needs a Cloudflare redirect rule: his decision.
2. SSL/TLS encryption mode (should be Full or Full strict) and whether Universal SSL is on for the zone; confirm the apex certificate (expires 2026-12-18) renews itself.
3. The complete DNS record list, and whether a CAA record exists (nslookup here cannot show CAA).
4. What the Windows `cloudflared` service tunnel serves, and whether its token tunnel and `config.yml`'s store tunnel overlap.
5. Whether `callcenter`, `claw`, `oddstock`, `preview` (tunnel not running, answer 530) and `cierra`, `joplin` (no DNS) are meant to stay dormant; they are listed in yml files and in the checker's DORMANT set.
6. The "cert.pem token rotation note from June" in the lane notes: does `cert.pem` still work (it is only needed for creating tunnels and DNS routes)?
