'use client'

import { useState, useEffect } from 'react'

interface TypewriterProps {
  texts: string[]
  className?: string
  speed?: number
  deleteSpeed?: number
  pauseTime?: number
  /** the element to render, e.g. "h1" for a headline */
  as?: 'div' | 'h1' | 'h2' | 'p'
}

/**
 * Cycles through `texts`, typing and deleting one character at a time. It starts with the first text fully typed,
 * so the server-rendered HTML carries a real headline and nothing jumps on first paint. With reduced motion on,
 * it stays on that first text.
 */
export function Typewriter({
  texts,
  className = '',
  speed = 50,
  deleteSpeed = 30,
  pauseTime = 2000,
  as: Tag = 'div',
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState(texts[0] ?? '')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (texts.length < 2 || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const currentText = texts[textIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
          return
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(currentText.slice(0, displayedText.length - 1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
          return
        }
      }
    }

    const timeout = setTimeout(handleTyping, isDeleting ? deleteSpeed : speed)
    return () => clearTimeout(timeout)
  }, [displayedText, textIndex, isDeleting, texts, speed, deleteSpeed, pauseTime])

  return (
    <Tag className={className}>
      {displayedText}
      <span className="animate-pulse" aria-hidden="true">|</span>
    </Tag>
  )
}
