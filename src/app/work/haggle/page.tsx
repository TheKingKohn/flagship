import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://haggle.thewoob.com'

export const metadata: Metadata = {
  title: 'Haggle | Work',
  description: 'Haggle: a free idle game about a living market. Ten goods, prices that move with supply and demand (yours included), factors, contracts and monopolies, and a market that keeps moving while you are away. Works offline, no sign-up.',
  openGraph: {
    title: 'Haggle | Work',
    description: 'An idle game about a living market: flood it and your own price collapses, and come back after a night away to see what the world did. Free in your browser.',
    images: ['/projects/haggle/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/haggle',
  },
}

const screenshots = [
  { src: '/projects/haggle/first-screen', alt: 'The Haggle first screen: the H mark with a rising price line, one line of what the game is, four live price charts for grain, wool, ore and flour, and Start trading and save-code buttons', caption: 'First screen' },
  { src: '/projects/haggle/markets', alt: 'The Markets tab on a desktop: a cash and report header, a list of ten goods with price charts, held stock, price against the usual level and Sell and Buy buttons, beside a detail panel with a larger chart and trade controls', caption: 'The markets' },
  { src: '/projects/haggle/away-report', alt: 'The report shown on return after eight hours away: time away, one line of verdict, what was taken in, what sold with share bars, the price moves that mattered and a single button', caption: 'While you were away' },
]

const doesItems = [
  'Gives you ten goods in a chain, from grain, timber, wool and ore up through flour, cloth and iron to bread, coats and tools, each made by its own producer',
  'Moves every price with supply and demand: sell a lot at once and your own price falls along the curve, stop and it recovers, with a quote under each button before you commit',
  'Surprises you every few minutes with a shortage, a strong harvest, a rival dumping stock, a fad or a slump, written up in a quiet market report',
  'Lets you automate: factors that sell above a floor price you set, a clerk that buys missing inputs while they are cheap, then trade routes, contracts and monopolies',
  'Keeps the market moving while you are away, up to 24 hours, and greets you with one report: time away, what sold, the price moves that mattered and a one-line verdict',
  'Lets you retire the house for standing and start again faster, saves on your device, exports a text code, installs, and works with the network cut',
]

const builtItems = [
  'A market model of stock, target price, easing and elasticity per good, with a closed-form limit order and a price curve that gives the same result whether you sell in one lump or in a thousand taps',
  'Weather and events that are pure functions of seed, good and time, so the same seed replays the same market and an offline catch-up sees exactly the events a live loop would have',
  'One step function for the live loop (0.25 s on the real clock, with catch-up) and for time away (2 s steps in slices that keep the page alive), tested to agree within 1% over eight hours',
  'Saves in the browser that are schema-validated and versioned on every read, a corrupt one set aside with a clear message, and a checksummed export code that is size-capped, decoded strictly and never evaluated',
  'A phone-first React and canvas client with a real desktop layout, tabular figures, hold-to-repeat, a held-to-confirm retire flow and motion that respects reduced-motion settings',
  '118 tests including a hostile-save suite, a headless-Chrome privacy and offline walk, an axe-core run over every screen, a strict content security policy with no remote origin, and a greedy bot that plays the economy to check the pacing',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-f13">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function HagglePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Haggle',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    description: 'A free idle game about a living market: prices that move with supply and demand, and honest offline progress. Runs entirely in your browser.',
    url: LIVE,
    image: 'https://thewoob.com/projects/haggle/og.jpg',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Person', name: 'Gavin Kohn', url: 'https://thewoob.com' },
  }

  return (
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-phi-md mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-f34 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-f13 mb-f21">
          <img src="/brands/haggle.png" alt="Haggle logo" width={56} height={56} className="w-14 h-14 rounded-f13" />
          <h1 className="text-phi-4 md:text-phi-5 font-bold">Haggle</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          Most idle games are numbers that go up. In Haggle the numbers are prices, and they push back. Make grain, sell
          too much of it, and watch your own price fall; hold off and it climbs back. A shortage lifts ore, a rival
          dumps wool, a fad takes cloth. Hire factors, buy a contract, corner a scarce good, then close the app and
          come back to a report of what the market did without you. It works with a thumb or a mouse, offline, with
          nothing to sign up for.
        </p>

        <section className="mb-f55">
          <h2 className="text-phi-2 font-bold mb-f13">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-f13">
            {screenshots.map((shot) => (
              <a key={shot.src} href={`${shot.src}.webp`} target="_blank" className="block hover:opacity-80 transition-opacity">
                <img
                  src={`${shot.src}-card.webp`}
                  alt={shot.alt}
                  loading="lazy"
                  className="w-full aspect-golden object-cover object-top rounded-f5 border border-dark-border"
                />
                <p className="text-phi--1 text-dark-muted mt-f8 text-center">{shot.caption}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f21">What It Does</h2>
          <ul className="space-y-f13">
            {doesItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f21">What I Built</h2>
          <ul className="space-y-f13">
            {builtItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        <div className="flex flex-col sm:flex-row gap-f13 pt-f34 border-t border-dark-border">
          <Button href={LIVE} external>
            Play Haggle
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
