'use client'

import { useState, useEffect } from 'react'

interface TypewriterProps {
  texts: string[]
  className?: string
  speed?: number
  deleteSpeed?: number
  pauseTime?: number
}

export function Typewriter({ 
  texts, 
  className = '', 
  speed = 50, 
  deleteSpeed = 30,
  pauseTime = 2000 
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
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
    <div className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  )
}
