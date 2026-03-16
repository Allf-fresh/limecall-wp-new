// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.limecall.com',
  // 'never' ensures sitemap URLs match hardcoded canonical tags (no trailing slash).
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/admin/'),
      serialize: (item) => {
        const url = item.url;
        // Homepage
        if (url === 'https://www.limecall.com/' || url === 'https://www.limecall.com') {
          return { ...item, changefreq: 'weekly', priority: 1.0 };
        }
        // Core pages
        if (/\/(pricing|features)\/?$/.test(url) || /\/features\//.test(url)) {
          return { ...item, changefreq: 'weekly', priority: 0.9 };
        }
        // Compare pages
        if (/\/compare\//.test(url)) {
          return { ...item, changefreq: 'monthly', priority: 0.8 };
        }
        // Blog category indexes
        if (/\/blog\/(how-to|news|guides)\/?$/.test(url)) {
          return { ...item, changefreq: 'weekly', priority: 0.8 };
        }
        // Blog posts
        if (/\/blog\//.test(url)) {
          return { ...item, changefreq: 'monthly', priority: 0.7 };
        }
        // Policy/legal pages
        if (/\/(privacy|terms-of-service|cookie-policy)\/?$/.test(url)) {
          return { ...item, changefreq: 'yearly', priority: 0.3 };
        }
        // Default
        return { ...item, changefreq: 'monthly', priority: 0.6 };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: {
    defaultStrategy: 'hover',
  },
});
