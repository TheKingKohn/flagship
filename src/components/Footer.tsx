import Link from 'next/link'

const networkLinks = [
  { href: 'https://leadloom.thewoob.com', label: 'LeadLoom' },
  { href: 'https://votervault.thewoob.com', label: 'VoterVault' },
  { href: 'https://homeloom.thewoob.com', label: 'HomeLoom' },
  { href: 'https://nestegg.thewoob.com', label: 'NestEgg' },
  { href: 'https://explorer.thewoob.com', label: 'Explorer' },
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-4">thewoob</h3>
            <p className="text-dark-muted text-sm">
              Software built, shipped, and operated solo from Ohio.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Site</h4>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-dark-muted text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">The Data Network</h4>
            <ul className="space-y-2">
              {networkLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-muted text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-border text-center">
          <p className="text-dark-muted text-sm">&copy; {currentYear} thewoob. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
