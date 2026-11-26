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
    images: ['/og.jpg'],
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
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <div className="max-w-phi-lg mx-auto">
        <h1 className="text-phi-4 md:text-phi-6 font-bold tracking-tight mb-f34">
          Work With Me
        </h1>

        <p className="text-phi-1 text-dark-muted mb-f13 max-w-phi-sm">
          Most of my time goes into products I own and run, so I only take on a handful of
          client projects a year. When I do, it looks like one of these four lanes.
        </p>

        <p className="text-dark-muted mb-f55 max-w-phi-sm">
          Everything I ship for clients uses the same stack I run my own businesses on.
          You get clean code you can maintain, no vendor lock-in, and someone who has to
          live with his own architecture decisions every day.
        </p>

        {/* Lanes Grid */}
        <div className="grid md:grid-cols-2 gap-f21 mb-f89">
          {lanes.map((lane) => (
            <article
              key={lane.title}
              className="p-f34 bg-dark-card border border-dark-border rounded-f8 hover:border-white/30 transition-all duration-f233"
            >
              <h2 className="text-phi-3 font-bold mb-f13">
                {lane.title}
              </h2>

              <p className="text-dark-muted mb-f13 leading-golden">
                {lane.shortIntro}
              </p>

              <p className="text-phi-0 text-dark-muted/80 mb-f21 leading-golden">
                Best for: {lane.forWho}
              </p>

              <Link
                href={`/work?filter=${lane.filter}`}
                className="text-phi-0 text-white hover:text-gray-300 transition-colors"
              >
                See examples →
              </Link>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-f55 bg-dark-card/30 rounded-f8 border border-dark-border">
          <h3 className="text-phi-3 md:text-phi-4 font-bold mb-f21">
            Have something in mind?
          </h3>
          <p className="text-phi-1 text-dark-muted mb-f34 max-w-phi-sm mx-auto">
            Tell me what you're trying to fix or build and I'll let you know honestly
            whether it's a fit and what the fastest path looks like.
          </p>
          <Button href="/contact">Start a Conversation</Button>
        </div>
      </div>
    </div>
  )
}
