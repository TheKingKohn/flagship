// HandFont: "Hand" written stroke by stroke on a guide sheet; the pen lifts between strokes.
import { type Draw, TAU, clamp, ease, loop } from './kit'

const PAPER = '#f3edde', INK = '#1c1b27', PENCIL = 'rgba(150,143,128,.5)'
// strokes in glyph units: x 0..1 across the glyph, y 0 at the ascender, 1 on the baseline
const G: [number, number[][]][] = [
  [1, [[.12, .02, .14, .35, .13, .7, .14, .99], [.82, 0, .8, .35, .81, .7, .8, .98], [.14, .52, .4, .49, .62, .5, .8, .47]]],
  [0.8, [[.7, .5, .45, .42, .2, .55, .12, .75, .25, .97, .5, .98, .7, .82], [.72, .44, .73, .72, .74, .99]]],
  [0.8, [[.1, .45, .1, .7, .1, .99], [.1, .6, .25, .45, .5, .42, .68, .55, .7, .78, .71, .99]]],
  [0.85, [[.66, .5, .42, .42, .18, .55, .1, .75, .22, .97, .48, .98, .68, .82], [.7, 0, .7, .4, .7, .7, .71, .99]]],
]
const GAP = 0.14, WIDTH = G.reduce((a, g) => a + g[0] + GAP, -GAP)
// each stroke as a dense Catmull-Rom polyline, placed in the word and timed
type S = { n: number; px: Float32Array; py: Float32Array; t0: number; t1: number }
const S: S[] = []
let ox = 0, clock = 0.5
for (const [gw, strokes] of G) {
  for (const p of strokes) {
    const m = p.length / 2, n = (m - 1) * 8 + 1, px = new Float32Array(n), py = new Float32Array(n)
    for (let i = 0; i < n; i++) {
      const k = Math.min(m - 2, Math.floor(i / 8)), f = (i - k * 8) / 8
      const at = (j: number, a: number) => p[2 * Math.max(0, Math.min(m - 1, j)) + a]
      const cr = (a: number) => 0.5 * (2 * at(k, a) + (at(k + 1, a) - at(k - 1, a)) * f + (2 * at(k - 1, a) - 5 * at(k, a) + 4 * at(k + 1, a) - at(k + 2, a)) * f * f + (3 * at(k, a) - at(k - 1, a) - 3 * at(k + 1, a) + at(k + 2, a)) * f * f * f)
      ;(px[i] = ox + cr(0) * gw), (py[i] = cr(1))
    }
    const d = 0.55 + m * 0.07
    S.push({ n, px, py, t0: clock, t1: clock + d })
    clock += d + 0.38
  }
  ox += gw + GAP
  clock += 0.25
}
const END = clock, P = END + 4

export const handfont: Draw = (c, w, h, t, accent) => {
  const sx = w * 0.1, sy = h * 0.09, sw = w * 0.8, sh = h * 0.68
  c.fillStyle = PAPER
  c.fillRect(sx, sy, sw, sh)
  const gh = Math.min(sh * 0.56, (sw * 0.8 * 1.45) / WIDTH), us = gh / 1.45 // glyph height, pixels per glyph unit across
  const x0 = sx + (sw - WIDTH * us) / 2, yb = sy + sh * 0.74, ya = yb - gh
  const line = (y: number, col: string) => {
    c.strokeStyle = col
    c.beginPath()
    c.moveTo(sx + sw * 0.05, y)
    c.lineTo(sx + sw * 0.95, y)
    c.stroke()
  }
  c.lineWidth = 1
  line(ya, PENCIL)
  line(yb - gh * 0.58, PENCIL)
  line(yb, accent)
  const u = loop(t, P, END + 1.2), out = clamp((u - END - 2.6) / 1.2)
  c.lineCap = c.lineJoin = 'round'
  const nib = [0, 0]
  const ink = (s: S, e: number) => {
    const i = Math.min(s.n - 2, Math.floor(e)), f = e - i
    c.beginPath()
    for (let j = 0; j <= i; j++) (j ? c.lineTo : c.moveTo).call(c, x0 + s.px[j] * us, ya + s.py[j] * gh)
    nib[0] = s.px[i] + (s.px[i + 1] - s.px[i]) * f
    nib[1] = s.py[i] + (s.py[i + 1] - s.py[i]) * f
    c.lineTo(x0 + nib[0] * us, ya + nib[1] * gh)
    c.stroke()
  }
  c.strokeStyle = PENCIL
  c.globalAlpha = 0.28
  c.lineWidth = gh * 0.035
  for (const s of S) ink(s, s.n)
  c.globalAlpha = 1 - out
  c.strokeStyle = INK
  c.lineWidth = Math.max(2, gh * 0.045)
  let cur = 0, p = 0
  nib[0] = S[0].px[0]
  nib[1] = S[0].py[0]
  for (let k = 0; k < S.length; k++) {
    const q = clamp((u - S[k].t0) / (S[k].t1 - S[k].t0))
    if (q <= 0) break
    ;(cur = k), (p = q)
    ink(S[k], p * (S[k].n - 1))
  }
  // the pen: down while writing, lifted and travelling to the next stroke in between
  const s = S[cur], nx = S[cur + 1], lifted = p >= 1 && nx && u < nx.t0
  if (lifted) {
    const f = ease(clamp((u - s.t1 - 0.05) / (nx.t0 - s.t1 - 0.1)))
    nib[0] += (nx.px[0] - nib[0]) * f
    nib[1] += (nx.py[0] - nib[1]) * f
  }
  c.globalAlpha = u < END ? 1 : 0
  c.fillStyle = accent
  c.beginPath()
  c.arc(x0 + nib[0] * us, ya + nib[1] * gh, lifted ? 5 : 3, 0, TAU)
  c.fill()
  c.globalAlpha = 1
  c.lineCap = 'butt'
}
