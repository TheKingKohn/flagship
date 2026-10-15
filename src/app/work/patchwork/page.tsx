import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://patchwork.thewoob.com'

export const metadata: Metadata = {
  title: 'Patchwork | Work',
  description: 'Patchwork: a free endless pixel canvas that everyone paints together. Pan and zoom anywhere, watch other painters live, open a map that glows where people are, and jump to a busy place, a quiet frontier or a flag someone planted. Works on a phone, no sign-up.',
  openGraph: {
    title: 'Patchwork | Work',
    description: 'An endless canvas, painted together: pixels, a live map of where people are, and a button that takes you there. Free in your browser.',
    images: ['/projects/patchwork/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/patchwork',
  },
}

const screenshots = [
  { src: '/projects/patchwork/first-screen', alt: 'The Patchwork first screen over a live canvas: the quilt-block mark and wordmark, one line of how to start, a live count of painters and a Start painting button', caption: 'First screen' },
  { src: '/projects/patchwork/painting', alt: 'Painting on a desktop: small pixel motifs on a dark ground, a short coral line just placed, and a dock with the colour ring, recent colours, a pen, Explore and the map', caption: 'Painting' },
  { src: '/projects/patchwork/world-map', alt: 'The world map: a cluster of painted chunks in their own colours with a warm edge and glow where pixels are landing, a few named flags, and a box showing where you are', caption: 'The world map' },
]

const doesItems = [
  'Gives you an endless canvas: pan and zoom anywhere, with crisp pixels from a single pixel up to a whole neighbourhood',
  'Lets you paint with a tap, or draw a line with the pen, from a 32-colour palette, using a small bank of pixels that refills every quarter of a second',
  'Shows other painters as small coloured cursors and their pixels as they land, from many hundreds of people at once',
  'Opens a world map that glows where people are painting right now, with your own screen outlined, and takes you anywhere you tap',
  'Takes you somewhere on request: a busy place, the quiet frontier at the edge of what has been painted, or a place someone named with a flag',
  'Keeps the world between visits, shares a link that reopens the exact spot and zoom, and never asks you to sign up',
]

const builtItems = [
  'The world is sparse 256 by 256 chunks of one byte per pixel on disk, saved lazily and atomically, loaded on demand and evicted when idle, with hard limits on the world radius, chunks on disk, chunks in memory and chunks one connection may watch',
  'A Node 22 server on the ws package alone: a binary protocol with 64-byte client frames, per-chunk pixel changes batched at 20 Hz and sent only to the people watching them, and chunks sent run-length coded',
  'An overview index of the known world rebuilt every ten seconds, with a warmth for every chunk that fades over a couple of minutes, behind the map, the busy-place button and the frontier button',
  'A vanilla JavaScript canvas client that draws each chunk once into its own small canvas, so panning is copying pictures, with whole-number zoom settling, touch gestures that never fight and a debug overlay',
  'A server that trusts no client number: a message budget, a cooldown it enforces itself, coalesced view changes, join and subscribe limits, validated flag names, an Origin check and a strict content security policy',
  '119 tests including a simulated crash mid-write and the 20,001st chunk, a headless-Chrome privacy walk, an axe-core run over every screen, a real front-door test, and a load run that held 20 ticks a second with 600 painters',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-3">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function PatchworkPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Patchwork',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    description: 'A free endless pixel canvas that everyone paints together: pan and zoom anywhere, watch other painters live, and travel to where people are painting right now.',
    url: LIVE,
    image: 'https://thewoob.com/projects/patchwork/og.jpg',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Person', name: 'Gavin Kohn', url: 'https://thewoob.com' },
  }

  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <img src="/brands/patchwork.png" alt="Patchwork logo" width={56} height={56} className="w-14 h-14 rounded-xl" />
          <h1 className="text-5xl md:text-6xl font-bold">Patchwork</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          One canvas with no edge, painted by whoever turns up. Pick a colour, tap a pixel, and watch a small cursor
          from someone else drift across the ground you are working on. A map shows where the world is warm, and a
          compass button takes you there, or to the quiet frontier, or to a spot someone has named. Slow bots keep
          the middle alive. It works with a thumb or a mouse, and there is nothing to sign up for.
        </p>

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

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What It Does</h2>
          <ul className="space-y-3">
            {doesItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            {builtItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-dark-border">
          <Button href={LIVE} external>
            Open Patchwork
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
