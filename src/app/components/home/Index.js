'use client'

import Image from "next/image";
import { DefaultBtn } from "../buttons/home/DefaultBtn";
import tickIcon from '../../../../public/new-home-assets/tick.svg';
import { TextTyping } from "./text-animation/TextTyping";
import navCurve from '../../../../public/new-home-assets/nav-curve.svg';

const bullets = [
    { buttet: 'Seamless Web2 to Web3 Data Bridge' },
    { buttet: 'AI Enabled Data Management Tools' },
    { buttet: 'Enterprise Grade Infrastructure and Support' },
];


export const IndexHome = () => {

    return (
        <>
            <section className="h-available relative">
                <div id="home-hero-bg" className="bg-gray-light h-available rounded-lg relative">
                    {/* White Strap */}
                    <div className="absolute md:flex justify-center w-full z-0">
                        {/* 2xl:max-w-lg xl:max-w-sm lg:w-32r md:w-96 */}
                        <div className=' bg-white 2xl:h-18 lg:h-14 h-16 z-10 md:rounded-bl-[43px] rounded-br-[43px] lg:w-28.5p md:w-1/5 w-1/3 relative'>
                            <div className="absolute md:top-0 md:-left-7 -bottom-14 -left-0">
                                <Image 
                                   src={navCurve}
                                    width={32}
                                    height={20}
                                />
                            </div>
                            <div className="absolute top-0 -right-7">
                                <Image 
                                    src={navCurve}
                                    width={32}
                                    height={20}
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" grid grid-cols-12 h-available justify-end items-end">
                        {/* 2xl:gap-4.5 xl:gap-0 md:gap-12 gap-0 */}
                        <div className="lg:col-span-7 col-span-11 2xl:pl-100 lg:pl-14 md:pl-10 pl-5 grid 2xl:grid-rows-2 xl:grid-rows-6 lg:grid-rows-5 md:grid-rows-2 grid-rows-5 items-end h-available">
                            <div className="flex flex-col gap-6 md:self-center self-end xl:row-span-4 lg:row-span-4 md:row-span-4 row-span-3">
                                {/* xl:text-6xl xl:leading-66  */}
                                <h2 id="home-hero-heading" className="font-extralight 2xl:text-7xl xl:text-3.5r lg:text-5xl md:text-4xl text-3xl 2xl:leading-84 xl:leading-62 lg:leading-54 md:leading-42 leading-9">
                                    Decentralized<br /> data infrastructure<br /> for{" "}
                                    {/* <TextSwapper /> */}
                                    <TextTyping />
                                </h2>
                                <p id="home-hero-paragraph" className="2xl:text-2xl lg:text-lg sm:text-base text-sm">Data mobility. Without limits.</p>
                                <div id="home-hero-button" className="2xl:pt-6 pt-3">
                                    <DefaultBtn
                                        btnText={'Get Started'}
                                    />
                                </div>
                            </div>
                            <div id="home-hero-bullets" className="flex flex-col xl:row-span-2 lg:row-span-1 md:row-span-2 row-span-2 2xl:pb-10 pb-5 w-fit">
                                <div className="border-t-[0.2px] border-t-black border-opacity-20">
                                    {bullets.map((bullet, index) => (
                                        <div key={index} className="flex items-center gap-3 border-b-[0.2px] border-b-black border-opacity-20 2xl:py-5 py-2">
                                            <Image
                                                src={tickIcon}
                                                className="2xl:w-4 -mb-2"
                                                alt="tick icon"
                                                width={10}
                                                height={10}
                                            />
                                            <p className="2xl:text-2xl lg:text-lg sm:text-base text-sm font-normal xl:leading-26 md:leading-22 leading-5">{bullet.buttet}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 col-span-1"></div>
                    </div>
                </div>
            </section>
        </>
    )
}