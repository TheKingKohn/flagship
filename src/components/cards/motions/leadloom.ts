// leadloom: six states in outline, kind 0 (see six.ts).
import type { Draw } from './kit'
import { six } from './six'

export const leadloom: Draw = (c, w, h, t, accent) => six(c, w, h, t, accent, 0)
