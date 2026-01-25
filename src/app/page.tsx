import type { Metadata } from 'next'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Websites and lightweight tools for small businesses.',
  alternates: {
    canonical: 'https://thewoob.com',
  },
  openGraph: {
    title: 'thewoob — Web + Tools Studio',
    description: 'Websites and lightweight tools for small businesses.',
    url: 'https://thewoob.com',
  },
}

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'thewoob',
    url: 'https://thewoob.com',
    logo: 'https://thewoob.com/logo.png',
    description: 'Websites and lightweight tools for small businesses.',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@thewoob.com',
      contactType: 'Customer Service',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section with Starfield */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
        <div className="starfield" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            Websites and lightweight tools for small businesses.
          </h1>
          
          <p className="text-xl md:text-2xl text-dark-muted max-w-2xl mx-auto mb-12">
            I build functional sites and simple internal tools. No fluff, just working software.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Start a Project</Button>
            <Button href="https://leadloom.thewoob.com" variant="secondary" external>
              View LeadLoom
            </Button>
          </div>
          
          <p className="text-sm text-dark-muted mt-6">
            Recent builds: LeadLoom, VanTracker
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">What I Build</h2>
          <p className="text-dark-muted mb-8">Fixed scope, fast turnaround, code ownership.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Systems</h3>
              <p className="text-dark-muted leading-relaxed text-sm">
                Workflow tools that replace spreadsheets and manual ops.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Data Pipelines</h3>
              <p className="text-dark-muted leading-relaxed text-sm">
                Ingest, clean, enrich, organize, and export data reliably.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Bots and Alerts</h3>
              <p className="text-dark-muted leading-relaxed text-sm">
                Monitors and notifications that keep people updated automatically.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Web Front Ends</h3>
              <p className="text-dark-muted leading-relaxed text-sm">
                Fast, clean interfaces and landing pages that support the system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6 lg:px-8 bg-dark-card/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Work</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* LeadLoom */}
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg mb-4 flex items-center justify-center text-2xl font-bold">
                LL
              </div>
              <h3 className="text-2xl font-bold mb-3">LeadLoom</h3>
              <p className="text-dark-muted mb-4">
                T65 Medicare lead inventory system. Browse lead counts, request quotes, and track CSV deliveries.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Browse lead counts by county, month, ZIP, and phone status</span>
                </li>
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Request quotes or lead packs with exclusivity tracking</span>
                </li>
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Automated CSV delivery workflow for agents</span>
                </li>
              </ul>
              <Button href="https://leadloom.thewoob.com" external>
                View Live
              </Button>
            </div>

            {/* VanTracker */}
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-lg mb-4 flex items-center justify-center text-2xl font-bold">
                VT
              </div>
              <h3 className="text-2xl font-bold mb-3">VanTracker</h3>
              <p className="text-dark-muted mb-4">
                Lightweight delivery fleet ops dashboard for tracking vans, routes, and driver notes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Log van assignments, route notes, and recurring issues</span>
                </li>
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Track basic performance and operational status over time</span>
                </li>
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Designed for fast internal use, not heavy enterprise tooling</span>
                </li>
              </ul>
              <Button href="/work/vantracker" variant="secondary">
                View Details
              </Button>
            </div>

            {/* TheKingKohn */}
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg mb-4 flex items-center justify-center text-2xl font-bold">
                TK
              </div>
              <h3 className="text-2xl font-bold mb-3">TheKingKohn</h3>
              <p className="text-dark-muted mb-4">
                Shopify apparel store that scaled to nearly $100k gross revenue in 2021.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Built and launched full Shopify clothing storefront</span>
                </li>
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Ran paid ads and iterated creatives based on performance</span>
                </li>
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Handled fulfillment workflow, customer support, and store ops</span>
                </li>
              </ul>
              <Button href="/work/thekingkohn" variant="secondary">
                View Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-dark-muted mb-4">01</div>
              <h3 className="text-2xl font-bold mb-3">Scope</h3>
              <p className="text-dark-muted leading-relaxed">
                I figure out what you need and write it down. Clear requirements, no guessing.
              </p>
            </div>

            <div className="p-6">
              <div className="text-4xl font-bold text-dark-muted mb-4">02</div>
              <h3 className="text-2xl font-bold mb-3">Build</h3>
              <p className="text-dark-muted leading-relaxed">
                I build it, test it, and show you progress. You get regular updates.
              </p>
            </div>

            <div className="p-6">
              <div className="text-4xl font-bold text-dark-muted mb-4">03</div>
              <h3 className="text-2xl font-bold mb-3">Launch</h3>
              <p className="text-dark-muted leading-relaxed">
                I deploy it and make sure it works. You get the code and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to get started?
          </h2>
          
          <p className="text-xl text-dark-muted mb-12">
            Tell me what you need. I'll let you know if I can build it.
          </p>

          <Button href="/contact">Start a Project</Button>
        </div>
      </section>
    </>
  )
}
