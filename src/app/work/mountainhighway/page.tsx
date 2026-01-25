import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mountain Highway',
  description: 'Peer-to-peer marketplace with user listings, image uploads, and payment processing.',
  alternates: {
    canonical: 'https://thewoob.com/work/mountainhighway',
  },
}

export default function MountainHighwayPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">Mountain Highway</h1>
          <span className="px-3 py-1 text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded">
            Prototype
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Peer-to-peer marketplace combining features of AliExpress and Craigslist. 
          Users create accounts, list items with photos, and complete transactions with built-in payment processing.
        </p>

        {/* Project Gallery */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <img 
              src="22261C0E-1194-42FC-8310-B45264DCD4C3.jpg" 
              alt="Marketplace homepage"
              className="w-full rounded-lg border border-dark-border"
            />
            <img 
              src="D7E48F92-97D2-4340-9CC8-7A0FCC7D5BD2.jpg" 
              alt="Product listing interface"
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
              <span className="text-dark-muted">User registration and authentication system</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Create listings with multiple image uploads and descriptions</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Browse marketplace with search and category filtering</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Secure payment processing through Stripe integration</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Automated commission system for platform revenue</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Full-stack web app with user authentication and session management</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Image upload and storage system with optimization</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Stripe Connect integration for split payments and commission collection</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Listing management dashboard for sellers</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Search and filter system for product discovery</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Responsive design for mobile and desktop shopping</span>
            </li>
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-dark-border">
          <Button href="/contact?project=mountainhighway">
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
