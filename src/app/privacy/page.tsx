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
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <div className="max-w-phi-md mx-auto">
        <h1 className="text-phi-4 md:text-phi-5 font-bold tracking-tight mb-f34">
          Privacy Policy
        </h1>
        
        <p className="text-phi-1 text-dark-muted mb-f55">
          Last updated: January 24, 2026
        </p>

        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-f55">
            <h2 className="text-phi-3 font-bold mb-f13">Overview</h2>
            <p className="text-dark-muted leading-golden mb-f13">
              This page describes how we handle information when you visit this website.
            </p>
          </section>

          <section className="mb-f55">
            <h2 className="text-phi-3 font-bold mb-f13">Information Collection</h2>
            <p className="text-dark-muted leading-golden mb-f13">
              When you contact us, we collect the information you provide (name, email, company, message). 
              We use this to respond to your inquiry.
            </p>
            <p className="text-dark-muted leading-golden mb-f13">
              We may collect basic analytics data (pages visited, referral source) through standard web hosting logs.
            </p>
          </section>

          <section className="mb-f55">
            <h2 className="text-phi-3 font-bold mb-f13">How We Use Information</h2>
            <p className="text-dark-muted leading-golden mb-f13">
              We use your contact information to respond to inquiries and provide services you request. 
              We do not sell or share your information with third parties for marketing purposes.
            </p>
          </section>

          <section className="mb-f55">
            <h2 className="text-phi-3 font-bold mb-f13">Data Storage</h2>
            <p className="text-dark-muted leading-golden mb-f13">
              Contact form submissions are sent via email. We keep these emails as part of our business correspondence. 
              You can request deletion of your information by contacting us.
            </p>
          </section>

          <section className="mb-f55">
            <h2 className="text-phi-3 font-bold mb-f13">Cookies</h2>
            <p className="text-dark-muted leading-golden mb-f13">
              This website does not use tracking cookies. Standard hosting logs may record your IP address and browser information.
            </p>
          </section>

          <section className="mb-f55">
            <h2 className="text-phi-3 font-bold mb-f13">Changes</h2>
            <p className="text-dark-muted leading-golden mb-f13">
              We may update this page as needed. The date at the top shows when it was last updated.
            </p>
          </section>

          <section className="mb-f55">
            <h2 className="text-phi-3 font-bold mb-f13">Contact</h2>
            <p className="text-dark-muted leading-golden mb-f13">
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
