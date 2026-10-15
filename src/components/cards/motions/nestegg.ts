// nestegg: six states in outline, kind 1 (see six.ts).
import type { Draw } from './kit'
import { six } from './six'

export const nestegg: Draw = (c, w, h, t, accent) => six(c, w, h, t, accent, 1, 6512300, 6)
