# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio and consultancy site for Felipe Vieira (felipet.io). React SPA with bilingual support (PT/EN), focused on climate tech and socio-environmental impact consultancy.

## Commands

- `npm run dev` — Start dev server on port 3000
- `npm run build` — Production build (outputs to `dist/`)
- `npm run lint` — Type-check via `tsc --noEmit` (strict mode + noUnusedLocals/Parameters)
- `npm run preview` — Preview production build
- `npm run clean` — Remove `dist/`

## Architecture

**Stack:** React 19, TypeScript (strict), Vite, Tailwind CSS v4, Motion (framer-motion successor), React Router DOM v7, react-markdown.

**Top-level layout:**
- `index.html` — Vite entry. Holds SEO/OG meta. Default `<html lang="en">`; `LanguageContext` updates it client-side.
- `src/main.tsx` — Mounts `<App />` in StrictMode.
- `src/App.tsx` — Wraps the app in `LanguageProvider` + `Router`, renders `Header`, `Rail`, and routes.

**Content & i18n:**
- `src/translations.ts` — Short UI copy (labels, CTAs, titles, list items) keyed by `pt` / `en`. Structured data (`offers.list`, `cases.list`, `about.factList`) is stored as arrays so the UI can map over them.
- `src/content/` — Long-form prose stored as markdown files, loaded eagerly at build time via Vite `import.meta.glob`:
  - `about/narrative.{pt,en}.md` — split into `## bio` and `## outside` sections.
  - `cases/{slug}.{pt,en}.md` — case studies with `## context`, `## problem`, `## action`, `## result` sections.
- `src/content/testimonials.ts` — Testimonial data, bilingual `{ name, logo, role, text }` records.
- `src/content/index.ts` — Loader: `getContent(key, language)`, `getCaseSections(slug, language)`, `getAboutSections(language)`.
- `src/context/LanguageContext.tsx` — `useLanguage()` returns `{ language, setLanguage, t }`. Detects initial language from `localStorage` (key `felipetio:lang`), falling back to `navigator.language`.
- `src/hooks/useContent.ts` — Hook that binds the content loaders to the current language.
- `src/components/Markdown.tsx` — Wrapper around `react-markdown`. Default variant applies `prose`. Pass `externalLinks` to drop the prose wrapper and open every link in a new tab with `rel="noopener noreferrer"`.
- `src/constants.ts` — Shared `CONTACT` URLs and `HANDLE` so contact info isn't duplicated across components.

**UI:**
- `src/pages/Home.tsx` — Single-page layout (Hero, Offers, Cases, About, Testimonials). Defines the local `OfferCard` and `TestimonialCard` components.
- `src/pages/Contact.tsx` — Standalone `/contato` page (link-list view of the same channels).
- `src/components/CasePanel.tsx` — Tabbed case studies. Crossfade between cases is driven by Motion (`<motion.div key={slug}>`); no imperative DOM mutation.
- `src/components/Header.tsx`, `Rail.tsx`, `Footer.tsx`, `ContactSection.tsx`, `Sidekick.tsx`, `Terminal.tsx`, `TrustWall.tsx` — section components.
- `src/hooks/useScrollSpy.ts`, `useReveal.ts` — `IntersectionObserver`-based hooks for nav highlighting and scroll-in animation. `useReveal` accepts a deps array to re-scan on language switch.

**Routes:** `/` (Home), `/contato` (Contact).

## Design System

- **Colors** (defined as Tailwind theme tokens in `src/index.css`):
  - `bg #f6f7f1`, `bg-2 #eef0e7`, `paper #ffffff`
  - `ink #14201a`, `ink-2 #3a4a40`, `muted #6b7a70`
  - `forest #0e3a2c`, `forest-2 #0a2a20`, `sand #f6f7f1`
  - `live` (oklch green) and `live-soft` for highlight accents
  - `hair`, `hair-strong` for hairlines
- **Fonts** (loaded via Google Fonts in `src/index.css`): Inter Tight (sans/display), JetBrains Mono (mono), Fraunces (serif accents).
- **Reusable CSS utilities in `src/index.css`:** `.shell`, `.section-head`, `.section-tag`, `.section-title`, `.btn`, `.btn-primary`, `.btn-ghost`, `.pill`, `.reveal`/`.reveal.in`, `.offer-card`, `.contact-chip`, `.mono`, `.serif`.

## Key Conventions

- Short UI text (labels, CTAs, titles) goes in `src/translations.ts`, accessed via `useLanguage().t`.
- Long-form prose (narratives, case studies) goes in `src/content/` as markdown files, accessed via `useContent()`.
- Lists that the UI maps over (offers, cases, facts) live as arrays inside `translations.ts`. Don't reintroduce numeric-suffixed keys (`f1k`, `case1`).
- Markdown file naming: `{slug}.{pt|en}.md`. Case files use `## context|problem|action|result` headings as structural markers.
- External links must use `target="_blank"` + `rel="noopener noreferrer"`.
- Shared contact info (email, GitHub, LinkedIn URLs) lives in `src/constants.ts`.
- `README.md` doubles as Felipe's GitHub public profile (https://github.com/felipetio). Treat it as a portfolio-facing document: English-only, audience is visitors landing on the GitHub profile. Keep it in sync with the site's positioning when offers or the narrative change.
