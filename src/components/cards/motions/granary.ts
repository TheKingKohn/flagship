// Granary: Pennsylvania shaded county by county in brass, filling from the bottom like grain in a bin.
import { type Draw, loop } from './kit'
import { drawMap } from './map'
import { makeMap } from './map-data'

const PA = [-80.52, 39.72, -80.52, 41.98, -79.76, 42.27, -79.76, 42, -75.36, 42, -75.05, 41.45, -74.7, 41.36, -75.14, 40.97, -75.2, 40.58, -74.76, 40.2, -74.95, 40.1, -75.14, 39.88, -75.4, 39.8, -75.78, 39.72]
const RAMP = ['#3b3425', '#6a5a38', '#967f48', '#c8aa62', '#f6e6b8']
const map = makeMap(PA, 14, 7, 5, 0.5, 1.05, 0, 1)

export const granary: Draw = (c, w, h, t, accent) => drawMap(c, w, h, loop(t, 10, 6.2), map, RAMP, accent)
