export interface Database {
  public: {
    Tables: {
      content: {
        Row: ContentRow;
        Insert: Omit<ContentRow, 'id' | 'created_at'>;
        Update: Partial<Omit<ContentRow, 'id'>>;
      };
      redirects: {
        Row: RedirectRow;
        Insert: Omit<RedirectRow, 'id'>;
        Update: Partial<Omit<RedirectRow, 'id'>>;
      };
      leads: {
        Row: LeadRow;
        Insert: Omit<LeadRow, 'id' | 'created_at'>;
        Update: Partial<Omit<LeadRow, 'id'>>;
      };
    };
  };
}

export interface ContentRow {
  id: string;
  collection: 'blog' | 'guides' | 'compare' | 'pages';
  slug: string;
  title: string;
  meta_description: string;
  body: string;      // markdown source
  body_html: string;  // rendered HTML
  category: string | null;
  tags: string[];
  schema_type: 'Article' | 'HowTo' | 'FAQPage' | 'WebPage' | 'Product' | 'SoftwareApplication';
  faq_items: FaqItem[] | null;
  how_to_steps: HowToStep[] | null;
  featured_image: string | null;
  author: string;
  publish_date: string;
  updated_at: string;
  status: 'draft' | 'published' | 'archived';
  noindex: boolean;
  wp_slug: string | null;
  created_at: string;
}

export interface RedirectRow {
  id: number;
  old_url: string;
  new_url: string;
  status_code: 301 | 302 | 410;
}

export interface LeadRow {
  id: string;
  email: string;
  source: string;
  created_at: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
}
