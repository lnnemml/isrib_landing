# isrib-research.com — Master Plan

> Версія 1.0 | Статус: Planning

---

## 1. Концепція і позиціонування

### Що це за сайт

`isrib-research.com` — незалежний науковий ресурс про ISRIB, ISR pathway та когнітивне вдосконалення. Не магазин з блогом. Не маркетинговий сайт. Авторитетний інформаційний хаб, монетизований через CTA в кінці статей.

### Positioning statement

> *"The most technically rigorous independent resource on ISRIB A15 — written by a synthetic chemist with first-hand experience, not a marketer translating PubMed abstracts."*

### Автор і E-E-A-T

Для Google YMYL-ніші необхідна сторінка автора. Оскільки особиста ідентичність залишається закритою — використовуємо **псевдонім з верифікованими credentials**.

**Варіант позиціонування автора:**

- Псевдонім: наприклад "Dr. K. Marsh" або просто "The Synthesis Lab" як brand entity
- Credentials (без розкриття імені): *"Pharmaceutical chemist with background in small-molecule synthesis. Former medicinal chemistry researcher. One of the earliest independent synthesizers of ISRIB A15."*
- Немає фото — замість цього: стилізований аватар або лабораторна фотографія без обличчя (рукавички, обладнання)
- Посилання на синтезований продукт як доказ expertise: *"I've synthesized and characterized ISRIB A15 in-house — purity verified by HPLC."*

**Чому це працює для SEO:** Google оцінює E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) за якістю контенту і структурою, а не за тим, чи розкрите справжнє ім'я. Pseudonymous authors є нормою в академічному блогінгу (Gwern, Astral Codex Ten тощо).

---

## 2. Tone of Voice

### Загальний принцип

Peer-to-peer розмова між двома технічно грамотними людьми. Не лекція. Не реклама. Не науп-поп.

### Параметри голосу

| Параметр | Як |
|---|---|
| Регістр | Технічно точний, але доступний. Між науковим блогом і r/nootropics |
| Особа | Перша ("As a chemist who synthesized A15...") там де є особистий досвід |
| Третя особа | Для наукових фактів ("Studies show...") |
| Скептицизм | Завжди присутній. "Research is promising, human data is limited." Довіру підвищує |
| Заборони | Hype слова: "revolutionary", "breakthrough", "game-changer". Натомість: "notable", "significant", "worth examining" |
| Аудиторія | Люди що вже читали Peter Walter і r/nootropics — не пояснювати що таке ноотропи |

### Приклад голосу (правильно)

> "ISRIB A15 isn't magic. It's a small molecule that does one specific thing well: it stabilizes the eIF2B complex under stress conditions. Whether that translates to the kind of cognitive restoration seen in aged mice — we genuinely don't know yet in humans. What the synthesis data and user reports suggest, however, is that..."

### Приклад голосу (неправильно)

> "ISRIB A15 is the revolutionary cognitive enhancer that will transform your brain performance and unlock your true potential!"

---

## 3. UI/UX концепція

### Естетика: "Scientific Editorial"

Між Nature.com і Gwern.net. Читабельність як головний пріоритет, але з власним характером.

**Не:**
- Типовий SaaS landing page
- Ноотропний "бро" дизайн (neon, dark mode з green accents)
- Медичний стерильний білий

**Так:**
- Монохромна основа (майже чорний текст на off-white фоні)
- Один акцентний колір — виражений deep teal
- Типографіка як головний інструмент ієрархії
- Довгий читабельний текст — не картки і не плитки

### Кольорова палітра

```
Background:      #F7F5F0   warm off-white (не чистий білий)
Text primary:    #1A1A18   майже чорний (не чистий чорний)
Text secondary:  #6B6B65   muted gray
Accent:          #0D6B6B   deep teal
Accent light:    #E8F4F4   teal tint для highlights і цитат
Border:          #E0DDD6   розділювачі
Code/dose bg:    #F0EDE6   теплий cream для блоків з дозуванням
Code text:       #2A2A28
Link:            #0D6B6B   (accent, no underline за замовчуванням)
Link hover:      #0A5555
```

### Шрифти

| Роль | Шрифт | Обґрунтування |
|---|---|---|
| Display / H1 | `DM Serif Display` | Класичний серіф — науковий, але не нудний |
| Body / H2-H4 | `Source Serif 4` | Довгий текст читається краще на серіфах |
| UI елементи (nav, labels) | `DM Sans` | Чистий без-серіф для інтерфейсних елементів |
| Код / дозування | `JetBrains Mono` | Для хімічних формул, протоколів дозування |

