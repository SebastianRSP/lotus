'use client'

import { useEffect, useRef, useState } from "react";
import defaultImage from '../../../../../public/icons/defaultImageIcon.svg';
import { NewHomeSlider } from "../../slick-slider/SlickSlider";
import { CardShowCase } from "./CardShowCase";


const growthTabs = [
    "Data Intake & Ingestion",
    "Predictive Analytics",
    "Data Trust Establishment",
    "Optimization Algorithms",
];

const showCases = [
    {
        heading: `DataVault<sup>TM</sup>`,
        subHeading: 'Analyzing Data Intake for Compliance, Residency, and Optimization',
        description: 'DataVault is being built to analyze the intake of data to provide actionable insights that align with regulatory frameworks such as HIPAA, ISO, and SOC2. It will ensure that data flows and residency requirements are optimized for compliance, security, and strategic value. Data Vault will ensure your data is tracked, traced, and validated across all platforms and regions',
        svgPath: '/new-home-assets/SVG/DataVault.svg'
    },
    {
        heading: 'AssetFlow<sup>TM</sup>',
        subHeading: 'Predictive Analytics for Data Performance',
        description: 'AssetFlow is being built to provide real-time insights into the performance and movement of data assets across platforms. It will allow companies to forecast trends, optimize data strategies, and determine where their data will generate the most value.',
        svgPath: '/new-home-assets/SVG/AssetFlow.svg'
    },
    {
        heading: 'TrustGuard<sup>TM</sup>',
        subHeading: 'Establishing Data Trusts and Ensuring Governance',
        description: 'TrustGuard is being built to establish Data Trusts by employing third-party data validation to ensure that datasets are accurately maintained across all platforms. It will connect data owners with KYC-compliant “trustees” ensuring the appropriate credentials are met and that data is managed in the best interests of its owner.',
        svgPath: '/new-home-assets/SVG/TrustGuard.svg'
    },
    {
        heading: 'DataYield<sup>TM</sup>',
        subHeading: 'Algorithms to Quantify Quality',
        description: 'DataYield evaluates the quality of datasets and their storage environments. This evaluation develops an internal rating for your data which empowers intelligent decisions. Trustless, immutable, on chain tracking will provide analytical information for external third parties to establish valuations and projections for the monetization of datasets.',
        svgPath: '/new-home-assets/SVG/DataYield.svg'
    }
];

export const ShowCaseSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);
    const tabRefs = useRef([]); // To store refs for each tab
    const [bgStyle, setBgStyle] = useState({ left: 0, width: 0 });

    const handleTabClick = (index) => {
        setActiveIndex(index);
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index); // Move to specific slide
        }
    };

    const updateBgStyle = () => {
        if (tabRefs.current[activeIndex]) {
            const activeTab = tabRefs.current[activeIndex];
            const left = activeTab.offsetLeft;
            const width = activeTab.offsetWidth;
            setBgStyle({ left, width });
        }
    };

    useEffect(() => {
        // Update background position and width whenever activeIndex changes
        updateBgStyle();

        // Add resize event listener to update bgStyle on window resize
        window.addEventListener("resize", updateBgStyle);

        return () => {
            // Cleanup the event listener
            window.removeEventListener("resize", updateBgStyle);
        };
    }, [activeIndex]);

    // Handler to sync state when slider changes
    const handleSliderChange = (oldIndex, newIndex) => {
        setActiveIndex(newIndex);
    };

    return (
        <section className="2xl:py-28 md:py-16 py-10">
            <div className="bg-gray-light rounded-lg 2xl:px-100 xl:px-20 md:px-10 px-5 xl:py-24 py-12">
                <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-0 gap-8 lg:mb-0 mb-5">
                    {/* <h3 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-xl 2xl:leading-60 xl:leading-48 lg:leading-42 leading-8 font-extralight lg:col-span-8 lg:w-11/12 w-11/12"> */}
                    <h3 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl 2xl:leading-60 xl:leading-48 lg:leading-42 leading-8 font-extralight lg:col-span-8 lg:w-11/12 md:w-11/12 w-full">
                        <span className="font-normal">The Bridge<sup>TM</sup></span> houses cutting-edge AI enabled data management tools for enterprise clients
                    </h3>
                    <p className="2xl:text-2xl xl:text-base lg:text-sm text-xs lg:justify-self-end lg:col-span-4 lg:w-full w-11/12">
                        We believe that effective data management is essential to staying ahead of
                        the curve. Our powerful set of AI-driven tools make data sets more legible,
                        and empower companies to use their data more effectively.
                    </p>
                </div>
                <div className="2xl:pt-100 xl:pt-20 md:pt-10">
                    <div className="border border-opacity-80 border-black md:pb-0 pb-12 px-2 rounded-lg overflow-hidden">
                        <div className="2xl:pt-14 pt-11 2xl:pb-24 xl:pb-20 pb-10 lg:px-10 px-5 justify-center lg:flex hidden">
                            <div className="lg:bg-white bg-transparent relative border rounded w-fit bg-no-repeat lg:shadow-black shadow-none">
                                <div className="relative flex lg:flex-nowrap flex-wrap justify-center lg:gap-0 gap-2">
                                    <div
                                        className="absolute top-0 h-full bg-green z-0 smooth-transition rounded border-x"
                                        style={{ left: `${bgStyle.left - 1}px`, width: `${bgStyle.width + 2}px` }}
                                    />
                                    {growthTabs.map((growthtab, index) => (
                                        <div key={index}
                                            onClick={() => handleTabClick(index)}
                                            ref={(el) => (tabRefs.current[index] = el)}
                                            className={`tab ${activeIndex === index ? '' : 'text-black'} 
                                                2xl:text-base text-xs tracking-space90 text-black 2xl:py-1.4 xl:py-3 lg:py-2 py-0.5 2xl:px-1.8 xl:px-5 lg:px-2 px-5 border-x-transparent lg:shadow-none shadow-white relative z-[1] cursor-pointer
                                            `}>
                                            <span className="uppercase">
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
                                        defaultImage={showcase.svgPath}
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
        </section>
    );
};
