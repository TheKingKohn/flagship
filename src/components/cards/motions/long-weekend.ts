// Long Weekend: a two-week strip where a holiday, four vacation days and two weekends light up into one run of nine days off.
import { type Draw, INK, MONO, clamp, digits, ease, loop } from './kit'

const DAYS = '...WWHPPPPWW...' // W weekend, H holiday, P a vacation day
const N = DAYS.length, A = 3, B = 11, RUN = B - A + 1

export const longWeekend: Draw = (c, w, h, t, accent) => {
  const p = loop(t, 8, 6)
  const lit = ease(clamp((p - 0.8) / 4)) * RUN, fade = 1 - clamp((p - 7.2) / 0.8)
  const L = w * 0.08, W = w * 0.84, gap = Math.max(2, W * 0.012), cw = (W - gap * (N - 1)) / N
  const ch = Math.min(cw * 1.25, h * 0.3), y = h * 0.42
  for (let i = 0; i < N; i++) {
    const x = L + i * (cw + gap), k = DAYS[i]
    c.globalAlpha = k === 'W' ? 0.1 : 0.04
    c.fillStyle = INK
    c.fillRect(x, y, cw, ch)
    c.globalAlpha = 0.22
    c.strokeStyle = INK
    c.lineWidth = 1
    c.strokeRect(x + 0.5, y + 0.5, cw - 1, ch - 1)
    if (i >= A && i <= B) {
      const on = clamp(lit - (i - A)) * fade
      if (on > 0) {
        c.globalAlpha = 0.85 * on
        c.fillStyle = accent
        c.fillRect(x, y + ch * (1 - on), cw, ch * on)
      }
    }
    if (k === 'H' || k === 'P') {
      c.globalAlpha = 0.9
      c.fillStyle = k === 'H' ? INK : accent
      const r = Math.max(1.5, cw * 0.09)
      c.fillRect(x + cw / 2 - r, y - r * 3.2, r * 2, r * 2)
    }
  }
  const s = Math.round(h * 0.16)
  c.globalAlpha = fade
  c.fillStyle = INK
  c.font = `600 ${s}px ${MONO}`
  c.textAlign = 'left'
  c.textBaseline = 'alphabetic'
  digits(c, Math.round(lit), L + W - s * 3.9, y - h * 0.1, s * 0.62, 1)
  c.globalAlpha = 0.55 * fade
  c.font = `${Math.round(s * 0.42)}px ${MONO}`
  c.fillText('days off', L + W - s * 3.3, y - h * 0.1)
  c.globalAlpha = 1
}
