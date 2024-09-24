import Image from "next/image";
import bridgeImage from '../../../../../public/images/bridge.png';
import bridgeText from '../../../../../public/images/bridgeText.png';
import defaultImage from '../../../../../public/icons/defaultImg.svg';
import aiIcon from '../../../../../public/new-home-assets/ai.svg';
import { BlurCard } from "./BlurCard";

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

export const BridgeSection = () => {
    return (
        <section className="bg-black h-auto forced-full-width text-white md:px-0 px-5">
            <div className="flex flex-col justify-center w-full 2xl:py-32 py-16">
                <h4 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-2xl 2xl:leading-84 xl:leading-45 lg:leading-60 md:leading-48 leading-9 font-extralight text-center">
                    We’re building <br /> the world’s largest<br /> content delivery network
                </h4>
                <div className='flex justify-center items-center text-center text-green my-20 relative'>
                    <div className="w-full relative">
                        <Image
                            src={bridgeImage}
                            layout="responsive"
                            className="md:!w-7/12 w-full h-auto"
                            alt="bridge image"
                            width={1096}
                            height={605}
                        />
                    </div>
                    <div id='bridge-donut-text' className='absolute w-12/12 text-left flex justify-center items-center'>
                        <Image
                            src={bridgeText}
                            layout="responsive"
                            alt="circle image"
                            className="md:!w-9/12 w-full h-auto"
                            width={1096}
                            height={650}
                        />
                        <div className='border border-green rounded-full md:block hidden'>
                            <span className='font-bold text-3xl leading-66 py-10 px-3'>
                                TM
                            </span>
                        </div>
                    </div>
                </div>
                <div className="2xl:py-16 py-0 text-center">
                    <h5 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-2xl 2xl:leading-84 xl:leading-45 lg:leading-60 md:leading-48 leading-9 font-extralight ">
                        A single pane of glass <br /> connecting <span className="font-normal">web2</span> and <span className="font-normal">web3</span>
                    </h5>
                    <p className="2xl:text-4xl lg:text-3xl md:text-2xl text-xs my-2 text-green flex items-center justify-center gap-4">
                        <span>
                            <Image 
                                src={aiIcon}
                                alt="ai icon"
                                width={29}
                                height={29}
                            />
                        </span>
                        Backed by AI enabled data management tools
                    </p>
                </div>
                <div className="py-8 text-center">
                    <div className="flex flex-col gap-6 2xl:px-40 md:px-20 px-0">
                        {cardDetails.map((cardDetail, index) => (
                            <BlurCard>
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
                                        <span className="2xl:text-lg text-md font-normal leading-43 text-green">{cardDetail.category}</span>
                                        <h4 className="2xl:text-4xl text-2xl font-300 leading-7 text-green">{cardDetail.heading}</h4>
                                        <p className="2xl:text-lg text-sm">
                                            {cardDetail.description}
                                        </p>
                                    </div>
                                </div>
                            </BlurCard>
                        ))}
                    </div>
                </div>
            </div>
            <div className="">
                <div className="text-center border-y border-opacity-20 border-gray-light">
                    <h4 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-2xl 2xl:leading-84 xl:leading-45 lg:leading-60 md:leading-48 leading-9 font-extralight pt-5 pb-7">
                        The trillion dollar data opportunity
                        </h4>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center text-center">
                    <div className="2xl:py-24 py-12 lg:border-x border-opacity-20 border-gray-light border flex flex-col gap-5 justify-center">
                        <p className="2xl:text-5xl text-3xl 2xl:leading-84 leading-66">
                            $ <span className="2xl:text-7xl text-5xl">3.1</span> trillion
                        </p>
                        <p className="2xl:text-lg text-sm text-green 2xl:leading-6 leading-5 opacity-75">
                            Annual cost of poor <br /> data management practices <br /> in the United States.
                        </p>
                    </div>
                    <div className="2xl:py-24 py-12 lg:border-x border border-opacity-20 border-gray-light flex flex-col gap-5 justify-center">
                        <p className="2xl:text-5xl text-3xl 2xl:leading-84 leading-66">
                            <span className="2xl:text-7xl text-5xl">90</span> %
                        </p>
                        <p className="2xl:text-lg text-sm text-green 2xl:leading-6 leading-5 opacity-75">
                            Amount of total <br /> enterprise data trapped <br /> on inferior centralised systems.
                        </p>
                    </div>
                    <div className="2xl:py-24 py-12 lg:border-x border border-opacity-20 border-gray-light flex flex-col gap-5 justify-center">
                        <p className="2xl:text-5xl text-3xl 2xl:leading-84 leading-66">
                            $ <span className="2xl:text-7xl text-5xl">1.5</span> trillion
                        </p>
                        <p className="2xl:text-lg text-sm text-green 2xl:leading-6 leading-5 opacity-75">
                            Projected enterprise spend <br /> on data management, storage <br /> and analysis by 2025.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}