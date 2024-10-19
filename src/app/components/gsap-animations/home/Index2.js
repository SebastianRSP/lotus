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
        gsap.set(loader, { width: '100vw', height: '100vh' })
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
    const bridgeInsideBlackBox = document.querySelector('.inside-black-box');
    const verticalBlackLayers = document.querySelectorAll('.conver-object-vertical');
    const horizentalBlackLayers = document.querySelectorAll('.conver-object-horizontal');
    const bridgeBgBlur = document.querySelector('.bridge-bg-blur');
    const bridgeHeroText = document.querySelectorAll('.bridge-text-split');
    const bridgeHeroH2 = document.querySelectorAll('.bridge-hero-text');
    const bridgeTM = document.querySelectorAll('.bridge-tm');
    let hasAnimated = false; // Tracks if Text animation Shows
    let hasColored = false; // Tracks if the Text Color Changes
    let hasBridgeTM = false; // Tracks if the BridgeTM logo Shows 
    let hasBridgeDown = false; // Tracks if the BridgeTM logo Shows 


    const gridLinesConfig = [
        { selector: '#back-grid #RIGHT_GRID line', from: { opacity: 0, attr: { x2: 878.03 } }, to: { opacity: 1, attr: { x2: 439.26 } } },
        { selector: '#back-grid #LEFT_GRID line', from: { opacity: 0, attr: { x1: 0 } }, to: { opacity: 1, attr: { x1: 439.26 } } },
        { selector: '#back-grid #TOP_GRID line', from: { opacity: 0, attr: { y1: 0 } }, to: { opacity: 1, attr: { y1: 289.83 } } },
        { selector: '#back-grid #BOTTOM_GRID line', from: { opacity: 0, attr: { y1: 583.31 } }, to: { opacity: 1, attr: { y1: 289.83 } } }
    ];

    // Initial state: Bridge Inside Black Box width is 100%
    gsap.set(bridgeInsideBlackBox, {
        width: '90%',
    });

    // Initial state: Slightly Bend inside
    verticalBlackLayers.forEach((layer) => {
        gsap.set(layer, {
            scaleY: .98,
            scaleX: 1.3,
        });
    });
    // Initial state: Bridge Background hidden initially we will show this after the back grid liens comes out
    gsap.set(bridgeBgBlur, {
        opacity: 0
    });

    gsap.set(bridgeTM, {
        y: 0,
        x: -50,
    });

    // Set initial states for the grid lines
    gridLinesConfig.forEach(({ selector, from }) => {
        const lines = document.querySelectorAll(selector);
        lines.forEach(line => {
            gsap.set(line, from);  // Set each line's initial attributes using 'attr'
        });
    });

    // Set initial opacity for each character to 1
    if (bridgeHeroText) {
        bridgeHeroText.forEach(bridgeText => {
            if (!bridgeText.classList.contains('processed')) {
                // Mark the element as processed
                bridgeText.classList.add('processed');

                // Create a SplitText instance for the current bridgeText
                const splitText = new SplitText(bridgeText, { type: "lines,chars" });

                // Process each line
                splitText.lines.forEach(line => {
                    line.classList.add('single-line');
                    line.style.display = 'block';
                    line.style.position = 'relative';

                    // Create the inner div with class 'single-line-inner'
                    const innerDiv = document.createElement('div');
                    innerDiv.classList.add('single-line-inner');

                    // Apply the default transform property to the inner div
                    innerDiv.style.transform = 'translate(0%, 110%) rotate(0.00115deg)';

                    // Set initial styles for characters and move them into the inner div
                    line.childNodes.forEach(char => {
                        // Set styles for the character
                        gsap.set(char, {
                            position: 'relative',
                            display: 'inline-block',
                            color: 'rgb(118, 114, 112)'
                        });

                        // Append the character to the innerDiv
                        innerDiv.appendChild(char.cloneNode(true)); // Clone and append to innerDiv
                    });

                    // Clear the original content of the line
                    line.innerHTML = ''; // Clear the original content
                    line.appendChild(innerDiv); // Append the new inner div to the line
                });
            }
        });
    }



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
    bridgeSectionTimeline.to(verticalBlackLayers, {
        scaleY: 1,
        scaleX: 1,
        ease: "power1.out",
        duration: 1
    });

    ScrollTrigger.create({
        trigger: bridgeSection,
        start: "top top",
        end: `+=1500`, // Total scroll range
        scrub: true, // Smooth animation linked to scrolling
        pin: true,
        pinSpacing: true,
        markers: true,
        onUpdate: (self) => {
            gsap.set(bridgeHeroText, { autoAlpha: 1 });
            // gsap.set(bridgeTM, { autoAlpha: 1 });
            // Calculate translateY based on scroll incrementally
            let translateY = self.scroll() - self.start;

            // Bound the translateY value to prevent overshooting
            translateY = gsap.utils.clamp(0, 1500, translateY); // Adjust 500 to your max translateY value if necessary

            // Apply the dynamic translateY value based on the scroll
            gsap.set(bridgeSection, {
                translateY: `${translateY}px`,
            });

            // Calculate progress for width animation
            const widthProgress = Math.min(self.progress / 0.2, 1); // Cap progress at 1
            let newWidth = gsap.utils.interpolate(90, 45.7, widthProgress); // Interpolating width

            // Apply the dynamic width to bridgeInsideBlackBox
            gsap.set(bridgeInsideBlackBox, {
                width: `${newWidth}%`,  // Scale width from 90% to 45.7%
            });

            // Animate grid lines only after width animation is complete
            if (self.progress >= 0.2) {
                const gridProgress = gsap.utils.normalize(0.2, .5, self.progress);

                gridBackAnimation(gridLinesConfig, gridProgress);
            }

            if (self.progress >= 0.025) {
                const coverObjectProgress = gsap.utils.normalize(0.025, 0.5, self.progress);

                // Calculate initial width and height in pixels
                const viewportWidth = window.innerWidth;
                const initialSize = (8.3333 * 0.8333 * viewportWidth) / 100; // Calculate in pixels (convert from vw to px)

                // Gradually reduce width of vertical black layers
                verticalBlackLayers.forEach((layer) => {
                    const newWidth = gsap.utils.interpolate(initialSize, 0, coverObjectProgress); // Interpolate from initial width to 0 based on progress
                    gsap.set(layer, {
                        width: `${newWidth}px`, // Set the new width based on scroll progress
                    });
                });

                // Gradually reduce height of horizontal black layers
                horizentalBlackLayers.forEach((layer) => {
                    const newHeight = gsap.utils.interpolate(initialSize, 0, coverObjectProgress); // Interpolate from initial height to 0 based on progress
                    gsap.set(layer, {
                        height: `${newHeight}px`, // Set the new height based on scroll progress
                    });
                });
            }

            if (self.progress >= 0.2) {
                const colorChangeProgress = gsap.utils.normalize(0.2, .5, self.progress); // Normalize progress between 0.8 and 1

                // Initial RGB color (rgb(106,189,69))
                const initialColor = { r: 106, g: 189, b: 69 };
                // Target RGB color (rgb(242,245,242))
                const targetColor = { r: 242, g: 245, b: 242 };

                // Interpolate each RGB component
                const currentR = gsap.utils.interpolate(initialColor.r, targetColor.r, colorChangeProgress);
                const currentG = gsap.utils.interpolate(initialColor.g, targetColor.g, colorChangeProgress);
                const currentB = gsap.utils.interpolate(initialColor.b, targetColor.b, colorChangeProgress);

                // Create the final interpolated RGB color
                const currentColor = `rgb(${currentR}, ${currentG}, ${currentB})`;

                // Apply the stroke color based on scroll progress
                gsap.set('.cls-1, .cls-2, .cls-3', {
                    stroke: currentColor,
                });
                gsap.set('.inside-black-box', {
                    border: `solid .75px ${currentColor}`,
                });
                // gsap.set(bridgeBgBlur, {
                //     opacity: gsap.utils.interpolate(0, .7, colorChangeProgress),
                // })

            } else {
                // Reset to the original color when progress is less than 0.8
                const colorChangeProgress = gsap.utils.normalize(0, 0.2, self.progress);

                // Interpolate back to the original color
                const currentR = gsap.utils.interpolate(242, 106, colorChangeProgress);
                const currentG = gsap.utils.interpolate(245, 189, colorChangeProgress);
                const currentB = gsap.utils.interpolate(242, 69, colorChangeProgress);

                const currentColor = `rgb(${currentR}, ${currentG}, ${currentB})`;

                gsap.set('.cls-1, .cls-2, .cls-3', {
                    stroke: currentColor,
                });
                gsap.set('.inside-black-box', {
                    border: `solid .75px ${currentColor}`,
                });
                // gsap.set(bridgeBgBlur, {
                //     opacity: gsap.utils.interpolate(.7, 0, colorChangeProgress),
                // })
            }

            // Inside your ScrollTrigger callback
            if (self.progress >= 0.5) {
                hasColored = true; // Set flag to true to indicate color change has started

                bridgeHeroText.forEach((bridgeText) => {
                    const processedLines = bridgeText.querySelectorAll('.single-line-inner'); // Target the processed inner divs

                    // Collect all characters for the animation
                    const chars = [];
                    processedLines.forEach(line => {
                        chars.push(...line.children); // Push each character into the array
                    });

                    // Calculate normalized progress using gsap.utils.normalize
                    const normalizedProgress = gsap.utils.normalize(0.5, 0.85, self.progress); // Normalize between 0 and 1 based on defined range

                    // Calculate the dynamic RGB values based on normalized progress
                    const startColor = { r: 118, g: 114, b: 112 }; // Original color
                    const endColor = { r: 255, g: 255, b: 255 }; // Target color

                    // Interpolate each RGB component based on scroll progress
                    const currentR = gsap.utils.interpolate(startColor.r, endColor.r, normalizedProgress);
                    const currentG = gsap.utils.interpolate(startColor.g, endColor.g, normalizedProgress);
                    const currentB = gsap.utils.interpolate(startColor.b, endColor.b, normalizedProgress);

                    // Create the final interpolated RGB color
                    const currentColor = `rgb(${currentR}, ${currentG}, ${currentB})`;

                    // Update color based on scroll position; no automatic effect
                    chars.forEach((char, index) => {
                        const charProgress = index / chars.length; // Character progress based on index
                        if (normalizedProgress >= charProgress) {
                            gsap.set(char, {
                                color: 'rgb(255,255,255)',
                            });
                        }
                    });
                });
            }
            // Reverse color animation when scrolling back up
            if (self.progress <= 0.85 && hasColored) {
                hasColored = false; // Reset flag to false, ready to reverse animation
                bridgeHeroText.forEach((bridgeText) => {
                    const processedLines = bridgeText.querySelectorAll('.single-line-inner'); // Target the processed inner divs

                    // Collect all characters for the animation
                    const chars = [];
                    processedLines.forEach(line => {
                        chars.push(...line.children); // Push each character into the array
                    });

                    // Calculate normalized progress for reversing color
                    const normalizedProgress = gsap.utils.normalize(0.85, 0.48, self.progress); // Normalize for reverse transition from .75 to .55

                    // Animate reverse color from the last character to the first
                    chars.reverse().forEach((char, index) => {
                        const charProgress = index / chars.length; // Recalculate progress for reversed characters
                        if (normalizedProgress >= charProgress) {
                            gsap.set(char, {
                                color: 'rgb(118,114,112)', // Transform back to original color progressively
                            });
                        }
                    });
                });
            }

            // Check if progress is beyond 0.6 and has not yet animated
            if (self.progress >= 0.53 && !hasAnimated) {
                hasAnimated = true; // Set flag to true, animation starts
                bridgeHeroText.forEach((bridgeText) => {
                    const processedLines = bridgeText.querySelectorAll('.single-line-inner'); // Target the processed inner divs

                    // Animate the transform for each line with a slight delay
                    gsap.to(processedLines, {
                        duration: 0.9, // Duration for each line's animation
                        y: "0%", // Translate to original position (remove the translation)
                        ease: "power1.out",
                        stagger: 0.25, // Delay between each line
                    });
                });
            }

            // Revert the animation when scrolling back up before progress reaches 0.6
            if (self.progress < 0.53 && hasAnimated) {
                hasAnimated = false; // Reset flag to false, ready to reverse animation
                bridgeHeroText.forEach((bridgeText) => {
                    const processedLines = bridgeText.querySelectorAll('.single-line-inner'); // Target the processed inner divs

                    // Reverse the animation
                    gsap.to(processedLines, {
                        duration: 0.9, // Duration for each line's animation
                        y: "110%", // Move back to the initial off-screen position
                        ease: "power1.out",
                        stagger: -0.15, // Delay between each line
                    });
                });
            }

            if (self.progress >= 0.89) {
                gsap.to(bridgeHeroH2, {
                    x: '-2%', // Slightly move left
                    y: '-5%', // Slightly move up
                    scale: 0.95, // Scale down slightly to simulate moving backward
                    duration: 0.5,
                    ease: "power2.out",
                });
                bridgeHeroText.forEach((bridgeText) => {
                    const processedLines = bridgeText.querySelectorAll('.single-line-inner'); // Target the processed inner divs

                    // Collect all characters for the animation
                    const chars = [];
                    processedLines.forEach(line => {
                        chars.push(...line.children); // Push each character into the array
                    });

                    gsap.set(chars, {
                        color: 'rgb(118,114,112)', // Transform back to original color progressively
                    });
                })
            }

            if (self.progress < 0.89) {
                gsap.to(bridgeHeroH2, {
                    x: '2%', // Slightly move left
                    y: '5%', // Slightly move up
                    scale: 1, // Scale down slightly to simulate moving backward
                    duration: 0.5,
                    ease: "power2.out",
                });
            }


            if (self.progress >= 0.89 && !hasBridgeTM) {
                hasBridgeTM = true;
                gsap.fromTo(bridgeTM,
                    {
                        x: -50, // Starting position (left)
                        opacity: 0, // Start with opacity 0 (invisible)
                    },
                    {
                        x: 50, // End position (right)
                        opacity: 1, // End with opacity 1 (fully visible)
                        ease: "power2.out", // Smooth easing
                    }
                );
            }

            if (self.progress < 0.89 && hasBridgeTM) {
                hasBridgeTM = false;
                gsap.fromTo(bridgeTM,
                    {
                        x: 50, // Starting position (right)
                        opacity: 1, // Start with opacity 1 (fully visible)
                    },
                    {
                        x: -50, // End position (left)
                        opacity: 0, // End with opacity 0 (invisible)
                        ease: "power2.out", // Smooth easing
                    }
                );
            }

            if (self.progress >= 0.99 && !hasBridgeDown) {
                hasBridgeDown = true; // Set the flag to indicate the animation has moved down
                gsap.fromTo(bridgeTM,
                    {
                        y: 0, // Starting position (initial state)
                        duration: 0.4,
                        ease: "power2.out", // Smooth easing
                    },
                    {
                        y: 150, // Move down by 150px
                        duration: 0.4,
                        ease: "power2.out", // Smooth easing
                    }
                );
            }

            // When progress < 0.95, reverse the animation (move back up)
            if (self.progress < 0.99 && hasBridgeDown) {
                hasBridgeDown = false; // Reset the flag to allow reverse animation
                gsap.fromTo(bridgeTM,
                    {
                        y: 150, // Start at the downward position
                        duration: 0.4,
                        ease: "power2.out", // Smooth easing
                    },
                    {
                        y: 0, // Move back to the original position
                        duration: 0.4,
                        ease: "power2.out", // Smooth easing
                    }
                );
            }

        },
    });
};

