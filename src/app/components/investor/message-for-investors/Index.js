'use client'

import { DefaultBtn } from "../../buttons/DefaultBtn"
import Lottie from "lottie-react";
import candleChart from "../../../../../public/animations/candle-chart.json";


export const MessageForInvestors = () => {
    return (
        <div className="bg-black px-24 py-24">
            <div className="relative">
                <div className="absolute inset-0 bg-black border border-white translate-x-[3.5px] translate-y-[3.5px]" ></div>
                <div className="bg-white relative h-auto z-10">
                    <div className="grid grid-cols-2 px-16 py-16">
                        <div className="relative w-full h-full flex justify-center items-center">
                            <div className="absolute">
                                <Lottie animationData={candleChart} loop={true} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-7">
                            <h3 className="text-5xl font-light leading-56">A message for our investors</h3>
                            <p className="text-2xl">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut
                                labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                            <DefaultBtn
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