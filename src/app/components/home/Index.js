'use client'

import Image from "next/image";
import { DefaultBtn } from "../buttons/home/DefaultBtn";
import { HomeNavbar } from "../navbar/home/HomeNavbar";
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import tickIcon from '../../../../public/new-home-assets/tick.svg';
import { TextSwapper } from "./text-animation/TextSwapper";
import { TextTyping } from "./text-animation/TextTyping";

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
                        <div className=' bg-white 2xl:h-18 h-16 z-10 md:rounded-bl-[32px] rounded-br-[32px] 2xl:w-2/6 lg:w-4/12 md:w-1/5 sm:w-3/12 w-4/12'></div>
                    </div>
                    <div className=" grid grid-cols-12 h-available items-center">
                        <div className="lg:col-span-6 col-span-11 xl:pl-100 md:pl-10 pl-5 grid grid-rows-3 items-end h-available">
                            <div className="flex flex-col gap-6 row-span-2">
                                <h2 id="home-hero-heading" className="2xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-extralight 2xl:leading-66 lg:leading-54 md:leading-42 leading-9">
                                    Decentralized<br /> data infrastructure<br /> for{" "}
                                    {/* <TextSwapper /> */}
                                    <TextTyping />
                                </h2>
                                <p id="home-hero-paragraph" className="2xl:text-2xl text-sm">Data mobility. Without limits.</p>
                                <div id="home-hero-button" className="2xl:pt-6 pt-3">
                                    <DefaultBtn
                                        btnText={'Get Started'}
                                    />
                                </div>
                            </div>
                            <div id="home-hero-bullets" className="flex flex-col row-span-1 2xl:pb-10 pb-5 w-fit">
                                <div className="border-t-[0.2px] border-t-black border-opacity-20">
                                    {bullets.map((bullet, index) => (
                                        <div key={index} className="flex items-center gap-3 border-b-[0.2px] border-b-black border-opacity-20 py-2">
                                            <Image
                                                src={tickIcon}
                                                className="2xl:w-4 -mb-2"
                                                alt="tick icon"
                                                width={10}
                                                height={10}
                                            />
                                            <p className="2xl:text-xl md:text-sm font-medium text-xs">{bullet.buttet}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 col-span-1"></div>
                    </div>
                </div>
            </section>
        </>
    )
}