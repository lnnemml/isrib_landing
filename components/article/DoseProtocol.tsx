type DoseProtocolProps = {
  starting: string
  standard: string
  frequency: string
  form: string
  notes?: string
}

export default function DoseProtocol({ starting, standard, frequency, form, notes }: DoseProtocolProps) {
  const rows: { label: string; value: string }[] = [
    { label: 'Starting dose', value: starting },
    { label: 'Standard dose', value: standard },
    { label: 'Frequency',     value: frequency },
    { label: 'Form',          value: form },
  ]

  return (
    <div
      style={{
        background: 'var(--color-bg-code)',
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
          marginBottom: '0.875rem',
        }}
      >
        Dosing Protocol
      </div>

      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
          {rows.map(({ label, value }) => (
            <tr key={label}>
              <td
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.875rem',
                  color: 'var(--color-text-muted)',
                  paddingRight: '1.5rem',
                  paddingBottom: '0.4rem',
                  whiteSpace: 'nowrap',
                  verticalAlign: 'top',
                }}
              >
                {label}
              </td>
              <td
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-mono)',
                  color: 'var(--color-text)',
                  paddingBottom: '0.4rem',
                }}
              >
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {notes && (
        <p
          style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.8rem',
            color: 'var(--color-text-muted)',
            marginTop: '0.75rem',
            marginBottom: 0,
            maxWidth: 'none',
          }}
        >
          {notes}
        </p>
      )}
    </div>
  )
}
