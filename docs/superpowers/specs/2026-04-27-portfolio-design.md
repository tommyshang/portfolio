# Portfolio Website Design Spec
**Date:** 2026-04-27
**Style:** Version B — Vercel-inspired

## Overview
Single-page portfolio for Niu Shang (Software Engineer). Dark background (#0a0a0a), Geist font, Tailwind CSS v4, Next.js 16 App Router. All sections on one scrollable page with anchor navigation.

## Visual Design System
- Background: `#0a0a0a`
- Surface borders: `#161616` (sections), `#222` (cards hover)
- Text hierarchy: `#ededed` (headings) → `#666` (body) → `#444` (muted) → `#333` (dim)
- Font: Geist Sans (already configured in layout.tsx)
- Pill tags: `border: 1px solid #1e1e1e`, `border-radius: 9999px`, `color: #555`
- Project cards: `border: 1px solid #161616`, `border-radius: 10px`, hover lifts border to `#2a2a2a`
- No shadows, no gradients, no animations beyond hover color transitions (0.15s)

## Architecture
- Framework: Next.js 16, App Router, TypeScript, Tailwind CSS v4
- All sections are server components except `Nav` (needs scroll listener → `"use client"`)
- Components live in `app/components/`
- `page.tsx` assembles all sections in order

## Page Layout
Each section (except Hero) uses a two-column grid: narrow label column left (1fr), wider content column right (2fr). Max-width 900px, centered. Sections separated by `border-top: 1px solid #161616`.

## Components

### Nav
- Sticky top, `position: sticky; top: 0; z-index: 50`
- Name "Niu Shang" left (font-weight: 600), anchor links right (About · Skills · Projects · Contact)
- On scroll > 20px: `backdrop-filter: blur(12px)` + semi-transparent background
- Height: 56px

### Hero
- `min-height: 100vh`, content centered vertically and horizontally
- Badge: "Software Engineer" in a bordered pill above the name
- Name: large display size (font-weight: 800, letter-spacing: -0.04em)
- Tagline: gray, ~18px
- Two buttons: GitHub (white fill, primary) + LinkedIn (bordered, secondary)

### About
- Two-column layout
- Left: label "About" (font-weight: 600, 13px)
- Right: 2–3 sentence paragraph, `color: #666`, 16px, line-height 1.8

### Skills
- Two-column layout
- Left: label "Skills"
- Right: three category groups (Mobile, Backend, AI), each with a small category label and pill tags below

### Projects
- Two-column layout
- Left: label "Projects"
- Right: three cards stacked vertically, each with:
  - Title (font-weight: 600) + "GitHub ↗" link (right-aligned, top)
  - Description paragraph
  - Tech pill tags

### Contact
- Two-column layout
- Left: label "Contact"
- Right: email link + LinkedIn link, stacked, 15px, `color: #555`

### Footer
- Simple single line: `© 2026 Niu Shang`, `color: #2a2a2a`, 12px

## Content

**About:** "Software engineer with a focus on mobile development, backend systems, and AI-powered applications. Passionate about building products that are fast, reliable, and thoughtfully designed. Currently exploring the intersection of large language models and real-world product experiences."

**Skills:**
- Mobile: Flutter, Dart
- Backend: Java, Spring Boot, Python, Docker
- AI: LLM / RAG, Claude API, MCP

**Projects (placeholders):**
1. Project Alpha — cross-platform mobile app, real-time data tracking, offline-first. Stack: Flutter, Dart, Spring Boot
2. Project Beta — RAG-powered knowledge assistant, indexes private docs. Stack: Python, Claude API, Docker
3. Project Gamma — microservices backend, auth, event streaming, containerized. Stack: Java, Spring Boot, Docker

**Links:** GitHub: https://github.com/tommyshang · LinkedIn: https://www.linkedin.com/in/niu-shang/ · Email: niushang1997@gmail.com

## Other Requirements
- Mobile responsive: single-column layout below `md` breakpoint; nav links hidden on mobile (name only shown)
- Fix Turbopack root warning: add `outputFileTracingRoot` to `next.config.ts`
- Update `metadata` in `layout.tsx`: title "Niu Shang", description matching tagline
- Delete placeholder mockups after implementation (or keep in `/mockups` if user wants)
- Vercel deploy ready: no env vars needed, static export compatible
