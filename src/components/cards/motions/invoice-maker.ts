// Invoice Maker: line items landing on a page, the total counting up beneath them, then a PAID stamp.
import { type Draw, INK, MONO, clamp, digits, ease, hash, loop } from './kit'

const ROWS = 4, AMT = [240, 1150, 85, 600]

export const invoiceMaker: Draw = (c, w, h, t, accent) => {
  const p = loop(t, 9, 6.8), fade = 1 - clamp((p - 8.3) / 0.7)
  const pw = Math.min(w * 0.46, h * 0.72), ph = h * 0.82, x = w * 0.46, y = h * 0.09
  c.globalAlpha = 0.08
  c.fillStyle = INK
  c.fillRect(x, y, pw, ph)
  c.globalAlpha = 0.25
  c.strokeStyle = INK
  c.lineWidth = 1
  c.strokeRect(x + 0.5, y + 0.5, pw - 1, ph - 1)
  const m = pw * 0.1, bh = Math.max(1.5, ph * 0.018)
  c.globalAlpha = 0.8
  c.fillStyle = accent
  c.fillRect(x + pw - m - pw * 0.3, y + m, pw * 0.3, bh * 2)
  const fs = Math.round(ph * 0.07)
  c.font = `${fs}px ${MONO}`
  c.textAlign = 'left'
  c.textBaseline = 'middle'
  let total = 0
  for (let i = 0; i < ROWS; i++) {
    const e = ease(clamp((p - 0.4 - i * 0.6) / 0.4)) * fade
    if (e <= 0) continue
    const ry = y + ph * 0.3 + i * ph * 0.11
    c.globalAlpha = 0.5 * e
    c.fillStyle = INK
    c.fillRect(x + m, ry, (pw * 0.4 + pw * 0.12 * hash(i, 5)) * e, bh)
    c.globalAlpha = 0.8 * e
    digits(c, AMT[i], x + pw - m - fs * 0.6, ry + bh / 2, fs * 0.6)
    total += AMT[i] * e
  }
  const ty = y + ph * 0.8
  c.globalAlpha = 0.3 * fade
  c.fillRect(x + m, ty - ph * 0.06, pw - m * 2, 1)
  c.globalAlpha = fade
  c.fillStyle = INK
  c.font = `600 ${Math.round(fs * 1.4)}px ${MONO}`
  digits(c, total, x + pw - m - fs * 0.84, ty, fs * 0.84, 1, 3)
  const s = ease(clamp((p - 3.6) / 0.3)) * fade
  if (s > 0) {
    c.save()
    c.translate(x + pw * 0.36, y + ph * 0.18)
    c.rotate(-0.2)
    c.scale(1 + (1 - s) * 0.5, 1 + (1 - s) * 0.5)
    c.globalAlpha = 0.9 * s
    c.strokeStyle = accent
    c.lineWidth = 2
    c.strokeRect(-pw * 0.17, -fs * 0.9, pw * 0.34, fs * 1.8)
    c.fillStyle = accent
    c.font = `700 ${fs}px ${MONO}`
    c.textAlign = 'center'
    c.fillText('PAID', 0, 0)
    c.restore()
  }
  c.globalAlpha = 1
}
