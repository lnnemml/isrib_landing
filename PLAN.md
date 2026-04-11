# isrib-research.com — Master Plan

> Версія 3.0 | Статус: Infrastructure Complete → Content Phase

---

## Статус реалізації

| Шар | Статус |
|---|---|
| Repo cleanup (лендинг видалено) | ✅ Done |
| Design system (globals.css, CSS variables) | ✅ Done |
| Fonts (next/font/google, 4 families, self-hosted) | ✅ Done |
| Tailwind config з CSS variable tokens | ✅ Done |
| MDX pipeline (next-mdx-remote, gray-matter, reading-time) | ✅ Done |
| lib/mdx.ts + lib/toc.ts | ✅ Done |
| Custom MDX components (DoseProtocol, ResearchCallout, UserQuote) | ✅ Done |
| CTABlock, AuthorBio | ✅ Done |
| TOC component (IntersectionObserver, active state + transition) | ✅ Done |
| ArticleLayout (sidebar + content grid) | ✅ Done |
| All cluster routes (compare, guide, science, blog, tbi) | ✅ Done |
| /author/ page | ✅ Done |
| Homepage (cluster grid, hero, fully clickable cards) | ✅ Done |
| Header (active link, sticky, scroll shadow) | ✅ Done |
| Reading progress bar (useReadingProgress hook) | ✅ Done |
| Page load stagger fade-in | ✅ Done |
| Header scroll shadow + backdrop blur | ✅ Done |
| Cluster cards hover lift + fully clickable | ✅ Done |
| CTA button shimmer + lift | ✅ Done |
| Inline link animated underline | ✅ Done |
| Mobile TOC drawer (slide-up) | ✅ Done |
| TOC active item smooth transition | ✅ Done |
| Sitemap (app/sitemap.ts) | ⏳ Next |
| robots.txt | ⏳ Next |
| Schema markup (Article + FAQPage JSON-LD) | ⏳ Next |
| GA4 custom events (article_read, cta_click, toc_click) | ⏳ Next |
| Cluster index pages (/compare, /guide, etc.) | ⏳ Next |
| RelatedArticles component | ⏳ Next |
| Real article content — Фаза 1 (3 статті) | ⏳ Next |

---

## 1. Концепція і позиціонування

`isrib-research.com` — незалежний науковий ресурс про ISRIB, ISR pathway та когнітивне вдосконалення. Авторитетний інформаційний хаб, монетизований через CTA в кінці кожної статті → `isrib.shop`.

> *"The most technically rigorous independent resource on ISRIB A15 — written by a synthetic chemist with first-hand experience, not a marketer translating PubMed abstracts."*

### Автор — "The Synthesis Lab"

Псевдонім без розкриття особистості. Avatar: ініціали "SR" у teal колі.
Credentials: *"Pharmaceutical chemist · Small-molecule synthesis · Independent ISRIB A15 researcher"*
Сторінка: `/author/` ✅

---

## 2. Tone of Voice

Peer-to-peer між двома технічно грамотними людьми.

| Параметр | Як |
|---|---|
| Регістр | Технічно точний, але доступний |
| Особа | Перша там де є особистий досвід синтезу |
| Скептицизм | Завжди: "Research is promising, human data is limited." |
| Заборони | "revolutionary", "breakthrough", "game-changer" |
| Натомість | "notable", "significant", "worth examining" |

---

## 3. UI/UX

### Кольори (CSS variables, не hardcode)

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

### Шрифти (CSS variables, не hardcode)

```
--font-display:  DM Serif Display   → H1, H2
--font-body:     Source Serif 4     → body, H3+
--font-ui:       DM Sans            → nav, labels, meta
--font-mono:     JetBrains Mono     → code, doses
```

### Animation Layer (реалізовано повністю)

CSS @keyframes + React hooks. Без бібліотек. `prefers-reduced-motion` compliant.

