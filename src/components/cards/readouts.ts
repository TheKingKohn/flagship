/** The status line under each app's name, by project slug: category, what it does, one scale or promise. Lower case, tracked, monospace; at most 28 characters so it stays on one line beside the mark on a 360 px phone, and no two alike. */
export const readouts: Record<string, string> = {
  memoryspace: 'desktop · vault · private',
  explorer: 'free map · 83 layers · six states',
  donos: 'creators · link · stripe',
  fluxread: 'reader · 1k wpm · offline',
  airfoil: 'solver · lift, drag · phone',
  'sky-lab': 'sky · 9,100 stars · the iss',
  'street-time-machine': 'maps · 1880s to now · usgs',
  handfont: 'fonts · ink to .ttf · local',
  'circuit-lab': 'simulator · scope · offline',
  lantern: 'overdose · counties · trend',
  wellspring: 'access · 53 measures · tract',
  granary: 'wealth · 26 stats · tracts',
  roofline: 'hazards · housing · tracts',
  patchwork: 'canvas · endless · 32 hues',
  haggle: 'idle · ten goods · offline',
}
