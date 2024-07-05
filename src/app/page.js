import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Index";
import { TextSlider } from "./components/text-slider/Index";
import { TeamManagement } from "./components/team-management/Index";
import { Bridge } from "./components/bridge/Index";
import { ProblemSolution } from "./components/problem-solution/Index";
import { BorderDivider } from "./components/borders-divider/Index";
import { LottieAnimation } from "./components/animation/Index";
import { CardSection } from "./components/card-section/CardSections";
import { FoldingCard } from "./components/folding-cards/Index";
import { SliderCard } from "./components/slider-card/Index";
import { CaseStudy } from "./components/case-study/Index";
import { DataTool } from "./components/data-tool/Index";
import { AITool } from "./components/ai-tool/Index";
import { FoldingCardXScroll } from "./components/folding-cards/FoldingCard";
import { OurPartner } from "./components/partners/Index";
import { FrequentlyAsked } from "./components/frequently-asked/Index";
import { Footer } from "./components/footer/Index";

export default function Home() {
  return (
    <>
      <Hero />
      <TextSlider />
      <TeamManagement />
      <Bridge />
      <ProblemSolution />
      {/* <BorderDivider />
      <LottieAnimation /> */}
      <CardSection />
      <SliderCard />
      <CaseStudy />
      {/* <section className="relative bg-gray-light uppercase">
        <DataTool />
        <AITool />
        <FoldingCardXScroll />
      </section>
      <OurPartner />
      <FrequentlyAsked /> */}
    </>
  );
}
