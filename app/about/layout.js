import Navbar from "../navbar";
export const metadata = {
  // This is the long heading that users search for and see in browser tabs for the About page.
  title: "About This Digital Realm 🌌 - MCFleet Gaming & Tech Hub",
  description: "Unveiling the core purpose and passion behind your ultimate gaming and tech hub. Learn about MCFleet's vision and dedication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
    </Navbar>
        {children} {/* This renders the content from your page.js file */}
      </body>
    </html>
  );
}
