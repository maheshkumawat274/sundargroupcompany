import type { Project, Testimonial } from "../types";


export const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920',
    title: 'Building Excellence',
    subtitle: 'Commercial Skyscrapers',
    description: 'Redefining city skylines with sustainable and modern architectural wonders.'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920',
    title: 'Dream Living',
    subtitle: 'Residential Luxury',
    description: 'Crafting high-end homes that blend comfort with sophisticated aesthetics.'
  },
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1920',
    title: 'Foundations of Growth',
    subtitle: 'Industrial Infrastructure',
    description: 'Providing robust engineering solutions for the world\'s industrial needs.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Skyline Corporate Tower',
    type: 'Commercial',
    location: 'Bandra-Kurla Complex, Mumbai',
    area: '250,000 sq.ft.',
    status: 'Completed',
    images: [
      'https://images.unsplash.com/photo-1554435493-93422e8220c8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'A 45-story glass facade corporate office with LEED Platinum certification.',
    features: ['High-speed elevators', 'Smart building management', 'Terrace garden', '7-level parking']
  },
  {
    id: '2',
    name: 'Amber Heights',
    type: 'Residential',
    location: 'Sector 45, Gurgaon',
    area: '180,000 sq.ft.',
    status: 'Ongoing',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Premium 3 & 4 BHK luxury apartments with world-class amenities.',
    features: ['Olympic size pool', 'Private clubhouse', 'EV charging stations', 'Jogging track']
  },
  {
    id: '3',
    name: 'TechLogix Industrial Park',
    type: 'Industrial',
    location: 'Sriperumbudur, Chennai',
    area: '500,000 sq.ft.',
    status: 'Completed',
    images: [
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'State-of-the-art manufacturing facility for high-tech components.',
    features: ['Advanced waste management', '24/7 power backup', 'Container bays', 'ISO standards']
  },
  {
    id: '4',
    name: 'The Grand Mall',
    type: 'Commercial',
    location: 'Whitefield, Bangalore',
    area: '350,000 sq.ft.',
    status: 'Upcoming',
    images: [
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1582653280643-e79c79219b19?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'A futuristic shopping destination with entertainment zones.',
    features: ['Multiplex', 'Food court', 'Centrally air-conditioned', 'Smart security']
  },
  {
    id: '5',
    name: 'Harmony Residency',
    type: 'Residential',
    location: 'New Town, Kolkata',
    area: '120,000 sq.ft.',
    status: 'Completed',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Eco-friendly affordable housing project with 200 units.',
    features: ['Rainwater harvesting', 'Solar lighting', 'Children play area', 'Community hall']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Rajesh Khanna',
    company: 'Director, RK Enterprises',
    text: 'Sundar Construction delivered our project 2 months ahead of schedule without compromising on quality. Their team is highly professional.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=rajesh'
  },
  {
    id: 't2',
    clientName: 'Sarah Williams',
    company: 'Sarah Decor Inc.',
    text: 'The structural integrity and the finishing of our commercial office are outstanding. Truly a trustable partner in building.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 't3',
    clientName: 'Amit Shah',
    company: 'Vibrant Residency',
    text: 'Transparency and ethics are what set Sundar Construction apart. Their daily reporting system kept us updated throughout.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?u=amit'
  },
  {
    id: 't4',
    clientName: 'Vikram Singh',
    company: 'Global Logistics',
    text: 'Best industrial engineering team I have ever worked with. The flooring specifications were met with millimeter precision.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=vikram'
  }
];

export const SERVICES = [
  { 
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600", 
    title: "Residential Luxury", 
    desc: "Premium living spaces and gated communities designed with a focus on modern lifestyle and comfort." 
  },
  { 
    img: "https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&q=80&w=600", 
    title: "Urban Infrastructure", 
    desc: "Specialized engineering for bridges, highways, and public utilities that form the backbone of modern cities." 
  },
  { 
    img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=600", 
    title: "Industrial Plants", 
    desc: "Engineered facilities for manufacturing and logistics designed for maximum operational workflow efficiency." 
  }
];
