// MemorySpace: the time spiral as a small galaxy: three arms of a few thousand points seen at a tilt, slowly turning,
// with a drifting camera for parallax, a few brighter memories that pulse, and a faint orbit path.
import { type Draw, TAU, hash } from './kit'

const N = 2800
const R = new Float32Array(N), A = new Float32Array(N), Z = new Float32Array(N), K = new Uint8Array(N)
for (let i = 0; i < N; i++) {
  const r = 0.06 + 0.94 * Math.sqrt(hash(i, 1)) ** 1.15
  R[i] = r
  A[i] = (i % 3) * (TAU / 3) + r * 3.3 + (hash(i, 2) - 0.5) * (0.16 / r + 0.18) * (hash(i, 7) < 0.2 ? 5 : 1)
  Z[i] = (hash(i, 3) - 0.5) * (0.04 + 0.2 * Math.exp(-r * 5))
  K[i] = r < 0.22 ? 3 : hash(i, 4) < 0.55 ? 0 : hash(i, 4) < 0.85 ? 1 : 2
}
const COL = ['#c9d6ff', '#9b86e0', '#5fc0d0', '#f2d28c']
const X = new Float32Array(N), Y = new Float32Array(N), D = new Float32Array(N)
const MEM = Array.from({ length: 12 }, (_, j) => j * 233 + 11)

export const memoryspace: Draw = (c, w, h, t) => {
  const cx = w / 2 + Math.sin(t * 0.09) * w * 0.02, cy = h * 0.5
  const S = Math.min(w * 0.4, h * 0.55), tilt = 0.52 + 0.08 * Math.sin(t * 0.11), ct = Math.cos(tilt), st = Math.sin(tilt)
  const spin = t * 0.06
  const g = c.createRadialGradient(cx, cy, 0, cx, cy, S * 0.5)
  g.addColorStop(0, 'rgba(242,210,140,.22)')
  g.addColorStop(0.5, 'rgba(107,60,149,.1)')
  g.addColorStop(1, 'rgba(58,75,168,0)')
  c.fillStyle = g
  c.fillRect(0, 0, w, h)
  for (let i = 0; i < N; i++) {
    const a = A[i] + spin * (1.5 - R[i] * 1.1), x = Math.cos(a) * R[i], z = Math.sin(a) * R[i], y = Z[i]
    const y2 = y * ct - z * st, z2 = y * st + z * ct, p = 1 / (1 - 0.3 * z2)
    X[i] = cx + (x + z2 * 0.05) * S * p
    Y[i] = cy + y2 * S * p
    D[i] = z2
  }
  // faint orbit path, in the plane of the disc
  c.strokeStyle = '#9fb3ff'
  c.lineWidth = 1
  c.globalAlpha = 0.16
  c.setLineDash([2, 5])
  c.beginPath()
  for (let j = 0; j <= 72; j++) {
    const a = (j / 72) * TAU, x = Math.cos(a) * 0.8, z = Math.sin(a) * 0.8, p = 1 / (1 - 0.3 * (z * ct))
    ;(j ? c.lineTo : c.moveTo).call(c, cx + (x + z * ct * 0.05) * S * p, cy - z * st * S * p)
  }
  c.stroke()
  c.setLineDash([])
  for (let pass = 0; pass < 2; pass++)
    for (let k = 0; k < 4; k++) {
      c.beginPath()
      for (let i = 0; i < N; i++) if (K[i] === k && D[i] > 0.1 === (pass === 1)) c.rect(X[i], Y[i], pass ? 1.6 : 1.1, pass ? 1.6 : 1.1)
      c.fillStyle = COL[k]
      c.globalAlpha = pass ? 0.8 : 0.42
      c.fill()
    }
  // brighter memories, each on its own slow pulse
  c.fillStyle = '#f2d28c'
  for (let j = 0; j < MEM.length; j++) {
    const i = MEM[j], q = 0.5 + 0.5 * Math.sin(t * 0.9 + j * 2.3)
    c.globalAlpha = 0.12 + 0.2 * q
    c.beginPath()
    c.arc(X[i], Y[i], 3 + 3 * q, 0, TAU)
    c.fill()
    c.globalAlpha = 0.9
    c.beginPath()
    c.arc(X[i], Y[i], 1.4, 0, TAU)
    c.fill()
  }
  c.globalAlpha = 1
}
