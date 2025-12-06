import AboutHero from "../../components/aboutus/AboutHeroSection"
import OurStory from "../../components/aboutus/OurStory"
import TeamSection from "../../components/aboutus/TeamSection"
import ValuesSection from "../../components/aboutus/ValueSection"
import VisionMission from "../../components/aboutus/VisionMission"

const AboutPage = () => {
  return (
    <>
     <div>
      <AboutHero/>
      <OurStory/>
      <VisionMission/>
      <ValuesSection/>
      <TeamSection/>
     </div>
    </>
  )
}

export default AboutPage