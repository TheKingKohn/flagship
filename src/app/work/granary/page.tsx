import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://granary.thewoob.com'

export const metadata: Metadata = {
  title: 'Granary | Work',
  description: 'Granary: where retirement money rests, county by county and tract by tract, for six states. Income per tax return, pensions and IRA distributions, Social Security and home equity, with affluence tiers by neighbourhood. Free and offline.',
  openGraph: {
    title: 'Granary | Work',
    description: 'Where retirement money rests, county by county and tract by tract, for six states. Free, offline.',
    images: ['/projects/granary/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/granary',
  },
}

const screenshots = [
  { src: '/projects/granary/map', alt: 'Pennsylvania shaded in matte brass by households with retirement income, with serif place labels, a quintile legend and the topic bar', caption: 'County map' },
  { src: '/projects/granary/tiers', alt: 'The affluence tiers view of Pennsylvania with a legend of Premier, Affluent, Core and Below Core and the tract counts for Bucks County', caption: 'Affluence tiers' },
  { src: '/projects/granary/card', alt: 'The county card for Lancaster County leading with average income per tax return, its rank, a stacked bar of tracts by tier and the income rows below', caption: 'County card' },
]

const doesItems = [
  'Shades every county by 26 published statistics, in quintiles of its own state, and drops to census tracts when you zoom into a county',
  'Affluence tiers sort every tract into Core, Affluent and Premier by median income, with the area-estimate caveat built into the design rather than tacked on',
  'A county card puts one hero figure first, with rank, a bar over the state range, tract counts per tier and a side-by-side compare',
  'Works by keyboard or from a ranked county list, with search across six states and links that reopen the exact view',
  'Shows IRS figures at county level and Census figures down to the tract, and says which is which in the legend',
  'Installable, offline once a state has been opened, with no accounts and no tracking',
]

const builtItems = [
  'Vite, React, TypeScript, Tailwind, zustand and MapLibre GL, with no tiles, keys or backend',
  'County and tract polygons baked from the owner’s Explorer data by a deterministic script that refuses a changed source header, with quantile breaks computed at bake',
  'Source Serif 4 and Hanken Grotesk self-hosted, sized in rem so the whole interface scales with text size',
  'A colour ramp validated against three colour-blind simulations in a test, and a hatch pattern no class can be mistaken for',
  'Snap-point sheets with held focus and an inert background, a keyboard path through the counties, axe clean on every screen',
  'A strict content security policy, shape-checked data files, versioned storage, a bounded service-worker cache and 239 tests',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-f13">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function GranaryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Granary',
    applicationCategory: 'ReferenceApplication',
    operatingSystem: 'Web',
    description: 'Where retirement money rests: income per tax return, pensions, Social Security and home equity, county by county and tract by tract, for six states.',
    url: LIVE,
    image: 'https://thewoob.com/projects/granary/og.jpg',
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
          <img src="/brands/granary.png" alt="Granary logo" width={56} height={56} className="w-14 h-14 rounded-f13" />
          <h1 className="text-phi-4 md:text-phi-5 font-bold">Granary</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          Where retirement money rests. Granary maps income per tax return, pensions and IRA distributions,
          Social Security and home equity across six states, county by county and tract by tract, set like a
          ledger rather than a bank ad. An affluence-tier view sorts every neighbourhood into Core, Affluent
          and Premier, and says plainly that it is an area estimate.
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
            Open Granary
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
