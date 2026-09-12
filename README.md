# Sahaciety Web

Public Sahaciety website foundation. Governance-led ecosystem for citizens, businesses and societies.

This repo is intentionally separate from `restate-agent`, which remains the WhatsApp real-estate agent.

## Run
npm install
npm run dev

The public website runs at `http://localhost:3000` during development. The homepage and route templates use typed static data in `data/site.ts` so they can later be replaced with Sahaciety Runtime API calls without changing the presentation layer.

## Routes

- `/` - public discovery homepage
- `/about`, `/services`, `/solutions`, `/partners`
- `/services/[category]`, `/service/[slug]`, `/solutions/[type]`
- `/knowledge`, `/knowledge/[slug]`, `/ask-sahaciety`
- `/become-a-partner`, `/contact`, `/login`
- `/sitemap.xml`, `/robots.txt`

## Deploy

This project is configured with `output: "export"` in `next.config.mjs`, so `npm run build` creates a static `out/` export for Vercel. The GitHub repository is `https://github.com/vyankateshc-cloud/sahaciety-web`.

For a new Vercel project, use the normal linking flow and verify the project name before deploying:

```text
npx vercel@latest link
npx vercel@latest project inspect --non-interactive
npm run build
npx vercel@latest --prod
```

The intended Vercel project is `sahaciety-web`. Do not link this repository to `restate-agent`.

## Architecture rule
The website is an experience layer. Do not create parallel customer, request, workflow, authentication, service-catalogue or governance engines here. Connect to Sahaciety Runtime APIs when ready.
