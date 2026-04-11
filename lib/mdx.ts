import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export type ArticleCluster = 'compare' | 'guide' | 'science' | 'blog' | 'tbi'

export type ArticleFrontmatter = {
  title: string
  description: string
  slug: string
  cluster: ArticleCluster
  publishedAt: string
  updatedAt: string
  readingTime: number
  keywords: string[]
  relatedSlugs: string[]
}

export type ArticleData = {
  frontmatter: ArticleFrontmatter
  content: string
  slug: string
  cluster: ArticleCluster
}

const CONTENT_DIR = path.join(process.cwd(), 'content')

export function getArticle(cluster: ArticleCluster, slug: string): ArticleData {
  const filePath = path.join(CONTENT_DIR, cluster, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const { minutes } = readingTime(content)

  return {
    frontmatter: {
      ...data,
      readingTime: Math.ceil(minutes),
    } as ArticleFrontmatter,
    content,
    slug,
    cluster,
  }
}

export function getAllArticles(): ArticleData[] {
  const clusters: ArticleCluster[] = ['compare', 'guide', 'science', 'blog', 'tbi']
  const articles: ArticleData[] = []

  for (const cluster of clusters) {
    const clusterDir = path.join(CONTENT_DIR, cluster)
    if (!fs.existsSync(clusterDir)) continue

    const files = fs.readdirSync(clusterDir).filter(f => f.endsWith('.mdx'))
    for (const file of files) {
      const slug = file.replace('.mdx', '')
      articles.push(getArticle(cluster, slug))
    }
  }

  return articles.sort(
    (a, b) =>
      new Date(b.frontmatter.publishedAt).getTime() -
      new Date(a.frontmatter.publishedAt).getTime()
  )
}

export function getArticlesByCluster(cluster: ArticleCluster): ArticleData[] {
  return getAllArticles().filter(a => a.cluster === cluster)
}

export function getAllSlugs(): { cluster: ArticleCluster; slug: string }[] {
  return getAllArticles().map(a => ({ cluster: a.cluster, slug: a.slug }))
}
