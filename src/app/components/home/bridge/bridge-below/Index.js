'use client';


import { GridLines } from "../grid-svgs/GridLines";
import { BridgeCard } from "../BridgeCard";
import Image from "next/image";
import { useState, useEffect } from "react";


const cardDetails = [
    {
        category: 'Simplified data connectivity',
        heading: 'Data Connectivity Simplified',
        description: 'Data connectivity is complicated. Hundreds of data networks around the world operate using disparate protocols and systems, making communication between them challenging and inefficient. The Bridge unifies protocols required by storage providers, eliminating the time and cost barriers that have traditionally made decentralized storage solutions inaccessible at scale.',
        svgPath: '/new-home-assets/SVG/DataConnectivity.svg',
        smallIcon: '/icons/Bridge_icon_1.png'
    },
    {
        category: 'An integrated approach',
        heading: 'An Integrated Approach',
        description: 'The Bridge utilises validation proofs to ensure that debits and credits of data across storage providers is ensured. Clients can now ensure that their data sets can be tracked, traced, and validated across all platforms. This seamless integration enhances data quality and accessibility, giving businesses a complete view over their information assets.',
        svgPath: '/new-home-assets/SVG/IntegratedApproach.svg',
        smallIcon: '/icons/Bridge_icon_2.png'
    },
    {
        category: 'Redefining the internet of storage',
        heading: 'Redefining the Internet of Storage',
        description: 'Data has become the world´s largest and fastest-growing asset class, necessitating a trustless and transparent platform to track and manage its immense value. The Bridge addresses this need by recording data transaction attributes on-chain, ensuring every interaction is traceable and secure.',
        svgPath: '/new-home-assets/SVG/InternetOfStorage.svg',
        smallIcon: '/icons/Bridge_icon_3.png'
    }
];

