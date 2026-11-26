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
    <span className="text-white mr-f13">→</span>
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
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-phi-md mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-f34 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-f13 mb-f21">
          <img src="/brands/wind-tunnel.png" alt="Wind Tunnel logo" width={56} height={56} className="w-14 h-14 rounded-f13" />
          <h1 className="text-phi-4 md:text-phi-5 font-bold">Wind Tunnel</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          Draw a shape and the air answers. Wind Tunnel runs a real fluid simulation in your browser, the kind engineers
          use, fast enough to play with: sketch a wing, a car or your name, and watch smoke bend around it, eddies peel
          off behind it, and the drag and lift numbers move as you change it. Turn up the wind and the wake gets
          wilder. It works on a phone with a finger, offline, with nothing to sign up for.
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
