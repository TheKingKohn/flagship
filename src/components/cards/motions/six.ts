// The six states as a 3 x 2 sheet of silhouettes with records lighting inside them. Shared by the five Data Network brand motions.
import { INK, MONO, clamp, digits, ease, loop } from './kit'
import { ASP } from './six-data'
import { tile } from './six-tile'

// tile of each state (WA UT OH PA NC FL): WA OH PA above, UT NC FL below
const TILE = [0, 3, 1, 2, 4, 5]

/** kind: 0 records lighting with a thread between them, 1 a counter, 2 houses, 3 a frame stepping state to state. */
export function six(c: CanvasRenderingContext2D, w: number, h: number, t: number, accent: string, kind: number, base = 0, rate = 0) {
  const tw = (w * 0.9) / 3, th = (h * 0.76) / 2, x0 = w * 0.05, y0 = h * 0.07
  const u = loop(t, 12, 9), live = 1 - clamp(u - 11)
  const f = (t * 0.4) % 6, fs = Math.floor(f), fr = ease(clamp((f - fs) * 2.5)), a = TILE[fs], b = TILE[(fs + 1) % 6]
  const ax = x0 + tw * (a % 3), ay = y0 + th * Math.floor(a / 3)
  const rx = ax + (x0 + tw * (b % 3) - ax) * fr, ry = ay + (y0 + th * Math.floor(b / 3) - ay) * fr
  c.lineWidth = 1
  for (let s = 0; s < 6; s++) {
    const k = TILE[s], sc = Math.min((tw * 0.8) / ASP[s], th * 0.78)
    const dim = kind === 1 ? 0.45 : kind === 3 && k !== a && k !== b ? 0.35 : 1
    tile(c, s, x0 + tw * (k % 3 + 0.5) - (ASP[s] * sc) / 2, y0 + th * (Math.floor(k / 3) + 0.5) - sc / 2, sc, u, accent, kind, dim, live)
  }
  if (kind === 3) {
    c.strokeStyle = accent
    c.globalAlpha = 0.85
    c.lineWidth = 1.5
    c.beginPath()
    for (let q = 0; q < 4; q++) {
      const x = rx + 5 + (q & 1 ? tw - 10 : 0), y = ry + 5 + (q & 2 ? th - 10 : 0), dx = q & 1 ? -10 : 10, dy = q & 2 ? -10 : 10
      c.moveTo(x + dx, y)
      c.lineTo(x, y)
      c.lineTo(x, y + dy)
    }
    c.stroke()
  }
  if (kind === 1) {
    const sz = Math.min(h * 0.2, w * 0.12), adv = sz * 0.6
    c.font = `500 ${sz}px ${MONO}`
    c.textAlign = 'left'
    c.textBaseline = 'middle'
    c.fillStyle = INK
    c.globalAlpha = 0.95
    digits(c, base + Math.floor(t * rate), w / 2 + adv * 3.9, h * 0.45, adv, 1, 3)
  }
  c.globalAlpha = 1
}
