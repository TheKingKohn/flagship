import type { Metadata } from 'next'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Labs',
  description: 'Experimental bots, prototypes, and tools in development. Testing ideas and building in public.',
  alternates: {
    canonical: 'https://thewoob.com/labs',
  },
  openGraph: {
    title: 'Labs | thewoob',
    description: 'Experimental bots, prototypes, and tools in development. Testing ideas and building in public.',
    url: 'https://thewoob.com/labs',
  },
}

const experiments = [
  {
    name: 'Pro Invoice & Estimate Maker',
    status: 'Live',
    description: 'Offline invoice and estimate generator with templates, JSON export/import, dark mode, and print-to-PDF. Single-file app that runs entirely in the browser.',
    stack: 'HTML, CSS, JavaScript (vanilla)',
    whatItDoes: 'Generate professional invoices without QuickBooks. All data stays in browser, export as JSON or print to PDF.',
  },
  {
    name: 'ModMan',
    status: 'Live',
    description: 'Discord protection bot with raid prevention, strike system, audit logs, and optional dashboard. Automated moderation for community management.',
    stack: 'Node.js, discord.js, PostgreSQL',
    whatItDoes: 'Auto-kick suspicious accounts, track warnings/bans, log all mod actions with configurable rules.',
  },
  {
    name: 'Price Scraper Bot',
    status: 'Live',
    description: 'Scheduled bot that scrapes competitor pricing from websites and logs changes to a database. Sends Slack alerts when prices drop or new products appear.',
    stack: 'Python, BeautifulSoup, Playwright, SQLite',
    whatItDoes: 'Competitive intelligence automation for eCommerce and SaaS pricing.',
  },
  {
    name: 'Email Digest Builder',
    status: 'Prototype',
    description: 'Aggregates updates from multiple sources (GitHub, Slack, analytics) into a single daily email. No more context-switching to check 10 different tools.',
    stack: 'Node.js, GitHub API, Slack API, SendGrid',
    whatItDoes: 'One email every morning with everything that matters from your stack.',
  },
  {
    name: 'Lead Rotator',
    status: 'Live',
    description: 'Simple round-robin lead distribution system. Webhook receives leads, checks rep availability, assigns based on rules, and sends notifications.',
    stack: 'Next.js API routes, PostgreSQL, Twilio',
    whatItDoes: 'Fair lead distribution without paying for a full CRM assignment engine.',
  },
  {
    name: 'Invoice Chaser Bot',
    status: 'Prototype',
    description: 'Automated follow-up system for overdue invoices. Sends escalating reminder emails, logs payment status, and alerts you when something needs manual attention.',
    stack: 'Node.js, Nodemailer, PostgreSQL',
    whatItDoes: 'Stop manually chasing payments. Let a bot do the awkward follow-ups.',
  },
  {
    name: 'Content Scheduler Bot',
    status: 'Prototype',
    description: 'Multi-platform posting scheduler for LinkedIn, Twitter, and newsletters. Queue posts with images, preview formatting, and auto-post at optimal times.',
    stack: 'Next.js, platform APIs, cron jobs',
    whatItDoes: 'Batch-create content once, schedule everywhere, never miss a post.',
  },
]

const statusStyles = {
  Live: 'bg-green-500/20 text-green-300 border-green-500/40',
  Testing: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  Prototype: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
}

export default function LabsPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Labs
        </h1>
        
        <p className="text-xl text-dark-muted mb-4 max-w-2xl">
          Experiments, bots, and half-baked ideas. Some are useful, some arent. But all were built to solve a specific problem.
        </p>
        
        <p className="text-dark-muted mb-16 max-w-2xl">
          No polished screenshots or business case studies here—just code that does a job. 
          If something looks useful, I can whitelabel it or build you a custom version.
        </p>

        {/* Experiments Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {experiments.map((experiment) => (
            <article 
              key={experiment.name}
              className="p-6 bg-dark-card border border-dark-border rounded-lg hover:border-white/30 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-2xl font-bold">
                  {experiment.name}
                </h2>
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${statusStyles[experiment.status as keyof typeof statusStyles]}`}>
                  {experiment.status}
                </span>
              </div>
              
              <p className="text-dark-muted mb-4 leading-relaxed">
                {experiment.description}
              </p>

              <div className="mb-4">
                <p className="text-sm text-white mb-1">What it does:</p>
                <p className="text-sm text-dark-muted">{experiment.whatItDoes}</p>
              </div>

              <div className="text-xs text-dark-muted/70">
                Stack: {experiment.stack}
              </div>
            </article>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="mb-16 p-8 bg-dark-card/30 border border-dark-border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">How This Works</h2>
          <div className="space-y-4 text-dark-muted">
            <p>
              <strong className="text-white">Live:</strong> Actually deployed and running. Can demo or whitelabel on request.
            </p>
            <p>
              <strong className="text-white">Testing:</strong> Works but needs real-world usage to find edge cases. Ready for demos.
            </p>
            <p>
              <strong className="text-white">Prototype:</strong> Core functionality exists but rough around the edges. Proof-of-concept. 
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-dark-card/30 rounded-lg border border-dark-border">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Need something custom?
          </h3>
          <p className="text-lg text-dark-muted mb-8 max-w-2xl mx-auto">
            If one of these experiments solves your problem, I can whitelabel it, extend it, or build you a new custom version. 
            Tell me what you need and I'll add it to the lab.
          </p>
          <Button href="/contact">Start a Conversation</Button>
        </div>
      </div>
    </div>
  )
}
