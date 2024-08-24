'use client'

import Lottie from "lottie-react";
import investerHero from '../../../../../public/animations/investor-hero.json';
import { InvesterBannerText } from "../investor-banner-text/Index";
import { DefaultBlack } from "../../buttons/DefaultBlack";

export const InvestmentHero = () => {
    return (
        <>
        <section className="investor-hero-bg">
            <div className="xl:px-40 px-9 md:pb-0 md:py-10 py-28 h-screen text-white items-center grid md:grid-cols-2 grid-cols-1 justify-start">
                <div className="flex flex-col justify-between gap-6 md:relative absolute">
                    <h1 className="font-extralight 2xl:text-7xl xl:text-5xl lg:text-5xl md:text-4xl text-4xl 2xl:leading-74 xl:leading-56 lg:leading-50 md:leading-43 leading-40 xl:w-11/12 lg:w-10/12 w-11/12">
                        The {" "}
                        <span className="bg-green box-border uppercase font-bold text-black">$Send</span>
                        {" "}token  <br /> is the lifeblood <br />of 
                        <span className="font-bold">
                            {" "}The Bridge <sup>TM</sup>
                        </span><br />  ecosystem
                    </h1>
                    <p className="2xl:text-xl lg:text-lg text-md xl:font-light font-extralight 2xl:w-10/12 xl:w-full lg:w-10/12 md:w-full w-11/12">
                        Simplified decentralized storage with 
                        top-tier analytics, competitive 
                        pricing, and rewards, empowering 
                        informed decisions and active  
                        engagement for investors.
                    </p>
                    <div className="md:pt-6 pt-9">
                        <DefaultBlack 
                            btnText={'LEARN MORE'}
                            btnType={'button'}
                        />
                    </div>
                </div>
                <div className="flex justify-center md:items-center items-start lg:h-auto lg:w-auto md:h-96 md:w-96 h-80 w-80 order-first md:order-last">
                    <Lottie animationData={investerHero} loop={true} />
                </div>
            </div>
            <InvesterBannerText />
        </section>
        </>
    )
}