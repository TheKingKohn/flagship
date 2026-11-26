import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://donos.thewoob.com'

export const metadata: Metadata = {
  title: 'DONOS | Work',
  description: 'DONOS: a free donation page for creators. Sign up, get a shareable donate link, and accept one-time or monthly donations through Stripe Connect, with a dashboard, goals, and a donor leaderboard.',
  openGraph: {
    title: 'DONOS | Work',
    description: 'A shareable donation page for creators: one-time and monthly donations through Stripe Connect, paid straight to the creator.',
    images: ['/projects/donos/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/donos',
  },
}

const screenshots = [
  { src: '/projects/donos/landing', alt: 'DONOS home page: the simplest way to accept donations', caption: 'Home' },
  { src: '/projects/donos/donate', alt: 'A creator donation page with preset amounts, monthly option, and a goal bar', caption: 'Creator donation page' },
  { src: '/projects/donos/discover', alt: 'Discover page listing creators with totals raised and a top donors tab', caption: 'Discover creators' },
]

const doesItems = [
  'Creators sign up, pick a username, and instantly get a link to share anywhere: donos.thewoob.com/donate/username',
  'Supporters pick a preset or custom amount, choose one-time or monthly, leave a message, and can give anonymously',
  'Money goes straight to the creator through Stripe Connect, with no manual payouts and no platform holding funds',
  'A creator dashboard with total raised, donation history, recurring supporters, and a goal progress bar',
  'A public Discover page to find creators, plus a top donors leaderboard',
  'Installs to a phone or desktop home screen as an app (PWA)',
]

const builtItems = [
  'Next.js App Router with server and client components, NextAuth credential sign-in, and protected dashboard routes',
  'Prisma with SQLite for users, donations, and each creator\'s Stripe account state',
  'Stripe Connect onboarding so creators link their own bank, Stripe Checkout for one-time gifts, and Stripe Subscriptions for monthly support with cancellation',
  'Stripe webhooks that confirm each payment and update donation records in real time',
  'Rate limiting on sign-up, checkout, and subscription endpoints to block abuse',
  'A web app manifest and service worker so it installs and opens like a native app',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-f13">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function DonosPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'DONOS',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    description: 'A shareable donation page for creators with one-time and monthly donations through Stripe Connect.',
    url: LIVE,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  }

  return (
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-phi-md mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-f34 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-f13 mb-f21">
          <img src="/brands/donos.png" alt="DONOS logo" width={56} height={56} className="w-14 h-14 rounded-f13" />
          <h1 className="text-phi-4 md:text-phi-5 font-bold">DONOS</h1>
          <span className="px-f13 py-f5 text-phi--1 font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded-f5">
            Live
          </span>
        </div>

        <p className="text-phi-1 text-dark-muted mb-f55 leading-golden">
          A donation page for creators, as simple as a Cash App link. Sign up, get your own donate link,
          and accept one-time or monthly support through Stripe Connect, paid straight to your bank.
          Supporters can leave a message, give anonymously, and show up on the leaderboard.
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
            {doesItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-f55">
          <h2 className="text-phi-3 font-bold mb-f21">What I Built</h2>
          <ul className="space-y-f13">
            {builtItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-f13 pt-f34 border-t border-dark-border">
          <Button href={LIVE} external>
            Open DONOS
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
        <p className="text-phi-0 text-dark-muted mt-f13">Payments run in Stripe test mode for this showcase.</p>
      </div>
    </div>
  )
}
