import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://invoice.thewoob.com'

export const metadata: Metadata = {
  title: 'Invoice Maker | Work',
  description: 'Invoice Maker: free invoices and estimates with your logo, clients, line items, discounts and tax, saved on your device and exported as a clean PDF. Works offline, no sign-up, nothing uploaded.',
  openGraph: {
    title: 'Invoice Maker | Work',
    description: 'Make a clean invoice or estimate in a minute and download the PDF. Free, private, in your browser.',
    images: ['/projects/invoice-maker/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/invoice-maker',
  },
}

const screenshots = [
  { src: '/projects/invoice-maker/first-screen', alt: 'The Invoice Maker editor on a desktop: invoice details, dates, terms and currency on the left and a live preview of the finished invoice on the right', caption: 'The editor' },
  { src: '/projects/invoice-maker/phone', alt: 'Invoice Maker on a phone: Editor and Saved tabs, Edit and Preview buttons, and the Invoice and Estimate switch', caption: 'On a phone' },
]

const doesItems = [
  'Invoices and estimates with automatic numbering, dates, payment terms and any currency',
  'Your business details and logo saved once and used on every document, plus a saved client list',
  'Line items with quantity, rate, line discounts and tax, a whole-bill discount and an amount already paid',
  'A live preview that matches the PDF exactly, and a PDF made on your device in one tap',
  'A saved list with draft, sent, paid and overdue, and estimate to invoice in one click',
  'Back up everything to a file and load it on another device; installs and works offline',
]

const builtItems = [
  'Money math in whole cents with exact integers, rounded once per line, once for the discount and once for tax, in any currency',
  'A small PDF writer with no outside library, with long invoices running to more pages with the headers repeated',
  'One layout that drives the preview, the PDF and the printout, so all three match',
  'Saved data validated on every load, so a damaged or hostile backup file cannot break the app or inject anything',
  '82 tests, including thousands of random totals checked against the rules, an offline service worker and a strict content security policy',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-3">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function InvoiceMakerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Invoice Maker',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'A free invoice and estimate maker with PDF export. Runs entirely in your browser; your data stays on your device.',
    url: LIVE,
    image: 'https://thewoob.com/projects/invoice-maker/og.jpg',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Person', name: 'Gavin Kohn', url: 'https://thewoob.com' },
  }

  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <img src="/brands/invoice-maker.png" alt="Invoice Maker logo" width={56} height={56} className="w-14 h-14 rounded-xl" />
          <h1 className="text-5xl md:text-6xl font-bold">Invoice Maker</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Freelancers and small shops should not need an account and a monthly fee to send a bill. Invoice Maker does invoices and estimates with your logo, your clients, line items, discounts and tax, and turns them into a clean PDF in one tap. It keeps a list of everything you have sent, marks what is paid and what is overdue, and turns an accepted estimate into an invoice. Everything stays on your device.
        </p>

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

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What It Does</h2>
          <ul className="space-y-3">
            {doesItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            {builtItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-dark-border">
          <Button href={LIVE} external>
            Make an Invoice
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
