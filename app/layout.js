// app/layout.js
import { Poppins } from 'next/font/google';
import Script from 'next/script'; // Import the Script component for AdSense
import "./globals.css";
import Footer from "./footer";

// Configure the Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-poppins',
});

// This is where you define your metadata for the App Router
export const metadata = {
  title: "Mcfleet One And Only Best Indian Server, Learn And Support Mcfleet",
  description: "Dive into MCFleet, India's leading Minecraft server designed for modern gamers. Forget lag and network issues – we deliver seamless Bedwars battles, epic Survival adventures, diverse Arcade games, and challenging Parkour. Join a thriving community where every moment is about pure fun and competitive play.",
  // Add keywords for better SEO
  keywords: [
    "mcfleet",
    "mcfleet server",
    "mcfleet server logo",
    "play.mcfleet.net server",
    "mcfleet.net server",
    "minecraft server india",
    "lag-free minecraft",
    "bedwars",
    "survival minecraft",
    "minecraft arcade",
    "minecraft parkour",
    "mcfleet store", 
    "mcfleet website",
    "mcfleet store net", 
    "mcfleet.store.net", 
   "mcfleet bedwars",
    "mcfleet store",
   "shop mcfleet net",
"mcfleet store minecraft server",
"shop.mcfleet",
   "mcfleet",
"mcfleet.store",
"fleet store minecraft",
"mcfleet store minecraft",
"fleet store minecraft server",
"https://store.mcfleet.net",
  ],
  // CORRECT way to add Google verification tags and AdSense account ID
  other: {
    'google-adsense-account': 'ca-pub-6836466532865002',
    'google-site-verification': 'MIDLOYFbs4SS5EOC6oQcQd2CU6R4U0gxy70ESi1oLew',
  },
  // We will add the AdSense script using the <Script> component below
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
     <head><meta name="msvalidate.01" content="732FAFAE86081567CB2465CABE8D7F31" />
    </head>
  <body>
        {/*
          Use the next/script component to load the main AdSense script.
          - strategy="afterInteractive" is recommended for auto ads.
          - It loads the script after the page is interactive,
            so it doesn't block the initial rendering.
        */}
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6836466532865002`}
        />

        {children}
        <Footer/>
      </body>
    </html>
  );
}