function gridBackAnimation(gridLinesConfig, self) {
    // Animate the grid lines based on the scroll progress
    gridLinesConfig.forEach(({ selector, from, to }) => {
        const lines = document.querySelectorAll(selector);
        lines.forEach(line => {
            // Only interpolate attributes that exist in the configuration
            let newAttrs = {};

            if (from.attr.x1 !== undefined && to.attr.x1 !== undefined) {
                newAttrs.x1 = gsap.utils.interpolate(from.attr.x1, to.attr.x1, self);
            }
            if (from.attr.x2 !== undefined && to.attr.x2 !== undefined) {
                newAttrs.x2 = gsap.utils.interpolate(from.attr.x2, to.attr.x2, self);
            }
            if (from.attr.y1 !== undefined && to.attr.y1 !== undefined) {
                newAttrs.y1 = gsap.utils.interpolate(from.attr.y1, to.attr.y1, self);
            }
            if (from.attr.y2 !== undefined && to.attr.y2 !== undefined) {
                newAttrs.y2 = gsap.utils.interpolate(from.attr.y2, to.attr.y2, self);
            }

            // Interpolate opacity
            let newOpacity = gsap.utils.interpolate(from.opacity, to.opacity, self);

            // Apply the dynamic values based on scroll using GSAP's 'attr' for SVG properties
            gsap.set(line, {
                opacity: newOpacity,
                attr: newAttrs,
            });
        });
    });
}

