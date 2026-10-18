import { Children } from 'react'

type Props = {
  /** with no title the group is a bare row (the home page's curated rows) */
  title?: string
  sub?: string
  /** heading level of the group title (the cards inside use the next one down) */
  level?: 'h2' | 'h3'
  /** columns from the lg breakpoint up (md is always two) */
  cols?: 2 | 3 | 4
  children: React.ReactNode
}

const GRID = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-2 lg:grid-cols-3', 4: 'md:grid-cols-2 lg:grid-cols-4' }

/**
 * A titled group of cards. On a phone the cards stack in one full-width column, so every card is plain to see and nobody has to
 * know to swipe; from md up it is a grid.
 */
export function CardGroup({ title, sub, level: H = 'h3', cols = 3, children }: Props) {
  return (
    <section className={title ? 'mb-12 last:mb-0' : 'mb-5 last:mb-0 md:mb-6'}>
      {title && <H className="text-2xl font-semibold tracking-[-0.02em] text-white">{title}</H>}
      {sub && <p className="mb-5 mt-1 text-[15px] leading-snug text-dark-muted">{sub}</p>}
      <div className={`grid grid-cols-1 gap-5 md:gap-6 ${GRID[cols]}`}>
        {Children.map(children, (c) => (
          <div className="flex [&>*]:min-w-0 [&>*]:flex-1">{c}</div>
        ))}
      </div>
    </section>
  )
}
