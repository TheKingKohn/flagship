'use client'

import Link from 'next/link'
import { Button } from '@/components/Button'
import { useState, useEffect } from 'react'
import { storefrontHref } from '@/lib/storefrontLinks'
import { Atmosphere } from '@/components/Atmosphere'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { BrandCard } from '@/components/cards/BrandCard'
import { CardGroup } from '@/components/cards/CardGroup'
import { GROUPS, brands, groupMembers, kindOf } from '@/components/cards/catalog'

const projects = [
  {
    slug: 'memoryspace',
    name: 'MemorySpace',
    tag: 'Live',
    logo: '/brands/memoryspace.png',
    accent: '#F2D28C',
    initials: 'MS',
    gradient: 'from-yellow-300 to-amber-600',
    description: 'A personal memory vault: every photo and video you have kept, from Snapchat, your camera roll, and old backups, as a 3D universe you can fly through by time, place, and the people in them. Free for Windows and Mac, works offline, and your photos never leave your computer.',
    highlights: [
      'Imports 10,000+ memories in minutes; finds faces, trips, and what is in every photo on your own computer',
      'Time spiral, places map, Drift mode, and walk-in museum galleries. No account, no cloud, no photo uploads'
    ],
    publicLink: 'https://memoryspace.thewoob.com'
  },
  {
    slug: 'donos',
    name: 'DONOS',
    tag: 'Live',
    logo: '/brands/donos.png',
    accent: '#EC4899',
    initials: 'DN',
    gradient: 'from-pink-500 to-pink-700',
    description: 'A free donation page for creators. Sign up, share your own donate link, and accept one-time or monthly support through Stripe Connect, paid straight to your bank.',
    highlights: [
      'One-time and monthly donations with messages, anonymous giving, goals, and a top donors leaderboard',
      'Creator dashboard, a public Discover page, and an installable app for phones and desktops'
    ],
    publicLink: 'https://donos.thewoob.com'
  },
  {
    slug: 'fluxread',
    name: 'FluxRead',
    tag: 'Live',
    logo: '/brands/fluxread.png',
    accent: '#2DD4BF',
    initials: 'FR',
    gradient: 'from-teal-400 to-teal-600',
    description: 'A free speed reader that flashes one word at a time at the point your eye locks onto. Paste any link, import an EPUB, or pick from 90 free classics and read at 250 to 1,000 words a minute.',
    highlights: [
      'Smart pacing: long words and sentence endings linger, paragraphs pause, speed ramps up gently',
      'Works offline, installs as an app, and syncs your library across devices when you sign in'
    ],
    publicLink: 'https://fluxread.thewoob.com'
  },
  {
    slug: 'airfoil',
    name: 'Airfoil Lab',
    tag: 'Live',
    logo: '/brands/airfoil.png',
    accent: '#5AC8FA',
    initials: 'AL',
    gradient: 'from-sky-400 to-sky-600',
    description: 'A free, pocket-sized airfoil analyzer: a real Hess-Smith panel method solver in a web app you can install on your phone. Pick a NACA section or draw your own, and see its lift, drag, pressure, and stall behavior instantly.',
    highlights: [
      'Panel method plus boundary layer: lift, drag, pressure distribution, transition, and separation points',
      'Polar sweeps with Cl max and best L/D, live smoke flow, and up to 8 saved airfoils to compare'
    ],
    publicLink: 'https://airfoil.thewoob.com'
  },
  {
    slug: 'sky-lab',
    name: 'Sky Lab',
    tag: 'Live',
    logo: '/brands/sky-lab.png',
    accent: '#E8A33D',
    initials: 'SL',
    gradient: 'from-amber-400 to-amber-600',
    description: 'Point your phone at the sky and see what is up there right now: stars, planets, the Moon, the ISS and bright satellites, with real orbital propagation. Free, nothing uploaded, and it works offline once loaded.',
    highlights: [
      '9,100 stars, constellation lines, planets, a Moon at its real phase, and the ISS path, all following your phone',
      'Tap anything for a placard; a passes sheet sketches the next five visible ISS passes from where you stand'
    ],
    publicLink: 'https://skylab.thewoob.com'
  },
  {
    slug: 'street-time-machine',
    name: 'Street Time Machine',
    tag: 'Live',
    logo: '/brands/street-time-machine.png',
    accent: '#D9704F',
    initials: 'TM',
    gradient: 'from-orange-400 to-red-700',
    description: 'Type an address and slide from the 1880s to today over historic USGS topographic sheets laid on current aerial photography. See your street as the surveyors drew it. Free, keyless, nothing uploaded.',
    highlights: [
      'A time rail with a tick for every real map year at that spot, and a swipe divider between then and now',
      'Every view is a link: address, year, position and mode travel in the URL'
    ],
    publicLink: 'https://streettimemachine.thewoob.com'
  },
  {
    slug: 'handfont',
    name: 'HandFont',
    tag: 'Live',
    logo: '/brands/handfont.png',
    accent: '#D6401F',
    initials: 'HF',
    gradient: 'from-red-500 to-red-700',
    description: 'Your handwriting as a real font. Draw each letter on a guided sheet or photograph a filled-in template, and download a .ttf you can install anywhere. Everything happens in the browser; your handwriting never leaves your device.',
    highlights: [
      'A from-scratch tracer turns ink into clean outlines; a live proof shows your font as you draw it',
      'Photo mode straightens a phone photo of the printed template and cuts out every letter'
    ],
    publicLink: 'https://handfont.thewoob.com'
  },
  {
    slug: 'circuit-lab',
    name: 'Circuit Lab',
    tag: 'Live',
    logo: '/brands/circuit-lab.png',
    accent: '#4DEBA0',
    initials: 'CL',
    gradient: 'from-emerald-400 to-emerald-600',
    description: 'Draw a circuit on your phone and watch it run. A real modified-nodal-analysis simulator with diodes, transistors and op-amps, current animated along the wires, and a four-channel oscilloscope. Free and offline.',
    highlights: [
      'Resistors to MOSFETs and op-amps, solved continuously with Newton-Raphson and trapezoidal integration',
      'Ten worked examples, a bench-style scope with persistence, and whole circuits that fit inside a link'
    ],
    publicLink: 'https://circuitlab.thewoob.com'
  },
  {
    slug: 'lantern',
    name: 'Lantern',
    tag: 'Live',
    logo: '/brands/lantern.png',
    accent: '#F2A33A',
    initials: 'LN',
    gradient: 'from-amber-400 to-orange-600',
    description: 'A quiet map of overdose deaths, opioid prescribing, shortage areas and social vulnerability, county by county for all 50 states, with a 2003 to 2021 trend for every county. Free and offline.',
    highlights: [
      'Every U.S. county, with a twenty-year trend line and state and national rank',
      'Every layer labelled as modelled, claims-based, provisional or a designation; suppressed data hatched, never zero'
    ],
    publicLink: 'https://lantern.thewoob.com'
  },
  {
    slug: 'wellspring',
    name: 'Wellspring',
    tag: 'Live',
    logo: '/brands/wellspring.png',
    accent: '#7DE8C1',
    initials: 'WS',
    gradient: 'from-emerald-300 to-teal-500',
    description: 'The health, access and need map for six states: chronic conditions, checkups, disability, coverage and the safety net, county to tract, from published area statistics. Free and offline.',
    highlights: [
      '53 measures in quantile fifths, county to census tract, with a Screening gap panel for any county',
      'Keyboard path through the counties, live-region announcements, axe clean and Lighthouse accessibility 100'
    ],
    publicLink: 'https://wellspring.thewoob.com'
  },
  {
    slug: 'granary',
    name: 'Granary',
    tag: 'Live',
    logo: '/brands/granary.png',
    accent: '#C9A84C',
    initials: 'GR',
    gradient: 'from-yellow-500 to-amber-700',
    description: 'Where retirement money rests, county by county and tract by tract, for six states: income per tax return, pensions and IRA distributions, Social Security and home equity, with affluence tiers by neighbourhood. Free and offline.',
    highlights: [
      '26 statistics in quintiles of each state, with an affluence-tier view that sorts every tract into Core, Affluent and Premier',
      'A ledger, not a bank ad: serif numerals, matte brass, and the area-estimate caveat built into the design'
    ],
    publicLink: 'https://granary.thewoob.com'
  },
  {
    slug: 'roofline',
    name: 'Roofline',
    tag: 'Live',
    logo: '/brands/roofline.png',
    accent: '#8FD3FF',
    initials: 'RL',
    gradient: 'from-sky-300 to-blue-600',
    description: 'What the weather could do to the houses in a county or tract, and what those houses are, for six states: FEMA hazard scores and expected loss beside housing age, construction and heating fuel. Free and offline.',
    highlights: [
      'A hazard profile for every county against the state median, readable spoke by spoke, with a second county overlaid',
      'Hazards that cannot happen somewhere are hatched Not applicable, never zero; keyboard and screen-reader paths throughout'
    ],
    publicLink: 'https://roofline.thewoob.com'
  },
  {
    slug: 'patchwork',
    name: 'Patchwork',
    tag: 'Live',
    logo: '/brands/patchwork.png',
    accent: '#FF8F5A',
    initials: 'PW',
    gradient: 'from-orange-300 to-orange-600',
    description: 'An endless pixel canvas that everyone paints together: pan and zoom anywhere, place pixels from a 32-colour palette, watch other painters live, open a map that glows where people are painting, and jump to a busy place, the quiet frontier or a flag someone planted. Free, no sign-up, works on a phone.',
    highlights: [
      'The world is sparse chunks on disk, saved atomically, with a binary protocol that sends each painter only the chunks on their screen',
      'A map of warmth that fades over minutes, a busy-place button, a frontier button and validated named flags'
    ],
    publicLink: 'https://patchwork.thewoob.com'
  },
  {
    slug: 'haggle',
    name: 'Haggle',
    tag: 'Live',
    logo: '/brands/haggle.png',
    accent: '#E6B65C',
    initials: 'HG',
    gradient: 'from-amber-300 to-amber-600',
    description: 'An idle game built around a real, simulated economy: ten goods in a production chain, markets whose prices follow supply and demand (flood one and your own price collapses), rival merchants, shortages and fads, factors that sell for you, and a retire-and-replay loop. It keeps the market moving while you are away and tells you what it did. Free, works offline, no sign-up.',
    highlights: [
      'Prices ease toward an equilibrium with elasticity and seeded noise, so the same seed replays the same market, and a night away is replayed to within 1% of living through it',
      'Saves are validated and versioned on your device, with a checksummed text code to move them, and the whole thing works with the network cut'
    ],
    publicLink: 'https://haggle.thewoob.com'
  },
  {
    slug: 'long-weekend',
    name: 'Long Weekend',
    tag: 'Live',
    logo: '/brands/long-weekend.png',
    accent: '#E4572E',
    initials: 'LW',
    gradient: 'from-orange-400 to-red-600',
    description: 'A vacation day planner: tell it how many days you have and which days you work, and it lines them up with weekends and holidays for the most time off in a row, so five days can turn into sixteen off. Add the plan to your calendar, print it or share it. Free, installs on your phone, works offline.',
    highlights: [
      'An exact optimizer, tested against brute force, ranks every way to spend your days across the year',
      'Holiday pages by year and state pages with their own days, prerendered, with nothing stored on a server'
    ],
    publicLink: 'https://longweekend.thewoob.com'
  },
  {
    slug: 'raise-check',
    name: 'Raise Check',
    tag: 'Live',
    logo: '/brands/raise-check.png',
    accent: '#3FB27F',
    initials: 'RC',
    gradient: 'from-emerald-300 to-emerald-600',
    description: 'What your raise is really worth: type your old and new pay and see what lands in your pocket after federal tax, Social Security, Medicare and state tax, and whether you are ahead once prices are counted. Free, installs on your phone, and nothing you type leaves your device.',
    highlights: [
      'Tax math from the IRS tables and payroll rules, and inflation from the Bureau of Labor Statistics price index',
      'State pages built from researched records, each with its source and the date it was checked'
    ],
    publicLink: 'https://raise-check.thewoob.com'
  },
  {
    slug: 'night-sky',
    name: 'Night Sky',
    tag: 'Live',
    logo: '/brands/night-sky.png',
    accent: '#C9B27A',
    initials: 'NS',
    gradient: 'from-indigo-400 to-indigo-800',
    description: 'The exact sky above one place at one moment, made into a poster: pick a date, a time and a city and get a star chart in five styles, ready to print at 18 by 24 inches. Plus Name a Star, Free, an honest certificate for a real catalogue star. Free, works offline.',
    highlights: [
      'Sun, Moon and planets to about one arcminute and 9,110 catalogue stars brought to the date, for any night from 1800 to 2100',
      'The print file drawn in a Web Worker, and 60 tests checked against published sources'
    ],
    publicLink: 'https://nightsky.thewoob.com'
  },
  {
    slug: 'sternly',
    name: 'Sternly',
    tag: 'Live',
    logo: '/brands/sternly.png',
    accent: '#D0694F',
    initials: 'SL',
    gradient: 'from-slate-400 to-slate-700',
    description: 'Free, firm letters that cite the law: a security deposit demand for any state, debt validation, a credit report dispute, a medical bill itemized request and a stop-contact letter to a collector. Fill in a short form, watch the letter take shape, then print it or save a PDF.',
    highlights: [
      'State deposit records with citation, deadline, penalty and source, merged in only when fully sourced',
      'A PDF writer that runs on your device, so the letter never leaves your computer'
    ],
    publicLink: 'https://sternly.thewoob.com'
  },
  {
    slug: 'wind-tunnel',
    name: 'Wind Tunnel',
    tag: 'Live',
    logo: '/brands/wind-tunnel.png',
    accent: '#5EE6B0',
    initials: 'WT',
    gradient: 'from-teal-300 to-teal-600',
    description: 'Draw any shape with a finger or a mouse and watch air flow around it in real time: smoke, speed, vorticity and pressure, with drag and lift read out live. A real fluid solver running in your browser. Free, works offline.',
    highlights: [
      'A lattice Boltzmann solver in a Web Worker with WebGL2 drawing, proved against exact solutions to under half a percent',
      'Vortex shedding behind a cylinder at the frequency the published benchmark gives'
    ],
    publicLink: 'https://windtunnel.thewoob.com'
  },
  {
    slug: 'satisfy',
    name: 'Satisfy',
    tag: 'Live',
    logo: '/brands/satisfy.png',
    accent: '#E85DC4',
    initials: 'SF',
    gradient: 'from-pink-400 to-purple-600',
    description: 'Nine satisfying toys on one page: bubbles, paint, fireworks, a Pop-It, slime, sand, marbles, Plinko and ten sorting algorithms at work. Hit record and it makes a clip with sound to share from your phone. Free, works offline, no sign-up.',
    highlights: [
      'Every toy has its own small physics on one canvas, kept smooth on slow laptops by a quality governor',
      'Clips recorded from the canvas and the sound together, shared straight from a phone'
    ],
    publicLink: 'https://satisfy.thewoob.com'
  },
  {
    slug: 'survive',
    name: 'Will You Survive This?',
    tag: 'Live',
    logo: '/brands/survive.png',
    accent: '#F5C518',
    initials: 'WS',
    gradient: 'from-yellow-300 to-amber-600',
    description: 'The world ends tonight. You have $1000 and 61 seconds to shop, then 30 days of choices to live through with what you bought. 63 items, 18 endings, 15 achievements, and a link that gives a friend the same apocalypse. Free, no sign-up.',
    highlights: [
      'Seeded runs, so one short code gives everyone the same shop and the same run of events',
      'Balance checked by bots playing thousands of runs, and 107 tests'
    ],
    publicLink: 'https://survive.thewoob.com'
  },
  {
    slug: 'pulse-cam',
    name: 'Pulse Cam',
    tag: 'Live',
    logo: '/brands/pulse-cam.png',
    accent: '#F2556B',
    initials: 'PC',
    gradient: 'from-rose-400 to-rose-700',
    description: 'See your pulse in your own face: live video magnification on your camera makes the faint flush of each heartbeat visible, reads off your pulse once it is steady, and magnifies breathing in motion mode. Runs on your device; nothing is uploaded.',
    highlights: [
      'Eulerian video magnification after the MIT method, running on the graphics card with WebGL2',
      'Proved on a synthetic face: an invisible pulse magnified about 40 times, read back at 72 beats a minute'
    ],
    publicLink: 'https://pulsecam.thewoob.com'
  },
  {
    slug: 'invoice-maker',
    name: 'Invoice Maker',
    tag: 'Live',
    logo: '/brands/invoice-maker.png',
    accent: '#6B8CFF',
    initials: 'IM',
    gradient: 'from-blue-400 to-indigo-600',
    description: 'Free invoices and estimates with your logo, clients, line items, discounts and tax, a live preview and a clean PDF in one tap. Keeps a list of what is sent, paid and overdue, and turns an estimate into an invoice. Everything stays on your device.',
    highlights: [
      'Money math in exact whole cents, checked by thousands of random totals',
      'A PDF writer with no outside library, so nothing ever leaves your computer'
    ],
    publicLink: 'https://invoice.thewoob.com'
  },
]

