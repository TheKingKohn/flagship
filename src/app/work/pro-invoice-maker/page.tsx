import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pro Invoice & Estimate Maker',
  description: 'Offline invoice and estimate generator with templates, JSON export/import, and print-to-PDF.',
  alternates: {
    canonical: 'https://thewoob.com/work/pro-invoice-maker',
  },
}

export default function ProInvoiceMakerPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">Pro Invoice & Estimate Maker</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/40 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Offline invoice and estimate generator for small businesses. Create professional invoices with customizable templates, 
          export/import as JSON, toggle dark mode, and print-to-PDF. Single-file app that runs entirely in your browser.
        </p>

        {/* What It Does */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What It Does</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Generate invoices and estimates with line items, tax, discounts, and totals</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Customizable business details and invoice templates</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Export data as JSON for backup or sharing across devices</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Print-to-PDF using browser native print dialog</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Works offline - no server required, everything stays in your browser</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Single-page React app with localStorage persistence</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Dynamic form state management for line items and calculations</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">JSON import/export for data portability</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">CSS print styles optimized for PDF generation</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Dark mode toggle with theme persistence</span>
            </li>
          </ul>
        </section>

        {/* Use Cases */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Who It's For</h2>
          <div className="space-y-6">
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Freelancers & Contractors</h3>
              <p className="text-dark-muted">
                Generate professional invoices without paying for QuickBooks or FreshBooks. Keep your data local, 
                export backups as JSON, and print to PDF for client emails.
              </p>
            </div>
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Service Businesses</h3>
              <p className="text-dark-muted">
                Create estimates on-site with a laptop or tablet. No internet required. Print directly or 
                save as PDF to send later.
              </p>
            </div>
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Privacy-Conscious Users</h3>
              <p className="text-dark-muted">
                All data stays in your browser. No cloud sync, no accounts, no tracking. Export your invoices 
                as JSON files and keep them wherever you want.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Technical Approach</h2>
          <div className="space-y-4 text-dark-muted">
            <p>
              <strong className="text-white">Offline-first architecture:</strong> Built as a single-page app with no backend. 
              All invoice data is stored in browser localStorage, making it instantly available even without internet.
            </p>
            <p>
              <strong className="text-white">JSON portability:</strong> Export button generates a JSON file containing all your 
              invoices, templates, and business info. Import it on another device or keep it as a backup.
            </p>
            <p>
              <strong className="text-white">Print optimization:</strong> Custom CSS print styles format invoices for PDF 
              generation. Uses browser's native print dialog—no third-party PDF libraries or server-side rendering.
            </p>
            <p>
              <strong className="text-white">State management:</strong> React state handles dynamic line items, automatic 
              subtotal/tax/total calculations, and instant preview updates.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="flex gap-4">
          <Button href="https://prorunner.vercel.app" external>Try It Live</Button>
          <Button href="/contact?project=pro-invoice-maker" variant="secondary">
            Build Something Similar
          </Button>
        </div>
      </div>
    </div>
  )
}
