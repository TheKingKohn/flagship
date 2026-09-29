export type Storefront = 'leadloom' | 'votervault' | 'homeloom' | 'nestegg' | 'explorer'
export type TheWoobSurface = 'home' | 'work' | 'project' | 'footer'

const destinations: Record<Storefront, { host: string; entry: string }> = {
  leadloom: { host: 'leadloom.thewoob.com', entry: '/' },
  votervault: { host: 'votervault.thewoob.com', entry: '/' },
  homeloom: { host: 'homeloom.thewoob.com', entry: '/' },
  nestegg: { host: 'nestegg.thewoob.com', entry: '/' },
  explorer: { host: 'explorer.thewoob.com', entry: '/explorer' },
}

/**
 * Send every flagship-to-storefront click through the storefront's own referral endpoint.
 * The endpoint records the source, sets durable attribution, emits the human-only Discord ping,
 * then returns the visitor to the requested ordinary page.
 */
export function storefrontHref(
  storefront: Storefront,
  surface: TheWoobSurface,
  path?: string,
): string {
  const destination = destinations[storefront]
  const target = path ?? destination.entry
  const referral = `https://${destination.host}/from/thewoob/${surface}`
  return target === '/' ? referral : `${referral}?to=${encodeURIComponent(target)}`
}
