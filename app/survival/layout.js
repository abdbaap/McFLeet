import Navbar from "../navbar";
export const metadata = {
  // This is the long heading that users search for and see in browser tabs.
  title: "MCFleet Survival: Extensive, Lag-Free Minecraft Survival Mode | India's Best", //
  description: "Embark on an unparalleled Minecraft adventure on MCFleet's extensive Survival Mode. Experience lag-free gameplay, a dynamic player-driven economy with shops & auctions, AFK zones, valuable shards, and seamless teleportation. Grind, build, earn, and engage in thrilling PvP – forge your legacy in India's premier survival server.", //
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children} {/* This renders the content from your page.js file */}
      </body>
    </html>
  );
}
