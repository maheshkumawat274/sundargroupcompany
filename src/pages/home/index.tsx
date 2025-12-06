import React from 'react';
import { useBranches } from '../../hooks/useBranches';
import TopSection from '../../components/home/TopSection';
import BranchSlider from '../../components/branch/BranchSlider';
import HomeBlogSection from '../../components/blog/HomeBlogSection';
import WhyChooseUs from '../../components/home/WhyChoose';
import HomeAboutSection from '../../components/home/HomeAboutSection';
const HomePage: React.FC = () => {
  const { branches, isLoading } = useBranches();
  
  // Mock services & blogs (API-ready)
  // const [services, setServices] = React.useState<any[]>([]);

  // React.useEffect(() => {
  //   const loadData = async () => {
  //     const serviceData = await getServices();
  //     setServices(serviceData);
  //   };
  //   loadData();
  // }, []);

  return (
    <>
      {/* Hero Section */}
      <TopSection/>
      {/* Branch Slider */}
      {isLoading ? (
        <div className="text-center py-12">Loading branches...</div>
      ) : (
        <BranchSlider branches={branches} />
      )}
      <HomeAboutSection/>
      <WhyChooseUs/>
      <HomeBlogSection/>

      {/* Services Preview */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section> */}

      
    </>
  );
};

export default HomePage;