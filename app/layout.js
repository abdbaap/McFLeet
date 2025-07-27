import { Poppins } from 'next/font/google';
import "./globals.css"; // Assuming you have a globals.css for global styles
import Footer from "./footer";

// Configure the Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap', // This is good for performance and user experience
  weight: ['400', '700'], // Example: You can specify the weights you need
  variable: '--font-poppins', // Define a CSS variable for easier use with Tailwind CSS
});

// This is where you define your metadata for the App Router
export const metadata = {
  title: "MCFleet - India's Best Lag-Free Minecraft Server | Bedwars, Survival, Arcade, Parkour & More",
  description: "Dive into MCFleet, India's leading Minecraft server designed for modern gamers. Forget lag and network issues – we deliver seamless Bedwars battles, epic Survival adventures, diverse Arcade games, and challenging Parkour. Join a thriving community where every moment is about pure fun and competitive play.",
  // For custom meta tags like Google verification, use the 'other' property
  other: {
    'google-adsense-account': 'ca-pub-6836466532865002',
    'google-site-verification': 'MIDLOYFbs4SS5EOC6oQcQd2CU6R4U0gxy70ESi1oLew',
  },
  // CORRECT way to add AdSense script using the 'scripts' property
  scripts: [
    {
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6836466532865002',
      async: true,
      crossOrigin: 'anonymous',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      {/*
        In the App Router, the <head> element is automatically handled by Next.js
        based on the 'metadata' export. You do not place a <Head> component or
        a native <head> tag directly here. The AdSense script is now handled
        via the 'scripts' property in metadata.
      */}
<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6836466532865002"
     crossorigin="anonymous"></script>
  </head>
      <body>
        {/* Your existing header or site-wide elements could go here if applicable */}
        {children}
        <Footer/>
      </body>
    </html>
  );
}
