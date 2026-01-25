import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Projects I\'ve built - websites, dashboards, and automation tools.',
  alternates: {
    canonical: 'https://thewoob.com/work',
  },
  openGraph: {
    title: 'Work | thewoob',
    description: 'Projects I\'ve built - websites, dashboards, and automation tools.',
    url: 'https://thewoob.com/work',
  },
}

const projects = [
  {
    slug: 'leadloom',
    name: 'LeadLoom',
    tag: 'Live',
    description: 'T65 Medicare lead inventory system. Browse leads, request quotes, track deliveries.',
    highlights: [
      'Browse lead counts by county, month, ZIP, and phone status',
      'Request quotes with exclusivity tracking and CSV delivery'
    ],
    publicLink: 'https://leadloom.thewoob.com'
  },
  {
    slug: 'vantracker',
    name: 'VanTracker',
    tag: 'MVP',
    description: 'Driver notes and rating hub for Amazon DSP operations. Track van issues and performance.',
    highlights: [
      'Log van assignments, route notes, and recurring issues',
      'Driver rating system with performance tracking'
    ],
    publicLink: null
  },
  {
    slug: 'insiderbot',
    name: 'SEC Insider Alert Bot',
    tag: 'Prototype',
    description: 'Automated Form 4 tracking with Discord alerts. Monitors insider trading activity.',
    highlights: [
      'Scrapes SEC EDGAR for Form 4 filings',
      'Sends formatted alerts to Discord channels'
    ],
    publicLink: null
  },
  {
    slug: 'thekingkohn',
    name: 'TheKingKohn Shopify Store',
    tag: 'Past',
    description: 'eCommerce store for specialty products. Custom theme and checkout flow.',
    highlights: [
      'Custom Shopify theme with product filtering',
      'Integrated email marketing and abandoned cart recovery'
    ],
    publicLink: null
  }
]

const tagStyles = {
  Live: 'bg-green-500/10 text-green-400 border-green-500/20',
  MVP: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Prototype: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Past: 'bg-dark-muted/10 text-dark-muted border-dark-muted/20'
}

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Projects
        </h1>
        
        <p className="text-xl text-dark-muted mb-16 max-w-2xl">
          A selection of websites, dashboards, and tools I've built.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {projects.map((project) => (
            <article 
              key={project.slug}
              className="p-6 bg-dark-card border border-dark-border rounded-lg hover:border-white/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <Link href={`/work/${project.slug}`} className="hover:text-white transition-colors">
                  <h2 className="text-2xl font-bold">{project.name}</h2>
                </Link>
                <span className={`px-2 py-1 text-xs font-medium border rounded ${tagStyles[project.tag as keyof typeof tagStyles]}`}>
                  {project.tag}
                </span>
              </div>
              
              <p className="text-dark-muted mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <span className="text-dark-muted mr-2">→</span>
                    <span className="text-dark-muted">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                {project.publicLink ? (
                  <a
                    href={project.publicLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-white text-dark-bg rounded text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    Open
                  </a>
                ) : (
                  <Link
                    href={`/contact?project=${project.slug}`}
                    className="inline-block px-4 py-2 bg-dark-bg text-white border border-dark-border rounded text-sm font-medium hover:border-white transition-colors"
                  >
                    Request Demo
                  </Link>
                )}
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-block px-4 py-2 text-dark-muted text-sm hover:text-white transition-colors"
                >
                  Details →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-dark-card/30 rounded-lg">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Have a project in mind?
          </h3>
          <p className="text-lg text-dark-muted mb-8 max-w-2xl mx-auto">
            Let's discuss what you need.
          </p>
          <Button href="/contact">Start a Project</Button>
        </div>
      </div>
    </div>
  )
}
