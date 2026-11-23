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
    <span className="text-white mr-3">→</span>
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
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <img src="/brands/satisfy.png" alt="Satisfy logo" width={56} height={56} className="w-14 h-14 rounded-xl" />
          <h1 className="text-5xl md:text-6xl font-bold">Satisfy</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Sometimes you just want to pop something. Satisfy is nine toys on one screen: bubbles to pop, paint that swirls, fireworks, a Pop-It, slime that squishes, sand that piles, marbles, Plinko and ten sorting algorithms at work. Tap the record button and it makes a clip with sound that you can share straight from your phone. Free, with nothing to sign up for.
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
