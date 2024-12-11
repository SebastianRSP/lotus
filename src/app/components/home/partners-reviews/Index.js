'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Partners Import
import FileCoin from '../../../../../public/new-home-assets/filecoin.svg';
import Blocz from '../../../../../public/new-home-assets/blocz.svg';
import Clearskye from '../../../../../public/new-home-assets/ClearSky2.png';
import Sia from '../../../../../public/new-home-assets/sia.svg';
import Storj from '../../../../../public/new-home-assets/storj.svg';
import FTH from '../../../../../public/new-home-assets/FTH.jpg';
import DCENT from '../../../../../public/new-home-assets/DCENT.jpg';

const partners = [
    {
        partnerName: 'FileCoin',
        partnerIcon: FileCoin,
        face: '/new-home-assets/profiles/Filecoin_Face.png',
        width: 130,
        height: 36,
        testimonial: '“The Bridge aims to abstract away the things customers don´t care about and refocuses the conversation and capabilities on what they do; how to maximize value of their data.”',
        person: "PORTER STOWELL",
        title: "Head of Ecosystem",
        company: "FILECOIN FOUNDATION"
    },
    {
        partnerName: 'FTH',
        partnerIcon: FTH,
        face: '/new-home-assets/profiles/FTH_Face.png',
        width: 80,
        height: 46,
        testimonial: '“We are big believers in decentralized technology and what it means for enterprises. That is why we are partnering with the Lotus Data group to deliver these services.”',
        person: "Nathan Dragun",
        title: "CEO",
        company: "Future Tech Holdings"
    },
    {
        partnerName: 'DCENT',
        partnerIcon: DCENT,
        face: '/new-home-assets/profiles/Face_DCENT.jpg',
        width: 113,
        height: 44,
        testimonial: '“By bridging data ecosystems, The Bridge project can pave the way for unparalleled data sharing and accessibility, a mission that resonates strongly with our vision at DCENT to drive interconnected digital (storage) infrastructure.”',
        person: "Hidde Hoogland",
        title: "CEO",
        company: "DCent"
    },
    {
        partnerName: 'Clearsky',
        partnerIcon: Clearskye,
        face: '/new-home-assets/profiles/FTHFACE.jpg',
        width: 75,
        height: 53,
        testimonial: '“This bridge serves as a nexus for technology, community, and innovation, unlocking the full potential of blockchain technology for data protection, archiving, and recovery solutions.”',
        person: "Rich Van Duysen",
        title: "CEO",
        company: "Clearsky"
    },
    {
        partnerName: 'Blocz',
        partnerIcon: Blocz,
        face: '/new-home-assets/profiles/FACE_BLOCZ.jpeg',
        width: 113,
        height: 29,
        testimonial: '“The Bridge seeks to remove the shackles of lock-in, democratizing data, unlocking it’s potential and unleashing the power of your data. The value of your data unlocked, processed, and located where you need it!”',
        person: "Chris Ward-Jones",
        title: "CTO",
        company: "blocz.io"
    }
];

