import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ISRIB Research — Independent Resource on ISRIB A15',
  description:
    'Research, comparisons, and synthesis notes on ISRIB A15 and the Integrated Stress Response pathway.',
}

type ClusterCard = {
  label: string
  title: string
  description: string
  href: string
}

const clusters: ClusterCard[] = [
  {
    label: 'Compare',
    title: 'Nootropic comparisons',
    description:
      'ISRIB A15 vs modafinil, racetams, and other cognitive enhancers — mechanism, onset, and honest tradeoffs.',
    href: '/compare',
  },
  {
    label: 'Guide',
    title: 'ISRIB A15 protocols',
    description:
      'Dosing, timing, and usage protocols based on synthesis experience and compiled user reports.',
    href: '/guide',
  },
  {
    label: 'Science',
    title: 'ISR pathway research',
    description:
      'The biology behind ISRIB — eIF2B, protein synthesis, and what the peer-reviewed literature actually shows.',
    href: '/science',
  },
  {
    label: 'Blog',
    title: 'Cognitive health',
    description:
      "Brain fog, burnout, and stress-related cognitive decline — what's happening biologically and what helps.",
    href: '/blog',
  },
  {
    label: 'TBI & Recovery',
    title: 'Brain injury research',
    description:
      "ISRIB's documented effects on traumatic brain injury recovery and post-concussion cognition.",
    href: '/tbi',
  },
]

export default function Home() {
  return (
    <main
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 1.5rem 5rem',
        fontFamily: 'var(--font-body)',
      }}
    >
      {/* Hero */}
      <div
        style={{
          borderBottom: '1px solid var(--color-border)',
          paddingBottom: '2rem',
          marginBottom: '3rem',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3rem',
            lineHeight: 1.15,
            marginTop: 0,
            marginBottom: '0.75rem',
          }}
        >
          ISRIB Research
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
          Independent research on ISRIB A15 and the ISR pathway. Written by a synthetic chemist.
        </p>
      </div>

      {/* Cluster grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {clusters.map(card => (
          <Link
            key={card.href}
            href={card.href}
            className="cluster-card"
            style={{
              border: '1px solid var(--color-border)',
              borderTop: '3px solid var(--color-accent)',
              borderRadius: '8px',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
              color: 'inherit',
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
              {card.label}
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                lineHeight: 1.3,
                marginTop: 0,
                marginBottom: '0.625rem',
                color: 'var(--color-text)',
              }}
            >
              {card.title}
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                color: 'var(--color-text-muted)',
                flex: 1,
                marginBottom: 0,
                maxWidth: 'none',
              }}
            >
              {card.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Disclaimer */}
      <p
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '0.8rem',
          color: 'var(--color-text-muted)',
          marginTop: '4rem',
          marginBottom: 0,
          maxWidth: 'none',
        }}
      >
        Research compound. Not for human consumption. Nothing on this site constitutes medical
        advice.
      </p>
    </main>
  )
}
