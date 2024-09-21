'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Partners Import
import FileCoin from '../../../../../public/new-home-assets/filecoin.svg';
import Arweave from '../../../../../public/new-home-assets/arweave.svg';
import Blocz from '../../../../../public/new-home-assets/blocz.svg';
import Clearskye from '../../../../../public/new-home-assets/clearskye.svg';
import Sia from '../../../../../public/new-home-assets/sia.svg';
import Storj from '../../../../../public/new-home-assets/storj.svg';

const partners = [
    {
        partnerName: 'FileCoin',
        partnerIcon: FileCoin,
        width: 130,
        height: 36,
        testimonial: "One of the stumbling blocks to the broader adoption of blockchain is that different platforms often use distinct protocols and standards.",
        person: "PORTER STOWELL",
        title: "Head of Community",
        company: "FILECOIN FOUNDATION"
    },
    {
        partnerName: 'Sia',
        partnerIcon: Sia,
        width: 80,
        height: 46,
        testimonial: "Sia's decentralized storage platform leverages underutilized storage capacity to bring greater privacy, security, and efficiency.",
        person: "DAVID VORICK",
        title: "CEO & Co-Founder",
        company: "SIA"
    },
    {
        partnerName: 'Arweave',
        partnerIcon: Arweave,
        width: 156,
        height: 34,
        testimonial: "Arweave offers truly permanent data storage, meaning you can store your files, apps, and even websites, forever.",
        person: "SAM WILLIAMS",
        title: "CEO",
        company: "ARWEAVE"
    },
    {
        partnerName: 'Storj',
        partnerIcon: Storj,
        width: 113,
        height: 44,
        testimonial: "Storj brings decentralization to cloud storage, providing faster and cheaper services with the highest standards of security.",
        person: "BEN GOLUB",
        title: "Executive Chairman",
        company: "STORJ"
    },
    {
        partnerName: 'Clearskye',
        partnerIcon: Clearskye,
        width: 68,
        height: 53,
        testimonial: "ClearSkye helps organizations achieve their identity management goals faster with an integrated approach to security and compliance.",
        person: "MARIO GIAMMETTI",
        title: "VP Product",
        company: "CLEARSKYE"
    },
    {
        partnerName: 'Blocz',
        partnerIcon: Blocz,
        width: 113,
        height: 29,
        testimonial: "Blocz offers unique blockchain solutions that connect all elements of a distributed ledger, making it easier for enterprises to adopt the technology.",
        person: "ELENA PEREZ",
        title: "CTO",
        company: "BLOCZ"
    }
];

export const PartnerReviews = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Keep track of the currently active partner
    const [progress, setProgress] = useState(0); // Keep track of the progress bar
    const [cycleComplete, setCycleComplete] = useState(false); // Track if the cycle is complete
    const [containerWidth, setContainerWidth] = useState('0px');
    const setWidth = useRef(null);  // Initialize the ref as null

    useEffect(() => {
        const updateWidth = () => {
            if (setWidth.current) {
                const width = setWidth.current.clientWidth;  // Get the width of the div
                setContainerWidth(width + 'px');  // Store the width in the state
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
        const cycleDuration = 10000; // Duration for one full cycle in milliseconds (e.g., 10 seconds)
        const progressStep = 100 / (cycleDuration / 50); // Increment step for progress every 50ms

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    setCycleComplete(true); // Mark cycle as complete
                    return 100;
                }
                return prevProgress + progressStep;
            });
        }, 30); // Update progress every 50ms

        return () => clearInterval(interval); // Clear interval on component unmount or when progress changes
    }, [activeIndex]);

    useEffect(() => {
        if (cycleComplete) {
            setCycleComplete(false);
            setProgress(0);
            setActiveIndex((prevIndex) => (prevIndex + 1) % partners.length);
        }
    }, [cycleComplete]);

    const handleClick = (index) => {
        setActiveIndex(index); // Update the active partner
        setProgress(0); // Reset progress on manual click
        setCycleComplete(false); // Reset cycle complete flag
    };

    const activePartner = partners[activeIndex];

    return (
        <div className="2xl:px-100 xl:px-90 lg:px-8 px-5">
            <h4 className="bg-green capitalize text-black 2xl:text-4xl md:text-2xl text-lg 2xl:leading-48 md:leading-8 leading-5 font-medium inline px-0.2">
                What our partners <br /> have to say.
            </h4>
            <div className="2xl:my-24 my-12 2xl:px-36 xl:px-28 lg:px-14 md:px-10 px-10 forced-full-width border-y border-y-gray-border h-auto">
                <div className="border-x border-x-gray-border grid lg:grid-cols-2 grid-col-1">
                    <div className="flex flex-col h-auto justify-between lg:p-6 p-5" >
                        <div className="h-80 relative w-full overflow-hidden" ref={setWidth}>
                            <div className={`absolute inset-0 grid grid-cols-3 lg:gap-6 gap-5 w-max`}>
                                {partners.map((currentPartner, index) => (
                                    <>
                                        {/* {activePartner.partnerName === currentPartner.partnerName && ( */}
                                            <div key={index} style={{ maxWidth: containerWidth }} className={`grid grid-rows-3 justify-between items-center gap-4`}>
                                                <div className="font-bold text-lg">
                                                    <Image
                                                        src={currentPartner?.partnerIcon}
                                                        alt={`${currentPartner?.partnerName} icon`}
                                                        width={124}
                                                        height={64}
                                                    />
                                                </div>
                                                <p className="2xl:text-2xl md:text-base text-sm font-300 2xl:leading-7 leading-5">
                                                    {currentPartner?.testimonial}
                                                </p>
                                                <div className="flex items-center lg:gap-10 gap-5 pl-2">
                                                    <div className="bg-green border border-black lg:p-10 p-8 relative rounded-4">
                                                        <div className="absolute inset-0 bg-gray-light border rounded-4 -translate-x-[2px] -translate-y-[2px]"></div>
                                                    </div>
                                                    <div>
                                                        <span className="2xl:text-2xl lg:text-xl text-base font-bold 2xl:leading-6 leading-5">{currentPartner?.person}</span>
                                                        <p className="text-sm font-normal leading-4 mt-2">
                                                            {currentPartner?.title} <br /> <span className="text-xs font-extralight">{currentPartner?.company}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        {/* )} */}
                                    </>
                                ))}
                            </div>

                            <div className="w-full h-full flex flex-col justify-end">
                                <div className="flex justify-end opacity-20">
                                    <span className="text-xs font-extralight leading-5 tracking-space60">{`0${activeIndex + 1}/06`}</span>
                                </div>
                                <div className="relative w-full h-[2px] bg-gray-200 mt-2">
                                    <div
                                        className="absolute left-0 top-0 h-full bg-black transition-all ease-linear"
                                        style={{ width: `${progress}%` }} // Complete progress for the current partner
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className={`lg:px-10 px-5 2xl:py-20 py-7 flex justify-center items-center border border-gray-border cursor-pointer`}
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
        </div>
    );
};
