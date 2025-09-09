import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "../../node_modules/next/script";
import Footer from "./Components/footer/index";
import Header from "./Components/header/index";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextTv",
  description: "NextTV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="ru" className='scroll-smooth'>
      
      <Script id="google-translate-init" strategy="afterInteractive">
         
         {`
          function googleTranslateElementInit() { new google.translate.TranslateElement({ 
            pageLanguage: 'ru',
             includedLanguages: 'ru,uz',    
             layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 
             'google_translate_element'); } `} 
             </Script> 
             {/* Скрипт самого Google Translate */} 
             <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" 
             strategy="afterInteractive" /> 
             
      <body id="custom_id"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
