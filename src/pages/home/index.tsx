import React from 'react';
import BranchSlider from '../../components/home/branch/BranchSlider';
import HomeBlogSection from '../../components/blog/HomeBlogSection';
import WhyChooseUs from '../../components/home/WhyChoose';
import HomeAboutSection from '../../components/home/HomeAboutSection';
import TopSectionMain from '../../components/home/TopSection';
import LegacyLeadership from '../../components/home/LeaderShip';
import StrategySection from '../../components/home/OurStrategy/StrategySection';
import InSumSection from '../../components/home/InSumSection';
import FaqSection from '../../components/home/FAQ';
import ContactHome from '../../components/home/ContactHome';
const HomePage: React.FC = () => {
  return (
    <>
      <TopSectionMain/>
      <BranchSlider/>
      <HomeAboutSection/>
      <LegacyLeadership/>
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