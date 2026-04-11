'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScrollHeader } from '@/hooks/useScrollHeader'

const navLinks = [
  { label: 'Compare', href: '/compare' },
  { label: 'Guide',   href: '/guide' },
  { label: 'Science', href: '/science' },
  { label: 'About',   href: '/author' },
]

export default function Header() {
  const pathname = usePathname()
  const scrolled = useScrollHeader()

  return (
    <header
      className={scrolled ? 'header-scrolled' : ''}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
        borderBottom: '1px solid var(--color-border)',
        transition: 'box-shadow 200ms ease, background-color 200ms ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            color: 'var(--color-text)',
            textDecoration: 'none',
          }}
        >
          ISRIB Research
        </Link>

        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          {navLinks.map(link => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.875rem',
                  color: isActive ? 'var(--color-accent)' : 'var(--color-text-muted)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
