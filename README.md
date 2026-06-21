# Lauren John S. Angeles — Creative Portfolio

Live site: [lauren-angeles-portfolio.vercel.app](https://lauren-angeles-portfolio.vercel.app)

## Structure

- `portfolio/` — Next.js app (Vercel **Root Directory** must be `portfolio`)
- Root `package.json` — convenience scripts that delegate to `portfolio/`

## Local development

```bash
npm run dev
```

## Deploy

**With Git connected (recommended):** push to `main` — Vercel deploys automatically.

**Manual CLI:**

```bash
cd portfolio
npx vercel deploy --prod
```

## Resume updates

Replace `portfolio/public/resume.pdf`, commit, and push (or redeploy via CLI).