| Ефект | Клас / Хук |
|---|---|
| Page load stagger | `.animate-fade-in-up` + `.animate-delay-1/2/3/4` |
| Reading progress bar | `useReadingProgress` → `ReadingProgress` component |
| Header scroll shadow | `useScrollHeader` → `.header-scrolled` class |
| Cluster cards hover | `.cluster-card` CSS |
| CTA button shimmer | `.cta-button::after` CSS |
| Inline link underline | `.prose a` background-size CSS |
| Mobile TOC drawer | `MobileTOC` component |
| TOC active transition | `.toc-item.active` CSS |

---

## 4. Контентна архітектура

### Sitemap (поточний)

```
isrib-research.com/
├── /                        ✅ Homepage
├── /author/                 ✅ E-E-A-T
├── /compare/[slug]/         ✅ + placeholder MDX
├── /guide/[slug]/           ✅ + placeholder MDX
├── /science/[slug]/         ✅ + placeholder MDX
├── /blog/[slug]/            ✅ + placeholder MDX
└── /tbi/[slug]/             ✅ + placeholder MDX
```

Потрібно додати cluster index pages:
```
├── /compare/                ⏳ список статей кластера
├── /guide/                  ⏳
├── /science/                ⏳
├── /blog/                   ⏳
└── /tbi/                    ⏳
```

### Пріоритет контенту

| Фаза | Стаття | Кластер |
|---|---|---|
| **1** | ISRIB A15 vs Modafinil | /compare/ |
| **1** | ISRIB A15 Complete Guide | /guide/ |
| **1** | What is the ISR? | /science/ |
| **2** | ISRIB A15 vs Noopept | /compare/ |
| **2** | ISRIB A15 vs Racetams | /compare/ |
| **2** | How to fix brain fog | /blog/ |
| **3** | eIF2B and memory formation | /science/ |
| **3** | Best nootropic for burnout | /blog/ |
| **4** | ISRIB for TBI research | /tbi/ |

### Формула статті

```
1. Hook           — дзеркало болю читача
2. Reframe        — ISR як біологічний блок, не поведінкова проблема
3. Mechanism      — eIF2B, Peter Walter, як A15 це вирішує
4. Evidence       — ключові дослідження (ResearchCallout)
5. Comparison     — чому A15 відрізняється від альтернатив
6. User reports   — цитати з Reddit/LongeCity (UserQuote)
7. Objections     — Safe? Legal? Placebo?
8. Protocol       — DoseProtocol якщо релевантно
9. CTABlock       — → isrib.shop
10. Related       — 3 пов'язані статті (RelatedArticles)
11. AuthorBio
```

---

## 5. Технічна архітектура

### Stack

```
Framework:   Next.js 14+ App Router
Language:    TypeScript
Content:     MDX via next-mdx-remote
Styling:     Tailwind CSS + CSS custom properties
Fonts:       next/font/google (self-hosted)
Animations:  CSS @keyframes + React hooks
Hosting:     Vercel
Analytics:   GTM-58KVC9F4 / GA4 G-LJEBV5NPCT
```

### Файлова структура

```
isrib-research.com/
├── app/
│   ├── page.tsx                    ✅ Homepage
│   ├── layout.tsx                  ✅ Fonts + GTM
│   ├── globals.css                 ✅ Design system + animations
│   ├── sitemap.ts                  ⏳
│   ├── robots.txt                  ⏳
│   ├── author/page.tsx             ✅
│   ├── compare/
│   │   ├── page.tsx                ⏳ cluster index
│   │   └── [slug]/page.tsx         ✅
│   ├── guide/
│   │   ├── page.tsx                ⏳ cluster index
│   │   └── [slug]/page.tsx         ✅
│   ├── science/
│   │   ├── page.tsx                ⏳ cluster index
│   │   └── [slug]/page.tsx         ✅
│   ├── blog/
│   │   ├── page.tsx                ⏳ cluster index
│   │   └── [slug]/page.tsx         ✅
│   └── tbi/
│       ├── page.tsx                ⏳ cluster index
│       └── [slug]/page.tsx         ✅
├── content/
│   ├── compare/isrib-vs-modafinil.mdx         ✅ placeholder
│   ├── guide/isrib-a15-complete-guide.mdx     ✅ placeholder
│   ├── science/what-is-integrated-...mdx      ✅ placeholder
│   ├── blog/how-to-fix-brain-fog.mdx          ✅ placeholder
│   └── tbi/isrib-traumatic-brain-injury.mdx   ✅ placeholder
├── components/
│   ├── layout/
│   │   ├── Header.tsx              ✅
│   │   └── ArticleLayout.tsx       ✅
│   └── article/
│       ├── TOC.tsx                 ✅
│       ├── MobileTOC.tsx           ✅
│       ├── ReadingProgress.tsx     ✅
│       ├── CTABlock.tsx            ✅
│       ├── AuthorBio.tsx           ✅
│       ├── RelatedArticles.tsx     ⏳
│       ├── DoseProtocol.tsx        ✅
│       ├── ResearchCallout.tsx     ✅
│       └── UserQuote.tsx           ✅
├── hooks/
│   ├── useReadingProgress.ts       ✅
│   └── useScrollHeader.ts          ✅
├── lib/
│   ├── mdx.ts                      ✅
│   └── toc.ts                      ✅
├── PLAN.md                         ✅
└── CLAUDE.md                       ✅
```

