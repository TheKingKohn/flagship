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
  /** /work labels each card with its kind (Map, Lab, Game, App) and its status above the bullets */
  kind?: string
  status?: keyof typeof STATUS
  heading?: 'h2' | 'h3' | 'h4'
}

const STATUS = {
  Live: 'bg-green-500/20 text-green-300 border-green-500/40',
  MVP: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  Demo: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  Prototype: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
  Past: 'bg-dark-muted/10 text-dark-muted border-dark-muted/20',
}

/** An app card: a recessed motion window, the mark sitting on its lower edge, then the copy and two buttons. */
export function ProjectCard({ slug, name, logo, accent, description, highlights, primary, secondary, href, kind, status, heading: H = 'h3' }: Props) {
  const readout = readouts[slug]
  return (
    <article className="card flex flex-col p-f8 pb-f13" style={{ '--accent': accent } as React.CSSProperties}>
      <div className="card-window">
        <MotionCanvas slug={slug} accent={accent} />
      </div>

      <div className="flex flex-1 flex-col px-f8">
        <div className="flex items-start gap-f13">
          <img
            src={logo}
            alt={`${name} logo`}
            width={56}
            height={56}
            loading="lazy"
            decoding="async"
            className="pointer-events-none relative z-[2] -mt-7 h-14 w-14 shrink-0 rounded-f13"
            style={{ boxShadow: '0 0 0 1px rgba(255,255,255,.1), 0 0 0 4px rgba(10,10,10,.55), 0 12px 22px -4px rgba(0,0,0,.7)' }}
          />
          <div className="min-w-0 pt-f8">
            <H className="text-phi-1 font-semibold leading-tight tracking-[-0.02em] text-white">
              <Link href={href} className="card-hit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70">
                {name}
              </Link>
            </H>
            {readout && (
              <p
                className="mt-f5 font-mono text-[11px] leading-snug tracking-[0.04em] tabular-nums"
                style={{ color: `color-mix(in srgb, ${accent} 70%, white)` }}
              >
                {readout}
              </p>
            )}
          </div>
        </div>

        <p className="mt-f13 text-phi-0 leading-golden text-dark-muted">{description}</p>

        {kind && (
          <div className="mt-f13 flex items-center justify-between gap-f13 font-mono text-[10.5px] uppercase leading-none tracking-[0.14em] text-dark-muted">
            <span>Key features</span>
            <span className="flex items-center gap-f5">
              {status && <span className={`rounded-full border px-f8 py-f5 ${STATUS[status]}`}>{status}</span>}
              <span className="rounded-full border border-white/10 px-f8 py-f5">{kind}</span>
            </span>
          </div>
        )}
        <ul className={`${kind ? 'mt-f8' : 'mt-f13'} space-y-f5`}>
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-f8 text-phi--1 text-dark-muted">
              <span className="mt-[0.72em] h-px w-2 shrink-0" style={{ background: accent, opacity: 0.8 }} aria-hidden="true" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-f13 pt-f13">
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
