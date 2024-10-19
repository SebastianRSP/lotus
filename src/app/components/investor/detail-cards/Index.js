'use client'

import icon1 from '../../../../../public/icons/icon_01_investor.svg';
import icon2 from '../../../../../public/icons/icon_02_investor.svg';
import icon3 from '../../../../../public/icons/icon_03_investor.svg';
import Image from "next/image";

import Lottie from "lottie-react";
import puzzleAnimation from '../../../../../public/animations/puzzle.json';
import boxesAnimation from '../../../../../public/animations/boxes.json';
import mountainAnimation from '../../../../../public/animations/mountain.json';
import premiumFeaturesAnimation from '../../../../../public/animations/premium-features.json';
// import bubbleBg from '../../../../../public/animations/bubbles-bg.json';
import ParticleComponent from "../../bubbles-animation/Index";


export const DetailCards = () => {
    return (
        <div className="relative bg-black text-white h-auto bg-no-repeat bg-origin-padding overflow-hidden">
            <div className="absolute inset-0 z-0 md:bg-transparent bg-black md:opacity-100 opacity-50">
                {/* <Lottie animationData={bubbleBg} loop={true} className="h-available" /> */}
            </div>
            <div className="relative xl:px-40 lg:px-20 px-9 lg:pt-20 md:pt-28 pt-9 lg:pb-96 md:pb-30 pb-96 z-10">
                <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-10 items-center md:py-20 py-5">
                <div class="order-1 w-full">
                <div className="p-[20px] bg-[#181818] rounded-[15px] mx-auto border border-[rgba(255,255,255,0.3)]">
                <div className="bg-[#1D1D1D] p-[80px] px-[100px] rounded-[10px] mx-auto border border-[rgba(255,255,255,0.3)] overflow-hidden shadow-[inset_0_0_10px_rgba(255,255,255,0.23)]">
                    {/* HERE */}
                    <div className="md:flex hidden w-28 h-28 m-auto relative justify-center items-end justify-self-center lg:order-1 md:order-2 order-2">
                        <div className="absolute">
                            <Lottie animationData={puzzleAnimation} loop={true} />
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="md:bg-transparent bg-black md:rounded-none rounded-3xl md:p-0 p-4 lg:order-2 md:order-1 order-1">
                        <div className="text-left flex flex-col md:gap-6 gap-3">
                            <div className="md:hidden flex w-full h-36 overflow-hidden relative justify-center items-end justify-self-center">

                                    <div className="absolute w-24 h-24 flex justify-center items-end">
                                        <Lottie animationData={puzzleAnimation} loop={true} />
                                    </div>
                                
                            </div>
                            <h4 class="text-green text-1.5xl">Optimised Transactions</h4>
                            <h3 className="lg:text-4xl md:text-3xl text-2xl text-white font-normal md:leading-normal leading-6">Seamless transactions & cost efficiency</h3>
                            <p className="md:text-lg text-base font-light">$SEND enhances platform operations, delivering fast, cost-effective transactions for seamless decentralized storage management.</p>
                            <ul className="leading-8">
                                <li className="flex gap-[15px]">                                    <Image
                                        src={icon1}
                                        className="md:relative absolute md:left-0 -left-12 md:mt-0 -mt-2 fill-current text-[#00FF00]"
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    /> Simplifies storage operations</li>
                                <li className="flex gap-[15px]">                                    <Image
                                        src={icon2}
                                        className="md:relative absolute md:left-0 -left-12 md:mt-0 -mt-2 color-green"
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    /> Lowers transaction costs</li>
                                <li className="flex gap-[15px]">                                    <Image
                                        src={icon3}
                                        className="md:relative absolute md:left-0 -left-12 md:mt-0 -mt-2 color-green"
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    /> Boosts platform efficiency</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-10 items-center md:py-20 py-5">
                    <div className="md:bg-transparent bg-black md:rounded-none rounded-3xl md:p-0 p-4 lg:order-1 md:order-2 order-1">
                        <div className="text-left flex flex-col md:gap-6 gap-3">


                            <div className="md:hidden flex w-full h-36 overflow-hidden relative justify-center items-end justify-self-center">
                                <div className="absolute w-24 h-24 flex justify-center items-end">
                                    <Lottie animationData={boxesAnimation} loop={true} />
                                </div>
                            </div>

                            <h4 class="text-green text-1.5xl">Data Empowerment</h4>
                            <h3 className="lg:text-4xl md:text-3xl text-2xl text-white font-normal md:leading-normal leading-6">Powering the data economy</h3>
                            <p className="md:text-lg text-base font-light">Empowering users with tools to unlock value in the data economy through AI analysis and data monetization.</p>
                            <ul className="leading-8">
                                <li className="flex gap-[15px]">                                    <Image
                                        src={icon1}
                                        className="md:relative absolute md:left-0 -left-12 md:mt-0 -mt-2 fill-current text-[#00FF00]"
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    /> AI Refinement Engine for data analysis</li>
                                <li className="flex gap-[15px]">                                    <Image
                                        src={icon2}
                                        className="md:relative absolute md:left-0 -left-12 md:mt-0 -mt-2 color-green"
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    /> Monetize data in the Marketplace</li>
                                <li className="flex gap-[15px]">                                    <Image
                                        src={icon3}
                                        className="md:relative absolute md:left-0 -left-12 md:mt-0 -mt-2 color-green"
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    /> Access tools to engage in the data economy</li>
                            </ul>
                        </div>
                    </div>
                    <div class="order-1 w-full">
                    <div className="p-[20px] bg-[#181818] rounded-[15px] mx-auto border border-[rgba(255,255,255,0.3)]">
                <div className="bg-[#1D1D1D] p-[40px] px-[70px] rounded-[10px] mx-auto border border-[rgba(255,255,255,0.3)] overflow-hidden shadow-[inset_0_0_10px_rgba(255,255,255,0.23)]">
                {/* HERE */}
                    
                    <div className="md:flex hidden w-48 h-48 m-auto relative justify-center items-end justify-self-center lg:order-2 md:order-1 order-2">
                        <div className="absolute">
                            <Lottie animationData={boxesAnimation} loop={true} />
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>

                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-10 items-center md:py-20 py-5">
<div class="w-full">
                <div className="p-[20px] bg-[#181818] rounded-[15px] mx-auto border border-[rgba(255,255,255,0.3)]">
                <div className="flex bg-[#1D1D1D] p-[80px] px-[100px] rounded-[10px] mx-auto border border-[rgba(255,255,255,0.3)] overflow-hidden shadow-[inset_0_0_10px_rgba(255,255,255,0.23)]">
                {/* HERE */}

                    <div className="md:flex hidden w-48 h-48 m-auto relative justify-center items-end justify-self-center lg:order-1 md:order-2 order-2">
                        <div className="absolute">
                            <Lottie animationData={mountainAnimation} loop={true} />
                        </div>
                    </div>

                    </div>
                    </div>
                    </div>


                    <div className="md:bg-transparent bg-black md:rounded-none rounded-3xl md:p-0 p-4 lg:order-2 md:order-1 order-1">
                        <div className="text-left flex flex-col md:gap-6 gap-3">
                            <div className="md:hidden flex w-full h-36 overflow-hidden relative justify-center items-end justify-self-center">
                                <div className="absolute w-24 h-24 flex justify-center items-end">
                                    <Lottie animationData={mountainAnimation} loop={true} />
                                </div>
                            </div>
                            <h4 class="text-green text-1.5xl">Rewarding Collaboration</h4>
                            <h3 className="lg:text-4xl md:text-3xl text-2xl text-white font-normal md:leading-normal leading-6">Incentivising stakeholders and contributors</h3>
                            <p className="md:text-lg text-base font-light">The $SEND economy incentivizes storage providers, developers, and investors, fostering collaboration and innovation within a dynamic platform.</p>
                            <ul className="leading-8">
                                <li className="flex gap-[15px]">                                    <Image
                                        src={icon1}
                                        className="md:relative absolute md:left-0 -left-12 md:mt-0 -mt-2 fill-current text-[#00FF00]"
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    /> Rewards top-performing storage providers</li>
                                <li className="flex gap-[15px]">                                    <Image
                                        src={icon2}
                                        className="md:relative absolute md:left-0 -left-12 md:mt-0 -mt-2 color-green"
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    /> Grants developers access to tools and APIs</li>
                                <li className="flex gap-[15px]">                                    <Image
                                        src={icon3}
                                        className="md:relative absolute md:left-0 -left-12 md:mt-0 -mt-2 color-green"
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    /> Delivers long-term value for investors</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-10 items-center md:py-20 py-5">
                    <div className="md:bg-transparent bg-black md:rounded-none rounded-3xl md:p-0 p-4 lg:order-1 md:order-2 order-1">
                        <div className="text-left flex flex-col md:gap-6 gap-3">
                            <div className="md:hidden flex w-full h-36 overflow-hidden relative justify-center items-end justify-self-center">
                                <div className="absolute w-24 h-24 flex justify-center items-end">
                                    <Lottie animationData={premiumFeaturesAnimation} loop={true} />
                                </div>
                            </div>
                            <h4 class="text-green text-1.5xl">Exclusive Benefits</h4>
                            <h3 className="lg:text-4xl md:text-3xl text-2xl text-white font-normal md:leading-normal leading-6">Premium features & exclusive access</h3>
                            <p className="md:text-lg text-base font-light">Unlock exclusive access to premium tools and events with $SEND, enhancing your experience and value.</p>
                            <ul className="leading-8">
                                <li className="flex gap-[15px]">                                    <Image
                                        src={icon1}
                                        className="md:relative absolute md:left-0 -left-12 md:mt-0 -mt-2 fill-current text-[#00FF00]"
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    /> Access to special webinars and unique events</li>
                                <li className="flex gap-[15px]">                                    <Image
                                        src={icon2}
                                        className="md:relative absolute md:left-0 -left-12 md:mt-0 -mt-2 color-green"
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    /> Advanced analytics for deeper insights</li>
                                <li className="flex gap-[15px]">                                    <Image
                                        src={icon3}
                                        className="md:relative absolute md:left-0 -left-12 md:mt-0 -mt-2 color-green"
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    /> Premium tools to boost engagement and performance</li>
                            </ul>
                        </div>
                    </div>
                    <div class="order-1 w-full">
                    <div className="p-[20px] bg-[#181818] rounded-[15px] mx-auto border border-[rgba(255,255,255,0.3)]">
                <div className="bg-[#1D1D1D] p-[40px] px-[70px] rounded-[10px] mx-auto border border-[rgba(255,255,255,0.3)] overflow-hidden shadow-[inset_0_0_10px_rgba(255,255,255,0.23)]">
                

                {/* HERE */}
                    <div className="md:flex hidden w-48 h-48 m-auto relative justify-center items-end justify-self-center lg:order-2 md:order-1 order-2">
                        <div className="absolute">
                            <Lottie animationData={premiumFeaturesAnimation} loop={true} />
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>


                </div>
            </div>
        </div>
    )
}