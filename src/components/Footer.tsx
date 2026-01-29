import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-border bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-4">thewoob</h3>
            <p className="text-dark-muted text-sm">
              Modern web development and digital solutions.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/work" className="text-dark-muted text-sm hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-dark-muted text-sm hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/labs" className="text-dark-muted text-sm hover:text-white transition-colors">
                  Labs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dark-muted text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-dark-muted text-sm hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-dark-muted text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/collab" className="text-dark-muted text-sm hover:text-white transition-colors">
                  Collab
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-border text-center">
          <div className="mb-3">
            <button className="text-dark-muted/60 text-xs hover:text-white transition-colors cursor-pointer">
              •
            </button>
          </div>
          <p className="text-dark-muted text-sm">&copy; {currentYear} thewoob. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
