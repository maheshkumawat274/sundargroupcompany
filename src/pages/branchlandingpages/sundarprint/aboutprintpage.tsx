import { AboutPrint } from "../../../components/branchlandingpage/sundarprint/aboutus/AboutPrint"
import HeaderPrint from "../../../components/branchlandingpage/sundarprint/HeaderPrint"
import { ProcessPrint } from "../../../components/branchlandingpage/sundarprint/aboutus/ProcessPrint"
import { WhyChooseUsPrint } from "../../../components/branchlandingpage/sundarprint/aboutus/WhyChoosePrint"

const Aboutprintpage = () => {
  return (
    <>
     <div>
      <HeaderPrint/>
      <AboutPrint/>
      <ProcessPrint/>
      <WhyChooseUsPrint/>
     </div>
    </>
  )
}

export default Aboutprintpage