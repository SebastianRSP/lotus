import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { desktopNavbarAnimation } from "../../gsap-animations/DesktopNavbarAnimation";
import { HomeNavbar } from "../../navbar/home/HomeNavbar";
import { NewHomeLoading } from "../../loading/home/Index";
import { newHomePageAnimation } from "../../gsap-animations/home/Index";
import { smoothScroolling } from "../../gsap-animations/smoothScroll";


export const InvestorHomePage = ({ children }) => {

    const pathname = usePathname();
    const containerRef = useRef();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            newHomePageAnimation();
            desktopNavbarAnimation();
            smoothScroolling();

            // Clean up ScrollTrigger instances on component unmount
            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
    }, [pathname]);

    return (
        <>
            <header>
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