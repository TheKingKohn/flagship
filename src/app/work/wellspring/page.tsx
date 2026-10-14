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
    <span className="text-white mr-3">→</span>
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
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <img src="/brands/wellspring.png" alt="Wellspring logo" width={56} height={56} className="w-14 h-14 rounded-xl" />
          <h1 className="text-5xl md:text-6xl font-bold">Wellspring</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Health, access and need, county by county. Wellspring puts chronic conditions, screenings and
          checkups, disability, coverage and the safety net on one clean map for six states, from the county
          down to the census tract. Every figure is a published area statistic, and the map says which are
          modelled.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {screenshots.map((shot) => (
              <a key={shot.src} href={`${shot.src}.webp`} target="_blank" className="block hover:opacity-80 transition-opacity">
                <img
                  src={`${shot.src}-card.webp`}
                  alt={shot.alt}
                  loading="lazy"
                  className="w-full h-48 object-cover object-top rounded border border-dark-border"
                />
                <p className="text-xs text-dark-muted mt-2 text-center">{shot.caption}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What It Does</h2>
          <ul className="space-y-3">
            {doesItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            {builtItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-dark-border">
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
