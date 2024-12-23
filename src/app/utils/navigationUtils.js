'use client';

import { exitPageAnimation } from '../components/gsap-animations/home/Index2';
import { ScrollSmoother } from 'gsap/all';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin); // Register the ScrollTo plugin

export const handleRouteClick = (router, currentPath, navLink, sectionId) => {
    const smoother = ScrollSmoother.get();

    if (!smoother) {
        console.error("ScrollSmoother instance not found.");
        return;
    }

    // Function to handle smooth scrolling with custom duration and easing
    const scrollToSection = (target) => {
        const duration = 1.5; // Adjust duration to control the scroll speed (in seconds)
        const ease = "power2.out"; // Easing function for smooth scroll

        // Ensure target is a number or a DOM element
        if (typeof target === 'number') {
            // Use gsap to scroll to a specific position (e.g., 0 for top)
            gsap.to(window, {
                duration: duration,
                scrollTo: { y: target, autoKill: false }, // Scroll to the number (position)
                ease: ease
            });
        } else if (target instanceof HTMLElement) {
            // Use gsap to scroll to a DOM element
            gsap.to(window, {
                duration: duration,
                scrollTo: { y: target, autoKill: false }, // Scroll to the element
                ease: ease
            });
        }
    };

    if (currentPath === navLink) {
        // Same route: scroll to the section
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                scrollToSection(section); // Smooth scroll to the section
            }
        } else {
            // Scroll to top if no sectionId
            scrollToSection(0); // Smooth scroll to the top
        }
    } else {
        // Different route: animate and navigate
        exitPageAnimation(); // Exit page animation before navigation

        setTimeout(() => {
            router.push(navLink); // Route navigation
        }, 250); // Delay navigation slightly to allow exit animation

        setTimeout(() => {
            if (sectionId) {
                const section = document.getElementById(sectionId);
                if (section) {
                    scrollToSection(section); // Smooth scroll to the section after navigation
                }
            } else {
                scrollToSection(0); // Smooth scroll to the top after navigation
            }
        }, 4000); // Delay navigation slightly to allow exit animation
    }
};
