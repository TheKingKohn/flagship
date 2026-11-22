// Wind Tunnel: streamlines bending around a cylinder, dashes riding the flow, and a wake that wavers behind it.
import { type Draw, INK, TAU, clamp } from './kit'

const LINES = [-0.84, -0.62, -0.42, -0.26, -0.13, 0.13, 0.26, 0.42, 0.62, 0.84], STEPS = 56
const DASH = [7, 9], NONE: number[] = []

export const windTunnel: Draw = (c, w, h, t, accent) => {
  const cx = w * 0.34, cy = h * 0.5, R = h * 0.16, R2 = R * R, ds = (w * 1.05) / STEPS
  c.lineWidth = 1.4
  c.setLineDash(DASH)
  c.lineDashOffset = -t * 34
  for (let k = 0; k < LINES.length; k++) {
    let x = -cx, y = LINES[k] * h * 0.5
    c.globalAlpha = 0.35 + 0.5 * (1 - Math.abs(LINES[k]))
    c.strokeStyle = Math.abs(LINES[k]) < 0.3 ? accent : INK
    c.beginPath()
    for (let i = 0; i <= STEPS; i++) {
      const behind = clamp((x - R) / (w * 0.5)), near = Math.exp(-Math.abs(y) / (R * 1.6))
      const wob = Math.sin(x * 0.05 - t * 3.2) * R * 0.45 * behind * near
      if (i) c.lineTo(cx + x, cy + y + wob)
      else c.moveTo(cx + x, cy + y + wob)
      const r2 = x * x + y * y, r4 = r2 * r2 + 1e-6
      const u = 1 - (R2 * (x * x - y * y)) / r4, v = -(2 * R2 * x * y) / r4, s = Math.hypot(u, v) + 1e-6
      x += (u / s) * ds
      y += (v / s) * ds
    }
    c.stroke()
  }
  c.setLineDash(NONE)
  c.globalAlpha = 1
  c.fillStyle = '#0d1114'
  c.beginPath()
  c.arc(cx, cy, R, 0, TAU)
  c.fill()
  c.strokeStyle = accent
  c.lineWidth = 2
  c.stroke()
}
