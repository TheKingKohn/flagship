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
    <span className="text-white mr-f13">→</span>
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
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-phi-md mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-f34 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-f13 mb-f21">
          <img src="/brands/airfoil.png" alt="Airfoil Lab logo" width={56} height={56} className="w-14 h-14 rounded-f13" />
          <h1 className="text-phi-4 md:text-phi-5 font-bold">Airfoil Lab</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          A pocket-sized wind tunnel for wings. Airfoil Lab runs a real panel-method solver right on your phone:
          pick a NACA section or draw your own, set the angle of attack, and see the lift, drag, pressure, and
          stall behavior instantly. Built for people who actually think about wings, and honest about where a
          panel method stops being right.
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
                  className="w-full aspect-golden object-cover object-center rounded-f5 border border-dark-border"
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
