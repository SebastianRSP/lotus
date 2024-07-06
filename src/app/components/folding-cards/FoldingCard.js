'use client'

import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import defaultImage from '../../../../public/icons/defaultImageIcon.svg';
import arrowNext from '../../../../public/icons/arrow-next.svg';

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
]

export const FoldingCardXScroll = () => {
    const sectionRef = useRef(null);
    const [scrollX, setScrollX] = useState(0);
    const [viewportHeight, setViewportHeight] = useState(0); // Initial state set to 0
    const [isLgScreen, setIsLgScreen] = useState(false);

    useEffect(() => {
        // Function to check if screen size is lg
        const checkIsLgScreen = () => {
            setIsLgScreen(window.innerWidth >= 1024); // Set to true if width is 1024px or more (lg screen)
        };

        // Call the function once when component mounts
        checkIsLgScreen();

        // Event listener to check screen size on resize
        window.addEventListener('resize', checkIsLgScreen);

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener('resize', checkIsLgScreen);
        };
    }, []); // Empty dependency array ensures this useEffect runs only once

    useEffect(() => {
        // Function to update viewportHeight when component mounts
        const updateViewportHeight = () => {
            setViewportHeight(window.innerHeight); // Set viewportHeight once window is available
        };

        // Call the function once when component mounts
        updateViewportHeight();

        // Event listener to update viewportHeight on window resize
        window.addEventListener('resize', updateViewportHeight);

        // Clean up the event listener when component unmounts
        return () => {
            window.removeEventListener('resize', updateViewportHeight);
        };
    }, []); // Empty dependency array ensures this useEffect runs only once

    useEffect(() => {
        const handleScroll = () => {
            if (isLgScreen) {
                const section = sectionRef.current;
                const sectionTop = section.getBoundingClientRect().top;

                if (sectionTop <= 20) {
                    const scrollOffset = Math.max(0, (viewportHeight - sectionTop) / 10);
                    setScrollX(scrollOffset);
                } else {
                    setScrollX(0);
                }
            }
        };
        if (isLgScreen) { 
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [viewportHeight, isLgScreen]); // Ensure handleScroll updates when viewportHeight changes

    return (
        <div ref={sectionRef} className={`lg:h-[3335vh] h-auto lg:px-0 md:px-9 px-7 lg:pb-0 pb-20`}>
            <div className="overflow-hidden mt-32 lg:sticky top-20">
                <div 
                    className='grid md:grid-cols-2 lg:grid-flow-col lg:grid-cols-none lg:gap-0 md:gap-16 gap-4' 
                    style={{
                        translate: 'none',
                        rotate: 'none',
                        scale: 'none',
                        transform: `translate3d(-${scrollX}px, 0px, 0px)`,
                        transition: 'transform 0.1s ease'
                    }}
                >
                    {cardContent.map((data, index) => {
                        const offset = index * (viewportHeight / 1.2); // Adjust this ratio as needed
                        const transformValue = scrollX >= offset ? `translate3d(${scrollX - offset}px, 0px, 0px)` : 'translate(0px, 0px)';

                        return (
                            <div 
                                key={index} 
                                className={`border-light-gray border lg:w-50 w-auto hover:bg-green cursor-pointer ${index === 0 ? 'bg-green' : 'bg-gray-light'}`}
                                style={{
                                    translate: 'none',
                                    rotate: 'none',
                                    scale: 'none',
                                    transform: transformValue,
                                    transition: 'transform 0.1s ease'
                                }}
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
                                        <h4 className="lg:text-3xl text-2xl lg:font-bold font-semibold leading-40 lg:mb-10 mb-5">
                                            {data.cardHeading}
                                        </h4>
                                        <div className='flex lg:flex-row flex-col justify-between items-end lg:gap-14 md:gap-7 gap-5'>
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
