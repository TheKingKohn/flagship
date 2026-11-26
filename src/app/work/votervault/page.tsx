import type { Metadata } from 'next'
import { LiveStat } from '@/components/LiveStat'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { storefrontHref } from '@/lib/storefrontLinks'

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
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <div className="max-w-phi-md mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-f34 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-f13 mb-f21">
          <h1 className="text-phi-4 md:text-phi-5 font-bold">VoterVault</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          A voter data marketplace for political campaigns, PACs, committees, and consultants.
          Filter <LiveStat k="votervault.records_total" fallback="35M+" /> public-record voter rows by state, county, party, and contact info, see the
          exact universe and price in real time, then download it. It runs on the same engine as
          the rest of the data network.
        </p>

        {/* Project Gallery */}
        <section className="mb-f55">
          <h2 className="text-phi-2 font-bold mb-f13">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-f13">
            {screenshots.map((shot) => (
              <a key={shot.src} href={`${shot.src}.webp`} target="_blank" className="block hover:opacity-80 transition-opacity">
                <img
                  src={`${shot.src}-card.webp`}
                  alt={shot.alt}
                  loading="lazy"
                  className="w-full aspect-golden object-cover object-top rounded-f5 border border-dark-border"
                />
                <p className="text-phi--1 text-dark-muted mt-f8 text-center">{shot.caption}</p>
              </a>
            ))}
          </div>
        </section>

        {/* What It Does */}
        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f21">What It Does</h2>
          <ul className="space-y-f13">
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Live counts and instant pricing for every county, with party, phone, and email filters</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Phone- and email-bearing cuts for texting, calling, and fundraising programs, with <LiveStat k="votervault.with_phone" fallback="13M+" /> records carrying a phone number</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Specialty lists: donors, down-ballot districts, young voters, and fresh registrants</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Quote equals delivery: the count on the page is exactly what lands in the CSV</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f21">What I Built</h2>
          <ul className="space-y-f13">
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">A second storefront on the shared engine: its own host, brand, and catalog, with checkout, fulfillment, and delivery reused instead of rebuilt</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">County-level packs across Ohio, Florida, North Carolina, and Pennsylvania, priced per record and computed live</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Compliance in the flow: buyers attest to lawful political use before any quote is issued</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-f13">→</span>
              <span className="text-dark-muted">Programmatic county and district pages that search engines index, plus an llms.txt so AI assistants describe the catalog accurately</span>
            </li>
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-f13 pt-f34 border-t border-dark-border">
          <Button href={storefrontHref('votervault', 'project')} external>
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
