import { BlogPost, BlogFilter } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn how to structure and build maintainable React applications using TypeScript, including best practices for component architecture, state management, and type safety.',
    author: 'Waliul Rayhan',
    publishedDate: '2024-09-15',
    readingTime: '8 min read',
    tags: ['React', 'TypeScript', 'Frontend', 'Best Practices'],
    category: 'Web Development',
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    slug: 'building-scalable-react-applications-typescript',
    status: 'published'
  },
  {
    id: '2',
    title: 'The Complete Guide to Next.js App Router',
    excerpt: 'Dive deep into Next.js 13+ App Router architecture, server components, and how to migrate from Pages Router. Includes practical examples and performance optimizations.',
    author: 'Waliul Rayhan',
    publishedDate: '2024-09-10',
    readingTime: '12 min read',
    tags: ['Next.js', 'React', 'Full Stack', 'Performance'],
    category: 'Web Development',
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    slug: 'complete-guide-nextjs-app-router',
    status: 'published'
  },
  {
    id: '3',
    title: 'Modern CSS Techniques: Grid, Flexbox, and Container Queries',
    excerpt: 'Master modern CSS layout techniques and responsive design patterns that will make your websites more flexible and maintainable in 2024.',
    author: 'Waliul Rayhan',
    publishedDate: '2024-09-05',
    readingTime: '10 min read',
    tags: ['CSS', 'Layout', 'Responsive Design', 'Frontend'],
    category: 'CSS & Design',
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    slug: 'modern-css-techniques-grid-flexbox',
    status: 'published'
  },
  {
    id: '4',
    title: 'Database Design Patterns for Modern Web Applications',
    excerpt: 'Explore database design patterns, normalization strategies, and how to choose between SQL and NoSQL solutions for your next project.',
    author: 'Waliul Rayhan',
    publishedDate: '2024-08-28',
    readingTime: '15 min read',
    tags: ['Database', 'PostgreSQL', 'MongoDB', 'Backend'],
    category: 'Backend Development',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    slug: 'database-design-patterns-web-applications',
    status: 'published'
  },
  {
    id: '5',
    title: 'API Design Best Practices: RESTful Services and GraphQL',
    excerpt: 'Learn how to design robust APIs using REST principles and GraphQL, including authentication, error handling, and documentation strategies.',
    author: 'Waliul Rayhan',
    publishedDate: '2024-08-20',
    readingTime: '11 min read',
    tags: ['API', 'REST', 'GraphQL', 'Backend'],
    category: 'Backend Development',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    slug: 'api-design-best-practices-rest-graphql',
    status: 'published'
  },
  {
    id: '6',
    title: 'Optimizing Web Performance: Core Web Vitals and Beyond',
    excerpt: 'Comprehensive guide to web performance optimization, covering Core Web Vitals, lazy loading, code splitting, and modern performance metrics.',
    author: 'Waliul Rayhan',
    publishedDate: '2024-08-12',
    readingTime: '9 min read',
    tags: ['Performance', 'Web Vitals', 'Optimization', 'Frontend'],
    category: 'Performance',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    slug: 'optimizing-web-performance-core-web-vitals',
    status: 'published'
  },
  {
    id: '7',
    title: 'Introduction to Machine Learning for Web Developers',
    excerpt: 'Getting started with machine learning concepts and how to integrate ML models into web applications using TensorFlow.js and Python APIs.',
    author: 'Waliul Rayhan',
    publishedDate: '2024-08-05',
    readingTime: '13 min read',
    tags: ['Machine Learning', 'AI', 'TensorFlow', 'Python'],
    category: 'Machine Learning',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    slug: 'machine-learning-for-web-developers',
    status: 'published'
  },
  {
    id: '8',
    title: 'Building Accessible Web Applications: A Developer\'s Guide',
    excerpt: 'Learn how to create inclusive web experiences by implementing proper accessibility features, semantic HTML, and ARIA attributes.',
    author: 'Waliul Rayhan',
    publishedDate: '2024-07-28',
    readingTime: '14 min read',
    tags: ['Accessibility', 'A11y', 'HTML', 'UX'],
    category: 'Accessibility',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    slug: 'building-accessible-web-applications',
    status: 'published'
  }
];

// Blog filtering utilities
export const getUniqueCategories = (): BlogFilter[] => {
  const categories = blogPosts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(categories).map(([name, count]) => ({
    id: name.toLowerCase().replace(/\s+/g, '-'),
    name,
    count
  }));
};

export const getUniqueTags = (): BlogFilter[] => {
  const tagCounts = blogPosts.reduce((acc, post) => {
    post.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(tagCounts).map(([name, count]) => ({
    id: name.toLowerCase().replace(/\s+/g, '-'),
    name,
    count
  })).sort((a, b) => b.count - a.count);
};

export const filterBlogPosts = (
  posts: BlogPost[],
  activeCategory: string,
  activeTag: string
): BlogPost[] => {
  return posts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesTag = activeTag === 'all' || post.tags.includes(activeTag);
    return matchesCategory && matchesTag && post.status === 'published';
  });
};

export const getFeaturedPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => post.featured && post.status === 'published')
    .slice(0, limit);
};

export const getRecentPosts = (limit: number = 6): BlogPost[] => {
  return blogPosts
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, limit);
};