import type { APIRoute } from 'astro';
import { getPublishedContent } from '../lib/supabase';
import { site } from '../site.config';

const SITE = site.url;

export const GET: APIRoute = async () => {
  const posts = await getPublishedContent('blog');

  const items = posts
    .slice(0, 50)
    .map((post) => {
      const path = post.category
        ? `/blog/${post.category}/${post.slug}`
        : `/blog/${post.slug}`;
      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE}${path}</link>
      <guid isPermaLink="true">${SITE}${path}</guid>
      <description><![CDATA[${post.meta_description || ''}]]></description>
      <pubDate>${new Date(post.publish_date).toUTCString()}</pubDate>${post.category ? `\n      <category>${post.category}</category>` : ''}
    </item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${site.name} Blog</title>
    <link>${SITE}/blog</link>
    <description>Guides, tips, and news from ${site.name}.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
