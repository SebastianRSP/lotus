import Image from 'next/image';
import bridgeImage from '../../../../public/images/bridge.png';
import bridgeText from '../../../../public/images/bridgeText.png';
import defaultImage from '../../../../public/images/defaultImage.png';
import { BridgeCard } from './BridgeCard';
import { BridgeCardHeading } from './BridgeCardHeading';
import { BridgeCardParagraph } from './BridgeCardParagraph';

export const Bridge = () => {
    return (
        <section className="bg-black forced-full-width overflow-hidden">
            <div className='lg:px-40 md:px-20 px-8 lg:pt-186 md:pt-20 pt-16'>
                <div className="text-left">
                    <h2 className="2xl:text-7xl md:text-4xl text-6xl text-yellowLight font-bold">
                        WE’RE BUILDING <br />
                        THE WORLD’S LARGEST <br />
                        CONTENT DELIVERY NETWORK
                    </h2>
                </div>
                <div className='flex justify-center items-center text-center text-green md:my-36 my-20 relative'>
                    <div className="md:w-9/12 w-full relative ">
                        <Image
                            src={bridgeImage}
                            alt="circle image"
                            // className="md:w-full max-w-fit object-cover"
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
                        <div className='border border-green rounded-full md:block hidden'>
                            <span className='font-bold text-3xl leading-66 py-10 px-3'>
                                TM
                            </span>
                        </div>
                    </div>
                </div>
                <div className='w-full text-center'>
                    <div className='2xl:w-10/12 xl:w-10/12 lg:w-full md:w-9/12 w-full text-yellowLight'>
                        <h2 className='2xl:text-7xl xl:text-6xl lg:text-5xl text-4xl font-bold 2xl:leading-78 leading-43'>
                            A SINGLE PANE OF GLASS CONNECTING WEB2 & WEB3
                        </h2>
                        <p className='md:text-32 text-26 font-bold md:leading-40 leading-32 md:mt-5 mt-12'>
                            Backed by AI enabled data management tools.
                        </p>
                    </div>
                </div>
            </div>
            <div className='xl:px-40 md:px-9 px-7 lg:pb-32 md:pb-32 pb-16'>
                <div className='w-full mt-28 md:border-x md:border-y-0 border-0 border-y-yellowLight text-yellowLight'>
                    {/* previosu 2xl:px-36 */}
                    <div className='2xl:px-12 md:px-8 px-0 pt-20'>
                        <div className='md:flex justify-between grid gap-9 my-auto'>
                            <div className='md:w-8/12 w-full'>
                                <BridgeCard
                                    borders={'md:border-b md:border-r md:border-t-0 md:border-l-0 border-0  border-yellowLight'}
                                    paddings={'2xl:pr-5 2xl:pb-5 md:pr-3 md:pb-3 p-0 h-full grid sm:justify-between gap-9'}
                                >
                                    <div className='grid md:grid-cols-2 grid-cols-1 gap-11 w-full text-left'>
                                        <BridgeCardHeading heading={'Seamlessly Connecting Web2 and Web3.'} />
                                        <BridgeCardParagraph paragraph={'Our high-tech layer, composed of SenData and Pegasus stack, serves as the raw foundation for this AI-enhanced bridge. Experience unprecedented data movement and analysis as The Bridge transforms the way you connect and utilize data.'} />
                                    </div>
                                    <div className='md:mt-6 mt-0 w-full md:order-2 order-first'>
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
                            <div className='md:w-4/12 w-full'>
                                <BridgeCard
                                    borders={'md:border-b md:border-r-0  md:border-t-0  md:border-l-0 border-0 border-yellowLight'}
                                    paddings={'2xl:pl-5 2xl:pb-5 md:pl-3 md:pb-3 p-0 h-full'}
                                >
                                    <div className='flex flex-col h-full justify-between text-left gap-9'>
                                        <BridgeCardHeading heading={'Simplifying Industry Applications'} />
                                        <div className='w-full md:order-none sm:order-first'>
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
                        <div className='md:flex justify-between grid mt-14 gap-9'>
                            <div className='md:w-4/12 w-full'>
                                <BridgeCard
                                    borders={'md:border-b md:border-r  md:border-t-0  md:border-l-0 border-0 border-yellowLight'}
                                    paddings={'2xl:pr-5 2xl:pb-5 md:pr-3 md:pb-3 p-0 2xl:pt-6 h-full'}
                                >
                                    <div className='flex flex-col h-full justify-between text-left gap-9'>
                                        <BridgeCardHeading heading={'Connecting the World’s Data With Unmatched Efficiency'} />
                                        <div className='w-full md:order-none sm:order-first'>
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
                            <div className='md:w-8/12 w-full'>
                                <BridgeCard
                                    borders={'md:border-b md:border-r-0  md:border-t-0  md:border-l-0 border-0 border-yellowLight'}
                                    paddings={'2xl:pl-5 2xl:pb-5 md:pl-3 md:pb-3 p-0 2xl:pt-6 h-full'}
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
                                    <div className='md:flex justify-between grid gap-12 w-full text-left'>
                                        <BridgeCardHeading heading={'Robust Data Aggregation &Integration'} />
                                        <BridgeCardParagraph paragraph={'At the core of The Bridge are SenData and Pegasus. SenData connects on-premise, Web2, and Web3 data sources, using AI for superior data movement and analysis. Pegasus integrates decentralized and centralized storage solutions, offering an AI-powered analytic framework. Together, they ensure robust and efficient data management.'} />
                                    </div>
                                </BridgeCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}