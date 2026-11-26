import type { Metadata } from 'next'
import { Button } from '@/components/Button'

// Exported as out/404.html; Cloudflare Pages serves it for any unknown path with a 404 status.
export const metadata: Metadata = {
  title: 'Page not found', // Next adds the noindex itself
}

export default function NotFound() {
  return (
    <div className="pt-f144 pb-f89 px-f21 lg:px-f34">
      <div className="max-w-phi-md mx-auto">
        <p className="text-phi--1 font-semibold uppercase tracking-wider text-dark-muted mb-f13">404</p>
        <h1 className="text-phi-4 md:text-phi-6 font-bold tracking-tight mb-f34">Page not found</h1>
        <p className="text-phi-1 text-dark-muted mb-f55 max-w-phi-sm">
          That page is not here. It may have moved, or the link may be old.
        </p>
        <div className="flex flex-col sm:flex-row gap-f13">
          <Button href="/">Go home</Button>
          <Button href="/work" variant="secondary">
            See the work
          </Button>
        </div>
      </div>
    </div>
  )
}