// Function to interpolate color
const interpolateColor = (progress) => {
    const startColor = { r: 118, g: 114, b: 112 }; // Original color
    const endColor = { r: 255, g: 255, b: 255 }; // Target color

    const r = gsap.utils.interpolate(startColor.r, endColor.r, progress);
    const g = gsap.utils.interpolate(startColor.g, endColor.g, progress);
    const b = gsap.utils.interpolate(startColor.b, endColor.b, progress);

    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
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

// Function to start Text Animation
function startTextAnimation(bridgeHeroText) {
    const timeline = gsap.timeline();

    // Initial fade-in effect for the entire text
    timeline.to(bridgeHeroText, {
        autoAlpha: 1,
        x: 20
    });

    // Iterate over spans and change the opacity of each character from right to left
    bridgeHeroText.forEach((span) => {
        const chars = span.childNodes; // Get the inner characters (text nodes)

        // Animate each character to change opacity from right to left
        for (let i = chars.length - 1; i >= 0; i--) {
            const innerChars = Array.from(chars[i].childNodes).reverse();
            innerChars.forEach((char, index) => {
                // Create the animation
                timeline.to(char, {
                    autoAlpha: 0.24, // Change opacity
                    ease: "power1.out",
                    duration: index * 0.025,
                    stagger: {
                        from: 'end'
                    }
                }, index * 0.025); // Stagger for a wave effect
            })
        }
    })

    // Initialize the animation with ScrollTrigger

    ScrollTrigger.create({
        trigger: bridgeHeroText,
        start: "top 20%",
        end: '+=3000',
        markers: true,
        scrub: true,
        onEnter: (() => {
            gsap.to(bridgeHeroText, {
                // position: 'sticky',
                // top: '20%'
            })
        })
    });

}

// Function to revert Text Animation
function revertTextAnimation(bridgeHeroText) {
    const timeline = gsap.timeline();

    // Iterate over spans and change the opacity of each character from right to left
    bridgeHeroText.forEach((span) => {
        const chars = span.childNodes; // Get the inner characters (text nodes)

        // Animate each character to change opacity from right to left
        for (let i = chars.length - 1; i >= 0; i--) {
            const innerChars = chars[i].childNodes;
            innerChars.forEach((char, index) => {
                // Create the animation
                timeline.to(char, {
                    autoAlpha: 1, // Change opacity
                    ease: "power1.out",
                    duration: index * 0.0083,
                    stagger: {
                        from: 'end'
                    }
                }, index * 0.0083); // Stagger for a wave effect
            })
        }
    });

    // Initial fade-in effect for the entire text
    timeline.to(bridgeHeroText, {
        autoAlpha: 0,
        duration: 0.15,
        x: -20
    });
}




