'use client'
import { useReadingProgress } from '@/hooks/useReadingProgress'

export default function ReadingProgress() {
  const progress = useReadingProgress()
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2px',
        width: `${progress}%`,
        backgroundColor: 'var(--color-accent)',
        zIndex: 9999,
        transition: 'none',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  )
}
