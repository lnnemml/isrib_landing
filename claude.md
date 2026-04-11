# CLAUDE.md — isrib-research.com

## Project

SEO content hub about ISRIB A15 and the Integrated Stress Response pathway.
Written by a pseudonymous pharmaceutical chemist ("The Synthesis Lab").
Monetized via CTABlock → isrib.shop at the end of every article.

Separate repos/deploys:
- isrib-research.com — this repo (content hub)
- isrib-a15.com — landing page (separate repo)
- isrib.shop — checkout (separate repo, DO NOT touch)

## Stack

- Next.js 14+ App Router, TypeScript
- Tailwind CSS + CSS custom properties
- MDX via next-mdx-remote (content in /content/)
- Fonts via next/font/google (self-hosted, no @import)
- Animations: CSS @keyframes + React hooks only — no framer-motion, no GSAP
- Hosting: Vercel

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

### Fonts (always use CSS variables, never hardcode font names)

```
--font-display:  DM Serif Display  → H1, H2
--font-body:     Source Serif 4    → body text, H3+
--font-ui:       DM Sans           → nav, labels, meta, buttons
--font-mono:     JetBrains Mono    → code, dose protocols
```

## File Structure

```
app/                        Next.js routes
content/[cluster]/          MDX articles
components/layout/          Header, ArticleLayout
components/article/         TOC, CTABlock, AuthorBio, DoseProtocol,
                            ResearchCallout, UserQuote
hooks/                      useReadingProgress, useScrollHeader
lib/mdx.ts                  getArticle, getAllArticles, getAllSlugs
lib/toc.ts                  extractTOC → TOCItem[]
```

## Content Clusters

```
/compare/   Nootropic comparisons (vs modafinil, racetams, noopept)
/guide/     ISRIB A15 protocols and usage guides
/science/   ISR pathway, eIF2B, research literature
/blog/      Symptom-based (brain fog, burnout, cognitive decline)
/tbi/       TBI and recovery research
```

## MDX Frontmatter Schema

```yaml
title: string
description: string
slug: string
cluster: compare | guide | science | blog | tbi
publishedAt: YYYY-MM-DD
updatedAt: YYYY-MM-DD
keywords: string[]
relatedSlugs: string[]
```

Reading time is calculated automatically from content — do not set it manually.

## Component Rules

- Every article page ends with <CTABlock /> then <AuthorBio />
- CTABlock links to https://isrib.shop (external, new tab)
- AuthorBio uses pseudonym "The Synthesis Lab", initials "SR"
- TOC uses IntersectionObserver for active heading detection
- ArticleLayout: CSS grid "240px 1fr", sidebar sticky top 2rem

## Animation Rules

- All animations in `@media (prefers-reduced-motion: no-preference)` wrapper
- Hover effects via CSS only (no JS) → components stay Server Components
- useState/useEffect required → add 'use client' directive
- No animation libraries (framer-motion, GSAP, etc.)
- Timing guidelines:
  - Hover transitions: 150–200ms ease
  - Page load stagger: 80ms delay increments
  - Slide/drawer: 300ms ease
  - Progress bar: real-time (no transition on width)

## Server vs Client Components

Default to Server Components. Add 'use client' only when needed:
- usePathname (Header active links) → 'use client'
- useState / useEffect (hooks) → 'use client'
- IntersectionObserver (TOC) → 'use client'
- CSS hover effects → Server Component (no 'use client' needed)

## Rules

- Never hardcode colors — always use CSS variables
- Never hardcode font-family strings — always use CSS variables
- Never reference the author's real identity in code, comments, or content
- Never modify anything in isrib.shop repo
- CTABlock content is static — do not accept props for it
- New article routes follow the exact pattern of app/compare/[slug]/page.tsx
- Run `npx tsc --noEmit` after every task to catch type errors

## Reference

Full architecture and content plan: PLAN.md