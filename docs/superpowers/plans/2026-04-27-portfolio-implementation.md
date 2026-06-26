# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Vercel-inspired single-page dark portfolio for Niu Shang using Next.js 16 App Router, React 19, Tailwind CSS v4, and Geist font.

**Architecture:** Single `app/page.tsx` assembles all section components in order. `Nav` is the only client component (needs scroll event). All other sections are server components. Components live in `app/components/`.

**Tech Stack:** Next.js 16.2.4, React 19, Tailwind CSS v4, TypeScript, Geist font (pre-configured)

---

## File Map

| File | Action | Purpose |
|------|--------|---------|
| `next.config.ts` | Modify | Fix Turbopack root warning |
| `app/layout.tsx` | Modify | Update metadata title/description |
| `app/globals.css` | Modify | Force dark bg unconditionally, remove light-mode default |
| `app/page.tsx` | Replace | Assemble all section components |
| `app/components/Nav.tsx` | Create | `"use client"` sticky nav with scroll blur |
| `app/components/Hero.tsx` | Create | Full-viewport centered hero section |
| `app/components/About.tsx` | Create | Two-column about section |
| `app/components/Skills.tsx` | Create | Two-column skills with pill tags |
| `app/components/Projects.tsx` | Create | Two-column project cards |
| `app/components/Contact.tsx` | Create | Two-column contact links |
| `app/components/Footer.tsx` | Create | Copyright footer |

---

## Task 1: Fix Turbopack root warning in next.config.ts

**Files:**
- Modify: `next.config.ts`

- [ ] **Step 1: Update next.config.ts**

Replace the full file contents:

```ts
import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add next.config.ts
git commit -m "fix: configure turbopack root to suppress warning"
```

---

## Task 2: Update globals.css and layout metadata

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update globals.css**

Replace the full file:

```css
@import "tailwindcss";

:root {
  --background: #0a0a0a;
  --foreground: #ededed;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-geist-sans), Arial, sans-serif;
}

* {
  box-sizing: border-box;
}
```

- [ ] **Step 2: Update metadata in app/layout.tsx**

Change the `metadata` export only (leave the rest of the file untouched):

```ts
export const metadata: Metadata = {
  title: "Niu Shang — Software Engineer",
  description: "Building mobile experiences, scalable backends, and intelligent systems.",
};
```

- [ ] **Step 3: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "style: set dark theme as default and update site metadata"
```

---

## Task 3: Create Nav component

**Files:**
- Create: `app/components/Nav.tsx`

- [ ] **Step 1: Create the components directory and Nav.tsx**

```bash
mkdir -p app/components
```

Create `app/components/Nav.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-md"
          : "bg-[#0a0a0a]"
      }`}
    >
      <div className="max-w-[900px] mx-auto px-10 h-14 flex items-center justify-between">
        <span className="text-sm font-semibold text-[#ededed] tracking-tight">
          Niu Shang
        </span>
        <div className="hidden md:flex gap-8">
          {["About", "Skills", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[13px] text-[#555] hover:text-[#888] transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add app/components/Nav.tsx
git commit -m "feat: add sticky nav with scroll blur"
```

---

## Task 4: Create Hero component

**Files:**
- Create: `app/components/Hero.tsx`

- [ ] **Step 1: Create app/components/Hero.tsx**

```tsx
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-10">
      <div>
        <div className="inline-block border border-[#1e1e1e] rounded-full px-4 py-1.5 text-[11px] text-[#555] tracking-widest uppercase mb-8">
          Software Engineer
        </div>
        <h1 className="text-[72px] font-extrabold tracking-[-0.04em] leading-none text-[#ededed]">
          Niu Shang
        </h1>
        <p className="text-lg text-[#444] mt-6 leading-relaxed max-w-md mx-auto">
          Building mobile experiences, scalable backends,
          <br />
          and intelligent systems.
        </p>
        <div className="flex gap-3 mt-10 justify-center">
          <a
            href="https://github.com/tommyshang"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ededed] text-[#0a0a0a] text-[13px] font-medium px-5 py-2.5 rounded-lg hover:bg-white transition-colors duration-150"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/niu-shang/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#222] text-[#666] text-[13px] px-5 py-2.5 rounded-lg hover:border-[#333] hover:text-[#888] transition-colors duration-150"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add app/components/Hero.tsx
git commit -m "feat: add hero section"
```

