'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const faqData = [
    {
        question: 'What is The Bridge?',
        answer: 'The Bridge is the first global platform for interoperable data transfer. It connects Web2 and Web3 ecosystems, enabling seamless data movement, governance, and monetization across storage providers.'
    },
    {
        question: 'Who is Lotus Data Group?',
        answer: 'Lotus Data Group is the creator of The Bridge, dedicated to developing interoperable data solutions. We empower enterprises and institutions to manage their data as an asset class with cutting-edge tools and governance frameworks."'
    },
    {
        question: 'What problem does The Bridge solve?',
        answer: 'Data today is stored in independent data storage providers (data banks), both centralized and decentralized, with no interoperability between them. Each platform operates under different protocols, creating barriers to data transfer and limiting its value. The Bridge introduces a unified protocol that enables seamless transfer and validation across data banks which prepares data to be a monetizable asset.'
    },
    {
        question: 'How does The Bridge ensure data integrity and compliance?',
        answer: 'The Bridge uses a standardized on-chain protocol with Bridge ID for validation. This ensures that data remains consistent “across platforms, helping validate storage providers are meeting regulatory standard like HIPAA, ISO, and SOC2.'
    },
    {
        question: 'What makes data a tradeable asset class?',
        answer: 'The Bridge enable organisations to transparantly govern, manage and rate their data storage quality. This allows companies to assign value to their data assets, paving the way for financial instruments like data-backed loans or securitized portfolios to emerge in the future.'
    },
    {
        question: 'What is the roadmap for The Bridge?',
        answer: 'The Bridge aims to establish a global standardized protocol for seamless data transfer, validation, and settlement across centralized and decentralized platforms. A key component of this roadmap is our API, which will empower developers to build new applications and integrate existing solutions into The Bridge ecosystem. By leveraging our platform, organizations can address critical challenges in areas such as cybersecurity, data sovereignty, and advanced data management. Much like financial services use transfer and settlement protocols to power consumer-facing innovations, The Bridge’s API will unlock new opportunities, foster innovation, and drive the development of a dynamic marketplace for interoperable data management solutions.'
    },
    {
        question: 'Will there be a token?',
        answer: 'Yes, we plan to introduce a token that powers transactions within The Bridge ecosystem, rewards performance, and provides the necessary metrics for the creation of data-backed financial instruments in the future.'
    },
    {
        question: 'How can enterprises benefit from The Bridge?',
        answer: 'Enterprises can unify their data across platforms, manage it in compliance with governance frameworks, and unlock new revenue streams by treating data as a tradeable, monetizable asset.'
    },
    {
        question: 'How does The Bridge handle data security?',
        answer: 'The Bridge ensures data security by aligning with industry standards like ISO and SOC2, employing KYC-compliant trustees, and offering real-time validation through our single pane of glass interface.'
    },
    {
        question: 'How do I get started with The Bridge?',
        answer: 'You can book a consultation to discuss your data management strategy. Our team will guide you through unifying, governing, and managing your data assets” or unifying, governing, and ensurign your data assets are ready to be monetized in the future.'
    }
];


export const FrequentlyAsked = () => {

    const [activeIndex, setActiveIndex] = useState(null); // Track currently active question
    const contentRefs = useRef([]); // Create refs to measure the height of each answer

    const handleToggleBox = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle active question
    };


    return (
        <section className="2xl:py-28 md:py-16 py-10 xl:px-28 md:px-5 px-0 ">
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
                            <span className="2xl:text-2xl text-xl font-300 ">
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
        </section>
    )
}