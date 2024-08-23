'use client'

import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./components/fontawsome";
import { Footer } from "./components/footer/Index";
import { Navbar } from "./components/navbar/Navbar";
import Cursor from "./components/cursor/Index";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// GSAP Imports
import { initAnimations } from './components/gsap-animations/Index';
import { ScrollTrigger } from "gsap/all";
import { Loading } from "./components/loading/Index";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const containerRef = useRef();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      initAnimations();
  
      // Clean up ScrollTrigger instances on component unmount
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className={plusJakartaSans.variable}>
          <header>
            <Navbar />
          </header>
          <div id="wrapper">
            <Loading />
            <div id="smooth-content">
              <main ref={containerRef}>
                {children}
                <Cursor />
              </main>
              <footer className="bg-gray-light">
                <Footer />
              </footer>
            </div>
          </div>
      </body>
    </html>
  );
}
