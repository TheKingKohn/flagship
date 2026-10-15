// MemorySpace: a slow spiral of a few hundred points, tilted like the app's universe view, drifting round its core.
import { type Draw, INK, TAU, hash } from './kit'

const N = 320
const R = new Float32Array(N), A = new Float32Array(N), Z = new Float32Array(N)
for (let i = 0; i < N; i++) {
  R[i] = Math.sqrt((i + 0.5) / N)
  A[i] = (i % 3) * (TAU / 3) + R[i] * 4.2 + (hash(i, 1) - 0.5) * (0.5 - R[i] * 0.2)
  Z[i] = (hash(i, 2) - 0.5) * 0.16 * (1 - R[i] * 0.5)
}

export const memoryspace: Draw = (c, w, h, t, accent) => {
  const cx = w / 2, cy = h * 0.46
  const rx = Math.min(w * 0.44, h * 0.8), tilt = 0.42
  const spin = t * 0.07
  c.fillStyle = accent
  c.globalAlpha = 0.05
  for (let k = 5; k > 0; k--) {
    c.beginPath()
    c.ellipse(cx, cy, rx * 0.1 * k, rx * 0.1 * k * tilt, 0, 0, TAU)
    c.fill()
  }
  for (let i = 0; i < N; i++) {
    const a = A[i] + spin * (1.2 - R[i] * 0.6)
    const x = Math.cos(a) * R[i], y = Math.sin(a) * R[i]
    const near = 0.5 + 0.5 * y // the near side of the disc is a little brighter and larger
    const r = 0.6 + near * 0.9 + (R[i] < 0.25 ? 0.4 : 0)
    const bright = i % 11 === 0
    c.globalAlpha = (0.2 + near * 0.5) * (1 - R[i] * 0.35) * (0.8 + 0.2 * Math.sin(t * 0.8 + i))
    c.fillStyle = bright ? accent : INK
    c.beginPath()
    c.arc(cx + x * rx, cy + (y * tilt + Z[i]) * rx, bright ? r + 0.5 : r, 0, TAU)
    c.fill()
  }
  c.globalAlpha = 1
}
