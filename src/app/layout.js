'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import './components/fontawsome';
import { usePathname } from 'next/navigation';
import { InvestorHomePage } from './components/layout-wrapper/investor/Index';
import { NewHomePage } from './components/layout-wrapper/home/Index';
import { AboutUsPage } from './components/layout-wrapper/about-us/Index';
import { ScrollToTop } from './components/ScrollToTop';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Determine the layout based on the current path
  const isInvestorsPage = pathname.startsWith('/investors');
  const isAboutUsPage = pathname.startsWith('/about-us');

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Your website description" />
        <title>Lotus Group of Companies</title>
      </head>
      <body className={plusJakartaSans.variable}>
        <ScrollToTop>
          {/* {isInvestorsPage ? (
            <InvestorHomePage>{children}</InvestorHomePage>
          ) : isAboutUsPage ? (
            <AboutUsPage>{children}</AboutUsPage>
          ) : (
            <NewHomePage>{children}</NewHomePage>
          )} */}
          <NewHomePage>{children}</NewHomePage>
        </ScrollToTop>
      </body>
    </html>
  );
}
