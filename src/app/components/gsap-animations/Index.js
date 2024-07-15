import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const initAnimations = (container) => {
    // ScrollSmoother
    ScrollSmoother.create({
        wrapper: '#wrapper',
        content: '#smooth-content',
        smooth: 2,
        smoothTouch: 0.1,
        effects: true,
    });

    const fadeInSections = document.querySelectorAll('.fade-in-out');
    const bridgeHeading = document.querySelector('#bridge-heading');
    const bridgeDonut = document.querySelector('#bridge-donut');
    const bridgeDonutText = document.querySelector('#bridge-donut-text');

    // Function to apply styles
    const applyStyles = () => {
        gsap.to('body', {
            backgroundColor: 'black',
            color: '#FFFCEB',
            duration: 0.5,
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
    // ScrollTrigger.create({
    //     trigger: "#bridge",
    //     start: "top center",
    //     end: "bottom center", // Use bottom center to detect the end
    //     scrub: 1,
    //     markers: false,
    //     onEnter: applyStyles,
    //     onLeaveBack: revertStyles,
    //     onLeave: revertStyles,
    //     onEnterBack: applyStyles,
    // });

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

  // Hide the elements initially
gsap.set(bridgeHeading, { autoAlpha: 0 });
gsap.set(bridgeDonut, { autoAlpha: 0 });
gsap.set(bridgeDonutText, { autoAlpha: 0 });

// Create a timeline for the body and fade-in sections animations
const bridgeScrollTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#bridge",
        start: "top center+=100",
        end: "top+=250 center+=100",
        scrub: true, // Smooth transition
        markers: false,
    }
});

// Animate the body background and text color over the specified scroll positions
bridgeScrollTimeline.to('body', {
    backgroundColor: 'black',
    color: '#FFFCEB',
    duration: 0.5,
});

// Animate the fade-in sections background and text color over the specified scroll positions
fadeInSections.forEach((card) => {
    bridgeScrollTimeline.to(card, {
        backgroundColor: 'black',
        color: '#FFFCEB',
        duration: 0.5,
    }, "<"); // "<" makes the animation run concurrently with the previous one
});

// Create a timeline to show the bridge heading after the background transition
const headingTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#bridge",
        start: "top+=250 center+=100", // Adjust start point after the background transition
        end: "top+=300 center+=100",
        scrub: true, // Smooth transition
        markers: false,
    }
});

// Show the bridge heading with smooth fade-in effect
headingTimeline.to(bridgeHeading, {
    autoAlpha: 1,
    duration: 1,
    ease: "power2.inOut",
});

// ScrollTrigger to show the donut with smooth fade-in effect
ScrollTrigger.create({
    trigger: bridgeDonut,
    start: "top center+=100",
    end: "center center+=100",
    scrub: true,
    markers: false,
    onEnter: () => gsap.to(bridgeDonut, {
        autoAlpha: 1,
        duration: 1,
        ease: "power2.inOut"
    }),
    onLeaveBack: () => gsap.set(bridgeDonut, { autoAlpha: 0 })
});

// ScrollTrigger to show the bridge donut text with smooth fade-in effect
ScrollTrigger.create({
    trigger: bridgeDonutText,
    start: "top center+=100",
    end: "center center+=100",
    scrub: true,
    markers: false,
    onEnter: () => gsap.to(bridgeDonutText, {
        autoAlpha: 1,
        duration: 1,
        ease: "power2.inOut"
    }),
    onLeaveBack: () => gsap.set(bridgeDonutText, { autoAlpha: 0 })
});

// ScrollTrigger to revert the background to white
ScrollTrigger.create({
    trigger: "#bridge",
    start: "top+=250 center+=100", // End of the previous animations
    end: "bottom center+=100", // End of the bridge section
    scrub: true,
    markers: false,
    onLeave: () => {
        gsap.to('body', {
            backgroundColor: 'white',
            color: '#000000',
            duration: 0.5,
        });
        fadeInSections.forEach((card) => {
            gsap.to(card, {
                backgroundColor: 'white',
                color: '#000000',
                duration: 0.5,
            });
        });
    },
    onEnterBack: () => {
        gsap.to('body', {
            backgroundColor: 'black',
            color: '#FFFCEB',
            duration: 0.5,
        });
        fadeInSections.forEach((card) => {
            gsap.to(card, {
                backgroundColor: 'black',
                color: '#FFFCEB',
                duration: 0.5,
            });
        });
    }
});

// Ensure smooth scrolling and better user experience
gsap.registerPlugin(ScrollTrigger);

};
