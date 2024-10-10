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
        gsap.set("#left-leaf", { transformOrigin: "center center", x: 20, y: 50, });
        gsap.set("#middle-leaf", { transformOrigin: "center center", rotate: -100, x: -20, y: 50, });
        gsap.set("#right-leaf", { transformOrigin: "center center", rotate: -100, x: -40, y: 50, });
        gsap.set("#home-hero-bg", { transformOrigin: "center center", y: '50%', opacity: 0 });
        // x: '-200%', if we mode the hero text and buttom from right to left as per the XD file
        gsap.set("#home-hero-heading", { transformOrigin: "center center", opacity: 0 });
        gsap.set("#home-hero-paragraph", { transformOrigin: "center center", opacity: 0 });
        gsap.set("#home-hero-button", { transformOrigin: "center center", opacity: 0 });
        gsap.set("#home-hero-bullets", { transformOrigin: "center center", opacity: 0 });
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
            .to("#home-hero-heading", { duration: 0.9, ease: "sine.inOut", opacity: 1 })
            .to("#home-hero-paragraph", { duration: 0.9, ease: "sine.inOut", opacity: 1 }, "<")
            .to("#home-hero-button", { duration: 0.9, ease: "sine.inOut", opacity: 1 }, "<")
            .to("#home-hero-bullets", { duration: 0.9, ease: "sine.inOut", opacity: 1 }, "<");

        // Initialize main animations
        const initMainAnimations = () => {
            smoothScroolling();

            const textTyping = document.getElementById('text-typing-animation');
            if (textTyping) {
                // Start text typing animation
                startTextTypingAnimation(textTyping);
            }

            const bridgeSection = document.getElementById('bridge');

            if (bridgeSection) {
                startBridgeAnimation(bridgeSection)
            }

            initCounterAnimation();
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

// Flag to track if the animation has run
let hasAnimated = false;

// Function to run counter animation
const initCounterAnimation = () => {
    const counterContainer = document.querySelector('.counter-container');

    // Create a ScrollTrigger for the counterContainer
    ScrollTrigger.create({
        trigger: counterContainer,
        start: "top 80%",
        onEnter: function () {
            // Check if the animation has already run
            if (!hasAnimated) {
                hasAnimated = true; // Set the flag to true so it doesn't run again
                gsap.utils.toArray('.counter').forEach(function (el) {
                    const target = { val: 0 };
                    const endValue = parseFloat(el.getAttribute('data-number')); // Get the target number

                    gsap.to(target, {
                        val: endValue,
                        ease: 'power1.out', // Apply ease-out animation
                        duration: 3,
                        onUpdate: function () {
                            // Check if the end value has a decimal
                            if (endValue % 1 !== 0) {
                                el.innerText = target.val.toFixed(1); // Show one decimal place for decimals
                            } else {
                                el.innerText = Math.floor(target.val); // Show as integer if no decimal
                            }
                        }
                    });
                });
            }
        },
        toggleActions: 'play none none none'
    });
};

const startBridgeAnimation = (bridgeSection) => {
    const bridgeBlackInitial = document.querySelector('.bridge-initial');
    const bridgeInsideBlackBox = document.querySelector('.inside-black-box');

    // Initial state: Slightly Bend inside
    gsap.set(bridgeBlackInitial, {
        scaleY: 0.98,
        scaleX: 0.95,
    });
    // Initial state: Bridge Inside Black Box width is 100%
    gsap.set(bridgeInsideBlackBox, {
        width: '100%',
    });

    // Initialize the animation with ScrollTrigger
    const bridgeSectionTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: bridgeSection,
            start: "top bottom",
            end: "top top",
            scrub: true,
            markers: false
        }
    });

    // Bridge Section Animation
    bridgeSectionTimeline.to(bridgeBlackInitial, {
        scaleY: 1,
        scaleX: 1,
        ease: "power1.out",
        duration: 1
    });

    // Trigger width and padding reduction when section hits the top
    ScrollTrigger.create({
        trigger: bridgeSection,
        start: "top top",
        onEnter: () => {
            // Timeline for entering animation
            const enterTimeline = gsap.timeline();

            // First, animate the bridge inside box and padding
            enterTimeline.to(bridgeInsideBlackBox, {
                width: '45.7%',
                ease: "power2.out",
                duration: 0.8
            }).to(bridgeBlackInitial, {
                padding: '0px',
                ease: "power2.out",
                duration: 0.8
            }, 0);  // This ensures both animations happen at the same time.

            // After the bridge box animations complete, animate the grid lines
            enterTimeline.add(() => animateGridLines());
        },
        onLeaveBack: () => {
            // Timeline for leaving animation
            const leaveTimeline = gsap.timeline();

            // First, reset the grid lines (hide them)
            leaveTimeline.add(() => resetGridLines());
            // After grid lines are hidden, animate the bridge box and padding
            leaveTimeline.to(bridgeInsideBlackBox, {
                width: '100%',
                ease: "power2.out",
                delay: 1,
                duration: 0.8
            }).to(bridgeBlackInitial, {
                paddingLeft: '160px',
                paddingRight: '160px',
                paddingTop: '160px',
                ease: "power2.out",
                delay: 1,
                duration: 0.8
            }, 0); // This ensures both animations happen at the same time.
        }
    });
};


// Function to animate grid lines
function animateGridLines() {
    const gridLinesConfig = [
        { selector: '#back-grid #RIGHT_GRID line', initial: { opacity: 0, attr: { x2: 878.03 } }, final: { opacity: 1, attr: { x2: 439.26 } } },
        { selector: '#back-grid #LEFT_GRID line', initial: { opacity: 0, attr: { x1: 0 } }, final: { opacity: 1, attr: { x1: 439.26 } } },
        { selector: '#back-grid #TOP_GRID line', initial: { opacity: 0, attr: { y1: 0 } }, final: { opacity: 1, attr: { y1: 289.83 } } },
        { selector: '#back-grid #BOTTOM_GRID line', initial: { opacity: 0, attr: { y1: 583.31 } }, final: { opacity: 1, attr: { y1: 289.83 } } }
    ];

    gridLinesConfig.forEach(({ selector, initial, final }) => {
        const lines = document.querySelectorAll(selector);
        lines.forEach(line => {
            gsap.fromTo(line, initial, { ...final, ease: "power2.out", duration: 1 });
        });
    });
}

// Function to reset grid lines to their initial state
function resetGridLines() {
    const gridLinesConfig = [
        { selector: '#back-grid #RIGHT_GRID line', initial: { opacity: 1, attr: { x2: 439.26 } }, final: { opacity: 0, attr: { x2: 878.03 } } },
        { selector: '#back-grid #LEFT_GRID line', initial: { opacity: 1, attr: { x1: 439.26 } }, final: { opacity: 0, attr: { x1: 0 } } },
        { selector: '#back-grid #TOP_GRID line', initial: { opacity: 1, attr: { y1: 289.83 } }, final: { opacity: 0, attr: { y1: 0 } } },
        { selector: '#back-grid #BOTTOM_GRID line', initial: { opacity: 1, attr: { y1: 289.83 } }, final: { opacity: 0, attr: { y1: 583.31 } } }
    ];

    gridLinesConfig.forEach(({ selector, initial, final }) => {
        const lines = document.querySelectorAll(selector);
        lines.forEach(line => {
            gsap.fromTo(line, initial, { ...final, ease: "power2.out", duration: 1 });
        });
    });
}





