import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Automation Setup Services | thewoob',
  description: 'Custom automation scripts and bots for teams spending hours on repetitive tasks. Email notifications, scheduling, and workflow automation.',
  alternates: {
    canonical: 'https://thewoob.com/services/automation-setup',
  },
  openGraph: {
    title: 'Automation Setup Services | thewoob',
    description: 'Custom automation scripts and bots for teams spending hours on repetitive tasks. Email notifications, scheduling, and workflow automation.',
    url: 'https://thewoob.com/services/automation-setup',
  },
}

export default function AutomationSetupPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-dark-muted mb-8">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span className="mx-2">/</span>
          <span>Automation Setup</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Automation Setup
        </h1>
        
        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Automation scripts, bots, and workflows that remove repetitive work. If you do the same thing every day, every week, or every time a form comes in, I can turn it into a system that runs on its own and alerts you when something is off.
        </p>

        {/* Who It's For */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Who It's For</h2>
          <div className="p-8 bg-dark-card border border-dark-border rounded-lg">
            <p className="text-dark-muted leading-relaxed mb-4">
              This is for teams and operators who:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">Waste time on copy/paste, manual uploads, manual reporting</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">Move data between tools by hand (Sheets, email, CRM, Shopify, Stripe, etc.)</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">Need scheduled jobs (daily exports, weekly reports, nightly cleanup)</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">Want alerts when something breaks instead of finding out later</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">Need a reliable "glue layer" between tools that were never designed to talk</span>
              </li>
            </ul>
          </div>
        </section>

        {/* What You Get */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What You Get</h2>
          <div className="space-y-6">
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Baseline (every automation)</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">A script or bot that runs reliably (scheduled or triggered)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Logging that makes debugging easy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Fail-safes (retries, validation, error handling)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Notifications on success or failure (email, Discord, Slack, webhook)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Simple configuration so you are not locked into hardcoded values</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Handoff notes so it can be maintained</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Common add-ons (when it makes sense)</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Admin panel or dashboard view (see status, runs, errors, exports)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Queueing for bigger workflows (avoid timeouts, handle volume)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Rate-limit protection and smart backoff for APIs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Data cleanup and de-dup rules (clean inputs before they pollute your system)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Typical Automations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Typical Automations</h2>
          <div className="space-y-4">
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Scheduled Reports</h3>
              <p className="text-dark-muted text-sm">
                Pull from APIs or databases, build a report, send it to the right people automatically.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Data Cleanup + Validation</h3>
              <p className="text-dark-muted text-sm">
                Normalize messy uploads, fix common errors, remove duplicates, flag anomalies for review.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Webhook Workflows</h3>
              <p className="text-dark-muted text-sm">
                When something happens (new lead, new order, form submission), trigger actions across tools.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Notifications + Routing</h3>
              <p className="text-dark-muted text-sm">
                Route leads to the right place, alert the right person, and log the event cleanly.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">File Processing Pipelines</h3>
              <p className="text-dark-muted text-sm">
                Organize files, rename, parse, merge, convert formats, generate exports.
              </p>
            </div>
          </div>
        </section>

        {/* Case Study Reference */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">See It In Action</h2>
          <div className="p-8 bg-dark-card border border-dark-border rounded-lg">
            <p className="text-dark-muted mb-6">
              Projects with automation components:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/work/leadloom"
                className="p-4 bg-dark-bg border border-dark-border rounded-lg hover:border-white/30 transition-colors"
              >
                <h3 className="font-semibold mb-1">LeadLoom</h3>
                <p className="text-sm text-dark-muted">Automated CSV delivery + notifications + indexing pipeline</p>
              </Link>
              <Link 
                href="/work/insiderbot"
                className="p-4 bg-dark-bg border border-dark-border rounded-lg hover:border-white/30 transition-colors"
              >
                <h3 className="font-semibold mb-1">SEC Insider Bot</h3>
                <p className="text-sm text-dark-muted">Automated SEC filing monitoring + Discord alerts</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">How do I know if my task can be automated?</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                If it follows repeatable steps, it can usually be automated. If it requires judgment, we can still automate 80% and leave a clean "manual review" step.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Where does the automation run?</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                Depends on your setup. It can run in the cloud, on a server, or even on a controlled machine you own. The goal is reliability, not keeping your laptop awake.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">What happens if it breaks?</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                You get alerts, logs, and a clear failure state. I build it so it fails loudly and safely instead of silently doing the wrong thing.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Can it connect multiple apps?</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                Yes. If it has an API or webhook support, we can integrate it.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center p-12 bg-dark-card/30 rounded-lg border border-dark-border">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to remove the repetitive work?
          </h2>
          <p className="text-dark-muted mb-8 max-w-xl mx-auto">
            Tell me what you do manually, what tools you use, and what "done" looks like. I'll propose the simplest automation that gets you real time back.
          </p>
          <Button href="/contact?project=automation">Get Started</Button>
        </div>
      </div>
    </div>
  )
}
