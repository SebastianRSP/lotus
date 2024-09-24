'use client'

import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./components/fontawsome";
import { usePathname } from "next/navigation";
import { OldHomePage } from "./components/layout-wrapper/Index";
import { InvestorHomePage } from "./components/layout-wrapper/investor/Index";
import { NewHomePage } from "./components/layout-wrapper/home/Index";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isInvestorsPage = pathname.startsWith("/investors");
  const homePage = pathname.startsWith("/home");

  return (
    <html lang="en">
      <body className={plusJakartaSans.variable}>
        {isInvestorsPage ? (
          <InvestorHomePage >
            {children}
          </InvestorHomePage>
        ) : (
          <>
            {homePage ? (
              <NewHomePage >
                {children}
              </NewHomePage>
            ) : (
              <OldHomePage >
                {children}
              </OldHomePage>
            )}
          </>
        )}
      </body>
    </html >
  );
}
