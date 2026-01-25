import Link from 'next/link'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  external?: boolean
}

export function Button({ href, children, variant = 'primary', external = false }: ButtonProps) {
  const baseClasses = "inline-block px-8 py-4 rounded-lg font-medium transition-all duration-200"
  const variantClasses = variant === 'primary' 
    ? "bg-white text-dark-bg hover:bg-gray-200" 
    : "bg-dark-card text-white border border-dark-border hover:border-white"

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