Всі шрифти — Google Fonts, безкоштовні, швидкі.

### Типографічна шкала

```
H1:    2.5rem / DM Serif Display / line-height 1.2
H2:    1.75rem / DM Serif Display / line-height 1.3
H3:    1.25rem / Source Serif 4 / font-weight 600
Body:  1.125rem / Source Serif 4 / line-height 1.8 / max-width 68ch
Small: 0.875rem / DM Sans
Mono:  0.9rem / JetBrains Mono
```

### Layout принципи

- Одноколонковий article layout: max-width 68 символів (оптимум для читання)
- На desktop: sticky TOC в лівій колонці (240px) + контент (680px) + правий відступ
- На mobile: TOC ховається за кнопку "Contents"
- Велика кількість whitespace між секціями — стаття має "дихати"
- Breadcrumb навігація на всіх article pages

### Custom компоненти

**DoseProtocol block** — для протоколів дозування:
```
╔═══════════════════════════════╗
║  DOSING PROTOCOL              ║
║  Starting dose:   5 mg        ║
║  Standard dose:   10–15 mg    ║
║  Frequency:       2–3x/week   ║
║  Form:            Powder/oral ║
╚═══════════════════════════════╝
```
Стиль: cream background, mono шрифт, teal border-left.

**ResearchCallout block** — для ключових наукових фактів:
```
[ RESEARCH NOTE ]
In a 2020 eLife study, aged mice showed...
```
Стиль: teal-tinted background, курсив, з посиланням на source.

**UserQuote block** — для реальних відгуків з Reddit/LongeCity:
```
" Feels like my brain was defragged. Memory
  consolidation noticeably improved after
  day 2. "
  — r/nootropics user, 2023
```
Стиль: більший шрифт, відступ, muted attribution.

**CTABlock** — в кінці кожної статті:
```
┌─────────────────────────────────────┐
│  Where to buy ISRIB A15             │
│  In-house synthesized · 98%+ purity │
│  [ Buy ISRIB A15 → isrib.shop ]     │
└─────────────────────────────────────┘
```

---

## 4. Контентна архітектура

### Sitemap

```
isrib-research.com/
├── /                          Homepage (SEO hub overview)
├── /author/                   E-E-A-T сторінка автора (псевдонім)
├── /compare/                  Кластер порівнянь
│   ├── /compare/isrib-vs-modafinil/
│   ├── /compare/isrib-vs-noopept/
│   ├── /compare/isrib-vs-racetams/
│   └── /compare/best-nootropic-brain-fog/
├── /guide/                    Продуктовий кластер
│   ├── /guide/isrib-a15-complete-guide/
│   ├── /guide/isrib-a15-dosing-protocol/
│   ├── /guide/isrib-a15-vs-original-isrib/
│   └── /guide/isrib-a15-user-experiences/
├── /science/                  Науковий кластер
│   ├── /science/what-is-integrated-stress-response/
│   ├── /science/eif2b-memory-protein-synthesis/
│   ├── /science/isrib-discovery-peter-walter-ucsf/
│   └── /science/isrib-human-trials-2024/
├── /blog/                     Symptom-based кластер (широка воронка)
│   ├── /blog/how-to-fix-brain-fog/
│   ├── /blog/nootropics-for-burnout-recovery/
│   ├── /blog/post-covid-brain-fog-supplements/
│   ├── /blog/cognitive-decline-30s-40s/
│   └── /blog/nootropics-adhd-professionals/
└── /tbi/                      TBI/Recovery кластер
    ├── /tbi/isrib-traumatic-brain-injury-research/
    └── /tbi/cognitive-recovery-post-concussion/
```

### Пріоритет запуску

| Фаза | Статті | Причина |
|---|---|---|
| **Фаза 1** | ISRIB A15 vs Modafinil | Найбільший комерційний intent |
| **Фаза 1** | ISRIB A15 Complete Guide | Pillar для всього сайту |
| **Фаза 1** | What is ISR? | Авторитетна основа для internal links |
| **Фаза 2** | Решта /compare/ | Конверсійний трафік |
| **Фаза 2** | How to fix brain fog | Широка воронка |
| **Фаза 3** | /science/ кластер | Backlinks і E-E-A-T |
| **Фаза 4** | /tbi/ кластер | Окрема аудиторія |

