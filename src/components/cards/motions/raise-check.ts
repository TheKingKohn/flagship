// Raise Check: the raise grows as a bar, then federal tax, payroll tax, state tax and inflation each take their slice, leaving what you keep.
import { type Draw, INK, MONO, clamp, digits, ease, loop } from './kit'

const CUTS = [0.12, 0.0765, 0.05, 0.12]
const KEEP = 1 - CUTS.reduce((a, b) => a + b, 0)

export const raiseCheck: Draw = (c, w, h, t, accent) => {
  const p = loop(t, 8, 6.2)
  const grow = ease(clamp(p / 1.2)), fade = 1 - clamp((p - 7.3) / 0.7)
  const L = w * 0.08, W = w * 0.84 * grow, y = h * 0.4, bh = h * 0.16
  let x = L + W * KEEP, gone = 0
  c.globalAlpha = 0.9 * fade
  c.fillStyle = accent
  c.fillRect(L, y, W * KEEP, bh)
  for (let i = 0; i < CUTS.length; i++) {
    const e = ease(clamp((p - 1.6 - i * 0.75) / 0.6)), sw = W * CUTS[i]
    gone += CUTS[i] * e
    c.globalAlpha = (0.42 - i * 0.06) * (1 - e) * fade
    c.fillStyle = INK
    c.fillRect(x + 1, y + e * h * 0.22, sw - 2, bh)
    c.globalAlpha = 0.3 * fade
    c.strokeStyle = INK
    c.lineWidth = 1
    c.setLineDash([2, 3])
    c.strokeRect(x + 1.5, y + 0.5, sw - 3, bh - 1)
    c.setLineDash([])
    x += sw
  }
  const s = Math.round(h * 0.16)
  c.globalAlpha = fade
  c.fillStyle = INK
  c.font = `600 ${s}px ${MONO}`
  c.textAlign = 'left'
  c.textBaseline = 'alphabetic'
  const pct = Math.round(100 * (1 - gone))
  digits(c, pct, L + s * 1.7, y - h * 0.08, s * 0.62, 1)
  c.globalAlpha = 0.55 * fade
  c.font = `${Math.round(s * 0.42)}px ${MONO}`
  c.fillText('% kept', L + s * 2.3, y - h * 0.08)
  c.globalAlpha = 1
}
