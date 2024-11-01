'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import './components/fontawsome';
import { usePathname } from 'next/navigation';
import { InvestorHomePage } from './components/layout-wrapper/investor/Index';
import { NewHomePage } from './components/layout-wrapper/home/Index';
import Head from 'next/head';
import { AboutUsPage } from './components/layout-wrapper/about-us/Index';
import { useEffect } from 'react';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Determine the layout based on the current path
  const isInvestorsPage = pathname.startsWith('/investors');
  const isAboutUsPage = pathname.startsWith('/about-us');

  // Scroll to top when the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <html lang="en">
      <Head>
        {/* Add meta tags globally */}
        <meta name="viewport" content="width=device-width, initial-scale=00" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Your website description" />
        <title>Your Website Title</title>
        {/* Add other meta tags as needed */}
      </Head>
      <body className={plusJakartaSans.variable}>
        {/* Conditional rendering of layouts */}
        {isInvestorsPage ? (
          <InvestorHomePage>{children}</InvestorHomePage>
        ) : isAboutUsPage ? (
          <AboutUsPage>{children}</AboutUsPage>
        ) : (
          <NewHomePage>{children}</NewHomePage>
        )}
      </body>
    </html>
  );
}
