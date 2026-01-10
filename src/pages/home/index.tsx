import React from 'react';
import BranchSlider from '../../components/home/branch/BranchSlider';
import HomeBlogSection from '../../components/blog/HomeBlogSection';
import WhyChooseUs from '../../components/home/WhyChoose';
import HomeAboutSection from '../../components/home/HomeAboutSection';
import TopSectionMain from '../../components/home/TopSection';
import StrategySection from '../../components/home/OurStrategy/StrategySection';
import InSumSection from '../../components/home/InSumSection';
import FaqSection from '../../components/home/FAQ';
import ContactHome from '../../components/home/ContactHome';
import LeadershipSection from '../../components/home/leadership/LeaderShipSection';
import Navbar from '../../components/header/Navbar';
const HomePage: React.FC = () => {
  return (
    <>
    
      <Navbar />
      <TopSectionMain/>
      <BranchSlider/>
      <HomeAboutSection/>
      <LeadershipSection/>
      <WhyChooseUs/>
      <StrategySection/>
      <HomeBlogSection/>
      
      <ContactHome/>
      <InSumSection/>
      <FaqSection/>
    </>
  );
};

export default HomePage;