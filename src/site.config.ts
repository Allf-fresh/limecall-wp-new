// site.config.ts — LimeCall configuration

export const site = {
  name: 'LimeCall',
  tagline: 'Convert website visitors into sales calls Instantly',
  description: "LimeCall's #1 callback automation platform instantly connects site visitors over phone call to the right sales rep, and increases your site conversions by upto 300%.",
  url: 'https://www.limecall.com',

  colors: {
    accent: 'lime',
    accentHex: '#a3e635',
  },

  nav: [
    {
      label: 'Products',
      href: '/features/',
      children: [
        { href: '/click-2-call/', label: 'Click-to-Call', desc: 'Connect visitors to your team in 28 seconds' },
        { href: '/speed-to-lead/', label: 'Speed to Lead', desc: 'Respond to leads in under 28 seconds' },
        { href: '/call-tracking/', label: 'Call Tracking', desc: 'Know which campaigns drive phone calls' },
        { href: '/lead-routing-software/', label: 'Lead Routing', desc: 'Route every lead to the right rep automatically' },
        { href: '/business-texting/', label: 'Business Texting', desc: 'Two-way SMS for sales and support' },
        { href: '/virtual-numbers/', label: 'Virtual Numbers', desc: 'Local numbers in 40+ countries' },
        { href: '/call-scheduling-2/', label: 'Call Scheduling', desc: 'Book calls that actually happen' },
        { href: '/integrations/', label: 'Integrations', desc: 'CRM, Slack, Zapier and 50+ more' },
      ],
    },
    {
      label: 'Solutions',
      href: '/use-cases/',
      children: [
        { href: '/for-sales-teams/', label: 'For Sales Teams', desc: 'Close more deals with faster response' },
        { href: '/for-marketing-teams/', label: 'For Marketing Teams', desc: 'Prove ROI from every campaign' },
        { href: '/limecall-for-real-estate/', label: 'Real Estate', desc: 'Convert property enquiries instantly' },
        { href: '/healthcare-lead-generation/', label: 'Healthcare', desc: 'Book more patient appointments' },
        { href: '/limecall-for-ecommerce-and-retail-2/', label: 'E-Commerce', desc: 'Recover carts and close hesitant shoppers' },
        { href: '/limecall-for-finance-insurance/', label: 'Finance & Insurance', desc: 'Call leads while intent is highest' },
        { href: '/lead-generation-for-lawyers/', label: 'Legal', desc: 'Immediate callbacks for high-value cases' },
        { href: '/limecall-for-travel-tourism-aviation/', label: 'Travel & Tourism', desc: 'Convert booking enquiries into sales' },
      ],
    },
    { label: 'Why LimeCall', href: '/why-limecall/' },
    { label: 'Pricing', href: '/pricing/' },
    {
      label: 'Resources',
      href: '/post/',
      children: [
        { href: '/post/', label: 'Blog', desc: 'Tips, guides and news' },
        { href: '/how-it-works/', label: 'How It Works', desc: 'See the platform in action' },
        { href: '/customers/', label: 'Customer Stories', desc: '10,000+ teams trust LimeCall' },
        { href: '/compare/', label: 'Compare', desc: 'LimeCall vs the competition' },
        { href: '/faq/', label: 'FAQ', desc: 'Common questions answered' },
        { href: '/glossary/', label: 'Glossary', desc: 'Sales and call tracking terms' },
      ],
    },
  ] as NavItem[],

  cta: {
    text: 'TRY FOR FREE',
    href: '/signup',
    subtext: 'No credit card required',
    login: { text: 'Sign in', href: 'https://app.limecall.com/login' },
  },

  footer: {
    tagline: 'Convert website visitors into sales calls Instantly.',
    columns: [
      {
        title: 'Products',
        links: [
          { label: 'Click2Call', href: '/click-2-call' },
          { label: 'Lead Distribution', href: '/lead-distribution' },
          { label: 'Schedule Callbacks', href: '/conversation-scheduling' },
          { label: 'Web to Text', href: '/business-texting' },
          { label: 'Virtual Numbers', href: '/virtual-numbers' },
          { label: 'Call Tracking', href: '/call-tracking' },
          { label: 'Features', href: '/features' },
          { label: 'Integrations', href: '/integrations' },
        ],
      },
      {
        title: 'Solutions',
        links: [
          { label: 'For Sales Teams', href: '/for-sales-teams' },
          { label: 'For Marketing Teams', href: '/for-marketing-teams' },
          { label: 'Real Estate', href: '/limecall-for-real-estate' },
          { label: 'Travel & Tourism', href: '/limecall-for-travel-tourism-aviation' },
          { label: 'Finance & Insurance', href: '/limecall-for-finance-insurance' },
          { label: 'E-commerce', href: '/limecall-for-ecommerce-and-retail-2' },
          { label: 'Healthcare', href: '/healthcare-lead-generation' },
          { label: 'Education', href: '/lead-generation-for-education' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About Us', href: '/about-us' },
          { label: 'Why LimeCall', href: '/why-limecall' },
          { label: 'Customers', href: '/customers' },
          { label: 'Security', href: '/security' },
          { label: 'Partnership', href: '/partnership' },
          { label: 'Affiliates', href: '/affiliates' },
          { label: 'Brand Assets', href: '/brand-assets' },
          { label: 'Contact Us', href: '/contact-us' },
        ],
      },
      {
        title: 'Resources',
        links: [
          { label: 'Blog', href: '/post' },
          { label: 'How It Works', href: '/how-it-works' },
          { label: 'Pricing', href: '/pricing' },
          { label: 'Compare', href: '/compare' },
          { label: 'FAQ', href: '/faq' },
          { label: 'Glossary', href: '/glossary' },
          { label: 'Free Tools', href: '/free-tools' },
          { label: 'GDPR', href: '/gdpr' },
        ],
      },
    ] as FooterColumn[],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Refund Policy', href: '/refund-policy' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'GDPR', href: '/gdpr' },
    ],
    copyright: 'LimeCall',
  },

  social: {
    twitter: 'limecall',
    github: '',
    linkedin: 'https://www.linkedin.com/company/limecall',
    facebook: 'https://www.facebook.com/limecall',
    youtube: 'https://www.youtube.com/c/LimeCall',
  },

  blog: {
    supabaseTable: 'content',
    supabaseCollection: 'blog',
    categories: ['how-to', 'news', 'guides', 'sales', 'marketing'] as string[],
  },

  analytics: {
    cloudflareBeaconToken: '',
    posthogKey: '',
    posthogHost: 'https://us.i.posthog.com',
  },
};

