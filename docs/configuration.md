# Configuration Reference

All configuration lives in `src/site.config.ts`.

## `site` object

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Your product/brand name (used throughout the site) |
| `tagline` | string | Short tagline shown in the hero section |
| `description` | string | Meta description for the homepage |
| `url` | string | Your production URL (no trailing slash) |
| `colors.accent` | string | Tailwind color name (default: `lime`) |
| `colors.accentHex` | string | Hex color for the accent |

## `site.nav`

Array of navigation items. Each item can be a simple link or have children (dropdown):

```typescript
nav: [
  { label: 'Features', href: '/features' },
  {
    label: 'Resources',
    href: '/blog',
    children: [
      { href: '/blog', label: 'Blog', desc: 'Optional description' },
    ],
  },
]
```

## `site.cta`

Controls the primary call-to-action across the site:

```typescript
cta: {
  text: 'Get Started',
  href: '/pricing',
  subtext: 'No credit card required',
  login: { text: 'Log In', href: '/login' },
}
```

## `site.footer`

```typescript
footer: {
  tagline: 'Simple. Reliable. No lock-in.',
  columns: [
    {
      title: 'Product',
      links: [{ label: 'Features', href: '/features' }],
    },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  copyright: 'My SaaS', // shown as "© 2026 My SaaS. All rights reserved."
}
```

## `site.social`

```typescript
social: {
  twitter: 'yourhandle', // without @
  github: 'yourorg',
}
```

## `site.blog`

```typescript
blog: {
  supabaseTable: 'content',     // Supabase table name
  supabaseCollection: 'blog',   // collection field value
  categories: ['how-to', 'news', 'guides'],  // your blog categories
}
```

## `site.analytics`

```typescript
analytics: {
  cloudflareBeaconToken: 'your-token', // leave empty to disable
  posthogKey: 'phc_...',               // leave empty to disable
  posthogHost: 'https://us.i.posthog.com',
}
```

## `plans` array

```typescript
plans: [
  {
    name: 'Starter',
    slug: 'starter',         // used in checkout URLs
    subtitle: 'For individuals',
    monthly: 9,              // monthly price in USD
    annual: 7,               // annual price per month in USD
    annualTotal: 84,         // total billed annually
    features: ['Feature one', 'Feature two'],
    notIncluded: ['Pro feature'], // shown crossed out
    cta: { text: 'Get Started', href: '/checkout?plan=starter' },
    highlighted: false,      // true = "Most Popular" badge
  },
]
```

## `competitors` array

```typescript
competitors: [
  {
    slug: 'competitor-a',
    name: 'Competitor A',
    website: 'https://competitora.com',
    tagline: 'Their tagline',
  },
]
```

The compare page URL is auto-generated as:
`/compare/[your-name-lowercase]-vs-[competitor-slug]`

## `features` array

```typescript
features: [
  {
    slug: 'feature-one',    // URL: /features/feature-one
    name: 'Feature One',
    icon: '🔒',
    tagline: 'Short tagline',
    description: 'Longer description for the feature page.',
    includedIn: ['starter', 'pro'],  // plan slugs
  },
]
```
