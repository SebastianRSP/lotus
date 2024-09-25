import gsap from 'gsap';
import { ScrollSmoother } from "gsap/all";
gsap.registerPlugin(ScrollSmoother);

export const smoothScroolling = () => {
    // ScrollSmoother
    ScrollSmoother.create({
        wrapper: '#wrapper',
        content: '#smooth-content',
        smooth: 0.5,
        smoothTouch: 0.1,
        effects: false,
    });
}