// Pricing plans — LimeCall actual pricing
export const plans = [
  {
    name: 'Basic',
    slug: 'basic',
    subtitle: 'For small teams getting started',
    monthly: 0,
    annual: 0,
    annualTotal: 0,
    features: [
      '1 Widget',
      '30 calls / month',
      'Click to Call',
      'Schedule Callbacks',
      'Email support',
    ],
    notIncluded: ['Lead Distribution', 'Virtual Numbers', 'SMS', 'Priority support'],
    cta: { text: 'Start Free', href: '/signup' },
    highlighted: false,
  },
  {
    name: 'Starter',
    slug: 'starter',
    subtitle: 'For growing sales teams',
    monthly: 29,
    annual: 24,
    annualTotal: 288,
    features: [
      '3 Widgets',
      '100 calls / month',
      'Click to Call',
      'Schedule Callbacks',
      'Lead Distribution',
      'SMS notifications',
      'Priority email support',
    ],
    notIncluded: ['Virtual Numbers', 'API access'],
    cta: { text: 'Start Free Trial', href: '/signup' },
    highlighted: false,
  },
  {
    name: 'Pro',
    slug: 'pro',
    subtitle: 'For high-volume teams',
    monthly: 99,
    annual: 82,
    annualTotal: 984,
    features: [
      'Unlimited Widgets',
      '500 calls / month',
      'All Starter features',
      'Virtual Numbers',
      'Web to Text',
      'API access',
      'Priority support',
      'Custom integrations',
    ],
    notIncluded: [],
    cta: { text: 'Start Free Trial', href: '/signup' },
    highlighted: true,
  },
];

// Competitor data for compare pages
export const competitors = [
  {
    slug: 'callpage',
    name: 'CallPage',
    website: 'https://callpage.io',
    tagline: 'Callback widget for websites',
  },
  {
    slug: 'callingly',
    name: 'Callingly',
    website: 'https://callingly.com',
    tagline: 'Instant lead calling automation',
  },
  {
    slug: 'responseiq',
    name: 'ResponseiQ',
    website: 'https://responseiq.com',
    tagline: 'Intelligent callback software',
  },
];

// Feature list — LimeCall actual features
export const features = [
  {
    slug: 'click-2-call',
    name: 'Click2Call',
    icon: '📞',
    tagline: 'One-click connection to your sales team',
    description: 'Let website visitors connect with your sales team instantly with a single click. No hold times, no friction — just conversations that convert.',
    includedIn: ['basic', 'starter', 'pro'],
  },
  {
    slug: 'lead-distribution',
    name: 'Lead Distribution',
    icon: '🔀',
    tagline: 'Route every lead to the right rep automatically',
    description: 'Automatically distribute inbound leads to the right sales rep based on skills, availability, round-robin, or custom rules.',
    includedIn: ['starter', 'pro'],
  },
  {
    slug: 'conversation-scheduling',
    name: 'Schedule Callbacks',
    icon: '📅',
    tagline: 'Let prospects book calls at their convenience',
    description: 'Allow website visitors to schedule a callback at a time that suits them. Reduce no-shows and increase conversion rates.',
    includedIn: ['basic', 'starter', 'pro'],
  },
  {
    slug: 'business-texting',
    name: 'Web to Text',
    icon: '💬',
    tagline: 'SMS conversations from your website',
    description: 'Convert website visitors into text conversations. Send follow-up SMS, automate responses, and never miss a lead.',
    includedIn: ['starter', 'pro'],
  },
  {
    slug: 'virtual-numbers',
    name: 'Virtual Numbers',
    icon: '🌍',
    tagline: 'Local presence in 50+ countries',
    description: 'Get local virtual phone numbers in 50+ countries. Build trust with local numbers while managing everything from one platform.',
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
