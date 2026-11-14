/**
 * Single source of truth for everything on the site.
 * Update this file when the resume changes — no component edits needed.
 */

/**
 * Years of experience, counted from the first job so it never needs manual
 * updating. Rounded to the nearest half-year (e.g. "4.5").
 */
const CAREER_START = new Date('2022-05-01')
export const yearsExperience = (
  Math.round(((Date.now() - CAREER_START.getTime()) / (1000 * 60 * 60 * 24 * 365.25)) * 2) / 2
).toString()

export const profile = {
  name: 'Vansh Sharma',
  firstName: 'Vansh',
  lastName: 'Sharma',
  title: 'Software Developer',
  status: 'Open to Software Developer roles',
  summary:
    `Software Developer with ${yearsExperience} years building production web apps across React/TypeScript frontends and REST APIs.`,
  summaryDetail:
    'Most recently: connected-vehicle telematics at Intangles — real-time WebSocket alerting, an end-to-end feature-flag service, and a full Angular-to-React migration.',
  email: 'vanshsharma9354@gmail.com',
  phone: '+91 79880 06877',
  phoneHref: 'tel:+917988006877',
  location: 'Pune, MH',
  /** Shared Google Drive link used by the "resume" buttons. */
  resumeLink: 'https://drive.google.com/file/d/1raQuKb_7Lz48Chvr1MOoX-rKH29EGL4p/view?usp=sharing',
  /** Local PDF kept in assets as a fallback copy. */
  resumeUrl: '/resume/Vansh_Sharma_Software_Developer.pdf',
  resumeFileName: 'Vansh_Sharma_Software_Developer.pdf',
  linkedin: 'https://www.linkedin.com/in/vanshsharma27/',
  github: 'https://github.com/VanshSh',
} as const

export const marquee = [
  'React', 'TypeScript', 'Node.js', 'Next.js', 'Redux Toolkit', 'Redux Saga', 'WebSockets',
  'Express', 'MongoDB', 'MySQL', 'Storybook', 'Playwright', 'Docker', 'GitHub Actions', 'Claude Code',
]

export type SkillGroup = { title: string; items: string[] }

export const skills: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js', 'React Native', 'Redux Toolkit', 'Redux Saga', 'Zustand', 'React Hook Form', 'Tailwind CSS', 'Material UI', 'Chart.js', 'Storybook'],
  },
  { title: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'HTML5', 'CSS3', 'Liquid (Shopify)'] },
  {
    title: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'REST API design', 'GraphQL', 'JWT', 'WebSockets', 'Socket.io', 'Server-Sent Events', 'Webhooks'],
  },
  { title: 'Databases', items: ['MySQL', 'MongoDB'] },
  {
    title: 'DevOps & tooling',
    items: ['Docker', 'CI/CD', 'GitHub Actions', 'Webpack', 'Babel', 'Vite', 'Git', 'Figma', 'React Testing Library', 'Playwright'],
  },
  {
    title: 'AI-assisted engineering',
    items: ['Claude Code (custom skills & workflows)', 'Cursor', 'Prompt engineering for codegen & review', 'WCAG accessibility', 'Performance', 'Agile / Scrum'],
  },
]

/** Bullets support **bold** markers which render in the accent colour. */
export type Job = {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  /** Hidden behind "Show more" to keep the first screen tight. */
  moreBullets?: string[]
}

export const experience: Job[] = [
  {
    company: 'Intangles Lab',
    role: 'Software Developer',
    period: 'Feb 2024 — Present',
    location: 'Pune, MH',
    bullets: [
      "Built the **Platform Feature Config dashboard end to end** (full stack) — now the organization's feature rollout platform across every environment, user role and customer account.",
      'Built a real-time **Global Alert Notification system over WebSockets** with auto-reconnection for live vehicle alerts.',
      'Built the **Vehicle Health Dashboard**: real-time parameters, predictive alerts, fault codes, map tracking and charts.',
      'Led the migration of legacy Angular modules to React, Redux Toolkit and Redux Saga — including the FOTA release dashboard — **cutting maintenance effort by 40%**.',
    ],
    moreBullets: [
      'Extended the fault-code API with category-based filtering so fleet operators can isolate faults by category.',
      'Made Redux modules reusable across pages and lazy-loaded with code splitting for faster page loads.',
      'Built a Storybook design system, cutting UI development time by 30%; a WCAG-compliant UI revamp raised user engagement by 20%.',
      'Designing a Dev-QA framework as a Claude Code skill with 8 audit modes (Figma audit, v1→v2 parity, API checks, edge cases, code review and more).',
      'Drove AI adoption on the team with Claude Code workflows for code generation, PR review and debugging.',
      'Review 30+ PRs weekly; conducted 30+ technical interviews, raising code-quality and hiring standards.',
    ],
  },
  {
    company: 'Seventh Triangle Consulting',
    role: 'Software Developer',
    period: 'Oct 2022 — Feb 2024',
    location: 'Noida, UP',
    bullets: [
      'Led frontend delivery for **3 e-commerce platforms** (V-Guard, Tiber Taber, Equipp), increasing user engagement by up to 20%.',
      'Led the V-Guard storefront revamp on Shopify (Liquid, JavaScript), raising **Lighthouse performance from 48 → 91**.',
      'Built responsive storefront UIs in React.js and Next.js, integrating Shopify and REST APIs for personalized shopping experiences.',
      'Mentored 3 junior developers; set coding standards and docs that cut onboarding time by 25%.',
    ],
  },
  {
    company: 'Now&Me',
    role: 'Software Developer',
    period: 'May 2022 — Oct 2022',
    location: 'Gurugram, HR',
    bullets: [
      'Built core product features and redesigned the landing page in React.js and Zustand, **driving users from web to the mobile app**.',
      'Optimized CSS animations to remove jank on low-end devices, improving perceived performance.',
    ],
  },
]

