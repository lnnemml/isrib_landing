import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About the Author | ISRIB Research',
  description: 'About the author of ISRIB Research — pharmaceutical chemist and independent synthesizer of ISRIB A15.',
}

export default function AuthorPage() {
  return (
    <main
      style={{
        maxWidth: 'var(--content-width)',
        margin: '0 auto',
        padding: '3rem 1.5rem 5rem',
      }}
    >
      {/* Avatar + identity */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          marginBottom: '2rem',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'var(--color-bg-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-ui)',
            fontWeight: 500,
            fontSize: '1.25rem',
            color: 'var(--color-accent)',
          }}
        >
          SR
        </div>

        <div>
          <div
            style={{
              fontFamily: 'var(--font-ui)',
              fontWeight: 500,
              fontSize: '1.125rem',
              color: 'var(--color-text)',
              marginBottom: '0.25rem',
            }}
          >
            The Synthesis Lab
          </div>
          <div
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.875rem',
              color: 'var(--color-text-muted)',
            }}
          >
            Pharmaceutical chemist · Small-molecule synthesis · Independent ISRIB A15 researcher
          </div>
        </div>
      </div>

      <h1 style={{ marginTop: 0, marginBottom: '1.5rem' }}>About the Author</h1>

      <p>
        One of the earliest independent synthesizers of ISRIB A15. This site documents research,
        comparisons, and protocols based on direct synthesis experience — not secondhand summaries.
      </p>

      <p>
        Background in pharmaceutical chemistry and medicinal small-molecule synthesis. ISRIB A15
        purity verified by HPLC prior to any characterization or use.
      </p>

      <p
        style={{
          color: 'var(--color-text-muted)',
          fontSize: '0.9375rem',
        }}
      >
        All content on isrib-research.com reflects the author&apos;s independent analysis. Nothing
        here is medical advice. ISRIB A15 is a research compound.
      </p>
    </main>
  )
}
