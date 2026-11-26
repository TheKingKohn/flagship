import Link from 'next/link'
import { storefrontHref } from '@/lib/storefrontLinks'

const networkLinks = [
  { href: storefrontHref('leadloom', 'footer'), label: 'LeadLoom' },
  { href: storefrontHref('votervault', 'footer'), label: 'VoterVault' },
  { href: storefrontHref('homeloom', 'footer'), label: 'HomeLoom' },
  { href: storefrontHref('nestegg', 'footer'), label: 'NestEgg' },
  { href: storefrontHref('explorer', 'footer'), label: 'TheWoob Explorer' },
]

const siteLinks = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/collab', label: 'Collab' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-border bg-dark-bg">
      <div className="max-w-phi-xl mx-auto px-f21 lg:px-f34 py-f55">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-f55">
          <div>
            <h3 className="text-phi-1 font-bold mb-f13">thewoob</h3>
            <p className="text-dark-muted text-phi-0">
              Software built, shipped, and operated solo from Ohio.
            </p>
          </div>

          <div>
            <h4 className="text-phi-0 font-semibold mb-f13">Site</h4>
            <ul className="space-y-f8">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-dark-muted text-phi-0 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-phi-0 font-semibold mb-f13">The Data Network</h4>
            <ul className="space-y-f8">
              {networkLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-muted text-phi-0 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-f55 pt-f34 border-t border-dark-border text-center">
          <p className="text-dark-muted text-phi-0">&copy; {currentYear} thewoob. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
