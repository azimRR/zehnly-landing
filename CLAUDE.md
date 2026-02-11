# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js with Turbopack)
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

This is a **Zehnly AI landing page** — a single-page marketing site for an English-learning app built with games (Word Battle, 4 Pics 1 Word, Odd One Out, Flashcards).

**Stack**: Next.js 16 (App Router) + React 19 + TypeScript (strict) + Tailwind CSS v4 + Framer Motion

### Page composition

`app/page.tsx` composes the full page from section components in order:

```
HeroSection → FeatureSection → GamificationSection → PricingSection → Footer
```

The Navbar is rendered inside HeroSection. Navigation uses hash links (`#features`, `#method`, `#pricing`) for smooth scrolling.

### Component layout

- `components/` — Section-level components (HeroSection, FeatureSection, etc.) and sub-components (FeatureCard)
- `components/ui/` — Shared UI primitives (Button with variant props)
- `assets/` — Static images imported directly into components
- `app/globals.css` — Tailwind v4 `@theme` block defining custom design tokens

### Key conventions

- **All section components use `"use client"`** for Framer Motion animations. The root layout is server-rendered.
- **Content is hardcoded** as arrays/objects within components — no CMS, API, or data fetching layer.
- **No state management library** — only local `useState` where needed (e.g., scroll detection in Navbar).
- **Import alias**: `@/*` maps to the project root (e.g., `@/components/HeroSection`).
- **React Compiler** is enabled via `babel-plugin-react-compiler` in `next.config.ts`.

### Design tokens (globals.css)

All custom colors follow the `zehnly-{name}` convention:
- `zehnly-violet` (#6c42bf) — primary brand color
- `zehnly-green` (#58cc02) — CTA / success
- `zehnly-yellow` (#ffc800) — accent
- `zehnly-red` (#ff4b4b) — accent

Custom shadows: `shadow-3d`, `shadow-3d-green`, `shadow-3d-violet` for the 3D button effect.

Font: **Plus Jakarta Sans** loaded via `next/font/google` in `app/layout.tsx`.

### Animation pattern

Framer Motion is used extensively with a consistent pattern:
- `initial` / `animate` / `transition` for entrance animations
- `whileInView` / `viewport` for scroll-triggered reveals
- `whileHover` / `whileTap` for interactive feedback
- Staggered `delay` values for sequential card reveals

### Content structure reference

`Sturcture_Rules` (root file) contains the canonical copy and section blueprint for the landing page.
