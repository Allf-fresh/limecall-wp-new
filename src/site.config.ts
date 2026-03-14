// site.config.ts — Edit this file to configure your site

export const site = {
  name: 'My SaaS',
  tagline: 'The tagline for your product',
  description: 'A brief description of your product for meta tags.',
  url: 'https://example.com',

  colors: {
    accent: 'lime',
    accentHex: '#a3e635',
  },

  nav: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    {
      label: 'Resources',
      href: '/blog',
      children: [
        { href: '/blog', label: 'Blog', desc: 'News and guides' },
        { href: '/compare', label: 'Comparisons', desc: 'How we compare' },
      ],
    },
  ] as NavItem[],

  cta: {
    text: 'Get Started',
    href: '/pricing',
    subtext: 'No credit card required',
    login: { text: 'Log In', href: '/login' },
  },

  footer: {
    tagline: 'Simple. Reliable. No lock-in.',
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'Features', href: '/features' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'Compare', href: '/compare' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Blog', href: '/blog' },
          { label: 'Guides', href: '/guides' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ] as FooterColumn[],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
    ],
    copyright: 'My SaaS',
  },

  social: {
    twitter: '',
    github: '',
  },

  blog: {
    supabaseTable: 'content',
    supabaseCollection: 'blog',
    categories: ['how-to', 'news', 'guides'] as string[],
  },

  analytics: {
    cloudflareBeaconToken: '',
    posthogKey: '',
    posthogHost: 'https://us.i.posthog.com',
  },
};

// Pricing plans
export const plans = [
  {
    name: 'Starter',
    slug: 'starter',
    subtitle: 'For individuals',
    monthly: 9,
    annual: 7,
    annualTotal: 84,
    features: [
      'Feature one',
      'Feature two',
      'Feature three',
      'Email support',
    ],
    notIncluded: ['Advanced feature', 'Priority support'],
    cta: { text: 'Get Started', href: '/checkout?plan=starter' },
    highlighted: false,
  },
  {
    name: 'Pro',
    slug: 'pro',
    subtitle: 'For professionals',
    monthly: 29,
    annual: 24,
    annualTotal: 288,
    features: [
      'Everything in Starter',
      'Advanced feature',
      'Priority support',
      'API access',
    ],
    notIncluded: [],
    cta: { text: 'Get Started', href: '/checkout?plan=pro' },
    highlighted: true,
  },
];

// Competitor data for compare pages
export const competitors = [
  {
    slug: 'competitor-a',
    name: 'Competitor A',
    website: 'https://competitora.com',
    tagline: 'Their tagline',
  },
  {
    slug: 'competitor-b',
    name: 'Competitor B',
    website: 'https://competitorb.com',
    tagline: 'Their tagline',
  },
];

// Feature list for features page
export const features = [
  {
    slug: 'feature-one',
    name: 'Feature One',
    icon: '🔒',
    tagline: 'Short feature tagline',
    description: 'Longer description of what this feature does and why it matters.',
    includedIn: ['starter', 'pro'],
  },
  {
    slug: 'feature-two',
    name: 'Feature Two',
    icon: '⚡',
    tagline: 'Short feature tagline',
    description: 'Longer description of what this feature does and why it matters.',
    includedIn: ['pro'],
  },
];

export type NavItem = {
  label: string;
  href?: string;
  children?: { href: string; label: string; desc?: string }[];
};

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export type Plan = typeof plans[number];
export type Competitor = typeof competitors[number];
export type Feature = typeof features[number];
