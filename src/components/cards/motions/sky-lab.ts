// Sky Lab: a night sky with a constellation drawn in hairlines and a satellite pass crossing it, a dotted arc fading behind a bright head.
import { type Draw, INK, TAU, hash, loop } from './kit'

const N = 70
const SX = new Float32Array(N), SY = new Float32Array(N)
for (let i = 0; i < N; i++) (SX[i] = 0.05 + hash(i, 5) * 0.9), (SY[i] = 0.06 + hash(i, 6) * 0.7)
const STAR = [0.18, 0.3, 0.27, 0.22, 0.38, 0.27, 0.46, 0.35, 0.58, 0.32, 0.65, 0.2, 0.78, 0.17]
const P = 11

export const skyLab: Draw = (c, w, h, t, accent) => {
  c.fillStyle = INK
  for (let i = 0; i < N; i++) {
    const tw = 0.55 + 0.45 * Math.sin(t * (0.6 + hash(i, 7)) + i * 3)
    c.globalAlpha = (0.15 + 0.5 * hash(i, 8) ** 2) * tw
    const r = 0.6 + hash(i, 9) * 0.8
    c.fillRect(SX[i] * w - r / 2, SY[i] * h - r / 2, r, r)
  }
  // constellation
  c.strokeStyle = INK
  c.globalAlpha = 0.18
  c.lineWidth = 1
  c.beginPath()
  for (let i = 0; i < STAR.length; i += 2) {
    if (i) c.lineTo(STAR[i] * w, STAR[i + 1] * h)
    else c.moveTo(STAR[i] * w, STAR[i + 1] * h)
  }
  c.stroke()
  c.globalAlpha = 0.8
  for (let i = 0; i < STAR.length; i += 2) {
    c.beginPath()
    c.arc(STAR[i] * w, STAR[i + 1] * h, 1.7, 0, TAU)
    c.fill()
  }
  // horizon with compass ticks
  const hy = h * 0.86
  c.globalAlpha = 0.14
  c.beginPath()
  c.moveTo(0, hy)
  c.lineTo(w, hy)
  for (let i = 1; i < 12; i++) (c.moveTo((w * i) / 12, hy), c.lineTo((w * i) / 12, hy + (i % 3 ? 3 : 7)))
  c.stroke()
  // the pass: rises left, peaks, sets right; the head carries a little ahead of its trail
  const u = loop(t, P, 5.2) / P, fade = Math.min(1, u * 8, (1 - u) * 8)
  c.fillStyle = accent
  for (let i = 0; i < 26; i++) {
    const s = u - i * 0.012
    if (s < 0) break
    const x = w * (0.06 + 0.88 * s), y = hy - Math.sin(s * Math.PI) * h * 0.58
    c.globalAlpha = (1 - i / 26) ** 1.5 * fade * 0.8
    c.beginPath()
    c.arc(x, y, i ? 1.1 : 2.6, 0, TAU)
    c.fill()
  }
  c.globalAlpha = 0.5 * fade
  c.strokeStyle = accent
  c.beginPath()
  c.arc(w * (0.06 + 0.88 * u), hy - Math.sin(u * Math.PI) * h * 0.58, 6.5, 0, TAU)
  c.stroke()
  // a thin crescent Moon, evenodd inside its own disc
  const mx = w * 0.86, my = h * 0.2, mr = Math.min(w, h) * 0.07
  c.save()
  c.beginPath()
  c.arc(mx, my, mr, 0, TAU)
  c.clip()
  c.beginPath()
  c.arc(mx, my, mr, 0, TAU)
  c.arc(mx - mr * 0.42, my - mr * 0.1, mr * 0.9, 0, TAU)
  c.fillStyle = INK
  c.globalAlpha = 0.85
  c.fill('evenodd')
  c.restore()
  c.globalAlpha = 1
}
