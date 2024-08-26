'use client'

import Lottie from "lottie-react";
import Image from "next/image";
import investerHero from '../../../../../public/animations/ethereum-crypto.json';
import sendataLogo from '../../../../../public/investor-assets/sendata-logo.png';
// import bridgeGrowthMap from '../../../../../public/animations/bridge-growth-map.json';
import { useState } from "react";
import { DefaultBlack } from "../../buttons/DefaultBlack";
import { Chart } from "react-google-charts";

const growthTabs = [
    "INVESTORS",
    "RESEARCH",
    "DEVELOPMENT",
    "OPERATIONS",
    "MARKETING",
    "COMMUNITY",
    "PARTNERSHIPS",
    "TEAM",
];

const tabData = [
    {
        percentage: 20,
        title: "INVESTORS",
        detail: [
            {
                title: "Private Placement",
                percentage: "10%",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                title: "Public Offering",
                percentage: "10%",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
        ]
    },
    {
        percentage: 20,
        title: "RESEARCH",
        detail: [
            {
                title: "Research & Development",
                percentage: "20%",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    {
        percentage: 10,
        title: "DEVELOPMENT",
        detail: [
            {
                title: "Product Development",
                percentage: "10%",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    {
        percentage: 10,
        title: "OPERATIONS",
        detail: [
            {
                title: "Company Operations",
                percentage: "10%",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    {
        percentage: 10,
        title: "MARKETING",
        detail: [
            {
                title: "Marketing",
                percentage: "10%",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    {
        percentage: 10,
        title: "COMMUNITY",
        detail: [
            {
                title: "Community",
                percentage: "10%",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    {
        percentage: 10,
        title: "PARTNERSHIPS",
        detail: [
            {
                title: "Partnerships",
                percentage: "10%",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    {
        percentage: 10,
        title: "TEAM",
        detail: [
            {
                title: "Team",
                percentage: "10%",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
    },
    // Add more data objects for other tabs as needed
];



export const data = [
    ["", "Percentage"],
    ["", 20],
    ["", 20],
    ["", 10],
    ["", 10],
    ["", 10],
    ["", 10],
    ["", 10],
    ["", 10],
];

export const InvertmentBridgeGrowth = () => {
    const [activeIndex, setActiveIndex] = useState(0);


    const handleSliceClick = (chartWrapper) => {

        const chart = chartWrapper.getChart();
        const selection = chart.getSelection();

        if (selection.length > 0) {
            const sliceIndex = selection[0].row;
            setActiveIndex(sliceIndex)
        }
    };

    // Function to generate slices based on the active index
    const generateSlicesForMobileVersion = () => {
        const slices = {};
        for (let i = 0; i < tabData.length; i++) {
            slices[i] = {
                color: i === activeIndex ? "#00ff00" : "gray",
            };
        }
        return slices;
    };

    // Function to generate slices based on the active index
    const generateSlices = () => {
        const slices = {};
        for (let i = 0; i < tabData.length; i++) {
            slices[i] = {
                color: i === activeIndex ? "#00ff00" : "transparent",
            };
        }
        return slices;
    };



    // Get data for the active tab
    const activeTab = tabData[activeIndex];

    // Handle case when `activeTab` is undefined or has missing data
    if (!activeTab) return <div>Loading...</div>;

    const { percentage, title, detail } = activeTab;

    return (
        <div className="investment-bridge-growth-bg h-auto relative">
            <div className="flex justify-center lg:h-105ch md:h-110ch h-120ch relative py-11">
                {/* <div className="w-11/12 bg-transparent relative overflow-hidden">
                    <Lottie animationData={bridgeGrowthMap} loop={true} className="opacity-10 absolute w-available h-fit" />
                </div> */}
            </div>
            <div className="py-28 w-full absolute inset-0 flex justify-center items-start">
                <div className="flex flex-col justify-center items-center text-white text-center">
                    <h3 className="2xl:text-118 xl:text-100 lg:text-90 md:text-80 text-5xl  font-extrabold border-b-[0.5px] border-hr relative">
                        Send
                        <sup className="absolute -top-5  w-full">
                            <Image src={sendataLogo} alt="send data logo" width={352} height={102} />
                        </sup>
                    </h3>
                    <p className="2xl:text-2xl lg:text-xl text-md mt-5 md:px-0 px-9">
                        Designed to drive engagement, reward participation, <br className="hidden md:block" />
                        and foster growth within <span className="font-bold">The Bridge<sup>TM</sup></span> ecosystem.
                    </p>
                    <div className="w-16 h-16 mt-10">
                        <Lottie animationData={investerHero} loop={true} />
                    </div>
                    <div className="mt-5">
                        <h4 className="font-2xl font-bold tracking-space-346 leading-7 flex flex-col">
                            Total Supply
                            <span className="font-normal text-green">2,000,000,000 $SEND</span>
                        </h4>
                    </div>
                    <div className="py-16 lg:px-40 md:px-20 px-9 w-auto">
                        <div className="lg:bg-black lg:block hidden bg-transparent relative w-fit bg-no-repeat lg:border border-0 border-white lg:shadow-white shadow-none">
                            <div className="flex lg:flex-nowrap flex-wrap justify-center lg:gap-0 gap-2">
                                {growthTabs.map((growthtab, index) => (
                                    <div key={index}
                                        onClick={() => setActiveIndex(index)}
                                        className={`
                                                ${activeIndex === index ? 'bg-green border-black border' : 'text-white'} 
                                                xl:py-3 lg:py-2 py-0.5 xl:px-5 lg:px-3 px-5 text-black border lg:border-black border-white lg:shadow-none shadow-white cursor-pointer xl:text-lg lg:text-base text-sm tracking-space90
                                            `}>
                                        <span className="uppercase ">
                                            {growthtab}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="">
                            <div className="lg:pt-40 pt-0 pb-10">
                                <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-start">
                                    <div className="flex justify-center">
                                        <div className="relative lg:flex hidden w-80 h-80 justify-center items-center">
                                            <Chart
                                                chartType="PieChart"
                                                className="bg-transparent lg:w-39 lg:h-39 w-31 h-31"
                                                data={[
                                                    ["", "Percentage"],
                                                    ["", 20],
                                                    ["", 20],
                                                    ["", 10],
                                                    ["", 10],
                                                    ["", 10],
                                                    ["", 10],
                                                    ["", 10],
                                                    ["", 10],
                                                ]}
                                                options={{
                                                    legend: "none",
                                                    pieSliceText: "none",
                                                    pieHole: 0.83,
                                                    pieStartAngle: 0,
                                                    backgroundColor: 'transparent',
                                                    colors: 'transparent',
                                                    tooltip: { trigger: "none" },
                                                    slices: generateSlices(),
                                                }}
                                            />
                                            <div className="absolute lg:w-80 w-64 lg:h-80 h-64 bg-transparent rounded-full flex justify-center items-center border-[4px] border-black">
                                                <div className="absolute inset-0 bg-white bg-no-repeat bg-origin-padding opacity-25 rounded-full"></div>
                                                <h4 className="uppercase lg:text-5xl text-3xl font-bold flex flex-col relative">
                                                    {percentage}%
                                                    <span className="lg:text-2xl text-xl font-normal text-green">{title}</span>
                                                </h4>
                                            </div>

                                            {/* <div className="absolute lg:w-80 w-64 lg:h-80 h-64 bg-transparent rounded-full flex justify-center items-center border-[4px] border-black">
                                                <div className="absolute inset-0 bg-white bg-no-repeat bg-origin-padding opacity-25 rounded-full"></div>
                                                <h4 className="uppercase lg:text-5xl text-3xl font-bold flex flex-col relative">
                                                    {percentage}%
                                                    <span className="lg:text-2xl text-xl font-normal text-green">{title}</span>
                                                </h4>
                                            </div> */}
                                        </div>
                                        <div className="relative lg:hidden flex w-80 h-80 mb-10 justify-center items-center">
                                            <Chart
                                                chartType="PieChart"
                                                className="bg-transparent lg:w-39 lg:h-39 w-31 h-31"
                                                data={[
                                                    ["", "Percentage"],
                                                    ["", 20],
                                                    ["", 20],
                                                    ["", 10],
                                                    ["", 10],
                                                    ["", 10],
                                                    ["", 10],
                                                    ["", 10],
                                                    ["", 10],
                                                ]}
                                                options={{
                                                    legend: "none",
                                                    pieSliceText: "none",
                                                    pieHole: 0.83,
                                                    pieStartAngle: 0,
                                                    backgroundColor: 'transparent',
                                                    colors: 'transparent',
                                                    tooltip: { trigger: "none" },
                                                    slices: generateSlicesForMobileVersion(),
                                                }}
                                                chartEvents={[
                                                    {
                                                        eventName: "select",
                                                        callback: ({ chartWrapper }) => handleSliceClick(chartWrapper),
                                                    },
                                                ]}
                                            />
                                            <div className="absolute lg:w-80 w-64 lg:h-80 h-64 bg-transparent rounded-full flex justify-center items-center border-[4px] border-black">
                                                <div className="absolute inset-0 bg-white bg-no-repeat bg-origin-padding opacity-25 rounded-full"></div>
                                                <h4 className="uppercase lg:text-5xl text-3xl font-bold flex flex-col relative">
                                                    {percentage}%
                                                    <span className="lg:text-2xl text-xl font-normal text-green">{title}</span>
                                                </h4>
                                            </div>

                                            {/* <div className="absolute lg:w-80 w-64 lg:h-80 h-64 bg-transparent rounded-full flex justify-center items-center border-[4px] border-black">
                                                <div className="absolute inset-0 bg-white bg-no-repeat bg-origin-padding opacity-25 rounded-full"></div>
                                                <h4 className="uppercase lg:text-5xl text-3xl font-bold flex flex-col relative">
                                                    {percentage}%
                                                    <span className="lg:text-2xl text-xl font-normal text-green">{title}</span>
                                                </h4>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="lg:border-l-2 border-l-0 border-green lg:px-8 px-0 flex lg:flex-col md:flex-row flex-col justify-between gap-5 h-fit ">
                                        {detail.map((item, index) => (
                                            <div key={index} className="lg:border-none border-l-2 lg:px-0 px-3 border-green grid lg:grid-cols-5 grid-cols-1 lg:gap-0 gap-3 text-left">
                                                <div className="lg:col-span-2">
                                                    <h4 className="text-32 xl:w-5/6 w-full leading-10 text-green flex flex-col">
                                                        {item.title}
                                                        <span className="font-bold text-white">{item.percentage}</span>
                                                    </h4>
                                                </div>
                                                <p className="lg:col-span-3">{item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}