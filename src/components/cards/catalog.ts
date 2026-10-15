// The one source for how the cards are organised: which group each project belongs to, in what order, and what its kind is.
// The home page (More Builds) and /work both read this, so they cannot drift.
import { storefrontHref } from '@/lib/storefrontLinks'

export type GroupKey = 'maps' | 'labs' | 'play' | 'apps' | 'network'

export const GROUPS: { key: GroupKey; filter: string; title: string; sub: string; kind: string }[] = [
  { key: 'maps', filter: 'Maps', title: 'Data maps', sub: 'Free maps of six states, from county down to tract.', kind: 'Map' },
  { key: 'labs', filter: 'Labs', title: 'Labs', sub: 'Free tools that install on your phone.', kind: 'Lab' },
  { key: 'play', filter: 'Play', title: 'Play', sub: 'Things to play with everyone.', kind: 'Game' },
  { key: 'apps', filter: 'Apps', title: 'Apps', sub: 'Products you can use today.', kind: 'App' },
  { key: 'network', filter: 'Network', title: 'The Data Network', sub: 'Storefronts for lead and voter data.', kind: 'Storefront' },
]

/** Every card, in display order, with its group. */
export const ORDER: [string, GroupKey][] = [
  ['lantern', 'maps'], ['wellspring', 'maps'], ['granary', 'maps'], ['roofline', 'maps'],
  ['street-time-machine', 'labs'], ['sky-lab', 'labs'], ['circuit-lab', 'labs'], ['airfoil', 'labs'], ['handfont', 'labs'],
  ['patchwork', 'play'], ['haggle', 'play'],
  ['memoryspace', 'apps'], ['fluxread', 'apps'], ['donos', 'apps'],
  ['leadloom', 'network'], ['votervault', 'network'], ['nestegg', 'network'], ['homeloom', 'network'],
]

/** The home page's More Builds, in the owner's order: one array per row (a swipe row on a phone, three across on a desktop). */
export const HOME_ROWS: string[][] = [
  ['memoryspace', 'fluxread', 'street-time-machine'],
  ['airfoil', 'sky-lab', 'roofline'],
  ['patchwork', 'haggle', 'handfont'],
  ['lantern', 'wellspring', 'granary'],
  ['donos'],
]

export const groupOf = (slug: string) => ORDER.find(([s]) => s === slug)?.[1]
export const kindOf = (slug: string) => GROUPS.find((g) => g.key === groupOf(slug))?.kind

/** The items of one group, in the group's order. */
export function groupMembers<T>(items: T[], slugOf: (item: T) => string, key: GroupKey): T[] {
  return ORDER.filter(([, g]) => g === key).flatMap(([slug]) => items.filter((i) => slugOf(i) === slug))
}

/** The Data Network storefronts (home page order). */
export const brands = [
  {
    logo: '/brands/leadloom.png',
    accent: '#6366F1',
    name: 'LeadLoom',
    flagship: true,
    tagline: 'Exclusive turning-65 Medicare lead data. Agents pick a county and a birthday cohort, check out, and their list downloads in seconds.',
    liveUrl: storefrontHref('leadloom', 'home'),
    detailsUrl: '/work/leadloom',
  },
  {
    logo: '/brands/votervault.png',
    accent: '#8FB4FF',
    name: 'VoterVault',
    flagship: false,
    tagline: 'Verified voter data for campaigns. Build a county voter list, see live counts, and download it instantly.',
    liveUrl: storefrontHref('votervault', 'home'),
    detailsUrl: '/work/votervault',
  },
  {
    logo: '/brands/homeloom.png',
    accent: '#14B8A6',
    name: 'HomeLoom',
    flagship: false,
    tagline: 'Likely-homeowner leads for solar, roofing, and HVAC teams that mail, knock, and call.',
    liveUrl: storefrontHref('homeloom', 'home'),
    detailsUrl: '/work/homeloom',
  },
  {
    logo: '/brands/nestegg.png',
    accent: '#C9A227',
    name: 'NestEgg',
    flagship: false,
    tagline: 'Affluent retirement-age leads for annuity, rollover, and advisory marketers.',
    liveUrl: storefrontHref('nestegg', 'home'),
    detailsUrl: '/work/nestegg',
  },
  {
    logo: '/brands/explorer.png',
    accent: '#6366F1',
    name: 'TheWoob Explorer',
    flagship: false,
    tagline: 'A free map of Medicare, senior and household data. Zoom from state to county to neighborhood and see the market before you buy it.',
    liveUrl: storefrontHref('explorer', 'home'),
    detailsUrl: '/work/explorer',
  },
]
