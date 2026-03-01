'use client'

import { Button } from '@/components/Button'
import { useState } from 'react'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('kohnaccshop@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Let's Build Something
        </h1>

        <p className="text-xl text-dark-muted mb-4">
          Got a project, an idea, or a problem that needs solving? I'm open to new work and collaborations.
        </p>

        <p className="text-lg text-dark-muted mb-16">
          I respond within 24–48 hours. The more detail you share upfront, the faster we can move.
        </p>

        {/* Contact Cards */}
        <div className="space-y-4 mb-16">
          {/* Email */}
          <div className="p-6 bg-dark-card border border-dark-border rounded-lg hover:border-white/30 transition-all duration-200">
            <p className="text-xs font-semibold uppercase tracking-wider text-dark-muted mb-3">Email</p>
            <div className="flex items-center justify-between gap-4">
              <a
                href="mailto:kohnaccshop@gmail.com"
                className="text-xl md:text-2xl font-medium text-white hover:text-gray-300 transition-colors"
              >
                kohnaccshop@gmail.com
              </a>
              <button
                onClick={copyEmail}
                className="shrink-0 text-xs px-3 py-1.5 rounded border border-dark-border text-dark-muted hover:border-white/30 hover:text-white transition-all duration-200"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Discord */}
          <div className="p-6 bg-dark-card border border-dark-border rounded-lg hover:border-white/30 transition-all duration-200">
            <p className="text-xs font-semibold uppercase tracking-wider text-dark-muted mb-3">Discord</p>
            <a
              href="https://discord.com/users/thekingkohn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-medium text-white hover:text-gray-300 transition-colors inline-flex items-center gap-2"
            >
              @thekingkohn
              <svg className="w-4 h-4 text-dark-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/work" variant="secondary">
            View My Work First
          </Button>
        </div>
      </div>
    </div>
  )
}
