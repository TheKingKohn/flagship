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
  description: 'Custom software, dashboards and automation for small businesses, built and run solo from Ohio. Plus free data maps, phone-first Labs, and a five-brand lead-data network.',
  authors: [{ name: 'Kohn' }],
  creator: 'Kohn',
  publisher: 'thewoob',
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thewoob.com',
    siteName: 'thewoob',
    title: 'thewoob | Software + Automation',
    description: 'Custom software, dashboards and automation for small businesses, built and run solo from Ohio. Plus free data maps, phone-first Labs, and a five-brand lead-data network.',
    images: ['/og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'thewoob | Software + Automation',
    description: 'Custom software, dashboards and automation for small businesses, built and run solo from Ohio. Plus free data maps, phone-first Labs, and a five-brand lead-data network.',
    images: ['/og.jpg'],
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
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-dark-bg"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
