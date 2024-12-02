'use client'

import Image from "next/image";
import { DefaultBtn } from "../buttons/home/DefaultBtn";
import tickIcon from '../../../../public/new-home-assets/tick.svg';
import { TextTyping } from "./text-animation/TextTyping";
import { WhiteStrap } from "../white-strap-navbar/WhiteStrap";
import { HeroBackground } from "../shared-components/HeroBackground";
import { useEffect, useRef, useState } from "react";
// import Spline from "@splinetool/react-spline/next";

// Lazy load the Spline component
// const LazySpline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

const bullets = [
    { buttet: 'Seamless Web2 to Web3 Data Bridge' },
    { buttet: 'AI Enabled Data Management Tools' },
    { buttet: 'Enterprise Grade Infrastructure and Support' },
];


export const IndexHome = () => {

    // const [isSplineVisible, setIsSplineVisible] = useState(false);
    // const splineRef = useRef(null);



    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting) {
    //                 setIsSplineVisible(true);
    //                 observer.disconnect(); // Stop observing after it's loaded
    //             }
    //         },
    //         { threshold: 0.1 }
    //     );
    //     if (splineRef.current) {
    //         observer.observe(splineRef.current);
    //     }

    //     return () => {
    //         if (splineRef.current) {
    //             observer.unobserve(splineRef.current);
    //         }
    //     };
    // }, []);

    const [showFirstVideo, setShowFirstVideo] = useState(false);
    const [showSecondVideo, setShowSecondVideo] = useState(false);

    useEffect(() => {
        // Delay the start of the first video by 3 seconds
        const timer = setTimeout(() => {
            setShowFirstVideo(true);
        }, 3000);

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    const handleFirstVideoEnd = () => {
        setShowSecondVideo(true); // Show the second video when the first video ends
    };

    return (
        <>
            <HeroBackground bgColor={'bg-gray-light'}>
                {/* White Strap */}
                <WhiteStrap />
                <div className=" grid grid-cols-12 h-full  justify-end items-end">
                    {/* 2xl:gap-4.5 xl:gap-0 md:gap-12 gap-0 */}
                    <div className="2xl:col-span-5 md:col-span-6 col-span-12 2xl:pl-20 xl:pl-14 lg:pl-5 pl-5 grid 2xl:grid-rows-7 xl:grid-rows-6 lg:grid-rows-2 md:grid-rows-2 grid-rows-none items-end h-full relative">
                        {/* self-end */}
                        <div className="flex flex-col gap-6 md:self-center self-center 2xl:row-span-5 xl:row-span-4 lg:row-span-4 md:row-span-4 row-span-2 z-50">
                            {/* 2xl:text-7xl xl:text-3.5r lg:text-5xl md:text-4xl text-3xl 2xl:leading-84 xl:leading-62 lg:leading-54 md:leading-42 leading-9  */}
                            <h2 id="home-hero-heading" className="2xl:font-300 font-extralight 2xl:text-5xl xl:text-325 lg:text-5xl md:text-4xl text-3xl 2xl:leading-54 xl:leading-62 lg:leading-54 md:leading-42 leading-9">
                                Decentralized<br /> data infrastructure<br /> for{" "}
                                {/* <TextSwapper /> */}
                                <TextTyping />
                            </h2>
                            {/* 2xl:text-2xl md:text-base text-sm */}
                            <p id="home-hero-paragraph" className="2xl:text-lg md:text-base text-sm">Data mobility. Without limits.</p>
                            {/* 2xl:pt-6 pt-3 */}
                            <div id="home-hero-button" className="pt-3">
                                <DefaultBtn
                                    btnText={'Get Started'}
                                />
                            </div>
                        </div>
                        {/* absolute inset-0 col-span-12 md:hidden flex */}
                        <div className="absolute inset-0 col-span-12 md:hidden flex justify-center h-full w-full items-end row-span-4">
                            <div className="flex 2xl:h-95p xl:h-90p lg:h-80p md:h-60p h-80p 2xl:w-95p lg:w-90p w-full">
                                {showFirstVideo && !showSecondVideo ? (
                                    <video
                                        src="/new-home-assets/video/spline.mp4"
                                        autoPlay
                                        muted
                                        className="bg-transparent"
                                        onEnded={handleFirstVideoEnd}
                                    ></video>
                                ) : showSecondVideo ? (
                                    <video
                                        src="/new-home-assets/video/spline_lottie.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        className="bg-transparent"
                                    ></video>
                                ) : null}
                                {/* <Spline className="h-fit w-fit" scene="https://prod.spline.design/oEhJQIegnUr-kZTl/scene.splinecode" /> */}
                            </div>
                        </div>
                        <div id="home-hero-bullets" className="flex flex-col xl:row-span-2 lg:row-span-1 md:row-span-2 row-span-2 2xl:pb-10 pb-5 w-fit">
                            <div className="border-t-[0.2px] border-t-black border-opacity-20">
                                {bullets.map((bullet, index) => (
                                    <div key={index} className="flex items-center gap-3 border-b-[0.2px] border-b-black border-opacity-20 md:py-1 py-2">
                                        {/* 2xl:py-5 md:py-3 py-2 */}
                                        <Image
                                            src={tickIcon}
                                            className="2xl:w-4 -mb-2"
                                            alt="tick icon"
                                            width={10}
                                            height={10}
                                        />
                                        <p className="2xl:text-lg lg:text-24 md:text-base text-sm font-normal 2xl:leading-5 md:leading-18 leading-4">{bullet.buttet}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="md:flex hidden 2xl:col-span-7 md:col-span-6 col-span-1 h-full  justify-center 2xl:items-end sm:items-center items-end">
                        {/*  lg:w-80p md:w-70p sm:w-60p w-50p */}
                        {/* <div className="2xl:h-70p xl:h-60p lg:h-54p md:h-40p h-50p 2xl:w-95p xl:w-90p w-full flex justify-center items-end"> */}
                        <div className="2xl:h-full xl:h-90p lg:h-full md:h-80p h-50p 2xl:w-60p xl:w-80p w-full flex justify-center items-center">
                            {showFirstVideo && !showSecondVideo ? (
                                <video
                                    src="/new-home-assets/video/spline.mp4"
                                    autoPlay
                                    muted
                                    className="bg-transparent"
                                    onEnded={handleFirstVideoEnd}
                                ></video>
                            ) : showSecondVideo ? (
                                <video
                                    src="/new-home-assets/video/spline_lottie.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    className="bg-transparent"
                                ></video>
                            ) : null}
                            {/* <Spline scene="https://prod.spline.design/oEhJQIegnUr-kZTl/scene.splinecode" /> */}
                        </div>
                    </div>
                </div>
            </HeroBackground>
        </>
    )
}