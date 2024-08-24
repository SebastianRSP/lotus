'use client'

import Lottie from "lottie-react";
import puzzleAnimation from '../../../../../public/animations/puzzle.json';
import boxesAnimation from '../../../../../public/animations/boxes.json';
import mountainAnimation from '../../../../../public/animations/mountain.json';
import premiumFeaturesAnimation from '../../../../../public/animations/premium-features.json';
import bubbleBg from '../../../../../public/animations/bubbles-bg.json';


export const DetailCards = () => {
    return (
        <div className="relative bg-black text-white h-auto bg-opacity-100 bg-no-repeat bg-origin-padding filter backdrop-blur-lg">
            <div className="absolute inset-0 z-0 filter backdrop-blur-lg">
                <Lottie animationData={bubbleBg} loop={true} className="h-available" />
            </div>
            <div className="relative xl:px-40 lg:px-20 px-9 lg:pt-20 pt-28 lg:pb-96 pb-30 z-10 filter backdrop-blur-lg">
                <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-0 gap-10 items-center md:py-20 py-10">
                    <div className="w-48 h-48 md:my-0 sm:my-32 my-3 relative flex justify-center items-end justify-self-center lg:order-1 md:order-2 order-2">
                        <div className="absolute">
                            <Lottie animationData={puzzleAnimation} loop={true} />
                        </div>
                    </div>
                    <div className="md:border-none border md:p-0 p-2 border-white md:shadow-none shadow-white lg:order-2 md:order-1 order-1">
                        <div className="text-left flex flex-col gap-6">
                            <h3 className="text-4xl text-green font-normal">Seamless transactions & cost efficiency</h3>
                            <p className="text-lg font-light">Use $SEND to streamline platform operations, ensuring smooth, efficient, and cost-effective transactions across the entire ecosystem, making it easier for businesses to manage their decentralized storage needs.</p>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-0 gap-10 items-center md:py-20 py-0">
                    <div className="md:border-none border md:p-0 p-2 border-white md:shadow-none shadow-white lg:order-1 md:order-2 order-1">
                        <div className="text-left flex flex-col gap-6">
                            <h3 className="text-4xl text-green font-normal">Powering the data economy</h3>
                            <p className="text-lg font-light">Access to advanced tools and services that enable users to fully participate in the data economy. This includes an the AI Refinement Engine for data analysis and engaging in the Monetization Marketplace, where data can be transformed into valuable assets.</p>
                        </div>
                    </div>
                    <div className="w-48 h-48 md:my-0 sm:my-32 my-3 relative flex justify-center items-end justify-self-center lg:order-2 md:order-1 order-2">
                        <div className="absolute">
                            <Lottie animationData={boxesAnimation} loop={true} />
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-0 gap-10 items-center md:py-20 py-0">
                    <div className="w-48 h-48 md:my-0 sm:my-32 my-3 relative flex justify-center items-end justify-self-center lg:order-1 md:order-2 order-2">
                        <div className="absolute">
                            <Lottie animationData={mountainAnimation} loop={true} />
                        </div>
                    </div>
                    <div className="md:border-none border md:p-0 p-2 border-white md:shadow-none shadow-white lg:order-2 md:order-1 order-1">
                        <div className="text-left flex flex-col gap-6">
                            <h3 className="text-4xl text-green font-normal">Incentivising stakeholders and contributors</h3>
                            <p className="text-lg font-light">The $SEND economy rewards top-performing storage providers, offers developers access to tools and APIs, and provides long-term value for investors. This ecosystem fosters collaboration, drives technological advancements, and ensures a robust and dynamic platform.</p>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-0 gap-10 items-center md:py-20 py-0">
                    <div className="md:border-none border md:p-0 p-2 border-white md:shadow-none shadow-white lg:order-1 md:order-2 order-1">
                        <div className="text-left flex flex-col gap-6">
                            <h3 className="text-4xl text-green font-normal">Premium features & exclusive access</h3>
                            <p className="text-lg font-light">Elevate your engagement with $SEND by unlocking premium tools and gaining exclusive access to special webinars, advanced analytics, and unique events, enhancing both value and experience.</p>
                        </div>
                    </div>
                    <div className="w-48 h-48 md:my-0 sm:my-32 my-3 relative flex justify-center items-end justify-self-center lg:order-2 md:order-1 order-2">
                        <div className="absolute">
                            <Lottie animationData={premiumFeaturesAnimation} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}