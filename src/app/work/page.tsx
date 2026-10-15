'use client'

import Link from 'next/link'
import { Button } from '@/components/Button'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { storefrontHref } from '@/lib/storefrontLinks'
import { Atmosphere } from '@/components/Atmosphere'
import { ProjectCard } from '@/components/cards/ProjectCard'

const projects = [
  {
    slug: 'memoryspace',
    name: 'MemorySpace',
    tag: 'Live',
    logo: '/brands/memoryspace.png',
    accent: '#F2D28C',
    initials: 'MS',
    gradient: 'from-yellow-300 to-amber-600',
    types: ['Data', 'Automation'],
    description: 'A personal memory vault: every photo and video you have kept, from Snapchat, your camera roll, and old backups, as a 3D universe you can fly through by time, place, and the people in them. Free for Windows and Mac, works offline, and your photos never leave your computer.',
    highlights: [
      'Imports 10,000+ memories in minutes; finds faces, trips, and what is in every photo on your own computer',
      'Time spiral, places map, Drift mode, and walk-in museum galleries. No account, no cloud, no photo uploads'
    ],
    publicLink: 'https://memoryspace.thewoob.com'
  },
  {
    slug: 'explorer',
    name: 'TheWoob Explorer',
    tag: 'Live',
    logo: '/brands/explorer.png',
    accent: '#6366F1',
    initials: 'EX',
    gradient: 'from-indigo-500 to-indigo-700',
    types: ['Dashboard', 'Web', 'Data'],
    description: 'A free, public map of Medicare, senior, wealth, housing, health, and hazard data across six states. Zoom from state to county to neighborhood, with live counts of available leads.',
    highlights: [
      '390 counties, 16,877 Census tracts, and 47,390 block groups across 83 map layers',
      'Plain-HTML data pages and a free JSON API built for search engines and AI assistants to cite'
    ],
    publicLink: storefrontHref('explorer', 'work')
  },
  {
    slug: 'donos',
    name: 'DONOS',
    tag: 'Live',
    logo: '/brands/donos.png',
    accent: '#EC4899',
    initials: 'DN',
    gradient: 'from-pink-500 to-pink-700',
    types: ['Web', 'Dashboard'],
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
    types: ['Web'],
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
    types: ['Web', 'Labs'],
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
    types: ['Web', 'Labs'],
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
    types: ['Web', 'Data', 'Labs'],
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
    types: ['Web', 'Labs'],
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
    types: ['Web', 'Labs'],
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
    types: ['Web', 'Labs'],
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
    types: ['Web', 'Labs'],
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
    types: ['Web', 'Labs'],
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
    types: ['Web', 'Labs'],
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
    types: ['Web', 'Labs'],
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
    types: ['Web', 'Labs'],
    description: 'An idle game built around a real, simulated economy: ten goods in a production chain, markets whose prices follow supply and demand (flood one and your own price collapses), rival merchants, shortages and fads, factors that sell for you, and a retire-and-replay loop. It keeps the market moving while you are away and tells you what it did. Free, works offline, no sign-up.',
    highlights: [
      'Prices ease toward an equilibrium with elasticity and seeded noise, so the same seed replays the same market, and a night away is replayed to within 1% of living through it',
      'Saves are validated and versioned on your device, with a checksummed text code to move them, and the whole thing works with the network cut'
    ],
    publicLink: 'https://haggle.thewoob.com'
  },
]

function WorkPageInner() {
  const searchParams = useSearchParams()
  const [activeFilter, setActiveFilter] = useState<string>(() => {
    const param = searchParams.get('filter')
    const valid = ['All', 'Labs', 'Dashboard', 'Web', 'Data', 'Automation']
    return param && valid.includes(param) ? param : 'All'
  })

  const filters = ['All', 'Labs', 'Dashboard', 'Web', 'Data', 'Automation']

  const getProjectCount = (filter: string) => {
    if (filter === 'All') return projects.length
    return projects.filter(p => p.types.includes(filter)).length
  }

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.types.includes(activeFilter))

  return (
    <div className="bloom pt-32 pb-24 px-6 lg:px-8" style={{ '--bloom': '96 165 250', '--bloom-x': '30%' } as React.CSSProperties}>
      <Atmosphere />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Work
        </h1>

        <p className="text-xl text-dark-muted mb-12 max-w-2xl">
          Everything outside the data network: apps, tools, and one-off builds, plus TheWoob Explorer, the network's free public map. The Labs are free, installable web apps and data maps with a real engine inside, nothing uploaded. Filter by type to find something similar to what you need.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-white text-black'
                  : 'bg-dark-card text-dark-muted border border-dark-border hover:border-white/30'
              }`}
            >
              {filter} ({getProjectCount(filter)})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              heading="h2"
              slug={project.slug}
              name={project.name}
              logo={project.logo}
              accent={project.accent}
              description={project.description}
              highlights={project.highlights}
              types={project.types}
              href={`/work/${project.slug}`}
              primary={
                project.publicLink
                  ? { href: project.publicLink, label: project.slug === 'memoryspace' ? 'Download' : 'Open App', external: true }
                  : { href: '/contact', label: 'Request Demo' }
              }
              secondary={{ href: `/work/${project.slug}`, label: 'View Project' }}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="card text-center p-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Need something similar?
          </h3>
          <p className="text-lg text-dark-muted mb-8 max-w-2xl mx-auto">
            Tell me what you're trying to build and I'll propose a path forward.
          </p>
          <Button href="/contact">Start a Conversation</Button>
        </div>
      </div>
    </div>
  )
}

export default function WorkPage() {
  return (
    <Suspense fallback={null}>
      <WorkPageInner />
    </Suspense>
  )
}
