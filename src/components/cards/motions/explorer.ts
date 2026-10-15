// explorer: six states in outline, kind 3 (see six.ts).
import type { Draw } from './kit'
import { six } from './six'

export const explorer: Draw = (c, w, h, t, accent) => six(c, w, h, t, accent, 3)
