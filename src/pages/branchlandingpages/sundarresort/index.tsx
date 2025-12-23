import AboutResort from "../../../components/branchlandingpage/sundarresort/AboutResort"
import ContactResort from "../../../components/branchlandingpage/sundarresort/ContactResort"
import GallarySection from "../../../components/branchlandingpage/sundarresort/GallarySection"
import HeroResort from "../../../components/branchlandingpage/sundarresort/HeroResort"
import ResortServicesPage from "../../../components/branchlandingpage/sundarresort/services/ResortServicesPage"
import WhyResort from "../../../components/branchlandingpage/sundarresort/WhyResort"

const SundarResortPage = () => {
  return (
    <>
      <div>
        <HeroResort />
        <AboutResort/>
        
        <GallarySection /> 
        <ResortServicesPage/> 
        <WhyResort /> 
        <ContactResort/> 
      </div>
    </>
  )
}

export default SundarResortPage