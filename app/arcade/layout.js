import Navbar from "../navbar";
export const metadata = {
  // This is the long heading for search engines and browser tabs.
  title: "MCFleet Arcade: Your Ultimate Mini-Game Hub! | Lag-Free Minecraft Mini-Games in India",
  description: "Dive into MCFleet's Arcade for thrilling TNT Run, strategic Block Party, challenging Temple Run, high-octane Quake, stealthy Prop Hunt, chaotic TNT Tag, classic Hide and Seek, and unique Splago. Experience lag-free mini-games on India's best Minecraft server.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* This is the short heading that will be visible at the top of your webpage,
            near where you might place your icon. It's pulled from the h1 in page.js. */}
        
        {children}
      </body>
    </html>
  );
}
