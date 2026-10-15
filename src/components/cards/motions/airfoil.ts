// Airfoil Lab: streamlines bending round a cambered wing section at a few degrees of attack, dashes carried along them.
import { type Draw, INK, TAU } from './kit'

const PSI = [0.32, 0.75, 1.3, 2.1, 3.2, 4.8]
const STEPS = 34
const DASH = [4, 11]
const NONE: number[] = []

export const airfoil: Draw = (c, w, h, t, accent) => {
  const chord = Math.min(w * 0.5, h * 0.95), a = 0.12
  const cx = w / 2, cy = h * 0.46
  const sx = chord / 2, sy = chord * 0.12, ca = Math.cos(a), sa = Math.sin(a)
  c.save()
  c.beginPath()
  c.rect(0, 0, w, h)
  c.clip()
  c.lineWidth = 1.2
  for (let j = 0; j < PSI.length * 2; j++) {
    const up = j % 2 ? -1 : 1, psi = PSI[j >> 1]
    c.beginPath()
    for (let i = 0; i <= STEPS; i++) {
      // flow past a unit cylinder, stretched into a foil: r from the stream function, one point per angle
      const th = 0.1 + (i / STEPS) * (Math.PI - 0.2)
      const k = psi / Math.sin(th), r = (k + Math.sqrt(k * k + 4)) / 2
      const x = -Math.cos(th) * r * sx, y = -up * Math.sin(th) * r * sy
      const px = cx + x * ca - y * sa, py = cy + x * sa + y * ca
      if (i) c.lineTo(px, py)
      else c.moveTo(px, py)
    }
    c.strokeStyle = accent
    c.globalAlpha = 0.14 + 0.1 / (1 + psi)
    c.setLineDash(NONE)
    c.stroke()
    c.globalAlpha = 0.8 / (1 + psi * 0.35)
    c.setLineDash(DASH)
    c.lineDashOffset = -t * (22 + (up > 0 ? 10 : 0)) * (1.15 - psi * 0.08)
    c.stroke()
  }
  c.setLineDash(NONE)
  // the section: NACA 4412-ish, drawn over the streamlines
  c.globalAlpha = 1
  c.beginPath()
  for (let i = 0; i < 40; i++) {
    const s = i < 20 ? i / 19 : 1 - (i - 20) / 19
    const x = s * s, yt = 0.6 * (0.2969 * Math.sqrt(x) - 0.126 * x - 0.3516 * x * x + 0.2843 * x ** 3 - 0.1015 * x ** 4)
    const yc = x < 0.4 ? (0.04 / 0.16) * (0.8 * x - x * x) : (0.04 / 0.36) * (0.2 + 0.8 * x - x * x)
    const X = (x - 0.5) * chord, Y = (0.02 - yc - (i < 20 ? yt : -yt)) * chord
    const px = cx + X * ca - Y * sa, py = cy + X * sa + Y * ca
    if (i) c.lineTo(px, py)
    else c.moveTo(px, py)
  }
  c.closePath()
  c.fillStyle = accent
  c.globalAlpha = 0.16
  c.fill()
  c.globalAlpha = 0.9
  c.strokeStyle = INK
  c.lineWidth = 1.4
  c.stroke()
  c.globalAlpha = 1
  c.restore()
}
