'use client'

import { Hero } from './components/hero/Index';
import { TextSlider } from './components/text-slider/Index';
import { TeamManagement } from './components/team-management/Index';
import { Bridge } from './components/bridge/Index';
import { ProblemSolution } from './components/problem-solution/Index';
import { CardSection } from './components/card-section/CardSections';
import { SliderCard } from './components/slider-card/Index';
import { CaseStudy } from './components/case-study/Index';
import { OurPartner } from './components/partners/Index';
import { FrequentlyAsked } from './components/frequently-asked/Index';
import { FoldingCard } from './components/folding-cards/Index';

import cardAnimationBackground from '../../public/images/card-animation-background.png';
import { StaticFoldingCard } from './components/folding-cards/StaticFoldingCard';

const cardAnimationData = [
  {
      cardHeading: 'SUPERCHARGE',
      padding: 'lg:py-4 py-1 xl:px-28 md:px-9 px-7',
      height: '',
      backgroundColor: 'bg-gray-light',
      textColor: '',
      backgroundImage: ''
  },
  {
      cardHeading: 'YOUR DATA',
      padding: 'lg:py-4 py-1 xl:px-28 md:px-9 px-7',
      height: 'lg:h-auto h-20', //lg:h-44 md:h-28 h-20
      backgroundColor: 'bg-green',
      textColor: '',
      backgroundImage: ''
  },
  {
      cardHeading: 'WITH',
      padding: 'lg:py-4 py-1 xl:px-28 md:px-9 px-7',
      height: 'lg:h-auto h-20', 
      backgroundColor: 'bg-purple',
      textColor: '',
      backgroundImage: cardAnimationBackground
  },
  {
      cardHeading: 'AI TOOLS',
      padding: 'lg:py-4 py-2 xl:px-28 md:px-9 px-7',
      height: 'lg:h-auto h-20',
      backgroundColor: 'bg-gray-light',
      textColor: '',
      backgroundImage: ''
  },
]


export default function Home() {

  return (
    <>
      <div className='xl:mx-40 mx-9'>
        <Hero />
        <TextSlider />
        <TeamManagement />
        <Bridge />
        <ProblemSolution />
        <CardSection />
        <SliderCard />
        <CaseStudy />
        <FoldingCard
          otherComponents={true}
          cardAnimationData={cardAnimationData}
        />
        {/* <StaticFoldingCard /> */}
        <OurPartner />
        <FrequentlyAsked />
      </div>
    </>
  );
}
