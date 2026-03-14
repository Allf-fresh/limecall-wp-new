# Pricing Setup

## Configuring Plans

Edit the `plans` array in `src/site.config.ts`:

```typescript
export const plans = [
  {
    name: 'Starter',
    slug: 'starter',
    subtitle: 'For individuals',
    monthly: 9,
    annual: 7,
    annualTotal: 84,
    features: [
      'Up to 5 projects',
      'Email support',
      '10 GB storage',
    ],
    notIncluded: ['Team features', 'Priority support'],
    cta: { text: 'Get Started', href: '/checkout?plan=starter' },
    highlighted: false,
  },
  {
    name: 'Pro',
    slug: 'pro',
    subtitle: 'For teams',
    monthly: 29,
    annual: 24,
    annualTotal: 288,
    features: [
      'Everything in Starter',
      'Unlimited projects',
      'Team collaboration',
      'Priority support',
      '100 GB storage',
    ],
    notIncluded: [],
    cta: { text: 'Get Pro', href: '/checkout?plan=pro' },
    highlighted: true,
  },
];
```

## Connecting a Payment Provider

### Stripe

1. Install Stripe: `npm install stripe`
2. Create a checkout page or use Stripe Payment Links
3. Update the `cta.href` in each plan to point to your Stripe checkout URL

```typescript
cta: { text: 'Get Started', href: 'https://buy.stripe.com/your-link' }
```

### LemonSqueezy

Similar to Stripe — use LemonSqueezy checkout URLs directly.

### Paddle

More complex setup. Paddle uses an overlay checkout:
1. Load `cdn.paddle.com/paddle/v2/paddle.js`
2. Initialize with your seller ID
3. Use `data-paddle-price-id` attributes on checkout buttons

## CSS Billing Toggle

The pricing page uses a CSS-only toggle (no JavaScript required):

```html
<input type="checkbox" id="billing-toggle" class="sr-only" />
<!-- unchecked = annual (default), checked = monthly -->
```

The CSS in `pricing.astro` handles the show/hide logic using the `:checked` pseudo-selector. This ensures the toggle works even with JavaScript disabled.

**To change the default to monthly**, swap the `#monthly-plans` and `#annual-plans` display values in the `<style>` block.

## Annual Discount Best Practices

- Defaulting to annual increases annual plan adoption by 19-35%
- Show the monthly equivalent with "Billed annually" note
- Highlight total savings (e.g., "Save $60/year")
- Add a "2 months free" badge to the annual toggle label
