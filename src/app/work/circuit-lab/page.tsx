import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://circuitlab.thewoob.com'

export const metadata: Metadata = {
  title: 'Circuit Lab | Work',
  description: 'Circuit Lab: draw a circuit on your phone and watch it run. A real modified-nodal-analysis simulator with diodes, transistors and op-amps, live current animation and a four-channel oscilloscope, free and offline.',
  openGraph: {
    title: 'Circuit Lab | Work',
    description: 'Draw a circuit. Watch it run. A real circuit simulator with a live scope, in a free web app you can install on your phone.',
    images: ['/projects/circuit-lab/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/circuit-lab',
  },
}

const screenshots = [
  { src: '/projects/circuit-lab/bridge', alt: 'A full-wave bridge rectifier with a filter capacitor on the schematic, current animated along the wires, and the scope showing the rectified ripple beside it', caption: 'Bridge rectifier' },
  { src: '/projects/circuit-lab/astable', alt: 'An astable multivibrator blinking two LEDs on a phone, with three scope channels showing the square waves and the capacitor sawtooth', caption: 'Astable multivibrator' },
  { src: '/projects/circuit-lab/rc', alt: 'The RC charge and discharge example on a phone with the scope tracing the capacitor voltage and resistor current', caption: 'RC charge and discharge' },
]

const doesItems = [
  'Tap a part, tap the grid, drag to wire: resistors, capacitors, inductors, pots, DC and AC sources, pulse and triangle generators, switches, diodes, LEDs, zeners, NPN and PNP transistors, MOSFETs and op-amps',
  'The simulation runs all the time: current flows as lit dots along the wires, wire colour shows voltage, LEDs glow, and a tap flips a switch',
  'A four-channel oscilloscope with a bench-style readout header, time and volts per division, trigger, cursor, pause and a persistence ghost of the last sweep',
  'Long-press any part for a value sheet with a big tabular number, unit-prefix chips and a sweep slider the circuit follows live',
  'Ten worked examples, from a voltage divider to a bridge rectifier and an astable multivibrator, each with a real schematic thumbnail; floating nodes and source loops get a plain-language note, never a crash',
  'Circuits save themselves, export as JSON, and fit inside a link, so a whole circuit travels in the URL; installs to your phone and works offline',
]

const builtItems = [
  'A modified nodal analysis engine written from scratch: dense LU with pivoting, a DC operating point, then trapezoidal transient integration with backward Euler across discontinuities',
  'Newton–Raphson with SPICE-style junction limiting for the nonlinear parts: Shockley diodes, Ebers–Moll BJTs, square-law MOSFETs and a rail-limited op-amp',
  'An analytic test suite: RC step response within 1%, RLC resonance, rectifier peaks against an independent diode solve, op-amp gain, BJT bias points, plus hundreds of random circuits that must never crash the solver',
  'Every schematic symbol drawn by rule in IEEE style on one stroke weight, with labels that move out of each other’s way, and a colour-blind-safe voltage ramp',
  'Phosphor-green scope traces with a graticule and persistence, drawn on Canvas with no charting library',
  'A static, installable web app (React, TypeScript, Vite) with a service worker; honest about its models (no Early effect, no slew rate) and says so in the README',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-3">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function CircuitLabPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Circuit Lab',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    description: 'A free circuit simulator for the phone: draw a schematic, see live voltages and currents, and probe any node on a four-channel oscilloscope.',
    url: LIVE,
    image: 'https://thewoob.com/projects/circuit-lab/og.jpg',
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
          <img src="/brands/circuit-lab.png" alt="Circuit Lab logo" width={56} height={56} className="w-14 h-14 rounded-xl" />
          <h1 className="text-5xl md:text-6xl font-bold">Circuit Lab</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          A bench on your phone. Circuit Lab is a real circuit simulator: draw a schematic with your thumb,
          and it solves it continuously, animates the current, lights the LEDs, and puts any node on a
          four-channel oscilloscope. Built for the person who wants to see why the capacitor does that.
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
                  className="w-full h-48 object-cover object-top rounded border border-dark-border"
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
            Open Circuit Lab
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
