'use client'

import { Button } from '@/components/Button'

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Get in Touch
        </h1>
        
        <p className="text-xl text-dark-muted mb-6">
          Reach out through any of these channels. I'll respond within 24-48 hours.
        </p>
        
        <p className="text-lg text-dark-muted mb-12">
          Open to collaborations and working together on projects. Let's build something.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button href="/work" variant="secondary">
            View Projects
          </Button>
        </div>

        {/* Social Links */}
        <div className="space-y-8">
          <div>
            <p className="text-dark-muted mb-3 text-sm uppercase tracking-wider">Email</p>
            <a 
              href="mailto:kohnaccshop@gmail.com" 
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors inline-block"
            >
              kohnaccshop@gmail.com
            </a>
          </div>

          <div>
            <p className="text-dark-muted mb-3 text-sm uppercase tracking-wider">Discord</p>
            <a 
              href="https://discord.com/users/thekingkohn" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-medium text-white hover:text-gray-300 transition-colors inline-block"
            >
              @thekingkohn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
