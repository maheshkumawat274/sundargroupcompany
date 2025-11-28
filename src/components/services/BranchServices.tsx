import type { Branch } from "../types";


// ===== MOCK DATA (Remove when API is ready) =====
const mockBranches: Branch[] = [
  {
    id: "1",
    name: "Sundar Print",
    slug: "mumbai",
    address: "123 Business Road, Mumbai, MH 400001",
    phone: "+91 98765 43210",
    heroImage: "/imgs/3JX7uE466ZoNjDth2Y5TFR.jpg",
    description: "Our Mumbai branch is strategically located in the heart of the city, serving corporate clients across India. We specialize in providing top-tier consulting services and logistics solutions tailored to the fast-paced Mumbai market.",
    gallery: [
      "/images/branches/mumbai1.jpg",
      "/images/branches/mumbai2.jpg",
      "/images/branches/mumbai3.jpg"
    ],
    services: ["Business Consulting", "Supply Chain Management", "Market Research"]
  },
  {
    id: "2",
    name: "Sundar Developers",
    slug: "delhi",
    address: "456 Commerce Plaza, New Delhi, DL 110001",
    phone: "+91 98765 43211",
    heroImage: "/imgs/s-s-builder-and-contractor-joga-bai-delhi-civil-contractors-3aidat6e95.avif",
    description: "The Delhi branch focuses on government contracts and infrastructure projects. With a dedicated team, we ensure compliance and efficiency in every project undertaken.",
    gallery: [
      "/images/branches/delhi1.jpg",
      "/images/branches/delhi2.jpg"
    ],
    services: ["Government Liaison", "Infrastructure Consulting", "Project Management"]
  },
  {
    id: "3",
    name: "Sundar Tech",
    slug: "bangalore",
    address: "789 Tech Park, Bangalore, KA 560001",
    phone: "+91 98765 43212",
    heroImage: "/imgs/001-technology.jpg",
    description: "In the tech hub of India, our Bangalore branch supports startups and established IT firms with specialized services in technology consulting and human resource solutions.",
    gallery: [
      "/images/branches/bangalore1.jpg",
      "/images/branches/bangalore2.jpg",
      "/images/branches/bangalore3.jpg"
    ],
    services: ["IT Consulting", "HR Solutions", "Software Development"]
  }
];

// ===== API FUNCTIONS (Future Integration) =====

// FUTURE: Uncomment when backend is ready
// export const getBranches = async (): Promise<Branch[]> => {
//   const res = await fetch(`${process.env.REACT_APP_API_URL}/branches`);
//   if (!res.ok) throw new Error('Failed to fetch branches');
//   return res.json();
// };

// CURRENT: Use mock data
export const getBranches = async (): Promise<Branch[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockBranches), 300); // Simulate network delay
  });
};

// FUTURE: Uncomment when backend is ready
// export const getBranchBySlug = async (slug: string): Promise<Branch> => {
//   const res = await fetch(`${process.env.REACT_APP_API_URL}/branches/${slug}`);
//   if (!res.ok) throw new Error('Failed to fetch branch');
//   return res.json();
// };

// CURRENT: Mock implementation
export const getBranchBySlug = async (slug: string): Promise<Branch | null> => {
  const branch = mockBranches.find(b => b.slug === slug);
  return branch || null;
};