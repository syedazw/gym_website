import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/header";
import Footer from "@/components/footer";

const oswald = Oswald({ 
  subsets: ["latin"],
weight: ['200', '300', '400', '500', '600', '700'],
variable: '--font-oswald' });

const roboto = Roboto({ 
  subsets: ["latin"],
weight: ['100','300', '400', '500', '700', '900'],
variable: '--font-roboto' });


export const metadata: Metadata = {
  title: "Team Godai Pakistan",
  description: "Since 2015",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${oswald.variable} ${roboto.variable} w-full max-w-[1920px] mx-auto`}>
        <Header />
        
        {children}
        
        <Footer />

        </body>
    </html>
  );
}
