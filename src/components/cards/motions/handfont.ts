// HandFont: a pen writing a loop of joined letters across a sheet of paper, ruled with a vermilion baseline.
import { type Draw, TAU, clamp, loop } from './kit'

const PAPER = '#f3edde', INK = '#1c1b27', PENCIL = 'rgba(164,157,140,.55)'
const P = 9
const at = (s: number, x0: number, w: number, yb: number, xh: number, out: number[]) => {
  // cursive loops: a prolate trochoid, amplitude breathing a little, so it reads as joined 'e' and 'l' shapes
  const a = s * 3.2 * TAU
  const amp = xh * (0.5 + 0.35 * Math.sin(s * 11) ** 2 + (Math.floor(a / TAU) % 2 ? 0.5 : 0))
  out[0] = x0 + s * w * 0.9 - Math.sin(a) * xh * 0.55
  out[1] = yb - xh * 0.5 + Math.cos(a) * amp - xh * 0.5
}
const q = [0, 0]

export const handfont: Draw = (c, w, h, t, accent) => {
  const sw = w * 0.78, sh = h * 0.7, sx = (w - sw) / 2, sy = h * 0.07
  c.fillStyle = PAPER
  c.globalAlpha = 0.96
  c.fillRect(sx, sy, sw, sh)
  c.globalAlpha = 1
  const yb = sy + sh * 0.68, xh = sh * 0.22
  c.lineWidth = 1
  c.strokeStyle = PENCIL
  c.beginPath()
  c.moveTo(sx + 10, yb - xh * 2)
  c.lineTo(sx + sw - 10, yb - xh * 2)
  c.moveTo(sx + 10, yb - xh)
  c.lineTo(sx + sw - 10, yb - xh)
  c.stroke()
  c.strokeStyle = accent
  c.beginPath()
  c.moveTo(sx + 10, yb)
  c.lineTo(sx + sw - 10, yb)
  c.stroke()
  const u = loop(t, P, 6) / P
  const p = clamp(u / 0.7), out = clamp((u - 0.9) / 0.1)
  c.globalAlpha = 1 - out
  c.strokeStyle = INK
  c.lineCap = 'round'
  c.lineJoin = 'round'
  const n = Math.floor(160 * p)
  c.lineWidth = 2.2
  c.beginPath()
  for (let i = 0; i <= n; i++) {
    at((i / 160) * 1, sx + sw * 0.08, sw * 0.84, yb, xh, q)
    if (i) c.lineTo(q[0], q[1])
    else c.moveTo(q[0], q[1])
  }
  c.stroke()
  at(p, sx + sw * 0.08, sw * 0.84, yb, xh, q)
  c.fillStyle = accent
  c.beginPath()
  c.arc(q[0], q[1], 3.2, 0, TAU)
  c.fill()
  c.globalAlpha = 1
  c.lineCap = 'butt'
}
