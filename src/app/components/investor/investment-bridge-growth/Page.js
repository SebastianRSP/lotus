import Image from 'next/image';
import gridLines from '../../../../../public/investor-assets/investor-grid-lines.svg';
import sendataArrow from '../../../../../public/investor-assets/sendata-arrow.svg';
import sendataBlackArrow from '../../../../../public/investor-assets/senddata-black.svg';
import defaultImageIcon from '../../../../../public/investor-assets/default-img-icon.svg';
import animatedBox from '../../../../../public/animations/animated-box.json';
import databoxes from '../../../../../public/investor-assets/data-box.svg';
import lotusLogo from '../../../../../public/icons/logo.svg';
import { Boxes } from './svgs/boxes';
import Lottie from 'lottie-react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

const growthTabs = [
    "INVESTORS",
    "RESEARCH",
    "DEVELOPMENT",
    "OPERATIONS",
    "MARKETING",
    "COMMUNITY",
    "PARTNERSHIPS",
    "TEAM",
];

const tabData = [
    {
        percentage: 20,
        title: "INVESTORS",
        detail: [
            {
                title: "Private Placement",
                percentage: "10%",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                title: "Public Offering",
                percentage: "10%",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
        ]
    },
    {
        percentage: 20,
        title: "RESEARCH",
        detail: [
            {
                title: "Research & Development",
                percentage: "20%",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    {
        percentage: 10,
        title: "DEVELOPMENT",
        detail: [
            {
                title: "Product Development",
                percentage: "10%",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    {
        percentage: 10,
        title: "OPERATIONS",
        detail: [
            {
                title: "Company Operations",
                percentage: "10%",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    {
        percentage: 10,
        title: "MARKETING",
        detail: [
            {
                title: "Marketing",
                percentage: "10%",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    {
        percentage: 10,
        title: "COMMUNITY",
        detail: [
            {
                title: "Community",
                percentage: "10%",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    {
        percentage: 10,
        title: "PARTNERSHIPS",
        detail: [
            {
                title: "Partnerships",
                percentage: "10%",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    {
        percentage: 10,
        title: "TEAM",
        detail: [
            {
                title: "Team",
                percentage: "10%",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    }
];


export const InvertmentBridgeGrowth = () => {

    const [activeTab, setActiveTab] = useState(null); // Track active tab
    const [translateY, setTranslateY] = useState(0); // Track Y position for animation
    const [isFirstClick, setIsFirstClick] = useState(true);
    const boxLengthRef = useRef(null);
    const totalSupplyRef = useRef(null);
    const activeSendTab = useRef([]);

    const animateTab = async (element, fromVars, toVars) => {
        return new Promise((resolve) => {
            gsap.fromTo(
                element,
                fromVars,
                { ...toVars, onComplete: resolve } // Resolve the promise when animation completes
            );
        });
    };

    const handleTabActive = async (selectedTab) => {
        if (selectedTab === activeTab) return;

        setActiveTab(selectedTab);

        const previousTabIndex = tabData.findIndex(tab => tab.title === activeTab);
        const itemIndex = tabData.findIndex((item) => item.title === selectedTab);

        if (itemIndex !== -1 && boxLengthRef.current) {
            const targetPosition = -(itemIndex + 1) * boxLengthRef.current.offsetHeight;
            setTranslateY(targetPosition);

            // Play the initial animation on first click
            if (isFirstClick && totalSupplyRef.current) {
                gsap.fromTo(
                    totalSupplyRef.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 1 }
                );
                setIsFirstClick(false);
            }

            // Animate out the previous tab, then hide it completely to avoid duplication
            if (previousTabIndex !== -1 && activeSendTab.current[previousTabIndex]) {
                gsap.to(activeSendTab.current[previousTabIndex], {
                    opacity: 0,
                    x: -44, // Exit offset for the animation
                    duration: 1,
                    onComplete: () => {
                        // Set previous tab element to be fully hidden and reset position
                        gsap.set(activeSendTab.current[previousTabIndex], { opacity: 0, x: 0 });
                    }
                });
            }

            // Animate in the current tab if it exists
            if (itemIndex !== -1 && activeSendTab.current[itemIndex]) {
                await animateTab(
                    activeSendTab.current[itemIndex],
                    { opacity: 0, x: 0 },
                    { opacity: 1, x: 44, duration: 1 }
                );
            }
        }
    };


    useEffect(() => {
        const handleResize = () => {
            if (activeTab && boxLengthRef.current) {
                const itemIndex = tabData.findIndex((item) => item.title === activeTab);
                if (itemIndex !== -1) {
                    const targetPosition = -(itemIndex + 1) * boxLengthRef.current.offsetHeight;
                    setTranslateY(targetPosition);
                }
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [activeTab]);


    return (
        <>
            <div className="text-white mt-5 relative">
                {/* absolute inset-0  */}
                {console.log(isFirstClick, 'isFirstClick')}
                <div className='flex justify-center items-end'>

                    <div className='absolute inset-0 '>
                        <Image
                            src={gridLines}
                            className='w-full object-cover h-full'
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className='2xl:px-40 xl:px-20 px-9 xl:pt-96 pt-9 2xl:pb-32 xl:pb-28 pb-8 w-full relative'>
                        <div className='flex justify-start'>
                            <h3 className='2xl:text-123 text-100 font-bold flex text-green'>
                                Send
                                <sup className='pl-2'>
                                    <Image
                                        src={sendataArrow}
                                        className='2xl:w-full xl:w-4/6'
                                        width={128}
                                        height={95}
                                    />
                                </sup>
                            </h3>
                        </div>
                        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-0 gap-8 lg:mt-16 mt-8">
                            {/* <h3 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-xl 2xl:leading-60 xl:leading-48 lg:leading-42 leading-8 font-extralight lg:col-span-8 lg:w-11/12 w-11/12"> */}
                            <h3 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl 2xl:leading-60 xl:leading-48 lg:leading-42 leading-8 font-extralight lg:col-span-8 lg:w-full md:w-11/12 w-full">
                                Designed to drive engagement, <br /> reward participation, and foster growth <br /> within <span className="font-bold">The Bridge<sup>TM</sup></span>  ecosystem.
                            </h3>
                            <p className="2xl:text-2xl xl:text-base lg:text-sm text-xs lg:justify-self-end lg:col-span-4 lg:w-full w-11/12">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                            </p>
                        </div>
                        <div className='bg-black border-2 border-green rounded-lg lg:my-32 my-16'>
                            <div className='grid grid-cols-2'>
                                <div className='bg-green pl-9 py-10 text-black'>
                                    <div>
                                        <h6 className='text-32 font-extrabold flex'>
                                            Send
                                            <sup className='pl-2 mt-2'>
                                                <Image
                                                    src={sendataBlackArrow}
                                                    width={28}
                                                    height={22}
                                                />
                                            </sup>
                                        </h6>
                                        <p className='text-base font-300 -mt-2'>TOKENOMICS</p>
                                    </div>
                                    <div className="grid grid-cols-12 gap-2 py-14">
                                        {/* Tabs */}
                                        <div className="2xl:col-span-3 col-span-4 border-send-bridge">
                                            {growthTabs.map((tab, index) => (
                                                <div key={index} className="flex gap-6 items-center">
                                                    <span className={`${activeTab === tab ? 'bg-black' : 'bg-[#00BE00]'} w-2 h-2 -ml-1`}></span>
                                                    <span
                                                        onClick={() => handleTabActive(tab)}
                                                        className={`${activeTab === tab ? 'opacity-100' : 'opacity-30'} text-lg text-black 2xl:leading-60 leading-48 cursor-pointer`}
                                                    >
                                                        {tab}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Content Area */}
                                        <div className="2xl:col-span-9 col-span-8 relative overflow-hidden">
                                            <div ref={boxLengthRef} className="absolute inset-0 transition-all duration-1000 ease-in-out"
                                                style={{ transform: `translateY(${translateY}px)` }} >
                                                <div className='h-available'>
                                                    <div className='flex justify-center items-center h-full w-full'>
                                                        <div className='w-36 h-36'>
                                                            <Lottie animationData={animatedBox} className='fill-none' loop={true} />
                                                        </div>
                                                    </div>
                                                    {tabData.map((data, index) => (
                                                        <div key={index} className="border-y-2 h-full py-5 border-opacity-20 border-black">
                                                            <div className="grid grid-rows-2 gap-6 h-full">
                                                                {data.detail.map((item, index) => (
                                                                    <div key={index} className="2xl:pr-28 pr-14 pl-3 flex flex-col lg:gap-0 gap-3 text-left">
                                                                        <div className="flex justify-between">
                                                                            <h4 className="2xl:text-2xl text-xl font-bold 2xl:leading-60 leading-48">{item.title}</h4>
                                                                            <span className="text-4xl font-bold text-black opacity-40">{item.percentage}</span>
                                                                        </div>
                                                                        <p className="w-full pt-5 text-lg leading-6">{item.description}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex justify-start'>
                                        <Image
                                            src={lotusLogo}
                                            className='opacity-30 2xl:w-2/12 w-14'
                                            width={86}
                                            height={47}
                                        />
                                    </div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <div className='flex flex-col w-fit'>
                                        <h4 className='text-lg pb-4 font-bold'>
                                            <div ref={totalSupplyRef} className='opacity-0'>
                                                Total Supply
                                                <span className='font-normal block'>2,000,000,000 $SEND</span>
                                            </div>
                                        </h4>
                                        <div className='relative w-26 h-26'>
                                            <Boxes />
                                        </div>
                                        <h4 className='text-lg pt-4 text-right text-green font-bold'>
                                            <div ref={activeSendTab} className='relative'>
                                                {tabData.map((activeTab, index) => (
                                                    <span
                                                        key={index}
                                                        ref={(el) => {
                                                            if (el) activeSendTab.current[index] = el;
                                                        }}
                                                        className={`absolute top-0 right-0 opacity-0`}
                                                    >
                                                        {activeTab.title}
                                                        <span className='font-normal block'>400,000,000 $SEND</span>
                                                    </span>
                                                ))}
                                            </div>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className='flex justify-between 2xl:gap-16 gap-3.3'>
                                {Array(6).fill(null).map((_, index) => (
                                    <Image
                                        key={index}
                                        src={defaultImageIcon}
                                        width={39}
                                        height={39}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}