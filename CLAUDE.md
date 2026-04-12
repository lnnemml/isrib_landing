# CLAUDE.md — isrib-research.com

## Project

SEO content hub about ISRIB A15 and the Integrated Stress Response pathway.
Written by a pseudonymous pharmaceutical chemist ("The Synthesis Lab").
Monetized via CTABlock → isrib.shop at the end of every article.

Separate repos/deploys:
- isrib-research.com — this repo (content hub)
- isrib-a15.com — landing page (separate repo)
- isrib.shop — checkout (separate repo, DO NOT touch)

---

## Stack

```
Framework:   Next.js 14 App Router (TypeScript, strict mode)
Content:     MDX via next-mdx-remote/rsc + gray-matter
Styling:     Tailwind CSS + CSS custom properties (no hardcoded colors/fonts)
Fonts:       next/font/google — DM Serif Display, Source Serif 4, DM Sans, JetBrains Mono
Animations:  CSS @keyframes + React hooks only — no framer-motion, no GSAP
Hosting:     Vercel
Analytics:   GTM-W5QH2NR5 / GA4 G-LJEBV5NPCT
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
    ArticleReadTracker.tsx

hooks/
  useReadingProgress.ts
  useScrollHeader.ts

lib/
  mdx.ts       getArticle, getAllArticles, getArticlesByCluster, getAllSlugs
  toc.ts       extractTOC → TOCItem[]
  schema.ts    buildArticleSchema, buildFAQSchema, extractFAQsFromContent

types/
  global.d.ts  window.dataLayer: object[] global declaration

content/
  compare/     *.mdx
  guide/       *.mdx
  science/     *.mdx
  blog/        *.mdx
  tbi/         *.mdx
```

---

## Design System

### Colors (always use CSS variables, never hardcode hex)

```
--color-bg:           #F7F5F0
--color-bg-code:      #F0EDE6
--color-bg-accent:    #E8F4F4
--color-text:         #1A1A18
--color-text-muted:   #6B6B65
--color-accent:       #0D6B6B
--color-accent-dark:  #0A5555
--color-border:       #E0DDD6
```

### Fonts (always use CSS variables, never hardcode font-family strings)

```
--font-display:  DM Serif Display  → H1, H2
--font-body:     Source Serif 4    → body text, H3+
--font-ui:       DM Sans           → nav, labels, meta, buttons
--font-mono:     JetBrains Mono    → code, dose protocols
```

---

## Content Clusters

```
/compare/   Nootropic comparisons (vs modafinil, racetams, noopept)
/guide/     ISRIB A15 protocols and usage guides
/science/   ISR pathway, eIF2B, research literature
/blog/      Symptom-based (brain fog, burnout, cognitive decline)
/tbi/       TBI and recovery research
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

## Component Rules

- Every article page ends with CTABlock → RelatedArticles → AuthorBio (via ArticleLayout relatedArticles slot)
- **CTABlock:** static, no props. Links to https://isrib.shop (external, new tab). Add `variant?: ArticleCluster` later if cluster variation needed.
- **AuthorBio:** pseudonym "The Synthesis Lab", initials "SR"
- **TOC:** uses IntersectionObserver for active heading detection
- **ArticleLayout:** CSS grid "240px 1fr", sidebar sticky top 2rem. Accepts optional `relatedArticles?: React.ReactNode` slot rendered between CTABlock and AuthorBio.
- **RelatedArticles:** accepts `slugs: string[]` and `currentCluster: string`.
  - Lookup: `getAllArticles()` + `.find(a => a.slug === slug)` — handles cross-cluster naturally, no try/catch needed.
  - Returns null when slugs is empty or all lookups fail. Max 3 articles rendered.

---

## Schema Markup

Every `[slug]/page.tsx` injects two `<script type="application/ld+json">` tags before `<ArticleLayout>`:
1. **Article** — always present, built via `buildArticleSchema()`
2. **FAQPage** — present only when `extractFAQsFromContent()` finds H3 headings ending in `?`

`extractFAQsFromContent` operates on raw MDX source.

---

## Analytics

GTM containers (one per site — never mix):
- isrib-research.com → GTM-W5QH2NR5 (components/GoogleTagManager.tsx, 'use client', strategy="afterInteractive")
- isrib-a15.com → GTM-58KVC9F4
- isrib.shop → GTM-M2QCB45Q

GA4: G-LJEBV5NPCT — shared across all three sites.

Custom dataLayer events:
- `article_read` — fires once at 75% scroll of article body
  payload: { event, article_slug, article_cluster, article_title }
  implementation: ArticleReadTracker.tsx (IntersectionObserver + sentinel)
- `cta_click` — fires on CTABlock link click
  payload: { event, cta_location: 'article_bottom' }
  implementation: CTABlock.tsx ('use client')
- `toc_click` — fires on TOC item click
  payload: { event, toc_heading }
  implementation: TOC.tsx (already 'use client')

`window.dataLayer` type declared in `types/global.d.ts` — do not redeclare elsewhere.
No server-side analytics on isrib-research.com — browser GTM only.

---

## Animation Rules

- All animations wrapped in `@media (prefers-reduced-motion: no-preference)`
- Hover effects via CSS only (no JS) → components stay Server Components
- No animation libraries (framer-motion, GSAP, etc.)
- Timing: hover transitions 150–200ms ease, page load stagger 80ms increments, drawer 300ms ease, progress bar real-time (no transition on width)

---

## Server vs Client Components

Default to Server Components. Add `'use client'` only when needed:
- `usePathname` (Header active links)
- `useState` / `useEffect`
- `IntersectionObserver` (TOC, MobileTOC)
- CSS hover effects → Server Component

---

## Key Conventions

- `BASE_URL = 'https://isrib-research.com'` — defined locally in each file that needs it
- Date formatting: `toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })`
- `generateMetadata` in every article page: title, description, keywords, alternates.canonical, openGraph (type: article, publishedTime, modifiedTime, authors), twitter.card: 'summary_large_image'
- Never hardcode colors or font-family strings — always use CSS variables
- Never reference the author's real identity in code, comments, or content
- Run `npx tsc --noEmit` after every task to catch type errors

## Reference

Full architecture and content plan: PLAN.md