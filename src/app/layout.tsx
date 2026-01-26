import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://thewoob.com'),
  title: {
    default: 'thewoob — Web + Tools Studio',
    template: '%s | thewoob'
  },
  description: 'Websites and lightweight tools for small businesses. I build functional sites and simple internal tools.',
  keywords: ['web development', 'dashboards', 'automation', 'data analytics', 'small business tools', 'thewoob'],
  authors: [{ name: 'thewoob' }],
  creator: 'thewoob',
  publisher: 'thewoob',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thewoob.com',
    siteName: 'thewoob',
    title: 'thewoob — Web + Tools Studio',
    description: 'Websites and lightweight tools for small businesses. I build functional sites and simple internal tools.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'thewoob — Web + Tools Studio',
    description: 'Websites and lightweight tools for small businesses.',
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
