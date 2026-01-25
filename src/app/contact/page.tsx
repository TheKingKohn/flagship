'use client'

import { ContactForm } from '@/components/ContactForm'
import { Button } from '@/components/Button'

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Get in Touch
        </h1>
        
        <p className="text-xl text-dark-muted mb-12">
          Tell us what you need. We'll respond within 24-48 hours.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block px-8 py-4 rounded-lg font-medium transition-all duration-200 bg-white text-dark-bg hover:bg-gray-200"
          >
            Start a Project
          </button>
          <Button href="https://leadloom.thewoob.com" variant="secondary" external>
            View LeadLoom
          </Button>
        </div>

        {/* Email */}
        <div className="mb-16">
          <p className="text-dark-muted mb-2">Or email directly:</p>
          <a 
            href="mailto:info@thewoob.com" 
            className="text-2xl font-medium text-white hover:text-gray-300 transition-colors"
          >
            info@thewoob.com
          </a>
        </div>

        {/* Contact Form */}
        <div id="contact-form">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
