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
    <span className="text-white mr-f13">→</span>
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
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-phi-md mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-f34 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-f13 mb-f21">
          <img src="/brands/long-weekend.png" alt="Long Weekend logo" width={56} height={56} className="w-14 h-14 rounded-f13" />
          <h1 className="text-phi-4 md:text-phi-5 font-bold">Long Weekend</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          Everyone has a handful of vacation days and a calendar full of holidays. Long Weekend lines them up for you. Tell
          it how many days you have and which days you work, and it finds the plans that give you the most time off in a
          row: take the Tuesday after a Monday holiday, bridge two weekends, and five days become sixteen. Pick a plan,
          drop it in your calendar, and go. Free, on any phone or computer, with nothing to sign up for.
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
