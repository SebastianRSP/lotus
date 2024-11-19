'use client';

import { exitPageAnimation } from "../components/gsap-animations/home/Index2";

export const handleRouteClick = (router, currentPath, navLink) => {
    // Check if the clicked link is the same as the current path
    if (navLink === '#') {
        return;
    } else if (currentPath === navLink) {
        // Do not perform animation or route change if it's the same link
        return;
    } else {
        exitPageAnimation();

        setTimeout(() => {
            router.push(navLink); // Navigate to the route after delay
        }, 250);
    }
};
