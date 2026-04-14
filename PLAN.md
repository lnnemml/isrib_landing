# isrib-research.com — Master Plan

> Версія 4.0 | Статус: Content Phase — Фаза 2

---

## Статус реалізації

| Шар | Статус |
|---|---|
| Infrastructure (повністю) | ✅ Done |
| Mobile responsive layout | ✅ Done |
| Burger menu (mobile header) | ✅ Done |
| Viewport meta tag | ✅ Done |
| Google Search Console | ✅ Done |
| Real article content — Фаза 1 (3 статті) | ✅ Done |
| Real article content — Фаза 2 (3 статті) | ⏳ Next |

---

## Фаза 1 — Готові статті

| Файл | URL | Статус |
|---|---|---|
| content/compare/isrib-vs-modafinil.mdx | /compare/isrib-vs-modafinil | ✅ Live |
| content/guide/isrib-a15-complete-guide.mdx | /guide/isrib-a15-complete-guide | ✅ Live |
| content/science/what-is-integrated-stress-response.mdx | /science/what-is-integrated-stress-response | ✅ Live |

---

## Фаза 2 — Наступні статті (пріоритет)

| Фаза | Стаття | Кластер | Target keyword |
|---|---|---|---|
| **2** | ISRIB A15 vs Noopept | /compare/ | "ISRIB vs noopept" |
| **2** | ISRIB A15 vs Racetams | /compare/ | "ISRIB vs racetams" |
| **2** | How to fix brain fog | /blog/ | "how to fix brain fog" |

---

## Фаза 3+

| Фаза | Стаття | Кластер |
|---|---|---|
| **3** | eIF2B and memory formation | /science/ |
| **3** | Best nootropic for burnout | /blog/ |
| **4** | ISRIB for TBI research | /tbi/ |

---

## SEO нотатки

- Розділ "Dosing" в guide статті → розглянути перейменування на "ISRIB A15 dosage and protocol"
- Backlinks: органічні коментарі в r/Nootropics і r/ISRIB з посиланням на конкретні статті
- Новий домен: 3-6 місяців до стабільних позицій по конкурентних запитах
- People Also Ask вже з'явились в Google — хороший знак індексації

---

## 1. Концепція і позиціонування

`isrib-research.com` — незалежний науковий ресурс про ISRIB, ISR pathway та когнітивне вдосконалення. Авторитетний інформаційний хаб, монетизований через CTA в кінці кожної статті → `isrib.shop/product_isrib_A15.html`.

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

## 3. Контентна архітектура

### Sitemap
isrib-research.com/
├── /                        ✅ Homepage
├── /author/                 ✅ E-E-A-T
├── /compare/isrib-vs-modafinil          ✅ Live
├── /guide/isrib-a15-complete-guide      ✅ Live
├── /science/what-is-integrated-stress-response ✅ Live
├── /compare/isrib-vs-noopept            ⏳ Фаза 2
├── /compare/isrib-vs-racetams           ⏳ Фаза 2
└── /blog/how-to-fix-brain-fog           ⏳ Фаза 2

### Формула статті

Hook           — дзеркало болю читача
Reframe        — ISR як біологічний блок, не поведінкова проблема
Mechanism      — eIF2B, Peter Walter, як A15 це вирішує
Evidence       — ключові дослідження (ResearchCallout)
Comparison     — чому A15 відрізняється від альтернатив
User reports   — цитати з Reddit/LongeCity (UserQuote)
Objections     — Safe? Legal? Placebo?
Protocol       — DoseProtocol якщо релевантно
CTABlock       — → isrib.shop/product_isrib_A15.html
Related       — 3 пов'язані статті (RelatedArticles)
AuthorBio


---

## 4. MDX Frontmatter Schema

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

---

## 5. MDX Компоненти

```mdx
<ResearchCallout title="..." source="...">текст</ResearchCallout>

<UserQuote>текст цитати</UserQuote>

<DoseProtocol
  starting="..."
  standard="..."
  frequency="..."
  form="..."
  notes="..."
/>
```

**Важливо:** `UserQuote` — без props source/year (вони optional). `DoseProtocol` — тільки через props, не через children.

HTML таблиці — через нативний `<table>` тег, не markdown синтаксис (markdown таблиці не рендеряться в MDX).
