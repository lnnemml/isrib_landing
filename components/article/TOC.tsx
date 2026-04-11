'use client'

import { useEffect, useState } from 'react'
import type { TOCItem } from '@/lib/toc'

type TOCProps = {
  items: TOCItem[]
}

export default function TOC({ items }: TOCProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (items.length === 0) return

    const headingIds = items.map(i => i.id)

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            break
          }
        }
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0 }
    )

    for (const id of headingIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [items])

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null
  if (items.length === 0) return null

  return (
    <nav aria-label="Table of contents">
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
            style={{
              paddingLeft: item.level === 3 ? '1rem' : '0',
            }}
          >
            <a
              href={`#${item.id}`}
              className={`toc-item${activeId === item.id ? ' active' : ''}`}
              style={{
                display: 'block',
                fontFamily: 'var(--font-ui)',
                fontSize: '0.875rem',
                lineHeight: '1.6',
                color: activeId === item.id ? 'var(--color-accent)' : 'var(--color-text-muted)',
                textDecoration: 'none',
                padding: '0.15rem 0',
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