---

## Task 5: Create About component

**Files:**
- Create: `app/components/About.tsx`

- [ ] **Step 1: Create app/components/About.tsx**

```tsx
export default function About() {
  return (
    <section
      id="about"
      className="max-w-[900px] mx-auto px-10 py-24 border-t border-[#161616]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
        <div className="text-[13px] font-semibold text-[#ededed] tracking-tight pt-1">
          About
        </div>
        <p className="text-base text-[#666] leading-[1.8]">
          Software engineer with a focus on mobile development, backend systems,
          and AI-powered applications. Passionate about building products that
          are fast, reliable, and thoughtfully designed. Currently exploring the
          intersection of large language models and real-world product
          experiences.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add app/components/About.tsx
git commit -m "feat: add about section"
```

---

## Task 6: Create Skills component

**Files:**
- Create: `app/components/Skills.tsx`

- [ ] **Step 1: Create app/components/Skills.tsx**

```tsx
const skills = [
  {
    category: "Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Python", "Docker"],
  },
  {
    category: "AI",
    items: ["LLM / RAG", "Claude API", "MCP"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-[900px] mx-auto px-10 py-24 border-t border-[#161616]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
        <div className="text-[13px] font-semibold text-[#ededed] tracking-tight pt-1">
          Skills
        </div>
        <div className="flex flex-col gap-7">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <div className="text-[12px] text-[#333] mb-3 font-medium tracking-wide">
                {category}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="border border-[#1e1e1e] rounded-full px-3 py-1 text-[12px] text-[#555]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add app/components/Skills.tsx
git commit -m "feat: add skills section with pill tags"
```

---

## Task 7: Create Projects component

**Files:**
- Create: `app/components/Projects.tsx`

- [ ] **Step 1: Create app/components/Projects.tsx**

```tsx
const projects = [
  {
    title: "Project Alpha",
    description:
      "A cross-platform mobile application for real-time data tracking with an offline-first architecture.",
    stack: ["Flutter", "Dart", "Spring Boot"],
    github: "https://github.com/tommyshang",
  },
  {
    title: "Project Beta",
    description:
      "A RAG-powered knowledge assistant that indexes private documents and answers questions in natural language.",
    stack: ["Python", "Claude API", "Docker"],
    github: "https://github.com/tommyshang",
  },
  {
    title: "Project Gamma",
    description:
      "A microservices backend platform with authentication, event streaming, and containerized deployment.",
    stack: ["Java", "Spring Boot", "Docker"],
    github: "https://github.com/tommyshang",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-[900px] mx-auto px-10 py-24 border-t border-[#161616]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
        <div className="text-[13px] font-semibold text-[#ededed] tracking-tight pt-1">
          Projects
        </div>
        <div className="flex flex-col gap-4">
          {projects.map(({ title, description, stack, github }) => (
            <div
              key={title}
              className="border border-[#161616] rounded-[10px] p-7 hover:border-[#2a2a2a] transition-colors duration-200"
            >
              <div className="flex items-start justify-between mb-2.5">
                <div className="text-[15px] font-semibold text-[#ededed] tracking-tight">
                  {title}
                </div>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12px] text-[#333] hover:text-[#666] transition-colors duration-150 ml-4 shrink-0"
                >
                  GitHub ↗
                </a>
              </div>
              <p className="text-[14px] text-[#555] leading-[1.65] mb-4">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-[#1e1e1e] rounded-full px-3 py-1 text-[12px] text-[#555]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add app/components/Projects.tsx
git commit -m "feat: add projects section with cards"
```

---

