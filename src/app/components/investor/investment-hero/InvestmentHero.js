'use client'

import { DefaultBtnBlack } from "../../buttons/home/DefaultBtnBlack";
import { InvertmentBridgeGrowth } from '../investment-bridge-growth/PageOnScroll';
import Spline from '@splinetool/react-spline';

export const InvestmentHero = () => {
    return (
        <>
            <section id="home-hero-bg" className="investor-hero-bg relative">
                {/* <WhiteStrap /> */}
                {/* md:py-20 py-28 */}
                {/* md:h-auto xl:py-40 md:py-28 py-10 xl:pb-20 md:pb-14 pb-10 */}
                <div className="2xl:px-40 xl:px-20 px-9 h-screen text-white items-center grid md:grid-cols-2 grid-cols-1 justify-start">
                    <div className="flex relative z-30 flex-col justify-between gap-6 h-fit md:pt-20">
                        <h1 className="font-extralight 2xl:text-7xl xl:text-5xl lg:text-5xl md:text-4xl text-32 2xl:leading-74 xl:leading-56 lg:leading-50 md:leading-43 leading-40 xl:w-11/12 lg:w-10/12 w-11/12">
                            The {" "}
                            <span className="bg-green box-border uppercase font-bold text-black">$Send</span>
                            {" "}token  <br /> is the lifeblood <br />of
                            <span className="font-bold">
                                {" "}The Bridge <sup>TM</sup>
                            </span><br />  ecosystem
                        </h1>
                        <p className="2xl:text-xl lg:text-lg md:text-md text-sm xl:font-light font-extralight 2xl:w-10/12 xl:w-full lg:w-10/12 md:w-full w-10/12 max-w-[390px]">
                            Simplified decentralized storage with
                            top-tier analytics, competitive
                            pricing, and rewards, empowering
                            informed decisions and active
                            engagement for investors.
                        </p>
                        <DefaultBtnBlack
                            btnText={'LEARN MORE'}
                            btnType={'button'}
                        />
                    </div>
                    {/* md:w-96 forced-full-width lg:h-auto md:h-96 */}
                    <div className="flex justify-center md:items-center items-start justify-self-center md:absolute relative z-0 md:pt-20 md:h-screen h-60 md:w-screen forced-full-width order-first md:order-last">
                        <div className="pointer-events-none relative md:left-0 -left-20 w-full h-full">
                            <Spline scene="https://prod.spline.design/U6zfVaWNgMTaZLak/scene.splinecode" />
                        </div>
                    </div>
                </div>
                <InvertmentBridgeGrowth />
                <div className='bg-black shadow-outer-light 2xl:h-18 h-14'></div>
            </section>
        </>
    )
}