// Night Sky: a round star chart turning slowly about the pole, the brightest stars twinkling and one constellation drawn in.
import { type Draw, INK, TAU, hash } from './kit'

const N = 150, LINE = [3, 11, 19, 27, 35, 43]

export const nightSky: Draw = (c, w, h, t, accent) => {
  const cx = w * 0.62, cy = h * 0.5, R = Math.min(w, h) * 0.44, rot = t * 0.04
  c.globalAlpha = 0.55
  c.strokeStyle = accent
  c.lineWidth = 1.2
  c.beginPath()
  c.arc(cx, cy, R, 0, TAU)
  c.stroke()
  c.globalAlpha = 0.12
  c.strokeStyle = INK
  c.beginPath()
  c.arc(cx, cy, R * 0.5, 0, TAU)
  c.stroke()
  let px = 0, py = 0
  c.lineWidth = 1
  for (let k = 0; k < LINE.length; k++) {
    const i = LINE[k], r = R * (0.32 + 0.1 * k + 0.05 * hash(i, 4)), a = 1.1 + k * 0.34 + rot
    const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r
    if (k) {
      c.globalAlpha = 0.3
      c.strokeStyle = accent
      c.beginPath()
      c.moveTo(px, py)
      c.lineTo(x, y)
      c.stroke()
    }
    c.globalAlpha = 0.95
    c.fillStyle = INK
    c.beginPath()
    c.arc(x, y, 1.8, 0, TAU)
    c.fill()
    px = x
    py = y
  }
  c.fillStyle = INK
  for (let i = 0; i < N; i++) {
    const r = R * 0.97 * Math.sqrt(hash(i, 1)), a = hash(i, 2) * TAU + rot, m = hash(i, 3)
    const s = m > 0.92 ? 1.6 : m > 0.7 ? 1.1 : 0.7
    c.globalAlpha = (0.35 + 0.45 * m) * (0.75 + 0.25 * Math.sin(t * (1 + m * 2) + i))
    c.fillRect(cx + Math.cos(a) * r - s / 2, cy + Math.sin(a) * r - s / 2, s, s)
  }
  c.globalAlpha = 1
}
