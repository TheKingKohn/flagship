// Pulse Cam: a pulse trace scrolling left at 72 beats a minute, the newest beat glowing, with the reading beside it.
import { type Draw, INK, MONO, TAU, digits } from './kit'

const BPM = 72, BEAT = 60 / BPM, SPAN = 4.2

// one heartbeat shape over a phase in [0, 1)
const beat = (u: number) =>
  u < 0.08 ? 0.12 * Math.sin((u / 0.08) * Math.PI) :
  u < 0.16 ? 0 :
  u < 0.19 ? -0.25 * ((u - 0.16) / 0.03) :
  u < 0.23 ? -0.25 + 1.25 * ((u - 0.19) / 0.04) :
  u < 0.28 ? 1 - 1.35 * ((u - 0.23) / 0.05) :
  u < 0.32 ? -0.35 + 0.35 * ((u - 0.28) / 0.04) :
  u < 0.5 ? 0.22 * Math.sin(((u - 0.32) / 0.18) * Math.PI) : 0

export const pulseCam: Draw = (c, w, h, t, accent) => {
  const L = w * 0.08, W = w * 0.6, mid = h * 0.5, amp = h * 0.26, n = 120
  c.lineWidth = 2
  c.lineJoin = 'round'
  c.strokeStyle = accent
  let px = 0, py = 0
  for (let i = 0; i <= n; i++) {
    const f = i / n, tt = t - SPAN * (1 - f), u = ((tt / BEAT) % 1 + 1) % 1
    const x = L + W * f, y = mid - beat(u) * amp
    c.globalAlpha = 0.15 + 0.85 * f
    if (i) {
      c.beginPath()
      c.moveTo(px, py)
      c.lineTo(x, y)
      c.stroke()
    }
    px = x
    py = y
  }
  const u = ((t / BEAT) % 1 + 1) % 1, glow = Math.max(0, 1 - u * 3)
  c.globalAlpha = 1
  c.fillStyle = accent
  c.beginPath()
  c.arc(px, py, 3.4, 0, TAU)
  c.fill()
  const s = Math.round(h * 0.2), x0 = L + W + w * 0.1
  c.globalAlpha = 0.25 + 0.5 * glow
  c.beginPath()
  c.arc(x0 + s * 0.6, mid - s * 0.9, s * (0.16 + 0.08 * glow), 0, TAU)
  c.fill()
  c.globalAlpha = 1
  c.fillStyle = INK
  c.font = `600 ${s}px ${MONO}`
  c.textAlign = 'left'
  c.textBaseline = 'alphabetic'
  digits(c, BPM, x0 + s * 0.62, mid + s * 0.35, s * 0.62, 2)
  c.globalAlpha = 0.55
  c.font = `${Math.round(s * 0.36)}px ${MONO}`
  c.fillText('bpm', x0 + s * 0.05, mid + s * 0.95)
  c.globalAlpha = 1
}
