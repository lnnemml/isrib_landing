import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticlesByCluster } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'TBI & Neural Recovery Research — ISRIB Research',
  description: 'ISRIB research in traumatic brain injury and neural recovery',
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function TbiPage() {
  const articles = getArticlesByCluster('tbi')

  return (
    <main
      style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '3rem 1.5rem 5rem',
      }}
    >
      {/* Hero */}
      <div
        style={{
          borderBottom: '1px solid var(--color-border)',
          paddingBottom: '1.5rem',
          marginBottom: '2.5rem',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.75rem',
            fontVariant: 'small-caps',
            letterSpacing: '0.08em',
            color: 'var(--color-accent)',
            marginBottom: '0.5rem',
          }}
        >
          TBI & Recovery
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            marginTop: 0,
            marginBottom: '0.625rem',
          }}
        >
          Brain injury research
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '1rem',
            color: 'var(--color-text-muted)',
            margin: 0,
            maxWidth: 'none',
          }}
        >
          ISRIB research in traumatic brain injury and neural recovery
        </p>
      </div>

      {/* Article list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {articles.map(article => (
          <Link
            key={article.slug}
            href={`/tbi/${article.slug}`}
            className="article-card"
            style={{
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              padding: '1.25rem',
              display: 'block',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                lineHeight: 1.3,
                marginTop: 0,
                marginBottom: '0.5rem',
                color: 'var(--color-text)',
              }}
            >
              {article.frontmatter.title}
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                lineHeight: 1.55,
                color: 'var(--color-text-muted)',
                marginBottom: '0.75rem',
                maxWidth: 'none',
              }}
            >
              {article.frontmatter.description}
            </p>
            <div
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.75rem',
                color: 'var(--color-text-muted)',
              }}
            >
              {formatDate(article.frontmatter.publishedAt)} · {article.frontmatter.readingTime} min read
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
