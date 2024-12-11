'use client'

import Lottie from "lottie-react";
import candleChart from "../../../../../public/animations/candle-chart.json";
import { DefaultBtnBlack } from "../../buttons/home/DefaultBtnBlack";


export const MessageForInvestors = () => {
    return (
        <div className="bg-black lg:px-24 md:px-12 px-9 lg:h-full md:h-35 h-96">
            <div className="relative lg:-top-60 md:-top-80 -top-80 max-w-screen-xl mx-auto">
                <div className="absolute inset-0 bg-black border border-white translate-x-[3.5px] translate-y-[3.5px]"></div>
                <div className="bg-white relative h-auto z-1 min-h-32">
                    <div className="h-[30rem] grid lg:grid-cols-8 grid-cols-1 lg:p-8 md:p-8 p-4 gap-6">
                        {/* Left Column */}
                        <div className="col-span-3 flex justify-center items-center">
                            <div className="relative lg:w-full md:w-35 w-72 lg:h-full md:h-80 h-56 lg:mt-0 md:mt-16 mt-3">
                                <div className="absolute">
                                    <Lottie className="h-23" animationData={candleChart} loop={true} />
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-span-5 flex flex-col md:gap-4 gap-3 m-auto">
                            <h3 className="lg:text-4xl md:text-3xl text-2xl lg:font-light font-semibold">A message for our investors</h3>
                            <p className="text-lg lg:font-normal font-light">
                                As an investor in The Bridge, you're helping shape the global standard for secure, interoperable data exchange. Through $BRIDGE tokens, we enable seamless transactions, data monetization, and a thriving ecosystem of developers, storage providers, and data consumers. Your investment lays the groundwork for a global data economy, where data is not only accessible but valuable, with vast growth potential. Together, we're building a platform that drives innovation and creates lasting impact.
                            </p>
                            <DefaultBtnBlack
                                btnText={'GET IN TOUCH'}
                                btnType={'button'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
