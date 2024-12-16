import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const desktopNavbarAnimation = () => {

    // Ensure the code only runs in the client-side environment
    if (typeof window === 'undefined') {
        return; // Return early if not in the browser
    }

    // Ensure navRef exists before proceeding
    const navRef = document?.querySelector('.desktop-nav');

    if (!navRef) {
        return
    }

    let lastScrollY = 0;

    ScrollTrigger.create({
        scroller: window,
        start: "top top+=100",
        end: "bottom+=1500 top+=100",
        onUpdate: (self) => {
            const scrollY = self.scroll();
            // Handle "is-scrolled" class
            if (scrollY > 20) {
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
};
