// Sternly: a letter writing itself line by line, the citation picked out, then a seal pressed at the foot of the page.
import { type Draw, INK, MONO, TAU, clamp, ease, hash, loop } from './kit'

const LINES = 9, CITE = 3

export const sternly: Draw = (c, w, h, t, accent) => {
  const p = loop(t, 9, 7.2), fade = 1 - clamp((p - 8.3) / 0.7)
  const pw = Math.min(w * 0.42, h * 0.66), ph = h * 0.82, x = w * 0.5, y = h * 0.09
  c.globalAlpha = 0.07 * fade + 0.03
  c.fillStyle = INK
  c.fillRect(x, y, pw, ph)
  c.globalAlpha = 0.25
  c.strokeStyle = INK
  c.lineWidth = 1
  c.strokeRect(x + 0.5, y + 0.5, pw - 1, ph - 1)
  const m = pw * 0.12, lh = (ph * 0.62) / LINES, bh = Math.max(1.5, lh * 0.22)
  for (let i = 0; i < LINES; i++) {
    const e = ease(clamp((p - 0.4 - i * 0.48) / 0.45)) * fade
    if (e <= 0) continue
    const full = (pw - m * 2) * (i === 0 ? 0.45 : i === LINES - 1 ? 0.35 : 0.7 + 0.3 * hash(i, 7))
    const ly = y + m + i * lh
    c.globalAlpha = 0.55
    c.fillStyle = INK
    c.fillRect(x + m, ly, full * e, bh)
    if (i === CITE) {
      c.globalAlpha = 0.9 * e
      c.fillStyle = accent
      c.font = `600 ${Math.round(lh * 0.75)}px ${MONO}`
      c.textBaseline = 'middle'
      c.textAlign = 'left'
      c.fillText('§', x + m + full * e + 4, ly + bh / 2)
    }
  }
  const s = ease(clamp((p - 5.2) / 0.35)) * fade
  if (s > 0) {
    const r = pw * 0.13, sx = x + pw - m - r, sy = y + ph - m - r * 0.8, k = 1 + (1 - s) * 0.6
    c.globalAlpha = 0.9 * s
    c.strokeStyle = accent
    c.lineWidth = 2
    c.beginPath()
    c.arc(sx, sy, r * k, 0, TAU)
    c.stroke()
    c.beginPath()
    c.arc(sx, sy, r * k * 0.72, 0, TAU)
    c.stroke()
    c.beginPath()
    c.moveTo(sx - r * 0.32, sy)
    c.lineTo(sx - r * 0.06, sy + r * 0.26)
    c.lineTo(sx + r * 0.36, sy - r * 0.24)
    c.stroke()
  }
  c.globalAlpha = 1
}
