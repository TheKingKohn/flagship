'use client'

import Link from 'next/link'
import { Button } from '@/components/Button'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { storefrontHref } from '@/lib/storefrontLinks'

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
    publicLink: 'https://sky.thewoob.com'
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
    publicLink: 'https://then.thewoob.com'
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
    publicLink: 'https://circuit.thewoob.com'
  },
]

const tagStyles = {
  Live: 'bg-green-500/20 text-green-300 border-green-500/40',
  MVP: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  Demo: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  Prototype: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
  Past: 'bg-dark-muted/10 text-dark-muted border-dark-muted/20'
}

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
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Work
        </h1>

        <p className="text-xl text-dark-muted mb-12 max-w-2xl">
          Everything outside the data network: apps, tools, and one-off builds, plus TheWoob Explorer, the network's free public map. The Labs are free, installable web apps with a real engine inside, nothing uploaded. Filter by type to find something similar to what you need.
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
            <article
              key={project.slug}
              className="brand-card p-8 bg-dark-card border border-dark-border rounded-lg"
              style={{ '--accent': project.accent } as React.CSSProperties}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-lg"
                    />
                  ) : (
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center text-lg font-bold text-white`}>
                      {project.initials}
                    </div>
                  )}
                  <h2 className="text-2xl font-bold">
                    {project.name}
                  </h2>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full border shrink-0 ${tagStyles[project.tag as keyof typeof tagStyles]}`}>
                  {project.tag}
                </span>
              </div>

              {/* Type Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.types.map((type) => (
                  <span
                    key={type}
                    className="text-xs text-dark-muted bg-dark-border/30 px-2 py-1 rounded"
                  >
                    {type}
                  </span>
                ))}
              </div>

              <p className="text-dark-muted mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white mb-2">Key Features</h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white mr-3">→</span>
                      <span className="text-dark-muted text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <Button href={`/work/${project.slug}`} variant="secondary">
                  View Project
                </Button>
                {project.publicLink ? (
                  <Button href={project.publicLink} external>
                    {project.slug === 'memoryspace' ? 'Download' : 'Open App'}
                  </Button>
                ) : (
                  <Button href="/contact">
                    Request Demo
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-dark-card/30 rounded-lg border border-dark-border">
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
