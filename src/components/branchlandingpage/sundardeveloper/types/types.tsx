export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'infrastructure';
  status: 'ongoing' | 'completed' | 'upcoming';
  image: string;
  description: string;
  location: string;
  size?: string;
  year?: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  image?: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}