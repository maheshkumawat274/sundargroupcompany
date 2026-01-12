import type { Service, Slide } from "../types";


export interface GalleryImage {
  url: string;
  category: string;
  title: string;
}

export const HERO_SLIDES: Slide[] = [
  {
    title: "Luxury Rooms",
    subtitle: "Experience Royal Comfort",
    imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1920"
  },
  {
    title: "Crystal Pool",
    subtitle: "Dive into Serenity",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1920"
  },
  {
    title: "Grand Dining",
    subtitle: "Authentic Indian Flavors",
    imageUrl: "https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=1920"
  },
  {
    title: "Event Hall",
    subtitle: "Where Dreams Come True",
    imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1920"
  },
  {
    title: "Lush Gardens",
    subtitle: "Nature's Perfect Embrace",
    imageUrl: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=1920"
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000", category: "Events", title: "Garba Night 2024" },
  { url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000", category: "Dining", title: "Chef's Special Dinner" },
  { url: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&q=80&w=1000", category: "Garden", title: "Morning Walkways" },
  { url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000", category: "Events", title: "Royal Wedding Setup" },
  { url: "https://images.unsplash.com/photo-1566417713940-db791f46b99c?auto=format&fit=crop&q=80&w=1000", category: "Pool", title: "Poolside Sunset" },
  { url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000", category: "Architecture", title: "Resort Facade" },
  { url: "https://images.unsplash.com/photo-1550966841-3ee7adac1afb?auto=format&fit=crop&q=80&w=1000", category: "Dining", title: "Traditional Gujarati Thali" },
  { url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1000", category: "Events", title: "Musical Concert in Garden" },
  { url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000", category: "Events", title: "Corporate Gala Dinner" },
  { url: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=1000", category: "Selfie", title: "Traditional Jali Backdrop" },
  { url: "https://images.unsplash.com/photo-1517457373958-b7bdd458ad20?auto=format&fit=crop&q=80&w=1000", category: "Events", title: "Garden Lecture Series" },
  { url: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&q=80&w=1000", category: "Selfie", title: "Vintage Car Point" }
];

export const SERVICES: Service[] = [
  {
    id: "rooms",
    title: "Luxury Accommodation",
    shortDescription: "Plush rooms designed with traditional Indian motifs and modern luxury.",
    longDescription: "Our rooms are a sanctuary of peace. Every corner is crafted to provide a regal experience, blending Ahmedabad's heritage with contemporary amenities. Perfect for families and business travelers alike.",
    imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200",
    amenities: [
      { icon: "🛏️", label: "King Size Bed" },
      { icon: "📺", label: "Smart TV" },
      { icon: "❄️", label: "Daikin AC" },
      { icon: "🚿", label: "Premium Bath" },
      { icon: "☕", label: "Coffee Maker" },
      { icon: "📶", label: "Hi-Speed WiFi" }
    ],
    features: ["Complimentary Breakfast", "24/7 Room Service", "Private Balcony", "Laundry Service"]
  },
  {
    id: "pool",
    title: "Swimming Pool",
    shortDescription: "An azure oasis to beat the heat of Ahmedabad.",
    longDescription: "Our Olympic-sized swimming pool offers a refreshing escape. With a dedicated kids' zone and poolside lounge, it's the perfect spot for relaxation and recreation.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/92/Backyardpool.jpg",
    amenities: [
      { icon: "🏊", label: "Temperature Control" },
      { icon: "🍹", label: "Poolside Bar" },
      { icon: "👶", label: "Kids Zone" },
      { icon: "🧖", label: "Shower Area" }
    ]
  },
  {
    id: "dining",
    title: "Grand Dining Hall",
    shortDescription: "Exquisite culinary journeys through Gujarat and beyond.",
    longDescription: "Our master chefs bring you the authentic taste of Indian heritage. From traditional Gujarati Thalis to International cuisines, every meal is a celebration of flavor.",
    imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/ef/1a/8f/the-grand-dining-hall.jpg?w=900&h=500&s=1",
    amenities: [
      { icon: "🥘", label: "Buffet & A-la-carte" },
      { icon: "👨‍🍳", label: "Live Kitchen" },
      { icon: "🎻", label: "Live Music" },
      { icon: "🍷", label: "Fine Dining" }
    ]
  },
  {
    id: "event",
    title: "Majestic Event Hall",
    shortDescription: "Celebrate your big moments in Ahmedabad's finest venue.",
    longDescription: "A massive, pillar-less hall designed for weddings, corporate galas, and grand celebrations. We provide end-to-end event management to make your occasion flawless.",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    amenities: [
      { icon: "👥", label: "1000+ Capacity" },
      { icon: "🔊", label: "Bose Sound System" },
      { icon: "💡", label: "Intelligent Lighting" },
      { icon: "🚗", label: "Valet Parking" }
    ]
  },
  {
    id: "garden",
    title: "Lush Green Gardens",
    shortDescription: "Manicured lawns for peaceful strolls and outdoor parties.",
    longDescription: "Spread over 2 acres, our gardens provide a tranquil environment. Dotted with exotic flowers and traditional gazebos, it's a paradise for nature lovers.",
    imageUrl: "https://img.freepik.com/free-photo/city-park_1127-3330.jpg",
    amenities: [
      { icon: "🦋", label: "Butterfly Garden" },
      { icon: "🚶", label: "Walking Path" },
      { icon: "⛲", label: "Water Fountains" },
      { icon: "🧘", label: "Yoga Spot" }
    ]
  },
  {
    id: "selfie",
    title: "Instagrammable Selfie Points",
    shortDescription: "Capture memories against stunning architectural backdrops.",
    longDescription: "Strategic points designed with traditional 'Jali' work and vibrant lighting to ensure your social media memories are as beautiful as your stay.",
    imageUrl: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=1200",
    amenities: [
      { icon: "📸", label: "Perfect Lighting" },
      { icon: "🦚", label: "Traditional Decor" },
      { icon: "💫", label: "Night Illumination" }
    ]
  }
];
