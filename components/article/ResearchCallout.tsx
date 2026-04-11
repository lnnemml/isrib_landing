type ResearchCalloutProps = {
  source: string
  children: React.ReactNode
}

export default function ResearchCallout({ source, children }: ResearchCalloutProps) {
  return (
    <div
      style={{
        background: 'var(--color-bg-accent)',
        borderLeft: '3px solid var(--color-accent)',
        borderRadius: '6px',
        padding: '1.25rem',
        maxWidth: 'var(--content-width)',
        margin: '2rem 0',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '0.75rem',
          fontVariant: 'small-caps',
          letterSpacing: '0.08em',
          color: 'var(--color-accent)',
          marginBottom: '0.625rem',
        }}
      >
        Research Note
      </div>

      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-body)',
          fontStyle: 'italic',
          lineHeight: '1.7',
          color: 'var(--color-text)',
        }}
      >
        {children}
      </div>

      <div
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '0.8rem',
          color: 'var(--color-text-muted)',
          marginTop: '0.625rem',
        }}
      >
        {source}
      </div>
    </div>
  )
}
