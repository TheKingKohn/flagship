import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://nightsky.thewoob.com'

export const metadata: Metadata = {
  title: 'Night Sky | Work',
  description: 'Night Sky: the exact sky above one place at one moment, made into a poster, plus Name a Star, Free. Real star positions computed on your device, print-ready files, installable and offline, no sign-up.',
  openGraph: {
    title: 'Night Sky | Work',
    description: 'The sky the night you were born, worked out from real star data and made into a print-ready poster. Free in your browser.',
    images: ['/projects/night-sky/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/night-sky',
  },
}

const screenshots = [
  { src: '/projects/night-sky/first-screen', alt: 'The Night You Were Born on a desktop: date, time and place inputs beside a live preview of a midnight blue star chart poster titled The Night You Were Born', caption: 'The poster maker' },
  { src: '/projects/night-sky/name-a-star', alt: 'Name a Star, Free: a short honest note about star registries, place inputs, and an ornate cream Certificate of Naming for a real catalogue star with a small sky chart', caption: 'Name a Star, Free' },
  { src: '/projects/night-sky/phone', alt: 'Night Sky on a phone: the Poster, Name a Star and About tabs above the title The Night You Were Born and one line of what it does', caption: 'On a phone' },
]

const doesItems = [
  'Takes a date, a time and a city and draws the exact sky above that place at that moment, with the stars, the planets and the Moon in its real phase',
  'Makes it a poster in five styles and two layouts, with your own title and line, in a live preview as you type',
  'Exports a print-ready PNG at 18 by 24 inches and 300 dpi, or an SVG, and shares the sky in a link',
  'Name a Star, Free: picks a real catalogue star that passes over your place, shows you where it is, and makes a certificate with the name you give it',
  'Says plainly that a star name has exactly as much official standing as the paid registries sell, which is none, and charges nothing for it',
  'Installs on your phone and works offline; everything is computed on your device and nothing is sent anywhere',
]

const builtItems = [
  'Sun, Moon and planet positions to about one arcminute, and the 9,110 stars of the Yale Bright Star Catalogue precessed and nutated to the date, for any night from 1800 to 2100',
  'Local birth time turned into the right moment through the browser\'s own time zone database, daylight saving included',
  'The 5400 by 7200 pixel print file drawn in a Web Worker, so the page stays smooth while it renders',
  '60 tests checked against published sources: worked examples from Meeus, solstices and equinoxes from the U.S. Naval Observatory, eclipse times from NASA and star positions from SIMBAD',
  'No remote scripts, fonts or images, no cookies and no analytics, enforced by tests over the source',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-f13">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function NightSkyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Night Sky',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    description: 'A free star chart poster maker for any date and place, and a free, honest way to name a star. Runs entirely in your browser.',
    url: LIVE,
    image: 'https://thewoob.com/projects/night-sky/og.jpg',
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
          <img src="/brands/night-sky.png" alt="Night Sky logo" width={56} height={56} className="w-14 h-14 rounded-f13" />
          <h1 className="text-phi-4 md:text-phi-5 font-bold">Night Sky</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          Star map posters are a gift people pay a lot for. Night Sky makes the real thing for free. Pick a date, a time
          and a city, a birthday, a wedding, the night you met, and it works out the sky over that spot at that minute
          from real star data, then lays it out as a poster you can print at 18 by 24 inches. Next door, Name a Star
          picks a real star that passed over your place and makes the certificate, without pretending the name is
          official.
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
            Make Your Sky
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
