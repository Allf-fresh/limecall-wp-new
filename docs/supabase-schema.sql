-- astro-saas-starter Supabase Schema
-- Run this in your Supabase SQL Editor

-- ── Content table (blog posts, guides, compare pages) ──────────────────────
CREATE TABLE IF NOT EXISTS public.content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  collection TEXT NOT NULL CHECK (collection IN ('blog', 'guides', 'compare', 'pages')),
  slug TEXT NOT NULL,
  title TEXT NOT NULL,
  meta_description TEXT DEFAULT '',
  body TEXT DEFAULT '',          -- markdown source
  body_html TEXT DEFAULT '',     -- rendered HTML
  category TEXT,                 -- e.g., 'how-to', 'news', 'guides'
  tags TEXT[] DEFAULT '{}',
  schema_type TEXT DEFAULT 'Article' CHECK (schema_type IN ('Article', 'HowTo', 'FAQPage', 'WebPage', 'Product', 'SoftwareApplication')),
  faq_items JSONB,               -- [{question: string, answer: string}]
  how_to_steps JSONB,            -- [{name: string, text: string, image?: string}]
  featured_image TEXT,
  author TEXT DEFAULT 'Team',
  publish_date DATE NOT NULL DEFAULT CURRENT_DATE,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  noindex BOOLEAN DEFAULT FALSE,
  wp_slug TEXT,                  -- legacy WordPress slug (for redirects)
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(collection, slug)
);

-- Index for fast slug lookups
CREATE INDEX IF NOT EXISTS idx_content_collection_slug ON public.content(collection, slug);
CREATE INDEX IF NOT EXISTS idx_content_status ON public.content(status);
CREATE INDEX IF NOT EXISTS idx_content_category ON public.content(category);
CREATE INDEX IF NOT EXISTS idx_content_publish_date ON public.content(publish_date DESC);

-- ── Leads table (email capture) ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads(created_at DESC);

-- ── Row Level Security ─────────────────────────────────────────────────────
ALTER TABLE public.content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow public (anon) reads for published, non-noindex content
CREATE POLICY "Public can read published content"
  ON public.content FOR SELECT
  USING (status = 'published' AND noindex = FALSE);

-- Allow inserting leads with anon key (email capture form)
CREATE POLICY "Anyone can insert a lead"
  ON public.leads FOR INSERT
  WITH CHECK (TRUE);

-- ── Sample data ────────────────────────────────────────────────────────────
INSERT INTO public.content (collection, slug, title, meta_description, body_html, category, status, publish_date, author)
VALUES
  ('blog', 'getting-started', 'Getting Started with My SaaS', 'Learn how to get started with My SaaS in under 5 minutes.', '<h2>Introduction</h2><p>Welcome to My SaaS! This guide will help you get started.</p>', 'how-to', 'published', CURRENT_DATE, 'Team'),
  ('blog', 'why-we-built-this', 'Why We Built My SaaS', 'The story behind My SaaS and the problem we set out to solve.', '<h2>The Problem</h2><p>We built My SaaS because existing tools were too complex.</p>', 'news', 'published', CURRENT_DATE - INTERVAL '7 days', 'Team')
ON CONFLICT (collection, slug) DO NOTHING;
