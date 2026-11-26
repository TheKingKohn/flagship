import type { Metadata } from 'next'
import { LiveStat } from '@/components/LiveStat'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { storefrontHref } from '@/lib/storefrontLinks'

export const metadata: Metadata = {
  title: 'TheWoob Explorer | Work',
  description: 'Built TheWoob Explorer: a free map of Medicare, senior, wealth, housing, health, and hazard data across six states, from state to county to neighborhood.',
  openGraph: {
    title: 'TheWoob Explorer | Work',
    description: 'Built TheWoob Explorer: a free map of Medicare, senior, wealth, housing, health, and hazard data across six states, from state to county to neighborhood.',
    images: ['/projects/explorer/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/explorer',
  },
}

const screenshots = [
  { src: '/projects/explorer/map', alt: 'Florida map colored by records turning 65 in the next 12 months', caption: 'State map' },
  { src: '/projects/explorer/neighborhoods', alt: 'Columbus, Ohio at block-group level, colored by median household income', caption: 'Neighborhood view' },
  { src: '/projects/explorer/county', alt: 'Trumbull County, Ohio data page with sourced statistics', caption: 'County data page' },
]

export default function ExplorerPage() {
  return (
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <div className="max-w-phi-md mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-f34 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-f13 mb-f21">
          <h1 className="text-phi-4 md:text-phi-5 font-bold">TheWoob Explorer</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          A free, public map of Medicare, senior, wealth, housing, health, and natural-hazard data
          across six states. Zoom from state to county to Census tract to block group, switch
          between 83 layers, and see live counts of the leads available in each area.
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
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">83 layers: Medicare Advantage share, residents 65+, income, retirement income, housing, CDC health measures, FEMA hazard risk, and more</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Neighborhood detail: <LiveStat k="explorer.counties" fallback="390" exact /> counties, <LiveStat k="explorer.tracts" fallback="16,877" exact /> Census tracts, and <LiveStat k="explorer.block_groups" fallback="47,390" exact /> block groups, colored live as you zoom</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Live inventory: turning-65 counts by month, available records, and phone coverage down to the neighborhood, matching the stores to the record</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Built for phones too: a full-screen map with a drag-up panel and search for any county or city</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f21">What I Built</h2>
          <ul className="space-y-f13">
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">One layer registry drives everything: a build step bakes published statistics for every county, tract, and block group, and the live app adds sold-aware inventory counts</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Own-the-stack mapping: no third-party map tiles or APIs at view time, with geometry and data served from its own host</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Citable by design: a plain-HTML page for every state and county, structured dataset markup, an OpenAPI description, and an llms.txt so AI assistants quote it accurately</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Honest gaps: layers a publisher doesn&apos;t cover are labeled as such, never filled with guesses</span>
            </li>
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-f13 pt-f34 border-t border-dark-border">
          <Button href={storefrontHref('explorer', 'project')} external>
            Open TheWoob Explorer
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
