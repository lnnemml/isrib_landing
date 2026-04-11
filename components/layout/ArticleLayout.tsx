import type { ArticleFrontmatter } from '@/lib/mdx'
import type { TOCItem } from '@/lib/toc'
import TOC from '@/components/article/TOC'
import CTABlock from '@/components/article/CTABlock'
import AuthorBio from '@/components/article/AuthorBio'
import ReadingProgress from '@/components/article/ReadingProgress'
import MobileTOC from '@/components/article/MobileTOC'

type ArticleLayoutProps = {
  frontmatter: ArticleFrontmatter
  toc: TOCItem[]
  children: React.ReactNode
  relatedArticles?: React.ReactNode
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function ArticleLayout({ frontmatter, toc, children, relatedArticles }: ArticleLayoutProps) {
  const clusterLabel = frontmatter.cluster.charAt(0).toUpperCase() + frontmatter.cluster.slice(1)

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1.5rem 4rem',
      }}
    >
      <ReadingProgress />

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
            top: '5rem',
          }}
        >
          <TOC items={toc} />
        </aside>

        {/* Content column */}
        <main>
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="animate-fade-in-up animate-delay-1"
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
          <h1
            className="animate-fade-in-up animate-delay-2"
            style={{ marginTop: 0, marginBottom: '0.75rem' }}
          >
            {frontmatter.title}
          </h1>

          {/* Meta row */}
          <div
            className="animate-fade-in-up animate-delay-3"
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
          <div className="animate-fade-in-up animate-delay-4 prose">
            {children}
          </div>

          {/* End-of-article blocks */}
          <CTABlock />
          {relatedArticles}
          <AuthorBio />
        </main>
      </div>

      {/* Mobile TOC — hidden on desktop via CSS */}
      <div className="mobile-toc-container">
        <MobileTOC items={toc} />
      </div>
    </div>
  )
}
