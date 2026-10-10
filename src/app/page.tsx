'use client'

import Link from 'next/link'
import { Button } from '@/components/Button'
import { Typewriter } from '@/components/Typewriter'
import { storefrontHref } from '@/lib/storefrontLinks'

const brands = [
  {
    logo: '/brands/leadloom.png',
    accent: '#6366F1',
    name: 'LeadLoom',
    flagship: true,
    tagline: 'Exclusive turning-65 Medicare lead data. Agents pick a county and a birthday cohort, check out, and their list downloads in seconds.',
    liveUrl: storefrontHref('leadloom', 'home'),
    detailsUrl: '/work/leadloom',
  },
  {
    logo: '/brands/votervault.png',
    accent: '#8FB4FF',
    name: 'VoterVault',
    flagship: false,
    tagline: 'Verified voter data for campaigns. Build a county voter list, see live counts, and download it instantly.',
    liveUrl: storefrontHref('votervault', 'home'),
    detailsUrl: '/work/votervault',
  },
  {
    logo: '/brands/homeloom.png',
    accent: '#14B8A6',
    name: 'HomeLoom',
    flagship: false,
    tagline: 'Likely-homeowner leads for solar, roofing, and HVAC teams that mail, knock, and call.',
    liveUrl: storefrontHref('homeloom', 'home'),
    detailsUrl: '/work/homeloom',
  },
  {
    logo: '/brands/nestegg.png',
    accent: '#C9A227',
    name: 'NestEgg',
    flagship: false,
    tagline: 'Affluent retirement-age leads for annuity, rollover, and advisory marketers.',
    liveUrl: storefrontHref('nestegg', 'home'),
    detailsUrl: '/work/nestegg',
  },
  {
    logo: '/brands/explorer.png',
    accent: '#6366F1',
    name: 'TheWoob Explorer',
    flagship: false,
    tagline: 'A free map of Medicare, senior and household data. Zoom from state to county to neighborhood and see the market before you buy it.',
    liveUrl: storefrontHref('explorer', 'home'),
    detailsUrl: '/work/explorer',
  },
]

const stats = [
  '5 brands, 1 engine',
  '35M+ voter records',
  '19M+ turning-65 records',
  '6.5M+ with phone numbers',
  '47K neighborhoods mapped',
  'FL · NC · OH · PA · UT · WA',
]

const builds = [
  {
    logo: '/brands/memoryspace.png',
    accent: '#F2D28C',
    name: 'MemorySpace',
    description: 'A personal memory vault: every photo and video you have kept, as a 3D universe you can fly through. Free for Windows and Mac, and your photos never leave your computer.',
    highlights: [
      'Snapchat, camera roll, and old backups in one place, by time and place',
      'Faces, trips, and photo search, all computed on your own computer',
      'Drift through your memories or walk into a museum of any trip',
    ],
    detailsUrl: '/work/memoryspace',
    liveUrl: 'https://memoryspace.thewoob.com',
    liveLabel: 'Download',
  },
  {
    logo: '/brands/donos.png',
    accent: '#EC4899',
    name: 'DONOS',
    description: 'A free donation page for creators: share your own link and accept one-time or monthly support through Stripe Connect, paid straight to your bank.',
    highlights: [
      'One-time and monthly donations with messages and anonymous giving',
      'Creator dashboard with goals, history, and a top donors leaderboard',
    ],
    detailsUrl: '/work/donos',
    liveUrl: 'https://donos.thewoob.com',
    liveLabel: 'Open',
  },
  {
    logo: '/brands/fluxread.png',
    accent: '#2DD4BF',
    name: 'FluxRead',
    description: 'A free speed reader that flashes one word at a time where your eye locks on. Paste a link, import a book, or read a free classic.',
    highlights: [
      'Read at 250 to 1,000 words a minute with smart pacing',
      'Works offline, installs as an app, syncs across devices',
    ],
    detailsUrl: '/work/fluxread',
    liveUrl: 'https://fluxread.thewoob.com',
    liveLabel: 'Open',
  },
]

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'thewoob',
    url: 'https://thewoob.com',
    logo: 'https://thewoob.com/apple-touch-icon.png',
    description: 'Builder-operator: custom software, automations, and a five-brand data network across six states.',
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
            I&apos;m Gavin Kohn, a builder-operator out of Ohio. I design, build, and run my own
            software businesses, including a five-brand data network and other one-off builds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#network">Explore the Data Network</Button>
            <Button href="/work" variant="secondary">
              View Everything Else
            </Button>
          </div>

          <p className="text-sm text-dark-muted mt-6">
            Recent builds: <Link href="/work/memoryspace" className="hover:text-white transition-colors">MemorySpace</Link>, <Link href="/work/explorer" className="hover:text-white transition-colors">TheWoob Explorer</Link>, <Link href="/work/leadloom" className="hover:text-white transition-colors">LeadLoom</Link>
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
            Four live storefronts and a free data map, one engine, zero employees. Pick a
            geography, build a list, pay, and the CSV is in your inbox before you close the tab.
            Lead records are sold once and never resold.
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
                Free tools too: <a href={storefrontHref('leadloom', 'home', '/lookup')} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">try the ZIP lookup →</a>
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
                <img src={build.logo} alt={`${build.name} logo`} width={56} height={56} className="w-14 h-14 rounded-xl mb-4" />
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
                <div className="flex gap-3">
                  <Button href={build.liveUrl} external>
                    {build.liveLabel}
                  </Button>
                  <Button href={build.detailsUrl} variant="secondary">
                    Details
                  </Button>
                </div>
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
