'use client'

import Lottie from "lottie-react";
import LoadingBar from '../../../../../public/animations/loading-bar.json';

export const PoweredBySend = () => {
    return (
        <div className="bg-black text-white px-80 py-24">
            <span className="bg-green text-black inline px-0.5 text-2xl tracking-space18">Join</span>
            <div className="text-right w-full">
                <h3 className="text-4xl font-extralight ">
                    The largest data migration in history.
                </h3>
                <div className="grid grid-cols-3 justify-end items-center mt-2">
                    <div className="h-available col-span-2 relative overflow-hidden flex justify-center items-center">
                        <Lottie animationData={LoadingBar} loop={true} className="absolute w-max" />
                    </div>
                    <div className="text-xl font-extralight w-full">
                        Powered by
                        <span className="font-medium">
                            {" "}Send<sup>TM</sup>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}