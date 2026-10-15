// The motion registry, keyed by project slug. One entry per app card.
//
// A motion is a pure function of time: it draws one frame of the app's signature motion on a canvas
// of w x h CSS pixels (the context is already scaled for the device) at t seconds, using `accent`
// as its colour. It keeps no state, so the reduced-motion still frame is just one value of t.
//
// To add a motion: put `<slug>.ts` next to this file, import it here and add one line to `motions`
// (and, if the frame to hold under reduced motion is not t = STILL, one line to `stills`).
// A slug with no entry here still renders: the card falls back to a quiet gradient drift.
import { fluxread, patchwork, roofline, type Box, type Motion } from '../legacy'

export type MotionFn = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number, accent: string) => void

/** The default time, in seconds, of the frame drawn under prefers-reduced-motion. */
export const STILL = 4

// The pass-1 motions compose inside a box; give them the window minus a small margin.
const boxed =
  (m: Motion): MotionFn =>
  (c, w, h, t, accent) => {
    const b: Box = { x: w * 0.06, y: h * 0.08, w: w * 0.88, h: h * 0.84 }
    m.draw(c, w, h, t, b, accent)
  }

export const motions: Record<string, MotionFn> = {
  roofline: boxed(roofline),
  patchwork: boxed(patchwork),
  fluxread: boxed(fluxread),
}

/** Reduced-motion frame per slug, in seconds. Missing slugs use STILL. */
export const stills: Record<string, number> = {
  roofline: roofline.still,
  patchwork: patchwork.still,
  fluxread: fluxread.still,
}
