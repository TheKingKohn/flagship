import { Children } from 'react'

type Props = {
  title: string
  sub: string
  /** heading level of the group title (the cards inside use the next one down) */
  level?: 'h2' | 'h3'
  /** columns from the lg breakpoint up (md is always two) */
  cols?: 2 | 3 | 4
  children: React.ReactNode
}

const GRID = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-2 lg:grid-cols-3', 4: 'md:grid-cols-2 lg:grid-cols-4' }

/**
 * A titled group of cards. On a phone it is one horizontal snap-scrolling row, each card about 86% of the width so the
 * next one peeks; from md up it is a plain grid. The row is focusable, so arrow keys scroll it.
 */
export function CardGroup({ title, sub, level: H = 'h3', cols = 3, children }: Props) {
  return (
    <section className="mb-12 last:mb-0">
      <H className="text-2xl font-semibold tracking-[-0.02em] text-white">{title}</H>
      <p className="mb-5 mt-1 text-[15px] leading-snug text-dark-muted">{sub}</p>
      <div
        role="group"
        aria-label={title}
        tabIndex={0}
        className={`row-scroll -mx-6 -mb-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto overscroll-x-contain px-6 pb-10 pt-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white/50 md:mx-0 md:mb-0 md:grid md:gap-6 md:overflow-visible md:px-0 md:pb-0 md:pt-0 ${GRID[cols]}`}
      >
        {Children.map(children, (c) => (
          <div className="flex w-[86vw] shrink-0 snap-start md:w-auto md:shrink [&>*]:min-w-0 [&>*]:flex-1">{c}</div>
        ))}
      </div>
    </section>
  )
}
