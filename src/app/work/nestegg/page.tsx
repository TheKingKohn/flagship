import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { storefrontHref } from '@/lib/storefrontLinks'

export const metadata: Metadata = {
  title: 'NestEgg | Work',
  description: 'Built and operate NestEgg: retirement-saver lists for annuity writers, rollover specialists, and advisors, counted live by county and sold once.',
  openGraph: {
    title: 'NestEgg | Work',
    description: 'Built and operate NestEgg: retirement-saver lists for annuity writers, rollover specialists, and advisors, counted live by county and sold once.',
    images: ['/projects/nestegg/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/nestegg',
  },
}

const screenshots = [
  { src: '/projects/nestegg/home', alt: 'NestEgg home page', caption: 'Home page' },
  { src: '/projects/nestegg/county', alt: 'County page with live retirement-household count', caption: 'County page' },
  { src: '/projects/nestegg/states', alt: 'State and county browser', caption: 'State browser' },
]

export default function NestEggPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">NestEgg</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Retirement-saver lists for annuity writers, rollover specialists, and financial advisors:
          households in the 55-70 window living in higher-income neighborhoods, counted live by
          county. Every record is sold once, and checkout re-checks availability so nobody buys a
          record someone else already owns.
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
              <span className="text-dark-muted">Live counts by county, with the exact age span each county holds today computed right on the page</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Area-level money signals: neighborhood income and home value, retirement-income share, and pension, IRA, and capital-gain activity</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Core, affluent, and premier tiers so advisors can trade reach for wealth</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">One-click county lists or a custom multi-filter build, downloaded the moment payment clears</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">A wealth-focused brand on the shared six-state engine, reusing its checkout, fulfillment, and sold-once ledger</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Honest data design: age is a real per-record attribute, while money signals are labeled as area or property estimates, never a named household&apos;s net worth</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Self-updating county pages whose counts and age spans move with the inventory, with no manual edits</span>
            </li>
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-dark-border">
          <Button href={storefrontHref('nestegg', 'project')} external>
            Open NestEgg
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
