import { AboutPrint } from "../../../components/branchlandingpage/sundarprint/AboutPrint"
import { ContactPrint } from "../../../components/branchlandingpage/sundarprint/ContactPrint"
import { GalleryPrint } from "../../../components/branchlandingpage/sundarprint/GalleryPrint"
import { HeroPrint } from "../../../components/branchlandingpage/sundarprint/HeroPrint"
import { IndustriesAndTestimonialsPrint } from "../../../components/branchlandingpage/sundarprint/IndustriesAndTestimonialsPrint"
import { ProcessPrint } from "../../../components/branchlandingpage/sundarprint/ProcessPrint"
import { ServicesPrint } from "../../../components/branchlandingpage/sundarprint/ServicesPrint"
import { WhyChooseUsPrint } from "../../../components/branchlandingpage/sundarprint/WhyChoosePrint"

const SundarPrintPage = () => {
  return (
    <>
      <HeroPrint />
      <AboutPrint/>
      <ServicesPrint/>
      <ProcessPrint/>
      <GalleryPrint/>
      <WhyChooseUsPrint/>
      <IndustriesAndTestimonialsPrint/>
      <ContactPrint/>
    </>
  )
}

export default SundarPrintPage