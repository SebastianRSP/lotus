'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const faqData = [
    {
        question: 'What is the Bridge™?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        question: 'How does the Bridge™ work?',
        answer: 'Bridge™ works by connecting various points of data seamlessly to provide an integrated view of the entire process, allowing for better decision-making and operational efficiency.'
    },
    {
        question: 'Why choose Bridge™?',
        answer: 'Bridge™ offers unparalleled flexibility, scalability, and reliability, making it the top choice for businesses looking to innovate and streamline their operations.'
    }
];


export const FrequentlyAsked = () => {

    const [activeIndex, setActiveIndex] = useState(null); // Track currently active question
    const contentRefs = useRef([]); // Create refs to measure the height of each answer

    const handleToggleBox = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle active question
    };


    return (
        <div className="2xl:py-28 md:py-16 py-10 2xl:px-28 md:px-5 px-0 ">
            <div className="flex justify-center text-center">
                <h4 className="2xl:text-5xl text-4xl font-medium">
                    Frequently Asked Questions
                </h4>
            </div>
            <div className="pt-14">
                {faqData.map((faq, index) => (
                    <div className="border-y border-[#ADADAD]" key={index}>
                        <div className={`flex justify-between py-8 items-center group new-home-faq ${activeIndex === index ? 'is-active' : ''}`}
                            onClick={() => handleToggleBox(index)} >
                            <span className="2xl:text-2xl text-xl font-300 group-hover:text-green">
                                {faq.question}
                            </span>
                            <span className="w-3 h-4 active-icon relative">
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    className={`block text-black group-hover:text-green `}
                                    size="sm"
                                />
                            </span>
                        </div>
                        <div
                            className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'mb-8' : ''}`} // Smooth transition classes
                            style={{
                                height: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : '0px',
                            }}
                        >
                            <div
                                className="bg-green rounded-lg 2xl:py-7 mb-14 py-5 2xl:px-8 px-6 bg-opacity-50"
                                ref={(el) => (contentRefs.current[index] = el)}
                            >
                                <p className="lg:text-lg md:text-md text-sm">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}