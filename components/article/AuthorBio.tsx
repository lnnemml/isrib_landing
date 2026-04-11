import Link from 'next/link'

export default function AuthorBio() {
  return (
    <div
      style={{
        borderTop: '1px solid var(--color-border)',
        paddingTop: '1.5rem',
        maxWidth: 'var(--content-width)',
        marginTop: '2rem',
        display: 'flex',
        gap: '1rem',
        alignItems: 'flex-start',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          flexShrink: 0,
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: 'var(--color-bg-accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-ui)',
          fontWeight: 500,
          fontSize: '0.875rem',
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
            fontSize: '0.9375rem',
            color: 'var(--color-text)',
            marginBottom: '0.2rem',
          }}
        >
          The Synthesis Lab
        </div>

        <div
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.8rem',
            color: 'var(--color-text-muted)',
            marginBottom: '0.625rem',
          }}
        >
          Pharmaceutical chemist · Small-molecule synthesis · Independent ISRIB A15 researcher
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            color: 'var(--color-text)',
            lineHeight: '1.6',
            marginBottom: '0.5rem',
            maxWidth: 'none',
          }}
        >
          One of the earliest independent synthesizers of ISRIB A15. Background in medicinal
          chemistry and small-molecule synthesis. Writing about compounds I&apos;ve actually made.
        </p>

        <Link
          href="/author/"
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.875rem',
            color: 'var(--color-accent)',
          }}
        >
          Full profile →
        </Link>
      </div>
    </div>
  )
}
