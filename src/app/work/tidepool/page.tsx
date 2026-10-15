import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://tidepool.thewoob.com'

export const metadata: Metadata = {
  title: 'Tidepool | Work',
  description: 'Tidepool: a free multiplayer cell game for the browser. Eat specks and smaller cells, split to catch, give a little back, and keep clear of bigger cells and viruses, in one shared pool with a live leaderboard. Works on a phone, no sign-up.',
  openGraph: {
    title: 'Tidepool | Work',
    description: 'A calm multiplayer cell game: eat, grow, split, and stay clear of anything bigger. Free in your browser.',
    images: ['/projects/tidepool/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/tidepool',
  },
}

const screenshots = [
  { src: '/projects/tidepool/first-screen', alt: 'The Tidepool first screen over the live pool: the wordmark, three key caps for steering, splitting and feeding, a nickname field, six colours and four patterns with a preview cell, a Play button and a live count', caption: 'First screen' },
  { src: '/projects/tidepool/in-the-pool', alt: 'Mid-game on a desktop: a player who has split into two teal cells among specks and a virus, with the mass panel top left and the top ten leaderboard top right', caption: 'In the pool' },
  { src: '/projects/tidepool/end-card', alt: 'The end card after being eaten: a one-line verdict, peak mass, time alive and cells eaten, and a Back in the pool button, over the dimmed pool', caption: 'Eaten' },
]

const doesItems = [
  'Puts you in one big shared pool with a live leaderboard, and bots so it is never empty',
  'Lets you eat specks and any cell under about 85 percent of your mass; bigger cells are slower and mass slowly decays',
  'Splits a cell forward to catch something, merges the pieces back after a cooldown, and lets you feed a little mass back, or a virus enough to make it fire a new one',
  'Breaks a large cell into up to sixteen pieces when it touches a virus',
  'Drifts the water and the specks through deep night, first light, high water and low sun, following the time of day on the server',
  'Plays with a mouse and keyboard or a two-button thumb layout, and installs full-screen',
]

const builtItems = [
  'A Node 22 server on the ws package alone owns every position, eat and split at 25 ticks a second, behind the same front door as the other sites with the websocket passed through',
  'A quadtree answers every collision and visibility query, checked against brute force on random data',
  'A binary protocol: five-byte inputs, snapshots packed per client for the area it can see, specks sent as additions and removals, never more than 100 cells in one snapshot',
  'A vanilla JavaScript canvas client that draws other players a tenth of a second behind, predicts your own cells and eases every correction, with no allocation in the frame loop',
  'A server that trusts no client number: sequence-checked 8-bit inputs, a 64-byte frame cap, a 60-messages-a-second budget, an Origin check and a strict content security policy',
  '106 tests, a headless-Chrome privacy walk with a hostile nickname, an axe-core run over every screen and a load test that held 25 ticks a second with 110 sockets',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-3">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function TidepoolPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    playMode: 'MultiPlayer',
    gamePlatform: 'Web browser',
    name: 'Tidepool',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    description: 'A free multiplayer cell game for the browser: eat, grow, split, and stay clear of bigger cells and viruses in one shared pool.',
    url: LIVE,
    image: 'https://thewoob.com/projects/tidepool/og.jpg',
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
          <img src="/brands/tidepool.png" alt="Tidepool logo" width={56} height={56} className="w-14 h-14 rounded-xl" />
          <h1 className="text-5xl md:text-6xl font-bold">Tidepool</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          A calm place to play a cell game. You are a soft disc in one shared, dark pool: eat the specks and
          anything smaller to grow, split to catch something, give a little back, and keep clear of whatever is
          bigger. The water changes with the time of day on the server, and a live leaderboard and a few bots keep
          the pool lively. It works with a mouse or a thumb, and there is nothing to sign up for.
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
            Play Tidepool
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
