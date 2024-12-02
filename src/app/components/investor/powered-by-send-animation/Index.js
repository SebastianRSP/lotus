'use client'

import Lottie from "lottie-react";
import LoadingBar from '../../../../../public/animations/loading-bar.json';
import sendataLogo from '../../../../../public/investor-assets/sendata-logo.png';
import Image from "next/image";

export const PoweredBySend = () => {
    return (
        <div className="bg-black flex justify-center text-white xl:px-80 lg:px-40 md:px-20 px-9 xl:py-24 lg:py-20 md:py-12 py-11">
            <div className="w-fit">
                <span className="bg-green text-black inline px-0.5 md:text-2xl text-lg tracking-space18">Join</span>
                <div className="text-right w-full">
                    <h3 className="2xl:text-325 xl:text-4xl md:text-2.61 sm:text-2xl text-32 font-extralight 2xl:!leading-45 md:!leading-50 !leading-8 md:text-center text-left">
                        The largest data migration in history.
                    </h3>
                    <div className="grid md:grid-cols-7 sm:grid-cols-9 grid-cols-9 justify-end items-center gap-3 mt-2">
                        <div className="h-full md:col-span-5 sm:col-span-6 col-span-5 relative overflow-hidden flex justify-center items-center">
                            <Lottie animationData={LoadingBar} loop={true} className="absolute w-max" />
                        </div>
                        <div className="md:text-xl text-md font-extralight md:col-span-2 sm:col-span-3 justify-self-center col-span-4">
                            Powered by
                            <span className="font-medium relative">
                                {" "}Send
                                <sup className="absolute -top-1 w-full">
                                    <Image
                                        src={sendataLogo}
                                        layout="responsive"
                                        width={39}
                                        height={31}
                                    />
                                </sup>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}