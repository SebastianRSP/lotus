'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import defaultImage from '../../../../../public/icons/defaultImageIcon.svg';
import curvedCard from '../../../../../public/new-home-assets/curved-card.svg';
import { BorderDivider } from "../../borders-divider/Index";

const cardDetails = [
    {
        cardDesp: 'Book a demo',
        defaultImage: defaultImage
    },
    {
        cardDesp: `Decentralise, analyse, and secure your data using The BridgeTM`,
        defaultImage: defaultImage
    },
    {
        cardDesp: `Transform your company liability into a valuable asset`,
        defaultImage: defaultImage
    },
];

export const CardsSection = () => {


    gsap.registerPlugin(ScrollTrigger);

    const cardRefs = useRef([]);
    const borderRef = useRef(null);  // Ref for the BorderDivider

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            // Set up initial hidden positions for the first and third cards behind the middle card
            gsap.set(cardRefs.current[0], {
                translateX: '20%',
                translateY: '10%',
                scale: 1,
                opacity: 1
            });

            gsap.set(cardRefs.current[1], {
                scale: 1,
                opacity: 1
            });

            gsap.set(cardRefs.current[2], {
                translateX: '-20%',
                translateY: '10%',
                scale: 1,
                opacity: 1
            });

            // Set up initial position for BorderDivider (moving it lower)
            gsap.set(borderRef.current, {
                y: -140,  // Moves the borders 140px below the initial position
                opacity: 1
            });

            // GSAP Timeline for animation on scroll
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRefs.current[1], // Middle card as trigger
                    start: "top+=1500 80%", // Trigger animation when 80% of the section is in view
                    end: "bottom+=1500 20%",
                    scrub: true, // Sync the animation with scroll
                    toggleActions: "play reverse play reverse",
                    markers: true
                }
            });

            // Animate first card (left side)
            tl.to(cardRefs.current[0], {
                translateX: '0%',
                translateY: '0%',
                scale: 1,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out"
            }, "<");

            // Animate middle card
            tl.to(cardRefs.current[1], {
                scale: 1,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out"
            }, "<");

            // Animate third card (right side)
            tl.to(cardRefs.current[2], {
                translateX: '0%',
                translateY: '0%',
                scale: 1,
                opacity: 1,
                duration: 1.5,
                ease: "power3.out"
            }, "<");

            // Animate BorderDivider after cards appear
            tl.to(borderRef.current, {
                y: 0,   // Move it back to its original position
                opacity: 1, // Fade in
                duration: 1,
                ease: "power3.out"
            });
        });

        // Clean up on unmount
        return () => mm.revert();
    }, []);

    return (
        <section className="2xl:py-28 md:py-16 py-10">
            <div className="relative">
                <div className="bg-black text-white text-center rounded-tl-lg rounded-tr-lg 2xl:px-40 xl:px-28 px-5 2xl:py-28 py-12">
                    <h6 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-2xl 2xl:leading-84 xl:leading-45 lg:leading-60 md:leading-48 leading-9 font-thin">
                        Is your data strategy <br /> ready for the future?
                    </h6>
                    <p className="text-green 2xl:text-4xl lg:text-3xl md:text-2xl text-xs mt-5 font-extralight 2xl:leading-9 md:leading-5 leading-3">
                        Explore how our platform can future-proof your enterprise.
                    </p>
                    <div className="2xl:py-32 md:py-20 py-10 cards-wrap relative z-20">
                        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-7 gap-6">
                            {cardDetails.map((card, index) => (
                                <div
                                    key={index}
                                    className="bg-black border-transparent rounded-lg w-full h-full text-black text-center relative lg:px-10 lg:pt-10 md:px-0 md:pt-0"
                                    ref={el => cardRefs.current[index] = el}
                                >
                                    <div className="rounded-tl-lg text-green flex justify-center items-center">
                                        <div className="absolute inset-0 md:w-full w-fit h-full justify-self-center">
                                            <span className="absolute 2xl:text-lg text-md 2xl:top-3 xl:top-3 lg:top-2 md:top-1 sm:top-2 top-3 2xl:left-4 xl:left-3 lg:left-2 md:left-1 sm:left-2 left-2">0{index + 1}</span>
                                            <Image
                                                src={curvedCard}
                                                className="md:w-auto w-full md:h-auto h-full relative -left-[2px]"
                                                objectFit="contain"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-rows-2 items-center justify-center relative md:w-full w-4/6">
                                        <div className="w-full 2xl:py-14 xl:py-12 md:py-9 py-14">
                                            <Image
                                                src={card.defaultImage}
                                                className="2xl:w-16 w-10 2xl:h-16 h-10"
                                                alt="default Image"
                                                width={69}
                                                height={69}
                                            />
                                        </div>
                                        <div className="h-full lg:p-0 px-3">
                                            <p className="2xl:text-2xl lg:text-lg md:text-md text-sm">
                                                {card.cardDesp}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Apply the ref to the BorderDivider */}
                <div ref={borderRef}>
                    <BorderDivider />
                </div>
            </div>
        </section>
    );
};
