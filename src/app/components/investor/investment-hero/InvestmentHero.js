'use client'

import { DefaultBtnBlack } from "../../buttons/home/DefaultBtnBlack";
import { InvertmentBridgeGrowth } from '../investment-bridge-growth/PageOnScroll';
import Spline from '@splinetool/react-spline';

export const InvestmentHero = () => {
    return (
        <>
            <section id="home-hero-bg" className="investor-hero-bg relative">
                {/* max-w-screen-xl m-auto */}
                <div className="2xl:px-20 xl:px-20 px-9 h-screen text-white grid grid-cols-1 md:grid-cols-2 items-center md:pt-0 pt-7.3r md:gap-10 gap-0">
                    {/* Left Section: Text */}
                    <div className="flex flex-col justify-center gap-6 z-30">
                        <h1 className="font-extralight 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl text-32 2xl:leading-64 xl:leading-56 lg:leading-50 md:leading-43 leading-40 xl:w-12/12 lg:w-12/12 w-12/12">
                            The {" "}
                            <span className="bg-green box-border uppercase font-bold text-black">$BRIDGE</span>
                            {" "}<br /> is the lifeblood <br />of
                            <span className="font-bold">
                                {" "}The Bridge<sup>TM</sup>
                            </span><br />  ecosystem
                        </h1>
                        <p className="2xl:text-xl lg:text-lg md:text-md text-sm xl:font-light font-extralight 2xl:w-10/12 xl:w-full lg:w-10/12 md:w-full w-10/12 max-w-[390px]">
                            Simplifying data transfers across web2 and web3 storage providers with top-tier analytics, fair pricing, and performance incentives. We empower informed decisions and active engagement for all participants.
                        </p>
                        <DefaultBtnBlack
                            btnText={'LEARN MORE'}
                            btnType={'button'}
                        />
                    </div>

                    {/* Right Section: Spline */}
                    <div className="flex justify-center items-center">
                        <div className="investorSpline w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] pointer-events-none justify-center items-center">
                            <Spline scene="https://prod.spline.design/kEtlKqJ1tYUNBplv/scene.splinecode" />
                        </div>
                    </div>
                </div>
                <InvertmentBridgeGrowth />
                <div className='bg-black shadow-outer-light 2xl:h-18 h-14'></div>
            </section>
        </>
    );
};
