// Satisfy: soft bubbles drifting up, each one popping into a ring near the top.
import { type Draw, TAU, clamp, hash } from './kit'

const N = 16, HUES = ['#7fd3ff', '#f59ad5', '#a7f3c0', '#c7a6ff', '#ffd27f']

export const satisfy: Draw = (c, w, h, t, accent) => {
  const top = h * 0.12, span = h * 0.86
  for (let i = 0; i < N; i++) {
    const sp = 0.07 + 0.06 * hash(i, 1), ph = (t * sp + hash(i, 2)) % 1
    const r = Math.min(w, h) * (0.035 + 0.05 * hash(i, 3))
    const x = w * (0.08 + 0.84 * hash(i, 4)) + Math.sin(t * 0.9 + i) * r * 0.5
    const y = top + span * (1 - ph)
    const col = HUES[i % HUES.length]
    if (ph > 0.9) {
      // pop: a ring that grows and fades
      const e = clamp((ph - 0.9) / 0.1)
      c.globalAlpha = 0.7 * (1 - e)
      c.strokeStyle = i % 4 === 0 ? accent : col
      c.lineWidth = 1.5
      c.beginPath()
      c.arc(x, y, r * (1 + e * 1.4), 0, TAU)
      c.stroke()
      continue
    }
    c.globalAlpha = 0.16
    c.fillStyle = col
    c.beginPath()
    c.arc(x, y, r, 0, TAU)
    c.fill()
    c.globalAlpha = 0.75
    c.strokeStyle = col
    c.lineWidth = 1.2
    c.stroke()
    c.globalAlpha = 0.8
    c.fillStyle = '#ffffff'
    c.beginPath()
    c.arc(x - r * 0.35, y - r * 0.4, r * 0.18, 0, TAU)
    c.fill()
  }
  c.globalAlpha = 1
}
