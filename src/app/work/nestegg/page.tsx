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
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <div className="max-w-phi-md mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-f34 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-f13 mb-f21">
          <h1 className="text-phi-4 md:text-phi-5 font-bold">NestEgg</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          Retirement-saver lists for annuity writers, rollover specialists, and financial advisors:
          households in the 55-70 window living in higher-income neighborhoods, counted live by
          county. Every record is sold once, and checkout re-checks availability so nobody buys a
          record someone else already owns.
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
              <span className="text-dark-muted">Live counts by county, with the exact age span each county holds today computed right on the page</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Area-level money signals: neighborhood income and home value, retirement-income share, and pension, IRA, and capital-gain activity</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Audience presets built on area-level wealth signals, by county, so advisors can trade reach for fit</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">One-click county lists or a custom multi-filter build, downloaded the moment payment clears</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f21">What I Built</h2>
          <ul className="space-y-f13">
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">A wealth-focused brand on the shared six-state engine, reusing its checkout, fulfillment, and sold-once ledger</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Honest data design: age is a real per-record attribute, while money signals are labeled as area or property estimates, never a named household&apos;s net worth</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Self-updating county pages whose counts and age spans move with the inventory, with no manual edits</span>
            </li>
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-f13 pt-f34 border-t border-dark-border">
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
