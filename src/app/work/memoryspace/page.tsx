import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const DOWNLOAD_PAGE = 'https://memoryspace.thewoob.com'

export const metadata: Metadata = {
  title: 'MemorySpace | Work',
  description: 'MemorySpace: a free Windows and Mac app that turns every photo and video you have kept into a 3D universe you can fly through. A personal memory vault that runs offline and never uploads a thing.',
  openGraph: {
    title: 'MemorySpace | Work',
    description: 'A personal memory vault: every photo and video you have kept, as a universe you can fly through. Free, offline, nothing uploaded.',
    images: ['/projects/memoryspace/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/memoryspace',
  },
}

const screenshots = [
  { src: '/projects/memoryspace/galaxy', alt: 'Ten thousand memories arranged as a spiral galaxy, newest on the outside', caption: 'Galaxy view' },
  { src: '/projects/memoryspace/welcome', alt: 'MemorySpace welcome screen: Your life, as a universe', caption: 'First run' },
  { src: '/projects/memoryspace/import', alt: 'Import screen finding Snapchat exports and photo folders on the PC', caption: 'Bring in your memories' },
]

const doesItems = [
  'Imports Snapchat memories and chat media, iPhone and Android camera rolls, Google Photos takeouts, and any folder or old backup drive, with dates and places',
  'Six ways to see your life: a time spiral, a map of where you were, color, mosaic, galaxy, and themes grouped by what is in each photo',
  'Search by what is in a picture ("beach", "dog", "snow at night"), and find everyone automatically grouped by face so you can name them once',
  'Trips detected from photo locations, a cinematic Drift mode that flies you through your memories, and walk-in museum galleries for any trip, person, or month',
]

const builtItems = [
  'A WebGL renderer that keeps 10,000+ photos and videos on screen at once, with level of detail that sharpens what you fly toward and plays videos up close',
  'An on-device AI pipeline: image embeddings for search, face detection and clustering, dominant color, and GPS trip detection with offline place names',
  'An incremental importer that reads EXIF, video metadata, and export sidecars, dedupes across sources, and only processes what is new',
  'A one-click Windows installer with its own runtime, so friends install it like any other app and never touch a terminal',
]

const vaultItems = [
  'Your photos are never uploaded. Not to thewoob, not to a cloud, not anywhere',
  'No account, no sign-in, no ads. Nothing about your library ever leaves your computer',
  'The face grouping and photo search run on your own computer. The only download after install is the AI models, once',
  'One small anonymous check-in (a random install ID, the app version, and Windows or Mac) lets me count installs and announce updates. It can be turned off',
  'It reads your photos where they already are and never moves, edits, or deletes them. Uninstall it and your vault is gone',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-f13">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function MemorySpacePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'MemorySpace',
    operatingSystem: 'Windows 10, Windows 11, macOS (Apple silicon)',
    applicationCategory: 'MultimediaApplication',
    description: 'A personal memory vault: every photo and video you have kept, arranged in time and space as a 3D universe. Runs offline; nothing is uploaded.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    downloadUrl: DOWNLOAD_PAGE,
    url: 'https://thewoob.com/work/memoryspace',
  }

  return (
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-phi-md mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-f34 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-f13 mb-f21">
          <h1 className="text-phi-4 md:text-phi-5 font-bold">MemorySpace</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          A personal memory vault. MemorySpace takes every photo and video you&apos;ve kept,
          from Snapchat, your camera roll, and old backups, and arranges them in time and space as a
          universe you can fly through. Scrub through a year, walk through a trip, and find everyone
          you&apos;ve ever smiled with. Free for Windows and Mac, and it never uploads a single photo.
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

        {/* Your vault, not a cloud */}
        <section className="mb-f55 p-f34 rounded-f8 border border-[#F2D28C]/30 bg-[#F2D28C]/[0.04]">
          <h2 className="text-phi-3 font-bold mb-f8">Your vault, not a cloud</h2>
          <p className="text-dark-muted mb-f21">
            MemorySpace is private by design. Everything happens on your own computer.
          </p>
          <ul className="space-y-f13">
            {vaultItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
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
          <Button href={DOWNLOAD_PAGE} external>
            Download for Windows or Mac (free)
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
        <p className="text-phi-0 text-dark-muted mt-f13">Windows 10 / 11 and Apple silicon Macs · works offline · your photos never leave your computer</p>
      </div>
    </div>
  )
}
