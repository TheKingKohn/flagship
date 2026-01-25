import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'VanTracker',
  description: 'Driver notes and rating hub for Amazon DSP fleet operations.',
  alternates: {
    canonical: 'https://thewoob.com/work/vantracker',
  },
}

export default function VanTrackerPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">VanTracker</h1>
          <span className="px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded">
            MVP
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Driver notes and rating hub for Amazon DSP operations. Track van assignments, recurring issues, and driver performance without GPS or complex fleet software. Whitelabel available.
        </p>

        {/* Project Gallery */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <img 
              src="0E8BFE6A-732F-477B-8A3A-F9489C19D4A3.jpg" 
              alt="VanTracker dashboard"
              className="w-full rounded-lg border border-dark-border"
            />
            <img 
              src="17B75D5C-61EB-4692-A9F8-8D3EBF1944F2.jpg" 
              alt="Driver rating system"
              className="w-full rounded-lg border border-dark-border"
            />
            <img 
              src="B442D923-C2A4-4EB2-A988-943D93DCF83F.jpg" 
              alt="Van assignment interface"
              className="w-full rounded-lg border border-dark-border"
            />
            <img 
              src="E952E26A-C3A1-428C-BDB1-1B0646ADF7A9.jpg" 
              alt="Performance tracking"
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
              <span className="text-dark-muted">Log van assignments and route notes for each driver</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Rate drivers and track performance issues over time</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Document recurring van problems and maintenance needs</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Flask web app with mobile-responsive interface</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">SQLite database for driver notes and ratings</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Simple authentication system for DSP managers</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Rating system with historical tracking</span>
            </li>
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-dark-border">
          <Button href="/contact?project=vantracker">
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
