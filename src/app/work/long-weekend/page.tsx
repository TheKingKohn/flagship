import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://longweekend.thewoob.com'

export const metadata: Metadata = {
  title: 'Long Weekend | Work',
  description: 'Long Weekend: tell it how many vacation days you have and it plans them around weekends and holidays for the most days off in a row. Free, installable, works offline, no sign-up.',
  openGraph: {
    title: 'Long Weekend | Work',
    description: 'Turn five vacation days into sixteen days off. A free planner that bridges weekends and holidays for you, in your browser.',
    images: ['/projects/long-weekend/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/long-weekend',
  },
}

const screenshots = [
  { src: '/projects/long-weekend/first-screen', alt: 'The Long Weekend planner on a desktop: year and vacation-day inputs, the days you work, and a ranked list of plans led by use 5 days, get 20 off, with calendar, print and share buttons', caption: 'The planner' },
  { src: '/projects/long-weekend/state-page', alt: 'The Texas holidays 2027 page: a table of every holiday with its date and the best way to turn each one into a long weekend', caption: 'A state page' },
  { src: '/projects/long-weekend/phone', alt: 'The Long Weekend first screen on a phone: the title, one line of what it does and the start of the planner', caption: 'On a phone' },
]

const doesItems = [
  'Takes how many vacation days you have and which days you work, and ranks every plan by the days off it gives you, best first',
  'Bridges holidays and weekends with the fewest vacation days, so five days can turn into sixteen off',
  'Has a page for every federal holiday by year, with its date and the best days to take off, and state pages that add the state\'s own days',
  'Lets you block out dates, set limits, compare plans and see the holidays you get',
  'Adds a plan to your calendar as an .ics file, prints it on one page, or shares the whole plan in a link',
  'Installs on your phone and works offline, with no account, no cookies and no trackers',
]

const builtItems = [
  'An exact optimizer that searches every way to spend your days across a year, tested against brute force',
  'Holiday rules computed from each holiday\'s legal date rule, and state records that each carry their source, citation and date checked',
  'A small Node build that prerenders every page, the sitemap and a service worker, behind a gate that checks the output before it ships',
  'Share links that hold the whole plan in the address, calendar export and a printable page, with nothing stored on a server',
  'Plain ES modules with no framework, 28 tests, and a hostile-request run against the real server',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-3">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function LongWeekendPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Long Weekend',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description: 'A free planner that spends your vacation days around weekends and holidays for the most days off in a row. Runs entirely in your browser.',
    url: LIVE,
    image: 'https://thewoob.com/projects/long-weekend/og.jpg',
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
          <img src="/brands/long-weekend.png" alt="Long Weekend logo" width={56} height={56} className="w-14 h-14 rounded-xl" />
          <h1 className="text-5xl md:text-6xl font-bold">Long Weekend</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Everyone has a handful of vacation days and a calendar full of holidays. Long Weekend lines them up for you. Tell
          it how many days you have and which days you work, and it finds the plans that give you the most time off in a
          row: take the Tuesday after a Monday holiday, bridge two weekends, and five days become sixteen. Pick a plan,
          drop it in your calendar, and go. Free, on any phone or computer, with nothing to sign up for.
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
            Plan Your Days Off
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
