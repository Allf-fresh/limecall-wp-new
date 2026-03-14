import { site } from '../site.config';
import type { FaqItem, HowToStep } from './database.types';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
}

export function buildCanonical(path: string): string {
  const base = site.url;
  const clean = path.startsWith('/') ? path : `/${path}`;
  const url = `${base}${clean}`;
  return url.endsWith('/') ? url.slice(0, -1) : url;
}

// ── JSON-LD Generators ──

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishDate: string;
  modifiedDate: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    image: opts.image || `${site.url}/images/og-default.png`,
    datePublished: opts.publishDate,
    dateModified: opts.modifiedDate,
    author: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      logo: {
        '@type': 'ImageObject',
        url: `${site.url}/images/logo.png`,
      },
    },
  };
}

export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function howToSchema(opts: {
  title: string;
  description: string;
  steps: HowToStep[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.title,
    description: opts.description,
    step: opts.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
      ...(step.image ? { image: step.image } : {}),
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    logo: `${site.url}/images/logo.png`,
    sameAs: [
      ...(site.social.twitter ? [`https://twitter.com/${site.social.twitter}`] : []),
      ...(site.social.github ? [`https://github.com/${site.social.github}`] : []),
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: `${site.url}/contact`,
    },
  };
}
