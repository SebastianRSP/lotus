import { usePathname } from "next/navigation";
import Cursor from "../cursor/Index"
import { Footer } from "../footer/Index"
import { Navbar } from "../navbar/Navbar"
import { useEffect, useRef } from "react";
import { initAnimations } from "../gsap-animations/Index";
import { ScrollTrigger } from "gsap/all";
import { desktopNavbarAnimation } from "../gsap-animations/DesktopNavbarAnimation";
import { Loading } from "../loading/Index";


export const OldHomePage = ({ children }) => {
    const pathname = usePathname();
    const containerRef = useRef();
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        desktopNavbarAnimation();
        initAnimations();
  
        // Clean up ScrollTrigger instances on component unmount
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }
    }, [pathname]);

    return (
        <>
            <header>
                <Navbar />
            </header>
            <div id="wrapper">
                <div id="smooth-content">
                    <main ref={containerRef}>
                        <Loading />
                        {children}
                    </main>
                    <Cursor />
                    <footer className="bg-gray-light">
                        <Footer />
                    </footer>
                </div>
            </div>
        </>
    )
}