export default function CTABlock() {
  return (
    <div
      style={{
        border: '1px solid var(--color-border)',
        borderTop: '3px solid var(--color-accent)',
        borderRadius: '8px',
        padding: '1.5rem',
        maxWidth: 'var(--content-width)',
        marginTop: '3rem',
      }}
    >
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-h3)',
          color: 'var(--color-text)',
          marginTop: 0,
          marginBottom: '0.5rem',
        }}
      >
        Where to buy ISRIB A15
      </h3>

      <p
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '0.875rem',
          color: 'var(--color-text-muted)',
          marginBottom: '0.25rem',
          maxWidth: 'none',
        }}
      >
        In-house synthesized · 98%+ purity · Research compound
      </p>

      <p
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '0.8rem',
          color: 'var(--color-text-muted)',
          marginBottom: '1.25rem',
          maxWidth: 'none',
        }}
      >
        Individual results vary. For research purposes only.
      </p>

      <a
        href="https://isrib.shop"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-link cta-button"
      >
        Buy ISRIB A15 →
      </a>
    </div>
  )
}
