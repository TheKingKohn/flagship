import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Phone Sniffer',
  description: 'Lightweight enrichment tool that validates and normalizes contact fields for cleaner outreach workflows.',
  alternates: {
    canonical: 'https://thewoob.com/work/phone-sniffer',
  },
}

export default function PhoneSnifferPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">Phone Sniffer</h1>
          <span className="px-3 py-1 text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-500/40 rounded">
            Demo
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Lightweight enrichment tool that takes a lead list and attempts to match, validate, and normalize contact fields. 
          Cleans phone formatting, removes duplicates, scores data quality, and outputs a clean CSV for outreach workflows.
        </p>

        {/* What It Does */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What It Does</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Validates and formats phone numbers to consistent E.164 standard</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Detects and flags duplicate entries across contact fields</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Scores data quality with confidence ratings (high, medium, low)</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Outputs clean CSV ready for CRM import or outreach tools</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Python script with pandas for CSV processing and transformation</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Phone validation logic using libphonenumber for international formats</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Duplicate detection algorithm with fuzzy matching on name and contact fields</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Quality scoring system based on field completeness and validation results</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Command-line interface with progress tracking and error reporting</span>
            </li>
          </ul>
        </section>

        {/* Use Cases */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Common Use Cases</h2>
          <div className="space-y-6">
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Sales Teams</h3>
              <p className="text-dark-muted">
                Clean messy lead lists before loading into HubSpot, Salesforce, or outreach tools. Remove duplicates, 
                format phone numbers consistently, and score leads by data completeness.
              </p>
            </div>
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Marketing Campaigns</h3>
              <p className="text-dark-muted">
                Normalize contact lists from multiple sources (webforms, trade shows, purchased lists) into a single 
                clean dataset ready for email or SMS campaigns.
              </p>
            </div>
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Data Migrations</h3>
              <p className="text-dark-muted">
                Clean up legacy CRM data before migration. Identify duplicates, fix formatting issues, and flag 
                low-quality records that need manual review.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="space-y-4 text-dark-muted">
            <p>
              <strong className="text-white">1. Upload CSV:</strong> Drag and drop your lead list with contact fields 
              (name, phone, email, company). Supports common CRM export formats.
            </p>
            <p>
              <strong className="text-white">2. Validation Pass:</strong> Each phone number is validated against 
              libphonenumber's database to check if it's a real, callable number. Invalid entries are flagged.
            </p>
            <p>
              <strong className="text-white">3. Normalization:</strong> Phone numbers are converted to E.164 standard 
              (+1XXXXXXXXXX). Names are title-cased. Emails are lowercased.
            </p>
            <p>
              <strong className="text-white">4. Duplicate Detection:</strong> Compares records using fuzzy matching on 
              name fields and exact matching on phone/email. Keeps the most complete record.
            </p>
            <p>
              <strong className="text-white">5. Quality Scoring:</strong> Each record gets a score based on field 
              completeness, validation status, and duplicate status. High/Medium/Low ratings.
            </p>
            <p>
              <strong className="text-white">6. Export Clean CSV:</strong> Download the cleaned dataset with a new 
              column showing quality score and any flags (duplicate, invalid, incomplete).
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="flex gap-4">
          <Button href="/contact?project=phone-sniffer">Request Demo</Button>
          <Button href="/services/data-analytics" variant="secondary">
            See Data Analytics Service
          </Button>
        </div>
      </div>
    </div>
  )
}
