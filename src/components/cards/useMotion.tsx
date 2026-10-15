'use client'

import { useEffect, useRef } from 'react'
import { motions, stills, STILL } from './motions'
import { placeholder } from './placeholder'

type Inst = { t0: number; paint: (now: number) => void }

// One requestAnimationFrame loop for every card on screen. It runs only while a canvas is visible and the tab is not hidden.
const live = new Set<Inst>()
let raf = 0
function tick(now: number) {
  live.forEach((i) => i.paint(now))
  raf = live.size && !document.hidden ? requestAnimationFrame(tick) : 0
}
function kick() {
  if (!raf && live.size && !document.hidden) raf = requestAnimationFrame(tick)
}
if (typeof document !== 'undefined') document.addEventListener('visibilitychange', kick)

/** Draws the registry's motion for `slug` (a quiet placeholder while it has none) on a canvas that fills its CSS box. */
export function MotionCanvas({ slug, accent, className }: { slug: string; accent: string; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)
  const draw = motions[slug] ?? placeholder
  const still = motions[slug] ? (stills[slug] ?? STILL) : 4

  useEffect(() => {
    const cv = ref.current
    const c = cv?.getContext('2d')
    if (!cv || !c) return
    const quiet = matchMedia('(prefers-reduced-motion: reduce)')
    let W = 0
    let H = 0
    let dpr = 1
    const paint = (t: number) => {
      c.setTransform(dpr, 0, 0, dpr, 0, 0)
      c.clearRect(0, 0, W, H)
      draw(c, W, H, t, accent)
    }
    const inst: Inst = {
      t0: 0,
      paint: (now) => {
        if (!inst.t0) inst.t0 = now
        paint((now - inst.t0) / 1000)
      },
    }
    const size = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = cv.clientWidth
      H = cv.clientHeight
      cv.width = Math.round(W * dpr)
      cv.height = Math.round(H * dpr)
      if (quiet.matches || !live.has(inst)) paint(still)
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !quiet.matches) {
        inst.t0 = 0
        live.add(inst)
        kick()
      } else live.delete(inst)
    })
    const ro = new ResizeObserver(size)
    const onQuiet = () => {
      live.delete(inst)
      size()
    }
    size()
    io.observe(cv)
    ro.observe(cv)
    quiet.addEventListener('change', onQuiet)
    return () => {
      live.delete(inst)
      io.disconnect()
      ro.disconnect()
      quiet.removeEventListener('change', onQuiet)
    }
  }, [draw, still, accent])

  return <canvas ref={ref} aria-hidden="true" className={className} />
}
