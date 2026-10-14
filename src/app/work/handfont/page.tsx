import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

const LIVE = 'https://handfont.thewoob.com'

export const metadata: Metadata = {
  title: 'HandFont | Work',
  description: 'HandFont: turn your handwriting into a real font. Draw each letter on your phone or photograph a filled-in template, and download a .ttf you can install anywhere. Free, and nothing leaves your device.',
  openGraph: {
    title: 'HandFont | Work',
    description: 'Your handwriting, as a real font. Draw it or photograph it, download a .ttf. Free, private, nothing is uploaded.',
    images: ['/projects/handfont/og.jpg'],
  },
  alternates: {
    canonical: 'https://thewoob.com/work/handfont',
  },
}

const screenshots = [
  { src: '/projects/handfont/draw', alt: 'A paper practice sheet with ruled guides for ascender, capitals, x-height, baseline and descender, and a hand-drawn lowercase a in blue-black ink', caption: 'The practice sheet' },
  { src: '/projects/handfont/letter', alt: 'A letter on paper typed in the finished handwriting font, with the font name as a letterhead and a download button', caption: 'Your font, as a letter' },
  { src: '/projects/handfont/home', alt: 'The HandFont home screen with its headline typed in a font the app made of itself, and Draw it and Photograph it as two choices', caption: 'Draw it or photograph it' },
]

const doesItems = [
  'Draw mode: a practice sheet with ruled guides walks you through 81 characters, letters, figures and everyday punctuation, with a finger, a stylus or a mouse; ink width follows pressure or speed',
  'Photo mode: print a two-page template, write on it, photograph it; the app finds the page corners, straightens the photo, and cuts every letter out, with a loupe to fix any corner by hand',
  'A live proof line shows your font as you draw it; an overview grid shows every finished letter in miniature and lets you jump to any of them',
  'The Font tab sets your font in a letter on paper, with your name as the letterhead, and tunes spacing, weight and the width of a space while you watch',
  'Download a real .ttf, with install tips for Windows, Mac and iPhone, or a zip of every glyph as SVG if you want to tweak them in a font editor',
  'Projects save themselves in your browser, so a half-finished alphabet survives a reload; nothing is ever uploaded',
]

const builtItems = [
  'A bitmap-to-outline tracer written from scratch: contour following with holes, Douglas–Peucker simplification, Schneider curve fitting with corner detection, and TrueType winding, tested on synthetic shapes',
  'A perspective solve for photo mode (a small linear system for the homography), fiducial detection in the template corners, and adaptive thresholding that copes with shadows and faint pens',
  'My own TrueType glyf writer, because the usual library could only write CFF outlines; the result parses and renders in Chrome, Windows and macOS',
  'Metrics derived from the guides, so letters line up on one baseline when typed, and advance widths from the ink plus a spacing you set',
  'Paper, ink and a nib: a design built around a practice sheet, with self-hosted type and a drawn nib mark',
  'A static, installable web app (React, TypeScript, Vite) with a service worker, fully offline; no GPL tracing code, no accounts, no analytics',
]

const Arrow = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start">
    <span className="text-white mr-3">→</span>
    <span className="text-dark-muted">{children}</span>
  </li>
)

export default function HandFontPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'HandFont',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Web',
    description: 'A free web app that turns your handwriting into a real .ttf font, by drawing on a guided sheet or photographing a printed template, entirely in the browser.',
    url: LIVE,
    image: 'https://thewoob.com/projects/handfont/og.jpg',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Person', name: 'Gavin Kohn', url: 'https://thewoob.com' },
  }

  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <img src="/brands/handfont.png" alt="HandFont logo" width={56} height={56} className="w-14 h-14 rounded-xl" />
          <h1 className="text-5xl md:text-6xl font-bold">HandFont</h1>
          <span className="px-3 py-1 text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20 rounded">
            Live
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Your handwriting, as a real font. Draw each letter on a guided sheet or photograph a filled-in
          template, and HandFont traces it into clean outlines and builds a .ttf you can install on your
          computer or phone. It all happens in your browser; your handwriting never leaves your device.
        </p>

        {/* Project Gallery */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {screenshots.map((shot) => (
              <a key={shot.src} href={`${shot.src}.webp`} target="_blank" className="block hover:opacity-80 transition-opacity">
                <img
                  src={`${shot.src}-card.webp`}
                  alt={shot.alt}
                  loading="lazy"
                  className="w-full h-48 object-cover object-top rounded border border-dark-border"
                />
                <p className="text-xs text-dark-muted mt-2 text-center">{shot.caption}</p>
              </a>
            ))}
          </div>
        </section>

        {/* What It Does */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What It Does</h2>
          <ul className="space-y-3">
            {doesItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            {builtItems.map((t) => <Arrow key={t}>{t}</Arrow>)}
          </ul>
        </section>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-dark-border">
          <Button href={LIVE} external>
            Open HandFont
          </Button>
          <Button href="/contact" variant="secondary">
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
