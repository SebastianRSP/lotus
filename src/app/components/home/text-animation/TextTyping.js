'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

const industryNames = [
    "Fintech",
    "Pharmaceutical",
    "Cybersecurity",
    "Retail",
    "Universities",
    "Hedge Funds",
    "Genomics",
];

export const TextTyping = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const textRef = useRef(null);
    const typingSpeed = 0.15; // Speed of typing for each character (seconds per character)
    const erasingSpeed = 0.10; // Speed of erasing for each character

    useEffect(() => {
        const currentWord = industryNames[currentIndex];

        // Start typing the current word
        const typeNextWord = () => {
            // Type the current word
            gsap.to(textRef.current, {
                duration: currentWord.length * typingSpeed,
                text: currentWord,
                ease: "none",
                onComplete: () => {
                    // Pause before erasing
                    setTimeout(() => {
                        // Start erasing from the right side
                        eraseWord(currentWord);
                    }, 1000); // Hold the typed word for 1 second
                }
            });
        };

        // Function to erase the word from the right side
        const eraseWord = (word) => {
            const length = word.length;

            // Start erasing the word character by character
            for (let i = 0; i <= length; i++) {
                gsap.to(textRef.current, {
                    duration: erasingSpeed,
                    text: word.substring(0, length - i), // Erase from the right side
                    ease: "none",
                    delay: i * erasingSpeed, // Adjust delay for each character
                    onComplete: () => {
                        if (i === length) {
                            // Move to the next word when fully erased
                            setCurrentIndex((prevIndex) => (prevIndex + 1) % industryNames.length);
                        }
                    }
                });
            }
        };

        // Trigger the typing effect when the index changes
        typeNextWord();
    }, [currentIndex]);

    return (
        <div className="inline">
            <div className="inline-flex items-center">
                <div className="inline-block bg-green w-auto px-px rounded">
                    <span
                        ref={textRef}
                        className="font-bold 2xl:text-6xl lg:text-5xl md:text-4xl text-3xl 2xl:leading-66 lg:leading-54 md:leading-42 leading-9 cursor-pointer inline-flex w-max"
                    ></span>
                    <span className="font-300 relative -top-2 animate-blink">|</span>
                </div>
            </div>
        </div>
    );
};
