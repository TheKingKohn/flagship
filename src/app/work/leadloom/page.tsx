import type { Metadata } from 'next'
import { LiveStat } from '@/components/LiveStat'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { storefrontHref } from '@/lib/storefrontLinks'

export const metadata: Metadata = {
  title: 'LeadLoom | Work',
  description: 'Built and operate LeadLoom: a live, revenue-generating data marketplace and the five-brand network behind it.',
  openGraph: {
    title: 'LeadLoom | Work',
    description: 'Built and operate LeadLoom: a live, revenue-generating data marketplace and the five-brand network behind it.',
    images: ['/projects/leadloom/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/leadloom',
  },
}

const screenshots = [
  { src: '/projects/leadloom/home', alt: 'LeadLoom home page with live six-state inventory', caption: 'Home page' },
  { src: '/projects/leadloom/county', alt: 'Broward County buy page with live counts and a free sample', caption: 'County buy page' },
  { src: '/projects/leadloom/builder', alt: 'Build-and-buy list builder with per-state availability', caption: 'List builder' },
]

export default function LeadLoomPage() {
  return (
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <div className="max-w-phi-md mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-f34 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-f13 mb-f21">
          <h1 className="text-phi-4 md:text-phi-5 font-bold">LeadLoom</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          A live, revenue-generating data marketplace: insurance agents pick a county, build a
          turning-65 list, pay, and download the CSV in seconds. It's the flagship of a five-brand
          network (LeadLoom, NestEgg, HomeLoom, VoterVault, TheWoob Explorer) that I built and
          operate solo on one engine.
        </p>

        {/* Project Gallery */}
        <section className="mb-f55">
          <h2 className="text-phi-2 font-bold mb-f13">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-f13">
            {screenshots.map((shot) => (
              <a key={shot.src} href={`${shot.src}.webp`} target="_blank" className="block hover:opacity-80 transition-opacity">
                <img
                  src={`${shot.src}-card.webp`}
                  alt={shot.alt}
                  loading="lazy"
                  className="w-full aspect-golden object-cover object-top rounded-f5 border border-dark-border"
                />
                <p className="text-phi--1 text-dark-muted mt-f8 text-center">{shot.caption}</p>
              </a>
            ))}
          </div>
        </section>

        {/* What It Does */}
        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f21">What It Does</h2>
          <ul className="space-y-f13">
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Live inventory counts by county, turning-65 month, ZIP, and phone availability across Florida, North Carolina, Ohio, Pennsylvania, Utah, and Washington</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Instant self-serve checkout: pay with Stripe, get the CSV by email and secure download link seconds later</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Sold-once exclusivity: every record is fingerprinted so it sells one time and is never resold</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Free tools (ZIP lookup, county profiles, ranked market tables) that bring in buyers through search engines and AI assistants</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f21">What I Built</h2>
          <ul className="space-y-f13">
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">A six-state data spine: every record in every state carries the same 200+ attributes, so adding a state is a data drop, not a code change</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">One engine, five storefronts: brands are host-routed off a single deployment, so launching a new brand is configuration, not a new codebase</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">A complete unattended money path: Stripe checkout, idempotent webhook fulfillment, promo and referral rails, automated partial refunds, and tokened CSV delivery that lands before the receipt does</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">A data layer of tens of millions of public records fused from live scrapes and archival sources, fingerprinted at the record level so nothing ever sells twice</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Free-source enrichment at scale: geocoding and census-tract demographics for 3M+ households, and a self-healing 24/7 scrape supervisor with adaptive throttling</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">A programmatic SEO engine: thousands of indexed data pages, IndexNow push, and free lookup tools that get the store cited by search engines and AI assistants. Real orders have arrived attributed directly to ChatGPT referrals</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Own-the-stack operations: self-hosted behind a tunnel, own-domain email, request-level attribution, and no third-party platform with the power to switch the business off</span>
            </li>
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-f13 pt-f34 border-t border-dark-border">
          <Button href={storefrontHref('leadloom', 'project')} external>
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
