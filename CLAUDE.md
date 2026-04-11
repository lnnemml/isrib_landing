# CLAUDE.md — isrib-research.com

Project-level guidance for Claude Code sessions on this repository.

---

## Stack

```
Framework:   Next.js 14 App Router (TypeScript, strict mode)
Content:     MDX via next-mdx-remote/rsc + gray-matter
Styling:     Tailwind CSS + CSS custom properties (no hardcoded colors/fonts)
Fonts:       next/font/google — DM Serif Display, Source Serif 4, DM Sans, JetBrains Mono
Hosting:     Vercel
Analytics:   GTM-58KVC9F4 / GA4 G-LJEBV5NPCT
```

---

## File Structure

```
app/
  page.tsx                     Homepage
  layout.tsx                   Root layout — fonts, GTM
  globals.css                  Design tokens, animations, utility classes
  sitemap.ts                   Dynamic sitemap from MDX articles
  robots.ts                    robots.txt via MetadataRoute.Robots
  author/page.tsx              E-E-A-T author page
  compare/
    page.tsx                   Cluster index
    [slug]/page.tsx            Article page
  guide/       (same pattern)
  science/     (same pattern)
  blog/        (same pattern)
  tbi/         (same pattern)

components/
  layout/
    Header.tsx
    ArticleLayout.tsx          sidebar+content grid; accepts relatedArticles slot
  article/
    TOC.tsx
    MobileTOC.tsx
    ReadingProgress.tsx
    CTABlock.tsx
    AuthorBio.tsx
    DoseProtocol.tsx
    ResearchCallout.tsx
    UserQuote.tsx
    RelatedArticles.tsx

hooks/
  useReadingProgress.ts
  useScrollHeader.ts

lib/
  mdx.ts       getArticle, getAllArticles, getArticlesByCluster, getAllSlugs
  toc.ts       extractTOC → TOCItem[]
  schema.ts    buildArticleSchema, buildFAQSchema, extractFAQsFromContent

content/
  compare/     *.mdx
  guide/       *.mdx
  science/     *.mdx
  blog/        *.mdx
  tbi/         *.mdx
```

---

## MDX Frontmatter Schema

```yaml
---
title: "..."
description: "..."
slug: "..."
cluster: compare | guide | science | blog | tbi
publishedAt: "YYYY-MM-DD"
updatedAt: "YYYY-MM-DD"
keywords: []
relatedSlugs: []
---
```

`readingTime` — do not set in frontmatter; auto-calculated by lib/mdx.ts via reading-time package.

---

## CSS Variables (never hardcode)

```
Colors:  --color-bg, --color-bg-code, --color-bg-accent
         --color-text, --color-text-muted
         --color-accent (#0D6B6B), --color-accent-dark (#0A5555)
         --color-border

Fonts:   --font-display  → DM Serif Display  (H1, H2)
         --font-body     → Source Serif 4    (body, H3+)
         --font-ui       → DM Sans           (nav, labels, meta)
         --font-mono     → JetBrains Mono    (code, doses)
```

---

## Component Rules

- **Server vs Client:** hover/CSS-only effects → Server Component. `useState`/`useEffect`/`usePathname`/`useRef` → `'use client'`.
- **CTABlock:** static, no props. Add `variant?: ArticleCluster` later if cluster variation needed.
- **ArticleLayout:** accepts optional `relatedArticles?: React.ReactNode` slot, rendered between CTABlock and AuthorBio.
- **RelatedArticles** accepts `slugs: string[]` and `currentCluster: string`.
  - Placed between CTABlock and AuthorBio via the `ArticleLayout` `relatedArticles` slot.
  - Lookup: `getAllArticles()` + `.find(a => a.slug === slug)` — handles cross-cluster naturally, no try/catch needed.
  - Returns null when slugs is empty or all lookups fail. Max 3 articles rendered.

---

## Schema Markup

Every `[slug]/page.tsx` injects two `<script type="application/ld+json">` tags (before `<ArticleLayout>`):
1. **Article** — always present, built via `buildArticleSchema()`
2. **FAQPage** — present only when `extractFAQsFromContent()` finds H3 headings ending in `?`

`extractFAQsFromContent` operates on raw MDX source (the `content` string from `getArticle`).

---

## Key Conventions

- Cluster index pages: `app/[cluster]/page.tsx` (no dynamic segment — static route)
- Article pages: `app/[cluster]/[slug]/page.tsx`
- BASE_URL = `'https://isrib-research.com'` — defined locally in each file that needs it
- Date formatting: `toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })`
- `generateMetadata` in every article page includes: title, description, keywords, alternates.canonical, openGraph (type: article), twitter card
