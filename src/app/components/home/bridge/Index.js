import Image from "next/image";
import bridgeText from '../../../../../public/images/bridgeText.png';
import defaultImage from '../../../../../public/icons/defaultImg.svg';
import { BridgeCard } from "./BridgeCard";
import { Gridlines } from "./GridLines";
import { GridGreen } from "./grid-svgs/GridGreen";
import { BackGrid } from "./grid-svgs/BackGrid";


const cardDetails = [
    {
        category: 'Simplified data connectivity',
        heading: 'Data connectivity Simplified',
        description: 'Our proprietary SenData and Pegasus stack seamlessly links Web2 and Web3 networks, eliminating traditional barriers of time, cost, and complexity that have historically made decentralized storage solutions inaccessible at scale.',
        defaultImage: defaultImage
    },
    {
        category: 'An integrated approach',
        heading: 'An integrated approach',
        description: 'The Bridge consolidates data from diverse sources into a unified platform, ensuring comprehensive and accurate management. This seamless integration enhances data quality and accessibility, giving businesses a complete view of their information assets.',
        defaultImage: defaultImage
    },
    {
        category: 'Redefining the internet of storage',
        heading: 'Redefining the internet of storage',
        description: 'The Bridge transforms data infrastructure by providing complete, scalable interoperability across all of the world’s leading storage solutions. Our innovative approach redefines how data is stored and accessed, offering unparalleled control and flexibility in a rapidly evolving digital landscape.',
        defaultImage: defaultImage
    },
];

export const Bridge = () => {
    return (
        <section id="bridge" className="home-bridge-gridroom block relative h-auto forced-full-width md:px-0 px-5">
            {/* 2xl:px-40 xl:px-20 2xl:py-40 xl:py-20 */}
            <div className="bridge-overlay bg-none">
                <div className="bridge-wrapper-1 md:overflow-hidden bg-black bridge-gridroom">
                    <div className="relative top-0 lg:top-auto opacity-50 bridge-window bridge-window-full">
                        <GridGreen />
                        {/* <div className="absolute inset-0 z-20 bg-black backdrop-blur-1 opacity-70 bridge-bg-blur" /> */}
                        <div className="absolute overflow-hidden inset-0 w-full h-full flex justify-center items-center z-10 ">
                            <div className="bg-black w-full inside-black-box">
                                <BackGrid />
                            </div>
                        </div>
                    </div>
                    <div className="overlay animate-cover horizontal">
                        <div className="cover-object conver-object-horizontal bg-gray-light"></div>
                        <div className="cover-object conver-object-horizontal bg-gray-light"></div>
                    </div>
                    <div className="overlay overlay-content z-50">
                        <div className="container xl:px-40 md:px-28 px-10">
                            <div className="row" >
                                <div className="grid grid-rows-3 gap-10 h-full">
                                    <h2 className="bridge-hero-text row-span-2 2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl text-28 2xl:leading-102 xl:leading-78 lg:leading-54 md:leading-42 leading-9 font-extralight text-[#D0D0D0]">
                                        <span className="normal bridge-text-split opacity-0">
                                            We’re building <br /> the world’s largest<br /> content delivery network
                                        </span>
                                    </h2>
                                    {/* 2xl:pt-56 lg:pt-28 pt-10 */}
                                    <div className='text-green relative content-center'>
                                        <div className='bridge-tm absolute w-12/12 text-left flex justify-start lg:gap-3 gap-1 opacity-0'>
                                            <h4 className="2xl:text-9xl xl:text-8xl lg:text-6xl md:text-4xl text-28 2xl:leading-132 xl:leading-102 lg:leading-54 md:leading-42 leading-9 uppercase font-bold">
                                                The Bridge
                                            </h4>
                                            <sup>

                                            <div className='border border-green rounded-full self-baseline 2xl:py-3 xl:py-2 py-0.2'>
                                                <span className='xl:font-bold 2xl:text-3xl xl:text-2xl lg:text-sm text-xs xl:px-2 px-0.2'>
                                                    TM
                                                </span>
                                            </div>
                                            </sup>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlay animate-cover vertical">
                <div className="cover-object conver-object-vertical bg-gray-light"></div>
                <div className="cover-object conver-object-vertical bg-gray-light"></div>
            </div>
        </section>
    )
}