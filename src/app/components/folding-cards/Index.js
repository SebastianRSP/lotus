'use client'

import { useRef, useEffect } from 'react';
import { BottomCard2 } from './innerAnimatedCards';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { AITool } from '../ai-tool/Index';
import { StaticFoldingCard } from './StaticFoldingCard';
import { AfterLastAnimatedCard } from './AfterLastAnimatedCard';

// Initialize GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const FoldingCard = ({ cardAnimationData, otherComponents, extras }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const animatedCards = section.querySelectorAll('.animated-card');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom', // Animation starts when top of section hits bottom of viewport
        end: 'bottom top', // Animation ends when bottom of section hits top of viewport
        scrub: true,
      }
    });

    animatedCards.forEach((card, index) => {
      tl.fromTo(
        card,
        { y: otherComponents ? 0 : 20 }, // Starting position of cards
        { y: otherComponents ? -150 : -60 , opacity: 1, duration: otherComponents ? 1 : 1 }, // Ending position of cards
        (index * (otherComponents ? 0.1 : 0.1)) // Staggering effect for each card
      );
    });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, [cardAnimationData]);

  const renderNestedCards = (data, index = 0) => {
    if (data.length === 0) return null;

    const [current, ...rest] = data;
    const isLastCard = rest.length === 0;   // If we want to render any component after the last elment 

    return (
      <BottomCard2
        innerRef={(el) => {
          if (el) {
            cardsRef.current[index] = el;
          }
        }}
        key={current.cardHeading}
        text={current.cardHeading}
        padding={current.padding}
        height={current.height}
        backgroundColor={current.backgroundColor}
        backgroundImage={current.backgroundImage}
        textColor={current.textColor}
      >
        {renderNestedCards(rest, index + 1)}
        {otherComponents ? isLastCard && (<AfterLastAnimatedCard />) : null}
      </BottomCard2>
    );
  };

  return (
    <section
      ref={sectionRef}
      className={`${extras} relative bg-gray-light uppercase forced-full-width`}
    >
      {cardAnimationData.length > 0 && (
        <div className={`relative font-medium items-start text-black ${cardAnimationData[0].padding} lg:-mb-4 w-full lg:h-48 md:h-32 h-24 ${cardAnimationData[0].backgroundColor}`}>
          <span className="xl:text-123 md:text-7xl text-4xl">{cardAnimationData[0].cardHeading}</span>
        </div>
      )}
      {renderNestedCards(cardAnimationData.slice(1))}
      {/* {otherComponents && (
        <>
          <StaticFoldingCard />
        </>
      )} */}
    </section>
  );
};
