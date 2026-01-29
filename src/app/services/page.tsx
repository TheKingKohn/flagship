import Link from 'next/link'
import type { Metadata } from 'next'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Website builds, dashboards, automation, and data analytics for small businesses.',
  alternates: {
    canonical: 'https://thewoob.com/services',
  },
  openGraph: {
    title: 'Services | thewoob',
    description: 'Website builds, dashboards, automation, and data analytics for small businesses.',
    url: 'https://thewoob.com/services',
  },
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Website Build',
      slug: 'website-build',
      shortIntro: 'Fast, mobile-first sites built to convert, rank, and connect to real tools.',
      forWho: 'businesses that need a clean site with a clear offer and real calls to action.',
      examples: ['/work/thekingkohn', '/work/mountainhighway'],
    },
    {
      title: 'Dashboard Build',
      slug: 'dashboard-build',
      shortIntro: 'Replace spreadsheets with a single operating screen for your business.',
      forWho: 'teams tracking leads, sales, operations, or inventory across too many places.',
      examples: ['/work/leadloom', '/work/vantracker'],
    },
    {
      title: 'Automation Setup',
      slug: 'automation-setup',
      shortIntro: 'Turn repeated tasks into scripts and alerts that run without you.',
      forWho: 'reporting, lead processing, routing, notifications, and tool-to-tool syncing.',
      examples: ['/work/insiderbot', '/work/phone-sniffer'],
    },
    {
      title: 'Data Analytics',
      slug: 'data-analytics',
      shortIntro: 'Clean pipelines and KPIs you can trust, with dashboards that stay accurate.',
      forWho: 'businesses with messy data and no single source of truth.',
      examples: ['/work/leadloom', '/work/vantracker'],
    },
  ]

  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Choose Your Lane
        </h1>
        
        <p className="text-xl text-dark-muted mb-16 max-w-2xl">
          Four core services. Pick one, or tell me the goal and I'll recommend the fastest path.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {services.map((service) => (
            <article 
              key={service.slug}
              className="p-8 bg-dark-card border border-dark-border rounded-lg hover:border-white/30 transition-all duration-200"
            >
              <h2 className="text-3xl font-bold mb-4">
                {service.title}
              </h2>
              
              <p className="text-dark-muted mb-4 leading-relaxed">
                {service.shortIntro}
              </p>

              <p className="text-sm text-dark-muted/80 mb-6 leading-relaxed">
                Best for: {service.forWho}
              </p>

              <div className="flex flex-col gap-3">
                <Button href={`/contact?project=${service.slug.replace('-build', '').replace('-setup', '')}`}>
                  Start Project
                </Button>
                <Link 
                  href="/work" 
                  className="text-sm text-dark-muted hover:text-white transition-colors text-center"
                >
                  See examples →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-dark-card/30 rounded-lg border border-dark-border">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Not sure which lane?
          </h3>
          <p className="text-lg text-dark-muted mb-8 max-w-2xl mx-auto">
            Tell me what you're trying to fix or build and I'll propose the fastest path.
          </p>
          <Button href="/contact">Start a Conversation</Button>
        </div>
      </div>
    </div>
  )
}