### MDX frontmatter схема

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

`readingTime` — не вказувати, розраховується автоматично.

### Schema Markup (pending)

Article JSON-LD в кожному `[slug]/page.tsx`:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "author": {
    "@type": "Person",
    "name": "The Synthesis Lab",
    "jobTitle": "Pharmaceutical Chemist",
    "url": "https://isrib-research.com/author/"
  },
  "publisher": { "@type": "Organization", "name": "ISRIB Research" },
  "about": { "@type": "Drug", "name": "ISRIB A15" }
}
```

FAQPage schema — автогенерація з H3 що починаються з питання.

---

## 6. Analytics

| ID | Призначення |
|---|---|
| GTM-58KVC9F4 | GTM container |
| G-LJEBV5NPCT | GA4 |
| 1228338595957402 | Meta Pixel |

### Custom events (pending)

| Подія | Тригер |
|---|---|
| `article_read` | Scroll 75% article content |
| `cta_click` | Клік CTABlock → isrib.shop |
| `toc_click` | Клік TOC item |
| `cluster_click` | Клік cluster card з homepage |

---

## 7. Наступні кроки (в порядку пріоритету)

### Крок 1 — SEO foundation
Промпт для Claude Code:
- `app/sitemap.ts` — динамічний, з усіх MDX файлів
- `app/robots.txt`
- Article JSON-LD schema в кожному `[slug]/page.tsx`
- FAQPage schema автогенерація з H3 питань

### Крок 2 — Cluster index pages + RelatedArticles
Промпт для Claude Code:
- `app/[cluster]/page.tsx` для всіх 5 кластерів
- `components/article/RelatedArticles.tsx` з frontmatter `relatedSlugs`

### Крок 3 — GA4 custom events
Промпт для Claude Code:
- `article_read` через IntersectionObserver (75% scroll)
- `cta_click` onClick в CTABlock
- Через GTM або прямо в компонентах

### Крок 4 — Перший реальний контент
Окрема сесія з Claude (не Code):
1. `isrib-vs-modafinil.mdx` — найвищий пріоритет
2. `isrib-a15-complete-guide.mdx`
3. `what-is-integrated-stress-response.mdx`

Для написання контенту: передати в Claude foundational docs
(ISRIB_Avatar_Sheet, Isrib_Necessary_Beliefs, ISRIB_Offer_Brief,
Isrib_Research_Document, ISRIB_Report) + цей PLAN.md.

### Крок 5 — Deploy
- Підключити домен `isrib-research.com` до Vercel
- Перевірити Core Web Vitals після деплою

---

## 8. Нотатки

**Cluster cards:** Весь `<Link>` wraps card — клікабельна вся область, не тільки текст.

**CTABlock:** Статичний компонент без props. Якщо потрібна варіація по кластерах — додати `variant?: ArticleCluster` prop пізніше.

**Server vs Client:** Hover CSS → Server Component. useState/useEffect/usePathname → `'use client'`.

**`readingTime`** в frontmatter не вказувати — `lib/mdx.ts` розраховує автоматично через `reading-time` пакет.