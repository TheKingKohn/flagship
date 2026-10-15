/** The status line under each app's name, by project slug: category, what it does, one scale or promise. Lower case, tracked, monospace; at most 33 characters so it fits one line beside the mark on a phone, and no two alike. */
export const readouts: Record<string, string> = {
  memoryspace: 'desktop · memory vault · private',
  explorer: 'free map · 83 layers · six states',
  donos: 'creators · one link · stripe',
  fluxread: 'reader · 250-1,000 wpm · offline',
  airfoil: 'solver · lift and drag · on phone',
  'sky-lab': 'sky map · 9,100 stars · the iss',
  'street-time-machine': 'maps · 1880s to today · usgs',
  handfont: 'fonts · ink to .ttf · on device',
  'circuit-lab': 'simulator · live scope · offline',
  lantern: 'overdose · all counties · 20 years',
  wellspring: 'access · 53 measures · tract level',
  granary: 'wealth · 26 statistics · tracts',
  roofline: 'hazards · housing age · six states',
  patchwork: 'canvas · endless · 32 colours',
  haggle: 'idle game · ten goods · offline',
}
