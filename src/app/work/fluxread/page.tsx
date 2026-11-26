import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://fluxread.thewoob.com'

export const metadata: Metadata = {
  title: 'FluxRead | Work',
  description: 'FluxRead: a free speed reader that flashes one word at a time at the point your eye locks onto. Paste a link or text, import an EPUB, or read free classics, at 250 to 1,000+ words per minute.',
  openGraph: {
    title: 'FluxRead | Work',
    description: 'A free RSVP speed reader: paste a link, import a book, or read free classics one word at a time, faster than you thought you could.',
    images: ['/projects/fluxread/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/fluxread',
  },
}

const screenshots = [
  { src: '/projects/fluxread/reader', alt: 'FluxRead showing one word at a time, with the focus letter in red on a guide line', caption: 'The reader' },
  { src: '/projects/fluxread/library', alt: 'FluxRead library with a paste-a-link box, a 60-second demo, and free public-domain classics', caption: 'Library and free classics' },
  { src: '/projects/fluxread/import', alt: 'Add content panel with paste, URL, EPUB, and text file tabs', caption: 'Add anything' },
]

const doesItems = [
  'Speed reading by RSVP: words appear one at a time in the same spot, so your eyes never move, and the letter they lock onto is marked in red',
  'Paste any article link or text and start reading in a second, or press Read what you copied',
  'Import EPUB books and .txt files into a personal library that remembers where you stopped',
  'A built-in shelf of 90 free classics, from The Raven to Frankenstein and The Great Gatsby, sorted by length from quick sprints to full novels',
  'A 60-second demo that teaches speed reading while you do it, and a shareable "I read it in X minutes" card',
  'Works offline and installs to your phone or desktop as an app; sign in to sync your library and progress across devices',
]

const builtItems = [
  'A pacing engine that gives each word its own dwell time: longer words and clause or sentence endings linger, paragraph breaks hold, and the speed ramps up gently at the start',
  'Optimal-recognition-point anchoring so every word lines up on the same focus letter',
  'Server-side article extraction that turns a messy web page into clean reading text',
  'A local-first library in the browser (IndexedDB) with optional cloud sync, so it stays fully usable offline or signed out',
  'Self-owned analytics with no third-party scripts and no cookies, plus an optional Stripe tip jar',
  'Share cards rendered on the device at 1080x1920 for stories, with native share where supported',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-f13">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function FluxReadPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'FluxRead',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    description: 'A free RSVP speed reader for links, pasted text, EPUB books, and public-domain classics.',
    url: LIVE,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }

  return (
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-phi-md mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-f34 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-f13 mb-f21">
          <img src="/brands/fluxread.png" alt="FluxRead logo" width={56} height={56} className="w-14 h-14 rounded-f13" />
          <h1 className="text-phi-4 md:text-phi-5 font-bold">FluxRead</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          A free speed reader. FluxRead flashes one word at a time at the exact point your eye locks onto,
          so you read without moving your eyes, at 250, 500, even 1,000 words a minute. Paste any link,
          drop in an EPUB, or pick a free classic, and start reading in a second.
        </p>

        {/* Project Gallery */}
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

        {/* What It Does */}
        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f21">What It Does</h2>
          <ul className="space-y-f13">
            {doesItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f21">What I Built</h2>
          <ul className="space-y-f13">
            {builtItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-f13 pt-f34 border-t border-dark-border">
          <Button href={LIVE} external>
            Open FluxRead
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
