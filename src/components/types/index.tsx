// Branch Model
export interface Branch {
  id: string;
  name: string;
  slug: string;
  address: string;
  phone: string;
  heroImage: string;
  description: string;
  gallery?: string[];
  services?: string[];
}

// Service Model
export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

// BlogPost Model
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}