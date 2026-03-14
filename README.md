# astro-saas-starter

Full SaaS marketing site starter — pricing, features, compare pages, blog, legal pages. All config-driven.

Built with **Astro 5 + Tailwind 4 + Supabase**. Ready for Cloudflare Pages.

## Included pages

| Page | URL | Description |
|------|-----|-------------|
| **Homepage** | `/` | Hero + features grid + pricing preview + blog teaser |
| **Pricing** | `/pricing` | CSS billing toggle, plan cards, comparison table, FAQ |
| **Features** | `/features` | Feature overview grid |
| **Feature detail** | `/features/[slug]` | Individual feature pages |
| **Compare hub** | `/compare` | List all competitors |
| **vs-competitor** | `/compare/[slug]` | Comparison pages |
| **Blog index** | `/blog` | All posts + category nav |
| **Blog post** | `/blog/[category]/[slug]` | Full article with ToC, FAQ, related |
| **About** | `/about` | Company/team page |
| **Contact** | `/contact` | Contact form |
| **Privacy** | `/privacy` | GDPR-ready privacy policy |
| **Terms** | `/terms-of-service` | Terms of service |
| **Cookies** | `/cookie-policy` | Cookie policy |
| **404** | `/404` | Custom error page |
| **RSS** | `/feed.xml` | Blog RSS feed |

## Quick Start

```bash
# 1. Clone
git clone https://github.com/Allf-fresh/astro-saas-starter.git my-saas-site
cd my-saas-site

# 2. Install
npm install

# 3. Configure
cp .env.example .env
# Edit .env with your Supabase credentials

# 4. Edit site.config.ts with your brand + content

# 5. Run
npm run dev
```

## Configuration

All branding, navigation, pricing, and content is configured in `src/site.config.ts`.

```typescript
// src/site.config.ts
export const site = {
  name: 'My SaaS',
  tagline: 'The tagline for your product',
  url: 'https://example.com',
  // ... nav, cta, footer, analytics
};

export const plans = [ /* ... */ ];
export const competitors = [ /* ... */ ];
export const features = [ /* ... */ ];
```

See `docs/configuration.md` for full documentation of every field.

## Tech Stack

- **Framework**: [Astro 5](https://astro.build) (static output)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) (via @tailwindcss/vite)
- **Blog/CMS**: [Supabase](https://supabase.com) (queried at build time)
- **Hosting**: Cloudflare Pages (or any static host)
- **Analytics**: Cloudflare Web Analytics + PostHog (optional)

## Supabase Setup

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run `docs/supabase-schema.sql` in the SQL editor
3. Add your credentials to `.env`
4. The blog will auto-populate from the `content` table

## Deployment (Cloudflare Pages)

```bash
npm run build
# Deploy dist/ to Cloudflare Pages
# Or connect your repo for automatic deploys
```

Set these environment variables in Cloudflare Pages:
- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY`

## Part of the Astro Starter Family

- [astro-core-starter](https://github.com/Allf-fresh/astro-core-starter) — minimal engine, no SaaS
- **astro-saas-starter** — this repo — full SaaS marketing site
- [astro-review-starter](https://github.com/Allf-fresh/astro-review-starter) — review/affiliate sites

## License

MIT
