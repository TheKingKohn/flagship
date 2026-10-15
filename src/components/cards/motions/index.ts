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
import { airfoil } from './airfoil'
import { circuitLab } from './circuit-lab'
import { donos } from './donos'
import { explorer } from './explorer'
import { granary } from './granary'
import { haggle } from './haggle'
import { handfont } from './handfont'
import { homeloom } from './homeloom'
import { lantern } from './lantern'
import { leadloom } from './leadloom'
import { memoryspace } from './memoryspace'
import { nestegg } from './nestegg'
import { skyLab } from './sky-lab'
import { streetTimeMachine } from './street-time-machine'
import { votervault } from './votervault'
import { wellspring } from './wellspring'

export type MotionFn = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number, accent: string) => void

/** The default time, in seconds, of the frame drawn under prefers-reduced-motion. */
export const STILL = 4

// The pass-1 motions compose inside a box (fractions of the window: x, y, w, h); the mark covers the window's lower-left corner.
const boxed =
  (m: Motion, [x, y, bw, bh]: [number, number, number, number] = [0.06, 0.08, 0.88, 0.84]): MotionFn =>
  (c, w, h, t, accent) => {
    const b: Box = { x: w * x, y: h * y, w: w * bw, h: h * bh }
    m.draw(c, w, h, t, b, accent)
  }

export const motions: Record<string, MotionFn> = {
  roofline: boxed(roofline, [0.06, 0.02, 0.88, 0.96]),
  patchwork: boxed(patchwork),
  fluxread: boxed(fluxread, [0.06, 0.06, 0.88, 0.8]),
  airfoil,
  'circuit-lab': circuitLab,
  donos,
  explorer,
  granary,
  haggle,
  handfont,
  homeloom,
  lantern,
  leadloom,
  memoryspace,
  nestegg,
  'sky-lab': skyLab,
  'street-time-machine': streetTimeMachine,
  votervault,
  wellspring,
}

/** Reduced-motion frame per slug, in seconds. Missing slugs use STILL. */
export const stills: Record<string, number> = {
  roofline: roofline.still,
  patchwork: patchwork.still,
  fluxread: fluxread.still,
}
