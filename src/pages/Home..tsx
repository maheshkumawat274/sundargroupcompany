import React from 'react';
import { useBranches } from '../hooks/useBranches';
import { getServices } from '../components/services/servicesServices';
import { getBlogs } from '../components/blog/BlogServices';
import BranchSlider from '../components/home/BranchSlider';
import ServiceCard from '../components/services/ServicesCard';
import BlogCard from '../components/blog/BlogCard';
import TopSection from '../components/home/TopSection';
const Home: React.FC = () => {
  const { branches, isLoading } = useBranches();
  
  // Mock services & blogs (API-ready)
  const [services, setServices] = React.useState<any[]>([]);
  const [blogs, setBlogs] = React.useState<any[]>([]);

  React.useEffect(() => {
    const loadData = async () => {
      const serviceData = await getServices();
      const blogData = await getBlogs();
      setServices(serviceData);
      setBlogs(blogData);
    };
    loadData();
  }, []);

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

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;