export type Project = {
  kind: string
  year: string
  title: string
  description: string
  tools: string[]
  /** Public source repo, shown as a GitHub link on the card. */
  github?: string
  /** Live/preview URL, shown as a "Live preview" link on the card. */
  live?: string
  /** Spans the full width of the grid as the flagship card. */
  featured?: boolean
}

export const projects: Project[] = [
  {
    kind: 'Full stack · Intangles',
    year: '2025',
    title: 'Platform Feature Config Service',
    description:
      'Organization-wide feature rollout platform used by multiple product teams to launch features across platforms and environments — targeted by user role and customer account, without code deployments. Staged releases with per-account include/exclude targeting, role-based gating, a master kill switch, partial updates that save only changed fields, and a full audit history of who changed what, when and why.',
    tools: ['React', 'TypeScript', 'Redux Toolkit', 'Redux Saga', 'React Hook Form', 'REST APIs'],
    featured: true,
  },
  {
    kind: 'Frontend · Intangles',
    year: '2024',
    title: 'Inroute — Vehicle Health Dashboard',
    description:
      'Customer-facing features from scratch: real-time vehicle parameters, predictive alerts, DTC fault codes, map tracking and historical charts. Built the design system and Storybook components behind it, partnering with product and design to ship accessible interfaces.',
    tools: ['React', 'TypeScript', 'Storybook', 'Material UI'],
  },
  {
    kind: 'Migration · Intangles',
    year: '2024',
    title: 'FOTA Code Management Dashboard',
    description:
      'Internal dashboard to track, update and edit firmware-over-the-air releases across  fleets of connected vehicles — migrated from Angular to React for performance and compatibility.',
    tools: ['React.js', 'Redux Toolkit', 'Redux Saga', 'Material UI'],
  },
  {
    kind: 'E-commerce · Seventh Triangle',
    year: '2023',
    title: 'V-Guard storefront revamp',
    description:
      "Complete frontend revamp of V-Guard's e-commerce storefront. Responsive, high-performance UI; owned code quality and on-time delivery in close collaboration with client stakeholders.",
    tools: ['Shopify (Liquid)', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    kind: 'Tooling · Claude Code skill',
    year: '2026',
    title: 'Dev-QA audit framework',
    description:
      'A Claude Code skill with 8 audit modes — Figma audit, v1→v2 parity, API checks, edge cases, code review and more — so a frontend change gets reviewed the same way every time.',
    tools: ['Claude Code', 'Playwright', 'Figma'],
  },
]

export type Credential = { mark: string; title: string; sub: string; href?: string }

export const about: {
  headline: string
  body: string
  credentials: Credential[]
} = {
  headline: 'Frontend-deep for four years. Now building the whole feature, API included.',
  body:
    'I started on storefronts and landing pages, moved into B2B telematics, and the last year has been full-stack: designing REST APIs, modelling data, and owning features from schema to screen. I care about state architecture, performance budgets, accessibility, and using AI tooling in a way that raises the quality bar instead of lowering it.',
  credentials: [
    { mark: 'DU', title: 'University of Delhi — B.Sc.', sub: 'Aug 2018 — May 2021' },
    {
      mark: 'A',
      title: 'Claude Code in Action — Anthropic',
      sub: 'Issued Mar 2026 · agentic coding, custom skills & workflows',
      href: 'https://verify.skilljar.com/c/kjkrq3maiaqe',
    },
    {
      mark: 'M',
      title: 'Forward Program — McKinsey.org',
      sub: 'Leadership, problem-solving & digital skills',
      href: 'https://www.credly.com/badges/f09d49a8-c972-4323-b910-52b0f7724d2c/linked_in_profile',
    },
  ],
}

export const navLinks = [
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]
