import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DONOS | Work | TheWoob',
  description: 'A donation platform where creators get a shareable link and accept one-time or recurring donations, powered by Stripe Connect.',
  openGraph: {
    title: 'DONOS | Work | TheWoob',
    description: 'A donation platform where creators get a shareable link and accept one-time or recurring donations, powered by Stripe Connect.',
  },
  alternates: {
    canonical: 'https://thewoob.com/work/donos',
  },
}

export default function DonosPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">DONOS</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          A donation platform where creators get a shareable link and collect one-time or monthly recurring donations — powered by Stripe Connect with direct payouts.
        </p>

        {/* Screenshots */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="/projects/donos/landing.png" target="_blank" className="block hover:opacity-80 transition-opacity">
              <img
                src="/projects/donos/landing.png"
                alt="DONOS landing page"
                className="w-full h-48 object-cover object-top rounded border border-dark-border"
              />
              <p className="text-xs text-dark-muted mt-2 text-center">Landing page</p>
            </a>
            <a href="/projects/donos/donate.png" target="_blank" className="block hover:opacity-80 transition-opacity">
              <img
                src="/projects/donos/donate.png"
                alt="Creator donation page"
                className="w-full h-48 object-cover object-top rounded border border-dark-border"
              />
              <p className="text-xs text-dark-muted mt-2 text-center">Donation widget</p>
            </a>
            <a href="/projects/donos/register.png" target="_blank" className="block hover:opacity-80 transition-opacity">
              <img
                src="/projects/donos/register.png"
                alt="Donor leaderboard"
                className="w-full h-48 object-cover object-top rounded border border-dark-border"
              />
              <p className="text-xs text-dark-muted mt-2 text-center">Donor leaderboard</p>
            </a>
          </div>
        </section>

        {/* What It Does */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What It Does</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Creators register, pick a username, and instantly get a shareable donation link at <code className="text-white text-sm">donos.thewoob.com/donate/username</code></span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Donors choose a preset or custom amount, toggle one-time vs. monthly, add an optional message, and donate anonymously if they want</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Stripe Connect routes funds directly to the creator's bank — no manual payouts</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Creator dashboard shows total raised, recurring subscriber count, donation history, and goal progress bar</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Installable as a PWA — works from the home screen on any device</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Next.js App Router with server and client components throughout</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Prisma + PostgreSQL schema covering users, donations, and Stripe account state</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">NextAuth for credential-based authentication with protected dashboard routes</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Stripe Connect onboarding flow so creators link their bank and receive payouts directly</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Stripe webhooks to confirm payment success and update donation records in real time</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Stripe Subscriptions for monthly recurring donations with cancellation support</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">PWA manifest + service worker so donors and creators can install it to their home screen</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Rate limiting on donation endpoints to prevent abuse</span>
            </li>
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-dark-border">
          <Button href="/contact">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
