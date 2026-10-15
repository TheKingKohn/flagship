import type { Metadata } from 'next'

// The work index is a client component (filters), so its metadata lives here. Without this it
// inherited the site-wide canonical and told search engines /work was a copy of the home page.
export const metadata: Metadata = {
  title: 'Work',
  description: 'Everything I have built: free data maps, Labs that install on your phone, games, apps, and the LeadLoom, VoterVault, NestEgg and HomeLoom data storefronts.',
  openGraph: {
    title: 'Work | thewoob',
    description: 'Everything I have built: free data maps, Labs that install on your phone, games, apps, and the LeadLoom, VoterVault, NestEgg and HomeLoom data storefronts.',
    images: ['/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work',
  },
}

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children
}
