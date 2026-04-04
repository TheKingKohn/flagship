import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'OddStock | Work | TheWoob',
  description: 'Stock chart tool that overlays calendar and astronomical events onto candlestick charts and statistically analyzes historical edge per ticker.',
  openGraph: {
    title: 'OddStock | Work | TheWoob',
    description: 'Stock chart tool that overlays calendar and astronomical events onto candlestick charts and statistically analyzes historical edge per ticker.',
  },
  alternates: {
    canonical: 'https://thewoob.com/work/oddstock',
  },
}

export default function OddStockPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">OddStock</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Stock chart tool that overlays repeating calendar and astronomical events — moon phases, OPEX, federal holidays, election cycles, Jewish holidays — onto candlestick price data, then statistically analyzes whether each event type has historical predictive edge on any given ticker.
        </p>

        {/* What It Does */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What It Does</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Search any ticker and pull full OHLCV history from Yahoo Finance, displayed as an interactive candlestick chart</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Toggle overlays — moon phases, OPEX, federal holidays, election cycles, Jewish holidays, astronomical events — and see them pinned directly on the chart</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Correlation panel shows win rate, avg return, median, std dev, and a BULLISH/BEARISH/NEUTRAL verdict for each active overlay against the selected ticker</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Verdict engine gates on sample size (&lt;8 events = INSUFFICIENT DATA), scores across 5 factors, and returns confidence level with reasoning</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Regime breakdown splits results by VIX environment (fear vs calm) and MA regime (above vs below 200-day) to surface context</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">In-sample vs out-of-sample split to test whether patterns hold across different time periods</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">React 18 + Vite frontend with lightweight-charts v4 for the candlestick rendering and event marker overlay system</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Node.js + Express backend serving price data (yahoo-finance2), overlay event calendars, and the full correlation engine</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Moon phase math via suncalc, custom overlay modules for each event type with deduplication logic (collapses same-type events within 14 days)</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Correlation engine fetches from 2015 internally for max sample size, parallel-fetches ^VIX for regime context, and runs full statistical analysis per overlay</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Deployed via Cloudflare tunnel to a local server — zero cloud hosting cost</span>
            </li>
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-dark-border">
          <Button href="https://oddstock.thewoob.com" external>
            Open OddStock
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
