'use client';
import { useState, useEffect } from 'react';
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

  const [isPopupVisible, setIsPopupVisible] = useState(false);


  useEffect(() => {
    console.log("Page detected as Investors:", isInvestorsPage);
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
      
      {isPopupVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="gb2 border border-green-500 bg-black/60 border backdrop-blur-md p-6 rounded-lg shadow-lg md:w-[800px]  w-[90%] text-center">
              <h2 className="text-lg font-bold mb-4 text-white">FORWARD-LOOKING STATEMENTS DISCLAIMER</h2>
              <p className="mb-6 text-white">This website may contain certain forward-looking statements regarding Lotus Data Group., its future operations or its financial performance. Forward-looking statements involve known and unknown risks, uncertainties, and other factors which may cause the actual results, performance, or achievements of the Company to be materially different from any future results, performance, or achievements expressed or implied by the forward-looking statements. These statements are only predictions and reflect the Company’s current beliefs and expectations with respect to future events; they are based on assumptions and are subject to risk and uncertainties, and given these uncertainties, investors should not place undue reliance on these forward-looking statements. The Company disclaims any obligation to update or revise any forward-looking statements, whether as a result of new information, future events, or otherwise, except as required by law.</p>
              <button
                className="border rounded bg-white uppercase py-2 px-2 transition-all duration-300 hover:bg-green hover:border-black hover:text-black"
                onClick={closePopup}
              >
                I understand
              </button>
            </div>
          </div>
        )}
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
