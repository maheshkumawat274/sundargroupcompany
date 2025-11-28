import type { Service } from "../types";


const mockServices: Service[] = [
  {
    id: "1",
    title: "Business Consulting",
    description: "Strategic advice to improve your business performance and growth.",
    icon: "📊"
  },
  {
    id: "2",
    title: "Logistics Management",
    description: "End-to-end supply chain solutions for efficient operations."
  },
  {
    id: "3",
    title: "IT Solutions",
    description: "Custom software development and IT support services."
  },
  {
    id: "4",
    title: "HR Consulting",
    description: "Talent acquisition and human resource management services."
  }
];

// FUTURE API
// export const getServices = async (): Promise<Service[]> => {
//   const res = await fetch(`${process.env.REACT_APP_API_URL}/services`);
//   return res.json();
// };

export const getServices = async (): Promise<Service[]> => {
  return mockServices;
};