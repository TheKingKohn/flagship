'use client'

import Link from 'next/link'
import { Button } from '@/components/Button'
import { Typewriter } from '@/components/Typewriter'

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'thewoob',
    url: 'https://thewoob.com',
    logo: 'https://thewoob.com/logo.png',
    description: 'Hi, Im Kohn, Heres What Ive Built.',
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
          {/* SEO H1 - visually hidden but accessible */}
          <h1 className="sr-only">Kohn - Custom Software Development & Web Applications</h1>
          
          <Typewriter 
            texts={["HI, IM KOHN.", "I BUILD SOFTWARE.", "DASHBOARDS, DATA, AUTOMATION."]}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
            speed={70}
            deleteSpeed={40}
            pauseTime={2000}
          />
          
          <p className="text-xl md:text-2xl text-dark-muted max-w-2xl mx-auto mb-12">
            Custom software, web apps, automations, and data pipelines that solve real problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">Start Your Project</Button>
            <Button href="/work" variant="secondary">
              View My Work
            </Button>
          </div>
          
          <p className="text-sm text-dark-muted mt-6">
            Recent builds: <Link href="/work/leadloom" className="hover:text-white transition-colors">LeadLoom</Link>, <Link href="/work/callcenter" className="hover:text-white transition-colors">Call Center</Link>, <Link href="/work/vantracker" className="hover:text-white transition-colors">VanTracker</Link>
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-dark-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">What I Build</h2>
          <p className="text-dark-muted mb-8"> If it lives in code, I can build it.
  Websites, dashboards, automations, integrations, data pipelines, plus hosting / maintenance.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/30">
              <h3 className="text-xl font-bold mb-3">Systems</h3>
              <p className="text-dark-muted leading-relaxed text-sm">
                Workflow tools that replace spreadsheets and manual ops.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/30">
              <h3 className="text-xl font-bold mb-3">Data Pipelines</h3>
              <p className="text-dark-muted leading-relaxed text-sm">
                Ingest, clean, enrich, organize, and export data reliably.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/30">
              <h3 className="text-xl font-bold mb-3">Bots and APIs</h3>
              <p className="text-dark-muted leading-relaxed text-sm">
                Monitors and notifications on the backend that keep people updated automatically.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/30">
              <h3 className="text-xl font-bold mb-3">Web Front Ends & UI</h3>
              <p className="text-dark-muted leading-relaxed text-sm">
                Fast, clean interfaces and landing pages that support the systems I've built.
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
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/50 hover:shadow-lg">
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
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/50 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-lg mb-4 flex items-center justify-center text-2xl font-bold">
                VT
              </div>
              <h3 className="text-2xl font-bold mb-3">VanTracker</h3>
              <p className="text-dark-muted mb-4">
                Driver notes and rating hub for Amazon DSP fleet operations. Track van assignments, recurring issues, and driver performance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Log van assignments, route notes, and recurring issues</span>
                </li>
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Driver rating system with performance tracking</span>
                </li>
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Simple internal tool for DSP operations, not enterprise software</span>
                </li>
              </ul>
              <Button href="/work/vantracker" variant="secondary">
                View Details
              </Button>
            </div>

            {/* Call Center */}
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/50 hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg mb-4 flex items-center justify-center text-2xl font-bold">
                CC
              </div>
              <h3 className="text-2xl font-bold mb-3">Call Center</h3>
              <p className="text-dark-muted mb-4">
                Browser-based call center with Twilio integration, automatic recording, and lead workflow management.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Make and receive calls directly in browser - no phone needed</span>
                </li>
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Every call auto-recorded with timestamps and playback</span>
                </li>
                <li className="flex items-start text-sm text-dark-muted">
                  <span className="text-white mr-2">→</span>
                  <span>Try the demo: demo_admin / demo123</span>
                </li>
              </ul>
              <Button href="https://callcenter.thewoob.com" external>
                Try Demo
              </Button>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button href="/work" variant="secondary">
              View All Projects
            </Button>
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
