'use client'

import Image from "next/image";
import { useRef, useState } from "react";
import defaultImage from '../../../../../public/icons/defaultImageIcon.svg';
import { NewHomeSlider } from "../../slick-slider/SlickSlider";
import { CardShowCase } from "./CardShowCase";


const growthTabs = [
    "PREDICTIVE ANALYSIS",
    "AUTOMATED DATA INGESTION",
    "DATA INTEGRITY SCANNER",
    "OPTIMIZATION ALGORITHMS",
];


const showCases = [
    {
        heading: 'TrendScopeTM',
        subHeading: 'Predictive Analytics',
        description: 'Harness the power of predictive analytics to identify emerging trends and forecast future outcomes. This tool empowers decision-makers with actionable insights, enhancing strategic planning and operational efficiency through data-driven decisions.',
        defaultImage: defaultImage
    },
    {
        heading: 'DataStreamTM',
        subHeading: 'Automated Data Ingestion',
        description: 'Our automated data ingestion tool simplifies the integration of diverse data sources, reducing manual effort and increasing accuracy. It seamlessly aggregates, sorts, and prepares data, ensuring your systems are always fueled with timely and relevant information.',
        defaultImage: defaultImage
    },
    {
        heading: 'DataGuardTM',
        subHeading: 'Data Integrity Scanner',
        description: 'Ensure data integrity with our robust error-checking mechanisms. Designed to prevent mishandling and inconsistencies, this tool continuously scans your data frameworks, identifies discrepancies, and provides solutions to maintain impeccable data quality.',
        defaultImage: defaultImage
    },
    {
        heading: 'OptiCore',
        subHeading: 'Optimization Algorithms',
        description: 'Optimize your data management with our advanced algorithms designed for efficient data storage, retrieval, and monetization. These tools analyze usage patterns to ensure optimal performance, reducing costs and enhancing the accessibility of critical data.',
        defaultImage: defaultImage
    },
];

export const ShowCaseSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null); // Ref for the slider

    const handleTabClick = (index) => {
        setActiveIndex(index);
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index); // Move to specific slide
        }
    };

    // Handler to sync state when slider changes
    const handleSliderChange = (oldIndex, newIndex) => {
        setActiveIndex(newIndex);
    };


    return (
        <div className="2xl:py-28 md:py-16 py-10">
            <div className="bg-gray-light rounded-lg 2xl:px-100 xl:px-20 md:px-10 px-5 xl:py-24 py-12 ">
                <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-0 gap-8 lg:mb-0 mb-5">
                    <h3 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-xl 2xl:leading-60 xl:leading-48 lg:leading-42 leading-8 font-extralight lg:col-span-8 lg:w-11/12 w-11/12">
                        <span className="font-normal">The Bridge<sup>TM</sup></span> houses cutting-edge AI enabled data management tools for enterprise clients
                    </h3>
                    <p className="2xl:text-2xl xl:text-base lg:text-sm text-xs lg:justify-self-end lg:col-span-4 lg:w-full w-11/12">
                        We believe that effective data management is essential to staying ahead of the curve. That’s why we’ve built industry leading tools right into our platform. Our powerful set of AI-driven tools make data sets more legible, and empower companies to use their data more effectively.
                    </p>
                </div>
                <div className="2xl:pt-100 xl:pt-20 md:pt-10">
                    <div className="border border-opacity-50 border-black md:pb-0 pb-12 px-2 rounded-lg overflow-hidden">
                        <div className="2xl:pt-14 pt-11 2xl:pb-24 xl:pb-20 pb-10  lg:px-10 px-5 justify-center lg:flex hidden">
                            <div className="lg:bg-white bg-transparent relative border rounded w-fit bg-no-repeat lg:shadow-black shadow-none">
                                <div className="flex lg:flex-nowrap flex-wrap justify-center lg:gap-0 gap-2">
                                    {growthTabs.map((growthtab, index) => (
                                        <div key={index}
                                            onClick={() => handleTabClick(index)}
                                            className={`
                                                ${activeIndex === index ? 'bg-green border-x rounded-sm' : 'text-black border-x border-transparent'} 
                                                2xl:py-1.4 xl:py-3 lg:py-2 py-0.5 2xl:px-1.8 xl:px-5 lg:px-2 px-5 text-black lg:shadow-none shadow-white cursor-pointer 2xl:text-base text-xs tracking-space90
                                            `}>
                                            <span className="uppercase ">
                                                {growthtab}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center 2xl:pb-24 pb-12 lg:pt-0 pt-12">
                            <NewHomeSlider sliderRef={sliderRef} onSlideChange={handleSliderChange}>
                                {showCases.map((showcase, index) => (
                                    <CardShowCase
                                        key={index}
                                        id={index}
                                        defaultImage={showcase.defaultImage}
                                        heading={showcase.heading}
                                        subHeading={showcase.subHeading}
                                        description={showcase.description}
                                    />
                                ))}
                            </NewHomeSlider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}