export const BridgeBelow = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Set the initial state
        handleResize();

        // Add event listener for resizing
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
            <section className="bg-black forced-full-width 2xl:px-40 xl:px-28 lg:px-10 px-5 w-full h-full relative overflow-hidden pb-0 block py-[16.6666vh]">
                <div className="absolute opacity-50 -mt-[1px] inset-0 w-full h-full">
                    <GridLines />
                </div>
                <div className="flex flex-col justify-start w-full items-left">
                    <h5 className="2xl:text-108 xl:text-6xl lg:text-5xl md:text-4xl text-28 2xl:leading-124 xl:leading-66 lg:leading-54 md:leading-42 leading-9 text-gray-light font-extralight">
                        A single pane of glass <br /> connecting <br /> <span className="font-normal">web2</span> and <span className="font-normal">web3</span>
                    </h5>
                </div>
                <div className="2xl:py-72 xl:py-16 py-28 text-center max-w-screen-xl mx-auto">
                    <div className="flex flex-col gap-2.5">
                        {cardDetails.map((cardDetail, index) => (
                            <BridgeCard key={index}>
                                <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center 2xl:py-24 py-12 md:px-0 px-5">
                                    {(index % 2 === 0 || isMobile) ? (
                                        <>
                                            {/* Image Left */}
                                            <div className="md:my-0 my-20">
                                                <Image
                                                    src={cardDetail.svgPath}
                                                    alt={`${cardDetail.category} icon`}
                                                    width={300}
                                                    height={300}
                                                />
                                            </div>
                                            {/* Text Right */}
                                            <div className="flex flex-col justify-between gap-3 text-left lg:w-1/1 md:w-11/12 w-full">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={cardDetail.smallIcon}
                                                        alt={`${cardDetail.category} icon`}
                                                        width={20}
                                                        height={20}
                                                        className="flex-shrink-0"
                                                    />
                                                    <span className="2xl:text-lg text-base font-normal leading-42 text-green">
                                                        {cardDetail.category}
                                                    </span>
                                                </div>
                                                <h4 className="2xl:text-4xl lg:text-3xl text-2xl font-300 2xl:leading-42 lg:leading-9 leading-30 text-green 2xl:w-3/4 lg:w-4/5 w-5/6">
                                                    {cardDetail.heading}
                                                </h4>
                                                <p className="2xl:text-2xl lg:text-xl text-base text-white">
                                                    {cardDetail.description}
                                                </p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {/* Text Left */}
                                            <div className="flex flex-col justify-between gap-3 text-left lg:w-1/1 md:w-11/12 w-full md:px-[50px]">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={cardDetail.smallIcon}
                                                        alt={`${cardDetail.category} icon`}
                                                        width={20}
                                                        height={20}
                                                        className="flex-shrink-0"
                                                    />
                                                    <span className="2xl:text-lg text-base font-normal leading-42 text-green">
                                                        {cardDetail.category}
                                                    </span>
                                                </div>

                                                <h4 className="2xl:text-4xl lg:text-3xl text-2xl font-300 2xl:leading-42 lg:leading-9 leading-30 text-green 2xl:w-3/4 lg:w-4/5 w-5/6">
                                                    {cardDetail.heading}
                                                </h4>
                                                <p className="2xl:text-2xl lg:text-xl text-base text-white">
                                                    {cardDetail.description}
                                                </p>
                                            </div>
                                            {/* Image Right */}
                                            <div className="md:my-0 my-20">
                                                <Image
                                                    src={cardDetail.svgPath}
                                                    alt={`${cardDetail.category} icon`}
                                                    width={300}
                                                    height={300}
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </BridgeCard>
                        ))}
                    </div>
                </div>
            </section>
            <div className="bg-black forced-full-width">
                <div className="text-center border-y border-opacity-20 border-green">
                    <h4 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 2xl:leading-84 xl:leading-66 lg:leading-54 md:leading-42 leading-9 font-extralight text-green pt-5 pb-7">
                        The trillion dollar data opportunity
                    </h4>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center text-center counter-container">
                    <div className="2xl:py-24 py-12 lg:border-x border-opacity-20 border-green border flex flex-col gap-5 justify-center">
                        <p className="2xl:text-5xl text-3xl 2xl:leading-84 leading-66 block justify-center items-baseline text-white">
                            <span>$ </span>
                            <span className="2xl:text-7xl text-5xl counter transition-all ease-out 2xl:w-20 w-16" data-number="3.1">0</span>
                            <span className="2xl:pl-1">trillion</span>
                        </p>
                        <p className="2xl:text-lg text-sm text-green 2xl:leading-6 leading-5 opacity-75">
                            Annual cost of poor <br /> data management practices <br /> in the United States.
                        </p>
                    </div>
                    <div className="2xl:py-24 py-12 lg:border-x border border-opacity-20 border-green flex flex-col gap-5 justify-center">
                        <p className="2xl:text-5xl text-3xl 2xl:leading-84 leading-66 flex justify-center items-baseline text-white">
                            <span className="2xl:text-7xl text-5xl counter transition-all ease-out 2xl:w-20 w-16" data-number="90">0</span>
                            <span className="2xl:pl-1">%</span>
                        </p>
                        <p className="2xl:text-lg text-sm text-green 2xl:leading-6 leading-5 opacity-75">
                            Enterprise data locked <br />in outdated, centralised systems
                        </p>
                    </div>
                    <div className="2xl:py-24 py-12 lg:border-x border border-opacity-20 border-green flex flex-col gap-5 justify-center">
                        <p className="2xl:text-5xl text-3xl 2xl:leading-84 leading-66 block justify-center items-baseline text-white">
                            <span>$ </span>
                            <span className="2xl:text-7xl text-5xl counter transition-all ease-out 2xl:w-20 w-16" data-number="1.5">0</span>
                            <span className="2xl:pl-1">trillion</span>
                        </p>
                        <p className="2xl:text-lg text-sm text-green 2xl:leading-6 leading-5 opacity-75">
                            Forecasted enterprise spend on <br />data management, storage, <br />
                            and analysis by 2025
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
