// homeloom: six states in outline, kind 2 (see six.ts).
import type { Draw } from './kit'
import { six } from './six'

export const homeloom: Draw = (c, w, h, t, accent) => six(c, w, h, t, accent, 2)
