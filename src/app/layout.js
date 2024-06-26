import { Plus_Jakarta_Sans } from "next/font/google";
import "./components/fontawsome"
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.variable}>{children}</body>
    </html>
  );
}
