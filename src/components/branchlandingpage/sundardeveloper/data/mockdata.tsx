import type { ProcessStep, Project, Service, Testimonial } from "../types/types";


export const projects: Project[] = [
  {
    id: '1',
    title: 'Sunrise Residency',
    category: 'residential',
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    description: 'Luxury apartment complex with 120 units, modern amenities and sustainable design',
    location: 'Downtown District',
    size: '45,000 sq ft',
    year: 2023
  },
  {
    id: '2',
    title: 'Corporate Plaza Tower',
    category: 'commercial',
    status: 'ongoing',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    description: 'Modern 25-story commercial tower with premium office spaces',
    location: 'Business Hub',
    size: '200,000 sq ft',
    year: 2024
  },
  {
    id: '3',
    title: 'Green Valley Villas',
    category: 'residential',
    status: 'ongoing',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    description: 'Premium villa community with 50 independent houses',
    location: 'Suburban Heights',
    size: '30 acres',
    year: 2024
  },
  {
    id: '4',
    title: 'Metro Link Bridge',
    category: 'infrastructure',
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800',
    description: 'Major infrastructure project connecting city districts',
    location: 'City Center',
    size: '2.5 km',
    year: 2023
  },
  {
    id: '5',
    title: 'Tech Park Complex',
    category: 'commercial',
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    description: 'State-of-the-art technology park with modern facilities',
    location: 'IT Corridor',
    size: '150,000 sq ft',
    year: 2025
  },
  {
    id: '6',
    title: 'Riverside Apartments',
    category: 'residential',
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800',
    description: 'Waterfront luxury apartments with scenic views',
    location: 'River District',
    size: '60,000 sq ft',
    year: 2023
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Residential Construction',
    description: 'Building dream homes with quality materials and expert craftsmanship',
    icon: '🏠',
    features: [
      'Custom home design',
      'Apartment complexes',
      'Villa communities',
      'Affordable housing'
    ]
  },
  {
    id: '2',
    title: 'Commercial Construction',
    description: 'Creating modern commercial spaces for businesses to thrive',
    icon: '🏢',
    features: [
      'Office buildings',
      'Retail spaces',
      'Hotels & resorts',
      'Industrial facilities'
    ]
  },
  {
    id: '3',
    title: 'Real-Estate Development',
    description: 'End-to-end property development and investment solutions',
    icon: '📊',
    features: [
      'Land acquisition',
      'Project planning',
      'Development management',
      'Investment consulting'
    ]
  },
  {
    id: '4',
    title: 'Renovation & Remodeling',
    description: 'Transforming existing spaces with modern upgrades',
    icon: '🔨',
    features: [
      'Interior renovation',
      'Structural repairs',
      'Modern upgrades',
      'Heritage restoration'
    ]
  },
  {
    id: '5',
    title: 'Turnkey Projects',
    description: 'Complete project solutions from concept to completion',
    icon: '🔑',
    features: [
      'Design & planning',
      'Construction',
      'Interior finishing',
      'Project handover'
    ]
  },
  {
    id: '6',
    title: 'Project Management',
    description: 'Professional management ensuring timely and quality delivery',
    icon: '📋',
    features: [
      'Timeline management',
      'Cost control',
      'Quality assurance',
      'Vendor coordination'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Homeowner',
    content: 'Sundar Developer exceeded our expectations. They delivered our dream home on time with exceptional quality. The team was professional and transparent throughout the process.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'CEO',
    company: 'Tech Solutions Inc.',
    content: 'We trusted Sundar Developer with our corporate office construction. Their attention to detail and commitment to deadlines made them the perfect partner for our project.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: '3',
    name: 'Amit Patel',
    role: 'Real Estate Investor',
    content: 'I have worked with many developers, but Sundar Developer stands out for their integrity and quality. They are my go-to partner for all construction projects.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=3'
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: '1',
    title: 'Planning & Design',
    description: 'Comprehensive project planning with architectural designs and blueprints',
    icon: '📐',
    order: 1
  },
  {
    id: '2',
    title: 'Material Selection',
    description: 'Premium quality materials sourced from trusted suppliers',
    icon: '🏗️',
    order: 2
  },
  {
    id: '3',
    title: 'Construction Execution',
    description: 'Expert construction with skilled workforce and modern equipment',
    icon: '👷',
    order: 3
  },
  {
    id: '4',
    title: 'Quality Inspection',
    description: 'Rigorous quality checks at every stage of construction',
    icon: '✅',
    order: 4
  },
  {
    id: '5',
    title: 'Project Handover',
    description: 'Seamless handover with complete documentation and support',
    icon: '🎯',
    order: 5
  }
];