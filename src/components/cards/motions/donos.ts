// DONOS: a donation ledger counting up one cent at a time, new gifts landing as rows, a hairline fee line beneath.
import { type Draw, INK, MONO, clamp, ease, hash, digits } from './kit'

export const donos: Draw = (c, w, h, t, accent) => {
  const fs = Math.min(h * 0.2, w * 0.1), adv = fs * 0.6
  const x1 = w * 0.5 + adv * 3.7, y = h * 0.3
  const cents = 128437 + Math.floor(t * 23 + 6 * Math.sin(t * 0.7))
  c.font = `500 ${fs}px ${MONO}`
  c.textAlign = 'left'
  c.textBaseline = 'middle'
  c.fillStyle = INK
  digits(c, cents % 100, x1, y, adv, 2)
  c.fillStyle = accent
  c.fillRect(x1 - adv * 1.12, y + fs * 0.24, fs * 0.09, fs * 0.09)
  c.fillStyle = INK
  digits(c, cents / 100, x1 - adv * 2.1, y, adv, 1, 3)
  // fee line: nearly all of every gift reaches the creator
  const lx = w * 0.14, lw = w * 0.72, ly = h * 0.44
  c.fillStyle = 'rgba(233,228,216,.12)'
  c.fillRect(lx, ly, lw, 2)
  c.fillStyle = accent
  c.fillRect(lx, ly, lw * 0.965, 2)
  c.globalAlpha = 0.5
  c.fillStyle = INK
  c.fillRect(lx + lw * 0.97, ly - 2, 1.5, 6)
  c.globalAlpha = 1
  // ledger rows: each gift arrives at the top and sinks
  const k = Math.floor(t / 1.8), f = ease(clamp((t / 1.8 - k) * 2.5))
  for (let r = 0; r < 3; r++) {
    const g = k - r, ry = h * 0.56 + (r + f - 1) * h * 0.1
    const a = (r === 0 ? f : r === 2 ? 1 - f : 1) * (r === 0 ? 1 : 0.55)
    c.globalAlpha = a
    c.beginPath()
    c.arc(lx + 5, ry, 4, 0, 6.2832)
    c.fillStyle = r === 0 ? accent : INK
    c.fill()
    c.fillStyle = INK
    c.globalAlpha = a * 0.3
    c.fillRect(lx + 20, ry - 1.5, lw * (0.22 + 0.2 * hash(g)), 3)
    c.globalAlpha = a * 0.7
    c.font = `500 ${fs * 0.34}px ${MONO}`
    digits(c, 100 + Math.floor(hash(g, 4) * 2400), lx + lw - 10, ry, fs * 0.2, 4)
  }
  c.globalAlpha = 1
}
