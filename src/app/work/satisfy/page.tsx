import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://satisfy.thewoob.com'

export const metadata: Metadata = {
  title: 'Satisfy | Work',
  description: 'Satisfy: nine satisfying toys on one page, from bubbles and slime to sand, Pop-It, Plinko and a sorting visualizer, with a record button that makes a clip to share. Free, works on a phone, no sign-up.',
  openGraph: {
    title: 'Satisfy | Work',
    description: 'Pop bubbles, pour sand, squish slime and watch sorting algorithms at work, then record a clip and send it. Free in your browser.',
    images: ['/projects/satisfy/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/satisfy',
  },
}

const screenshots = [
  { src: '/projects/satisfy/first-screen', alt: 'Satisfy on a desktop: a screen full of soft colored bubbles, a Record button in the corner and a row of nine toys along the bottom', caption: 'Bubbles' },
  { src: '/projects/satisfy/phone', alt: 'Satisfy on a phone: the title, sound, info and Record buttons above a canvas of bubbles', caption: 'On a phone' },
]

const doesItems = [
  'Nine toys in one page: Bubbles, Paint, Fireworks, Pop-It, Slime, Sand, Marbles, Plinko and Sort',
  'Sort shows ten sorting algorithms at work, from bubble sort to quicksort, with a short note on every step',
  'Records up to a minute of play with sound, and shares the clip straight from a phone or saves it',
  'Works with a finger or a mouse, with sound made in the browser and a mute button',
  'Keeps itself smooth on a slow school laptop by trading resolution for frame rate',
  'Installs on your phone and works offline, with no account, no ads and no tracking',
]

const builtItems = [
  'Every toy drawn on one canvas with its own small physics: falling sand on a grid, slime that squishes and springs back, pegs that bounce the Plinko balls',
  'A quality governor that watches frame times and steps the canvas resolution down and back up',
  'Clip recording from the canvas and the sound mix together, saved as MP4 where the browser can and WebM where it cannot',
  'Sound synthesized with Web Audio, no sound files at all',
  '62 tests, including every toy run for hundreds of frames at three screen sizes, all ten sorts and the recorder',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-f13">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function SatisfyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Satisfy',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    description: 'Nine satisfying toys and a clip recorder in one free page. Runs entirely in your browser.',
    url: LIVE,
    image: 'https://thewoob.com/projects/satisfy/og.jpg',
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
          <img src="/brands/satisfy.png" alt="Satisfy logo" width={56} height={56} className="w-14 h-14 rounded-f13" />
          <h1 className="text-phi-4 md:text-phi-5 font-bold">Satisfy</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          Sometimes you just want to pop something. Satisfy is nine toys on one screen: bubbles to pop, paint that swirls, fireworks, a Pop-It, slime that squishes, sand that piles, marbles, Plinko and ten sorting algorithms at work. Tap the record button and it makes a clip with sound that you can share straight from your phone. Free, with nothing to sign up for.
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
            Play with Satisfy
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
