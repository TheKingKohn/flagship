import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://wellspring.thewoob.com'

export const metadata: Metadata = {
  title: 'Wellspring | Work',
  description: 'Wellspring: the health, access and need map for Florida, North Carolina, Ohio, Pennsylvania, Utah and Washington. Conditions, checkups, disability, coverage and the safety net, county to tract, from published area statistics. Free and offline.',
  openGraph: {
    title: 'Wellspring | Work',
    description: 'Health, access and need, county by county, down to the census tract, for six states. Free and offline.',
    images: ['/projects/wellspring/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/wellspring',
  },
}

const screenshots = [
  { src: '/projects/wellspring/map', alt: 'Ohio shaded by diabetes in five mint classes on a phone, with place labels, a legend naming CDC PLACES as the source and the topic bar below', caption: 'County map' },
  { src: '/projects/wellspring/gap', alt: 'Two counties compared in the Screening gap panel, each condition paired with its care measure as dumbbells against the state median', caption: 'Screening gap' },
  { src: '/projects/wellspring/tracts', alt: 'A county zoomed in to its census tracts, each tract shaded by the same topic with its own class breaks', caption: 'Tract level' },
]

const doesItems = [
  'Maps 53 measures as county choropleths in quantile fifths, and drops to census tracts when you zoom into a county',
  'Opens a county card led by one large number, with every measure’s rank in the state and a bar against the state range',
  'Sets a second county beside the first, each with its own colour and name in every row',
  'Pairs each condition with its care measure against the state median in the Screening gap panel, drawn as dumbbells',
  'Hides measures a state does not publish, and draws no data as a grey hatch, never as zero or a class',
  'Reopens any exact view from a link, searches counties, places and topics, moves through counties with the arrow keys, and works offline for the states you have opened',
]

const builtItems = [
  'A static, installable React, TypeScript and Vite app; the map is MapLibre GL on the owner’s own polygons, with no basemap, tiles, keys or backend',
  'A Node bake script reads the Explorer data on disk and writes static JSON with a manifest of every input and its vintage; new CDC PLACES county values are adult-weighted roll-ups of tract values',
  'A choropleth ramp tuned in CIELAB with colour-blindness simulations, and a grey hatch that is never read as a class',
  'Strict URL-hash parsing, shape-checked data files, a locked-down content security policy, and a bounded service-worker cache',
  'Sheets with snap points, trapped and returned focus, live-region announcements and a keyboard path through the counties; axe at 0 violations and Lighthouse accessibility 100',
  'Self-hosted Geist type with tabular numerals, styles for reduced motion, forced colours and higher contrast; 108 tests',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-f13">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function WellspringPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Wellspring',
    applicationCategory: 'ReferenceApplication',
    operatingSystem: 'Web',
    description: 'The health, access and need map for six states: conditions, checkups, disability, coverage and the safety net, county to tract, from published area statistics.',
    url: LIVE,
    image: 'https://thewoob.com/projects/wellspring/og.jpg',
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
          <img src="/brands/wellspring.png" alt="Wellspring logo" width={56} height={56} className="w-14 h-14 rounded-f13" />
          <h1 className="text-phi-4 md:text-phi-5 font-bold">Wellspring</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          Health, access and need, county by county. Wellspring puts chronic conditions, screenings and
          checkups, disability, coverage and the safety net on one clean map for six states, from the county
          down to the census tract. Every figure is a published area statistic, and the map says which are
          modelled.
        </p>

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

        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f21">What It Does</h2>
          <ul className="space-y-f13">
            {doesItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f21">What I Built</h2>
          <ul className="space-y-f13">
            {builtItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        <div className="flex flex-col sm:flex-row gap-f13 pt-f34 border-t border-dark-border">
          <Button href={LIVE} external>
            Open Wellspring
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
