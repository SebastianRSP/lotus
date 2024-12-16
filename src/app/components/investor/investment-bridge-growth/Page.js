import Image from 'next/image';
import gridLines from '../../../../../public/investor-assets/investor-grid-lines.svg';
import defaultImageIcon from '../../../../../public/investor-assets/default-img-icon.svg';
import animatedBox from '../../../../../public/animations/animated-box.json';
import lotusLogo from '../../../../../public/icons/logo.svg';
import { Boxes } from './svgs/boxes';
import Lottie from 'lottie-react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { SlickSlider } from '../../slick-slider/SlickSlider';
import { SenDataArrow } from '../../svgs/SenDataArrow';

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
    const [activePercentage, setActivePercentage] = useState(0);
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [previousTabIndex, setPreviousTabIndex] = useState(0);
    const boxLengthRef = useRef(null);
    const totalSupplyRef = useRef(null);
    const activeSendTab = useRef([]);
    const autoSwitchTimeout = useRef(null);

    const animateTab = async (element, fromVars, toVars) => {
        return new Promise((resolve) => {
            gsap.fromTo(
                element,
                fromVars,
                { ...toVars, onComplete: resolve } // Resolve the promise when animation completes
            );
        });
    };

    const getObjectByIndex = (index) => {
        return tabData[index] || null; // Returns the object at the given index or null if out of bounds
    };

    const waitForElement = async (refArray, index) => {
        return new Promise((resolve) => {
            const interval = setInterval(() => {
                if (refArray.current && refArray.current[index]) {
                    clearInterval(interval);
                    resolve(refArray.current[index]);
                }
            }, 10); // Check every 10ms for minimal delay
        });
    };

    const handleTabActive = async (selectedTab) => {

        if (autoSwitchTimeout.current) {
            clearTimeout(autoSwitchTimeout.current);
        }

        if (selectedTab === activeTab) return;

        setActiveTab(selectedTab);

        const previousTabIndex = tabData.findIndex(tab => tab.title === activeTab);
        const itemIndex = tabData.findIndex(item => item.title === selectedTab);
        const filteredItem = tabData.filter(item => item.title === selectedTab);

        if (itemIndex !== -1 && boxLengthRef.current) {
            const targetPosition = -(itemIndex + 1) * boxLengthRef.current.offsetHeight;
            setTranslateY(targetPosition);
            setActivePercentage(filteredItem[0].percentage);
            setActiveTabIndex(itemIndex);
            setPreviousTabIndex(previousTabIndex);

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

            // Wait for the current tab element to be available, then animate it
            const element = await waitForElement(activeSendTab, itemIndex);
            if (element) {
                await animateTab(
                    element,
                    { opacity: 0, x: 0 },
                    { opacity: 1, x: 44, duration: 1 }
                );
            }
        }
    };

    const handleSlideChange = async (oldIndex, newIndex) => {
        const filteredItem = getObjectByIndex(newIndex).percentage;
        const filteredItemTitle = getObjectByIndex(newIndex).title;
        setActiveTab(filteredItemTitle);
        setActivePercentage(filteredItem);
        setActiveTabIndex(newIndex);
        setPreviousTabIndex(oldIndex);
    }

    const startAutoSwitch = () => {
        autoSwitchTimeout.current = setTimeout(() => {
            handleTabActive('INVESTORS'); // Automatically switch to "Investor" tab
        }, 2000);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !activeTab) {
                    startAutoSwitch();
                }
            },
            { threshold: 0.1 }
        );

        if (boxLengthRef.current) {
            observer.observe(boxLengthRef.current);
        }

        return () => {
            if (boxLengthRef.current) {
                observer.unobserve(boxLengthRef.current);
            }
            clearTimeout(autoSwitchTimeout.current);
        };
    }, [activeTab]);

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
                <div className='flex justify-center items-end'>
                    <div className='absolute inset-0 '>
                        <Image
                            src={gridLines}
                            className='w-full object-cover h-full'
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className='2xl:px-40 xl:px-20 px-9 xl:pt-72 lg:pt-64 md:pt-32 sm:pt-32 pt-16 2xl:pb-28 xl:pb-24 lg:pb-5.3r md:pb-4.3r sm:pb-14 pb-3.2r w-full relative'>
                        <div className='flex justify-start'>
                            <h3 className='2xl:text-123 lg:text-100 md:text-80 text-4xl font-bold flex text-green'>
                                BRIDGE
                                <sup className='pl-2 xl:-mt-10 lg:-mt-8 -mt-0'>
                                    <SenDataArrow extraClasses={'lg:w-3/12 md:w-1/6 sm:w-1/12 w-2/12'} iconColor={'fill-green'} />
                                </sup>
                            </h3>
                        </div>
                        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-0 md:gap-8 gap-4 lg:mt-16 sm:mt-8 mt-4">
                            {/* <h3 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-xl 2xl:leading-60 xl:leading-48 lg:leading-42 leading-8 font-extralight lg:col-span-8 lg:w-11/12 w-11/12"> */}
                            <h3 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-xl 2xl:leading-60 xl:leading-48 lg:leading-42 leading-8 font-extralight lg:col-span-8 lg:w-full md:w-11/12 w-full">
                                Designed to drive engagement, <br className='lg:block hidden'/> reward participation, and foster growth <br className='lg:block hidden'/> within <span className="font-bold">The Bridge<sup>TM</sup></span>  ecosystem.
                            </h3>
                            <p className="2xl:text-2xl xl:text-base lg:text-sm text-xs lg:justify-self-end lg:col-span-4 lg:w-full w-11/12">
                            The BridgeTM will integrate advanced AI powered analytics with on-chain
