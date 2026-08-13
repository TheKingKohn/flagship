import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Select client work: website builds, dashboards, automation, and data pipelines.',
  alternates: {
    canonical: 'https://thewoob.com/services',
  },
  openGraph: {
    title: 'Services | thewoob',
    description: 'Select client work: website builds, dashboards, automation, and data pipelines.',
    url: 'https://thewoob.com/services',
  },
}

export default function ServicesPage() {
  const lanes = [
    {
      title: 'Website Build',
      filter: 'Web',
      shortIntro: 'Fast, mobile-first sites built to convert, rank, and connect to real tools.',
      forWho: 'businesses that need a clean site with a clear offer and real calls to action.',
    },
    {
      title: 'Dashboard Build',
      filter: 'Dashboard',
      shortIntro: 'Replace spreadsheets with a single operating screen for your business.',
      forWho: 'teams tracking leads, sales, operations, or inventory across too many places.',
    },
    {
      title: 'Automation Setup',
      filter: 'Automation',
      shortIntro: 'Turn repeated tasks into scripts and alerts that run without you.',
      forWho: 'reporting, lead processing, routing, notifications, and tool-to-tool syncing.',
    },
    {
      title: 'Data Work',
      filter: 'Data',
      shortIntro: 'Pipelines that ingest, clean, enrich, and serve data you can trust.',
      forWho: 'businesses with messy data and no single source of truth.',
    },
  ]

  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Work With Me
        </h1>

        <p className="text-xl text-dark-muted mb-4 max-w-2xl">
          Most of my time goes into products I own and run, so I only take on a handful of
          client projects a year. When I do, it looks like one of these four lanes.
        </p>

        <p className="text-dark-muted mb-16 max-w-2xl">
          Everything I ship for clients uses the same stack I run my own businesses on.
          You get clean code you can maintain, no vendor lock-in, and someone who has to
          live with his own architecture decisions every day.
        </p>

        {/* Lanes Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {lanes.map((lane) => (
            <article
              key={lane.title}
              className="p-8 bg-dark-card border border-dark-border rounded-lg hover:border-white/30 transition-all duration-200"
            >
              <h2 className="text-3xl font-bold mb-4">
                {lane.title}
              </h2>

              <p className="text-dark-muted mb-4 leading-relaxed">
                {lane.shortIntro}
              </p>

              <p className="text-sm text-dark-muted/80 mb-6 leading-relaxed">
                Best for: {lane.forWho}
              </p>

              <Link
                href={`/work?filter=${lane.filter}`}
                className="text-sm text-white hover:text-gray-300 transition-colors"
              >
                See examples →
              </Link>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-dark-card/30 rounded-lg border border-dark-border">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Have something in mind?
          </h3>
          <p className="text-lg text-dark-muted mb-8 max-w-2xl mx-auto">
            Tell me what you're trying to fix or build and I'll let you know honestly
            whether it's a fit and what the fastest path looks like.
          </p>
          <Button href="/contact">Start a Conversation</Button>
        </div>
      </div>
    </div>
  )
}
