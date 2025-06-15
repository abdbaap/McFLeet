import Navbar from "../navbar";
export const metadata = {
  // This is the long heading that users search for and see in browser tabs for the Support page.
  title: "MCFleet Support: Need Assistance? We're Here to Help! 🤝",
  description: "Your comprehensive guide to getting support for all your gaming and tech queries on MCFleet. Find FAQs, contact options, and troubleshooting steps.",
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
