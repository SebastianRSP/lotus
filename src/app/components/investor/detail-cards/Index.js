'use client'

import Lottie from "lottie-react";
import puzzleAnimation from '../../../../../public/animations/puzzle.json';
import boxesAnimation from '../../../../../public/animations/boxes.json';
import mountainAnimation from '../../../../../public/animations/mountain.json';
import premiumFeaturesAnimation from '../../../../../public/animations/premium-features.json';
// import bubbleBg from '../../../../../public/animations/bubbles-bg.json';
import ParticleComponent from "../../bubbles-animation/Index";


export const DetailCards = () => {
    return (
        <div className="relative bg-black text-white h-auto bg-opacity-100 bg-no-repeat bg-origin-padding filter backdrop-blur-lg overflow-hidden">
            <div className="absolute inset-0 z-0 md:bg-transparent bg-white md:opacity-100 opacity-25">
                <ParticleComponent />
                {/* <Lottie animationData={bubbleBg} loop={true} className="h-available" /> */}
            </div>
            <div className="relative xl:px-40 lg:px-20 px-9 lg:pt-20 md:pt-28 pt-9 lg:pb-96 md:pb-30 pb-96 z-10 filter backdrop-blur-lg">
                <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-0 gap-10 items-center md:py-20 py-5">
                    <div className="md:flex hidden w-48 h-48 md:my-0 sm:my-32 my-3 relative justify-center items-end justify-self-center lg:order-1 md:order-2 order-2">
                        <div className="absolute">
                            <Lottie animationData={puzzleAnimation} loop={true} />
                        </div>
                    </div>
                    <div className="md:bg-transparent bg-black md:rounded-none rounded-3xl md:p-0 p-4 lg:order-2 md:order-1 order-1">
                        <div className="text-left flex flex-col md:gap-6 gap-3">
                            <div className="md:hidden flex w-full h-36 overflow-hidden relative justify-center items-end justify-self-center">
                                <div className="absolute w-24 h-24 flex justify-center items-end">
                                    <Lottie animationData={puzzleAnimation} loop={true} />
                                </div>
                            </div>
                            <h3 className="lg:text-4xl md:text-3xl text-2xl text-green font-normal md:leading-normal leading-6">Seamless transactions & cost efficiency</h3>
                            <p className="md:text-lg text-base font-light">Use $SEND to streamline platform operations, ensuring smooth, efficient, and cost-effective transactions across the entire ecosystem, making it easier for businesses to manage their decentralized storage needs.</p>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-0 gap-10 items-center md:py-20 py-5">
                    <div className="md:bg-transparent bg-black md:rounded-none rounded-3xl md:p-0 p-4 lg:order-1 md:order-2 order-1">
                        <div className="text-left flex flex-col md:gap-6 gap-3">
                            <div className="md:hidden flex w-full h-36 overflow-hidden relative justify-center items-end justify-self-center">
                                <div className="absolute w-24 h-24 flex justify-center items-end">
                                    <Lottie animationData={boxesAnimation} loop={true} />
                                </div>
                            </div>
                            <h3 className="lg:text-4xl md:text-3xl text-2xl text-green font-normal md:leading-normal leading-6">Powering the data economy</h3>
                            <p className="md:text-lg text-base font-light">Access to advanced tools and services that enable users to fully participate in the data economy. This includes an the AI Refinement Engine for data analysis and engaging in the Monetization Marketplace, where data can be transformed into valuable assets.</p>
                        </div>
                    </div>
                    <div className="md:flex hidden w-48 h-48 md:my-0 sm:my-32 my-3 relative justify-center items-end justify-self-center lg:order-2 md:order-1 order-2">
                        <div className="absolute">
                            <Lottie animationData={boxesAnimation} loop={true} />
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-0 gap-10 items-center md:py-20 py-5">
                    <div className="md:flex hidden w-48 h-48 md:my-0 sm:my-32 my-3 relative justify-center items-end justify-self-center lg:order-1 md:order-2 order-2">
                        <div className="absolute">
                            <Lottie animationData={mountainAnimation} loop={true} />
                        </div>
                    </div>
                    <div className="md:bg-transparent bg-black md:rounded-none rounded-3xl md:p-0 p-4 lg:order-2 md:order-1 order-1">
                        <div className="text-left flex flex-col md:gap-6 gap-3">
                            <div className="md:hidden flex w-full h-36 overflow-hidden relative justify-center items-end justify-self-center">
                                <div className="absolute w-24 h-24 flex justify-center items-end">
                                    <Lottie animationData={mountainAnimation} loop={true} />
                                </div>
                            </div>
                            <h3 className="lg:text-4xl md:text-3xl text-2xl text-green font-normal md:leading-normal leading-6">Incentivising stakeholders and contributors</h3>
                            <p className="md:text-lg text-base font-light">The $SEND economy rewards top-performing storage providers, offers developers access to tools and APIs, and provides long-term value for investors. This ecosystem fosters collaboration, drives technological advancements, and ensures a robust and dynamic platform.</p>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-0 gap-10 items-center md:py-20 py-5">
                    <div className="md:bg-transparent bg-black md:rounded-none rounded-3xl md:p-0 p-4 lg:order-1 md:order-2 order-1">
                        <div className="text-left flex flex-col md:gap-6 gap-3">
                            <div className="md:hidden flex w-full h-36 overflow-hidden relative justify-center items-end justify-self-center">
                                <div className="absolute w-24 h-24 flex justify-center items-end">
                                    <Lottie animationData={premiumFeaturesAnimation} loop={true} />
                                </div>
                            </div>
                            <h3 className="lg:text-4xl md:text-3xl text-2xl text-green font-normal md:leading-normal leading-6">Premium features & exclusive access</h3>
                            <p className="md:text-lg text-base font-light">Elevate your engagement with $SEND by unlocking premium tools and gaining exclusive access to special webinars, advanced analytics, and unique events, enhancing both value and experience.</p>
                        </div>
                    </div>
                    <div className="md:flex hidden w-48 h-48 md:my-0 sm:my-32 my-3 relative justify-center items-end justify-self-center lg:order-2 md:order-1 order-2">
                        <div className="absolute">
                            <Lottie animationData={premiumFeaturesAnimation} loop={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}