import Image from 'next/image';
import bridgeImage from '../../../../public/images/bridge.png';
import bridgeText from '../../../../public/images/bridgeText.png';
import defaultImage from '../../../../public/images/defaultImage.png';
import { BridgeCard } from './BridgeCard';
import { BridgeCardHeading } from './BridgeCardHeading';
import { BridgeCardParagraph } from './BridgeCardParagraph';

export const Bridge = () => {
    return (
        <div className="px-40 pt-186 pb-32 bg-black">
            <div className="text-left">
                <h2 className="text-7xl text-yellowLight font-bold">
                    WE’RE BUILDING <br />
                    THE WORLD’S LARGEST <br />
                    CONTENT DELIVERY NETWORK
                </h2>
            </div>
            <div className='flex justify-center items-center text-center text-green my-36 relative'>
                <div className="w-9/12 relative">
                    <Image
                        src={bridgeImage}
                        layout="responsive"
                        alt="circle image"
                        className="w-full h-auto"
                        width={1096}
                        height={650}
                    />
                </div>
                <div className='absolute w-12/12 text-left flex items-start'>
                    <Image
                        src={bridgeText}
                        layout="responsive"
                        alt="circle image"
                        className="w-full h-auto"
                        width={1096}
                        height={650}
                    />
                    <div className='border border-green rounded-full'>
                        <span className='font-bold text-3xl leading-66 py-10 px-3'>
                            TM
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-full text-center'>
                <div className='w-8/12 text-yellowLight'>
                    <h2 className='text-7xl font-bold leading-78 '>
                        A SINGLE PANE OF GLASS CONNECTING WEB2 & WEB3
                    </h2>
                    <p className='text-32 font-bold leading-40 mt-5'>
                        Backed by AI enabled data management tools.
                    </p>
                </div>
            </div>
            <div className='w-full mt-28 border-x border-y-0 border-y-yellowLight text-yellowLight'>
                <div className='xl:px-36 px-12 pt-20'>
                    <div className='flex justify-between gap-9'>
                        <div className='w-8/12'>
                            <BridgeCard
                                borders={'border-b border-r  border-t-0  border-l-0 border-yellowLight'}
                                paddings={'pr-11 pb-11'}
                            >
                                <div className='grid grid-cols-2 gap-11 w-full text-left'>
                                    <BridgeCardHeading heading={'Seamlessly Connecting Web2 and Web3.'} />
                                    <BridgeCardParagraph paragraph={'Our high-tech layer, composed of SenData and Pegasus stack, serves as the raw foundation for this AI-enhanced bridge. Experience unprecedented data movement and analysis as The Bridge transforms the way you connect and utilize data.'} />
                                </div>
                                <div className='mt-6 w-full'>
                                    <Image
                                        src={defaultImage}
                                        layout="responsive"
                                        alt="default Image"
                                        className="w-full h-auto rounded-sm"
                                        width={731}
                                        height={217}
                                    />
                                </div>
                            </BridgeCard>
                        </div>
                        <div className='w-4/12'>
                            <BridgeCard
                                borders={'border-b border-r-0  border-t-0  border-l-0 border-yellowLight'}
                                paddings={'pl-11 pb-11'}
                            >
                                <div className='flex flex-col gap-12 w-full text-left'>
                                    <BridgeCardHeading heading={'Simplifying Industry Applications'} />
                                    <div className='w-full'>
                                        <Image
                                            src={defaultImage}
                                            layout="responsive"
                                            alt="default Image"
                                            className="w-full h-auto rounded-sm"
                                            width={498}
                                            height={183}
                                        />
                                    </div>
                                    <BridgeCardParagraph paragraph={'Our AI-driven tools, built on top of the base layer, offer clear industry, vertical, security, and monetization applications. Designed for ease of understanding, these tools enable users to harness the full potential of AI in a simple and effective manner.'} />
                                </div>
                            </BridgeCard>
                        </div>
                    </div>
                    <div className='flex justify-between mt-14 gap-9'>
                        <div className='w-4/12'>
                            <BridgeCard
                                borders={'border-b border-r  border-t-0  border-l-0 border-yellowLight'}
                                paddings={'pr-11 pb-11 pt-8'}
                            >
                                <div className='flex flex-col gap-12 w-full text-left'>
                                    <BridgeCardHeading heading={'Connecting the World’s Data With Unmatched Efficiency'} />
                                    <div className='w-full'>
                                        <Image
                                            src={defaultImage}
                                            layout="responsive"
                                            alt="default Image"
                                            className="w-full h-auto rounded-sm"
                                            width={498}
                                            height={183}
                                        />
                                    </div>
                                    <BridgeCardParagraph paragraph={'Our base stack is developing the world’s largest Content Delivery Network (CDN). The Bridge becomes the largest single pane of glass, bridging all storage solutions and delivering content seamlessly.'} />
                                </div>
                            </BridgeCard>
                        </div>
                        <div className='w-8/12'>
                            <BridgeCard
                                borders={'border-b border-r-0  border-t-0  border-l-0 border-yellowLight'}
                                paddings={'pl-11 pb-11 pt-8'}
                            >
                                <div className='mb-7 w-full'>
                                    <Image
                                        src={defaultImage}
                                        layout="responsive"
                                        alt="default Image"
                                        className="w-full h-auto rounded-sm"
                                        width={731}
                                        height={217}
                                    />
                                </div>
                                <div className='flex justify-between gap-12 w-full text-left'>
                                    <BridgeCardHeading heading={'Robust Data Aggregation &Integration'} />
                                    <BridgeCardParagraph paragraph={'At the core of The Bridge are SenData and Pegasus. SenData connects on-premise, Web2, and Web3 data sources, using AI for superior data movement and analysis. Pegasus integrates decentralized and centralized storage solutions, offering an AI-powered analytic framework. Together, they ensure robust and efficient data management.'} />
                                </div>
                            </BridgeCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}