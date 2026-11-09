import type { Metadata } from 'next'
import { Button } from '@/components/Button'

// Exported as out/404.html; Cloudflare Pages serves it for any unknown path with a 404 status.
export const metadata: Metadata = {
  title: 'Page not found', // Next adds the noindex itself
}

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-wider text-dark-muted mb-4">404</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Page not found</h1>
        <p className="text-xl text-dark-muted mb-12 max-w-2xl">
          That page is not here. It may have moved, or the link may be old.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/">Go home</Button>
          <Button href="/work" variant="secondary">
            See the work
          </Button>
        </div>
      </div>
    </div>
  )
}
