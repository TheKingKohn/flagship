'use client'

import { useEffect, useRef } from 'react'

/**
 * The page-wide background: a fixed two-layer star field (CSS only; see .atmos in globals.css) and the pointer
 * light on cards. One passive scroll listener moves the two layers a few pixels against each other; one passive
 * pointer listener feeds --mx/--my to the card under the mouse. `hero` fades the field in below the first screen,
 * where the hero's own stars end.
 */
export function Atmosphere({ hero = false }: { hero?: boolean }) {
  const root = useRef<HTMLDivElement>(null)
  const far = useRef<HTMLDivElement>(null)
  const near = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const quiet = matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    const update = () => {
      frame = 0
      const y = window.scrollY
      const span = Math.max(1, document.documentElement.scrollHeight - innerHeight)
      const p = Math.min(1, y / span)
      if (!quiet.matches) {
        if (far.current) far.current.style.transform = `translate3d(0, ${(p * 2).toFixed(2)}px, 0)`
        if (near.current) near.current.style.transform = `translate3d(0, ${(p * -4).toFixed(2)}px, 0)`
      }
      if (hero && root.current) {
        const k = (y - innerHeight * 0.35) / (innerHeight * 0.5)
        root.current.style.opacity = String(Math.min(1, Math.max(0, k)))
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    const onPointer = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      const card = (e.target as Element | null)?.closest<HTMLElement>('.card')
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    document.addEventListener('pointermove', onPointer, { passive: true })
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      document.removeEventListener('pointermove', onPointer)
    }
  }, [hero])

  return (
    <div ref={root} className="atmos" aria-hidden="true" style={hero ? { opacity: 0 } : undefined}>
      <div ref={far} className="atmos-layer atmos-far">
        <div className="atmos-drift" />
      </div>
      <div ref={near} className="atmos-layer atmos-near">
        <div className="atmos-drift" />
      </div>
    </div>
  )
}
