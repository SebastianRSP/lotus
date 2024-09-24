import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { HomeNavbar } from "../../navbar/home/HomeNavbar";
import { desktopNavbarAnimation } from "../../gsap-animations/DesktopNavbarAnimation";


export const NewHomePage = ({ children }) => {

    const pathname = usePathname();
    const containerRef = useRef();
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
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