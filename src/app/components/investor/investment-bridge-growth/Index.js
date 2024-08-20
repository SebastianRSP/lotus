'use client'

import Lottie from "lottie-react";
import investerHero from '../../../../../public/animations/ethereum-crypto.json';
import bridgeGrowthMap from '../../../../../public/animations/bridge-growth-map.json';
import { useState } from "react";
import { DefaultBtn } from "../../buttons/DefaultBtn";

const growthTabs = [
    "INVESTORS",
    "RESEARCH",
    "DEVELOPMENT",
    "OPERATIONS",
    "MARKETING",
    "COMMUNITY",
    "PARTNERSHIPS",
    "TEAM",
]

export const InvertmentBridgeGrowth = () => {

    // State to keep track of the active tab
    const [activeIndex, setActiveIndex] = useState(0);


    return (
        <div className="investment-bridge-growth-bg h-auto relative">
            <div className="flex justify-center relative top-40">
                <div className="w-11/12 h-[94rem] bg-transparent ">
                    <Lottie animationData={bridgeGrowthMap} loop={true} style={{ opacity: '0.1' }} />
                </div>
            </div>
            {/* <div className="py-11 w-full flex justify-center items-start"> */}
            <div className="py-11 w-full absolute top-0 flex justify-center items-start">
                <div className="flex flex-col justify-center items-center text-white py-16 text-center">
                    <h3 className="text-118 font-extrabold border-b-[0.5px] border-hr">
                        Send <sup>as</sup>
                    </h3>
                    <p className="text-2xl mt-5">
                        Designed to drive engagement, reward participation, <br />
                        and foster growth within <span className="font-bold">The Bridge<sup>TM</sup></span> ecosystem.
                    </p>
                    <div className="w-16 h-16 mt-10">
                        <Lottie animationData={investerHero} loop={true} />
                    </div>
                    <div className="mt-5">
                        <h4 className="font-2xl font-bold tracking-space-346 leading-7 flex flex-col">
                            Total Supply
                            <span className="font-normal text-green">2,000,000,000 $SEND</span>
                        </h4>
                    </div>
                    <div className="py-32 px-40 w-auto">
                        <div>
                            <div className="bg-black relative w-fit bg-no-repeat border border-white shadow-white">
                                <div className="flex ">
                                    {growthTabs.map((growthtab, index) => (
                                        <div key={index}
                                            className={`
                                                ${activeIndex === index ? 'bg-green border-black border' : 'text-white'} 
                                                py-3 px-5  text-black text-lg tracking-space90
                                            `}>
                                            <span onClick={() => setActiveIndex(index)} className="uppercase cursor-pointer">
                                                {growthtab}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-24">
                                <div className="grid grid-cols-2 justify-center">
                                    <div className="flex justify-center">
                                        <div className="w-96 h-96 bg-gray-circle rounded-full flex justify-center items-center border-[5px] border-black">
                                            <h4 className="uppercase text-7xl font-bold flex flex-col">
                                                20%
                                                <span className="text-4xl font-normal text-green">INVESTORS</span>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="border-l-2 border-green px-8 flex flex-col justify-between">
                                        <div className="flex justify-between gap-14 text-left">
                                            <h4 className="text-4xl text-green flex flex-col">
                                                Private Placement
                                                <span className="font-bold text-white">10%</span>
                                            </h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                        <div className="flex justify-between gap-14 text-left">
                                            <h4 className="text-4xl text-green flex flex-col">
                                                Private Placement
                                                <span className="font-bold text-white">10%</span>
                                            </h4>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DefaultBtn
                        btnType={'button'}
                        btnText={'Learn More'}
                    />
                </div>
            </div>

        </div>
    )
}