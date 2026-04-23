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
- `src/translations.ts` - All site copy lives here as a single `translations` object with `pt` and `en` keys. Never hardcode text in components.
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

- All user-facing text must go through `src/translations.ts`, accessed via `useLanguage().t`
