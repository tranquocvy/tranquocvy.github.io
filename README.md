# Portfolio website

Personal portfolio for Tran Quoc Vy, built with [Astro](https://astro.build). Static output, no client framework.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Where things live

- `src/data/site.ts` — name, tagline, contact, toolkit
- `src/data/projects.ts` — every project, its role, contributions and PR evidence
- `src/pages/projects/ticket-box.astro` — the long-form case study
- `src/pages/projects/[slug].astro` — pages for the other projects

Every contribution claim in `projects.ts` was checked against `git blame` and merged PRs
(see `../CONTRIBUTIONS_AUDIT.md`). Keep it that way when editing.

## Deploy

Deployed to GitHub Pages (https://tranquocvy.github.io) by `.github/workflows/deploy.yml` on every push to `main`.
Any other static host also works:
build command `npm run build`, output directory `dist`.
