import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TheKingKohn.com',
  description: 'eCommerce store for specialty products with custom theme and checkout flow.',
  alternates: {
    canonical: 'https://thewoob.com/work/thekingkohn',
  },
}

export default function TheKingKohnPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">TheKingKohn Shopify Store</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          eCommerce store built on Shopify for specialty product sales. 
          Custom theme with advanced filtering and integrated marketing automation.
        </p>

        {/* Project Gallery */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <img 
              src="58DD9492-289E-462C-832D-185F8B8D9900.jpg" 
              alt="TheKingKohn homepage"
              className="w-full rounded-lg border border-dark-border"
            />
            <img 
              src="5CA21ABC-31DD-4F39-9290-EBA0EB486F64.jpg" 
              alt="Product categories"
              className="w-full rounded-lg border border-dark-border"
            />
            <img 
              src="62C702D8-18F2-459A-A93E-6C7BAF66623A.jpg" 
              alt="Top products and traffic analytics"
              className="w-full rounded-lg border border-dark-border"
            />
            <img 
              src="BD7E7739-7339-4A46-9046-8C0C2872414E.jpg" 
              alt="Sales by location and traffic source"
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
              <span className="text-dark-muted">Product catalog with advanced filtering and search</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Custom checkout flow with upsells and product recommendations</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Email marketing integration with abandoned cart recovery</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Inventory management with low-stock alerts</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Custom Shopify theme with Liquid templating</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">JavaScript-based product filtering and sorting system</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Integration with Klaviyo for email automation</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Custom product page templates with variant selection</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Responsive design optimized for mobile shopping</span>
            </li>
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-dark-border">
          <Button href="/contact?project=thekingkohn">
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
