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
    <article className="card flex flex-col p-2.5 pb-4" style={{ '--accent': accent } as React.CSSProperties}>
      <div className="card-window">
        <MotionCanvas slug={slug} accent={accent} />
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

        <p className="mt-3 text-[15px] leading-[1.55] text-dark-muted">{description}</p>

        {kind && (
          <div className="mt-4 flex items-center justify-between gap-3 font-mono text-[10.5px] uppercase leading-none tracking-[0.14em] text-dark-muted">
            <span>Key features</span>
            <span className="flex items-center gap-1.5">
              {status && <span className={`rounded-full border px-2.5 py-1 ${STATUS[status]}`}>{status}</span>}
              <span className="rounded-full border border-white/10 px-2.5 py-1">{kind}</span>
            </span>
          </div>
        )}
        <ul className={`${kind ? 'mt-2.5' : 'mt-3.5'} space-y-1.5`}>
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-[13.5px] leading-[1.45] text-dark-muted">
              <span className="mt-[0.72em] h-px w-2 shrink-0" style={{ background: accent, opacity: 0.8 }} aria-hidden="true" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-3 pt-4">
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
