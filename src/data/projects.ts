import { Project, ProjectFilter } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, featuring user authentication, product management, and payment integration.',
    longDescription: 'A comprehensive e-commerce solution with advanced features including inventory management, order tracking, admin dashboard, and secure payment processing using Stripe.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    demoUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/waliulrayhan/ecommerce-platform',
    featured: true,
    category: 'Full Stack',
    tags: ['Web', 'E-Commerce', 'Payment Integration'],
    status: 'completed',
    year: '2024',
    duration: '3 months',
    teamSize: 1,
    role: 'Full Stack Developer'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    longDescription: 'Built with React and Node.js, this app features real-time collaboration using Socket.io, advanced task filtering, project organization, and team management capabilities.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    demoUrl: 'https://taskapp-demo.netlify.app',
    githubUrl: 'https://github.com/waliulrayhan/task-management-app',
    featured: true,
    category: 'Full Stack',
    tags: ['Web', 'Real-time', 'Collaboration'],
    status: 'completed',
    year: '2024',
    duration: '2 months',
    teamSize: 2,
    role: 'Lead Developer'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and weather alerts.',
    longDescription: 'Features include current weather conditions, 7-day forecasts, weather maps integration, location search, and customizable dashboard widgets.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    demoUrl: 'https://weather-dashboard-demo.vercel.app',
    githubUrl: 'https://github.com/waliulrayhan/weather-dashboard',
    featured: true,
    category: 'Frontend',
    tags: ['Web', 'API Integration', 'Data Visualization'],
    status: 'completed',
    year: '2024',
    duration: '1 month',
    teamSize: 1,
    role: 'Frontend Developer'
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js, featuring smooth animations, and optimized performance.',
    longDescription: 'This portfolio showcases my work and skills with a focus on performance, accessibility, and user experience. Built with modern web technologies.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://waliulrayhan.dev',
    githubUrl: 'https://github.com/waliulrayhan/portfolio',
    featured: false,
    category: 'Frontend',
    tags: ['Web', 'Portfolio', 'Animation'],
    status: 'maintenance',
    year: '2024',
    duration: '1 month',
    teamSize: 1,
    role: 'Full Stack Developer'
  },
  {
    id: '5',
    title: 'Blog Platform',
    description: 'A content management system with markdown support, comment system, and SEO optimization.',
    longDescription: 'Full-featured blog platform with admin dashboard, content editor, user authentication, comment moderation, and advanced SEO features.',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
    demoUrl: 'https://blog-platform-demo.vercel.app',
    githubUrl: 'https://github.com/waliulrayhan/blog-platform',
    featured: false,
    category: 'Full Stack',
    tags: ['Web', 'CMS', 'Content'],
    status: 'completed',
    year: '2023',
    duration: '2 months',
    teamSize: 1,
    role: 'Full Stack Developer'
  },
  {
    id: '6',
    title: 'API Analytics Dashboard',
    description: 'Real-time analytics dashboard for API monitoring with performance metrics, error tracking, and usage statistics.',
    longDescription: 'Comprehensive API monitoring solution with real-time metrics, custom alerts, performance analysis, and detailed reporting capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    technologies: ['React', 'D3.js', 'Node.js', 'Redis', 'PostgreSQL'],
    demoUrl: 'https://api-analytics-demo.vercel.app',
    githubUrl: 'https://github.com/waliulrayhan/api-analytics',
    featured: false,
    category: 'Full Stack',
    tags: ['Web', 'Analytics', 'Monitoring'],
    status: 'completed',
    year: '2023',
    duration: '3 months',
    teamSize: 3,
    role: 'Frontend Lead'
  },
];

// Project filtering utilities
export const getUniqueCategories = (): ProjectFilter[] => {
  const categories = projects.reduce((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(categories).map(([name, count]) => ({
    id: name.toLowerCase().replace(/\s+/g, '-'),
    name,
    count
  }));
};

export const getUniqueTags = (): ProjectFilter[] => {
  const tagCounts = projects.reduce((acc, project) => {
    project.tags.forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(tagCounts).map(([name, count]) => ({
    id: name.toLowerCase().replace(/\s+/g, '-'),
    name,
    count
  }));
};

export const filterProjects = (
  projects: Project[],
  activeCategory: string,
  activeTag: string
): Project[] => {
  return projects.filter(project => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesTag = activeTag === 'all' || project.tags.includes(activeTag);
    return matchesCategory && matchesTag;
  });
};