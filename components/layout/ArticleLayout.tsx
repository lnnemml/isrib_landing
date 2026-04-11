import type { ArticleFrontmatter } from '@/lib/mdx'
import type { TOCItem } from '@/lib/toc'
import TOC from '@/components/article/TOC'
import CTABlock from '@/components/article/CTABlock'
import AuthorBio from '@/components/article/AuthorBio'

type ArticleLayoutProps = {
  frontmatter: ArticleFrontmatter
  toc: TOCItem[]
  children: React.ReactNode
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function ArticleLayout({ frontmatter, toc, children }: ArticleLayoutProps) {
  const clusterLabel = frontmatter.cluster.charAt(0).toUpperCase() + frontmatter.cluster.slice(1)

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1.5rem 4rem',
      }}
    >
      {/* Desktop grid: sidebar | content */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'var(--sidebar-width) 1fr',
          gap: '4rem',
          alignItems: 'start',
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            position: 'sticky',
            top: '2rem',
          }}
        >
          <TOC items={toc} />
        </aside>

        {/* Content column */}
        <main>
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-muted)',
              marginBottom: '1rem',
            }}
          >
            <span>{clusterLabel}</span>
            <span style={{ margin: '0 0.4rem' }}>›</span>
            <span>{frontmatter.title}</span>
          </nav>

          {/* H1 */}
          <h1 style={{ marginTop: 0, marginBottom: '0.75rem' }}>
            {frontmatter.title}
          </h1>

          {/* Meta row */}
          <div
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-muted)',
              marginBottom: '2.5rem',
            }}
          >
            {frontmatter.readingTime} min read · {formatDate(frontmatter.publishedAt)}
          </div>

          {/* Article body */}
          {children}

          {/* End-of-article blocks */}
          <CTABlock />
          <AuthorBio />
        </main>
      </div>
    </div>
  )
}
