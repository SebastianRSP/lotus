'use client'

import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import './components/fontawsome';
import { NewHomePage } from './components/layout-wrapper/home/Index';
import { ScrollProvider } from './components/ScrollToTop';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PopUp } from './components/investor/pop-up/Index';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

export default function RootLayout({ children }) {

  const pathname = usePathname();

  // Determine the layout based on the current path
  const isInvestorsPage = pathname.startsWith('/investors');

  const [isPopupVisible, setIsPopupVisible] = useState(false);


  useEffect(() => {
    if (isInvestorsPage) {
      setIsPopupVisible(true);
    }
  }, [isInvestorsPage]);

  const closePopup = () => {
    setIsPopupVisible(false);
  };


  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Your website description" />
        <title>Lotus Data Group</title>
      </head>
      <body className={plusJakartaSans.variable}>
        <PopUp
          isPopupVisible={isPopupVisible}
          closePopup={closePopup}
        />
        <ScrollProvider>
          <NewHomePage>{children}</NewHomePage>
        </ScrollProvider>
      </body>
    </html>
  );
}
