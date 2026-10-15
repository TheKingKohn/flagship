// Wellspring: Ohio shaded county by county in mint, spreading like ripples from one spring.
import { type Draw, loop } from './kit'
import { drawMap } from './map'
import { makeMap } from './map-data'

const OH = [-84.81, 41.7, -83.45, 41.73, -82.7, 41.45, -81.7, 41.5, -80.52, 41.98, -80.52, 40.64, -80.8, 39.95, -81.2, 39.4, -81.75, 39.1, -82.2, 38.6, -82.6, 38.42, -83.7, 38.63, -84.5, 39.1, -84.82, 39.1]
const RAMP = ['#244f55', '#2f7d80', '#4aaa95', '#94dcb5', '#f1fbe2']
const map = makeMap(OH, 11, 11, 3, 0.7, 0.35, 1, 1)

export const wellspring: Draw = (c, w, h, t, accent) => drawMap(c, w, h, loop(t, 10, 6.2), map, RAMP, accent)
