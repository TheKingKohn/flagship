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
    let span = 1
    // The scroll range changes only when the page does (resize, a filter), so it is read there and not on every scroll.
    const measure = () => {
      span = Math.max(1, document.documentElement.scrollHeight - innerHeight)
      onScroll()
    }
    const update = () => {
      frame = 0
      const y = window.scrollY
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
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update)
      card = null // a hovered card has moved under a still pointer
    }
    // The pointer light: the card's rect is read once per card, not per move, and the write waits for a frame.
    let card: HTMLElement | null = null
    let rect: DOMRect | null = null
    let px = 0
    let py = 0
    let lit = 0
    const paintLight = () => {
      lit = 0
      if (card && rect) {
        card.style.setProperty('--mx', `${px - rect.left}px`)
        card.style.setProperty('--my', `${py - rect.top}px`)
      }
    }
    const onPointer = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      const hit = (e.target as Element | null)?.closest<HTMLElement>('.card') ?? null
      if (!hit) return
      if (hit !== card || !rect) {
        card = hit
        rect = hit.getBoundingClientRect()
      }
      px = e.clientX
      py = e.clientY
      if (!lit) lit = requestAnimationFrame(paintLight)
    }
    const ro = new ResizeObserver(measure)
    ro.observe(document.body)
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('pointermove', onPointer, { passive: true })
    return () => {
      if (frame) cancelAnimationFrame(frame)
      if (lit) cancelAnimationFrame(lit)
      ro.disconnect()
      window.removeEventListener('scroll', onScroll)
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
