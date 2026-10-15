// DONOS: gifts land as ledger rows and the total steps up by exactly that gift, in fixed-width cells (nothing half-rolls).
import { type Draw, INK, MONO, clamp, ease, hash } from './kit'

const gift = (g: number) => 250 + Math.floor(hash(((g % 8) + 8) % 8, 4) * 4750) // cents, repeating every 8
const sum = (n: number) => Array.from({ length: n }, (_, g) => gift(g)).reduce((a, v) => a + v, 0)
const CYCLE = sum(8)
const raised = (n: number) => Math.floor(n / 8) * CYCLE + sum(n % 8)
const money = (v: number) => `${Math.floor(v / 100)}`.replace(/\B(?=(\d{3})+$)/g, ',') + '.' + `${v % 100}`.padStart(2, '0')
const cw = (ch: string, adv: number) => (ch >= '0' && ch <= '9' ? adv : adv * 0.42)
/** Right-aligned at x; every digit sits in a cell of `adv`, so figures never shift. */
function cells(c: CanvasRenderingContext2D, s: string, x: number, y: number, adv: number, dot = INK) {
  c.textAlign = 'center'
  for (let i = s.length - 1; i >= 0; i--) {
    const a = cw(s[i], adv)
    x -= a
    c.fillStyle = s[i] === '.' ? dot : INK
    c.fillText(s[i], x + a / 2, y)
  }
}

export const donos: Draw = (c, w, h, t, accent) => {
  const k = Math.floor(t / 1.8), u = t / 1.8 - k, f = ease(clamp(u * 2.5))
  const total = money(128437 + raised(k + (u >= 0.4 ? 1 : 0)))
  const fs = Math.min(h * 0.2, w * 0.1), adv = fs * 0.62, y = h * 0.31
  const tw = [...total].reduce((a, ch) => a + cw(ch, adv), 0) + adv * 0.7
  c.textBaseline = 'middle'
  c.font = `500 ${fs}px ${MONO}`
  cells(c, total, (w + tw) / 2, y, adv, accent)
  c.font = `400 ${fs * 0.6}px ${MONO}`
  c.globalAlpha = 0.45
  c.fillText('$', (w - tw) / 2 + adv * 0.35, y)
  c.globalAlpha = 1
  const lx = w * 0.14, lw = w * 0.72, ly = h * 0.46 // fee line: nearly every gift reaches the creator
  c.fillStyle = 'rgba(233,228,216,.12)'
  c.fillRect(lx, ly, lw, 2)
  c.fillStyle = accent
  c.fillRect(lx, ly, lw * 0.965, 2)
  const rf = fs * 0.36
  c.font = `500 ${rf}px ${MONO}`
  for (let r = 0; r < 3; r++) {
    const g = k - r, ry = h * 0.6 + (r + f - 1) * h * 0.1
    const a = (r === 0 ? f : r === 2 ? 1 - f : 1) * (r === 0 ? 1 : 0.6)
    c.globalAlpha = a
    c.beginPath()
    c.arc(lx + 5, ry, 3.5, 0, 6.2832)
    c.fillStyle = r === 0 ? accent : INK
    c.fill()
    c.globalAlpha = a * 0.3
    c.fillStyle = INK
    c.fillRect(lx + 20, ry - 1.5, lw * (0.2 + 0.2 * hash(g)), 3)
    c.globalAlpha = a * 0.75
    cells(c, money(gift(g)), lx + lw - 2, ry, rf * 0.62)
  }
  c.globalAlpha = 1
}
