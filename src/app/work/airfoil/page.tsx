import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://airfoil.thewoob.com'

export const metadata: Metadata = {
  title: 'Airfoil Lab | Work',
  description: 'Airfoil Lab: pocket-sized 2D airfoil analysis. A real Hess-Smith panel method solver with a boundary layer and compressibility correction, in a free web app that installs on your phone and works offline.',
  openGraph: {
    title: 'Airfoil Lab | Work',
    description: 'A free, pocket-sized airfoil analyzer: pick a NACA section or draw your own, and see its lift, drag, pressure, and stall behavior instantly.',
    images: ['/projects/airfoil/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/airfoil',
  },
}

const screenshots = [
  { src: '/projects/airfoil/solve', alt: 'NACA 2412 at 4 degrees with smoke flow, pressure colors along the surface, and the lift and drag readouts', caption: 'The solver' },
  { src: '/projects/airfoil/polar', alt: 'Lift curve against angle of attack with Cl max and best lift-to-drag highlighted', caption: 'Polars' },
  { src: '/projects/airfoil/library', alt: 'Airfoil library of NACA sections with tabs for typing a NACA code or drawing your own', caption: 'Airfoil library' },
]

const doesItems = [
  'Pick from 24 NACA 4-digit and 5 NACA 5-digit sections, a Clark Y, Eppler 387, Selig S1223, or a supercritical section, type any NACA code, or draw your own shape with your finger',
  'Set the angle of attack and instantly see lift, drag, pitching moment, and lift-to-drag, with transition and separation points marked on the wing',
  'A classic XFoil-style pressure plot (-Cp along the chord) with the airfoil drawn at its real angle, plus live smoke flow around it',
  'Sweep the angle to get polars (Cl vs alpha, Cl vs Cd, Cm vs alpha, L/D vs alpha) with Cl max and best L/D highlighted',
  'Save up to 8 airfoils and switch between them to compare',
  'Installs to your phone home screen and works fully offline',
]

const builtItems = [
  'A Hess-Smith panel method solver (constant-strength source panels plus a vortex, 160 panels by default), checked against thin-airfoil theory and published NACA data',
  'An integral boundary layer: Thwaites laminar method, Michel transition, a Head-style turbulent integral, and Squire-Young drag, for real drag estimates in attached flow',
  'Prandtl-Glauert compressibility up to about Mach 0.7, with an estimated critical Mach number',
  'Every chart drawn by hand on canvas, with no charting library',
  'A static, installable web app (React, TypeScript, Vite) with a service worker, so all the math runs on your own device',
  'Honest about its limits: it is a panel method, not XFOIL, and says so where it matters (no shock modeling, post-stall lift not modeled)',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-3">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function AirfoilLabPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Airfoil Lab',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    description: 'A free 2D airfoil analyzer with a Hess-Smith panel method solver, boundary layer, and polars, installable on your phone.',
    url: LIVE,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }

  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <img src="/brands/airfoil.png" alt="Airfoil Lab logo" width={56} height={56} className="w-14 h-14 rounded-xl" />
          <h1 className="text-5xl md:text-6xl font-bold">Airfoil Lab</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          A pocket-sized wind tunnel for wings. Airfoil Lab runs a real panel-method solver right on your phone:
          pick a NACA section or draw your own, set the angle of attack, and see the lift, drag, pressure, and
          stall behavior instantly. Built for people who actually think about wings, and honest about where a
          panel method stops being right.
        </p>

        {/* Project Gallery */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {screenshots.map((shot) => (
              <a key={shot.src} href={`${shot.src}.webp`} target="_blank" className="block hover:opacity-80 transition-opacity">
                <img
                  src={`${shot.src}-card.webp`}
                  alt={shot.alt}
                  loading="lazy"
                  className="w-full h-48 object-cover object-center rounded border border-dark-border"
                />
                <p className="text-xs text-dark-muted mt-2 text-center">{shot.caption}</p>
              </a>
            ))}
          </div>
        </section>

        {/* What It Does */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What It Does</h2>
          <ul className="space-y-3">
            {doesItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            {builtItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-dark-border">
          <Button href={LIVE} external>
            Open Airfoil Lab
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
