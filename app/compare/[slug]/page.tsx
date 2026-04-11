import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import { getArticle, getAllSlugs } from '@/lib/mdx'
import { extractTOC } from '@/lib/toc'
import { buildArticleSchema, buildFAQSchema, extractFAQsFromContent } from '@/lib/schema'
import ArticleLayout from '@/components/layout/ArticleLayout'
import RelatedArticles from '@/components/article/RelatedArticles'
import DoseProtocol from '@/components/article/DoseProtocol'
import ResearchCallout from '@/components/article/ResearchCallout'
import UserQuote from '@/components/article/UserQuote'

const BASE_URL = 'https://isrib-research.com'

const mdxComponents = { DoseProtocol, ResearchCallout, UserQuote }

type PageProps = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs()
    .filter(s => s.cluster === 'compare')
    .map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { frontmatter } = getArticle('compare', params.slug)
  const canonical = `${BASE_URL}/compare/${params.slug}`
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: frontmatter.keywords,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      url: canonical,
      title: frontmatter.title,
      description: frontmatter.description,
      publishedTime: frontmatter.publishedAt,
      modifiedTime: frontmatter.updatedAt ?? frontmatter.publishedAt,
      authors: [`${BASE_URL}/author/`],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
    },
  }
}

export default function ComparePage({ params }: PageProps) {
  const { frontmatter, content } = getArticle('compare', params.slug)
  const toc = extractTOC(content)

  const articleSchema = buildArticleSchema({
    title: frontmatter.title,
    description: frontmatter.description,
    slug: frontmatter.slug,
    cluster: frontmatter.cluster,
    publishedAt: frontmatter.publishedAt,
    updatedAt: frontmatter.updatedAt,
    keywords: frontmatter.keywords,
  })

  const faqs = extractFAQsFromContent(content)
  const faqSchema = buildFAQSchema(faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <ArticleLayout
        frontmatter={frontmatter}
        toc={toc}
        relatedArticles={
          <RelatedArticles slugs={frontmatter.relatedSlugs} currentCluster="compare" />
        }
      >
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [rehypeSlug],
            },
          }}
        />
      </ArticleLayout>
    </>
  )
}
