import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

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
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">TheWoob Explorer</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          A free, public map of Medicare, senior, wealth, housing, health, and natural-hazard data
          across six states. Zoom from state to county to Census tract to block group, switch
          between 83 layers, and see live counts of the leads available in each area.
        </p>

        {/* Project Gallery */}
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

        {/* What It Does */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What It Does</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">83 layers: Medicare Advantage share, residents 65+, income, retirement income, housing, CDC health measures, FEMA hazard risk, and more</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Neighborhood detail: 390 counties, 16,877 Census tracts, and 47,390 block groups, colored live as you zoom</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Live inventory: turning-65 counts by month, available records, and phone coverage down to the neighborhood, matching the stores to the record</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Built for phones too: a full-screen map with a drag-up panel and search for any county or city</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">One layer registry drives everything: a build step bakes published statistics for every county, tract, and block group, and the live app adds sold-aware inventory counts</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Own-the-stack mapping: no third-party map tiles or APIs at view time, with geometry and data served from its own host</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Citable by design: a plain-HTML page for every state and county, structured dataset markup, an OpenAPI description, and an llms.txt so AI assistants quote it accurately</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Honest gaps: layers a publisher doesn&apos;t cover are labeled as such, never filled with guesses</span>
            </li>
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-dark-border">
          <Button href="https://explorer.thewoob.com/explorer" external>
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
