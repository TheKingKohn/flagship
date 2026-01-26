import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Website Build Services | thewoob',
  description: 'Professional website development for small businesses. Mobile-first design, contact forms, SEO setup, and hosting deployment.',
  alternates: {
    canonical: 'https://thewoob.com/services/website-build',
  },
  openGraph: {
    title: 'Website Build Services | thewoob',
    description: 'Professional website development for small businesses. Mobile-first design, contact forms, SEO setup, and hosting deployment.',
    url: 'https://thewoob.com/services/website-build',
  },
}

export default function WebsiteBuildPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-dark-muted mb-8">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span className="mx-2">/</span>
          <span>Website Build</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Website Build
        </h1>
        
        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Custom websites for small businesses that need a professional web presence. 
          Mobile-first, fast, and easy to maintain.
        </p>

        {/* Who It's For */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Who It's For</h2>
          <div className="p-8 bg-dark-card border border-dark-border rounded-lg">
            <p className="text-dark-muted leading-relaxed mb-4">
              This is for businesses and creators who need a site that actually drives outcomes, like:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">→ A professional site that feels legit and modern</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">→ A fast, mobile-first rebuild that fixes speed, UX, and SEO issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">→ A site that connects to real systems: Email, CRM, Stripe, forms, scheduling, Google Sheets, etc. </span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">→ A site that can grow into a bigger platform later: members area, dashboard, internal tools</span>
              </li>
            </ul>
          </div>
        </section>

        {/* What You Get */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What You Get</h2>
          <div className="space-y-6">
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Core build</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Mobile-first design that looks clean on phone and desktop</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Fast loading (optimized images, modern build, good Core Web Vitals)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Clear CTAs and conversion-first layout (not just "pretty")</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Contact or quote form that actually routes leads correctly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Basic SEO foundation (titles, descriptions, sitemap, indexing-ready structure)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Systems and automation add-ons (this is the real "you")</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Lead capture that goes somewhere useful (email, CRM, Sheets, Airtable, webhook)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Auto follow-ups (email or Discord alerts, internal notifications)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Scheduling and intake flow (calendar embed, intake form, auto-confirmations)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Simple dashboards or admin pages if needed (view leads, status, exports)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Hosting, deployment, and domain setup, plus SSL and security basics</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Support and handoff</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Clean documentation so you can update things later</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Optional maintenance plan (updates, tweaks, new sections, fixes)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Post-launch support window</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Typical Builds */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Typical Builds</h2>
          <div className="space-y-4">
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Conversion Landing Page</h3>
              <p className="text-dark-muted text-sm mb-3">
                Single-page site focused on getting calls, quote requests, or leads. Includes fast load, strong CTA, simple form routing.
              </p>
              <p className="text-xs text-dark-muted">
                Timeline: 1 to 4 weeks depending on scope
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Business Website</h3>
              <p className="text-dark-muted text-sm mb-3">
                Home + Services + About + Contact, with a layout built for trust and local search.
              </p>
              <p className="text-xs text-dark-muted">
                Timeline: 1 to 4 weeks depending on scope
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Portfolio / Creator Site</h3>
              <p className="text-dark-muted text-sm mb-3">
                Work gallery, case studies, and a contact funnel that makes it easy to hire you.
              </p>
              <p className="text-xs text-dark-muted">
                Timeline: 1 to 4 weeks depending on scope
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Website + Automation</h3>
              <p className="text-dark-muted text-sm mb-3">
                Same site, but with lead routing, follow-ups, and a basic internal view of submissions.
              </p>
              <p className="text-xs text-dark-muted">
                Timeline: 1 to 4 weeks depending on scope
              </p>
            </div>
          </div>
        </section>

        {/* Case Study Reference */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">See It In Action</h2>
          <div className="p-8 bg-dark-card border border-dark-border rounded-lg">
            <p className="text-dark-muted mb-6">
              This site is an example of a modern website build plus systems thinking. More examples with front ends and real functionality:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/work/leadloom"
                className="p-4 bg-dark-bg border border-dark-border rounded-lg hover:border-white/30 transition-colors"
              >
                <h3 className="font-semibold mb-1">LeadLoom</h3>
                <p className="text-sm text-dark-muted">Lead marketplace + dashboard UI + filtering flows</p>
              </Link>
              <Link 
                href="/work/pro-invoice-maker"
                className="p-4 bg-dark-bg border border-dark-border rounded-lg hover:border-white/30 transition-colors"
              >
                <h3 className="font-semibold mb-1">Pro Invoice Maker</h3>
                <p className="text-sm text-dark-muted">Single-page app with offline-first thinking and export/print features</p>
              </Link>
              <Link 
                href="/work/thekingkohn"
                className="p-4 bg-dark-bg border border-dark-border rounded-lg hover:border-white/30 transition-colors"
              >
                <h3 className="font-semibold mb-1">TheKingKohn</h3>
                <p className="text-sm text-dark-muted">eCommerce + tracking + analytics style build</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">How long does a build take?</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                Most projects land in the 1 to 4 week range depending on scope, content readiness, and how many systems we connect. Faster if it's a clean landing page, longer if it includes dashboards or automation.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Will I be able to update the site myself?</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                Yes. If you want simple updates, I'll show you the workflow. If you need frequent changes, I can set up a CMS or a clean "edit-friendly" structure.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">What if I don't have content ready?</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                We can ship with placeholder content and tighten it after, or I can help structure the copy so it reads strong and converts.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Do you offer hosting and maintenance?</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                Yes. I can set up hosting and handle updates, changes, and improvements over time.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">What technologies do you use?</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                Modern stack focused on speed and maintainability (Next.js, React, Tailwind). If your project needs a different setup (Shopify, WordPress, etc.), I can work with that too.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center p-12 bg-dark-card/30 rounded-lg border border-dark-border">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to build something that actually works?
          </h2>
          <p className="text-dark-muted mb-8 max-w-xl mx-auto">
            Tell me what you are trying to achieve and what you already have (domain, logo, content). I'll recommend the fastest path to launch and scale from there.
          </p>
          <Button href="/contact?project=website">Get Started</Button>
        </div>
      </div>
    </div>
  )
}
