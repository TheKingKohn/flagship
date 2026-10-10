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
    <span className="text-white mr-3">→</span>
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
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <img src="/brands/donos.png" alt="DONOS logo" width={56} height={56} className="w-14 h-14 rounded-xl" />
          <h1 className="text-5xl md:text-6xl font-bold">DONOS</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          A donation page for creators, as simple as a Cash App link. Sign up, get your own donate link,
          and accept one-time or monthly support through Stripe Connect, paid straight to your bank.
          Supporters can leave a message, give anonymously, and show up on the leaderboard.
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
            {doesItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            {builtItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-dark-border">
          <Button href={LIVE} external>
            Open DONOS
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
        <p className="text-sm text-dark-muted mt-4">Payments run in Stripe test mode for this showcase.</p>
      </div>
    </div>
  )
}
