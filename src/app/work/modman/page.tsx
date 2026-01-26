import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ModMan',
  description: 'Discord protection bot with raid prevention, strike system, audit logs, and optional dashboard.',
  alternates: {
    canonical: 'https://thewoob.com/work/modman',
  },
}

export default function ModManPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">ModMan</h1>
          <span className="px-3 py-1 text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-500/40 rounded">
            Demo
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Discord protection bot with automated raid prevention, configurable strike system, audit logs, and optional 
          web dashboard. Keep communities safe without manual moderation 24/7.
        </p>

        {/* What It Does */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What It Does</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Auto-kicks suspicious accounts (new accounts joining in rapid succession)</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Strike system for warnings, temporary mutes, and permanent bans</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Audit logs for all mod actions with timestamps and reasons</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Optional web dashboard to view stats, logs, and configure thresholds</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Configurable rules: join rate limits, minimum account age, role restrictions</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Discord bot using discord.js with event listeners for joins, messages, and actions</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">PostgreSQL database for strike tracking, audit logs, and configuration</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Raid detection algorithm based on join velocity and account age patterns</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Web dashboard (Next.js) with Discord OAuth for admin access</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Slash commands for manual mod actions and configuration changes</span>
            </li>
          </ul>
        </section>

        {/* Use Cases */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Who It's For</h2>
          <div className="space-y-6">
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Growing Communities</h3>
              <p className="text-dark-muted">
                Discord servers hitting 1,000+ members face spam, raids, and moderation overload. Automate the basics 
                so human mods can focus on real issues.
              </p>
            </div>
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Gaming Guilds & Clans</h3>
              <p className="text-dark-muted">
                Keep trolls and alts out. Configure minimum account age requirements, auto-kick suspicious joins, 
                and track repeat offenders across servers.
              </p>
            </div>
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Business Communities</h3>
              <p className="text-dark-muted">
                Professional Discord servers need audit trails. Every mod action is logged with reasons and timestamps 
                for accountability and compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Technical Approach</h2>
          <div className="space-y-4 text-dark-muted">
            <p>
              <strong className="text-white">Event-driven architecture:</strong> Bot listens to Discord gateway events 
              (guildMemberAdd, messageCreate) and processes them in real-time with configurable thresholds.
            </p>
            <p>
              <strong className="text-white">Raid detection logic:</strong> Tracks join velocity over rolling time windows. 
              If 10+ new accounts join within 60 seconds, auto-kick mode engages and notifies admins.
            </p>
            <p>
              <strong className="text-white">Strike escalation system:</strong> First offense = warning, second = 1-hour mute, 
              third = 24-hour mute, fourth = permanent ban. Fully configurable per-server.
            </p>
            <p>
              <strong className="text-white">Dashboard integration:</strong> Optional web UI connects to the same database. 
              View mod action history, configure bot settings, and download audit logs as CSV.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="flex gap-4">
          <Button href="/contact?project=modman">Request Demo</Button>
          <Button href="/services/automation-setup" variant="secondary">
            See Automation Service
          </Button>
        </div>
      </div>
    </div>
  )
}
