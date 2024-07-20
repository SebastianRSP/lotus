import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export const initAnimations = (container) => {
    // ScrollSmoother
    ScrollSmoother.create({
        wrapper: '#wrapper',
        content: '#smooth-content',
        smooth: 2,
        smoothTouch: 0.1,
        effects: true,
    });

    
    ///////////////////////////////////////////////////////////
    ///////////////CaseStudy Animations Starts/////////////////
    ///////////////////////////////////////////////////////////

    const fadeInSections = document.querySelectorAll('.fade-in-out');
    const caseStudyText = document.querySelector('.case-heading');

    
    // Hide the elements initially
    gsap.set(caseStudyText, { autoAlpha: 0 });


    // Create a timeline for the body and fade-in sections animations
    const caseStudyScrollTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#casestudy",
            start: "top center+=250",
            end: "top+=300 center+=250",
            scrub: true, // Smooth transition
            markers: false,
        }
    });

    // Animate the body background and text color over the specified scroll positions
    caseStudyScrollTimeline.to('body', {
        backgroundColor: 'black',
        color: '#FFFCEB',
        duration: 0.5,
    });

    // Animate the fade-in sections background and text color over the specified scroll positions
    fadeInSections.forEach((card) => {
        caseStudyScrollTimeline.to(card, {
            backgroundColor: 'black',
            borderColor: '#00FF00',
            color: '#FFFCEB',
            duration: 0.5,
        }, "<"); // "<" makes the animation run concurrently with the previous one
    });

    ScrollTrigger.create({
        trigger: "#casestudy",
        start: "top+=400 center+=350", // Adjust start point after the background transition
        end: "top center",
        scrub: true, // Smooth transition
        markers: false,
        onEnter: () => gsap.to(caseStudyText, {
            autoAlpha: 1,
            duration: 1.5,
            ease: "power2.inOut"
        }),
        onLeaveBack: () => gsap.to(caseStudyText, { 
            autoAlpha: 0,
            duration: 1.5,
            ease: "power2.out"
        })
    });

    
    ///////////////////////////////////////////////////////////
    ////////////CaseStudy Animations Ends//////////////////////
    ///////////////////////////////////////////////////////////
    
    ///////////////////////////////////////////////////////////
    ///////////////Bridge Animations Starts////////////////////
    ///////////////////////////////////////////////////////////

    
    const bridgeHeading = document.querySelector('#bridge-heading');
    const bridgeDonut = document.querySelector('#bridge-donut');
    const bridgeDonutText = document.querySelector('#bridge-donut-text');

    
    gsap.set(bridgeHeading, { autoAlpha: 0 });
    gsap.set(bridgeDonut, { autoAlpha: 0 });
    gsap.set(bridgeDonutText, { autoAlpha: 0 });

    // Create a timeline for the body and fade-in sections animations
    const bridgeScrollTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#bridge",
            start: "top center+=100",
            end: "top+=300 center+=100",
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

    ScrollTrigger.create({
        trigger: "#bridge",
        start: "top+=400 center+=200", // Adjust start point after the background transition
        end: "top+=500 center+=100",
        scrub: true, // Smooth transition
        markers: false,
        onEnter: () => gsap.to(bridgeHeading, {
            autoAlpha: 1,
            duration: 1.5,
            ease: "power2.inOut"
        }),
        onLeaveBack: () => gsap.to(bridgeHeading, { 
            autoAlpha: 0,
            duration: 1.5,
            ease: "power2.out"
        })
    });

    // ScrollTrigger to show the donut with smooth fade-in effect
    ScrollTrigger.create({
        trigger: bridgeDonut,
        start: "top center-=100",
        end: "top center",
        scrub: true,
        markers: false,
        onEnter: () => gsap.to(bridgeDonut, {
            autoAlpha: 1,
            duration: 1,
            ease: "power2.inOut"
        }),
        onLeaveBack: () => gsap.to(bridgeDonut, { 
            autoAlpha: 0,
            duration: 1,
            ease: "power2.out"
        })
    });

    // ScrollTrigger to show the bridge donut text with smooth fade-in effect
    ScrollTrigger.create({
        trigger: bridgeDonutText,
        start: "top center+=10",
        end: "top center",
        scrub: true,
        markers: false,
        onEnter: () => gsap.to(bridgeDonutText, {
            autoAlpha: 1,
            duration: 1,
            ease: "power2.inOut"
        }),
        onLeaveBack: () => gsap.to(bridgeDonutText, { 
            autoAlpha: 0,
            duration: 1,
            ease: "power2.out"
        })
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
                color: 'black',
                duration: 0.5,
            });
            fadeInSections.forEach((card) => {
                gsap.to(card, {
                    backgroundColor: '',
                    color: '',
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
    
    ///////////////////////////////////////////////////////////
    ///////////////Bridge Animations End///////////////////////
    ///////////////////////////////////////////////////////////


    ///////////////////////////////////////////////////////////
    ///////////////Text Animations Starts//////////////////////
    //////////////////////////////////////////////////////////
    const animatedTexts = document.querySelectorAll('.text-animated');
    const bridgeTextAnimation = document.querySelectorAll('.bridge-text-animated');

    animatedTexts.forEach(animatedText => {

        ScrollTrigger.create({
            trigger: animatedText,
            start: "top center+=250", // End of the previous animations
            end: "top center", // End of the bridge section
            scrub: true,
            markers: false,
            onEnter: () => animatedText.classList.add('is-visible'),
        });

        // Check if the element is already processed
        if (!animatedText.classList.contains('processed')) {
            // Mark the element as processed
            animatedText.classList.add('processed');

            // Split text into lines and characters using SplitText
            const split = new SplitText(animatedText, {
                type: "lines,chars"
            });

            // Process each line
            split.lines.forEach(line => {
                line.classList.add('line-animation');
                line.style.display = 'block';
                line.style.position = 'relative';
            });

            // Append each character in the line to the lineWrapper
            split.chars.forEach(char => {
                char.classList.add('character-animation');
                char.style.position = 'relative';
                char.style.display = 'inline-block';
                char.style.transitionDelay = `${Math.random() * 1}s`; 
            });

            // Animate each character from 100px above, fading in
            gsap.from(split.chars, {
                stagger: 0.05
            });
        }
    });

    bridgeTextAnimation.forEach(animatedText => {

        ScrollTrigger.create({
            trigger: animatedText,
            start: "top+=350 center+=200", // End of the previous animations
            end: "top center", // End of the bridge section
            scrub: true,
            markers: false,
            onEnter: () => animatedText.classList.add('is-visible'),
        });

        // Check if the element is already processed
        if (!animatedText.classList.contains('processed')) {
            // Mark the element as processed
            animatedText.classList.add('processed');

            // Split text into lines and characters using SplitText
            const split = new SplitText(animatedText, {
                type: "lines,chars"
            });

            // Process each line
            split.lines.forEach(line => {
                line.classList.add('line-animation');
                line.style.display = 'block';
                line.style.position = 'relative';
            });

            // Append each character in the line to the lineWrapper
            split.chars.forEach(char => {
                char.classList.add('character-animation');
                char.style.position = 'relative';
                char.style.display = 'inline-block';
                char.style.transitionDelay = `${Math.random() * 1}s`; 
            });

            // Animate each character from 100px above, fading in
            gsap.from(split.chars, {
                stagger: 0.05
            });
        }
    });
    ///////////////////////////////////////////////////////////
    ///////////////Text Animations Ends////////////////////////
    ///////////////////////////////////////////////////////////

};
