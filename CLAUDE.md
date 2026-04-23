# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio and consultancy site for Felipe Vieira (felipet.io). React SPA with bilingual support (PT/EN), focused on climate tech and socio-environmental impact consultancy.

## Commands

- `npm run dev` - Start dev server on port 3000
- `npm run build` - Production build (outputs to `dist/`)
- `npm run lint` - Type-check via `tsc --noEmit`
- `npm run preview` - Preview production build
- `npm run clean` - Remove `dist/`

## Architecture

**Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, Motion (framer-motion successor), React Router DOM v7

**Structure:**
- `src/translations.ts` - Short UI copy (labels, CTAs, titles, form fields) as `translations` object with `pt` and `en` keys
- `src/content/` - Long-form prose content stored as markdown files, loaded at build time via Vite `import.meta.glob`
  - `about/narrative.{pt,en}.md` - Full professional narrative
  - `cases/{slug}.{pt,en}.md` - Case studies with `## context`, `## problem`, `## action`, `## result` sections
  - `testimonials.ts` - Testimonial data (name, role, text) with bilingual support
  - `index.ts` - Content loader: `getContent(key, language)` and `getCaseSections(slug, language)`
- `src/hooks/useContent.ts` - `useContent()` hook returns `content(key)` and `caseSections(slug)` bound to current language
- `src/components/Markdown.tsx` - Thin wrapper around `react-markdown` with Tailwind Typography `prose` classes
- `src/context/LanguageContext.tsx` - `useLanguage()` hook provides `language`, `setLanguage`, and `t` (current translation object)
- `src/pages/Home.tsx` - Single-page layout with all sections (Hero, Offers, Cases, About, Testimonials). Contains local components: `OfferCard`, `CaseCarousel`, `TestimonialCard`
- `src/pages/Contact.tsx` - Embeds a Google Forms iframe with URL pre-fill support via `?tipo=` query param
- `index.html` is the Vite entry point, loads `src/main.tsx`

**Path alias:** `@/` resolves to project root (configured in both `vite.config.ts` and `tsconfig.json`)

**Routes:** `/` (Home), `/contato` (Contact)

## Design System

- **Colors:** `forest` (#064e3b), `sand` (#fcfcf7), `ink` (#1a1a1a) - defined as Tailwind theme tokens in `src/index.css`
- **Fonts:** Inter (body), Space Grotesk (headings/display), JetBrains Mono (mono) - loaded via Google Fonts
- **CSS classes:** `section-padding`, `content-container` - reusable layout utilities in `index.css`

## Key Conventions

- Short UI text (labels, CTAs, titles) goes in `src/translations.ts`, accessed via `useLanguage().t`
- Long-form prose (narratives, case studies) goes in `src/content/` as markdown files, accessed via `useContent().content(key)`
- Testimonials live in `src/content/testimonials.ts` with bilingual `{ name, role, text }` structure
- Markdown file naming: `{slug}.{pt|en}.md`, case files use `## section` headings as structural markers
