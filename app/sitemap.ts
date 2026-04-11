import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/mdx'

const BASE_URL = 'https://isrib-research.com'

const CLUSTER_PRIORITY: Record<string, number> = {
  compare: 0.9,
  guide: 0.9,
  science: 0.8,
  blog: 0.7,
  tbi: 0.7,
}

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/compare`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/guide`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/science`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/tbi`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/author`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
  ]

  const dynamicRoutes: MetadataRoute.Sitemap = articles.map(article => ({
    url: `${BASE_URL}/${article.cluster}/${article.slug}`,
    lastModified: new Date(article.frontmatter.updatedAt ?? article.frontmatter.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: CLUSTER_PRIORITY[article.cluster] ?? 0.7,
  }))

  return [...staticRoutes, ...dynamicRoutes]
}
