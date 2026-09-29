import type { Metadata } from 'next'

// The contact page is a client component (its form), so its metadata lives here. Without this
// it inherited the site-wide canonical and told search engines /contact was the home page.
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch about a build, a data product, or an automation.',
  openGraph: {
    title: 'Contact | thewoob',
    description: 'Get in touch about a build, a data product, or an automation.',
    images: ['/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
