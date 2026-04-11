## Project
isrib-research.com — SEO content hub about ISRIB A15.
Next.js 14 App Router, TypeScript, Tailwind, MDX for content.
Separate from isrib.shop (checkout) and isrib-a15.com (landing).

## Key conventions
- Content lives in /content/[cluster]/[slug].mdx
- All article pages use ArticleLayout component with sticky TOC
- Every article ends with CTABlock linking to isrib.shop
- Author is pseudonymous — never reference real identity in code or comments
- Color palette and fonts defined in globals.css CSS variables (see Design System section)

## Design System
Accent: #0D6B6B (deep teal)
Background: #F7F5F0
Text: #1A1A18
Fonts: DM Serif Display (headings), Source Serif 4 (body), DM Sans (UI), JetBrains Mono (code)

## Rules
- Never use Tailwind's default font stack — always use CSS variables
- Never hardcode colors — always use CSS variables
- Do not modify /api/checkout.js on isrib.shop (separate repo)
- MDX files use frontmatter schema defined in /lib/mdx.ts

## Reference
Full architecture plan: /PLAN.md — read this before starting new features.