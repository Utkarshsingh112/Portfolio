# Utkarsh Singh — Portfolio

A bold, creative, frontend-focused portfolio built with **React 19 + Tailwind CSS + shadcn/ui**.

## Stack
- **React 19** (Vite)
- **Tailwind CSS** (warm cream + ink + coral/blue/mustard/sage accents)
- **Fraunces** (serif) + **Inter** (sans) + **JetBrains Mono** via Google Fonts
- **lucide-react** for icons
- **sonner** for toasts
- **shadcn/ui** primitives

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
# → http://localhost:3000
```

## Build for production

```bash
npm run build
```

## Sections

1. **Hero** — massive italic serif "hi, i'm utkarsh." + status pill + stats grid
2. **Marquee** — dark ink rotating word strip
3. **About** — offset portrait + bold typography bio
4. **Projects** — 4 zigzag cards (LMS Pro · SwapWise · DevConnect · Portfolio)
5. **Skills** — 4-column toolbox grid
6. **Experience** — dark timeline (Webonus · Upflairs · SingleTap · AIET)
7. **Currently (Bento)** — bento grid with hackathon wins, current build, GitHub, live local time, learning, now playing, availability CTA
8. **Contact** — form (saves to localStorage as MOCK)
9. **Footer**

## File structure

```
src/
├── App.jsx
├── App.css
├── index.css            ← design tokens & animations
├── mock.js              ← ⭐ all your data lives here
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Marquee.jsx
    ├── About.jsx
    ├── Projects.jsx
    ├── Skills.jsx
    ├── Experience.jsx
    ├── Bento.jsx        ← "currently" bento section
    ├── Contact.jsx
    ├── Footer.jsx
    └── ui/              ← shadcn primitives
```

## Customize

Almost everything you'll want to change lives in **`src/mock.js`**:

- `personalInfo` — name, role, bio, email, socials, resume URL
- `stats` — the 4 cards under the hero
- `skills` — toolbox category cards
- `projects` — project cards (image, tech, accent color)
- `experience` — timeline entries
- `bento` — achievements, currently building, learning, github, now playing, availability

### Color tokens (in `src/index.css`)

```css
--bg:      #f5f1e8   /* warm cream */
--ink:     #1a1a1a   /* near-black */
--coral:   #e85d4e   /* primary accent */
--blue:    #2c4ee8
--mustard: #e8a93c
--sage:    #5b7b5a
```

## Notes

- **Contact form is MOCKED** — submissions save to browser localStorage under `utkarsh_messages`. To wire a real backend, replace the `setTimeout` block in `Contact.jsx` with a `fetch(POST)` call.
- **Résumé** button points to a hosted PDF in `mock.js → personalInfo.resumeUrl`.
- Project / avatar images are hosted on Pexels/Unsplash — swap with your own screenshots.

---

Built with too much chai.
