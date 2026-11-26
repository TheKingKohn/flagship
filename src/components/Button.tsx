import Link from 'next/link'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  external?: boolean
  /** 48 px tall and sharing the row equally: the two buttons at the foot of an app card. */
  compact?: boolean
}

export function Button({ href, children, variant = 'primary', external = false, compact = false }: ButtonProps) {
  const baseClasses = compact
    ? "relative z-10 flex-1 text-center px-f13 py-f13 border rounded-f8 font-medium transition-all duration-f233 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
    : "inline-block px-f34 py-f13 rounded-f8 font-medium transition-all duration-f233"
  const variantClasses = variant === 'primary'
    ? "bg-white text-dark-bg border-transparent hover:bg-gray-200 hover:shadow-lg hover:-translate-y-0.5"
    : "bg-dark-card text-white border border-dark-border hover:border-white hover:shadow-lg hover:-translate-y-0.5"

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${variantClasses}`}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  )
}
