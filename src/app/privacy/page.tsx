import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy and data handling practices for thewoob.com.',
  alternates: {
    canonical: 'https://thewoob.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | thewoob',
    description: 'Privacy policy and data handling practices for thewoob.com.',
    url: 'https://thewoob.com/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
          Privacy Policy
        </h1>
        
        <p className="text-lg text-dark-muted mb-12">
          Last updated: January 24, 2026
        </p>

        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-dark-muted leading-relaxed mb-4">
              This page describes how we handle information when you visit this website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Information Collection</h2>
            <p className="text-dark-muted leading-relaxed mb-4">
              When you contact us, we collect the information you provide (name, email, company, message). 
              We use this to respond to your inquiry.
            </p>
            <p className="text-dark-muted leading-relaxed mb-4">
              We may collect basic analytics data (pages visited, referral source) through standard web hosting logs.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Use Information</h2>
            <p className="text-dark-muted leading-relaxed mb-4">
              We use your contact information to respond to inquiries and provide services you request. 
              We do not sell or share your information with third parties for marketing purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Data Storage</h2>
            <p className="text-dark-muted leading-relaxed mb-4">
              Contact form submissions are sent via email. We keep these emails as part of our business correspondence. 
              You can request deletion of your information by contacting us.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Cookies</h2>
            <p className="text-dark-muted leading-relaxed mb-4">
              This website does not use tracking cookies. Standard hosting logs may record your IP address and browser information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Changes</h2>
            <p className="text-dark-muted leading-relaxed mb-4">
              We may update this page as needed. The date at the top shows when it was last updated.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-dark-muted leading-relaxed mb-4">
              Questions about privacy? Email us at{' '}
              <a href="mailto:info@thewoob.com" className="text-white hover:underline">
                info@thewoob.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
