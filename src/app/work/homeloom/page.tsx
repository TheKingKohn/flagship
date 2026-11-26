import type { Metadata } from 'next'
import { LiveStat } from '@/components/LiveStat'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { storefrontHref } from '@/lib/storefrontLinks'

export const metadata: Metadata = {
  title: 'HomeLoom | Work',
  description: 'Built and operate HomeLoom: property-targeted prospect lists for roofing, solar, HVAC, and remodeling teams, sold once with live counts by county.',
  openGraph: {
    title: 'HomeLoom | Work',
    description: 'Built and operate HomeLoom: property-targeted prospect lists for roofing, solar, HVAC, and remodeling teams, sold once with live counts by county.',
    images: ['/projects/homeloom/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/homeloom',
  },
}

const screenshots = [
  { src: '/projects/homeloom/home', alt: 'HomeLoom home page with available prospect totals', caption: 'Home page' },
  { src: '/projects/homeloom/county', alt: 'County page with the list builder and delivery columns', caption: 'County page' },
  { src: '/projects/homeloom/states', alt: 'State and county browser', caption: 'State browser' },
]

export default function HomeLoomPage() {
  return (
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <div className="max-w-phi-md mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-f34 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-f13 mb-f21">
          <h1 className="text-phi-4 md:text-phi-5 font-bold">HomeLoom</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          Property-targeted prospect lists for roofing, solar, HVAC, remodeling, and restoration
          businesses. Contractors pick a county and the property profile that fits the job they
          sell, preview real redacted records, and buy exactly the households they need. Every
          delivered person is sold once.
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
              <span className="text-dark-muted"><LiveStat k="homeloom.records_total" fallback="9.9M" /> available prospects, 7.3M matched to a state parcel layer, and <LiveStat k="homeloom.with_phone" fallback="3.6M+" /> with a phone match</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Audiences built around the job: older homes for roofing, upgrade-ready markets for solar, high-value properties for remodeling, weather-exposed areas for restoration</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Redacted record previews and the exact delivery columns shown before checkout</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">An optional property, neighborhood, and weather profile on every delivered record</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f21">What I Built</h2>
          <ul className="space-y-f13">
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">A home-services brand on the same six-state engine as LeadLoom, so its counts, checkout, and delivery all come from one source of truth</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Property and neighborhood signals joined to each household: parcel value, year built, heating fuel, energy-upgrade activity, and hazard exposure</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Sold-once exclusivity enforced by the same ownership ledger the whole network uses</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Programmatic county pages with live counts that update themselves as inventory sells</span>
            </li>
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-f13 pt-f34 border-t border-dark-border">
          <Button href={storefrontHref('homeloom', 'project')} external>
            Open HomeLoom
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
