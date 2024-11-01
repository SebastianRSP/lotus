import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { InvestorNavbar } from "../../navbar/investor/InvestorNavbar";
import { InvestorFooter } from "../../footer/investor/Index";
import Cursor from "../../cursor/Index";
import { initAnimations } from "../../gsap-animations/Index";
import { desktopNavbarAnimation } from "../../gsap-animations/DesktopNavbarAnimation";
import { HomeNavbar } from "../../navbar/home/HomeNavbar";
import { NewHomeLoading } from "../../loading/home/Index";
import { newHomePageAnimation } from "../../gsap-animations/home/Index";
import { AboutUsFooter } from "../../footer/about-us/Index";


export const InvestorHomePage = ({ children }) => {

    const pathname = usePathname();
    const containerRef = useRef();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            desktopNavbarAnimation();
            // initAnimations();
            newHomePageAnimation();

            // Clean up ScrollTrigger instances on component unmount
            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
    }, [pathname]);

    return (
        <>
            <header>
                {/* <InvestorNavbar /> */}
                <HomeNavbar />
            </header>
            <div id="wrapper">
                <div id="smooth-content">
                    <main ref={containerRef}>
                        <NewHomeLoading />
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}