## Task 8: Create Contact and Footer components

**Files:**
- Create: `app/components/Contact.tsx`
- Create: `app/components/Footer.tsx`

- [ ] **Step 1: Create app/components/Contact.tsx**

```tsx
export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-[900px] mx-auto px-10 py-24 border-t border-[#161616]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
        <div className="text-[13px] font-semibold text-[#ededed] tracking-tight pt-1">
          Contact
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="mailto:niushang1997@gmail.com"
            className="text-[15px] text-[#555] hover:text-[#888] transition-colors duration-150"
          >
            niushang1997@gmail.com ↗
          </a>
          <a
            href="https://www.linkedin.com/in/niu-shang/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-[#555] hover:text-[#888] transition-colors duration-150"
          >
            linkedin.com/in/niu-shang ↗
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create app/components/Footer.tsx**

```tsx
export default function Footer() {
  return (
    <footer className="max-w-[900px] mx-auto px-10 py-7 border-t border-[#161616]">
      <p className="text-[12px] text-[#2a2a2a]">© 2026 Niu Shang</p>
    </footer>
  );
}
```

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 4: Commit**

```bash
git add app/components/Contact.tsx app/components/Footer.tsx
git commit -m "feat: add contact and footer sections"
```

---

## Task 9: Assemble page.tsx

**Files:**
- Replace: `app/page.tsx`

- [ ] **Step 1: Replace app/page.tsx**

```tsx
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble full portfolio page"
```

---

## Task 10: Run dev server and visual check

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

Expected: server starts on http://localhost:3000, no Turbopack root warning in console

- [ ] **Step 2: Open browser and verify each section**

Open http://localhost:3000 and check:

- [ ] Nav is sticky, shows "Niu Shang" left + About/Skills/Projects/Contact right
- [ ] Nav blurs on scroll (scroll down to check)
- [ ] Nav links hidden on mobile (resize browser to < 768px)
- [ ] Hero is full viewport height, content centered
- [ ] "Software Engineer" badge visible above name
- [ ] GitHub button is white-filled, LinkedIn is outlined
- [ ] About section has two-column layout on desktop, stacks on mobile
- [ ] Skills shows 3 categories with pill tags
- [ ] Projects shows 3 cards with border, hover border lightens
- [ ] Contact shows email + LinkedIn as links
- [ ] Footer shows "© 2026 Niu Shang"
- [ ] Page background is #0a0a0a (dark) — not white

- [ ] **Step 3: Fix any visual issues found, then commit fixes**

```bash
git add -p
git commit -m "fix: visual corrections from dev review"
```

---

## Task 11: Production build verification

- [ ] **Step 1: Run production build**

```bash
npm run build
```

Expected: build succeeds with no TypeScript errors, no linting errors

- [ ] **Step 2: Start production server and verify**

```bash
npm run start
```

Open http://localhost:3000 — should look identical to dev

- [ ] **Step 3: Commit if any build fixes were needed**

```bash
git add .
git commit -m "fix: resolve build errors"
```

---

## Spec Coverage Check

| Spec requirement | Covered by |
|-----------------|------------|
| Hero: name, title, tagline, GitHub + LinkedIn | Task 4 |
| About: 2-3 sentence placeholder | Task 5 |
| Skills: grouped Mobile / Backend / AI | Task 6 |
| Projects: 3 cards with title, desc, stack, GitHub | Task 7 |
| Contact: email + LinkedIn | Task 8 |
| Sticky nav with blur on scroll | Task 3 |
| Dark background #0a0a0a | Task 2 |
| White/gray typography hierarchy | Tasks 3–8 |
| Subtle borders, no heavy shadows | Tasks 3–8 |
| No unnecessary animations | All (hover color only) |
| Mobile responsive | Tasks 3–8 (`md:` breakpoints) |
| Fix Turbopack root warning | Task 1 |
| Update metadata | Task 2 |
| Geist font | Already configured in layout.tsx |
| Vercel deploy ready | Task 11 build verification |
