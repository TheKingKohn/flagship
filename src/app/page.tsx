'use client'

import Link from 'next/link'
import { Button } from '@/components/Button'
import { Typewriter } from '@/components/Typewriter'

const brands = [
  {
    initials: 'LL',
    gradient: 'from-blue-500 to-blue-700',
    name: 'LeadLoom',
    flagship: true,
    tagline: 'Turning-65 lead lists for insurance agents. Pick a county and cohort, pay, download the CSV in seconds. 12M+ mailing records, 765K+ phone-appended.',
    liveUrl: 'https://leadloom.thewoob.com',
    detailsUrl: '/work/leadloom',
  },
  {
    initials: 'VV',
    gradient: 'from-violet-500 to-violet-700',
    name: 'VoterVault',
    flagship: false,
    tagline: 'Political data storefront. 27M+ voter records with county registration profiles and free lookup tools.',
    liveUrl: 'https://votervault.thewoob.com',
    detailsUrl: null,
  },
  {
    initials: 'HL',
    gradient: 'from-amber-500 to-amber-700',
    name: 'HomeLoom',
    flagship: false,
    tagline: 'Likely-homeowner lists built on the same enriched data engine.',
    liveUrl: 'https://homeloom.thewoob.com',
    detailsUrl: null,
  },
  {
    initials: 'NE',
    gradient: 'from-emerald-500 to-emerald-700',
    name: 'NestEgg',
    flagship: false,
    tagline: 'Affluent 55-72 retirement segments for annuity and rollover marketers, ranked by tract-level affluence.',
    liveUrl: 'https://nestegg.thewoob.com',
    detailsUrl: null,
  },
  {
    initials: 'EX',
    gradient: 'from-cyan-500 to-cyan-700',
    name: 'Explorer',
    flagship: false,
    tagline: 'Deep-zoom data map over 3.2M geocoded households, state to county to street.',
    liveUrl: 'https://explorer.thewoob.com',
    detailsUrl: null,
  },
]

