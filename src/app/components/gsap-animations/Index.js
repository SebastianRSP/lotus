import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const initAnimations = (container) => {
    // ScrollSmoother
    ScrollSmoother.create({
        wrapper: '#wrapper',
        content: '#smooth-content',
        smooth: 2.5,
        smoothTouch: 0.3,
        effects: true,
    });

    // Bridge Animation
    gsap.to('#bridge', {
        scrollTrigger: {
            trigger: '#bridge',
            start: '-10% 0%',
            end: "+=500",
            scrub: 1,
            duration: 1
        },
        backgroundColor: 'black',
        duration: 0.1,
        color: '#FFFCEB',
    });

};
