// Cuts a state outline into county-like cells, once at load.
import { hash, TAU } from './kit'

export type CountyMap = {
  ar: number
  px: Float32Array
  py: Float32Array
  nx: number
  ny: number
  vx: Float32Array
  vy: Float32Array
  cls: Uint8Array
  dl: Float32Array
  sel: number
  line: boolean
  ox: number
  oy: number
  top: number
}

/** poly: lon, lat pairs. The wave starts at (ox, oy); kx = 0 makes it a rising level. */
export function makeMap(poly: number[], nx: number, ny: number, seed: number, ox: number, oy: number, kx: number, ky: number): CountyMap {
  const n = poly.length / 2
  let a = 1e9, b = -1e9, d = 1e9, e = -1e9
  for (let i = 0; i < n; i++) {
    a = Math.min(a, poly[2 * i]), b = Math.max(b, poly[2 * i]), d = Math.min(d, poly[2 * i + 1]), e = Math.max(e, poly[2 * i + 1])
  }
  const ar = ((b - a) * Math.cos(((d + e) / 2) * (TAU / 360))) / (e - d)
  const px = new Float32Array(n), py = new Float32Array(n)
  for (let i = 0; i < n; i++) (px[i] = ((poly[2 * i] - a) / (b - a)) * ar), (py[i] = (e - poly[2 * i + 1]) / (e - d))
  const V = (nx + 1) * (ny + 1)
  const vx = new Float32Array(V), vy = new Float32Array(V)
  for (let j = 0; j <= ny; j++)
    for (let i = 0; i <= nx; i++) {
      const o = j * (nx + 1) + i, edge = i === 0 || j === 0 || i === nx || j === ny
      vx[o] = ((i + (edge ? 0 : hash(o, seed) - 0.5) * 0.8) / nx) * ar
      vy[o] = (j + (edge ? 0 : hash(o, seed + 9) - 0.5) * 0.8) / ny
    }
  const C = nx * ny, cls = new Uint8Array(C), dl = new Float32Array(C), val = new Float32Array(C)
  let sel = 0, best = 9, top = 0
  for (let q = 0; q < C; q++) {
    const o = Math.floor(q / nx) * (nx + 1) + (q % nx)
    const cx = (vx[o] + vx[o + nx + 2]) / 2, cy = (vy[o] + vy[o + nx + 2]) / 2
    val[q] = Math.sin(cx * 4.1 + seed) * Math.cos(cy * 3.3 - seed) * 0.5 + hash(q, seed + 3)
    dl[q] = Math.hypot((cx - ox * ar) * kx, (cy - oy) * ky)
    top = Math.max(top, dl[q])
    let inside = false
    for (let i = 0, j = n - 1; i < n; j = i++)
      if (py[i] > cy !== py[j] > cy && cx < ((px[j] - px[i]) * (cy - py[i])) / (py[j] - py[i]) + px[i]) inside = !inside
    const m = Math.hypot(cx - ar * 0.55, cy - 0.45)
    if (inside && m < best) (best = m), (sel = q)
  }
  const order = Array.from(val.keys()).sort((p, q) => val[p] - val[q])
  order.forEach((q, r) => (cls[q] = Math.floor((r / C) * 5)))
  for (let q = 0; q < C; q++) dl[q] /= top
  return { ar, px, py, nx, ny, vx, vy, cls, dl, sel, line: kx === 0, ox, oy, top }
}
