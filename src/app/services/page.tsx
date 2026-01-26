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
      shortIntro: 'Modern websites that drive outcomes, not just look pretty. Mobile-first, fast, and connected to real systems.',
      forWho: 'Businesses that need a professional site or a rebuild that actually converts.',
    },
    {
      title: 'Dashboard Build',
      slug: 'dashboard-build',
      shortIntro: 'Replace spreadsheets with dashboards. Centralize your data, automate updates, and give your team one place to operate.',
      forWho: 'Teams living in spreadsheets with version chaos and manual busywork.',
    },
    {
      title: 'Automation Setup',
      slug: 'automation-setup',
      shortIntro: 'Scripts and bots that remove repetitive work. Turn daily tasks into automated systems that alert you when something breaks.',
      forWho: 'Anyone wasting time on copy/paste, manual reporting, or moving data between tools.',
    },
    {
      title: 'Data Analytics',
      slug: 'data-analytics',
      shortIntro: 'Turn raw data into clear insights. Dashboards, KPI tracking, and pipelines that make your data clean and reliable.',
      forWho: 'Businesses with data spread across tools but no single source of truth.',
    },
  ]

  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Choose Your Lane
        </h1>
        
        <p className="text-xl text-dark-muted mb-16 max-w-2xl">
          Four core services. Pick the one that fits your problem, or tell me what you need and I'll recommend the best path.
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
                For: {service.forWho}
              </p>

              <div className="flex gap-3">
                <Button href={`/services/${service.slug}`} variant="secondary">
                  Full Details
                </Button>
                <Button href={`/contact?project=${service.slug.replace('-build', '').replace('-setup', '')}`}>
                  Start Project
                </Button>
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
