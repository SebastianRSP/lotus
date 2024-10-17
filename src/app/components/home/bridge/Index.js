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
                <div className="bridge-wrapper-1 bg-black bridge-gridroom">
                    <div className="relative opacity-50 bridge-window bridge-window-full">
                        <GridGreen />
                        {/* <div className="absolute inset-0 z-20 bg-black backdrop-blur-1 opacity-70 bridge-bg-blur" /> */}
                        <div className="absolute overflow-hidden inset-0 w-full h-full flex justify-center items-center z-10 ">
                            <div className="bg-black w-45.7p inside-black-box">
                                <BackGrid />
                            </div>
                        </div>
                    </div>
                    <div className="overlay animate-cover horizontal">
                        <div className="cover-object conver-object-horizontal bg-gray-light"></div>
                        <div className="cover-object conver-object-horizontal bg-gray-light"></div>
                    </div>
                    <div className="overlay overlay-content z-50">
                        <div className="container 2xl:px-40 xl:px-28 lg:px-10 px-5">
                            <div className="row" >
                                <div className="flex flex-col">
                                    <h2 className="bridge-hero-text 2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl text-28 2xl:leading-102 xl:leading-78 lg:leading-54 md:leading-42 leading-9 font-extralight text-[#D0D0D0]">
                                        <span className="normal bridge-text-split">
                                            We’re building <br /> the world’s largest<br /> content delivery network
                                        </span>
                                    </h2>
                                    {/* <div className='text-green 2xl:pt-56 xl:pt-28 relative'>
                                        <div className='absolute w-12/12 text-left flex justify-start gap-3'>
                                            <h4 className="2xl:text-9xl xl:text-8xl lg:text-5xl md:text-4xl text-28 2xl:leading-132 xl:leading-102 lg:leading-54 md:leading-42 leading-9 uppercase font-bold">
                                                The Bridge
                                            </h4>
                                            <div className='border border-green rounded-full self-baseline'>
                                                <span className='font-bold text-3xl leading-60 px-2'>
                                                    TM
                                                </span>
                                            </div>
                                        </div>
                                    </div> */}
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
            {/* <div className="bridge-initial">
                <div className="bg-black relative">
                    <Gridlines />
                    <div className="absolute inset-0 z-20 bg-black backdrop-blur-1 rounded-lg opacity-70 bridge-bg-blur" />
                    <div className="absolute inset-0 z-20 2xl:py-56 xl:py-40 py-16">
                        <div className="flex flex-col justify-start w-full items-left 2xl:px-40 xl:px-28 lg:px-10 px-5">
                            <div className="flex flex-col">
                                <h4 className="bridge-hero-text opacity-0 2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl text-28 2xl:leading-102 xl:leading-78 lg:leading-54 md:leading-42 leading-9 font-extralight text-[#D0D0D0]">
                                    We’re building <br /> the world’s largest<br /> content delivery network
                                </h4>
                                <div className='text-green 2xl:pt-56 xl:pt-28 relative'>
                                    <div className='absolute w-12/12 text-left flex justify-start gap-3'>
                                        <h4 className="2xl:text-9xl xl:text-8xl lg:text-5xl md:text-4xl text-28 2xl:leading-132 xl:leading-102 lg:leading-54 md:leading-42 leading-9 uppercase font-bold">
                                            The Bridge
                                        </h4>
                                        <div className='border border-green rounded-full self-baseline'>
                                            <span className='font-bold text-3xl leading-60 px-2'>
                                                TM
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="2xl:pt-45r xl:pt-25r py-0">
                                <h5 className="2xl:text-108 xl:text-6xl lg:text-5xl md:text-4xl text-28 2xl:leading-124 xl:leading-66 lg:leading-54 md:leading-42 leading-9 text-gray-light font-extralight ">
                                    A single pane of glass <br /> connecting <br /> <span className="font-normal">web2</span> and <span className="font-normal">web3</span>
                                </h5>
                            </div>
                            <div className="2xl:py-72 pt-28 text-center">
                                <div className="flex flex-col gap-6">
                                    {cardDetails.map((cardDetail, index) => (
                                        <BridgeCard>
                                            <div key={index} className="grid md:grid-cols-2 grid-cols-1 justify-center items-center 2xl:py-24 py-12 md:px-0 px-5">
                                                <div className="md:my-0 my-20">
                                                    <Image
                                                        src={cardDetail.defaultImage}
                                                        alt="default Image"
                                                        width={40}
                                                        height={40}
                                                    />
                                                </div>
                                                <div className="flex flex-col justify-between gap-3 text-left lg:w-4/6 md:w-11/12 w-full">
                                                    <span className="2xl:text-lg text-base font-normal leading-42 text-green">{cardDetail.category}</span>
                                                    <h4 className="2xl:text-4xl lg:text-3xl text-2xl font-300 2xl:leading-42 lg:leading-9 leading-30 text-green 2xl:w-3/4 lg:w-4/5 w-5/6">
                                                        {cardDetail.heading}
                                                    </h4>
                                                    <p className="2xl:text-2xl lg:text-xl text-base">
                                                        {cardDetail.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </BridgeCard>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="bg-black">
                <div className="text-center border-y border-opacity-20 border-green">
                    <h4 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl 2xl:leading-84 xl:leading-66 lg:leading-54 md:leading-42 leading-9 font-extralight text-green pt-5 pb-7">
                        The trillion dollar data opportunity
                    </h4>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center text-center counter-container">
                    <div className="2xl:py-24 py-12 lg:border-x border-opacity-20 border-green border flex flex-col gap-5 justify-center">
                        <p className="2xl:text-5xl text-3xl 2xl:leading-84 leading-66 flex justify-center items-baseline">
                            <span>$ </span>
                            <span className="2xl:text-7xl text-5xl counter transition-all ease-out w-16" data-number="3.1">0</span>
                            <span className="pl-3">trillion</span>
                        </p>
                        <p className="2xl:text-lg text-sm text-green 2xl:leading-6 leading-5 opacity-75">
                            Annual cost of poor <br /> data management practices <br /> in the United States.
                        </p>
                    </div>
                    <div className="2xl:py-24 py-12 lg:border-x border border-opacity-20 border-green flex flex-col gap-5 justify-center">
                        <p className="2xl:text-5xl text-3xl 2xl:leading-84 leading-66 flex justify-center items-baseline">
                            <span className="2xl:text-7xl text-5xl counter transition-all ease-out w-16" data-number="90">0</span>
                            <span className="pl-2">%</span>
                        </p>
                        <p className="2xl:text-lg text-sm text-green 2xl:leading-6 leading-5 opacity-75">
                            Amount of total <br /> enterprise data trapped <br /> on inferior centralised systems.
                        </p>
                    </div>
                    <div className="2xl:py-24 py-12 lg:border-x border border-opacity-20 border-green flex flex-col gap-5 justify-center">
                        <p className="2xl:text-5xl text-3xl 2xl:leading-84 leading-66 flex justify-center items-baseline">
                            <span>$ </span>
                            <span className="2xl:text-7xl text-5xl counter transition-all ease-out w-16" data-number="1.5">0</span>
                            <span className="pl-3">trillion</span>
                        </p>
                        <p className="2xl:text-lg text-sm text-green 2xl:leading-6 leading-5 opacity-75">
                            Projected enterprise spend <br /> on data management, storage <br /> and analysis by 2025.
                        </p>
                    </div>
                </div>
            </div> */}
        </section>
    )
}