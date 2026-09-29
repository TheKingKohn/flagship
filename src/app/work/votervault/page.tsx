import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'VoterVault | Work',
  description: 'Built and operate VoterVault: a live voter data marketplace for campaigns, PACs, and consultants with live counts, instant pricing, and instant downloads.',
  openGraph: {
    title: 'VoterVault | Work',
    description: 'Built and operate VoterVault: a live voter data marketplace for campaigns, PACs, and consultants with live counts, instant pricing, and instant downloads.',
    images: ['/projects/votervault/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/votervault',
  },
}

const screenshots = [
  { src: '/projects/votervault/home', alt: 'VoterVault home page with live voter totals and the list builder', caption: 'Home page' },
  { src: '/projects/votervault/county', alt: 'County voter page with party breakdown and live quote form', caption: 'County voter page' },
  { src: '/projects/votervault/donors', alt: 'Political donor lists page', caption: 'Donor lists' },
]

export default function VoterVaultPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">VoterVault</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          A voter data marketplace for political campaigns, PACs, committees, and consultants.
          Filter 35M+ verified voter records by state, county, party, and contact info, see the
          exact universe and price in real time, then download it. It runs on the same engine as
          the rest of the data network.
        </p>

        {/* Project Gallery */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {screenshots.map((shot) => (
              <a key={shot.src} href={`${shot.src}.webp`} target="_blank" className="block hover:opacity-80 transition-opacity">
                <img
                  src={`${shot.src}-card.webp`}
                  alt={shot.alt}
                  loading="lazy"
                  className="w-full h-48 object-cover object-top rounded border border-dark-border"
                />
                <p className="text-xs text-dark-muted mt-2 text-center">{shot.caption}</p>
              </a>
            ))}
          </div>
        </section>

        {/* What It Does */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What It Does</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Live counts and instant pricing for every county, with party, phone, and email filters</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Phone- and email-bearing cuts for texting, calling, and fundraising programs, with 13M+ records carrying a phone number</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Specialty lists: donors, down-ballot districts, young voters, and fresh registrants</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Quote equals delivery: the count on the page is exactly what lands in the CSV</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">A second storefront on the shared engine: its own host, brand, and catalog, with checkout, fulfillment, and delivery reused instead of rebuilt</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">County-level packs across Ohio, Florida, North Carolina, and Pennsylvania, priced per record and computed live</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Compliance in the flow: buyers attest to lawful political use before any quote is issued</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Programmatic county and district pages that search engines index, plus an llms.txt so AI assistants describe the catalog accurately</span>
            </li>
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-dark-border">
          <Button href="https://votervault.thewoob.com" external>
            Open VoterVault
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
