import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Call Center | Work | TheWoob',
  description: 'Browser-based call center that lets you make/receive calls through Twilio, automatically records them, and manages leads.',
  openGraph: {
    title: 'Call Center | Work | TheWoob',
    description: 'Browser-based call center that lets you make/receive calls through Twilio, automatically records them, and manages leads.',
    images: ['/projects/callcenter/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/callcenter',
  },
}

export default function CallCenterPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">Call Center</h1>
          <span className="px-3 py-1 text-sm font-medium bg-dark-muted/10 text-dark-muted border border-dark-muted/20 rounded">
            Past
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-8 leading-relaxed">
          Browser-based call center that lets you make/receive calls through Twilio, automatically records them, and manages leads.
        </p>

        {/* What It Does */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What It Does</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Make and receive real phone calls directly in your browser on any device</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Automatic call recording with timestamps - every call is saved and playable from the dashboard</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Lead management workflow with dispositions (interested/not interested/callback)</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Real-time Google Sheets sync for lead data and call outcomes</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">CSV lead upload for batch importing contact lists</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Twilio integration for browser-based WebRTC calling</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Call recording system with automatic WAV file storage and playback</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Real-time dashboard showing lead info during active calls</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Disposition tracking system with Google Sheets API integration</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">CSV upload and parsing for lead list management</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Twilio credential management for custom account configuration</span>
            </li>
          </ul>
        </section>

        {/* Why I Built This */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Why I Built This</h2>
          <p className="text-dark-muted leading-relaxed mb-4">
            Traditional call center software is expensive and clunky. I wanted something lightweight that works 
            in a browser - no desk phones, no complicated setup, just plug in your Twilio credentials and start calling.
          </p>
          <p className="text-dark-muted leading-relaxed">
            The automatic recording and disposition tracking make it easy to follow up with leads, train new callers 
            on what works, and keep everything synced with Google Sheets for easy reporting.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-dark-card border border-dark-border rounded text-sm">Twilio</span>
            <span className="px-4 py-2 bg-dark-card border border-dark-border rounded text-sm">WebRTC</span>
            <span className="px-4 py-2 bg-dark-card border border-dark-border rounded text-sm">Google Sheets API</span>
            <span className="px-4 py-2 bg-dark-card border border-dark-border rounded text-sm">Python/Flask</span>
            <span className="px-4 py-2 bg-dark-card border border-dark-border rounded text-sm">JavaScript</span>
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 bg-dark-card/30 rounded-lg border border-dark-border">
          <h3 className="text-2xl font-bold mb-4">Need a custom call center?</h3>
          <p className="text-dark-muted mb-6">
            I can build you a tailored solution with your specific workflow, integrations, and features.
          </p>
          <div className="flex gap-3">
            <Button href="/contact">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
