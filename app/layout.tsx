import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from '@next/third-parties/google'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ["normal", "italic"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Team Mesa",
  description: "Team Mesa is a student organization at Pimpri Chinchwad College of Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        <Navbar />
        {children}
      </body>
      <GoogleAnalytics gaId="G-KZWCF5PD86" />
    </html>
  );
}
