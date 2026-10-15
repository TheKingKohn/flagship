// A state outline shaded county by county, drawn from map-data.ts. Drawing allocates nothing.
import { INK, TAU, clamp, ease } from './kit'
import type { CountyMap } from './map-data'

const GAP = 3.2
function quad(c: CanvasRenderingContext2D, m: CountyMap, q: number, x0: number, y0: number, s: number, move: boolean) {
  const o = Math.floor(q / m.nx) * (m.nx + 1) + (q % m.nx), n = m.nx + 1
  for (let k = 0; k < 4; k++) {
    const z = o + (k === 1 ? 1 : k === 2 ? n + 1 : k === 3 ? n : 0), x = x0 + m.vx[z] * s, y = y0 + m.vy[z] * s
    if (k || !move) c.lineTo(x, y)
    else c.moveTo(x, y)
  }
  c.closePath()
}
function outline(c: CanvasRenderingContext2D, m: CountyMap, x0: number, y0: number, s: number) {
  c.beginPath()
  for (let i = 0; i < m.px.length; i++) {
    if (i) c.lineTo(x0 + m.px[i] * s, y0 + m.py[i] * s)
    else c.moveTo(x0 + m.px[i] * s, y0 + m.py[i] * s)
  }
  c.closePath()
}
/** u: seconds into a 10 s cycle (reveal to 4, hold, fade at 9). */
export function drawMap(c: CanvasRenderingContext2D, w: number, h: number, u: number, m: CountyMap, ramp: string[], accent: string) {
  const s = Math.min((w * 0.78) / m.ar, h * 0.8)
  const x0 = (w - s * m.ar) / 2, y0 = h * 0.06 + (h * 0.78 - s) / 2, fade = 1 - clamp(u - 9), { nx, ny } = m
  c.save()
  outline(c, m, x0, y0, s)
  c.clip()
  c.fillStyle = ramp[0]
  c.fillRect(0, 0, w, h)
  for (let q = 0; q < nx * ny; q++) {
    const al = ease(clamp((u - 0.2 - m.dl[q] * GAP) / 0.7)) * fade
    if (al <= 0 || !m.cls[q]) continue
    c.globalAlpha = al
    c.fillStyle = ramp[m.cls[q]]
    c.beginPath()
    quad(c, m, q, x0, y0, s, false)
    c.fill()
  }
  c.globalAlpha = 1
  c.strokeStyle = 'rgba(8,8,8,.6)'
  c.lineWidth = 1
  c.beginPath()
  for (let q = 0; q < nx * ny; q++) quad(c, m, q, x0, y0, s, true)
  c.stroke()
  const f = clamp((u - 0.2) / GAP)
  if (f > 0 && f < 1) {
    const ly = y0 + (1 - f * m.top) * s
    c.strokeStyle = accent
    c.globalAlpha = 0.7 * Math.sin(f * Math.PI)
    c.beginPath()
    if (m.line) (c.moveTo(0, ly), c.lineTo(w, ly))
    else c.arc(x0 + m.ox * m.ar * s, y0 + m.oy * s, f * m.top * s, 0, TAU)
    c.stroke()
    c.globalAlpha = 1
  }
  c.restore()
  c.strokeStyle = INK
  c.lineWidth = 1.6
  c.globalAlpha = fade * clamp((u - 4) * 2) * (0.75 + 0.25 * Math.sin(u * 2.4))
  c.beginPath()
  quad(c, m, m.sel, x0, y0, s, true)
  c.stroke()
  c.globalAlpha = 0.4
  c.lineWidth = 1
  outline(c, m, x0, y0, s)
  c.stroke()
  c.globalAlpha = 1
}
