import type { Metadata } from 'next'
import { HomeClient } from './HomeClient'

// The home page's own metadata. The canonical lives here, not in the root layout, so the 404 page and any
// page without its own canonical no longer claim to be a copy of the home page.
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://thewoob.com',
  },
}

const SAME_AS = ['https://github.com/TheKingKohn', 'https://discord.com/users/thekingkohn']

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://thewoob.com/#org',
      name: 'thewoob',
      url: 'https://thewoob.com',
      logo: 'https://thewoob.com/icon.png',
      description: 'Custom software, dashboards and automation, built and run solo from Ohio, plus a five-brand data network across six states.',
      sameAs: SAME_AS,
      founder: { '@id': 'https://thewoob.com/#kohn' },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'gavin@thewoob.com',
        contactType: 'Customer Service',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://thewoob.com/#kohn',
      name: 'Gavin Kohn',
      url: 'https://thewoob.com',
      jobTitle: 'Software builder and operator',
      worksFor: { '@id': 'https://thewoob.com/#org' },
      sameAs: SAME_AS,
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomeClient />
    </>
  )
}