const stats = [
  '5 brands, 1 engine',
  '27M+ voter records',
  '12M+ T65 mailing records',
  '765K+ phones appended',
  '3.2M households mapped',
  'OH · FL · NC',
]

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'thewoob',
    url: 'https://thewoob.com',
    logo: 'https://thewoob.com/logo.png',
    description: 'Builder-operator: custom software, automations, and a five-brand data network across OH, FL & NC.',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@thewoob.com',
      contactType: 'Customer Service',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section with Starfield */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
        <div className="starfield" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* SEO H1 - visually hidden but accessible */}
          <h1 className="sr-only">Kohn - Software Builder & Operator, Custom Development & Data Products</h1>

          <Typewriter
            texts={["HI, IM KOHN.", "I BUILD SOFTWARE.", "I RUN WHAT I BUILD."]}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
            speed={70}
            deleteSpeed={40}
            pauseTime={2000}
          />

          <p className="text-xl md:text-2xl text-dark-muted max-w-2xl mx-auto mb-12">
            Builder-operator out of Ohio. I design, build, and run my own software businesses,
            including a five-brand data network, and take on select client work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#network">Explore the Data Network</Button>
            <Button href="/work" variant="secondary">
              View My Work
            </Button>
          </div>

          <p className="text-sm text-dark-muted mt-6">
            Recent builds: <Link href="/work/leadloom" className="hover:text-white transition-colors">LeadLoom</Link>, <Link href="/work/callcenter" className="hover:text-white transition-colors">Call Center</Link>, <Link href="/work/donos" className="hover:text-white transition-colors">DONOS</Link>, <Link href="/work/vantracker" className="hover:text-white transition-colors">VanTracker</Link>
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-dark-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* The Data Network */}
      <section id="network" className="py-24 px-6 lg:px-8 bg-dark-card/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Data Network</h2>
          <p className="text-dark-muted text-lg mb-8 max-w-3xl">
            Five live storefronts, one engine, zero employees. Public records ingested, cleaned,
            enriched, and sold self-serve: pick a geography, build a list, pay, and the CSV is in
            your inbox before you close the tab. Every record is sold once and never resold.
          </p>

          {/* Stat chips */}
          <div className="flex flex-wrap gap-3 mb-12">
            {stats.map((stat) => (
              <span
                key={stat}
                className="text-sm text-dark-muted border border-dark-border bg-dark-card rounded-full px-4 py-1.5"
              >
                {stat}
              </span>
            ))}
          </div>

          {/* Brand cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="p-6 bg-dark-card border border-dark-border rounded-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/50 hover:shadow-lg flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${brand.gradient} rounded-lg flex items-center justify-center text-xl font-bold`}>
                    {brand.initials}
                  </div>
                  {brand.flagship && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full border bg-blue-500/20 text-blue-300 border-blue-500/40">
                      Flagship
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-2">{brand.name}</h3>
                <p className="text-dark-muted text-sm mb-6 flex-grow">
                  {brand.tagline}
                </p>
                <div className="flex gap-3">
                  <Button href={brand.liveUrl} external>
                    Visit
                  </Button>
                  {brand.detailsUrl && (
                    <Button href={brand.detailsUrl} variant="secondary">
                      Details
                    </Button>
                  )}
                </div>
              </div>
            ))}

            {/* Engine card */}
            <div className="p-6 bg-dark-card/50 border border-dark-border border-dashed rounded-lg flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-3">Under the hood</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                Host-routed storefronts on one deployment. Stripe self-serve checkout, instant CSV
                fulfillment, sold-once exclusivity tracking, programmatic SEO, and an always-on
                enrichment pipeline that keeps inventory current while I sleep.
              </p>
              <p className="text-dark-muted text-sm mt-4">
                Free tools too: <a href="https://leadloom.thewoob.com/lookup" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">try the ZIP lookup →</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Builds */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">More Builds</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Call Center */}
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/50 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg mb-4 flex items-center justify-center text-2xl font-bold">
                CC
              </div>
              <h3 className="text-2xl font-bold mb-3">Call Center</h3>
              <p className="text-dark-muted mb-4">
                Browser-based call center with Twilio integration, automatic recording, and lead workflow management.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Make and receive calls directly in browser - no phone needed</span>
                </li>
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Every call auto-recorded with timestamps and playback</span>
                </li>
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Lead workflow with dispositions and real-time sheet sync</span>
                </li>
              </ul>
              <Button href="/work/callcenter" variant="secondary">
                View Details
              </Button>
            </div>

            {/* DONOS */}
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/50 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg mb-4 flex items-center justify-center text-2xl font-bold">
                DN
              </div>
              <h3 className="text-2xl font-bold mb-3">DONOS</h3>
              <p className="text-dark-muted mb-4">
                Donation platform where creators get a shareable link and accept one-time or recurring donations, powered by Stripe Connect.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>One-time and monthly donations with direct creator payouts</span>
                </li>
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Creator dashboard: total raised, donor history, goal tracking</span>
                </li>
              </ul>
              <Button href="/work/donos" variant="secondary">
                View Details
              </Button>
            </div>

            {/* VanTracker */}
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/50 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-lg mb-4 flex items-center justify-center text-2xl font-bold">
                VT
              </div>
              <h3 className="text-2xl font-bold mb-3">VanTracker</h3>
              <p className="text-dark-muted mb-4">
                Driver notes and rating hub for Amazon DSP fleet operations. Track van assignments, recurring issues, and driver performance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Log van assignments, route notes, and recurring issues</span>
                </li>
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Driver rating system with performance tracking</span>
                </li>
              </ul>
              <Button href="/work/vantracker" variant="secondary">
                View Details
              </Button>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button href="/work" variant="secondary">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Client Work / CTA */}
      <section className="py-24 px-6 lg:px-8 bg-dark-card/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Beyond my own products
          </h2>

          <p className="text-xl text-dark-muted mb-12">
            Most of my time goes into systems I own and operate. I still take on a handful of
            client projects a year: websites, dashboards, automations, and data pipelines.
            If it lives in code, I can build it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Get In Touch</Button>
            <Button href="/services" variant="secondary">
              What I Take On
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
