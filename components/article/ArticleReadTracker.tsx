'use client'

import { useEffect, useRef } from 'react'

type ArticleReadTrackerProps = {
  slug: string
  cluster: string
  title: string
}

export default function ArticleReadTracker({ slug, cluster, title }: ArticleReadTrackerProps) {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const firedRef = useRef(false)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !firedRef.current) {
          firedRef.current = true
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
            event: 'article_read',
            article_slug: slug,
            article_cluster: cluster,
            article_title: title,
          })
        }
      },
      { threshold: 0 }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [slug, cluster, title])

  return (
    <div
      ref={sentinelRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: '75%',
        left: 0,
        width: '1px',
        height: '1px',
        pointerEvents: 'none',
      }}
    />
  )
}
