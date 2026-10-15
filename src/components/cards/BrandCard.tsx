import { Button } from '@/components/Button'

type Brand = { logo: string; accent: string; name: string; flagship?: boolean; tagline: string; liveUrl: string; detailsUrl?: string }

/** A Data Network storefront card, in the brand-card material (the home page's own cards use the same classes). */
export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div className="card flex flex-col p-5" style={{ '--accent': brand.accent } as React.CSSProperties}>
      <div className="mb-4 flex items-center justify-between">
        <img src={brand.logo} alt={`${brand.name} logo`} width={48} height={48} className="h-12 w-12 rounded-xl" />
        {brand.flagship && (
          <span className="rounded-full border border-indigo-500/40 bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-300">Flagship</span>
        )}
      </div>
      <h3 className="mb-2 text-xl font-bold">{brand.name}</h3>
      <p className="mb-5 flex-grow text-sm text-dark-muted">{brand.tagline}</p>
      <div className="flex gap-3">
        <Button href={brand.liveUrl} external compact>
          Visit
        </Button>
        {brand.detailsUrl && (
          <Button href={brand.detailsUrl} variant="secondary" compact>
            Details
          </Button>
        )}
      </div>
    </div>
  )
}
