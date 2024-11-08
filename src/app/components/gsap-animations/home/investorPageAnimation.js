import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const investorPageAnimation = () => {
    const sendInvestor = document.getElementById('send-investor');

    if (sendInvestor) {
        startInvestorPageAnimation(sendInvestor)
    }
}

const startInvestorPageAnimation = (sendInvestor) => {
    console.log('Noman Here')

    ScrollTrigger.create({
        trigger: sendInvestor,
        start: "top top+=5%",
        end: `+=1500`, // Total scroll range
        scrub: true, // Smooth animation linked to scrolling
        pin: true,
        pinSpacing: true,
        markers: true,
    
    });
}