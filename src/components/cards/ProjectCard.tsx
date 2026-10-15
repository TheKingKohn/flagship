'use client'

import Link from 'next/link'
import { Button } from '@/components/Button'
import { MotionCanvas } from './useMotion'
import { readouts } from './readouts'

export type CardLink = { href: string; label: string; external?: boolean }

type Props = {
  /** project slug: picks the motion in the window and the readout line */
  slug: string
  name: string
  logo: string
  accent: string
  description: string
  highlights: string[]
  /** the filled button (Open, Play, Download) and the quiet one (Details, View Project) */
  primary: CardLink
  secondary: CardLink
  /** where the title and the whole card go for a pointer */
  href: string
  /** /work shows the project's types in the corner of the window and a small label over the bullets */
  types?: string[]
  heading?: 'h2' | 'h3'
}

/** An app card: a recessed motion window, the mark sitting on its lower edge, then the copy and two buttons. */
export function ProjectCard({ slug, name, logo, accent, description, highlights, primary, secondary, href, types, heading: H = 'h3' }: Props) {
  const readout = readouts[slug]
  return (
    <article className="card flex flex-col p-2.5 pb-4" style={{ '--accent': accent } as React.CSSProperties}>
      <div className="card-window">
        <MotionCanvas slug={slug} accent={accent} />
        {types && (
          <span className="absolute right-2.5 top-2.5 z-[1] rounded bg-black/55 px-2 py-1 font-mono text-[10px] uppercase leading-none tracking-[0.14em] text-white/70">{types.join(' · ')}</span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-2.5">
        <div className="flex items-start gap-3.5">
          <img
            src={logo}
            alt={`${name} logo`}
            width={56}
            height={56}
            className="pointer-events-none relative z-[2] -mt-7 h-14 w-14 shrink-0 rounded-xl"
            style={{ boxShadow: '0 0 0 1px rgba(255,255,255,.1), 0 0 0 4px rgba(10,10,10,.55), 0 12px 22px -4px rgba(0,0,0,.7)' }}
          />
          <div className="min-w-0 pt-2.5">
            <H className="text-[19px] font-semibold leading-tight tracking-[-0.02em] text-white">
              <Link href={href} className="card-hit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70">
                {name}
              </Link>
            </H>
            {readout && (
              <p
                className="mt-1 font-mono text-[11px] leading-snug tracking-[0.04em] tabular-nums"
                style={{ color: `color-mix(in srgb, ${accent} 70%, white)` }}
              >
                {readout}
              </p>
            )}
          </div>
        </div>

        <p className="mt-3.5 text-[15px] leading-[1.6] text-dark-muted">{description}</p>

        {types && <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-dark-muted">Key features</p>}
        <ul className={`${types ? 'mt-2.5' : 'mt-4'} space-y-2`}>
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-3 text-[13.5px] leading-[1.5] text-dark-muted">
              <span className="mt-[0.78em] h-px w-3 shrink-0" style={{ background: accent, opacity: 0.8 }} aria-hidden="true" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-3 pt-5">
          <Button href={primary.href} external={primary.external} compact>
            {primary.label}
          </Button>
          <Button href={secondary.href} external={secondary.external} variant="secondary" compact>
            {secondary.label}
          </Button>
        </div>
      </div>
    </article>
  )
}
