# Harshavardan Naidu — Portfolio

Modern backend engineer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

This project uses **Next.js**, not Vite. After migrating, update Vercel once:

1. **Project Settings → General → Framework Preset** → **Next.js**
2. **Output Directory** → leave **empty** (do not use `dist`)
3. **Build Command** → `npm run build` (default for Next.js)
4. **Install Command** → `npm install`

`vercel.json` in the repo sets `"framework": "nextjs"` to help auto-detect.

Regenerate the lockfile locally after pulling, then commit it:

```bash
npm install
git add package-lock.json
git commit -m "chore: regenerate lockfile for Next.js"
git push
```

## Content

Edit copy and project data in `lib/data/portfolio.ts`.
