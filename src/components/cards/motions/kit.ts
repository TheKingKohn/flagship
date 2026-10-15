// Shared bits for the signature motions: no state, nothing allocated per frame.
export type Draw = (c: CanvasRenderingContext2D, w: number, h: number, t: number, accent: string) => void

export const TAU = Math.PI * 2
export const clamp = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x)
export const ease = (x: number) => x * x * (3 - 2 * x)
/** Deterministic noise in [0, 1) from two integers. */
export const hash = (a: number, b = 0) => {
  const s = Math.sin(a * 127.1 + b * 311.7 + 1.7) * 43758.5453
  return s - Math.floor(s)
}
export const INK = '#e9e4d8'
export const HAIR = 'rgba(233,228,216,.1)'
export const MONO = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace'
const D = '0123456789'

/** Seconds into a cycle of `p`, arranged so the default still frame (t = 4) falls at `hero`. */
export const loop = (t: number, p: number, hero: number) => (((t - 4 + hero) % p) + p) % p

/** Draws a non-negative integer right-aligned at x (font already set), at least `min` digits, a gap every `group`. */
export function digits(c: CanvasRenderingContext2D, n: number, x: number, y: number, adv: number, min = 1, group = 0) {
  let v = Math.floor(n)
  for (let k = 0; k < min || v > 0; k++) {
    if (group && k && k % group === 0) x -= adv * 0.5
    c.fillText(D[v % 10], x, y)
    x -= adv
    v = Math.floor(v / 10)
  }
}
