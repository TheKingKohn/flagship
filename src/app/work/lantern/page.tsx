import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://lantern.thewoob.com'

export const metadata: Metadata = {
  title: 'Lantern | Work',
  description: 'Lantern: a free, quiet map of overdose deaths, opioid prescribing, shortage areas and social vulnerability, county by county for all 50 states, with a 2003 to 2021 trend for every county. Works offline.',
  openGraph: {
    title: 'Lantern | Work',
    description: 'Overdose and care, county by county, for every county in the United States. Free, offline, places never people.',
    images: ['/projects/lantern/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/lantern',
  },
}

const screenshots = [
  { src: '/projects/lantern/opening', alt: 'The Lantern opening screen on a phone: the national county map dimmed behind the headline Overdose and care, county by county, a search field and the state grid', caption: 'Opening' },
  { src: '/projects/lantern/county', alt: 'A county card for Franklin County, Ohio showing the overdose death rate, its state and national rank, the model interval and a 2003 to 2021 trend line against the state', caption: 'County card with trend' },
  { src: '/projects/lantern/nation', alt: 'The whole country at county level in ember tones, with a legend and a provisional panel giving the latest 12-month national overdose count', caption: 'National view' },
]

const doesItems = [
  'Maps overdose death rates for every U.S. county, with a 2003 to 2021 trend line for each one and the state line ghosted behind it',
  'Shows Medicare Part D opioid prescribing, mental-health shortage areas and social vulnerability on the same map, each labelled as modelled, claims-based, provisional or a designation',
  'Drops to census tracts for six states as you zoom into a county, and switches between a state view and the whole country with a state-only colour scale',
  'Ranks a county in its state and in the country, and compares two counties side by side with A and B badges',
  'Steps through counties from the keyboard, with a plain county list for screen readers and switch access, and announces each selection',
  'Draws suppressed and missing data as a hatch, never as zero, and says plainly what is counted and what is modelled',
]

const builtItems = [
  'A static, installable web app (React, TypeScript, Vite) with MapLibre GL on the owner’s own county and tract polygons: no basemap, no map service, no keys',
  'Every number is baked at build time from NCHS, CMS, HRSA, CDC/ATSDR SVI, CDC PLACES and Census files, with a fetch script that checks size, hash and header before anything is parsed',
  'A choropleth ramp tuned and checked under three colour-blindness simulations, with hatching for data that is not published',
  'The whole view lives in a strictly parsed URL hash; snap-point sheets trap and return focus; live regions announce county and topic changes; axe-clean on 16 screens',
  'A locked-down content security policy with no inline code and no remote origin, shape-checked data files, versioned storage and a bounded service-worker cache',
  'Source Serif 4 and Public Sans self-hosted, no analytics, no accounts, no trackers; 119 tests',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-3">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function LanternPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Lantern',
    applicationCategory: 'ReferenceApplication',
    operatingSystem: 'Web',
    description: 'A free, quiet map of overdose deaths, opioid prescribing and care, county by county for all 50 states, with a trend line for every county.',
    url: LIVE,
    image: 'https://thewoob.com/projects/lantern/og.jpg',
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
          <img src="/brands/lantern.png" alt="Lantern logo" width={56} height={56} className="w-14 h-14 rounded-xl" />
          <h1 className="text-5xl md:text-6xl font-bold">Lantern</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Overdose and care, county by county. Lantern is a public-health atlas for every county in the
          United States: overdose death rates with a twenty-year trend, opioid prescribing, shortage areas and
          social vulnerability, set quietly on a dark map. It shows places, never people, and says plainly
          what is counted and what is modelled.
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
            Open Lantern
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
