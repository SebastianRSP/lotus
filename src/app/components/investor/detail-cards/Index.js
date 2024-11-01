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
import { CardBackground } from './CardBackground';


const dataMigrations = [
    {
        datamigration: 'Optimised Transactions',
        migrationHeading: 'Seamless transactions & cost efficiency',
        migrationDescription: '$SEND enhances platform operations, delivering fast, cost-effective transactions for seamless decentralized storage management.',
        lottieAnimation: puzzleAnimation,
        bullets: [
            {
                heading: "Sim plifies storage operations",
                icon: icon1
            },
            {
                heading: "Lowers transaction costs",
                icon: icon2
            },
            {
                heading: "Boosts platform efficiency",
                icon: icon3
            }
        ]
    },
    {
        datamigration: 'Data Empowerment',
        migrationHeading: 'Powering the data economy',
        migrationDescription: 'Empowering users with tools to unlock value in the data economy through AI analysis and data monetization.',
        lottieAnimation: boxesAnimation,
        bullets: [
            {
                heading: "AI Refinement Engine for data analysis",
                icon: icon1
            },
            {
                heading: "Monetize data in the Marketplace",
                icon: icon2
            },
            {
                heading: "Access tools to engage in the data economy",
                icon: icon3
            }
        ]
    },
    {
        datamigration: 'Rewarding Collaboration',
        migrationHeading: 'Incentivising stakeholders and contributors',
        migrationDescription: 'The $SEND economy incentivizes storage providers, developers, and investors, fostering collaboration and innovation within a dynamic platform.',
        lottieAnimation: mountainAnimation,
        bullets: [
            {
                heading: "Rewards top-performing storage providers",
                icon: icon1
            },
            {
                heading: "Grants developers access to tools and APIs",
                icon: icon2
            },
            {
                heading: "Delivers long-term value for investors",
                icon: icon3
            }
        ]
    },
    {
        datamigration: 'Exclusive Benefits',
        migrationHeading: 'Premium features & exclusive access',
        migrationDescription: 'Unlock exclusive access to premium tools and events with $SEND, enhancing your experience and value.',
        lottieAnimation: premiumFeaturesAnimation,
        bullets: [
            {
                heading: "Access to special webinars and unique events",
                icon: icon1
            },
            {
                heading: "Advanced analytics for deeper insights",
                icon: icon2
            },
            {
                heading: "Premium tools to boost engagement and performance",
                icon: icon3
            }
        ]
    }
]


export const DetailCards = () => {
    return (
        <div className="relative bg-black text-white h-auto bg-no-repeat bg-origin-padding overflow-hidden">
            <div className="absolute inset-0 z-0 md:bg-transparent bg-black md:opacity-100 opacity-50">
                {/* <Lottie animationData={bubbleBg} loop={true} className="h-available" /> */}
            </div>
            <div className="relative xl:px-40 lg:px-20 px-9 lg:pt-20 md:pt-28 pt-9 lg:pb-96 md:pb-30 pb-96 z-0">
                {dataMigrations.map((dataMigration, index) => (
                    <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 items-center md:py-20 py-10">
                        <CardBackground>
                            <div className="flex md:w-28 w-20 md:h-28 h-20 m-auto relative justify-center items-end justify-self-center">
                                <div className="absolute">
                                    <Lottie animationData={dataMigration.lottieAnimation} loop={true} />
                                </div>
                            </div>
                        </CardBackground>
                        <div className={`md:bg-transparent bg-black md:rounded-none rounded-3xl md:p-0 p-4 ${index % 2 == 0 ? 'lg:order-2 md:order-1 order-1' : 'lg:order-1 md:order-1 order-1'}`}>
                            <div className="text-left flex flex-col md:gap-6 gap-3">
                                <h4 class="text-green 2xl:text-2xl xl:text-xl 2xl:leading-42">{dataMigration.datamigration}</h4>
                                <h3 className="2xl:text-5xl xl:text-4xl md:text-3xl text-2xl 2xl:leading-56 md:leading-normal leading-6 2xl:w-11/12 text-white font-normal">{dataMigration.migrationHeading}</h3>
                                <p className="text-base font-light">{dataMigration.migrationDescription}</p>
                                <ul className="leading-8">
                                    {dataMigration.bullets.map((bullet, index) => (
                                        <li className="flex lg:font-semibold gap-4">
                                            <Image
                                                src={bullet.icon}
                                                className="md:relative absolute md:left-0 -left-12 md:mt-0 -mt-2 fill-current"
                                                alt="icon"
                                                width={20}
                                                height={20}
                                            />
                                            {bullet.heading}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}