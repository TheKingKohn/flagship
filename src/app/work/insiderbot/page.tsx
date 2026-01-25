import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEC Insider Alert Bot',
  description: 'Automated Form 4 tracking with Discord alerts for monitoring insider trading activity.',
  alternates: {
    canonical: 'https://thewoob.com/work/insiderbot',
  },
}

export default function InsiderBotPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">SEC Insider Alert Bot</h1>
          <span className="px-3 py-1 text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded">
            Demo
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Automated monitoring system for SEC Form 4 filings. Tracks insider trading activity 
          and sends formatted alerts to Discord channels. Available for Discord integration or whitelabel deployment.
        </p>

        {/* Project Gallery */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <img 
              src="/projects/insiderbot/1.jpg" 
              alt="Discord alert example"
              className="w-full rounded-lg border border-dark-border"
            />
            <img 
              src="/projects/insiderbot/2.jpg" 
              alt="Form 4 tracking"
              className="w-full rounded-lg border border-dark-border"
            />
            <img 
              src="/projects/insiderbot/3.jpg" 
              alt="Transaction details"
              className="w-full rounded-lg border border-dark-border"
            />
            <img 
              src="/projects/insiderbot/4.jpg" 
              alt="Bot configuration"
              className="w-full rounded-lg border border-dark-border"
            />
          </div>
        </section>

        {/* What It Does */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What It Does</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Scrapes SEC EDGAR database for new Form 4 filings</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Filters by specified ticker symbols and transaction types</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Sends formatted alerts to Discord with transaction details</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Runs on schedule with configurable polling intervals</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Python scraper with SEC EDGAR XML parsing</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Discord webhook integration with embed formatting</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">SQLite database for tracking processed filings</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Scheduled task runner with error handling and logging</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Configuration file for ticker lists and alert settings</span>
            </li>
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-dark-border">
          <Button href="/contact?project=insiderbot">
            Request Demo
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
