import type { Metadata } from 'next'
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
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">HomeLoom</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Property-targeted prospect lists for roofing, solar, HVAC, remodeling, and restoration
          businesses. Contractors pick a county and the property profile that fits the job they
          sell, preview real redacted records, and buy exactly the households they need. Every
          delivered person is sold once.
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
              <span className="text-dark-muted">11M+ available prospects, 8M+ matched to a state parcel layer, and 3.7M+ with a phone match</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Audiences built around the job: older homes for roofing, upgrade-ready markets for solar, high-value properties for remodeling, weather-exposed areas for restoration</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Redacted record previews and the exact delivery columns shown before checkout</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">An optional property, neighborhood, and weather profile on every delivered record</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">A home-services brand on the same six-state engine as LeadLoom, so its counts, checkout, and delivery all come from one source of truth</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Property and neighborhood signals joined to each household: parcel value, year built, heating fuel, energy-upgrade activity, and hazard exposure</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Sold-once exclusivity enforced by the same ownership ledger the whole network uses</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Programmatic county pages with live counts that update themselves as inventory sells</span>
            </li>
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-dark-border">
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
