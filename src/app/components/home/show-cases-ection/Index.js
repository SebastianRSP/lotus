'use client'

import Image from "next/image";
import { useState } from "react";
import defaultImage from '../../../../../public/icons/defaultImageIcon.svg';


const growthTabs = [
    "PREDICTIVE ANALYSIS",
    "AUTOMATED DATA INGESTION",
    "DATA INTEGRITY SCANNER",
    "OPTIMIZATION ALGORITHMS",
];

export const ShowCaseSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);



    return (
        <div className="2xl:py-32 py-16">
            <div className="bg-gray-light rounded-lg 2xl:px-40 px-28 2xl:py-28 py-12 ">
                <div className="grid grid-cols-2 gap-36 justify-between">
                    <h3 className="2xl:text-2xl text-xl 2xl:leading-7 leading-5 font-300">
                        <span className="font-bold">The Bridge<sup>TM</sup></span> houses cutting-edge AI enabled data management tools for enterprise clients
                    </h3>
                    <p className="2xl:text-sm justify-self-end text-xs w-4/6">
                        We believe that effective data management is essential to staying ahead of the curve. That’s why we’ve built industry leading tools right into our platform. Our powerful set of AI-driven tools make data sets more legible, and empower companies to use their data more effectively.
                    </p>
                </div>
                <div className="pt-14">
                    <div className="border border-black rounded-lg">
                        <div className="py-11 px-10 flex justify-center">
                            <div className="lg:bg-white bg-transparent relative border rounded w-fit bg-no-repeat lg:shadow-black shadow-none">
                                <div className="flex lg:flex-nowrap flex-wrap justify-center lg:gap-0 gap-2">
                                    {growthTabs.map((growthtab, index) => (
                                        <div key={index}
                                            onClick={() => setActiveIndex(index)}
                                            className={`
                                                ${activeIndex === index ? 'bg-green border-x rounded' : 'text-black divide-x border-transparent'} 
                                                xl:py-3 lg:py-2 py-0.5 xl:px-5 lg:px-3 px-5 text-black lg:shadow-none shadow-white cursor-pointer 2xl:text-sm xl:text-xs tracking-space90
                                            `}>
                                            <span className="uppercase ">
                                                {growthtab}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className=" px-5 py-10">
                            <div className="grid grid-cols-2">
                                <div className="flex justify-self-center bg-green opacity-10 rounded-lg w-4/6 justify-center">
                                    <Image
                                        src={defaultImage}
                                        className=""
                                        alt="default Image"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="2xl:text-3xl text-2xl 2xl:leading-9 leading-7 font-medium">TrendScope<sup>TM</sup></h4>
                                    <h5 className="2xl:text-3xl text-2xl 2xl:leading-9 leading-7 font-extralight">
                                        Predictive Analytics
                                    </h5>
                                    <p className="2xl:text-lg text-md mt-4 w-5/6">
                                        Harness the power of predictive analytics to identify emerging trends and forecast future outcomes. This tool empowers decision-makers with actionable insights, enhancing strategic planning and operational efficiency through data-driven decisions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}