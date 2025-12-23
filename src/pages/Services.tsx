// import React, { useEffect, useState } from 'react';
// import type { Service } from '../components/types';
// import { getServices } from '../components/services/servicesServices';
// import ServiceCard from '../components/services/ServicesCard';

// const Services: React.FC = () => {
//   const [services, setServices] = useState<Service[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const data = await getServices();
//         setServices(data);
//       } catch (error) {
//         console.error('Error fetching services:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchServices();
//   }, []);

//   if (isLoading) return <div className="text-center py-12">Loading services...</div>;

//   return (
//     <div className="min-h-screen bg-gray-50 py-16">
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {services.map(service => (
//             <ServiceCard key={service.id} service={service} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;