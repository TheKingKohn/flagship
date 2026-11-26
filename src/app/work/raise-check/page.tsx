import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://raise-check.thewoob.com'

export const metadata: Metadata = {
  title: 'Raise Check | Work',
  description: 'Raise Check: what your raise is really worth after federal, Social Security, Medicare and state tax, and after inflation. Free, installable, works offline, nothing you type leaves your device.',
  openGraph: {
    title: 'Raise Check | Work',
    description: 'Type your old and new pay and see what the raise puts in your pocket, after tax and after prices. Free in your browser.',
    images: ['/projects/raise-check/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/raise-check',
  },
}

const screenshots = [
  { src: '/projects/raise-check/first-screen', alt: 'The Raise Check calculator on a desktop: old and new yearly pay, state, pay schedule and filing status, quick raise buttons, and a result that says a $4,000 raise puts $3,214 a year in your pocket, with the raise before tax, after tax and after inflation', caption: 'The calculator' },
  { src: '/projects/raise-check/state-page', alt: 'The California page: a table of the state income tax, deduction and payroll items, followed by take-home pay on a raise at several pay levels', caption: 'A state page' },
  { src: '/projects/raise-check/phone', alt: 'The Raise Check first screen on a phone: the headline What your raise is really worth and one line of what it does', caption: 'On a phone' },
]

const doesItems = [
  'Takes your old and new pay, your state, how often you are paid and your filing status, and shows what the raise puts in your pocket a year and a paycheck',
  'Takes out federal income tax, Social Security, Medicare and state tax, and shows where each extra dollar goes',
  'Checks the raise against inflation, so you can see whether you are actually ahead once prices are counted',
  'Has quick buttons for a 2, 3, 5 or 10 percent raise, and a share link that keeps your numbers in the address',
  'Has a page for each covered state, with its tax rules and take-home tables, and plain answers to the eight questions people ask most about raises',
  'Installs on your phone and works offline; nothing you type leaves your device',
]

const builtItems = [
  'Tax math built from the IRS tables and the Social Security and Medicare rules, and inflation from the Bureau of Labor Statistics price index',
  'State records researched one by one, each with its source and the date it was checked, merged into the app by a script that keeps only complete records',
  'Charts drawn as SVG on the page with safe DOM calls, so no typed value is ever treated as markup',
  'An Astro site prerendered to static pages, a service worker for offline use and a build gate that checks every page',
  '47 tests across the tax, inflation, state and share-link code, and a hostile-request run against the real server',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-f13">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function RaiseCheckPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Raise Check',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    description: 'A free calculator for what a raise is really worth after tax and inflation. Runs entirely in your browser.',
    url: LIVE,
    image: 'https://thewoob.com/projects/raise-check/og.jpg',
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
          <img src="/brands/raise-check.png" alt="Raise Check logo" width={56} height={56} className="w-14 h-14 rounded-f13" />
          <h1 className="text-phi-4 md:text-phi-5 font-bold">Raise Check</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          A 5 percent raise sounds like 5 percent more money. It is not. Raise Check takes your old and new pay and walks
          the raise through federal tax, Social Security, Medicare, your state and a year of rising prices, then tells you
          in one line what actually lands in your pocket. It answers the question before you sign the offer or ask for
          more, on any phone or computer, and nothing you type leaves your device.
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
            Check Your Raise
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
