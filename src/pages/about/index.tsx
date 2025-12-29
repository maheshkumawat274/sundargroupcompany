import AboutCTA from "../../components/aboutus/AboutCTA"
import AboutHero from "../../components/aboutus/AboutHeroSection"
import CompanyOverview from "../../components/aboutus/CompanyOverview"
import LeadershipPhilosophy from "../../components/aboutus/LeadershipPhilosophy"
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
      <CompanyOverview/>
      <VisionMission/>
      <ValuesSection/>
      <LeadershipPhilosophy/>
      <TeamSection/>
      <AboutCTA/>
     </div>
    </>
  )
}

export default AboutPage