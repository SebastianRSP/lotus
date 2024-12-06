'use client'

import Image from "next/image";
import { DefaultBtn } from "../buttons/home/DefaultBtn";
import tickIcon from '../../../../public/new-home-assets/tick.svg';
import { TextTyping } from "./text-animation/TextTyping";
import { WhiteStrap } from "../white-strap-navbar/WhiteStrap";
import { HeroBackground } from "../shared-components/HeroBackground";
import { useEffect, useRef, useState } from "react";

const bullets = [
    { buttet: 'Seamless Web2 to Web3 Data Bridge' },
    { buttet: 'AI Enabled Data Management Tools' },
    { buttet: 'Enterprise Grade Infrastructure and Support' },
];


export const IndexHome = () => {
    const [hideFirstVideo, setHideFirstVideo] = useState(false);
    const firstVideoRef = useRef(null);
    const secondVideoRef = useRef(null);

    useEffect(() => {
        // Delay the start of the first video by 3 seconds
        const firstVideoTimer = setTimeout(() => {
            if (firstVideoRef.current) {
                firstVideoRef.current.play(); // Start the first video
            }
        }, 3000);

        // Delay the start of the second video slightly after the first
        const secondVideoTimer = setTimeout(() => {
            if (secondVideoRef.current) {
                secondVideoRef.current.play(); // Start the second video
            }
        }, 5350); // Adjust the delay as needed (e.g., 3s for simultaneous start)

        return () => {
            clearTimeout(firstVideoTimer);
            clearTimeout(secondVideoTimer);
        }; // Cleanup on unmount
    }, []);

    const handleFirstVideoEnd = () => {
        setHideFirstVideo(true); // Hide the first video when it ends
    };

    return (
        <>
            <HeroBackground bgColor={'bg-gray-light'}>
                {/* White Strap */}
                <WhiteStrap />
                <div className=" grid grid-cols-12 h-full  justify-end items-end max-w-screen-xl mx-auto">
                    {/* 2xl:gap-4.5 xl:gap-0 md:gap-12 gap-0 */}
                    <div className="pt-12 2xl:col-span-5 md:col-span-6 col-span-12 2xl:pl-20 xl:pl-14 lg:pl-5 pl-5 grid content-center gap-[18rem] md:gap-[5rem] h-full relative">
                    {/* self-end */}
                        <div className="flex flex-col gap-6 md:self-center self-center 2xl:row-span-5 xl:row-span-4 lg:row-span-4 md:row-span-4 row-span-2 z-50 ">
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
{/* Second Video (Background) */}
<video
                                ref={secondVideoRef} // Reference to control playback
                                src="/new-home-assets/video/spline_lottie.mp4"
                                muted
                                playsInline
                                loop
                                autoPlay
                                className="absolute inset-0 h-full w-full object-contain z-0"
                            ></video>

                            {/* First Video (Foreground) */}
                            <video
                                ref={firstVideoRef} // Reference to control playback
                                src="/new-home-assets/video/spline.mp4"
                                muted
                                playsInline
                                autoPlay
                                className={`absolute inset-0 h-full w-full object-contain z-10 transition-opacity duration-300 ${
                                    hideFirstVideo ? 'opacity-0' : 'opacity-100'
                                }`}
                                onEnded={handleFirstVideoEnd}
                            ></video>
                            </div>
                        </div>
                        <div id="home-hero-bullets" className="z-[99] flex flex-col xl:row-span-2 lg:row-span-1 md:row-span-2 row-span-2 2xl:pb-10 pb-5 w-fit">
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
                        <div className="-ml-32 relative 2xl:h-full xl:h-80p lg:h-full md:h-80p h-50p 2xl:w-80p w-full flex justify-center items-center">
{/* Second Video (Background) */}
<video
                                ref={secondVideoRef} // Reference to control playback
                                src="/new-home-assets/video/spline_lottie.mp4"
                                muted
                                playsInline
                                loop
                                className="absolute inset-0 h-full w-full object-contain z-0"
                            ></video>

                            {/* First Video (Foreground) */}
                            <video
                                ref={firstVideoRef} // Reference to control playback
                                src="/new-home-assets/video/spline.mp4"
                                muted
                                playsInline
                                className={`absolute inset-0 h-full w-full object-contain z-10 transition-opacity duration-300 ${
                                    hideFirstVideo ? 'opacity-0' : 'opacity-100'
                                }`}
                                onEnded={handleFirstVideoEnd}
                            ></video>
                        </div>
                    </div>
                </div>
            </HeroBackground>
        </>
    )
}