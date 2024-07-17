import Image from "next/image";
import defaultImage from '../../../../public/icons/defaultImageIcon.svg';
import arrowNext from '../../../../public/icons/arrow-next.svg';
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const cardContent = [
    {
        cardHeading: 'DATA INGESTION',
        cardContentDetail: 'Fed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.'
    },
    {
        cardHeading: 'PREDICTIVE ANALYSIS',
        cardContentDetail: 'Fed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.'
    },
    {
        cardHeading: 'DATA VISUALIZATION',
        cardContentDetail: 'Fed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et..'
    },
    {
        cardHeading: 'PREDICTIVE ANALYSIS',
        cardContentDetail: 'Fed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et.'
    },
    {
        cardHeading: 'DATA VISUALIZATION',
        cardContentDetail: 'Fed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et..'
    },
];




export const StaticFoldingCard = () => {

    const useGSAP = (animation, deps) => {
        useEffect(() => {
            if (window.matchMedia('(min-width: 1024px)').matches) {
                animation();
            }
            // Clean up on unmount
            return () => ScrollTrigger.getAll().forEach(st => st.kill());
        }, deps);
      };
      
      useGSAP(() => {
        const foldingContainer = document.querySelector('.folding-container');
        const cards = gsap.utils.toArray('.folding-card');
      
        // Ensure there are no duplicate elements
        const uniqueCards = [...new Set(cards)];
      
          let timeline = gsap.timeline({
              scrollTrigger: {
                  trigger: foldingContainer,
                  start: 'top-=500 top',
                  end: () => `+=${((window.innerHeight * uniqueCards.length))}`,
                  scrub: true,
                  pin: true
              }
          });
      
        uniqueCards.forEach((card, index) => {
          // Calculate the x position based on the index
          let xPos = index === 0 ? 0 : `-${index * 75}%`; // Adjust the percentage as needed
      
          timeline.to(card, {
            x: xPos,
            duration: 4,
            ease: 'none',
          }, (index === 1 ? index * 0.2 : index* 0.1)); // Use index to stagger the start times with a delay
        });
      }, []);
    
    
    return (
        <div data-folding-parent className={`folding-container h-auto lg:px-0 md:px-9 px-7 lg:pb-0 xl:pb-0 2xl:pb-0 pb-20`}>
            <div data-folding-card className="folding-sticky-container overflow-hidden mt-32 lg:sticky top-20">
                <div  className='grid md:grid-cols-2 lg:grid-flow-col lg:grid-cols-none lg:gap-0 md:gap-16 gap-4' >
                    {cardContent.map((data, index) => {
                        return (
                            <div 
                                key={index} 
                                className={`folding-card border-green divide-x border-y-2 border lg:w-50 w-auto cursor-pointer bg-black`}
                            >
                                <div className="grid flex-grow lg:px-20 px-5 lg:pt-36 pt-10 lg:pb-16 pb-8 duration-300 transition-colors relative">
                                    <div className='flex flex-col'>
                                        <Image
                                            src={defaultImage}
                                            className="lg:pb-32 pb-16"
                                            alt="default image icon"
                                            width={60}
                                            height={60}
                                        />
                                        <h4 className="lg:text-3xl text-2xl text-green lg:font-bold font-semibold leading-40 lg:mb-10 mb-5">
                                            {data.cardHeading}
                                        </h4>
                                        <div className='flex lg:flex-row flex-col text-white justify-between items-end lg:gap-14 md:gap-7 gap-5'>
                                            <p className="text-base lg:font-semibold font-normal leading-7">
                                                {data.cardContentDetail}
                                            </p>
                                            <Image
                                                src={arrowNext}
                                                className='lg:w-3/12 w-1/12'
                                                alt="Arrow Next icon"
                                                width={64}
                                                height={36}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
} 