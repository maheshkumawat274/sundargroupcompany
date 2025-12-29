export interface Branch {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  category: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutPoints: string[];
  services: Service[];
  gallery: GalleryImage[];
  whyChooseTitle: string;
  whyChoosePoints: WhyPoint[];
  testimonials: Testimonial[];
  contactInfo: ContactInfo;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
   socials: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  image: string;
  title: string;
  description: string;
}

export interface WhyPoint {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

export const branchesData: Branch[] = [
  {
    id: "sundar-resort",
    slug: "sundar-resort",
    name: "Sundar Resort",
    tagline: "Nature's Haven, Luxury Redefined",
    shortDescription: "Premium hospitality nestled in nature with world-class amenities and unforgettable experiences",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop",
    heroTitle: "Experience Luxury in Paradise",
    heroSubtitle: "Where nature meets comfort and memories are made",
    category: "Hospitality",
    aboutTitle: "Welcome to Sundar Resort",
    aboutDescription: "Sundar Resort is a premier destination hospitality brand offering an exquisite blend of nature and luxury. Nestled in serene landscapes, our resort provides world-class amenities, personalized service, and curated experiences that create lasting memories for every guest.",
    aboutPoints: [
      "350+ acres of pristine natural landscape",
      "5-star amenities and infrastructure",
      "Award-winning hospitality service",
      "Eco-friendly sustainable practices",
      "Customized experience packages"
    ],
    services: [
      {
        id: "accommodation",
        icon: "Home",
        title: "Luxury Accommodation",
        description: "Spacious suites and villas with modern amenities overlooking natural landscapes"
      },
      {
        id: "dining",
        icon: "UtensilsCrossed",
        title: "Multi-cuisine Dining",
        description: "Fine dining experiences with authentic local and international cuisine"
      },
      {
        id: "adventure",
        icon: "Mountain",
        title: "Adventure Activities",
        description: "Trekking, water sports, wildlife tours, and nature exploration programs"
      },
      {
        id: "spa",
        icon: "Wind",
        title: "Wellness & Spa",
        description: "Rejuvenating spa treatments and wellness programs in a peaceful setting"
      },
      {
        id: "events",
        icon: "Users",
        title: "Event Management",
        description: "Corporate retreats, weddings, and celebrations in picturesque venues"
      },
      {
        id: "kids",
        icon: "Smile",
        title: "Kids Programs",
        description: "Engaging activities and programs designed for families with children"
      }
    ],
    gallery: [
      {
        id: "gallery-1",
        image: "https://images.unsplash.com/photo-1551632786-de41ec297e58?w=600&h=400&fit=crop",
        title: "Luxury Pool Area",
        description: "Olympic-sized infinity pool overlooking the valley"
      },
      {
        id: "gallery-2",
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop",
        title: "Gourmet Dining",
        description: "Fine dining experience with panoramic views"
      },
      {
        id: "gallery-3",
        image: "https://images.unsplash.com/photo-1616161838488-8a81e2e5eb21?w=600&h=400&fit=crop",
        title: "Spa & Wellness",
        description: "World-class spa facilities for ultimate relaxation"
      },
      {
        id: "gallery-4",
        image: "https://images.unsplash.com/photo-1552708995-c3004ca199a9?w=600&h=400&fit=crop",
        title: "Resort Rooms",
        description: "Elegantly appointed suites with premium furnishings"
      }
    ],
    whyChooseTitle: "Why Choose Sundar Resort",
    whyChoosePoints: [
      {
        id: "point-1",
        icon: "Star",
        title: "Premium Experience",
        description: "Meticulously curated experiences that exceed expectations"
      },
      {
        id: "point-2",
        icon: "Award",
        title: "Award-Winning Service",
        description: "Recognized excellence in hospitality and customer care"
      },
      {
        id: "point-3",
        icon: "Leaf",
        title: "Eco-Conscious",
        description: "Sustainable practices preserving nature for future generations"
      },
      {
        id: "point-4",
        icon: "MapPin",
        title: "Prime Location",
        description: "Strategically located with easy accessibility and natural beauty"
      }
    ],
    testimonials: [
      {
        id: "testimonial-1",
        name: "Rajesh Kumar",
        role: "Corporate Executive",
        content: "Sundar Resort exceeded all expectations. The perfect blend of luxury and nature. Our team retreat was absolutely memorable!",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
      },
      {
        id: "testimonial-2",
        name: "Priya Sharma",
        role: "Wedding Planner",
        content: "The most beautiful venue for destination weddings. Every detail was perfected by the exceptional team at Sundar Resort.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
      }
    ],
    contactInfo: {
      phone: "+91 98765 43210",
      email: "info@sundarresort.com",
      address: "Scenic Valley Road",
      city: "Mahabaleshwar",
      state: "Maharashtra",
      pincode: "412806"
    },
    colors: {
      primary: "#065f46",
      secondary: "#10b981",
      accent: "#34d399"
    },
    socials: {
      instagram: "https://instagram.com/sundarresort",
      facebook: "https://facebook.com/sundarresort",
      youtube: "https://youtube.com/@sundarresort",
    },
  },
  {
    id: "sundar-print",
    slug: "sundar-print",
    name: "Sundar Print",
    tagline: "Weaving Stories into Fabric",
    shortDescription: "Premium saree and fabric printing with cutting-edge designs and traditional craftsmanship",
    heroImage: "https://images.unsplash.com/photo-1577720643272-265f434b4b5f?w=1200&h=600&fit=crop",
    heroTitle: "Art Meets Fabric",
    heroSubtitle: "Innovative printing technology with traditional excellence",
    category: "Textile & Printing",
    aboutTitle: "Sundar Print - Textile Excellence",
    aboutDescription: "Sundar Print is a leader in premium saree and fabric printing, combining traditional textile artistry with modern digital technology. We create stunning designs that celebrate Indian heritage while meeting contemporary fashion standards.",
    aboutPoints: [
      "30+ years of textile expertise",
      "State-of-the-art printing facilities",
      "Custom design capabilities",
      "Eco-friendly printing processes",
      "Industry-leading quality standards"
    ],
    services: [
      {
        id: "digital-print",
        icon: "Palette",
        title: "Digital Printing",
        description: "High-resolution digital printing for intricate and vibrant designs on premium fabrics"
      },
      {
        id: "block-print",
        icon: "Grid3x3",
        title: "Traditional Block Printing",
        description: "Hand-crafted block printing preserving traditional art forms and techniques"
      },
      {
        id: "custom-design",
        icon: "Pencil",
        title: "Custom Design Services",
        description: "Personalized design consultation and development for unique saree collections"
      },
      {
        id: "bulk-orders",
        icon: "Package",
        title: "Bulk Production",
        description: "Large-scale manufacturing with consistent quality and timely delivery"
      },
      {
        id: "dyeing",
        icon: "Droplets",
        title: "Premium Dyeing",
        description: "Advanced dyeing techniques ensuring rich colors and longevity"
      },
      {
        id: "finishing",
        icon: "Sparkles",
        title: "Finishing Services",
        description: "Complete finishing including embroidery and embellishment options"
      }
    ],
    gallery: [
      {
        id: "gallery-1",
        image: "https://images.unsplash.com/photo-1590080876857-68fafff36f00?w=600&h=400&fit=crop",
        title: "Digital Print Collections",
        description: "Contemporary designs with vibrant colors"
      },
      {
        id: "gallery-2",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=400&fit=crop",
        title: "Traditional Block Print",
        description: "Handcrafted patterns with authentic appeal"
      },
      {
        id: "gallery-3",
        image: "https://images.unsplash.com/photo-1591201915906-e9849d6a196e?w=600&h=400&fit=crop",
        title: "Premium Sarees",
        description: "Finished sarees ready for market"
      },
      {
        id: "gallery-4",
        image: "https://images.unsplash.com/photo-1607622814075-e51df1bdc82f?w=600&h=400&fit=crop",
        title: "Custom Designs",
        description: "Bespoke fabric designs for clients"
      }
    ],
    whyChooseTitle: "Why Choose Sundar Print",
    whyChoosePoints: [
      {
        id: "point-1",
        icon: "Zap",
        title: "Advanced Technology",
        description: "Latest digital printing and dyeing technology for superior results"
      },
      {
        id: "point-2",
        icon: "Award",
        title: "Quality Assurance",
        description: "Rigorous quality checks at every stage of production"
      },
      {
        id: "point-3",
        icon: "Leaf",
        title: "Sustainable Practices",
        description: "Eco-friendly printing and dyeing processes"
      },
      {
        id: "point-4",
        icon: "Users",
        title: "Custom Solutions",
        description: "Dedicated design team for personalized collections"
      }
    ],
    testimonials: [
      {
        id: "testimonial-1",
        name: "Meera Textiles",
        role: "Saree Manufacturer",
        content: "Sundar Print delivers consistent quality and innovative designs. Our collaboration has been highly successful with their professional team.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
      },
      {
        id: "testimonial-2",
        name: "Ananya Designer",
        role: "Fashion Designer",
        content: "Their custom printing capabilities are outstanding. Every design comes out exactly as envisioned with perfect color accuracy.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
      }
    ],
    contactInfo: {
      phone: "+91 98765 43211",
      email: "sales@sundarprint.com",
      address: "Industrial Park, Phase 2",
      city: "Surat",
      state: "Gujarat",
      pincode: "395002"
    },
    colors: {
      primary: "#7c2d12",
      secondary: "#ea580c",
      accent: "#fb923c"
    },
    socials: {
      instagram: "https://instagram.com/sundarresort",
      facebook: "https://facebook.com/sundarresort",
      youtube: "https://youtube.com/@sundarresort",
    },
  },
  {
    id: "sundar-developer",
    slug: "sundar-developer",
    name: "Sundar Developer",
    tagline: "Building Dreams into Reality",
    shortDescription: "Premium real estate and construction services creating modern residential and commercial spaces",
    heroImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=600&fit=crop",
    heroTitle: "Constructing Your Future",
    heroSubtitle: "Premium properties with excellence in every detail",
    category: "Real Estate & Construction",
    aboutTitle: "Sundar Developer - Building Excellence",
    aboutDescription: "Sundar Developer is a premier real estate and construction company committed to delivering premium properties that combine modern architecture with timeless design. With over 20 years of expertise, we create sustainable communities and iconic structures.",
    aboutPoints: [
      "20+ years of development experience",
      "1000+ completed projects",
      "Zero-defect construction philosophy",
      "LEED-certified green buildings",
      "Customer-centric approach"
    ],
    services: [
      {
        id: "residential",
        icon: "Home",
        title: "Residential Projects",
        description: "Modern apartments and villas with world-class amenities and design"
      },
      {
        id: "commercial",
        icon: "Building2",
        title: "Commercial Spaces",
        description: "Office complexes and retail spaces designed for modern businesses"
      },
      {
        id: "mixed-use",
        icon: "Layers",
        title: "Mixed-Use Development",
        description: "Integrated communities combining residential, commercial, and leisure spaces"
      },
      {
        id: "infrastructure",
        icon: "Zap",
        title: "Infrastructure Services",
        description: "Complete project development from planning to execution"
      },
      {
        id: "interior",
        icon: "Palette",
        title: "Interior Design",
        description: "Bespoke interior design and fit-out services"
      },
      {
        id: "property-mgmt",
        icon: "Users",
        title: "Property Management",
        description: "Comprehensive facility and property management services"
      }
    ],
    gallery: [
      {
        id: "gallery-1",
        image: "https://images.unsplash.com/photo-1486152373990-c894fdcc538d?w=600&h=400&fit=crop",
        title: "Modern Residential Complex",
        description: "State-of-the-art apartment towers with premium amenities"
      },
      {
        id: "gallery-2",
        image: "https://images.unsplash.com/photo-1486221046779-e21cc028cb29?w=600&h=400&fit=crop",
        title: "Commercial Office Space",
        description: "Contemporary office buildings with smart infrastructure"
      },
      {
        id: "gallery-3",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
        title: "Luxury Villa Development",
        description: "Exclusive gated community with premium villas"
      },
      {
        id: "gallery-4",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
        title: "Mixed-Use Complex",
        description: "Integrated development with shopping and dining"
      }
    ],
    whyChooseTitle: "Why Choose Sundar Developer",
    whyChoosePoints: [
      {
        id: "point-1",
        icon: "CheckCircle",
        title: "Quality Assurance",
        description: "Zero-defect construction with rigorous quality checks"
      },
      {
        id: "point-2",
        icon: "Shield",
        title: "Transparent Process",
        description: "Clear communication and transparent project execution"
      },
      {
        id: "point-3",
        icon: "Leaf",
        title: "Sustainable Building",
        description: "Green certified projects with eco-friendly practices"
      },
      {
        id: "point-4",
        icon: "Clock",
        title: "On-Time Delivery",
        description: "Proven track record of timely project completion"
      }
    ],
    testimonials: [
      {
        id: "testimonial-1",
        name: "Vikram Singh",
        role: "Property Owner",
        content: "The quality of construction and attention to detail is exceptional. Sundar Developer delivered our dream home exactly on time and within budget.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
      },
      {
        id: "testimonial-2",
        name: "Neha Gupta",
        role: "Business Owner",
        content: "Their commercial space perfectly meets our business needs. Professional team and excellent property management support.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
      }
    ],
    contactInfo: {
      phone: "+91 98765 43212",
      email: "projects@sundardev.com",
      address: "Corporate Tower, Tech Park",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560001"
    },
    colors: {
      primary: "#1e40af",
      secondary: "#3b82f6",
      accent: "#60a5fa"
    },
    socials: {
      instagram: "https://instagram.com/sundarresort",
      facebook: "https://facebook.com/sundarresort",
      youtube: "https://youtube.com/@sundarresort",
    },
  }
];

export const getBranchBySlug = (slug: string): Branch | undefined => {
  return branchesData.find(branch => branch.slug === slug);
};

export const getAllBranches = (): Branch[] => {
  return branchesData;
};
