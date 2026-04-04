import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Nexus | Work | TheWoob',
  description: 'AI-first CRM built to replace GoHighLevel — contacts, pipeline, automations, calendar, payments, and Claude-powered deal intelligence.',
  openGraph: {
    title: 'Nexus | Work | TheWoob',
    description: 'AI-first CRM built to replace GoHighLevel — contacts, pipeline, automations, calendar, payments, and Claude-powered deal intelligence.',
  },
  alternates: {
    canonical: 'https://thewoob.com/work/nexus',
  },
}

export default function NexusPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">Nexus</h1>
          <span className="px-3 py-1 text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded">
            Build
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          An AI-first agency CRM built to replace GoHighLevel — better UI, real AI (Claude API), faster onboarding, and undercut pricing at every tier. Targeting the same $500M ARR market with software that actually feels good to use.
        </p>

        {/* What It Does */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What It Does</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Full CRM with contacts, companies, activity timelines, smart tags, segments, and global search</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Visual drag-and-drop sales pipeline with customizable stages, deal cards, revenue forecasting, and color-coded deal age</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Claude API on every contact and deal — summarize leads, write follow-up emails/SMS, detect disengaged prospects, explain lost deals</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Unified inbox for two-way email, SMS, and live chat — all conversations in one place</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Calendar with booking links, availability rules, round-robin scheduling, and Google/Outlook sync</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Form and survey builder, automation workflow canvas, proposal/contract/e-signature tools, and Stripe-powered subscriptions</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Reputation management, social media scheduler, course/membership builder, and affiliate tracking</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">React + Vite frontend with 30+ page modules, custom layout system, and a visual automation canvas built on React Flow</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Node.js + Express API with Drizzle ORM, multi-tenant Supabase schema covering every feature module</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">JWT auth with role-based permissions across workspace, agency, and sub-account tiers</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Claude API integration across contacts, deals, campaigns, and review responses — AI as a core feature, not a bolt-on</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Stripe Connect for agency billing, subscription management, and client invoicing with dunning logic</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Embeddable chat widget (<code className="text-white text-sm">widget.js</code>) for client sites that routes into the unified inbox</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">13 incremental database migrations covering every phase of the build</span>
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
