'use client'

import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./components/fontawsome";
import Cursor from "./components/cursor/Index";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// GSAP Imports
import { initAnimations } from './components/gsap-animations/Index';
import { ScrollTrigger } from "gsap/all";
import { Loading } from "./components/loading/Index";
import { InvestorNavbar } from "./components/navbar/investor/InvestorNavbar";
import { Navbar } from "./components/navbar/Navbar";
import { InvestorFooter } from "./components/footer/investor/Index";
import { Footer } from "./components/footer/Index";
import { HomeNavbar } from "./components/navbar/home/HomeNavbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const containerRef = useRef();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('Loading')
      initAnimations();

      // Clean up ScrollTrigger instances on component unmount
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, [pathname]);

  const isInvestorsPage = pathname.startsWith("/investors");
  const homePage = pathname.startsWith("/home");

  return (
    <html lang="en">
      <body className={plusJakartaSans.variable}>
        {isInvestorsPage ? (
          <header>
            <InvestorNavbar />
          </header>
        ) : (
          <>
            {homePage ? (
              // <header>
              //   <HomeNavbar />
              // </header>
              <></>
            ) : (
              <header>
                <Navbar />
              </header>
            )}
          </>
        )}
        <div id="wrapper">
          <div id="smooth-content">
            <main ref={containerRef}>
              {children}
              <Cursor />
            </main>
            {isInvestorsPage ? (
              <footer className="bg-green">
                <InvestorFooter />
              </footer>
            ) : (
              <>
                {homePage ? (
                  <></>
                ) : (
                  <footer className="bg-gray-light">
                    <Footer />
                  </footer>
                )}
              </>
            )}
          </div>
        </div>
      </body>
    </html >
  );
}
