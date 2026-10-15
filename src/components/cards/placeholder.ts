import type { MotionFn } from './motions'

const rgb = (hex: string) => {
  const n = parseInt(hex.replace('#', '').padEnd(6, '0').slice(0, 6), 16)
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`
}

/** Stand-in for a card whose motion is not in the registry yet: two slow accent-tinted lights drifting. */
export const placeholder: MotionFn = (c, w, h, t, accent) => {
  const k = rgb(accent)
  const r = Math.max(w, h) * 0.7
  const lights: [number, number, number, number][] = [
    [0.5 + 0.28 * Math.sin(t * 0.21), 0.5 + 0.2 * Math.cos(t * 0.17), 0.26, 0],
    [0.5 + 0.3 * Math.cos(t * 0.13 + 2), 0.5 + 0.22 * Math.sin(t * 0.19 + 1), 0.12, 1],
  ]
  for (const [x, y, a] of lights) {
    const g = c.createRadialGradient(w * x, h * y, 0, w * x, h * y, r)
    g.addColorStop(0, `rgba(${k},${a})`)
    g.addColorStop(1, `rgba(${k},0)`)
    c.fillStyle = g
    c.fillRect(0, 0, w, h)
  }
}
