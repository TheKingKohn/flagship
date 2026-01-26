import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Data Analytics Services | thewoob',
  description: 'Custom analytics dashboards and data pipelines. Interactive charts, automated reporting, and insights from your business data.',
  alternates: {
    canonical: 'https://thewoob.com/services/data-analytics',
  },
  openGraph: {
    title: 'Data Analytics Services | thewoob',
    description: 'Custom analytics dashboards and data pipelines. Interactive charts, automated reporting, and insights from your business data.',
    url: 'https://thewoob.com/services/data-analytics',
  },
}

export default function DataAnalyticsPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-dark-muted mb-8">
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span className="mx-2">/</span>
          <span>Data Analytics</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Data Analytics
        </h1>
        
        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Turn raw business data into something you can actually act on. This can be dashboards, KPI tracking, automated reporting, or a data pipeline that makes your data clean and reliable.
        </p>

        {/* Who It's For */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Who It's For</h2>
          <div className="p-8 bg-dark-card border border-dark-border rounded-lg">
            <p className="text-dark-muted leading-relaxed mb-4">
              This is for businesses that:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">Have data spread across tools but no single source of truth</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">Want to track KPIs that matter (not vanity charts)</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">Need trends, breakdowns, and simple answers fast</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">Want automated reporting instead of manual weekly spreadsheets</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3">→</span>
                <span className="text-dark-muted">Need clean metrics that do not change depending on who built the sheet</span>
              </li>
            </ul>
          </div>
        </section>

        {/* What You Get */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What You Get</h2>
          <div className="space-y-6">
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Core components</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Data pipeline or data model (clean inputs, consistent outputs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Metrics definitions (what a conversion is, what counts as revenue, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Dashboard views with filters, breakdowns, and time ranges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Scheduled reporting (daily, weekly, monthly) if needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Exportable data for deeper analysis</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Optional upgrades</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Multi-source blending (Stripe + Shopify + Ads + internal DB, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Historical trend tracking and cohorts (if you have the events/data)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">Alerts when metrics spike or drop unexpectedly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">✓</span>
                  <span className="text-dark-muted text-sm">A simple admin view for maintaining sources and schedules</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Typical Analytics Builds */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Typical Analytics Builds</h2>
          <div className="space-y-4">
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Revenue + Sales Visibility</h3>
              <p className="text-dark-muted text-sm">
                Track sales, growth, best products, regions, and trends.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Lead + Funnel Tracking</h3>
              <p className="text-dark-muted text-sm">
                Track inbound, conversion rate, source performance, and follow-ups.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Operations Metrics</h3>
              <p className="text-dark-muted text-sm">
                Delivery speed, turnaround time, inventory movement, team workload, task throughput.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Marketing Performance</h3>
              <p className="text-dark-muted text-sm">
                Channel ROI, spend vs results, lead quality by source, campaign comparisons.
              </p>
            </div>
          </div>
        </section>

        {/* Case Study Reference */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">See It In Action</h2>
          <div className="p-8 bg-dark-card border border-dark-border rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/work/thekingkohn"
                className="p-4 bg-dark-bg border border-dark-border rounded-lg hover:border-white/30 transition-colors"
              >
                <h3 className="font-semibold mb-1">TheKingKohn Analytics</h3>
                <p className="text-sm text-dark-muted">Sales and performance tracking for an eCommerce operation</p>
              </Link>
              <Link 
                href="/work/vantracker"
                className="p-4 bg-dark-bg border border-dark-border rounded-lg hover:border-white/30 transition-colors"
              >
                <h3 className="font-semibold mb-1">VanTracker</h3>
                <p className="text-sm text-dark-muted">Driver and route performance visibility</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">What sources can you work with?</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                APIs, databases, spreadsheets, CSV exports, webhooks. If it can be accessed reliably, it can usually be pulled in.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Do I need a data warehouse?</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                Not always. Sometimes a clean pipeline and a simple database is enough. Warehousing is only needed when scale and multi-source complexity justify it.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">How often does the data update?</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                Whatever makes sense. Many businesses start daily or hourly and only go real-time if they truly need it.
              </p>
            </div>

            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Can you help choose what metrics matter?</h3>
              <p className="text-dark-muted text-sm leading-relaxed">
                Yes. The goal is decision-making, not pretty charts.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center p-12 bg-dark-card/30 rounded-lg border border-dark-border">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to understand your data?
          </h2>
          <p className="text-dark-muted mb-8 max-w-xl mx-auto">
            Tell me what decisions you're trying to make and what tools hold your data. I'll propose a clean dashboard and pipeline plan.
          </p>
          <Button href="/contact?project=analytics">Get Started</Button>
        </div>
      </div>
    </div>
  )
}
