// Circuit Lab: a bench scope on its graticule, a square wave on channel 1 and the capacitor charging behind it on channel 2.
import { type Draw, HAIR } from './kit'

const AMBER = '#ffb84d', STEP = 3
const HI = (1 - Math.exp(-3)) / (1 + Math.exp(-3))

export const circuitLab: Draw = (c, w, h, t, accent) => {
  const L = w * 0.06, T = h * 0.08, W = w * 0.88, H = h * 0.74, mid = T + H / 2
  c.strokeStyle = HAIR
  c.lineWidth = 1
  c.beginPath()
  for (let i = 0; i <= 8; i++) (c.moveTo(L + (W * i) / 8, T), c.lineTo(L + (W * i) / 8, T + H))
  for (let j = 0; j <= 6; j++) (c.moveTo(L, T + (H * j) / 6), c.lineTo(L + W, T + (H * j) / 6))
  c.stroke()
  c.globalAlpha = 0.5
  c.beginPath()
  for (let i = 0; i <= 40; i++) (c.moveTo(L + (W * i) / 40, mid - 2), c.lineTo(L + (W * i) / 40, mid + 2))
  c.stroke()
  c.lineJoin = 'round'
  for (let ch = 0; ch < 2; ch++) {
    const cy = mid + (ch ? 0.18 : -0.2) * H
    for (let pass = 0; pass < 2; pass++) {
      c.beginPath()
      for (let px = 0; px <= W; px += STEP) {
        const s = (px / W) * 2.2 + t * 0.5, ph = s - Math.floor(s), hi = ph < 0.5
        const rc = (hi ? 1 : -1) * (1 - (1 + HI) * Math.exp(-6 * (hi ? ph : ph - 0.5)))
        const y = cy - (ch ? rc : hi ? 1 : -1) * H * 0.115
        if (px) c.lineTo(L + px, y)
        else c.moveTo(L + px, y)
      }
      c.strokeStyle = ch ? AMBER : accent
      c.lineWidth = pass ? 1.6 : 4.5
      c.globalAlpha = pass ? 0.95 : 0.14
      c.stroke()
    }
  }
  c.globalAlpha = 1
}
