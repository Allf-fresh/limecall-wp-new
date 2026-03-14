import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';

const isConfigured = supabaseUrl.length > 0 && supabaseAnonKey.length > 0;

export const supabase = isConfigured
  ? createClient<Database>(supabaseUrl, supabaseAnonKey)
  : null;

// ── Content queries (used at build time) ──

export async function getPublishedContent(collection: string) {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from('content')
    .select('*')
    .eq('collection', collection)
    .eq('status', 'published')
    .eq('noindex', false)
    .order('publish_date', { ascending: false });

  if (error) { console.warn(`[supabase] ${error.message}`); return []; }
  return data ?? [];
}

export async function getContentBySlug(collection: string, slug: string) {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('content')
    .select('*')
    .eq('collection', collection)
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error) { console.warn(`[supabase] ${error.message}`); return null; }
  return data;
}

export async function getContentByCategory(collection: string, category: string) {
  if (!supabase) return [];

  const { data, error } = await supabase
    .from('content')
    .select('*')
    .eq('collection', collection)
    .eq('category', category)
    .eq('status', 'published')
    .eq('noindex', false)
    .order('publish_date', { ascending: false });

  if (error) { console.warn(`[supabase] ${error.message}`); return []; }
  return data ?? [];
}

export async function getRelatedPosts(
  collection: string,
  category: string | null,
  excludeSlug: string,
  limit = 3
) {
  if (!supabase) return [];

  // First try same category
  if (category) {
    const { data } = await supabase
      .from('content')
      .select('*')
      .eq('collection', collection)
      .eq('category', category)
      .eq('status', 'published')
      .eq('noindex', false)
      .neq('slug', excludeSlug)
      .order('publish_date', { ascending: false })
      .limit(limit);

    if (data && data.length >= limit) return data;

    // Fill remaining with other categories
    const existing = data || [];
    const existingSlugs = [excludeSlug, ...existing.map(p => p.slug)];
    const remaining = limit - existing.length;

    if (remaining > 0) {
      const { data: more } = await supabase
        .from('content')
        .select('*')
        .eq('collection', collection)
        .eq('status', 'published')
        .eq('noindex', false)
        .not('slug', 'in', `(${existingSlugs.map(s => `"${s}"`).join(',')})`)
        .order('publish_date', { ascending: false })
        .limit(remaining);

      return [...existing, ...(more || [])];
    }
    return existing;
  }

  // No category — just get recent posts
  const { data } = await supabase
    .from('content')
    .select('*')
    .eq('collection', collection)
    .eq('status', 'published')
    .eq('noindex', false)
    .neq('slug', excludeSlug)
    .order('publish_date', { ascending: false })
    .limit(limit);

  return data || [];
}
