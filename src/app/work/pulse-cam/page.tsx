import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://pulsecam.thewoob.com'

export const metadata: Metadata = {
  title: 'Pulse Cam | Work',
  description: 'Pulse Cam: see your pulse in your own face. Live video magnification on your camera makes the faint flush of each heartbeat visible, and a motion mode magnifies breathing. Runs on your device, nothing is uploaded. Free.',
  openGraph: {
    title: 'Pulse Cam | Work',
    description: 'Your face changes color with every heartbeat. Pulse Cam makes it visible, live, on your own camera. Free in your browser.',
    images: ['/projects/pulse-cam/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/pulse-cam',
  },
}

const screenshots = [
  { src: '/projects/pulse-cam/first-screen', alt: 'The Pulse Cam first screen on a desktop: See your pulse in your own face, a Start camera button, a demo clip button and notes that video never leaves the device and that it is not a medical device', caption: 'First screen' },
  { src: '/projects/pulse-cam/phone', alt: 'Pulse Cam on a phone: the title and one line of what it does above the Start camera button', caption: 'On a phone' },
]

const doesItems = [
  'Turns on your camera only when you tap, and shows your face flushing with each heartbeat',
  'Reads off a pulse number once the signal has held steady, and hides it when it is not',
  'A motion mode that magnifies small movements like breathing',
  'Sliders for strength and frequency band, a before and after divider, and save a picture or a clip',
  'A built-in demo face when there is no camera, so anyone can see how it works',
  'Installs on your phone and works offline; the video is processed on your device and never uploaded',
]

const builtItems = [
  'Eulerian video magnification after Wu and others at MIT (SIGGRAPH 2012), running on the graphics card with WebGL2',
  'A spatial blur pyramid and a chained temporal band-pass filter, so slow lighting drift is not amplified',
  'A pulse estimator that only shows a number when the signal clears a strength test, tuned so noise alone almost never produces one',
  'Proved on a synthetic face pulsing at 72 beats a minute: a change too small to see magnified about 40 times, and the reading locks on 72',
  '34 tests, a CPU reference that matches the GPU shaders, and fallbacks for no camera and no WebGL2',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-f13">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function PulseCamPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Pulse Cam',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Web',
    description: 'Live video magnification in the browser that makes your heartbeat visible in your face. Runs entirely on your device.',
    url: LIVE,
    image: 'https://thewoob.com/projects/pulse-cam/og.jpg',
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
          <img src="/brands/pulse-cam.png" alt="Pulse Cam logo" width={56} height={56} className="w-14 h-14 rounded-f13" />
          <h1 className="text-phi-4 md:text-phi-5 font-bold">Pulse Cam</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          Every time your heart beats, your face turns a tiny bit redder. It is far too small to see, until you magnify it. Pulse Cam runs a real video magnification method from MIT research live on your camera, so your face visibly flushes with each beat, and it reads off your pulse once the signal is steady. Switch to motion mode and it magnifies breathing or a swaying plant. It is a toy, not a medical device, and the video never leaves your device.
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
            Open Pulse Cam
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
