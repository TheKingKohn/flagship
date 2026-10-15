// Six state outlines (WA UT OH PA NC FL) and lots of record dots inside them, in each state's own unit box. Built once at load.
import { hash } from './kit'
import { S } from './states'

const PER = [16, 12, 18, 18, 20, 20]

/** Aspect (width over height) of each state's box; outlines and dots are in [0,1] x [0,1] of it. */
export const ASP = new Float32Array(6)
export const OUT: Float32Array[] = []
export const NS = PER.reduce((a, b) => a + b, 0)
export const DX = new Float32Array(NS), DY = new Float32Array(NS), DS = new Uint8Array(NS), DT = new Float32Array(NS)

let nd = 0
S.forEach((p, s) => {
  const lo = [1e9, 1e9, -1e9, -1e9]
  for (let i = 0; i < p.length; i += 2) (lo[0] = Math.min(lo[0], p[i])), (lo[1] = Math.min(lo[1], p[i + 1])), (lo[2] = Math.max(lo[2], p[i])), (lo[3] = Math.max(lo[3], p[i + 1]))
  const nx = (x: number) => (x - lo[0]) / (lo[2] - lo[0]), ny = (y: number) => (lo[3] - y) / (lo[3] - lo[1])
  ASP[s] = ((lo[2] - lo[0]) * Math.cos(((lo[1] + lo[3]) / 2) * (Math.PI / 180))) / (lo[3] - lo[1])
  OUT.push(Float32Array.from(p, (v, i) => (i % 2 ? ny(v) : nx(v))))
  for (let first = nd, k = 0; nd - first < PER[s]; k++) {
    const x = lo[0] + hash(k, 31 + s) * (lo[2] - lo[0]), y = lo[1] + hash(k, 41 + s) * (lo[3] - lo[1])
    let inside = false
    for (let i = 0, j = p.length - 2; i < p.length; j = i, i += 2)
      if (p[i + 1] > y !== p[j + 1] > y && x < ((p[j] - p[i]) * (y - p[i + 1])) / (p[j + 1] - p[i + 1]) + p[i]) inside = !inside
    if (!inside) continue
    ;(DX[nd] = nx(x)), (DY[nd] = ny(y)), (DS[nd] = s), (DT[nd] = hash(nd, 33))
    nd++
  }
})
