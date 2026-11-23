import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const PROJECTS = [
  'leadloom', 'memoryspace', 'votervault', 'homeloom', 'nestegg', 'explorer', 'donos', 'fluxread', 'airfoil',
  'sky-lab', 'street-time-machine', 'handfont', 'circuit-lab', 'lantern', 'wellspring', 'granary', 'roofline',
  'patchwork', 'haggle', 'long-weekend', 'raise-check', 'night-sky', 'sternly', 'wind-tunnel', 'satisfy', 'survive', 'pulse-cam', 'invoice-maker',
]

// URLs only. lastmod used to be the build time for every page, which search engines learn to ignore, and they
// mostly ignore changefreq and priority anyway.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thewoob.com'
  const paths = ['', '/services', '/work', '/contact', '/collab', ...PROJECTS.map((slug) => `/work/${slug}`), '/privacy']
  return paths.map((path) => ({ url: `${baseUrl}${path}` }))
}
