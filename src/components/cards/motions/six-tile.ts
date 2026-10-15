// One state of the six-state sheet: its outline, a thread through its records, the records themselves lighting up.
import { INK, TAU } from './kit'
import { ASP, DS, DT, DX, DY, NS, OUT } from './six-data'

/** (px, py) is the top left of the state's box, sc its height; u the cycle time, dim the dot alpha, kind as in six.ts. */
export function tile(c: CanvasRenderingContext2D, s: number, px: number, py: number, sc: number, u: number, accent: string, kind: number, dim: number, live: number) {
  const o = OUT[s], wd = ASP[s] * sc
  c.beginPath()
  for (let i = 0; i < o.length; i += 2) {
    if (i) c.lineTo(px + o[i] * wd, py + o[i + 1] * sc)
    else c.moveTo(px + o[i] * wd, py + o[i + 1] * sc)
  }
  c.closePath()
  c.fillStyle = accent
  c.globalAlpha = kind === 1 ? 0.03 : 0.07
  c.fill()
  c.strokeStyle = INK
  c.globalAlpha = kind === 1 ? 0.14 : 0.3
  c.stroke()
  for (let pass = 0; pass < 3; pass++) {
    c.beginPath()
    for (let i = 0; i < NS; i++) {
      const age = u - DT[i] * 8.5, x = px + DX[i] * wd, y = py + DY[i] * sc
      if (DS[i] !== s || age < 0) continue
      if (pass === 0) {
        if (kind === 0 && i && DS[i - 1] === s && age > 0.5) (c.moveTo(px + DX[i - 1] * wd, py + DY[i - 1] * sc), c.lineTo(x, y))
      } else if (pass === 2) {
        if (age < 0.9 && kind !== 1) (c.moveTo(x + 2 + age * 7, y), c.arc(x, y, 2 + age * 7, 0, TAU))
      } else if (kind === 2) {
        c.rect(x - 2, y - 0.5, 4, 3)
        c.moveTo(x - 3, y - 0.5)
        c.lineTo(x, y - 3.6)
        c.lineTo(x + 3, y - 0.5)
      } else {
        c.moveTo(x + 2, y)
        c.arc(x, y, 2, 0, TAU)
      }
    }
    if (pass === 1) {
      c.fillStyle = accent
      c.globalAlpha = 0.95 * live * dim
      c.fill()
    } else {
      c.strokeStyle = accent
      c.globalAlpha = (pass ? 0.35 : 0.18) * live
      c.stroke()
    }
  }
}
