import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://streettimemachine.thewoob.com'

export const metadata: Metadata = {
  title: 'Street Time Machine | Work',
  description: 'Street Time Machine: type an address and slide from the 1880s to today over historic USGS topographic maps laid over modern aerial imagery. Free, keyless, nothing uploaded.',
  openGraph: {
    title: 'Street Time Machine | Work',
    description: 'Type an address. Slide from the 1880s to today over historic USGS maps. See your street as the surveyors drew it.',
    images: ['/projects/street-time-machine/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/street-time-machine',
  },
}

const screenshots = [
  { src: '/projects/street-time-machine/swipe', alt: 'Downtown Columbus in 1955 on a USGS sheet on the left, today’s aerial photo on the right, split by a draggable divider', caption: 'Then and now' },
  { src: '/projects/street-time-machine/phone', alt: 'The phone view with a large 1955 numeral, the sheet’s museum-style label and the time rail of available map years', caption: 'The time rail' },
  { src: '/projects/street-time-machine/landing', alt: 'The landing screen with an address search and four starting places', caption: 'Start anywhere' },
]

const doesItems = [
  'Search any US address, or press and hold the map to drop a pin, and the rail fills with every year a USGS sheet exists for that spot, from the 1880s to the 1990s',
  'Slide the rail and the historic sheet swaps underneath you; the year rolls, the sheet name, survey and print dates, and scale read like a museum label',
  'Swipe compare: a hairline divider with a loupe handle, then on one side and today’s aerial on the other; or fade between them',
  'Today comes from USGS aerial and topo imagery and OpenStreetMap streets; the pin stays put across years so you can watch the land change around it',
  'Every view is a link: the address, year, position, zoom and mode live in the URL, so you can send someone exactly what you found',
  'Honest about loading: it tells you which sheet it is fetching and how many tiles are in, and says plainly when a spot has no historic coverage',
]

const builtItems = [
  'Historic sheets come from the USGS Historical Topographic Map Collection through a public image service, with a mosaic rule per year and scale so any sheet draws at any zoom, straight from the browser',
  'A catalog step reads every sheet covering the pinned point and picks the most detailed edition for each year, with the maths for year selection, Web Mercator tiles and bounds unit-tested against saved real responses',
  'Vendored Leaflet, restyled from scratch: one ink control strip, a footnote attribution, no stock widgets',
  'A serif year numeral with tabular figures that rolls in the direction of travel, and a rail with a tick per available year, keyboard stepping and a haptic tick on phones that support it',
  'Geocoding through Nominatim, rate-limited and sent only when you press Go; no accounts, no analytics, nothing stored anywhere but your own browser',
  'A static, installable web app (React, TypeScript, Vite) with a service worker; the app shell works offline, the maps need a connection',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-f13">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function StreetTimeMachinePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Street Time Machine',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    description: 'A free map that slides any US address from the 1880s to today over historic USGS topographic sheets and modern aerial imagery.',
    url: LIVE,
    image: 'https://thewoob.com/projects/street-time-machine/og.jpg',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Person', name: 'Gavin Kohn', url: 'https://thewoob.com' },
  }

  return (
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-phi-md mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-f34 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-f13 mb-f21">
          <img src="/brands/street-time-machine.png" alt="Street Time Machine logo" width={56} height={56} className="w-14 h-14 rounded-f13" />
          <h1 className="text-phi-4 md:text-phi-5 font-bold">Street Time Machine</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          See your street as the surveyors drew it. Type an address, and Street Time Machine lays more than a
          century of USGS topographic sheets over today&apos;s aerial photography, with a rail of the real years
          available at that spot. Drag the divider and watch the farm become the subdivision.
        </p>

        {/* Project Gallery */}
        <section className="mb-f55">
          <h2 className="text-phi-2 font-bold mb-f13">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-f13">
            {screenshots.map((shot) => (
              <a key={shot.src} href={`${shot.src}.webp`} target="_blank" className="block hover:opacity-80 transition-opacity">
                <img
                  src={`${shot.src}-card.webp`}
                  alt={shot.alt}
                  loading="lazy"
                  className="w-full aspect-golden object-cover object-top rounded-f5 border border-dark-border"
                />
                <p className="text-phi--1 text-dark-muted mt-f8 text-center">{shot.caption}</p>
              </a>
            ))}
          </div>
        </section>

        {/* What It Does */}
        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f21">What It Does</h2>
          <ul className="space-y-f13">
            {doesItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f21">What I Built</h2>
          <ul className="space-y-f13">
            {builtItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-f13 pt-f34 border-t border-dark-border">
          <Button href={LIVE} external>
            Open Street Time Machine
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
