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
    <span className="text-white mr-3">→</span>
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
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <img src="/brands/pulse-cam.png" alt="Pulse Cam logo" width={56} height={56} className="w-14 h-14 rounded-xl" />
          <h1 className="text-5xl md:text-6xl font-bold">Pulse Cam</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Every time your heart beats, your face turns a tiny bit redder. It is far too small to see, until you magnify it. Pulse Cam runs a real video magnification method from MIT research live on your camera, so your face visibly flushes with each beat, and it reads off your pulse once the signal is steady. Switch to motion mode and it magnifies breathing or a swaying plant. It is a toy, not a medical device, and the video never leaves your device.
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
