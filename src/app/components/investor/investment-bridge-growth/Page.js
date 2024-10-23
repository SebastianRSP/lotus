import Image from 'next/image';
import gridLines from '../../../../../public/investor-assets/investor-grid-lines.svg';
import sendataArrow from '../../../../../public/investor-assets/sendata-arrow.svg';
import sendataBlackArrow from '../../../../../public/investor-assets/senddata-black.svg';
import defaultImageIcon from '../../../../../public/investor-assets/default-img-icon.svg';
import databoxes from '../../../../../public/investor-assets/data-box.svg';
import lotusLogo from '../../../../../public/icons/logo.svg';

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


export const InvertmentBridgeGrowth = () => {
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
                                    <div className='grid grid-cols-12 gap-2 py-14'>
                                        {/* border-l-0.5 */}
                                        <div className='2xl:col-span-3 col-span-4 border-send-bridge'>
                                            {growthTabs.map((growthTabs, index) => (
                                                <div key={index} className='flex gap-6 items-center'>
                                                    <span className='w-2 h-2 bg-[#00BE00] -ml-1'>
                                                    </span>
                                                    <span className='text-lg text-black opacity-30 2xl:leading-60 leading-48 cursor-pointer'>
                                                        {growthTabs}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='2xl:col-span-9 col-span-8'>
                                            <div className='border-y-2 h-full py-5 border-opacity-20 border-black'>
                                                <div className="2xl:pr-28 pr-14 pl-3 flex flex-col lg:gap-0 gap-3 text-left">
                                                    <div className=" flex justify-between">
                                                        <h4 className="2xl:text-2xl text-xl font-bold 2xl:leading-60 leading-48 flex flex-col">
                                                            Private placement
                                                        </h4>
                                                        <span className="text-4xl 2xl:leading-60 leading-48 font-bold text-black opacity-40">10%</span>
                                                    </div>
                                                    <p className="w-full pt-5 text-lg leading-6">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    </p>
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
                                    <div className='flex flex-col 2xl:w-8/12 w-7/12'>
                                        <h4 className='text-lg pb-4 font-bold'>
                                            Total Supply
                                            <span className='font-normal block'>2,000,000,000 $SEND</span>
                                        </h4>
                                        <Image
                                            src={databoxes}
                                            width={427}
                                            height={427}
                                        />
                                        <h4 className='text-lg pt-4 text-right text-green font-bold'>
                                            Investors
                                            <span className='font-normal block'>400,000,000 $SEND</span>
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