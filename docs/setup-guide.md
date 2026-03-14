# Setup Guide

## Prerequisites

- Node.js 22.12.0 or higher
- A Supabase account (free tier works)
- Git

## Step 1: Clone and Install

```bash
git clone https://github.com/Allf-fresh/astro-saas-starter.git my-project
cd my-project
npm install
```

## Step 2: Environment Variables

```bash
cp .env.example .env
```

Edit `.env`:
```env
PUBLIC_SUPABASE_URL=https://your-project.supabase.co
PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

You can find these in your Supabase project under **Settings > API**.

## Step 3: Configure Your Site

Edit `src/site.config.ts` with your brand details:

```typescript
export const site = {
  name: 'Acme SaaS',
  tagline: 'The best tool for your workflow',
  description: 'Acme SaaS helps teams move faster.',
  url: 'https://acme.com',
  // ...
};
```

See `docs/configuration.md` for all available options.

## Step 4: Set Up Supabase

1. Open your Supabase project SQL editor
2. Run the schema from `docs/supabase-schema.sql`
3. Add blog posts via the Supabase table editor or API

## Step 5: Run Locally

```bash
npm run dev
```

Open http://localhost:4321

## Step 6: Build

```bash
npm run build
```

The static site outputs to `dist/`.

## Step 7: Deploy

### Cloudflare Pages (recommended)

1. Connect your repo to Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `dist`
4. Add environment variables in the CF Pages dashboard

### Netlify

1. Connect your repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in Netlify settings

### Manual (any static host)

Upload the contents of `dist/` to your static host.

## Common Customizations

### Changing the accent color

The accent color (lime/green) is defined in `src/styles/global.css` under `@theme`. Change the `--color-lime-*` values to match your brand.

### Adding a new blog category

1. Add the category slug to `site.blog.categories` in `site.config.ts`
2. Create `src/pages/blog/[category]/index.astro`
3. Create `src/pages/blog/[category]/[slug].astro`

### Adding a new competitor comparison

Add the competitor to `competitors` in `site.config.ts`:
```typescript
{ slug: 'competitor-c', name: 'Competitor C', website: '...', tagline: '...' }
```

The compare page at `/compare/my-saas-vs-competitor-c` will be generated automatically.
