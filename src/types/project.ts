export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
  tags: string[];
  status: 'completed' | 'in-progress' | 'maintenance';
  year: string;
  duration?: string;
  teamSize?: number;
  role?: string;
}

export interface ProjectFilter {
  id: string;
  name: string;
  count: number;
}