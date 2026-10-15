// Granary: a harvest grid. Each state fills from the bottom like a bin, grain landing pale and settling into its brass tier.
import { type Draw, INK, clamp, hash, loop } from './kit'
import { layout, lattice, trace } from './sheet'

const L = lattice(0.095, 0, 5)
const RAMP = ['#4a4129', '#7a6840', '#a58a4f', '#d0b26a', '#f6e6b8']
const B = new Float32Array(24), X = new Float32Array(L.n), Y = new Float32Array(L.n), Q = new Float32Array(L.n), V = new Uint8Array(L.n)
const P = 10

export const granary: Draw = (c, w, h, t, accent) => {
  layout(w, h, B)
  const u = loop(t, P, 7.4), fade = 1 - clamp(u - 9.2)
  c.lineWidth = 1
  c.strokeStyle = INK
  c.globalAlpha = 0.2
  for (let k = 0; k < 6; k++) (trace(c, k, B), c.stroke())
  for (let i = 0; i < L.n; i++) {
    const k = L.s[i]
    X[i] = B[4 * k] + L.ux[i] * B[4 * k + 2]
    Y[i] = B[4 * k + 1] + L.uy[i] * B[4 * k + 3]
    Q[i] = B[4 * k + 3] * 0.095 * 0.78
    // pour time: the bottom of the bin first, a little scatter within a row
    const age = u - (0.3 + k * 0.5 + (1 - L.uy[i]) * 3.2 + hash(i, 2) * 0.35)
    V[i] = age < 0 ? 5 : age < 0.5 ? 4 : age < 1.1 ? (L.v[i] + 4) >> 1 : L.v[i]
  }
  for (let lv = 0; lv < 6; lv++) {
    c.beginPath()
    for (let i = 0; i < L.n; i++) if (V[i] === lv) c.rect(X[i] - Q[i] / 2, Y[i] - Q[i] / 2, Q[i], Q[i])
    c.fillStyle = lv === 5 ? INK : RAMP[lv]
    c.globalAlpha = lv === 5 ? 0.12 : fade
    c.fill()
  }
  c.strokeStyle = accent
  c.lineWidth = 1.5
  c.beginPath()
  for (let k = 0; k < 6; k++) {
    const f = clamp((u - 0.3 - k * 0.5) / 3.2)
    if (f > 0 && f < 1) (c.moveTo(B[4 * k], B[4 * k + 1] + (1 - f) * B[4 * k + 3]), c.lineTo(B[4 * k] + B[4 * k + 2], B[4 * k + 1] + (1 - f) * B[4 * k + 3]))
  }
  c.globalAlpha = 0.8
  c.stroke()
  c.globalAlpha = 1
}
