import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://sternly.thewoob.com'

export const metadata: Metadata = {
  title: 'Sternly | Work',
  description: 'Sternly: free, firm letters that cite the law, for a security deposit, a debt collector, a credit report error or a medical bill. Written in your browser, printed or saved as a PDF, no sign-up.',
  openGraph: {
    title: 'Sternly | Work',
    description: 'The firm, correct letter you need, citing the actual law, written in your browser for free.',
    images: ['/projects/sternly/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/sternly',
  },
}

const screenshots = [
  { src: '/projects/sternly/first-screen', alt: 'The Sternly home page on a desktop: the headline The firm, correct letter you need, written in your browser, and five letter cards for a security deposit, debt validation, a credit report dispute, a medical bill and stopping collector contact', caption: 'The letters' },
  { src: '/projects/sternly/letter', alt: 'The debt validation letter: a short form for your name, address and the collector on the left, and the finished letter citing the federal law updating live on the right', caption: 'Writing a letter' },
  { src: '/projects/sternly/phone', alt: 'Sternly on a phone: the headline and one line of how it works', caption: 'On a phone' },
]

const doesItems = [
  'Writes five letters people need and rarely know how to word: a security deposit demand, debt validation, a credit report dispute, a medical bill itemized request and dispute, and a stop-contact letter to a collector',
  'Cites the actual law: the Fair Debt Collection Practices Act sections 1692g and 1692c(c), the Fair Credit Reporting Act section 1681i, and state security deposit law',
  'Has a security deposit page for every state and D.C.',
  'Shows the letter as you fill in a short form, then lets you copy it, print it or save it as a PDF',
  'Keeps everything in your browser: no account, nothing sent anywhere, and saved drafts only if you ask for them',
]

const builtItems = [
  'One record per state and D.C. with the citation, deadline, penalty, source address and date checked, merged in by a script that keeps only fully sourced records',
  'A PDF writer that runs on your device with no outside library, so the letter never leaves your computer',
  'Letter definitions, fields and validation in one place, so every letter follows the same rules for what it asks and what it says',
  'An Astro site with a service worker for offline use, and a build gate that checks every state page and refuses any remote resource',
  'Tests over the law data, the letter text and the PDF output',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-f13">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function SternlyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Sternly',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description: 'Free, firm letters that cite the law, for deposits, debt collectors, credit reports and medical bills. Runs entirely in your browser.',
    url: LIVE,
    image: 'https://thewoob.com/projects/sternly/og.jpg',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Person', name: 'Gavin Kohn', url: 'https://thewoob.com' },
  }

  return (
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-phi-md mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-f34 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-f13 mb-f21">
          <img src="/brands/sternly.png" alt="Sternly logo" width={56} height={56} className="w-14 h-14 rounded-f13" />
          <h1 className="text-phi-4 md:text-phi-5 font-bold">Sternly</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          A landlord keeping a deposit, a collector chasing a debt you do not recognize, a credit report with a mistake, a
          hospital bill with one total and no detail. The fix is usually a letter, and the letter works better when it
          names the law. Sternly writes it: fill in a short form, watch the letter take shape, and print it or save a PDF
          to send. Free, on any phone or computer, and nothing you type leaves your device.
        </p>

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

        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f21">What It Does</h2>
          <ul className="space-y-f13">
            {doesItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f21">What I Built</h2>
          <ul className="space-y-f13">
            {builtItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        <div className="flex flex-col sm:flex-row gap-f13 pt-f34 border-t border-dark-border">
          <Button href={LIVE} external>
            Write a Letter
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
