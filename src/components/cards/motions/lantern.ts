// Lantern: West Virginia shaded county by county in ember, warming outward from one point like light from a lamp.
import { type Draw, loop } from './kit'
import { drawMap } from './map'
import { makeMap } from './map-data'

const WV = [-80.52, 40.64, -80.52, 39.72, -79.48, 39.72, -79.48, 39.2, -78.8, 39.55, -78.2, 39.65, -77.72, 39.32, -78, 38.9, -79, 38.55, -79.5, 38.5, -80.3, 37.5, -81, 37.3, -81.97, 37.54, -82.64, 38.17, -82.6, 38.42, -81.75, 39.1, -81.2, 39.4, -80.85, 39.7, -80.6, 40.2]
const RAMP = ['#44362a', '#775232', '#b06a2c', '#dd8a2a', '#ffc361']
const map = makeMap(WV, 11, 9, 11, 0.42, 0.5, 1, 1)

export const lantern: Draw = (c, w, h, t, accent) => drawMap(c, w, h, loop(t, 10, 6.2), map, RAMP, accent)
