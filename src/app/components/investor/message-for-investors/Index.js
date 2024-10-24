'use client'

import { DefaultBtn } from "../../buttons/DefaultBtn"
import Lottie from "lottie-react";
import candleChart from "../../../../../public/animations/candle-chart.json";
import { DefaultBlack } from "../../buttons/DefaultBlack";
import { DefaultBtnBlack } from "../../buttons/home/DefaultBtnBlack";


export const MessageForInvestors = () => {
    return (
        <div className="bg-black lg:px-24 md:px-12 px-9 lg:h-full md:h-35 h-96">
            <div className="relative lg:-top-60 md:-top-80 -top-80">
                <div className="absolute inset-0 bg-black border border-white translate-x-[3.5px] translate-y-[3.5px]" ></div>
                <div className="bg-white relative h-auto z-1 min-h-32">
                    <div className="h-40 grid lg:grid-cols-2 grid-cols-none lg:grid-rows-none lg:p-16 md:p-8 p-4 ">
                        <div className="relative lg:w-full md:w-35 w-72 lg:h-full md:h-80 h-56 lg:mt-0 md:mt-16 mt-3 flex lg:justify-center justify-self-center items-center">
                            <div className="absolute">
                                <Lottie className="h-23" animationData={candleChart} loop={true} />
                            </div>
                        </div>
                        <div className="flex flex-col md:gap-4 gap-3 m-auto">
                            <h3 className="lg:text-4xl md:text-3xl text-2xl lg:font-light font-semibold lg:leading-56 leading-26">A message for our investors</h3>
                            <p className="text-lg lg:font-normal font-light">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
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