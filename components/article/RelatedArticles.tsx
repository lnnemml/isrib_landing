import Link from 'next/link'
import { getAllArticles } from '@/lib/mdx'
import type { ArticleData } from '@/lib/mdx'

type Props = {
  slugs: string[]
  currentCluster: string
}

export default function RelatedArticles({ slugs, currentCluster: _ }: Props) {
  if (slugs.length === 0) return null

  const allArticles = getAllArticles()

  const related: ArticleData[] = slugs
    .map(slug => allArticles.find(a => a.slug === slug))
    .filter((a): a is ArticleData => a !== undefined)
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <div
      style={{
        borderTop: '1px solid var(--color-border)',
        paddingTop: '1.5rem',
        maxWidth: 'var(--content-width)',
        marginTop: '2rem',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: 'var(--text-sm)',
          fontVariant: 'small-caps',
          letterSpacing: '0.08em',
          color: 'var(--color-text-muted)',
          marginBottom: '1rem',
        }}
      >
        Related articles
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {related.map(article => (
          <Link
            key={article.slug}
            href={`/${article.cluster}/${article.slug}`}
            className="article-card"
            style={{
              border: '1px solid var(--color-border)',
              borderRadius: '6px',
              padding: '0.875rem 1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.7rem',
                  fontVariant: 'small-caps',
                  letterSpacing: '0.08em',
                  color: 'var(--color-accent)',
                  marginBottom: '0.25rem',
                }}
              >
                {article.cluster.charAt(0).toUpperCase() + article.cluster.slice(1)}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.35,
                  color: 'var(--color-text)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {article.frontmatter.title}
              </div>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.75rem',
                color: 'var(--color-text-muted)',
                flexShrink: 0,
              }}
            >
              {article.frontmatter.readingTime} min
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
