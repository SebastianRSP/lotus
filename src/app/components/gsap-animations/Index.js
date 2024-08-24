import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export const initAnimations = () => {

    // Text Fade-in
    const fadeInSections = document.querySelectorAll('.fade-in-out');
    // const loader = document.querySelector('.loader');

    // Loading Animation Play Once
    // const hasPlayed = sessionStorage.getItem("isLoaderPlayed");

    // console.log(hasPlayed, 'hasPlayed')

    // if (loader) {
    //     if (!hasPlayed) {
    //         sessionStorage.setItem('isLoaderPlayed', true);

    //         // Loading animation
    //         const notice = document.querySelector('.notice');
    //         const noticeWrapper = document.querySelector('.notice__wrapper');
    //         const animLinePercentage = notice.querySelector('.anim-line-percentage');

    //         // Create a GSAP timeline for loading animation
    //         const loadingTimeline = gsap.timeline({
    //             onComplete: () => {
    //                 gsap.delayedCall(3.8, () => {
    //                     initMainAnimations();
    //                 });
    //             }
    //         });

    //         // Loading progress animation
    //         loadingTimeline
    //             .to(notice, { '--horizontal': '0%', duration: 0.8, ease: 'power2.inOut' })
    //             .to(notice, { '--vertical': '0%', duration: 0.8, ease: 'power2.inOut' })
    //             .to(notice, { '--width': '100%', duration: 0.8, ease: 'power2.inOut' })
    //             .to(notice, { '--height': '100%', duration: 0.8, ease: 'power2.inOut' })
    //             .add(() => {
    //                 // Create a GSAP timeline for shadow effect
    //                 gsap.timeline()
    //                     .add(() => {
    //                         // Ensure the shadow class is added
    //                         noticeWrapper.classList.add('notice__wrapper-shadow');
    //                     })
    //                     .to(noticeWrapper, {
    //                         opacity: 1,
    //                         delay: 1, // Delay before starting the fade-in
    //                         duration: 0.8, // Duration for fade-in
    //                         ease: 'power2.inOut',
    //                         onStart: () => {
    //                             // Ensure that opacity changes are visible with the shadow effect
    //                             noticeWrapper.style.transition = 'opacity 0.8s ease-in-out, box-shadow 0.8s ease-in-out';
    //                         }
    //                     });
    //             })
    //             .add(() => {
    //                 notice.classList.add('is-visible');
    //             })
    //             .to(animLinePercentage, {
    //                 innerHTML: "100%",
    //                 delay: 2,
    //                 duration: 2,
    //                 onUpdate: function () {
    //                     animLinePercentage.innerHTML = `${Math.round(this.progress() * 100)}%`;
    //                 }
    //             })
    //             .to(noticeWrapper, {
    //                 opacity: 0,
    //                 delay: 0.5,
    //                 duration: 0.5, // Duration for fade out
    //                 ease: 'power2.inOut', // Smooth transition for fade-out
    //                 onComplete: () => {
    //                     // Remove the visibility class after fade-out completes
    //                     noticeWrapper.classList.remove('is-visible');
    //                     // Remove shadow effect after fade-out completes
    //                     noticeWrapper.classList.remove('notice__wrapper-shadow');
    //                 }
    //             })
    //             .add(() => {
    //                 // Wait for 1 second before starting the revert animation
    //                 gsap.delayedCall(0.5, () => {
    //                     // Revert to original styles, increasing vertical first and then horizontal
    //                     gsap.timeline()
    //                         .to(notice, { '--height': '0%', duration: 0.8, ease: 'power2.inOut' })
    //                         .to(notice, { '--width': '0%', duration: 0.8, ease: 'power2.inOut' })
    //                         .to(notice, { '--vertical': '48%', duration: 0.8, ease: 'power2.inOut' })
    //                         .to(notice, { '--horizontal': '50%', duration: 0.8, ease: 'power2.inOut' })
    //                         .add(() => {
    //                             // Hide the loader and show the main content with a delay of 1 second
    //                             gsap.delayedCall(0.5, () => {
    //                                 loader.classList.add('loader--no-bg');
    //                             });
    //                         });
    //                 });
    //             });
    //     } else {
    //         gsap.timeline({
    //             onComplete: () => {
    //                 gsap.delayedCall(0, () => {
    //                     loader.classList.add('loader--no-bg');
    //                     initMainAnimations();
    //                 });
    //             }
    //         })
    //     }

    // }else{
    //     console.log('No Loader')
    //     gsap.timeline({
    //         onComplete: () => {
    //             gsap.delayedCall(0, () => {
    //                 initMainAnimations();
    //             });
    //         }
    //     })
    // }




    // const initMainAnimations = () => {


    // }


    // ScrollSmoother
    ScrollSmoother.create({
        wrapper: '#wrapper',
        content: '#smooth-content',
        smooth: 0.3,
        smoothTouch: 0.1,
        effects: false,
    });


    ///////////////////////////////////////////////////////////
    ///////////////Navbar Desktop Animations Starts////////////
    ///////////////////////////////////////////////////////////

    // Ensure navRef exists before proceeding
    const navRef = document.querySelector('.desktop-nav');
    if (!navRef) return;

    let lastScrollY = 0;

    // ScrollTrigger to manage "is-scrolled" class
    ScrollTrigger.create({
        scroller: window,
        start: "top top+=100",
        end: "bottom top+=100",
        onUpdate: (self) => {
            const scrollY = self.scroll();
            // Handle "is-scrolled" class
            if (scrollY > 100) {
                navRef.classList.add('is-scrolled');
            } else {
                navRef.classList.remove('is-scrolled');
            }

            // Handle "is-not-active" class
            if (scrollY > 650) {
                if (scrollY > lastScrollY) {
                    // Scrolling down
                    navRef.classList.add('is-not-active');
                } else if (scrollY < lastScrollY) {
                    // Scrolling up
                    navRef.classList.remove('is-not-active');
                }
            } else {
                // Ensure the class is removed when scrolling above 450px
                navRef.classList.remove('is-not-active');
            }

            lastScrollY = scrollY;
        },
        markers: false,
        scrub: true,
    });

    ///////////////////////////////////////////////////////////
    ///////////////Navbar Desktop Animations Ends//////////////
    ///////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////
    ///////////////Text Animations Starts//////////////////////
    ///////////////////////////////////////////////////////////
    const animatedTexts = document.querySelectorAll('.text-animated');
    const bridgeTextAnimation = document.querySelectorAll('.bridge-text-animated');

    if (animatedTexts) {
        animatedTexts.forEach(animatedText => {

            ScrollTrigger.create({
                trigger: animatedText,
                start: "top-=50 center+=250", // End of the previous animations
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
    }

    if (bridgeTextAnimation) {
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
    }


    ///////////////////////////////////////////////////////////
    ///////////////Text Animations Ends////////////////////////
    ///////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////
    ///////////////Bridge Animations Starts////////////////////
    ///////////////////////////////////////////////////////////

    const bridgeElement = document.querySelector('#bridge');
    const bridgeHeading = document.querySelector('#bridge-heading');
    const bridgeDonut = document.querySelector('#bridge-donut');
    const bridgeDonutText = document.querySelector('#bridge-donut-text');

    if (bridgeElement) {

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
                onEnter: () => {
                    gsap.to('body', {
                        backgroundColor: 'black',
                        color: '#FFFCEB',
                        duration: 0.5,
                    });
                    fadeInSections.forEach((card) => {
                        bridgeScrollTimeline.to(card, {
                            backgroundColor: 'black',
                            color: '#FFFCEB',
                            duration: 0.5,
                        }, "<"); // "<" makes the animation run concurrently with the previous one
                    });
                },
                onEnterBack: () => {
                    gsap.to('body', {
                        backgroundColor: 'white',
                        color: 'black',
                        duration: 0.5,
                    });
                }
            }
        });

        // Animate the body background and text color over the specified scroll positions
        // bridgeScrollTimeline.to('body', {
        //     backgroundColor: 'black',
        //     color: '#FFFCEB',
        //     duration: 0.5,
        // });

        // Animate the fade-in sections background and text color over the specified scroll positions
        // fadeInSections.forEach((card) => {
        //     bridgeScrollTimeline.to(card, {
        //         backgroundColor: 'black',
        //         color: '#FFFCEB',
        //         duration: 0.5,
        //     }, "<"); // "<" makes the animation run concurrently with the previous one
        // });

        ScrollTrigger.create({
            trigger: bridgeElement,
            start: "top center", // Adjust start point after the background transition
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
            start: "top-=100 center-=100",
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
            start: "top-=100 center+=10",
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
            trigger: bridgeElement,
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
                        backgroundColor: 'white',
                        color: 'black',
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
    }

    ///////////////////////////////////////////////////////////
    ///////////////Bridge Animations End///////////////////////
    ///////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////
    ///////////////CaseStudy Animations Starts/////////////////
    ///////////////////////////////////////////////////////////

    const caseStudy = document.querySelector('#casestudy');
    const caseStudyText = document.querySelector('.case-heading');

    if (caseStudy) {


        // Hide the elements initially
        gsap.set(caseStudyText, { autoAlpha: 0 });

        // Create a timeline for the body and fade-in sections animations
        const caseStudyScrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: caseStudy,
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
            trigger: caseStudy,
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
    }



    ///////////////////////////////////////////////////////////
    ////////////CaseStudy Animations Ends//////////////////////
    ///////////////////////////////////////////////////////////

};