const FILTERS = ['All', ...GROUPS.map((g) => g.filter)]
const LEGACY: Record<string, string> = { Web: 'All', Dashboard: 'Maps', Data: 'Maps', Automation: 'Apps' }
const network = brands.map((b) => ({ ...b, slug: b.detailsUrl.replace('/work/', '') }))

export default function WorkPage() {
  // Starts on All so the static export carries every card; a ?filter= in the URL (the Services page still links
  // with the old type names) is applied after mount. Reading it with useSearchParams made Next skip static
  // rendering of this whole page, which left /work empty for crawlers and link previews.
  const [activeFilter, setActiveFilter] = useState<string>('All')
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('filter')
    const p = param && (LEGACY[param] ?? param)
    if (p && FILTERS.includes(p)) setActiveFilter(p)
  }, [])

  const count = (key: (typeof GROUPS)[number]['key']) =>
    key === 'network' ? groupMembers(network, (b) => b.slug, key).length : groupMembers(projects, (p) => p.slug, key).length
  const getProjectCount = (filter: string) =>
    filter === 'All' ? GROUPS.reduce((n, g) => n + count(g.key), 0) : count(GROUPS.find((g) => g.filter === filter)!.key)

  return (
    <div className="bloom pt-f144 pb-f89 px-f21 lg:px-f34" style={{ '--bloom': '96 165 250', '--bloom-x': '30%' } as React.CSSProperties}>
      <Atmosphere />
      <div className="max-w-phi-lg mx-auto">
        <h1 className="text-phi-4 md:text-phi-6 font-bold tracking-tight mb-f34">
          Work
        </h1>

        <p className="text-phi-1 text-dark-muted mb-f55 max-w-phi-sm">
          Everything I have built, in five groups: free data maps, Labs that install on your phone, games to play with everyone, apps, and the Data Network&apos;s storefronts. Filter by group to jump to one.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-f13 mb-f55">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-f21 py-f8 rounded-f8 border text-phi--1 font-medium transition-all duration-f233 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70 ${
                activeFilter === filter
                  ? 'border-transparent bg-white text-black'
                  : 'border-white/10 bg-white/[0.03] text-dark-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-white/30 hover:text-white'
              }`}
            >
              {filter} ({getProjectCount(filter)})
            </button>
          ))}
        </div>

        {/* Groups */}
        <div className="mb-f55 md:mb-f89">
          {GROUPS.filter((g) => activeFilter === 'All' || g.filter === activeFilter).map((g) =>
            g.key === 'network' ? (
              <CardGroup key={g.key} level="h2" title={g.title} sub={g.sub} cols={4}>
                {groupMembers(network, (b) => b.slug, g.key).map((b) => (
                  <BrandCard key={b.slug} brand={b} />
                ))}
              </CardGroup>
            ) : (
              <CardGroup key={g.key} level="h2" title={g.title} sub={g.sub} cols={2}>
                {groupMembers(projects, (p) => p.slug, g.key).map((project) => (
                  <ProjectCard
                    key={project.slug}
                    heading="h3"
                    slug={project.slug}
                    name={project.name}
                    logo={project.logo}
                    accent={project.accent}
                    description={project.description}
                    highlights={project.highlights}
                    kind={kindOf(project.slug)}
                    status={project.tag as 'Live'}
                    href={`/work/${project.slug}`}
                    primary={
                      project.publicLink
                        ? { href: project.publicLink, label: project.slug === 'memoryspace' ? 'Download' : 'Open App', external: true }
                        : { href: '/contact', label: 'Request Demo' }
                    }
                    secondary={{ href: `/work/${project.slug}`, label: 'View Project' }}
                  />
                ))}
              </CardGroup>
            ),
          )}
        </div>

        {/* CTA */}
        <div className="card text-center p-f55">
          <h3 className="text-phi-3 md:text-phi-4 font-bold mb-f21">
            Need something similar?
          </h3>
          <p className="text-phi-1 text-dark-muted mb-f34 max-w-phi-sm mx-auto">
            Tell me what you're trying to build and I'll propose a path forward.
          </p>
          <Button href="/contact">Start a Conversation</Button>
        </div>
      </div>
    </div>
  )
}
