# CLAUDE.md — isrib-research.com

## Project

SEO content hub about ISRIB A15 and the Integrated Stress Response pathway.
Written by a pseudonymous pharmaceutical chemist ("The Synthesis Lab").
Monetized via CTABlock → isrib.shop/product_isrib_A15.html at the end of every article.

Separate repos/deploys:
- isrib-research.com — this repo (content hub)
- isrib-a15.com — landing page (separate repo)
- isrib.shop — checkout (separate repo, DO NOT touch)

---

## Stack
Framework:   Next.js 14 App Router (TypeScript, strict mode)
Content:     MDX via next-mdx-remote/rsc + gray-matter
Styling:     Tailwind CSS + CSS custom properties (no hardcoded colors/fonts)
Fonts:       next/font/google — DM Serif Display, Source Serif 4, DM Sans, JetBrains Mono
Animations:  CSS @keyframes + React hooks only — no framer-motion, no GSAP
Hosting:     Vercel
Analytics:   GTM-W5QH2NR5 / GA4 G-LJEBV5NPCT

---

## File Structure
app/
page.tsx                     Homepage
layout.tsx                   Root layout — fonts, GTM, viewport
globals.css                  Design tokens, animations, utility classes
sitemap.ts                   Dynamic sitemap from MDX articles
robots.ts                    robots.txt
author/page.tsx              E-E-A-T author page
compare/[slug]/page.tsx      Article page
guide/[slug]/page.tsx
science/[slug]/page.tsx
blog/[slug]/page.tsx
tbi/[slug]/page.tsx
components/
layout/
Header.tsx                 Mobile-responsive with burger menu
ArticleLayout.tsx          sidebar+content grid; collapses on mobile
article/
TOC.tsx
MobileTOC.tsx
ReadingProgress.tsx
CTABlock.tsx               Links to isrib.shop/product_isrib_A15.html
AuthorBio.tsx
DoseProtocol.tsx           Props: starting, standard, frequency, form, notes?
ResearchCallout.tsx        Props: title, source, children
UserQuote.tsx              Props: children (source? and year? are optional)
RelatedArticles.tsx
ArticleReadTracker.tsx
content/
compare/
isrib-vs-modafinil.mdx           ✅ Live
guide/
isrib-a15-complete-guide.mdx     ✅ Live
science/
what-is-integrated-stress-response.mdx ✅ Live
blog/
how-to-fix-brain-fog.mdx         ⏳ Placeholder
tbi/
isrib-traumatic-brain-injury-research.mdx ⏳ Placeholder

---

## Design System

### Colors (always use CSS variables, never hardcode hex)
--color-bg:           #F7F5F0
--color-bg-code:      #F0EDE6
--color-bg-accent:    #E8F4F4
--color-text:         #1A1A18
--color-text-muted:   #6B6B65
--color-accent:       #0D6B6B
--color-accent-dark:  #0A5555
--color-border:       #E0DDD6

### Fonts (always use CSS variables, never hardcode font-family strings)
--font-display:  DM Serif Display  → H1, H2
--font-body:     Source Serif 4    → body text, H3+
--font-ui:       DM Sans           → nav, labels, meta, buttons
--font-mono:     JetBrains Mono    → code, dose protocols

---

## Component Rules

- Every article ends with CTABlock → RelatedArticles → AuthorBio
- **CTABlock:** links to `https://isrib.shop/product_isrib_A15.html`
- **UserQuote:** source and year are optional props — do not pass them in MDX unless needed
- **DoseProtocol:** always use props (starting, standard, frequency, form, notes), never children
- **Tables in MDX:** use native HTML `<table>` tags — markdown table syntax does NOT render
- **ArticleLayout:** collapses to single column on mobile (max-width: 1023px), sidebar hidden
- **Header:** burger menu on mobile (max-width: 768px)

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

`readingTime` — do not set; auto-calculated.

---

## Analytics

GTM: GTM-W5QH2NR5
GA4: G-LJEBV5NPCT

---

## Key Conventions

- `BASE_URL = 'https://isrib-research.com'`
- Never hardcode colors or font-family strings
- Never reference the author's real identity
- Run `npx tsc --noEmit` after every task

Do not modify any other files.
