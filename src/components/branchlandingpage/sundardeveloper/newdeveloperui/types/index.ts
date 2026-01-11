
export interface Project {
  id: string;
  name: string;
  type: 'Residential' | 'Commercial' | 'Industrial';
  location: string;
  area: string;
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  images: string[]; // Changed from image: string
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  company?: string;
  text: string;
  rating: number;
  avatar: string;
}

export type ViewState = 'home' | 'projects' | 'about' | 'contact';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
