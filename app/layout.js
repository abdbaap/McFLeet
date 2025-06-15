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

export const metadata = {
  title: "MCFleet - India's Best Lag-Free Minecraft Server | Bedwars, Survival, Arcade, Parkour & More",
  description: "Dive into MCFleet, India's leading Minecraft server designed for modern gamers. Forget lag and network issues – we deliver seamless Bedwars battles, epic Survival adventures, diverse Arcade games, and challenging Parkour. Join a thriving community where every moment is about pure fun and competitive play.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}> {/* Apply the font variable to the html tag */}
      <body>
        {/* Your existing header or site-wide elements could go here if applicable */}
        {children}
      </body>
    </html>
  );
}
