import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const initAnimations = (container) => {
    // ScrollSmoother
    ScrollSmoother.create({
        wrapper: '#wrapper',
        content: '#smooth-content',
        smooth: 1,
        smoothTouch: 0.1,
        effects: true,
    });

    const fadeInSections = document.querySelectorAll('.fade-in-out');

    // Function to apply styles
    const applyStyles = () => {
        gsap.to('body', {
            backgroundColor: 'black',
            color: '#FFFCEB',
            duration: 0.5
        });
        fadeInSections.forEach((card) => {
            gsap.to(card, {
                backgroundColor: 'black',
                color: '#FFFCEB',
                duration: 0.5
            });
        });
    };

    // Function to revert styles
    const revertStyles = () => {
        gsap.to('body', {
            backgroundColor: '',
            color: '',
            duration: 0.5
        });
        fadeInSections.forEach((card) => {
            gsap.to(card, {
                backgroundColor: '',
                color: '',
                duration: 0.5
            });
        });
    };

    // ScrollTrigger setup For Bridge
    ScrollTrigger.create({
        trigger: "#bridge",
        start: "top center",
        end: "bottom center", // Use bottom center to detect the end
        scrub: 1,
        markers: false,
        onEnter: applyStyles,
        onLeaveBack: revertStyles,
        onLeave: revertStyles,
        onEnterBack: applyStyles,
    });

    // ScrollTrigger setup For CaseStudies
    ScrollTrigger.create({
        trigger: "#casestudy",
        start: "top center",
        end: "bottom center", // Use bottom center to detect the end
        scrub: 1,
        markers: false,
        onEnter: applyStyles,
        onLeaveBack: revertStyles,
        onLeave: revertStyles,
        onEnterBack: applyStyles,
    });

};
