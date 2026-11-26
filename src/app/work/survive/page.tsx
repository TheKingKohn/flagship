import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://survive.thewoob.com'

export const metadata: Metadata = {
  title: 'Will You Survive This? | Work',
  description: 'Will You Survive This?: the world ends tonight. You have $1000 and 61 seconds to shop, then 30 days of choices. 63 items, 18 endings, 15 achievements, and a link that gives your friends the same apocalypse. Free, no sign-up.',
  openGraph: {
    title: 'Will You Survive This? | Work',
    description: 'You have $1000 and 61 seconds to shop for the end of the world. Then you have to live with it. Free in your browser.',
    images: ['/projects/survive/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/survive',
  },
}

const screenshots = [
  { src: '/projects/survive/first-screen', alt: 'The Will You Survive This? title screen on a desktop: hazard stripes, the title in yellow, one line of the premise and a big Play button', caption: 'Title screen' },
  { src: '/projects/survive/phone', alt: 'The title screen on a phone, the yellow title filling the width under hazard stripes', caption: 'On a phone' },
]

const doesItems = [
  'A 61 second shopping spree with 63 items, a flash sale and a live count of how many days your water and food will last',
  'Thirty days of event cards with choices, where the right gear opens up better options',
  'Seven stats to keep alive, a bag you can open any time and a helper that eats and drinks for you',
  '18 different endings and 15 achievements to find, saved on your device',
  'A result to share and a run link that gives friends the same flash sale and the same run of events',
  'Works on a phone or a keyboard, with sound and a relaxed mode with no clock; no account and no tracking',
]

const builtItems = [
  'A game engine ported from the original Python version and pinned by tests, with its old bugs fixed',
  'Seeded runs, so one short code gives everyone the same shop and the same run of events',
  'Balance checked by bots playing thousands of runs: sensible shoppers survive almost every time, empty-handed ones rarely do',
  'Saves that are validated on every load, and a run in progress that picks up after a reload',
  '107 tests, an offline service worker and a strict content security policy',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-f13">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function SurvivePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Will You Survive This?',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    description: 'A free apocalypse shopping and survival game: 61 seconds to shop, then 30 days of choices. Runs entirely in your browser.',
    url: LIVE,
    image: 'https://thewoob.com/projects/survive/og.jpg',
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
          <img src="/brands/survive.png" alt="Will You Survive This? logo" width={56} height={56} className="w-14 h-14 rounded-f13" />
          <h1 className="text-phi-4 md:text-phi-5 font-bold">Will You Survive This?</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          The world ends tonight. You have $1000 and 61 seconds to shop. Water or a crossbow? Canned beans or a generator? Then the clock stops and you live with what you bought, one day and one hard choice at a time, for 30 days. Share how you did, or send a friend a link to the exact same apocalypse and see who lasts longer.
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
            Play Will You Survive This?
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
