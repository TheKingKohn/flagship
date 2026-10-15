// The six states as a 3 x 2 sheet, with county-sized points on a lattice inside each outline. Shared by Lantern, Wellspring and Granary.
import { hash } from './kit'
import { ASP, OUT } from './six-data'

// grid cell of each state (WA UT OH PA NC FL): WA OH PA above, UT NC FL below
const CELL = [0, 3, 1, 2, 4, 5]

export type Lattice = { n: number; s: Uint8Array; ux: Float32Array; uy: Float32Array; v: Uint8Array }

const inside = (o: Float32Array, x: number, y: number) => {
  let r = false
  for (let i = 0, j = o.length - 2; i < o.length; j = i, i += 2) if (o[i + 1] > y !== o[j + 1] > y && x < ((o[j] - o[i]) * (y - o[i + 1])) / (o[j + 1] - o[i + 1]) + o[i]) r = !r
  return r
}

/** Points on a lattice whose rows are `pitch` of a state's height apart, jittered by `jit` of a cell; v is a smooth 0 to 4 value per point. */
export function lattice(pitch: number, jit: number, seed: number): Lattice {
  const s: number[] = [], ux: number[] = [], uy: number[] = [], v: number[] = []
  for (let k = 0; k < 6; k++)
    for (let j = 0; j < 1 / pitch; j++)
      for (let i = 0; i < ASP[k] / pitch; i++) {
        const q = j * 97 + i * 13 + k * 7 + seed
        const x = ((i + 0.5 + (hash(q, 1) - 0.5) * jit) * pitch) / ASP[k], y = (j + 0.5 + (hash(q, 2) - 0.5) * jit) * pitch
        if (!inside(OUT[k], x, y)) continue
        s.push(k), ux.push(x), uy.push(y)
        v.push(Math.max(0, Math.min(4, Math.floor(2 + 2.4 * Math.sin(x * 5 + k * 2 + seed) * Math.cos(y * 4 + k) + (hash(q, 3) - 0.5) * 1.2))))
      }
  return { n: s.length, s: Uint8Array.from(s), ux: Float32Array.from(ux), uy: Float32Array.from(uy), v: Uint8Array.from(v) }
}

/** Fills out[4k..4k+3] with [left, top, width, height] of state k on a w x h window: margins about 6%, clear of the mark in the lower left. */
export function layout(w: number, h: number, out: Float32Array) {
  const tw = (w * 0.88) / 3, th = (h * 0.74) / 2
  for (let k = 0; k < 6; k++) {
    const g = CELL[k], sc = Math.min((tw * 0.84) / ASP[k], th * 0.84)
    out[4 * k + 2] = ASP[k] * sc
    out[4 * k + 3] = sc
    out[4 * k] = w * 0.06 + tw * ((g % 3) + 0.5) - (ASP[k] * sc) / 2
    out[4 * k + 1] = h * 0.07 + th * (Math.floor(g / 3) + 0.5) - sc / 2
  }
}

/** The outline of state k as the current path. */
export function trace(c: CanvasRenderingContext2D, k: number, b: Float32Array) {
  const o = OUT[k], x = b[4 * k], y = b[4 * k + 1], w = b[4 * k + 2], h = b[4 * k + 3]
  c.beginPath()
  for (let i = 0; i < o.length; i += 2) {
    if (i) c.lineTo(x + o[i] * w, y + o[i + 1] * h)
    else c.moveTo(x + o[i] * w, y + o[i + 1] * h)
  }
  c.closePath()
}
