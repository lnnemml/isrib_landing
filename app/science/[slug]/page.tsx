import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import { getArticle, getAllSlugs } from '@/lib/mdx'
import { extractTOC } from '@/lib/toc'
import ArticleLayout from '@/components/layout/ArticleLayout'
import DoseProtocol from '@/components/article/DoseProtocol'
import ResearchCallout from '@/components/article/ResearchCallout'
import UserQuote from '@/components/article/UserQuote'

const mdxComponents = { DoseProtocol, ResearchCallout, UserQuote }

type PageProps = {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs()
    .filter(s => s.cluster === 'science')
    .map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { frontmatter } = getArticle('science', params.slug)
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  }
}

export default function SciencePage({ params }: PageProps) {
  const { frontmatter, content } = getArticle('science', params.slug)
  const toc = extractTOC(content)

  return (
    <ArticleLayout frontmatter={frontmatter} toc={toc}>
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
  )
}
