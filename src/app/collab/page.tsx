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
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <div className="max-w-phi-md mx-auto">
        <h1 className="text-phi-4 md:text-phi-6 font-bold tracking-tight mb-f34">
          Let's Build Together
        </h1>
        
        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          Looking to partner on a project, whitelabel one of my products, or collaborate on something technical? 
          I work with agencies, developers, and businesses that need custom solutions.
        </p>

        {/* Collab Types */}
        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f34">Ways to Collaborate</h2>
          
          <div className="grid md:grid-cols-2 gap-f21">
            <div className="p-f21 bg-dark-card border border-dark-border rounded-f8">
              <h3 className="text-phi-1 font-bold mb-f13">Whitelabel Products</h3>
              <p className="text-dark-muted mb-f13 leading-golden">
                Deploy LeadLoom or DONOS under your brand. Custom domain, branding, and client-specific configs included.
              </p>
              <Link href="/work" className="text-phi-0 text-white hover:text-gray-300 transition-colors">
                See available products →
              </Link>
            </div>

            <div className="p-f21 bg-dark-card border border-dark-border rounded-f8">
              <h3 className="text-phi-1 font-bold mb-f13">Technical Partnerships</h3>
              <p className="text-dark-muted mb-f13 leading-golden">
                Need backend work, API integrations, or automation pipelines for your clients? I handle the technical execution while you manage the relationship.
              </p>
              <Link href="/services" className="text-phi-0 text-white hover:text-gray-300 transition-colors">
                See services →
              </Link>
            </div>

            <div className="p-f21 bg-dark-card border border-dark-border rounded-f8">
              <h3 className="text-phi-1 font-bold mb-f13">Agency Projects</h3>
              <p className="text-dark-muted mb-f13 leading-golden">
                Overflow work or specialized needs for your agency clients. Dashboards, data work, automation: anything that doesn't fit your core offering.
              </p>
            </div>

            <div className="p-f21 bg-dark-card border border-dark-border rounded-f8">
              <h3 className="text-phi-1 font-bold mb-f13">Revenue Share Deals</h3>
              <p className="text-dark-muted mb-f13 leading-golden">
                Got an idea but need technical execution? We can structure equity, rev share, or hybrid deals for the right projects.
              </p>
            </div>
          </div>
        </section>

        {/* What I Bring */}
        <section className="mb-f55 p-f34 bg-dark-card/30 border border-dark-border rounded-f8">
          <h2 className="text-phi-2 font-bold mb-f21">What I Bring</h2>
          <ul className="space-y-f13">
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Full-stack development (Next.js, React, Node.js, Python)</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Database design and data pipelines (Postgres, MySQL, SQLite)</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">API integrations and automation scripts</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Fast turnaround on MVPs and prototypes</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">No vendor lock-in, just clean code you can maintain</span>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center p-f55 bg-dark-card border border-dark-border rounded-f8">
          <h3 className="text-phi-3 md:text-phi-4 font-bold mb-f21">
            Ready to talk?
          </h3>
          <p className="text-phi-1 text-dark-muted mb-f34 max-w-phi-sm mx-auto">
            Pitch me your idea, partnership structure, or what you need help with. I'll let you know if it's a fit.
          </p>
          <Button href="/contact?project=collab">Start the Conversation</Button>
        </div>
      </div>
    </div>
  )
}