export const PartnerReviews = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Keep track of the currently active partner
    const [progress, setProgress] = useState(0); // Keep track of the progress bar
    const [cycleComplete, setCycleComplete] = useState(false); // Track if the cycle is complete
    const [containerWidth, setContainerWidth] = useState('0px');
    const [containerHeight, setContainerHeight] = useState('0px');
    const setWidth = useRef(null);  // Initialize the ref as null

    // Calculate the position (row, col) based on activeIndex
    const getTranslation = (index) => {

        // Check if the ref (setWidth.current) is available
        if (!setWidth.current) {
            return { translateX: 0, translateY: 0 };  // Return default values if the ref is null
        }

        const col = index % 3; // Column (0, 1, 2)
        const row = Math.floor(index / 3); // Row (0 or 1)

        // Calculate the translation needed to align the active partner with the container
        const translateX = -col * (setWidth.current.clientWidth + 20);
        const translateY = -row * (setWidth.current.clientHeight);

        return { translateX, translateY };
    };

    useEffect(() => {
        const updateWidth = () => {
            if (setWidth.current) {
                const width = setWidth.current.clientWidth;
                const height = setWidth.current.clientHeight;
                const totalHeight = height;
                setContainerWidth(width + 'px');
                setContainerHeight(totalHeight + 'px');
            }
        };

        // Call updateWidth initially to set the width on first render
        updateWidth();

        // Add event listener to update width on window resize
        window.addEventListener('resize', updateWidth);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    useEffect(() => {
        const cycleDuration = 10000;
        const progressStep = 100 / (cycleDuration / 50);

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    setCycleComplete(true);
                    return 100;
                }
                return prevProgress + progressStep;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [activeIndex]);

    useEffect(() => {
        if (cycleComplete) {
            setCycleComplete(false);
            setProgress(0);
            setActiveIndex((prevIndex) => (prevIndex + 1) % partners.length);
        }
    }, [cycleComplete]);

    const handleClick = (index) => {
        setActiveIndex(index);
        setProgress(0);
        setCycleComplete(false);
    };

    const { translateX, translateY } = getTranslation(activeIndex);

    return (
        <section className="2xl:px-100 xl:px-90 lg:px-8 px-5">
            <h4 className="bg-green capitalize text-black 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-xl 2xl:leading-64 xl:leading-48 lg:leading-42 md:leading-34 leading-7 2xl:font-normal font-medium inline px-0.2">
                What our partners <br /> have to say.
            </h4>
            <div className="2xl:my-24 my-12 2xl:px-36 xl:px-28 lg:px-14 md:px-10 px-10 forced-full-width border-y border-gray-light h-auto">
                <div className="divide-x divide-gray-light border-x border-gray-light grid lg:grid-cols-12 grid-col-1">
                    <div className="lg:col-span-5 flex flex-col h-auto justify-between 2xl:p-12 xl:p-11 lg:p-10 md:p-9 p-1" >
                        <div className="xl:h-27 lg:h-80 h-64 relative w-full overflow-hidden" ref={setWidth}>
                            <div
                                className={`absolute inset-0 grid grid-cols-3 gap-5 w-max transition-transform duration-200`}
                                style={{
                                    transform: `translate(${translateX}px, ${translateY}px)`,
                                    transitionDuration: '1.3s',
                                    // transitionTimingFunction: 'cubic-bezier(0.14, 1.56, 0.14, 1)',
                                    // transitionTimingFunction: 'cubic-bezier(0.10, 1.4, 0.10, 1)',
                                    transitionTimingFunction: 'cubic-bezier(0.1, 1.1, 0.1, 1)'
                                }}
                            >
                                {partners.map((currentPartner, index) => (
                                    <div key={index} style={{ maxWidth: containerWidth, height: containerHeight }} className={`grid grid-rows-6 justify-between xl:!h-26 lg:!h-19 !h-60 items-center`}>
                                        {/* h-available */}
                                        <div className="2xl:row-span-1 row-span-1 2xl:w-40 xl:w-36 lg:w-28 md:w-32 w-28 h-full max-h-[40px]">
                                            <Image
                                                src={currentPartner?.partnerIcon}
                                                alt={`${currentPartner?.partnerName} icon`}
                                                width={104}
                                                height={64}
                                                layout='responsive'
                                                className="max-h-[40px]"
                                            />
                                        </div>
                                        <p className="2xl:row-span-2 row-span-3 2xl:text-2xl xl:text-xl lg:text-lg md:text-md text-sm font-300 2xl:leading-7 leading-5 self-center 2xl:mt-5 ">
                                            {currentPartner?.testimonial}
                                        </p>
                                        <div className="2xl:row-span-3 row-span-2 flex items-start lg:gap-8 gap-5 pl-2 2xl:mt-16 self-end">
                                            {/* lg:p-10 md:p-8 p-7 */}
                                            <div className="bg-green border border-black 2xl:w-28 xl:w-24 md:w-20 w-16 2xl:h-28 xl:h-24 md:h-20 h-16 relative rounded-4">
                                                <div className="absolute inset-0 bg-gray-light border rounded-4 -translate-x-[2px] -translate-y-[2px]">
                                                    <Image
                                                        src={currentPartner?.face}
                                                        alt={`${currentPartner?.partnerName} icon`}
                                                        width={104}
                                                        height={64}
                                                        layout='responsive'
                                                    />
                                                </div>
                                            </div>
                                            <div >
                                                <span className="2xl:text-2xl xl:text-xl lg:text-lg md:text-base text-sm 2xl:leading-6 xl:leading-5 lg:leading-18 md:leading-4 leading-14 font-bold">
                                                    {currentPartner?.person}
                                                </span>
                                                <p className="text-base font-normal leading-4 mt-2">
                                                    {currentPartner?.title}
                                                    <span className="text-xs font-extralight block">{currentPartner?.company}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full h-full flex flex-col justify-end">
                                <div className="flex justify-end opacity-50">
                                    <span className="text-xs font-extralight leading-5 tracking-space60">{`0${activeIndex + 1}/05`}</span>
                                </div>
                                <div className="relative w-full h-[2px] bg-gray-200 mt-2">
                                    <div
                                        className="absolute left-0 top-0 h-full bg-black transition-all ease-linear"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-3 divide-x divide-y divide-gray-light">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className={`lg:px-10 px-6 2xl:py-20 py-7 flex justify-center items-center divide-x divide-y divide-gray-light cursor-pointer`}
                                onClick={() => handleClick(index)}
                            >
                                <Image
                                    src={partner?.partnerIcon}
                                    className={`${activeIndex === index ? 'opacity-100' : 'opacity-30'
                                        }`}
                                    alt={`${partner?.partnerName} icon`}
                                    width={partner?.width}
                                    height={partner?.height}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

