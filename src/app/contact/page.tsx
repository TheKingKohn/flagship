'use client'

import { Button } from '@/components/Button'
import { useState } from 'react'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('gavin@thewoob.com')
    } catch {
      return // the address is selectable text right beside the button
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <div className="max-w-phi-md mx-auto">
        <h1 className="text-phi-4 md:text-phi-6 font-bold tracking-tight mb-f34">
          Let's Build Something
        </h1>

        <p className="text-phi-1 text-dark-muted mb-f13">
          Got a project, an idea, or a problem that needs solving? I'm open to new work and collaborations.
        </p>

        <p className="text-phi-1 text-dark-muted mb-f55">
          I respond within 24–48 hours. The more detail you share upfront, the faster we can move.
        </p>

        {/* Contact Cards */}
        <div className="space-y-f13 mb-f55">
          {/* Email */}
          <div className="p-f21 bg-dark-card border border-dark-border rounded-f8 hover:border-white/30 transition-all duration-f233">
            <p className="text-phi--1 font-semibold uppercase tracking-wider text-dark-muted mb-f13">Email</p>
            <div className="flex items-center justify-between gap-f13">
              <a
                href="mailto:gavin@thewoob.com"
                className="text-phi-1 md:text-phi-2 font-medium text-white hover:text-gray-300 transition-colors"
              >
                gavin@thewoob.com
              </a>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="shrink-0 text-phi--1 px-f13 py-f5 rounded-f5 border border-dark-border text-dark-muted hover:border-white/30 hover:text-white transition-all duration-f233"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            {/* Screen readers hear the result; the button's own label change is silent to them. */}
            <p role="status" aria-live="polite" className="sr-only">
              {copied ? 'Email address copied' : ''}
            </p>
          </div>

          {/* Discord */}
          <div className="p-f21 bg-dark-card border border-dark-border rounded-f8 hover:border-white/30 transition-all duration-f233">
            <p className="text-phi--1 font-semibold uppercase tracking-wider text-dark-muted mb-f13">Discord</p>
            <a
              href="https://discord.com/users/thekingkohn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-phi-1 md:text-phi-2 font-medium text-white hover:text-gray-300 transition-colors inline-flex items-center gap-f8"
            >
              @thekingkohn
              <svg className="w-4 h-4 text-dark-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="flex flex-col sm:flex-row gap-f13">
          <Button href="/work" variant="secondary">
            View My Work First
          </Button>
        </div>
      </div>
    </div>
  )
}
