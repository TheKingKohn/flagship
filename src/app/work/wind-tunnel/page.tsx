import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://windtunnel.thewoob.com'

export const metadata: Metadata = {
  title: 'Wind Tunnel | Work',
  description: 'Wind Tunnel: draw any shape with a finger or a mouse and watch air flow around it in real time. A real fluid solver in your browser, with smoke, speed, vorticity and pressure views. Free, offline, no sign-up.',
  openGraph: {
    title: 'Wind Tunnel | Work',
    description: 'Draw a shape and watch the air flow around it, live. A real fluid solver running in your browser, free.',
    images: ['/projects/wind-tunnel/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/wind-tunnel',
  },
}

const screenshots = [
  { src: '/projects/wind-tunnel/first-screen', alt: 'Wind Tunnel on a desktop: smoke lines flowing past a cylinder with live Reynolds number, drag and lift readouts, beside view, shape, draw and air controls', caption: 'Flow past a cylinder' },
  { src: '/projects/wind-tunnel/phone', alt: 'Wind Tunnel on a phone: colored smoke lines bending around a cylinder under the title and the live readouts', caption: 'On a phone' },
]

const doesItems = [
  'Lets you draw any shape on the air with a finger or a mouse, or drop in a cylinder, an airfoil, a flat plate, a car or a word in block letters',
  'Shows the flow four ways: smoke, speed, vorticity and pressure',
  'Starts on its own: open it and a vortex street forms behind a cylinder, the same pattern that makes flags flutter and wires hum',
  'Reads out the Reynolds number, drag and lift on your shape as it changes, live',
  'Has wind and viscosity sliders, pause and single step, undo and erase, and saves the current view as an image',
  'Installs on your phone and works offline, with no account and no tracking',
]

const builtItems = [
  'A real two-dimensional lattice Boltzmann solver (D2Q9) running in a Web Worker, with WebGL2 drawing the smoke and fields on the graphics card',
  'Drag and lift measured on your own shape by momentum exchange at its walls, the way the research codes do it',
  'Proofs against exact solutions: flow between plates within 0.37 percent of the textbook parabola, and a decaying shear wave within 0.09 percent',
  'The cylinder benchmark of Schaefer and Turek run as a test: the shedding frequency lands inside the published range',
  'TypeScript throughout, a type-checked build, an offline service worker and a strict content security policy',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-3">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function WindTunnelPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Wind Tunnel',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    description: 'A free, real-time wind tunnel: draw a shape and watch air flow around it, computed by a fluid solver in your browser.',
    url: LIVE,
    image: 'https://thewoob.com/projects/wind-tunnel/og.jpg',
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
          <img src="/brands/wind-tunnel.png" alt="Wind Tunnel logo" width={56} height={56} className="w-14 h-14 rounded-xl" />
          <h1 className="text-5xl md:text-6xl font-bold">Wind Tunnel</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Draw a shape and the air answers. Wind Tunnel runs a real fluid simulation in your browser, the kind engineers
          use, fast enough to play with: sketch a wing, a car or your name, and watch smoke bend around it, eddies peel
          off behind it, and the drag and lift numbers move as you change it. Turn up the wind and the wake gets
          wilder. It works on a phone with a finger, offline, with nothing to sign up for.
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
            Open the Tunnel
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
