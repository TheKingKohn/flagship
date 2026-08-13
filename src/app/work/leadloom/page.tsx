import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'LeadLoom | Work | TheWoob',
  description: 'Built and operate LeadLoom: a live, revenue-generating data marketplace and the five-brand network behind it.',
  openGraph: {
    title: 'LeadLoom | Work | TheWoob',
    description: 'Built and operate LeadLoom: a live, revenue-generating data marketplace and the five-brand network behind it.',
    images: ['/projects/leadloom/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/leadloom',
  },
}

export default function LeadLoomPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">LeadLoom</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          A live, revenue-generating data marketplace: insurance agents pick a county, build a
          turning-65 list, pay, and download the CSV in seconds. It's the flagship of a five-brand
          network (LeadLoom, NestEgg, HomeLoom, VoterVault, Explorer) that I built and operate
          solo on one engine.
        </p>

        {/* Project Gallery */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="/projects/leadloom/Screenshot 2026-01-25 165133.png" target="_blank" className="block hover:opacity-80 transition-opacity">
              <img
                src="/projects/leadloom/Screenshot 2026-01-25 165133.png"
                alt="LeadLoom dashboard"
                className="w-full h-32 object-cover rounded border border-dark-border"
              />
            </a>
            <a href="/projects/leadloom/Screenshot 2026-01-25 165159.png" target="_blank" className="block hover:opacity-80 transition-opacity">
              <img
                src="/projects/leadloom/Screenshot 2026-01-25 165159.png"
                alt="Lead browsing interface"
                className="w-full h-32 object-cover rounded border border-dark-border"
              />
            </a>
            <a href="/projects/leadloom/Screenshot 2026-01-25 165247.png" target="_blank" className="block hover:opacity-80 transition-opacity">
              <img
                src="/projects/leadloom/Screenshot 2026-01-25 165247.png"
                alt="Quote request system"
                className="w-full h-32 object-cover rounded border border-dark-border"
              />
            </a>
            <a href="/projects/leadloom/Screenshot 2026-01-25 165318.png" target="_blank" className="block hover:opacity-80 transition-opacity">
              <img
                src="/projects/leadloom/Screenshot 2026-01-25 165318.png"
                alt="CSV delivery workflow"
                className="w-full h-32 object-cover rounded border border-dark-border"
              />
            </a>
          </div>
        </section>

        {/* What It Does */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What It Does</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Live inventory counts by county, turning-65 month, ZIP, and phone availability across OH, FL & NC</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Instant self-serve checkout: pay with Stripe, get the CSV by email and secure download link seconds later</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Sold-once exclusivity: every record is fingerprinted so it sells one time and is never resold</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Free tools (ZIP lookup, county profiles, ranked market tables) that bring in buyers through search engines and AI assistants</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">One engine, five storefronts: brands are host-routed off a single deployment, so launching a new brand is configuration, not a new codebase</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">A complete unattended money path: Stripe checkout, idempotent webhook fulfillment, promo and referral rails, automated partial refunds, and tokened CSV delivery that lands before the receipt does</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">A data layer of tens of millions of public records fused from live scrapes and archival sources, fingerprinted at the record level so nothing ever sells twice</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Free-source enrichment at scale: geocoding and census-tract demographics for 3M+ households, phone append with multi-source confidence scoring, and a self-healing 24/7 scrape supervisor with adaptive throttling</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">A programmatic SEO engine: thousands of indexed data pages, IndexNow push, and free lookup tools that get the store cited by search engines and AI assistants. Real orders have arrived attributed directly to ChatGPT referrals</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Own-the-stack operations: self-hosted behind a tunnel, own-domain email, request-level attribution, and no third-party platform with the power to switch the business off</span>
            </li>
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-dark-border">
          <Button href="https://leadloom.thewoob.com" external>
            Open LeadLoom
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
