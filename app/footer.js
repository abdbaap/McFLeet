"use client"; // This directive is crucial for client-side functionality

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white py-12 px-4 md:px-8 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

        {/* Company Info / Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="MCFleet Logo" width={50} height={50} className="rounded-full" />
            <span className="text-3xl font-extrabold text-white">MCFleet</span>
          </Link>
          <p className="text-gray-300 max-w-sm">
            India&apos;s leading Minecraft server for a lag&ndash;free experience and pure gaming thrills. Built for gamers, by gamers.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <h3 className="text-xl font-bold text-yellow-300 mb-2">Explore</h3>
          <ul className="space-y-2">
            <li><Link href="/bedwars" className="text-gray-300 hover:text-white transition-colors duration-200">Bedwars</Link></li>
            <li><Link href="/survival" className="text-gray-300 hover:text-white transition-colors duration-200">Survival</Link></li>
            <li><Link href="/arcade" className="text-gray-300 hover:text-white transition-colors duration-200">Arcade</Link></li>
            <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</Link></li>
          </ul>
        </div>

        {/* Support & Legal Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <h3 className="text-xl font-bold text-yellow-300 mb-2">Support &amp; Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/support" className="text-gray-300 hover:text-white transition-colors duration-200">Support</Link></li>
            <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">Terms &amp; Conditions</Link></li>
            <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <h3 className="text-xl font-bold text-yellow-300 mb-2">Contact</h3>
          <p className="text-gray-300">
            Email: <a href="mailto:abhigyaworkspace@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-200">abhigyaworkspace@gmail.com</a>
          </p>
          {/* Potentially add social media icons/links here in a real scenario */}
          <div className="flex gap-4 mt-2">
            {/* Example social media links (replace with actual icons/links) */}
            {/* <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-discord"></i></a>
            <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-youtube"></i></a> */}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-400 text-sm">
        &copy; {currentYear} MCFleet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
