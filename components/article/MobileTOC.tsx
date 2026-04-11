'use client'

import { useState } from 'react'
import type { TOCItem } from '@/lib/toc'

type MobileTOCProps = {
  items: TOCItem[]
}

export default function MobileTOC({ items }: MobileTOCProps) {
  const [open, setOpen] = useState(false)

  if (items.length === 0) return null

  const close = () => setOpen(false)

  const handleItemClick = (id: string) => {
    close()
    // Brief timeout lets the drawer close before scroll fires
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          aria-hidden="true"
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.3)',
            zIndex: 997,
            animation: 'none',
            transition: 'opacity 200ms ease',
          }}
        />
      )}

      {/* Drawer */}
      <div
        role="dialog"
        aria-label="Table of contents"
        aria-modal="true"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'var(--color-bg)',
          borderTop: '1px solid var(--color-border)',
          padding: '1.5rem',
          maxHeight: '60vh',
          overflowY: 'auto',
          zIndex: 998,
          transform: open ? 'translateY(0)' : 'translateY(100%)',
        }}
        className="mobile-toc-drawer"
      >
        <div
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.75rem',
            fontVariant: 'small-caps',
            letterSpacing: '0.06em',
            color: 'var(--color-text-muted)',
            marginBottom: '0.75rem',
          }}
        >
          Contents
        </div>

        <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {items.map(item => (
            <li
              key={item.id}
              style={{ paddingLeft: item.level === 3 ? '1rem' : '0' }}
            >
              <button
                onClick={() => handleItemClick(item.id)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.9375rem',
                  lineHeight: '1.8',
                  color: 'var(--color-text)',
                  padding: '0.25rem 0',
                }}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ol>
      </div>

      {/* Floating toggle button */}
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
        aria-controls="mobile-toc-drawer"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 999,
          background: 'var(--color-accent)',
          color: '#ffffff',
          fontFamily: 'var(--font-ui)',
          fontSize: '0.875rem',
          fontWeight: 500,
          padding: '0.625rem 1rem',
          borderRadius: '999px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 2px 12px rgba(13,107,107,0.25)',
        }}
      >
        {open ? 'Close ✕' : 'Contents ↑'}
      </button>
    </>
  )
}
