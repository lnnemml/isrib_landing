'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
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
  const [menuOpen, setMenuOpen] = useState(false)

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
        backgroundColor: 'var(--color-bg)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0.875rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.125rem',
            color: 'var(--color-text)',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          ISRIB Research
        </Link>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '1.5rem' }}>
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

        {/* Burger button — mobile only */}
        <button
          className="burger-btn"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.25rem',
            color: 'var(--color-text)',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <>
                <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav
          className="mobile-nav"
          style={{
            borderTop: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-bg)',
            padding: '0.75rem 1.25rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.875rem',
          }}
        >
          {navLinks.map(link => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '1rem',
                  color: isActive ? 'var(--color-accent)' : 'var(--color-text)',
                  textDecoration: 'none',
                  padding: '0.25rem 0',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
