'use client'

import { DefaultBtn } from "../buttons/DefaultBtn";
import Lottie from "lottie-react";
import investerHero from '../../../../public/animations/investor-hero.json';

export const InvestmentHero = () => {
    return (
        <section className="relative fade-in-out ">
            <div className="h-screen text-white items-center grid grid-cols-2 justify-start">
                <div className="flex flex-col justify-between gap-6">
                    <h1 className="font-extralight text-4xl tracking-normal leading-43 w-4/6">
                        The <span className="bg-green box-border uppercase font-bold text-black">$Send</span> token is the lifeblood 
                        of <span className="font-bold">The Bridge<sup>TM</sup></span> ecosystem
                    </h1>
                    <p className="text-md font-extralight w-5/6">
                        Simplified decentralized storage with top-tier analytics, 
                        competitive pricing, and rewards, empowering informed 
                        decisions and active engagement for investors.
                    </p>
                    <DefaultBtn
                        btnText={'LEARN MORE'}
                        btnType={'button'}
                    />
                </div>
                <div className="flex justify-center items-center">
                    <Lottie animationData={investerHero} loop={true} />
                </div>
            </div>
        </section>
    )
}