# Compare Pages

Compare pages help you rank for "[your product] vs [competitor]" search queries, which convert very well.

## Adding Competitors

Edit `competitors` in `src/site.config.ts`:

```typescript
export const competitors = [
  {
    slug: 'acme-corp',
    name: 'Acme Corp',
    website: 'https://acme.com',
    tagline: 'The industry standard',
  },
];
```

This automatically generates:
- A card on `/compare` linking to the comparison page
- A full comparison page at `/compare/[your-name]-vs-acme-corp`

## Customizing Comparison Rows

The comparison rows in `src/pages/compare/[slug].astro` are auto-generated from your `features` array. To customize:

```typescript
// In [slug].astro
const compareRows = [
  { feature: 'Free trial', yours: '14 days', theirs: 'None' },
  { feature: 'API access', yours: true, theirs: false },
  { feature: 'SSO / SAML', yours: true, theirs: 'Enterprise only' },
  { feature: 'Data export', yours: true, theirs: false },
  { feature: 'Cancel anytime', yours: true, theirs: false },
  { feature: 'Pricing starts at', yours: '$9/mo', theirs: '$49/mo' },
];
```

## SEO Best Practices for Compare Pages

1. **Title tag**: `[Your Product] vs [Competitor] (2026): Detailed Comparison`
2. **H1**: Use the exact query format people search for
3. **Include**: An honest comparison table (not just "we win everything")
4. **Include**: A clear verdict explaining when to choose each option
5. **Include**: A FAQ section with common objections
6. **Backlinks**: These pages naturally attract links from review sites

## Adding Competitor-Specific Content

For detailed comparison pages, consider adding competitor-specific data. You can create per-competitor content objects:

```typescript
// In site.config.ts or a separate file
export const competitorDetails = {
  'acme-corp': {
    pros: ['Well-established brand', 'Large feature set'],
    cons: ['Expensive', 'Complex setup', '2-year contracts'],
    pricing: 'Starts at $49/mo (annual only)',
    verdict: 'Good for enterprises. Overkill for small teams.',
  },
};
```

Then import and use in the compare page template.
