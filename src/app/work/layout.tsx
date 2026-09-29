import type { Metadata } from 'next'

// The work index is a client component (filters), so its metadata lives here. Without this it
// inherited the site-wide canonical and told search engines /work was a copy of the home page.
export const metadata: Metadata = {
  title: 'Work',
  description: 'Products I build and run: LeadLoom, VoterVault, HomeLoom, NestEgg, TheWoob Explorer, and more, from live data marketplaces to enrichment engines.',
  openGraph: {
    title: 'Work | thewoob',
    description: 'Products I build and run: LeadLoom, VoterVault, HomeLoom, NestEgg, TheWoob Explorer, and more, from live data marketplaces to enrichment engines.',
    images: ['/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work',
  },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children
}
