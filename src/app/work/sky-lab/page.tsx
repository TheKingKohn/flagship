import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://skylab.thewoob.com'

export const metadata: Metadata = {
  title: 'Sky Lab | Work',
  description: 'Sky Lab: point your phone at the sky and see what is up there right now. Stars, planets, the Moon, the ISS and bright satellites with real orbital propagation, in a free web app that works offline.',
  openGraph: {
    title: 'Sky Lab | Work',
    description: 'See what is overhead right now: stars, planets, the Moon, the ISS and bright satellites. Free, nothing uploaded, works offline once loaded.',
    images: ['/projects/sky-lab/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/sky-lab',
  },
}

const screenshots = [
  { src: '/projects/sky-lab/sky', alt: 'The southern sky over Seattle before dawn with constellation lines, Saturn, Neptune, Aldebaran and Orion labelled', caption: 'The sky right now' },
  { src: '/projects/sky-lab/placard', alt: 'A star placard showing magnitude, altitude, azimuth, constellation, colour and a rise, highest and set timeline', caption: 'Tap anything' },
  { src: '/projects/sky-lab/passes', alt: 'The ISS passes sheet listing the next five visible passes, each with a sketched sky arc, peak elevation, duration and brightness', caption: 'ISS passes' },
]

const doesItems = [
  'Point your phone at the sky and the chart follows it: stars sized by brightness and tinted by their real colour, constellation lines and names, planets, and a Moon drawn at its actual phase',
  'The ISS is always on, with its path sketched ahead of it; other bright satellites move in real time, and Starlink is a layer you can switch on',
  'Tap any object for a placard: magnitude, altitude and azimuth, constellation, and when it rises, peaks and sets tonight',
  'A passes sheet lists the next five visible ISS passes for where you stand, each with a sketched arc across the sky, direction, peak, duration and brightness',
  'Scrub time twelve hours either way and watch the sky turn; search for Jupiter, Vega or the ISS and an arrow points you to it',
  'A true night mode, red on black so your eyes stay dark-adapted; installs to your home screen and works offline once the catalogs are cached',
]

const builtItems = [
  'The Yale Bright Star Catalog, about 9,100 stars, packed into a 98 KB file, with constellation lines and names shipped alongside',
  'Sun, Moon and planet positions from astronomy-engine, and satellite positions from SGP4 over CelesTrak orbital elements, refreshed at most once a day with a bundled fallback so the sky is never empty',
  'My own code for the sky projection, the AR pose from the phone’s sensors, rise and set times, and ISS pass prediction, tested against published worked examples and a brute-force scan',
  'A twilight colour ramp driven by the real altitude of the Sun, bloom only on the brightest stars, and a Milky Way with dust lanes, all drawn in WebGL with a Canvas overlay',
  'A static, installable web app (React, TypeScript, Vite) with a service worker; location is used only on the device and never uploaded',
  'Honest about its limits: it is a chart that follows your phone, not a camera overlay, and satellite brightness is estimated only for the ISS and Tiangong',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-f13">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function SkyLabPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Sky Lab',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    description: 'A free sky chart that follows your phone: stars, planets, the Moon, the ISS and bright satellites with real orbital propagation, offline-capable.',
    url: LIVE,
    image: 'https://thewoob.com/projects/sky-lab/og.jpg',
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
          <img src="/brands/sky-lab.png" alt="Sky Lab logo" width={56} height={56} className="w-14 h-14 rounded-f13" />
          <h1 className="text-phi-4 md:text-phi-5 font-bold">Sky Lab</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          An observatory in your pocket. Sky Lab shows what is overhead right now, from where you are standing:
          stars, planets, the Moon, the ISS and the brighter satellites, with real orbital propagation running on
          your phone. Hold it up and the chart follows; tap anything and it tells you what you are looking at.
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
            Open Sky Lab
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