tracking to ensure every data transaction is transparent, traceable, and
trusted. By validating the quality of both the data and storage provider, we
provide agnostic intelligence to empower participants to make educated and
informed decisions.
                            </p>
                        </div>
                        <div id='send-investor' className='bg-black border-2 border-green rounded-lg xl:my-32 lg:my-28 md:my-16 my-8'>
                            <div className='grid lg:grid-cols-2 grid-cols-1'>
                                <div className='lg:bg-green bg-black lg:rounded-none rounded-lg sm:pl-9 pl-3 lg:pr-0 sm:pr-9 pr-3 py-10 text-black '>
                                    <div className='lg:text-black text-green'>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <h6 className='md:text-32 text-2xl md:leading-64 leading-48 font-extrabold flex'>
                                                    BRIDGE
                                                    <sup className='pl-2 mt-2'>
                                                        <SenDataArrow extraClasses={'md:w-7 w-5 md:h-5 h-3'} iconColor={'lg:fill-black fill-green'} />
                                                    </sup>
                                                </h6>
                                                <p className='md:text-base text-sm font-300 -mt-2'>TOKENOMICS</p>
                                            </div>
                                            <div className='lg:hidden flex justify-start'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className={`fill-green opacity-30`} width="34" height="20">
                                                    <g data-name="Group 172703">
                                                        <path d="M21.66 8.82c0 4.316-3.932 7.738-5.02 8.604-.17-1.196-1.14-6.533-4.99-8.737a7.225 7.225 0 0 0-.574-.294C11.354 3.443 16.362 0 16.362 0s4.794 3.445 5.261 8.094c.025.24.038.482.038.726Z" fillRule="evenodd" data-name="Path 10531" />
                                                        <path d="M15.178 17.382H3.606C.413 14.444 0 9.442 0 9.442s5.433-2.473 9.71-.509c.196.088.387.187.576.295 3.396 1.944 4.55 6.33 4.892 8.154Z" fillRule="evenodd" data-name="Path 10532" />
                                                        <path d="M32.276 9.4s-.398 5.038-3.613 7.982h-9.94c1.56-1.44 4.143-4.35 4.143-7.848 0-.245-.013-.486-.038-.727 4.227-1.762 9.448.592 9.448.592Z" fillRule="evenodd" data-name="Path 10533" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-12 gap-2 md:py-14 py-7">
                                        {/* Tabs */}
                                        <div className="2xl:col-span-3 sm:col-span-4 sm:block hidden border-send-bridge">
                                            {growthTabs.map((tab, index) => (
                                                <div key={index} className="flex gap-6 items-center">
                                                    <span className={`${activeTab === tab ? 'lg:bg-black bg-green' : 'bg-[#00BE00]'} w-2 h-2 -ml-1`}></span>
                                                    <span
                                                        onClick={() => handleTabActive(tab)}
                                                        className={`${activeTab === tab ? 'opacity-100' : 'opacity-30'} 2xl:text-lg text-sm lg:text-black text-green 2xl:leading-60 leading-48 cursor-pointer`}
                                                    >
                                                        {tab}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Content Area */}
                                        <div className="2xl:col-span-9 sm:col-span-8 col-span-12 h-96 relative overflow-hidden">
                                            <div className='lg:hidden block absolute inset-0 h-full opacity-50 blur-2p bg-black'>
                                                <div className='flex justify-center items-center h-full backdrop-blur-10'>
                                                    <div className='flex flex-col w-fit'>
                                                        <div className='relative 2xl:w-26 xl:w-80 lg:w-72 md:w-60 w-44 2xl:h-26 xl:h-80 lg:h-72 md:h-60 h-44'>
                                                            <Boxes
                                                                activePercentage={activePercentage}
                                                                tabIndex={activeTab == null ? activeTab : activeTabIndex}
                                                                previousTabIndex={activeTab == null ? activeTab : previousTabIndex}
                                                                tabData={tabData}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div ref={boxLengthRef} className="absolute pr-6 sm:block hidden lg:text-black text-green inset-0 transition-all duration-1000 ease-in-out"
                                                style={{ transform: `translateY(${translateY}px)` }} >
                                                <div className='h-available'>
                                                    <div className='flex justify-center items-center h-full w-full'>
                                                        <div className='2xl:w-36 xl:w-28 lg:w-20 w-10 2xl:h-36 xl:h-28 lg:h-20 h-10'>
                                                            <Lottie animationData={animatedBox} className='bg-transparent' loop={true} />
                                                        </div>
                                                    </div>
                                                    {tabData.map((data, index) => (
                                                        <div key={index} className="border-y-2 h-full py-5 border-opacity-20 lg:border-black border-green">
                                                            <div className="grid grid-rows-2 gap-6 h-full">
                                                                {data.detail.map((item, index) => (
                                                                    <div key={index} className="2xl:pr-10 xl:pr-8 lg:pr-4 md:pr-14 pr-0 md:pl-3 pl-0 flex flex-col lg:gap-2 gap-3 text-left">
                                                                        <div className="flex justify-between items-center gap-2">
                                                                            <h4 className="2xl:text-2xl text-lg font-bold ">{item.title}</h4>
                                                                            <span className="2xl:text-4xl text-2xl font-bold lg:opacity-40 opacity-100">{item.percentage}</span>
                                                                        </div>
                                                                        <p className="w-full 2xl:pt-2 lg:pt-0 md:pt-5 sm:pt-3 pt-0 2xl:text-base xl:text-sm lg:text-8 text-xs 2xl:leading-6 xl:leading-22 leading-18 lg:text-current text-white">{item.description}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className='sm:hidden block absolute lg:text-black text-green inset-0 transition-all duration-1000 ease-in-out'>
                                                <div className='h-full bridge-slider'>
                                                    <SlickSlider onSlideChange={handleSlideChange}>
                                                        {tabData.map((data, index) => (
                                                            <div key={index} className="border-y-2 h-full py-5 px-3 border-opacity-20 lg:border-black border-green">
                                                                <div className="grid grid-rows-2 gap-3 h-full">
                                                                    {data.detail.map((item, index) => (
                                                                        <div key={index} className="2xl:pr-20 xl:pr-12 lg:pr-8 md:pr-14 pr-0 md:pl-3 pl-0 flex flex-col lg:gap-2 gap-3 text-left">
                                                                            <div className="flex justify-between items-center gap-2">
                                                                                <h4 className="2xl:text-2xl text-lg font-bold ">{item.title}</h4>
                                                                                <span className="2xl:text-4xl text-2xl font-bold lg:opacity-40 opacity-100">{item.percentage}</span>
                                                                            </div>
                                                                            <p className="w-full 2xl:pt-2 lg:pt-0 md:pt-5 sm:pt-3 pt-0 2xl:text-base xl:text-sm lg:text-8 text-xs 2xl:leading-6 xl:leading-22 leading-18 lg:text-current text-white">{item.description}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </SlickSlider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='lg:flex hidden justify-start'>
                                        <Image
                                            src={lotusLogo}
                                            className='opacity-30 2xl:w-2/12 w-14'
                                            width={86}
                                            height={47}
                                        />
                                    </div>
                                </div>
                                <div className='lg:flex hidden justify-center items-center'>
                                    <div className='flex flex-col w-fit'>
                                        <h4 className='2xl:text-lg text-sm pb-4 font-bold'>
                                            <div ref={totalSupplyRef} className='opacity-0'>
                                                Total Supply
                                                <span className='font-normal block'>2,000,000,000 $SEND</span>
                                            </div>
                                        </h4>
                                        <div className='relative 2xl:w-26 xl:w-80 lg:w-72 w-60 2xl:h-26 xl:h-80 lg:h-72 h-60'>
                                            <Boxes
                                                activePercentage={activePercentage}
                                                tabIndex={activeTab == null ? activeTab : activeTabIndex}
                                                previousTabIndex={activeTab == null ? activeTab : previousTabIndex}
                                                tabData={tabData}
                                            />
                                        </div>
                                        <h4 className='2xl:text-lg text-sm 2xl:pt-4 pt-2 text-right text-green font-bold'>
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
                                                        <span className='font-normal block'>400,000,000 $BRIDGE</span>
                                                    </span>
                                                ))}
                                            </div>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex justify-center'>
                            <div className='flex justify-between 2xl:gap-3.4 xl:gap-2.5 lg:gap-9 md:gap-1.3r sm:gap-0.8r gap-0.6r'>
                                {Array(6).fill(null).map((_, index) => (
                                    <Image
                                        key={index}
                                        src={defaultImageIcon}
                                        width={39}
                                        height={39}
                                    />
                                ))}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}