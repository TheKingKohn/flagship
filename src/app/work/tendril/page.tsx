import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://tendril.thewoob.com'

export const metadata: Metadata = {
  title: 'Tendril | Work',
  description: 'Tendril: a free multiplayer worm game for the browser. Steer with the mouse or a finger, eat to grow, boost past rivals at the cost of length, and outlast a border that closes in over every six-minute round. Works on a phone, no sign-up.',
  openGraph: {
    title: 'Tendril | Work',
    description: 'A calm multiplayer worm game: steer, eat, boost, and outlast the closing border. Free in your browser.',
    images: ['/projects/tendril/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/tendril',
  },
}

const screenshots = [
  { src: '/projects/tendril/first-screen', alt: 'The Tendril first screen over drifting worms: the wordmark, a nickname field, twelve skins with the chosen one marked, a Play button and a live player count', caption: 'First screen' },
  { src: '/projects/tendril/in-the-garden', alt: 'Mid-game on a desktop: a teal striped worm among pellets, with the length panel top left, the border countdown top centre, the top ten top right and a round minimap bottom left', caption: 'In the garden' },
  { src: '/projects/tendril/end-of-life', alt: 'The end card after drifting past the border: a one-line verdict, the length reached, kills, time alive and rank, and a Play again button, over the dimmed map with the pale ring crossing it', caption: 'Past the edge' },
]

const doesItems = [
  'Puts you in one shared garden with a live top ten, a kill feed and a minimap, and bots so it is never empty',
  'Steers your worm toward the mouse or your finger; hold to boost, which makes you faster, costs length and leaves pellets behind',
  'Ends your run when your head touches another worm body, and turns its whole length into pellets along the body for everyone else',
  'Closes a pale ring over six minutes from the whole map down to a small garden, warming to amber and trembling the screen as you near it, then starts a fresh round with a summary',
  'Offers twelve skins as stripes, dots and two-tone, with a nickname, and a card that shows what you reached when you go',
  'Plays with a mouse or a thumb layout with a boost button, installs full-screen and never asks you to sign up',
]

const builtItems = [
  'A Node 22 server on the ws package alone owns every worm, collision and pellet at 30 ticks a second, behind the same front door as the other sites with the websocket passed through',
  'A uniform point grid rebuilt every tick answers every collision, and a cell hash answers every pellet query, both checked against brute force on random data',
  'A binary protocol: six-byte inputs, snapshots packed per client for the area it can see, pellets sent as additions and removals, bodies rebuilt on the client from the path of each head',
  'A vanilla JavaScript canvas client that draws each worm as one stroked path, predicts your own head with the server rules and eases every correction, with no allocation in the frame loop',
  'A server that trusts no client number: a 64-byte frame cap, a 60-messages-a-second budget, validated nicknames, hard caps on players, pellets and sockets, an Origin check and a strict content security policy',
  '102 tests, a headless-Chrome privacy walk with a hostile nickname, an axe-core run over every screen, a real front-door test and a load run that held 30 ticks a second with 80 players',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-3">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function TendrilPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    playMode: 'MultiPlayer',
    gamePlatform: 'Web browser',
    name: 'Tendril',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    description: 'A free multiplayer worm game for the browser: steer, eat, boost, and outlast a border that closes in over each six-minute round.',
    url: LIVE,
    image: 'https://thewoob.com/projects/tendril/og.jpg',
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
          <img src="/brands/tendril.png" alt="Tendril logo" width={56} height={56} className="w-14 h-14 rounded-xl" />
          <h1 className="text-5xl md:text-6xl font-bold">Tendril</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          A quiet place to play a worm game. You steer a small glowing worm through a dark garden, eat pellets to
          grow, boost past rivals when you can afford it, and keep out of anyone else&apos;s body. A pale ring closes in
          over six minutes, and when a worm goes, its length becomes food for everyone. Bots and a live top ten keep
          the garden lively. It works with a mouse or a thumb, and there is nothing to sign up for.
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
            Play Tendril
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
