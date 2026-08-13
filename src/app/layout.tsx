import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://thewoob.com'),
  title: {
    default: 'thewoob | Software + Automation',
    template: '%s | thewoob'
  },
  description: 'Builder-operator: custom software, automations, and a five-brand data network across OH, FL & NC.',
  keywords: ['web development', 'dashboards', 'automation', 'data analytics', 'data products', 'lead data', 'small business tools', 'thewoob'],
  authors: [{ name: 'Kohn' }],
  creator: 'Kohn',
  publisher: 'thewoob',
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://thewoob.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thewoob.com',
    siteName: 'thewoob',
    title: 'thewoob | Software + Automation',
    description: 'Builder-operator: custom software, automations, and a five-brand data network across OH, FL & NC.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'thewoob | Software + Automation',
    description: 'Builder-operator: custom software, automations, and a five-brand data network across OH, FL & NC.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-dark-text antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
