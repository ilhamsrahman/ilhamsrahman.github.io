# personal-web

My personal website, built with Next.js 14 + Tailwind CSS and deployed to GitHub Pages.

## Run it locally

Requirements: [Node.js](https://nodejs.org) 18 or newer (20 LTS recommended) and Git.

```bash
npm install      # first time, or after package.json changes
npm run dev      # start the dev server
```

Open http://localhost:3000. Edits to files in `app/` and `components/` reload automatically.
Stop the server with `Ctrl + C`.

## Build the production version

```bash
npm run build    # outputs the static site to ./out
npx serve out    # optional: preview the built site at http://localhost:3000
```

## Deploy

Pushing to `main` triggers `.github/workflows/nextjs.yml`, which builds the site and publishes it to GitHub Pages.

## Blog posts from Medium

The Blog page shows posts from https://medium.com/@ilham.suryawan automatically.

- `scripts/fetch-medium.mjs` downloads the Medium feed into `data/medium-posts.json`.
- It runs before every `npm run dev` / `npm run build` (you can also run `npm run fetch-posts`).
- GitHub rebuilds the site every day at 09:00 HK time, so new posts go live within a day.
  To publish one right away: GitHub repo -> Actions -> "Deploy Next.js site to Pages" -> Run workflow.

## Where things are

| What                    | File                                   |
| ----------------------- | -------------------------------------- |
| Home page sections      | `app/(default)/page.tsx`, `components/` |
| Intro / photo           | `components/hero.tsx`                  |
| Education page          | `app/(auth)/education/page.tsx`        |
| Blog page               | `app/(auth)/blog/page.tsx`             |
| Top navigation          | `components/ui/header.tsx`, `components/ui/mobile-menu.tsx` |
| Footer                  | `components/ui/footer.tsx`             |
| Colours / fonts         | `tailwind.config.js`, `app/css/`       |
| Images                  | `public/images/`                       |
