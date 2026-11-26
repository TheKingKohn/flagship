'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 w-full z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border">
      <nav aria-label="Main" className="max-w-phi-xl mx-auto px-f21 lg:px-f34">
        <div className="flex items-center justify-between gap-f13 h-16">
          <Link href="/" className="text-phi-1 font-bold shrink-0 py-f13">
            thewoob
          </Link>

          {/* Each link is padded to a 44px-tall tap target; the row still sits at 64px. */}
          <div className="flex items-center gap-f5 sm:gap-f21">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={`text-phi--1 md:text-phi-0 px-f5 py-f13 transition-colors hover:text-white ${
                  pathname === item.href ? 'text-white' : 'text-dark-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
