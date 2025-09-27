export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  publishedDate: string;
  readingTime: string;
  tags: string[];
  category: string;
  featured: boolean;
  imageUrl: string;
  slug: string;
  externalUrl?: string;
  status: 'published' | 'draft';
}

export interface BlogFilter {
  id: string;
  name: string;
  count: number;
}