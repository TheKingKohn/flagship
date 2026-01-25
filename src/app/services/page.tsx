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
      whoFor: 'Small businesses needing a web presence or replacing an outdated site.',
      whatYouGet: [
        'Mobile-first responsive design',
        'Contact forms with email notifications',
        'Basic SEO setup (meta tags, sitemap)',
        'Hosting setup and deployment',
        'Content management instructions',
      ],
      examples: [
        'Service business landing page with contact form',
        'Portfolio site with project gallery',
        'Multi-page site with services and about pages',
        'Simple eCommerce store on Shopify',
      ]
    },
    {
      title: 'Dashboard Build',
      whoFor: 'Businesses tracking data manually or using multiple spreadsheets.',
      whatYouGet: [
        'Custom web dashboard with login',
        'Data tables with filtering and sorting',
        'CSV/Excel export functionality',
        'Role-based access for team members',
        'Mobile-responsive interface',
      ],
      examples: [
        'Lead tracking with status updates',
        'Inventory management with low-stock alerts',
        'Project timeline and task tracking',
        'Sales pipeline with reporting',
      ]
    },
    {
      title: 'Automation Setup',
      whoFor: 'Teams spending hours on repetitive manual tasks.',
      whatYouGet: [
        'Scheduled automation script or bot',
        'Error handling and logging',
        'Email/webhook notifications on completion',
        'Configuration documentation',
        'Basic monitoring setup',
      ],
      examples: [
        'Daily report generation and email delivery',
        'Data cleanup and validation scripts',
        'Webhook-triggered workflows',
        'Scheduled social media or email posts',
      ]
    },
    {
      title: 'Data Analytics',
      whoFor: 'Businesses with data but no clear way to understand it.',
      whatYouGet: [
        'Data pipeline setup and cleaning',
        'Interactive charts and visualizations',
        'Automated reporting dashboard',
        'Export functionality for deeper analysis',
        'Documentation of metrics and calculations',
      ],
      examples: [
        'Sales trends with monthly/yearly comparisons',
        'Customer behavior and conversion tracking',
        'Operational metrics dashboard',
        'Performance KPIs with historical data',
      ]
    },
  ]

  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Services
        </h1>
        
        <p className="text-xl text-dark-muted mb-20 max-w-2xl">
          Websites, dashboards, automation, and analytics for small businesses.
        </p>

        {/* Services Grid */}
        <div className="space-y-12 mb-24">
          {services.map((service, index) => (
            <article 
              key={index}
              className="p-8 md:p-12 bg-dark-card border border-dark-border rounded-lg"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {service.title}
              </h2>
              
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white mb-2">Who it's for</h3>
                <p className="text-dark-muted leading-relaxed">
                  {service.whoFor}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white mb-3">What you get</h3>
                <ul className="space-y-2">
                  {service.whatYouGet.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white mr-3">→</span>
                      <span className="text-dark-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-white mb-3">Typical scope examples</h3>
                <ul className="space-y-2">
                  {service.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-dark-muted mr-3">•</span>
                      <span className="text-dark-muted text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button href="/contact">Start a Project</Button>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-dark-card/30 rounded-lg">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Not sure which service fits?
          </h3>
          <p className="text-lg text-dark-muted mb-8 max-w-2xl mx-auto">
            Describe what you need and we'll figure out the best approach.
          </p>
          <Button href="/contact">Start a Project</Button>
        </div>
      </div>
    </div>
  )
}
