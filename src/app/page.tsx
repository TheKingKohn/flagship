'use client'

import Link from 'next/link'
import { Button } from '@/components/Button'
import { Typewriter } from '@/components/Typewriter'

const brands = [
  {
    logo: '/brands/leadloom.png',
    accent: '#6366F1',
    name: 'LeadLoom',
    flagship: true,
    tagline: 'Exclusive turning-65 Medicare lead data. Agents pick a county and a birthday cohort, check out, and their list downloads in seconds.',
    liveUrl: 'https://leadloom.thewoob.com',
    detailsUrl: '/work/leadloom',
  },
  {
    logo: '/brands/votervault.png',
    accent: '#8FB4FF',
    name: 'VoterVault',
    flagship: false,
    tagline: 'Verified voter data for campaigns. Build a county voter list, see live counts, and download it instantly.',
    liveUrl: 'https://votervault.thewoob.com',
    detailsUrl: null,
  },
  {
    logo: '/brands/homeloom.png',
    accent: '#14B8A6',
    name: 'HomeLoom',
    flagship: false,
    tagline: 'Likely-homeowner leads for solar, roofing, and HVAC teams that mail, knock, and call.',
    liveUrl: 'https://homeloom.thewoob.com',
    detailsUrl: null,
  },
  {
    logo: '/brands/nestegg.png',
    accent: '#C9A227',
    name: 'NestEgg',
    flagship: false,
    tagline: 'Affluent retirement-age leads for annuity, rollover, and advisory marketers.',
    liveUrl: 'https://nestegg.thewoob.com',
    detailsUrl: null,
  },
  {
    logo: '/brands/explorer.png',
    accent: '#6366F1',
    name: 'Explorer',
    flagship: false,
    tagline: 'An interactive household data map. Zoom from state to county to street and see the market before you buy it.',
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

const builds = [
  {
    initials: 'CC',
    gradient: 'from-orange-500 to-orange-700',
    accent: '#F97316',
    name: 'Call Center',
    description: 'Browser-based call center with Twilio integration, automatic recording, and lead workflow management.',
    highlights: [
      'Make and receive calls directly in browser - no phone needed',
      'Every call auto-recorded with timestamps and playback',
      'Lead workflow with dispositions and real-time sheet sync',
    ],
    detailsUrl: '/work/callcenter',
  },
  {
    initials: 'DN',
    gradient: 'from-pink-500 to-pink-700',
    accent: '#EC4899',
    name: 'DONOS',
    description: 'Donation platform where creators get a shareable link and accept one-time or recurring donations, powered by Stripe Connect.',
    highlights: [
      'One-time and monthly donations with direct creator payouts',
      'Creator dashboard: total raised, donor history, goal tracking',
    ],
    detailsUrl: '/work/donos',
  },
  {
    initials: 'VT',
    gradient: 'from-green-500 to-green-700',
    accent: '#22C55E',
    name: 'VanTracker',
    description: 'Driver notes and rating hub for Amazon DSP fleet operations. Track van assignments, recurring issues, and driver performance.',
    highlights: [
      'Log van assignments, route notes, and recurring issues',
      'Driver rating system with performance tracking',
    ],
    detailsUrl: '/work/vantracker',
  },
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
      email: 'gavin@thewoob.com',
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
            texts={["HI, IM KOHN.", "I BUILD SOFTWARE.", "DASHBOARDS, DATA, AUTOMATION."]}
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
            Five live storefronts, one engine, zero employees. Pick a geography, build a list,
            pay, and the CSV is in your inbox before you close the tab. Every record is sold
            once and never resold.
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
                className="brand-card p-6 bg-dark-card border border-dark-border rounded-lg flex flex-col"
                style={{ '--accent': brand.accent } as React.CSSProperties}
              >
                <div className="flex items-center justify-between mb-4">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-xl"
                  />
                  {brand.flagship && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full border bg-indigo-500/20 text-indigo-300 border-indigo-500/40">
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
                Five storefronts host-routed off one deployment. Stripe checkout with idempotent
                webhook fulfillment, record-level sold-once fingerprinting, programmatic SEO that
                AI assistants actually cite, and a self-healing enrichment pipeline that grows
                inventory while I sleep. Every piece self-hosted and owned end to end.
              </p>
              <p className="text-dark-muted text-sm mt-4">
                Free tools too: <a href="https://leadloom.thewoob.com/lookup" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">try the ZIP lookup →</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Builds */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">More Builds</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {builds.map((build) => (
              <div
                key={build.name}
                className="brand-card p-6 bg-dark-card border border-dark-border rounded-lg"
                style={{ '--accent': build.accent } as React.CSSProperties}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${build.gradient} rounded-xl mb-4 flex items-center justify-center text-xl font-bold`}>
                  {build.initials}
                </div>
                <h3 className="text-2xl font-bold mb-3">{build.name}</h3>
                <p className="text-dark-muted mb-4">
                  {build.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {build.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start text-sm text-dark-muted">
                      <span className="text-white mr-2">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Button href={build.detailsUrl} variant="secondary">
                  View Details
                </Button>
              </div>
            ))}
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
