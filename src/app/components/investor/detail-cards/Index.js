'use client'

import icon1 from '../../../../../public/icons/icon_01_investor.svg';
import icon2 from '../../../../../public/icons/icon_02_investor.svg';
import icon3 from '../../../../../public/icons/icon_03_investor.svg';
import Image from "next/image";

import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import puzzleAnimation from '../../../../../public/animations/puzzle.json';
import boxesAnimation from '../../../../../public/animations/boxes.json';
import mountainAnimation from '../../../../../public/animations/mountain.json';
import premiumFeaturesAnimation from '../../../../../public/animations/premium-features.json';
// import bubbleBg from '../../../../../public/animations/bubbles-bg.json';
import { CardBackground } from './CardBackground';


const dataMigrations = [
    {
        datamigration: 'Optimised Transactions',
        migrationHeading: 'Seamless Data Transfers at Scale',
        migrationDescription: '$BRIDGE revolutionizes data transactions by creating a unified, cost-effective ecosystem. With blockchain-powered identifiers to track data and transactions, it removes bottlenecks and enables faster, more affordable exchanges across multiple storage platforms.',
        lottieAnimation: puzzleAnimation,
        bullets: [
            {
                heading: "Streamlined Data Management",
                icon: icon1
            },
            {
                heading: "Reduced Transaction Costs",
                icon: icon2
            },
            {
                heading: "Scalable Transfers",
                icon: icon3
            }
        ]
    },
    {
        datamigration: 'Data Empowerment',
        migrationHeading: 'Transforming Data into a Tradeable Asset',
        migrationDescription: '$BRIDGE unlocks the full potential of data by making it liquid and portable. Data owners retain control while gaining the flexibility to shape their role in the global data economy, using powerful tools to unlock new opportunities for their information assets.',
        lottieAnimation: boxesAnimation,
        bullets: [
            {
                heading: "AI-Driven Insights",
                icon: icon1
            },
            {
                heading: "Monetization Potential",
                icon: icon2
            },
            {
                heading: "API Accessibility",
                icon: icon3
            }
        ]
    },
    {
        datamigration: 'Rewarding Collaboration',
        migrationHeading: 'Building a Collaborative Growth Ecosystem',
        migrationDescription: 'Through $BRIDGE, we foster a thriving, collaborative environment where stakeholders are incentivized to enhance data integrity, drive innovation, and expand the platform. With a reward system that ensures contributors are fairly recognized, everyone can actively participate in the platform’s growth.',
        lottieAnimation: mountainAnimation,
        bullets: [
            {
                heading: "Performance-Based Rewards",
                icon: icon1
            },
            {
                heading: "Developer Empowerment",
                icon: icon2
            },
            {
                heading: "Ecosystem Growth Incentives",
                icon: icon3
            }
        ]
    },
    {
        datamigration: 'Exclusive Benefits',
        migrationHeading: 'Access Exclusive Tools and Privileges',
        migrationDescription: '$BRIDGE token holders gain access to premium features that maximize engagement and value. From advanced analytics to customized insights, these tools empower participants to navigate the ecosystem and create lasting impact.',
        lottieAnimation: premiumFeaturesAnimation,
        bullets: [
            {
                heading: "Priority Access",
                icon: icon1
            },
            {
                heading: "Advanced Analytics",
                icon: icon2
            },
            {
                heading: "Premium Utilities",
                icon: icon3
            }
        ]
    }
]


export const DetailCards = () => {
    return (
        <div className="relative bg-black text-white h-auto bg-no-repeat bg-origin-padding overflow-hidden ">
            <div className="absolute inset-0 z-0 md:bg-transparent bg-black md:opacity-100 opacity-50">
                {/* <Lottie animationData={bubbleBg} loop={true} className="h-available" /> */}
            </div>
            <div className="relative xl:px-40 lg:px-20 px-9 lg:pt-20 md:pt-28 pt-9 lg:pb-96 md:pb-30 pb-96 z-0 max-w-screen-xl mx-auto">
                {dataMigrations.map((dataMigration, index) => (
                    <div
                        className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 items-center md:py-20 py-10"
                        key={`dataMigration-${index}`}
                    >
                        <CardBackground>
                            <div className="flex w-40 h-[10rem] m-auto relative justify-center items-end">
                                <div className="absolute">
                                    <Lottie animationData={dataMigration.lottieAnimation} loop={true} />
                                </div>
                            </div>
                        </CardBackground>
                        <div
                            className={`md:bg-transparent bg-black md:rounded-none rounded-3xl md:p-0 p-4 ${
                                index % 2 === 0
                                    ? 'lg:order-2 md:order-1 order-1'
                                    : 'lg:order-1 md:order-1 order-1'
                            }`}
                        >
                            <div className="text-left flex flex-col md:gap-6 gap-3">
                                <h4 className="text-green 2xl:text-2xl xl:text-xl 2xl:leading-42">
                                    {dataMigration.datamigration}
                                </h4>
                                <h3 className="2xl:text-5xl xl:text-4xl md:text-3xl text-2xl 2xl:leading-56 md:leading-normal leading-6 2xl:w-11/12 text-white font-normal">
                                    {dataMigration.migrationHeading}
                                </h3>
                                <p className="text-base font-light">{dataMigration.migrationDescription}</p>
                                <ul className="leading-8">
                                    {dataMigration.bullets.map((bullet, bulletIndex) => (
                                        <li
                                            className="flex lg:font-semibold gap-4"
                                            key={`bullet-${index}-${bulletIndex}`} // Updated variable name
                                        >
                                            <Image
                                                src={bullet.icon}
                                                className="md:relative md:left-0 md:mt-0 fill-current"
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
    );
};
