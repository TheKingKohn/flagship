'use client'

import { useEffect, useState } from 'react'

const FEED = 'https://leadloom.thewoob.com/api/public-stats.json'
const TIMEOUT_MS = 2500

type Feed = Record<string, unknown>

let feedPromise: Promise<Feed | null> | null = null

function loadFeed(): Promise<Feed | null> {
  if (!feedPromise) {
    feedPromise = new Promise((resolve) => {
      const ctl = new AbortController()
      const timer = setTimeout(() => {
        ctl.abort()
        resolve(null)
      }, TIMEOUT_MS)
      fetch(FEED, { signal: ctl.signal, credentials: 'omit' })
        .then((r) => (r.ok ? r.json() : null))
        .then((j) => resolve(j && typeof j === 'object' ? (j as Feed) : null))
        .catch(() => resolve(null))
        .finally(() => clearTimeout(timer))
    })
  }
  return feedPromise
}

function pick(feed: Feed, path: string): number | null {
  let cur: unknown = feed
  for (const part of path.split('.')) {
    if (cur && typeof cur === 'object' && part in (cur as Feed)) cur = (cur as Feed)[part]
    else return null
  }
  return typeof cur === 'number' && isFinite(cur) && cur > 0 ? cur : null
}

// 19234567 -> "19M+", 47390 -> "47K+", 3640000 -> "3.6M+"
export function shortCount(n: number): string {
  if (n >= 1e6) {
    const m = Math.floor(n / 1e5) / 10
    return `${Number.isInteger(m) ? m : m.toFixed(1)}M+`
  }
  if (n >= 1e3) return `${Math.floor(n / 1e3)}K+`
  return `${Math.floor(n)}+`
}

/**
 * Renders `fallback` (the number built into the page) and swaps in the live
 * count if the feed answers in time. Same text node, no spinner, no layout change
 * beyond the digits themselves.
 */
export function LiveStat({ k, fallback, suffix = '', exact = false }: { k: string; fallback: string; suffix?: string; exact?: boolean }) {
  const [text, setText] = useState(fallback)
  useEffect(() => {
    let alive = true
    loadFeed().then((feed) => {
      if (!alive || !feed) return
      const n = pick(feed, k)
      if (n !== null) setText(exact ? Math.round(n).toLocaleString('en-US') : shortCount(n))
    })
    return () => {
      alive = false
    }
  }, [k])
  return <>{text}{suffix}</>
}
