import Navbar from "../navbar";
import Link from "next/link"
export const metadata = {
  // This is the long heading that users search for and see in browser tabs for the About page.
  title: "About This Digital Realm 🌌 - MCFleet Gaming & Tech Hub",
  description: "Unveiling the core purpose and passion behind your ultimate gaming and tech hub. Learn about MCFleet's vision and dedication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
    <nav className="flex  py-4 z-40 justify-between relative  items-center w-[100%]  bg-gray-900">
        <Link href="#home" className="text-2xl justify-center items-center text-2xl font-extrabold gap-2 mx-2 text-white flex"><Image src={"/logo.png"} width={50} height={50} alt="logo.jpg" className="ghg"></Image> MCFleet</Link>
        <div className="dropdown group flex  flex-col mx-2">
<svg onClick={()=>showindex()} className="w-10 invert " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <div ref={ref} className="hidden absolute text-xl w-[100%] z-50  my-14 px-4  left-[-9px] md:group-hover:flex group-hover:flex-col bg-gray-950 text-white flex-col flex">
              <Link href="/" className="p-4 w-[100%] hover:bg-gray-900">Home</Link>
              <Link href="/about" className="p-4 w-[100%] hover:bg-gray-900">About</Link>
              <Link href="/support" className="p-4 w-[100%] hover:bg-gray-900">Contact</Link>
              <Link href="#blogs" className="p-4 w-[100%] hover:bg-gray-900">Blogs</Link>
            </div>
            
        </div>
      </nav>
    
        {children} {/* This renders the content from your page.js file */}
      </body>
    </html>
  );
}
