'use client'

import Link from 'next/link'
import { Button } from '@/components/Button'
import { Typewriter } from '@/components/Typewriter'
import { Atmosphere } from '@/components/Atmosphere'
import { ProjectCard } from '@/components/cards/ProjectCard'
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
  {
    logo: '/brands/airfoil.png',
    accent: '#5AC8FA',
    name: 'Airfoil Lab',
    description: 'Pocket-sized wing analysis: a real panel-method solver that shows the lift, drag, and pressure of any airfoil, right on your phone.',
    highlights: [
      'NACA, Clark Y, Eppler, and Selig sections, or draw your own',
      'Lift and drag polars, live smoke flow, and stall markers',
    ],
    detailsUrl: '/work/airfoil',
    liveUrl: 'https://airfoil.thewoob.com',
    liveLabel: 'Open',
  },
  {
    logo: '/brands/sky-lab.png',
    accent: '#E8A33D',
    name: 'Sky Lab',
    description: 'Point your phone at the sky and see what is up there right now: stars, planets, the Moon, the ISS and bright satellites, with real orbital math on your phone.',
    highlights: [
      '9,100 stars, constellation lines, and a Moon at its real phase',
      'The next five visible ISS passes, sketched across the sky',
    ],
    detailsUrl: '/work/sky-lab',
    liveUrl: 'https://skylab.thewoob.com',
    liveLabel: 'Open',
  },
  {
    logo: '/brands/street-time-machine.png',
    accent: '#D9704F',
    name: 'Street Time Machine',
    description: 'Type an address and slide from the 1880s to today over historic USGS maps laid on current aerial photos. See your street as the surveyors drew it.',
    highlights: [
      'A time rail of every real map year at that spot',
      'Swipe between then and now; every view is a link',
    ],
    detailsUrl: '/work/street-time-machine',
    liveUrl: 'https://streettimemachine.thewoob.com',
    liveLabel: 'Open',
  },
  {
    logo: '/brands/handfont.png',
    accent: '#D6401F',
    name: 'HandFont',
    description: 'Your handwriting as a real font. Draw each letter or photograph a filled-in template, and download a .ttf. Nothing leaves your device.',
    highlights: [
      'A from-scratch tracer turns ink into clean outlines',
      'Install the result on Windows, Mac or iPhone',
    ],
    detailsUrl: '/work/handfont',
    liveUrl: 'https://handfont.thewoob.com',
    liveLabel: 'Open',
  },
  {
    logo: '/brands/circuit-lab.png',
    accent: '#4DEBA0',
    name: 'Circuit Lab',
    description: 'Draw a circuit on your phone and watch it run: a real simulator with diodes, transistors and op-amps, animated current, and a four-channel scope.',
    highlights: [
      'Ten worked examples, from a voltage divider to a multivibrator',
      'Whole circuits fit inside a link',
    ],
    detailsUrl: '/work/circuit-lab',
    liveUrl: 'https://circuitlab.thewoob.com',
    liveLabel: 'Open',
  },
  {
    logo: '/brands/lantern.png',
    accent: '#F2A33A',
    name: 'Lantern',
    description: 'Overdose and care, county by county, for every county in the United States: death rates with a twenty-year trend, prescribing, shortage areas and vulnerability.',
    highlights: [
      'All 50 states, with a trend line for every county',
      'Places, never people; counted and modelled kept apart',
    ],
    detailsUrl: '/work/lantern',
    liveUrl: 'https://lantern.thewoob.com',
    liveLabel: 'Open',
  },
  {
    logo: '/brands/wellspring.png',
    accent: '#7DE8C1',
    name: 'Wellspring',
    description: 'Health, access and need for six states: conditions, checkups, disability, coverage and the safety net, county to tract.',
    highlights: [
      '53 measures, county to census tract',
      'A Screening gap panel for any county',
    ],
    detailsUrl: '/work/wellspring',
    liveUrl: 'https://wellspring.thewoob.com',
    liveLabel: 'Open',
  },
  {
    logo: '/brands/granary.png',
    accent: '#C9A84C',
    name: 'Granary',
    description: 'Where retirement money rests: income per tax return, pensions, Social Security and home equity, county by county and tract by tract, for six states.',
    highlights: [
      'Affluence tiers for every neighbourhood',
      'IRS and Census figures, honest about which is which',
    ],
    detailsUrl: '/work/granary',
    liveUrl: 'https://granary.thewoob.com',
    liveLabel: 'Open',
  },
  {
    logo: '/brands/roofline.png',
    accent: '#8FD3FF',
    name: 'Roofline',
    description: 'What the weather could do to the houses here, and what the houses are: FEMA hazard scores beside housing age and heating fuel, county to tract, six states.',
    highlights: [
      'A hazard profile for every county',
      'The roof strip: age, construction and fuel',
    ],
    detailsUrl: '/work/roofline',
    liveUrl: 'https://roofline.thewoob.com',
    liveLabel: 'Open',
  },
  {
    logo: '/brands/patchwork.png',
    accent: '#FF8F5A',
    name: 'Patchwork',
    description: 'An endless pixel canvas that everyone paints together, with a map that glows where people are and a button that takes you there. Free, in your browser or on your phone.',
    highlights: [
      'Pan and zoom anywhere, with other painters live and a world map warm where pixels are landing',
      'A world saved to disk in chunks, a binary protocol and a server built for many hundreds of painters',
    ],
    detailsUrl: '/work/patchwork',
    liveUrl: 'https://patchwork.thewoob.com',
    liveLabel: 'Open',
  },
  {
    logo: '/brands/haggle.png',
    accent: '#E6B65C',
    name: 'Haggle',
    description: 'An idle game about a living market: prices move with supply and demand, yours included, and keep moving while you are away. Free, in your browser or on your phone, and it works offline.',
    highlights: [
      'Ten goods in a chain, markets that react when you flood them, and a report of what the world did while you were gone',
      'A simulated economy that replays honestly offline, with saves on your device and no server at all',
    ],
    detailsUrl: '/work/haggle',
    liveUrl: 'https://haggle.thewoob.com',
    liveLabel: 'Play',
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
      <Atmosphere hero />
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
            New this week: <Link href="/work/patchwork" className="hover:text-white transition-colors">Patchwork</Link> and <Link href="/work/haggle" className="hover:text-white transition-colors">Haggle</Link>, an endless pixel canvas and an idle market, both free. <Link href="/work" className="hover:text-white transition-colors underline underline-offset-4 decoration-dark-border">All the Labs</Link>
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
      <section id="network" className="bloom py-24 px-6 lg:px-8 bg-dark-card/30" style={{ '--bloom': '96 165 250' } as React.CSSProperties}>
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
                className="card p-6 flex flex-col"
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
      <section className="bloom py-24 px-6 lg:px-8" style={{ '--bloom': '45 212 191', '--bloom-x': '25%' } as React.CSSProperties}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">More Builds</h2>
          <p className="text-dark-muted text-lg mb-12 max-w-3xl">
            Free tools and apps built for the fun of it. The Labs install on your phone, work offline, and
            keep your data on your device.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {builds.map((build) => (
              <ProjectCard
                key={build.name}
                slug={build.detailsUrl.replace('/work/', '')}
                name={build.name}
                logo={build.logo}
                accent={build.accent}
                description={build.description}
                highlights={build.highlights}
                primary={{ href: build.liveUrl, label: build.liveLabel, external: true }}
                secondary={{ href: build.detailsUrl, label: 'Details' }}
                href={build.detailsUrl}
              />
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
      <section className="bloom py-24 px-6 lg:px-8 bg-dark-card/30" style={{ '--bloom': '214 190 160', '--bloom-x': '50%' } as React.CSSProperties}>
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