### Формула статті

Кожна стаття будується за цією структурою:

```
1. Hook           — дзеркало болю ("If your brain doesn't feel like yours anymore...")
2. Reframe        — ISR як біологічний блок, не поведінкова проблема
3. Mechanism      — Як ISRIB/A15 це вирішує (Peter Walter, eIF2B, дослідження)
4. Evidence       — Ключові дослідження (стисло, з посиланнями)
5. Comparison     — Чому A15 відрізняється від альтернатив
6. User reports   — Цитати з Reddit/LongeCity (styled як UserQuote)
7. Objections     — Safe? Legal? Placebo? Відповіді чесно
8. Protocol       — DoseProtocol block якщо релевантно
9. CTA block      — "Where to buy ISRIB A15" → isrib.shop
10. Related       — 3 релевантні статті
11. Author bio    — Псевдонім + credentials
```

### Internal linking матриця

Кожна стаття лінкує на:
1. Pillar свого кластера (якщо це cluster article)
2. `/guide/isrib-a15-complete-guide/` (завжди)
3. 1–2 релевантні статті з інших кластерів
4. `/author/` (через author bio в кінці)

Транзакційні запити ("buy ISRIB A15") → напряму на `isrib.shop`, оминаючи research.com.

---

## 5. Технічна архітектура

### Stack

```
Framework:    Next.js 14+ (App Router)
Мова:         TypeScript
Контент:      MDX (local files, не CMS)
Styling:      Tailwind CSS
Шрифти:       Google Fonts (DM Serif Display, Source Serif 4, DM Sans, JetBrains Mono)
Hosting:      Vercel (існуюче)
Analytics:    GA4 (GTM-58KVC9F4 / G-LJEBV5NPCT)
```

### Файлова структура

```
isrib-research.com/
├── app/
│   ├── page.tsx                        ← Homepage
│   ├── layout.tsx                      ← Root layout (fonts, GTM)
│   ├── author/
│   │   └── page.tsx
│   ├── compare/
│   │   ├── page.tsx                    ← Список порівнянь
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── guide/
│   │   └── [slug]/page.tsx
│   ├── science/
│   │   └── [slug]/page.tsx
│   ├── blog/
│   │   └── [slug]/page.tsx
│   └── tbi/
│       └── [slug]/page.tsx
├── content/                            ← MDX файли
│   ├── compare/
│   │   └── isrib-vs-modafinil.mdx
│   ├── guide/
│   │   └── isrib-a15-complete-guide.mdx
│   ├── science/
│   │   └── what-is-integrated-stress-response.mdx
│   ├── blog/
│   │   └── how-to-fix-brain-fog.mdx
│   └── tbi/
│       └── isrib-traumatic-brain-injury.mdx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ArticleLayout.tsx           ← TOC + content + sidebar
│   ├── article/
│   │   ├── TOC.tsx                     ← Sticky table of contents
│   │   ├── CTABlock.tsx                ← "Where to buy" блок
│   │   ├── AuthorBio.tsx
│   │   ├── RelatedArticles.tsx
│   │   ├── DoseProtocol.tsx            ← Custom MDX компонент
│   │   ├── ResearchCallout.tsx         ← Custom MDX компонент
│   │   └── UserQuote.tsx               ← Custom MDX компонент
│   └── home/
│       ├── ClusterGrid.tsx             ← 5 кластерів на homepage
│       └── RecentArticles.tsx
├── lib/
│   ├── mdx.ts                          ← MDX parsing, frontmatter
│   ├── articles.ts                     ← Список статей, метадані
│   └── toc.ts                          ← TOC generation з headings
├── styles/
│   └── globals.css                     ← CSS variables, typography
└── public/
    └── ...
```

### MDX frontmatter схема

```yaml
---
title: "ISRIB A15 vs Modafinil: A Chemist's Comparison"
description: "..."
slug: "isrib-vs-modafinil"
cluster: "compare"
publishedAt: "2025-01-15"
updatedAt: "2025-01-15"
readingTime: 12
keywords: ["isrib vs modafinil", "isrib a15 comparison"]
relatedSlugs:
  - "isrib-a15-complete-guide"
  - "what-is-integrated-stress-response"
---
```

### Schema Markup

