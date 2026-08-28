import HeroMain from "../../components/portfolio/HeroMain";
import TechMarquee from "../../components/portfolio/TechMarquee";
import DeveloperIntro from "../../components/portfolio/DeveloperIntro";
import SkillsServices from "../../components/portfolio/SkillsServices";
import ProcessTimeline from "../../components/portfolio/ProcessTimeline";
import FinalCTA from "../../components/portfolio/FinalCTA";
import Container from "../../components/ui/Container";

export default function Home() {
  return (
    <>
      <Container>
        <HeroMain />
      </Container>

      <TechMarquee />

      <DeveloperIntro />
      <SkillsServices />
      <ProcessTimeline />
      <FinalCTA />
    </>
  );
}