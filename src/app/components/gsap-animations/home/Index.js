import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger, SplitText, TextPlugin } from "gsap/all";
import { smoothScroolling } from '../smoothScroll';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, TextPlugin);

// Text Typing Animation List
const industryNames = [
    "Fintech",
    "Pharmaceutical",
    "Cybersecurity",
    "Retail",
    "Universities",
    "Hedge Funds",
    "Genomics",
];

export const newHomePageAnimation = () => {
    const loader = document.querySelector('.loader');

    if (loader) {
        // Initial collapsed state: Leaves rotated and positioned below
        gsap.set("#left-leaf", { transformOrigin: "right center", rotate: -80, x: 50, y: 100, opacity: 0 });
        gsap.set("#middle-leaf", { transformOrigin: "center center", rotate: -300, x: -60, y: 100, opacity: 0 });
        gsap.set("#right-leaf", { transformOrigin: "left center", rotate: -300, x: -120, y: 100, opacity: 0 });
        gsap.set("#home-hero-bg", { transformOrigin: "center center", y: '50%', opacity: 0 });
        gsap.set("#home-hero-heading", { transformOrigin: "center center", x: '-200%' });
        gsap.set("#home-hero-paragraph", { transformOrigin: "center center", x: '-200%' });
        gsap.set("#home-hero-button", { transformOrigin: "center center", x: '-200%', opacity: 0 });
        gsap.set("#home-hero-bullets", { transformOrigin: "center center", x: '-200%', opacity: 0 });
        gsap.set(".link-animation", { transformOrigin: "center center", y: -100, opacity: .5 });

        const timeline = gsap.timeline({
            onComplete: () => {
                initMainAnimations();
            }
        });

        // Make the SVG visible before starting the animation
        timeline.set("#left-leaf, #middle-leaf, #right-leaf", { visibility: "visible" });

        // Start the animation after a short delay
        timeline
            .to("#left-leaf", { rotate: 0, x: 0, y: 0, opacity: 1, duration: 1, ease: "power2.out" })
            .to("#middle-leaf", { rotate: 0, x: 0, y: 0, opacity: 1, duration: 1.1, ease: "power2.out" }, "<")
            .to("#right-leaf", { rotate: 0, x: 0, y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }, "<")
            .delay(1)  // Pause after the leaves animation completes
            .to(loader, { y: '-100%', opacity: 0.5, duration: 0.8, ease: "power1.inOut" })
            .to("#left-leaf, #middle-leaf, #right-leaf", { opacity: 0, duration: 0.4, ease: "power1.inOut" }, "<")
            .to("#home-hero-bg", { y: '0%', opacity: 1, duration: 1, ease: "back.inOut" }, "<")
            .to(".link-animation", { y: 0, duration: 1.2, ease: "back.inOut", opacity: 1 }, "<")
            .to("#home-hero-heading", { x: '0%', duration: 0.3, ease: "sine.inOut", opacity: 1 })
            .to("#home-hero-paragraph", { x: '0%', duration: 0.4, ease: "sine.inOut", opacity: 1 }, "<")
            .to("#home-hero-button", { x: '0%', duration: 0.5, ease: "sine.inOut", opacity: 1 }, "<")
            .to("#home-hero-bullets", { x: '0%', duration: 0.5, ease: "sine.inOut", opacity: 1 }, "<");

        // Initialize main animations
        const initMainAnimations = () => {
            smoothScroolling();

            const textTyping = document.getElementById('text-typing-animation');

            if (textTyping) {
                // Start text typing animation
                startTextTypingAnimation(textTyping);
            }
        };
    }
};



// Function to handle text typing and erasing
const startTextTypingAnimation = (textRef) => {
    let currentIndex = 0;
    const typingSpeed = 0.15; // Speed of typing for each character (seconds per character)
    const erasingSpeed = 0.10; // Speed of erasing for each character

    const typeNextWord = () => {
        const currentWord = industryNames[currentIndex];
        gsap.to(textRef, {
            duration: currentWord.length * typingSpeed,
            text: currentWord,
            delay: .5,
            ease: "none",
            onComplete: () => {
                // Pause before erasing
                setTimeout(() => {
                    eraseWord(currentWord);
                }, 1000); // Hold the typed word for 1 second
            }
        });
    };

    const eraseWord = (word) => {
        const length = word.length;
        for (let i = 0; i <= length; i++) {
            gsap.to(textRef, {
                duration: erasingSpeed,
                text: word.substring(0, length - i), // Erase from the right side
                ease: "none",
                delay: i * erasingSpeed,
                onComplete: () => {
                    if (i === length) {
                        currentIndex = (currentIndex + 1) % industryNames.length;
                        typeNextWord(); // Move to the next word
                    }
                }
            });
        }
    };

    // Start typing the first word
    typeNextWord();
};