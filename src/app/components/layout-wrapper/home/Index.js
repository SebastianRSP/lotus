import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { HomeNavbar } from "../../navbar/home/HomeNavbar";
import { desktopNavbarAnimation } from "../../gsap-animations/DesktopNavbarAnimation";
import { NewHomeLoading } from "../../loading/home/Index";
import { newHomePageAnimation } from "../../gsap-animations/home/Index2";
import { smoothScroolling } from "../../gsap-animations/smoothScroll";

export const NewHomePage = ({ children }) => {

    const pathname = usePathname();
    const containerRef = useRef();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            smoothScroolling();
            newHomePageAnimation();
            desktopNavbarAnimation();
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
            <NewHomeLoading />
            <div id="wrapper">
                <div id="smooth-content">
                    <main ref={containerRef}>
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}