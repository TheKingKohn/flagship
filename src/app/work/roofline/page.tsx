import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://roofline.thewoob.com'

export const metadata: Metadata = {
  title: 'Roofline | Work',
  description: 'Roofline: a free map of what the weather could do to the houses in a county or tract, and what those houses are, for six states. FEMA hazard scores and expected loss beside housing age, construction and heating fuel, with a hazard profile for every county.',
  openGraph: {
    title: 'Roofline | Work',
    description: 'What the weather could do to the houses here, and what the houses are. County to tract, six states, free and offline.',
    images: ['/projects/roofline/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/roofline',
  },
}

const screenshots = [
  { src: '/projects/roofline/map', alt: 'Pennsylvania shaded by natural hazard risk in ice-blue classes on a phone, with the state chip in the top bar and the legend and topic dock below', caption: 'County map' },
  { src: '/projects/roofline/profile', alt: 'King and Spokane counties compared: a spoke readout for earthquake, chips for each county’s top hazards, then the roof strip with single-family share, housing age and heating fuel', caption: 'Two counties compared' },
  { src: '/projects/roofline/tracts', alt: 'An Ohio county zoomed to its census tracts, each shaded by the same hazard topic', caption: 'Tract level' },
]

const doesItems = [
  'Shades FEMA hazard scores and expected annual loss by county, then drops to census tracts as you zoom in',
  'Puts housing age, single-family share, heating fuel and homeowners beside the hazards, with a topic filter across all 30',
  'Draws a hazard profile for any county against the state median, readable spoke by spoke, with a second county overlaid to compare',
  'Shows a hazard that cannot happen somewhere as a hatched Not applicable, never as zero',
  'Works from the keyboard and with a screen reader: arrow through counties, open the card, hear the selection announced',
  'Installs as an app and keeps working offline for the states you have opened',
]

const builtItems = [
  'Vite, React, TypeScript, Tailwind and zustand, the same stack as the other Labs, with MapLibre GL on the owner’s own county and tract polygons over a dark base',
  'A Node bake script turns the Explorer data into small per-state and per-county JSON with quantile breaks computed at bake, and refuses a changed source or a truncated file',
  'Placement rules, snap physics, keyboard order and label collision handling are pure, unit-tested TypeScript',
  'A colour-blind-checked ramp pair, snapping bottom sheets that make the page behind them inert, and an axe-core run over every screen',
  'A strict content security policy, validated URL and storage reads, shape-checked data files and a bounded service-worker cache',
  'A headless-Chrome end-to-end script with real mouse and keyboard events, a privacy walk that records every request, and 166 tests',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-f13">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function RooflinePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Roofline',
    applicationCategory: 'ReferenceApplication',
    operatingSystem: 'Web',
    description: 'A free map of what the weather could do to the houses in a county or tract, and what those houses are, for six states.',
    url: LIVE,
    image: 'https://thewoob.com/projects/roofline/og.jpg',
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
          <img src="/brands/roofline.png" alt="Roofline logo" width={56} height={56} className="w-14 h-14 rounded-f13" />
          <h1 className="text-phi-4 md:text-phi-5 font-bold">Roofline</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          What the weather could do to the houses here, and what the houses are. Roofline sets FEMA&apos;s
          hazard scores and expected losses beside housing age, construction and heating fuel for six states,
          county to tract, in the calm of a forecast office at night. Every county gets a hazard profile you
          can read spoke by spoke and lay over another county.
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
            Open Roofline
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
