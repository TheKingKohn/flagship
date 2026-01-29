import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Collab',
  description: 'Partner with thewoob on custom projects, whitelabel products, and technical collaborations.',
  alternates: {
    canonical: 'https://thewoob.com/collab',
  },
}

export default function CollabPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Let's Build Together
        </h1>
        
        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Looking to partner on a project, whitelabel one of my products, or collaborate on something technical? 
          I work with agencies, developers, and businesses that need custom solutions.
        </p>

        {/* Collab Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Ways to Collaborate</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Whitelabel Products</h3>
              <p className="text-dark-muted mb-4 leading-relaxed">
                Deploy LeadLoom, VanTracker, or any Labs project under your brand. Custom domain, branding, and client-specific configs included.
              </p>
              <Link href="/work" className="text-sm text-white hover:text-gray-300 transition-colors">
                See available products →
              </Link>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Technical Partnerships</h3>
              <p className="text-dark-muted mb-4 leading-relaxed">
                Need backend work, API integrations, or automation pipelines for your clients? I handle the technical execution while you manage the relationship.
              </p>
              <Link href="/services" className="text-sm text-white hover:text-gray-300 transition-colors">
                See services →
              </Link>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Agency Projects</h3>
              <p className="text-dark-muted mb-4 leading-relaxed">
                Overflow work or specialized needs for your agency clients. Dashboards, data work, automation—anything that doesn't fit your core offering.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Revenue Share Deals</h3>
              <p className="text-dark-muted mb-4 leading-relaxed">
                Got an idea but need technical execution? We can structure equity, rev share, or hybrid deals for the right projects.
              </p>
            </div>
          </div>
        </section>

        {/* What I Bring */}
        <section className="mb-16 p-8 bg-dark-card/30 border border-dark-border rounded-lg">
          <h2 className="text-2xl font-bold mb-6">What I Bring</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Full-stack development (Next.js, React, Node.js, Python)</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Database design and data pipelines (Postgres, MySQL, SQLite)</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">API integrations and automation scripts</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Fast turnaround on MVPs and prototypes</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">No vendor lock-in—clean code you can maintain</span>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center p-12 bg-dark-card border border-dark-border rounded-lg">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to talk?
          </h3>
          <p className="text-lg text-dark-muted mb-8 max-w-2xl mx-auto">
            Pitch me your idea, partnership structure, or what you need help with. I'll let you know if it's a fit.
          </p>
          <Button href="/contact?project=collab">Start the Conversation</Button>
        </div>
      </div>
    </div>
  )
}
