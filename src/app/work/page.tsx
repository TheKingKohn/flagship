'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { useState } from 'react'

const projects = [
  {
    slug: 'leadloom',
    name: 'LeadLoom',
    tag: 'Live',
    types: ['Dashboard', 'Web', 'Data'],
    description: 'Built LeadLoom to manage millions of leads, and the full backend to clean them before.',
    highlights: [
      'Browse millions of leads by county, month, ZIP, and phone status',
      'Request quotes with exclusivity tracking and CSV delivery'
    ],
    publicLink: 'https://leadloom.thewoob.com'
  },
  {
    slug: 'vantracker',
    name: 'VanTracker',
    tag: 'MVP',
    types: ['Dashboard', 'Data'],
    description: 'Built VanTracker when I started delivering at Amazon and didn\'t know what van was good or bad yet.',
    highlights: [
      'Log van assignments, route notes, and recurring issues',
      'Driver rating and notes system with performance tracking & admin login'
    ],
    publicLink: null
  },
  {
    slug: 'insiderbot',
    name: 'SEC Insider Alert Bot',
    tag: 'Demo',
    types: ['Automation', 'Bots'],
    description: 'Discord bot that monitors SEC EDGAR Form 4 filings and posts clean alerts with filters.',
    highlights: [
      'Ticker/insider role filters + minimum transaction thresholds',
      'Deduping + alert formatting for Discord readability'
    ],
    publicLink: null
  },
  {
    slug: 'thekingkohn',
    name: 'TheKingKohn.com',
    tag: 'Live',
    types: ['Web'],
    description: 'Scaled a Shopify brand to nearly $100k gross in 2021.',
    highlights: [
      'Nearly $100k gross revenue in 2021',
      'Paid ads + email/SMS flows (abandoned cart + post-purchase)'
    ],
    publicLink: 'https://thekingkohn.com'
  },
  {
    slug: 'mountainhighway',
    name: 'Mountain Highway',
    tag: 'Prototype',
    types: ['Web'],
    description: 'Marketplace prototype with listings, auth, images, and Stripe-based payment flow testing.',
    highlights: [
      'User auth + listings + image upload',
      'Stripe integration prototype with commission logic'
    ],
    publicLink: null
  },
  {
    slug: 'phone-sniffer',
    name: 'Phone Sniffer',
    tag: 'Demo',
    types: ['Data', 'Automation'],
    description: 'Enrichment tool that takes lead lists, standardizes formatting, dedupes, scores, and outputs clean CSVs for outreach.',
    highlights: [
      'Phone normalization + validation',
      'Duplicate detection + clean CRM export formatting'
    ],
    publicLink: null
  },
  {
    slug: '2gamble',
    name: '2Gamble',
    tag: 'Prototype',
    types: ['Web', 'Dashboard'],
    description: 'Token economy platform prototype with auth, admin analytics, and payments integration. Demonstrates deposit/withdrawal flows and user token management.',
    highlights: [
      'Stripe integration for deposits and withdrawals',
      'Admin dashboard with user analytics and token economy controls'
    ],
    publicLink: null
  }
]

const tagStyles = {
  Live: 'bg-green-500/20 text-green-300 border-green-500/40',
  MVP: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  Demo: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
  Prototype: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
  Past: 'bg-dark-muted/10 text-dark-muted border-dark-muted/20'
}

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  
  const filters = ['All', 'Dashboard', 'Web', 'Data', 'Automation', 'Bots']
  
  const getProjectCount = (filter: string) => {
    if (filter === 'All') return projects.length
    return projects.filter(p => p.types.includes(filter)).length
  }
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.types.includes(activeFilter))

  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Work
        </h1>
        
        <p className="text-xl text-dark-muted mb-12 max-w-2xl">
          Real projects solving real problems. Filter by type to find something similar to what you need.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-white text-black'
                  : 'bg-dark-card text-dark-muted border border-dark-border hover:border-white/30'
              }`}
            >
              {filter} ({getProjectCount(filter)})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          {filteredProjects.map((project) => (
            <article 
              key={project.slug}
              className="p-8 bg-dark-card border border-dark-border rounded-lg hover:border-white/30 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-2xl font-bold">
                  {project.name}
                </h2>
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${tagStyles[project.tag as keyof typeof tagStyles]}`}>
                  {project.tag}
                </span>
              </div>

              {/* Type Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.types.map((type) => (
                  <span 
                    key={type}
                    className="text-xs text-dark-muted bg-dark-border/30 px-2 py-1 rounded"
                  >
                    {type}
                  </span>
                ))}
              </div>
              
              <p className="text-dark-muted mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-white mb-2">Key Features</h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-white mr-3">→</span>
                      <span className="text-dark-muted text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <Button href={`/work/${project.slug}`} variant="secondary">
                  View Project
                </Button>
                {project.publicLink ? (
                  <Button href={project.publicLink} external>
                    {project.slug === 'leadloom' ? 'Open App' : 'Visit'}
                  </Button>
                ) : (
                  <Button href={`/contact?project=${project.slug}`}>
                    Request Demo
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-dark-card/30 rounded-lg border border-dark-border">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Need something similar?
          </h3>
          <p className="text-lg text-dark-muted mb-8 max-w-2xl mx-auto">
            Tell me what you're trying to build and I'll propose a path forward.
          </p>
          <Button href="/contact">Start a Conversation</Button>
        </div>
      </div>
    </div>
  )
}
