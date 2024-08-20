'use client'

import Lottie from "lottie-react";
import puzzleAnimation from '../../../../../public/animations/puzzle.json';
import boxesAnimation from '../../../../../public/animations/boxes.json';
import mountainAnimation from '../../../../../public/animations/mountain.json';
import premiumFeaturesAnimation from '../../../../../public/animations/premium-features.json';


export const DetailCards = () => {
    return (
        <div className="bg-black text-white h-auto bg-opacity-100 bg-no-repeat bg-origin-padding filter backdrop-blur-lg">
            <div className="px-40 py-20">
                <div className="grid grid-cols-2 items-center py-20">
                    <div className="w-48 h-48 relative flex justify-center items-end justify-self-center">
                        <div className="absolute">
                            <Lottie animationData={puzzleAnimation} loop={true} />
                        </div>
                    </div>
                    <div className="text-left flex flex-col gap-6">
                        <h3 className="text-4xl text-green font-normal">Seamless transactions & cost efficiency</h3>
                        <p className="text-lg font-light">Use $SEND to streamline platform operations, ensuring smooth, efficient, and cost-effective transactions across the entire ecosystem, making it easier for businesses to manage their decentralized storage needs.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center py-20">
                    <div className="text-left flex flex-col gap-6">
                        <h3 className="text-4xl text-green font-normal">Powering the data economy</h3>
                        <p className="text-lg font-light">Access to advanced tools and services that enable users to fully participate in the data economy. This includes an the AI Refinement Engine for data analysis and engaging in the Monetization Marketplace, where data can be transformed into valuable assets.</p>
                    </div>
                    <div className="w-48 h-48 relative flex justify-center items-end justify-self-center">
                        <div className="absolute">
                            <Lottie animationData={boxesAnimation} loop={true} />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center py-20">
                    <div className="w-48 h-48 relative flex justify-center items-end justify-self-center">
                        <div className="absolute">
                            <Lottie animationData={mountainAnimation} loop={true} />
                        </div>
                    </div>
                    <div className="text-left flex flex-col gap-6">
                        <h3 className="text-4xl text-green font-normal">Incentivising stakeholders and contributors</h3>
                        <p className="text-lg font-light">The $SEND economy rewards top-performing storage providers, offers developers access to tools and APIs, and provides long-term value for investors. This ecosystem fosters collaboration, drives technological advancements, and ensures a robust and dynamic platform.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center py-20">
                    <div className="text-left flex flex-col gap-6">
                        <h3 className="text-4xl text-green font-normal">Premium features & exclusive access</h3>
                        <p className="text-lg font-light">Elevate your engagement with $SEND by unlocking premium tools and gaining exclusive access to special webinars, advanced analytics, and unique events, enhancing both value and experience.</p>
                    </div>
                    <div className="w-48 h-48 relative flex justify-center items-end justify-self-center">
                        <div className="absolute">
                            <Lottie animationData={premiumFeaturesAnimation} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}