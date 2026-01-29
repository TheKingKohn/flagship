import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dashboard Build Services | thewoob',
  description: 'Custom web dashboards for businesses tracking data manually. Data tables, filtering, exports, and role-based access.',
  alternates: {
    canonical: 'https://thewoob.com/services/dashboard-build',
  },
  openGraph: {
    title: 'Dashboard Build Services | thewoob',
    description: 'Custom web dashboards for businesses tracking data manually. Data tables, filtering, exports, and role-based access.',
    url: 'https://thewoob.com/services/dashboard-build',
  },
}

export default function DashboardBuildPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-dark-muted mb-8">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span className="mx-2">/</span>
          <span>Dashboard Build</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Dashboard Build
        </h1>
        
        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Custom dashboards and internal tools that give your team one place to operate. 
          Manage workflows, set permissions, track operations, and eliminate spreadsheet chaos.
        </p>

        {/* Who It's For */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Who It's For</h2>
          <div className="p-8 bg-dark-card border border-dark-border rounded-lg">
            <p className="text-dark-muted leading-relaxed mb-4">
              This is for teams and operators who are:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">Living in spreadsheets and copying data between tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">Dealing with version chaos, broken formulas, and "who edited this" problems</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">Needing a shared system with roles, approvals, and clean history</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">Wanting automation (alerts, exports, routing) instead of manual busywork</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">Ready to turn a process into an actual system</span>
              </li>
            </ul>
          </div>
        </section>

        {/* What You Get */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What You Get</h2>
          <div className="space-y-6">
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Core dashboard features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Secure login (accounts, roles, permissions)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Clean tables and views (filter, sort, search)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Create, edit, and review workflows (forms + validation)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Exports when needed (CSV, Excel)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Mobile-friendly UI (works on phone, better on desktop)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Automation and operations features (optional, but this is the juice)</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Webhooks and integrations (email, Discord, Slack, Google Sheets, Stripe, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Status-based automation (when X happens, do Y)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Scheduled jobs (daily reports, weekly exports, reminders)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Activity history where it matters (who changed what and when)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Alerts (low inventory, overdue follow-ups, stuck statuses)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Handoff and support</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Documentation and short training walkthrough</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Clean codebase and ownership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Post-launch support window for fixes and small adjustments</span>
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
              <h3 className="text-lg font-semibold mb-2">Lead / Client Tracker</h3>
              <p className="text-dark-muted text-sm mb-3">
                Track inbound leads or customers with status, notes, follow-ups, assignments, and exports. Add auto reminders and "next action" workflows.
              </p>
              <p className="text-xs text-dark-muted">
                Typical delivery: 1–6 weeks depending on scope and integrations.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Inventory / Asset Tracker</h3>
              <p className="text-dark-muted text-sm mb-3">
                Track items, locations, reorder points, usage logs, and supplier notes. Add low-stock alerts and scheduled reorder reports.
              </p>
              <p className="text-xs text-dark-muted">
                Typical delivery: 1–6 weeks depending on scope and integrations.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Ops Workflow Hub</h3>
              <p className="text-dark-muted text-sm mb-3">
                Turn a manual process into steps: intake → review → approval → done. Great for teams that do repeatable work.
              </p>
              <p className="text-xs text-dark-muted">
                Typical delivery: 1–6 weeks depending on scope and integrations.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Sales Pipeline Dashboard</h3>
              <p className="text-dark-muted text-sm mb-3">
                Deal stages, forecasting, activity logs, and performance metrics. Add integration with forms, email, or calendar if needed.
              </p>
              <p className="text-xs text-dark-muted">
                Typical delivery: 1–6 weeks depending on scope and integrations.
              </p>
            </div>
          </div>
        </section>

        {/* Case Study Reference */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">See It In Action</h2>
          <div className="p-8 bg-dark-card border border-dark-border rounded-lg">
            <p className="text-dark-muted mb-6">
              Examples of dashboard-style builds:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/work/leadloom"
                className="p-4 bg-dark-bg border border-dark-border rounded-lg hover:border-white/30 transition-colors"
              >
                <h3 className="font-semibold mb-1">LeadLoom</h3>
                <p className="text-sm text-dark-muted">Inventory browsing, filters, quote requests, internal delivery workflow</p>
              </Link>
              <Link 
                href="/work/pro-invoice-maker"
                className="p-4 bg-dark-bg border border-dark-border rounded-lg hover:border-white/30 transition-colors"
              >
                <h3 className="font-semibold mb-1">Pro Invoice Maker</h3>
                <p className="text-sm text-dark-muted">Offline invoice/estimate generator with templates and export</p>
              </Link>
              <Link 
                href="/work/vantracker"
                className="p-4 bg-dark-bg border border-dark-border rounded-lg hover:border-white/30 transition-colors"
              >
                <h3 className="font-semibold mb-1">VanTracker</h3>
                <p className="text-sm text-dark-muted">Fleet/driver operations dashboard and daily tracking</p>
              </Link>
              <Link 
                href="/work/thekingkohn"
                className="p-4 bg-dark-bg border border-dark-border rounded-lg hover:border-white/30 transition-colors"
              >
                <h3 className="font-semibold mb-1">TheKingKohn Analytics</h3>
                <p className="text-sm text-dark-muted">Sales and performance visibility for an eCommerce operation</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Can you migrate data from our existing spreadsheets?</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                Yes. I can import from Excel, Google Sheets, CSV, and clean it into a structure that the dashboard can actually run on.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">How many users can access the dashboard?</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                It depends on what you need. Most small teams are simple to support. Permissions can be set up by role (admin, editor, viewer) so the right people can edit and the rest can view.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Can it integrate with tools we already use?</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                Yes. If your tool has an API or webhook support, it can usually connect. Common ones are Stripe, QuickBooks, Gmail, Slack, Discord, Zapier, and Google Sheets.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">What happens after it's built?</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                You get documentation, a walkthrough, and a short post-launch support window. If you want ongoing updates, we can do maintenance or feature drops.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Is the data secure?</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                Dashboards include secure authentication, HTTPS, and basic best practices. If you have special requirements (compliance, stricter controls), I can scope that separately.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center p-12 bg-dark-card/30 rounded-lg border border-dark-border">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to replace your spreadsheets?
          </h2>
          <p className="text-dark-muted mb-8 max-w-xl mx-auto">
            Tell me what you track today, where it breaks, and what "perfect" would look like. I'll propose the simplest version that gets you live fast, then we can expand.
          </p>
          <Button href="/contact?project=dashboard">Get Started</Button>
        </div>
      </div>
    </div>
  )
}
