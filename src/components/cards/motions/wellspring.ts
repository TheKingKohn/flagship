// Wellspring: three springs ripple across all six states; every tract the ring passes brightens, then settles back.
import { type Draw, INK, TAU, clamp, loop } from './kit'
import { layout, lattice, trace } from './sheet'

const L = lattice(0.075, 0.6, 11)
const RAMP = ['#244f55', '#2f7d80', '#4aaa95', '#94dcb5', '#f1fbe2']
const B = new Float32Array(24), X = new Float32Array(L.n), Y = new Float32Array(L.n), V = new Uint8Array(L.n)
const SPRING = [2, 5, 0], P = 4.2

export const wellspring: Draw = (c, w, h, t) => {
  layout(w, h, B)
  const u = loop(t, 12.6, 5.6), fade = 1 - clamp(u - 11.6)
  const R = w * 0.52, bw = w * 0.026, s = Math.max(1.5, Math.min(w, h) * 0.008)
  c.lineWidth = 1
  c.strokeStyle = INK
  c.globalAlpha = 0.18
  for (let k = 0; k < 6; k++) (trace(c, k, B), c.stroke())
  for (let i = 0; i < L.n; i++) {
    const k = L.s[i]
    X[i] = B[4 * k] + L.ux[i] * B[4 * k + 2]
    Y[i] = B[4 * k + 1] + L.uy[i] * B[4 * k + 3]
    let b = 0
    for (let q = 0; q < 3; q++) {
      const g = SPRING[q], d = Math.hypot(X[i] - B[4 * g] - B[4 * g + 2] * 0.5, Y[i] - B[4 * g + 1] - B[4 * g + 3] * 0.5)
      for (let n = 0; n < 2; n++) {
        const f = ((u + q * 1.4 - n * 0.75) / P) % 1, e = d - (f < 0 ? f + 1 : f) * R
        b += Math.exp(-(e * e) / (2 * bw * bw)) * (1 - d / R) ** 0.6 * (d < R ? 1 : 0)
      }
    }
    V[i] = Math.min(4, Math.floor(b * 4.2))
  }
  for (let lv = 0; lv < 5; lv++) {
    c.beginPath()
    for (let i = 0; i < L.n; i++) if (V[i] === lv) c.rect(X[i] - s / 2, Y[i] - s / 2, s, s)
    c.fillStyle = RAMP[lv]
    c.globalAlpha = lv ? fade : 0.7
    c.fill()
  }
  c.lineWidth = 1
  for (let q = 0; q < 3; q++) {
    const g = SPRING[q], x = B[4 * g] + B[4 * g + 2] * 0.5, y = B[4 * g + 1] + B[4 * g + 3] * 0.5
    c.strokeStyle = RAMP[3]
    c.beginPath()
    c.arc(x, y, s * 2.2, 0, TAU)
    c.globalAlpha = 0.8 * fade
    c.stroke()
    const f = ((u + q * 1.4) / P) % 1
    c.beginPath()
    c.arc(x, y, f * R, 0, TAU)
    c.globalAlpha = 0.16 * (1 - f) * fade
    c.stroke()
  }
  c.globalAlpha = 1
}
