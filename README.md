# Arnold Sidiprasetija — Personal Site

My personal portfolio website, built to be fast, minimal, and modern.

## Stack (v2.0)

- [Next.js 14](https://nextjs.org/) — App Router, static site generation
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling with dark mode
- [Framer Motion](https://www.framer.com/motion/) — Scroll-triggered and micro animations
- [next-themes](https://github.com/pacocoursey/next-themes) — Dark / light mode toggle
- [Lucide React](https://lucide.dev/) — Icon library

## Project structure

```
$PROJECT_ROOT
├── app/              # Next.js App Router (layouts, pages, global CSS)
│   └── works/[id]/  # Dynamic project detail pages
├── components/       # React components (Hero, About, Projects, etc.)
├── lib/              # Data files (projects.js) and utilities
└── public/           # Static assets (images, icons)
```

## Versions

| Tag    | Description                                                       |
| ------ | ----------------------------------------------------------------- |
| `v1.0` | Original site — Next.js 12 Pages Router, Chakra UI, Three.js      |
| `v2.0` | Current site — Next.js 14 App Router, Tailwind CSS, Framer Motion |

## Running locally

```bash
npm install
npm run dev
```

## License

MIT License.
