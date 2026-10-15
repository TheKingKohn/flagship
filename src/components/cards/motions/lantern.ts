// Lantern: lights coming on across all six states, county by county, in two waves; each light cools down the ember ramp.
import { type Draw, INK, TAU, clamp, hash, loop } from './kit'
import { layout, lattice, trace } from './sheet'

const L = lattice(0.15, 0.55, 3)
const RAMP = ['#44362a', '#775232', '#b06a2c', '#dd8a2a', '#ffc361']
const B = new Float32Array(24), X = new Float32Array(L.n), Y = new Float32Array(L.n), V = new Uint8Array(L.n)
// a light ignites, flares, then settles to an ember
const pulse = (a: number) => (a < 0 ? 0 : a < 0.35 ? a / 0.35 : 0.3 + 0.7 * Math.exp(-(a - 0.35) * 0.8))

export const lantern: Draw = (c, w, h, t) => {
  layout(w, h, B)
  const u = loop(t, 10, 6.4), fade = 1 - clamp(u - 9.2)
  c.lineWidth = 1
  c.strokeStyle = INK
  c.globalAlpha = 0.2
  for (let k = 0; k < 6; k++) (trace(c, k, B), c.stroke())
  const r = Math.max(1.7, Math.min(w, h) * 0.012)
  for (let i = 0; i < L.n; i++) {
    const k = L.s[i]
    X[i] = B[4 * k] + L.ux[i] * B[4 * k + 2]
    Y[i] = B[4 * k + 1] + L.uy[i] * B[4 * k + 3]
    // a wave from the west, then one welling up from the Florida coast
    const t1 = (X[i] / w) * 3.4 + (Y[i] / h) * 0.9 + hash(i, 5) * 0.6
    const t2 = 4.8 + (Math.hypot(X[i] - w * 0.86, Y[i] - h * 0.72) / w) * 3.6 + hash(i, 6) * 0.6
    V[i] = Math.floor(Math.max(pulse(u - t1), pulse(u - t2)) * 4.99)
  }
  for (let lv = 0; lv < 5; lv++) {
    c.beginPath()
    for (let i = 0; i < L.n; i++) if (V[i] === lv) (c.moveTo(X[i] + r, Y[i]), c.arc(X[i], Y[i], r, 0, TAU))
    c.fillStyle = RAMP[lv]
    c.globalAlpha = lv ? fade : 0.6
    c.fill()
  }
  for (let pass = 0; pass < 2; pass++) {
    c.beginPath()
    for (let i = 0; i < L.n; i++) if (V[i] > 2 + pass) (c.moveTo(X[i] + r * 3, Y[i]), c.arc(X[i], Y[i], r * (pass ? 5.5 : 3), 0, TAU))
    c.fillStyle = RAMP[3 + pass]
    c.globalAlpha = (pass ? 0.07 : 0.1) * fade
    c.fill()
  }
  c.globalAlpha = 1
}
