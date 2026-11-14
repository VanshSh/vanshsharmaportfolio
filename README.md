<div align="center">

![Logo](./public/vanshsharmaLogo.png)

# Vansh Sharma — Portfolio ([live](https://vanshsharma.vercel.app/))

</div>

Single-page portfolio built with **React 19 + TypeScript + Vite**, animated with **Motion** (Framer Motion) and **Lenis** smooth scrolling. Dark and light themes, fully responsive.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → ./build
npm run preview    # serve the production build
```

## Update content

Everything on the page comes from one typed file: [`src/data/site.ts`](./src/data/site.ts) — profile, hero stats, skills, experience, projects, about, contact. Drop a new PDF into `public/resume/` and update `profile.resumeUrl`.

Bullets support `**bold**` which renders in the accent colour.

## Structure

```
src/
  data/site.ts          all content
  styles/global.css     design tokens (both themes), base, buttons
  hooks/                useTheme (view-transition toggle), useLenis, useReducedMotion
  components/
    ui/                 Reveal, MagneticButton, TiltCard, CursorGlow, RichText
    Nav | Hero | Marquee | Skills | Experience | Projects | About | Contact
```

## Design notes

- Palette derived from [this Coolors set](https://coolors.co/cc444b-da5552-df7373-e39695-e4b1ab). Each theme uses the member that passes WCAG AA for text on its background: `#df7373` on dark (6.1:1), `#b33a40` on light (5.5:1); `#cc444b` for fills.
- Type: Bricolage Grotesque (display) + Instrument Sans (body), via Google Fonts.
- Motion respects `prefers-reduced-motion`; smooth scroll, tilt and cursor glow are disabled on touch / reduced-motion.

Deployed on Vercel (`vercel.json` points the output to `build/`).
