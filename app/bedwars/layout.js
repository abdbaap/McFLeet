import Navbar from "../navbar";
export const metadata = {
  // This is the long heading for search engines and browser tabs.
  title: "MCFleet Bedwars: Defend, Destroy, Conquer! | Lag-Free Minecraft Bedwars in India",
  description: "Experience intense team-based Bedwars on MCFleet, India's premier lag-free Minecraft server. Protect your bed, destroy opponents', and conquer in 1v1, 2v2, 3v3, and 4v4 modes. Master strategy, upgrades, and dominate the leaderboards.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* This header can contain your site's common elements like logo and navigation.
            The "short heading" visible on the page will likely be the prominent h1/span
            within the page.js itself (e.g., "MCFleet Bedwars: Defend, Destroy, Conquer!").
            If you want a *separate* short heading always visible at the top,
            you'd add it here, perhaps a more general "MCFleet" or "Bedwars Arena".
            For this specific request, the page.js title serves as the primary visual heading.
        */}

        <main>
    </Navbar>
          {children}
        </main>
      </body>
    </html>
  );
}
