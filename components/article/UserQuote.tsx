type UserQuoteProps = {
  source?: string
  year?: string
  children: React.ReactNode
}

export default function UserQuote({ source, year, children }: UserQuoteProps) {
  return (
    <div
      style={{
        maxWidth: 'var(--content-width)',
        margin: '2rem 0',
        paddingLeft: '2.5rem',
        position: 'relative',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          top: '-0.25rem',
          fontFamily: 'var(--font-display)',
          fontSize: '3.5rem',
          lineHeight: 1,
          color: 'var(--color-accent)',
          userSelect: 'none',
        }}
      >
        &ldquo;
      </span>

      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.2rem',
          lineHeight: '1.7',
          color: 'var(--color-text)',
        }}
      >
        {children}
      </div>

      {source && (
        <div
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.8rem',
            color: 'var(--color-text-muted)',
            marginTop: '0.625rem',
          }}
        >
          — {source}{year ? `, ${year}` : ''}
        </div>
      )}
    </div>
  )
}
