
import Navbar from '../../components/header/Navbar'
import CTAventures from '../../components/ventures/CTAventures'
import UnifiedExecellence from '../../components/ventures/UnifiedExecellence'
import { VenturesUI } from '../../components/ventures/VenturesUi'

const VenturesPage = () => {
  return (
    <>
     <div>
      
      <Navbar />
      <VenturesUI/>
      <UnifiedExecellence/>
      <CTAventures/>
     </div>
    </>
  )
}

export default VenturesPage