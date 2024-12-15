'use client'

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const industryNames = [
    "Fintech",
    "Biotech",
    "Cybersecurity",
    "Retail",
    "Universities",
    "Hedge Funds",
    "Genomics"
];

export const TextSwapper = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [bgSize, setBgSize] = useState({ width: 0 });
    const [bgHeight, setHeight] = useState(0);
    const bgRef = useRef(null);


    // Update background size based on the active word
    useEffect(() => {

        if (bgRef.current) {
            const activeElement = bgRef.current.querySelectorAll('span')[currentIndex];
            if (activeElement) {
                setBgSize({
                    width: activeElement.offsetWidth,
                });
            }
            const totalHeight = bgRef.current.offsetHeight + 42;
            setHeight(totalHeight)
        }
    }, [currentIndex, industryNames]);

    // Automatically change the currentIndex every 2 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % industryNames.length);
        }, 2000);

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, [industryNames]);

    const handleClick = () => {
        // Increment index and reset to 0 if it exceeds the length of the array
        setCurrentIndex((prevIndex) => (prevIndex + 1) % industryNames.length);
    };

    return (
        <div className="inline">
            <div className="inline-flex 2xl:h-20 lg:h-18 md:h-14 h-10 overflow-hidden items-center">
                <motion.div
                    className="inline-flex 2xl:h-16 lg:h-14 md:h-10 h-8 bg-green w-auto cursor-pointer"
                    style={{ width: bgSize.width !== 0 ? (bgSize.width + 2) + "px" : '100%' }}
                    ref={bgRef}
                    animate={{ width: bgSize.width !== 0 ? (bgSize.width + 2) + "px" : '100%' }}
                    transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 25,
                    }}
                    onClick={handleClick}
                >
                    <motion.div
                        className="relative w-full inline-flex h-full flex-col 2xl:gap-10 lg:gap-11 md:gap-10 gap-[37.5px]"
                        initial={{ y: 0 }}
                        animate={{ y: -currentIndex * bgHeight }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {industryNames.map((industryName, index) => (
                            <motion.span
                                key={index}
                                className="inline-flex w-max font-bold 2xl:text-6xl lg:text-5xl md:text-4xl text-3xl 2xl:leading-66 lg:leading-54 md:leading-42 leading-9 cursor-pointer"
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileTap={{
                                    y: 8,
                                }}
                                transition={{
                                    y: { duration: 0.4, ease: "easeOut" }
                                }}
                            >
                                {industryName}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}