На кожній article page генерується автоматично:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "datePublished": "...",
  "dateModified": "...",
  "author": {
    "@type": "Person",
    "name": "[Псевдонім]",
    "jobTitle": "Pharmaceutical Chemist",
    "url": "https://isrib-research.com/author/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ISRIB Research"
  },
  "about": {
    "@type": "Drug",
    "name": "ISRIB A15"
  }
}
```

FAQPage schema генерується автоматично з H3 заголовків які починаються з питання ("Does ISRIB...?", "Is it safe...?").

### SEO технічні деталі

- **Canonical URLs:** `isrib-research.com` — master canonical. Якщо контент дублюється на `isrib-a15.com`, там `rel="canonical"` вказує на research.com
- **Sitemap:** динамічний `app/sitemap.ts` — автоматично включає всі MDX файли за `publishedAt`
- **robots.txt:** все відкрито, окрім `/api/`
- **Static generation:** `generateStaticParams` для всіх article routes → Vercel edge caching
- **Images:** `next/image` з lazy loading і blur placeholder
- **Core Web Vitals target:** всі зелені (LCP < 2.5s, CLS < 0.1, FID < 100ms)

### Існуючий лендинг

Лендинг перенесений на `isrib-a15.com`. На `isrib-research.com`:
- Видалити все специфічне для лендингу (hero copy, pricing, checkout)
- Зберегти: GTM тег, GA4 конфігурацію, базові layout компоненти якщо є
- Перезаписати `app/page.tsx` на Homepage SEO hub
- Додати новий `globals.css` з типографічною системою

---

## 6. Analytics і трекінг

### Існуюче (зберігаємо)

- GTM Container: `GTM-58KVC9F4`
- GA4 Measurement ID: `G-LJEBV5NPCT`
- Meta Pixel: `1228338595957402`

### Нові події для контентного сайту

| Подія | Тригер |
|---|---|
| `article_read` | Scroll 75% статті |
| `cta_click` | Клік на CTABlock → isrib.shop |
| `toc_click` | Клік на TOC посилання |
| `cluster_click` | Клік на cluster card з homepage |

---

## 7. Черговість реалізації

### Тиждень 1 — Фундамент

- [ ] Очистити лендинг код, зберегти GTM/GA4 теги
- [ ] Встановити і налаштувати шрифти (Google Fonts)
- [ ] Написати `globals.css` з кольоровими змінними і типографічною системою
- [ ] MDX pipeline: `next-mdx-remote` або вбудований Next.js MDX
- [ ] `ArticleLayout.tsx` з sticky TOC
- [ ] Custom MDX компоненти: `CTABlock`, `DoseProtocol`, `ResearchCallout`, `UserQuote`
- [ ] `AuthorBio.tsx` (псевдонім + credentials)
- [ ] `/author/` сторінка
- [ ] Schema markup автогенерація

### Тиждень 2 — Перший контент

- [ ] "ISRIB A15 vs Modafinil" (перша публікація)
- [ ] "ISRIB A15 Complete Guide" (pillar)
- [ ] Homepage
- [ ] Динамічний sitemap

### Тиждень 3+

- [ ] Решта /compare/ кластеру (3 статті)
- [ ] "What is ISR?" та "eIF2B" (/science/)
- [ ] Symptom-based статті (/blog/)
- [ ] FAQPage schema автоматизація

---

## 8. Нотатки і рішення

### Чому MDX, а не headless CMS

Статті містять хімічні формули, кастомні компоненти (DoseProtocol, ResearchCallout), таблиці. MDX дає повну гнучкість без vendor lock-in і без щомісячних платежів. Git-based workflow — зміни трекуються. Drawback: потрібен деплой для кожної нової статті (прийнятно на поточному масштабі).

### Чому окремий домен від isrib.shop

`isrib.shop` — касовий апарат. Змішування "intent to learn" і "intent to buy" на одному домені послаблює обидва сигнали для Google. Окремий домен дає:
- Тематичний авторитет для дослідницького контенту
- Чистий checkout flow без відвернення уваги на .shop
- Можливість лінкувати з research.com → .shop (cross-domain CTA)

### Псевдонімний автор і довіра

Аномімний/псевдонімний автор нормальний прецедент у технічному блогінгу (Gwern Branwen, Scott Alexander/Astral Codex Ten). Довіру будує якість аргументації і технічна точність, а не розкрите ім'я. Credentials ("pharmaceutical chemist, in-house synthesizer") верифікуються через якість контенту, а не через паспорт.