// Haggle: a price sparkline ticking forward, sage above the usual level and terracotta below, the usual line dashed.
import { type Draw, INK, TAU, clamp, ease } from './kit'

const UP = '#93d18b', DOWN = '#e8896a', DASH = [3, 5], NONE: number[] = []
const N = 46, TICK = 0.55
const X = (i: number, o: number, L: number, W: number) => L + ((i - o) / (N - 4)) * W
const price = (k: number) => 0.5 * Math.sin(k * 0.34) + 0.32 * Math.sin(k * 0.93 + 2) + 0.18 * Math.sin(k * 2.1 + 1)

export const haggle: Draw = (c, w, h, t, accent) => {
  const L = w * 0.08, W = w * 0.84, T = h * 0.14, H = h * 0.6, mid = T + H / 2
  const k = Math.floor(t / TICK), f = ease(clamp(t / TICK - k))
  const o = k + f - N + 4, hh = H * 0.5
  c.lineWidth = 1
  c.strokeStyle = INK
  c.globalAlpha = 0.45
  c.setLineDash(DASH)
  c.beginPath()
  c.moveTo(L, mid)
  c.lineTo(L + W, mid)
  c.stroke()
  c.setLineDash(NONE)
  c.globalAlpha = 0.08
  c.beginPath()
  for (let j = 1; j < 4; j++) (c.moveTo(L, T + (H * j) / 4), c.lineTo(L + W, T + (H * j) / 4))
  c.stroke()
  c.lineJoin = 'round'
  c.lineWidth = 2
  let px = 0, py = 0
  for (let i = k - N + 4; i <= k + 1; i++) {
    // the newest segment grows into place
    const e = i === k + 1 ? f : 1, a = price(i - 1), b = price(i - 1) + (price(i) - price(i - 1)) * e
    const x0 = X(i - 1, o, L, W), x1 = x0 + (X(i, o, L, W) - x0) * e
    if (x1 < L - 1 || x0 > L + W) continue
    c.strokeStyle = (a + b) / 2 > 0 ? UP : DOWN
    c.globalAlpha = 0.95 * clamp((x1 - L) / 20)
    c.beginPath()
    c.moveTo(Math.max(x0, L), mid - a * hh)
    c.lineTo(x1, mid - b * hh)
    c.stroke()
    px = x1
    py = mid - b * hh
  }
  c.fillStyle = accent
  c.globalAlpha = 1
  c.beginPath()
  c.arc(px, py, 3.4, 0, TAU)
  c.fill()
  c.globalAlpha = 0.35 * (1 - f)
  c.beginPath()
  c.arc(px, py, 3.4 + f * 9, 0, TAU)
  c.strokeStyle = accent
  c.stroke()
  c.globalAlpha = 1
}
