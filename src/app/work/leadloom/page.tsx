import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'LeadLoom | Work | TheWoob',
  description: 'Built LeadLoom to manage millions of leads, plus the backend pipeline to clean, index, and serve them fast.',
  openGraph: {
    title: 'LeadLoom | Work | TheWoob',
    description: 'Built LeadLoom to manage millions of leads, plus the backend pipeline to clean, index, and serve them fast.',
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
          Built LeadLoom to manage millions of leads, plus the backend pipeline to clean, index, and serve them fast.
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
              <span className="text-dark-muted">Browse lead counts by county, month, ZIP code, and phone availability</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Request quotes or purchase lead packs with exclusivity tracking</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Automated CSV delivery workflow for Medicare agents</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Fast filtering at scale (county, month, ZIP, phone status) with cached inventory and export-ready results</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Next.js application with server and client components</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">PostgreSQL database schema for leads and quotes</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Authentication and role-based access control</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Responsive UI with filtering and data tables</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">API endpoints for CRUD operations and reporting</span>
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
