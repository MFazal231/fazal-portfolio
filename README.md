# Mohammad Fazal - Portfolio

Personal portfolio site built to showcase my projects, skills, and journey as a full-stack developer and founder.

**Live at [mfazal.tech](https://mfazal.tech)**

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for tooling and dev server
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://motion.dev/) for animations

## Features

- Responsive, single-page layout with dark/light theme toggle
- Scroll-based animations: staggered reveals, 3D tilt cards, animated count-up stats, sliding nav indicator, and a scroll-progress bar
- Sections covering skills, real projects (with live/GitHub links), experience, competitive programming, entrepreneurship, education, a learning-journey timeline, and a validated contact form
- Downloadable resume

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5174](http://localhost:5174).

### Build

```bash
npm run build
```

## Project Structure

```
src/
  components/   UI components, one per section (Hero, Projects, Timeline, etc.)
  context/      Theme (dark/light) context
  data/         Portfolio content (profile, skills, projects, experience, timeline)
  App.tsx       Section composition
  main.tsx      Entry point
```

Content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts) — update it to change any text, links, or listed projects.

## Contact

- Email: [fazalmohammad231@gmail.com](mailto:fazalmohammad231@gmail.com)
- GitHub: [@MFazal231](https://github.com/MFazal231)
- LinkedIn: [mohammad-fazal](https://www.linkedin.com/in/mohammad-fazal/)
