"use client"; // This directive is crucial for client-side functionality
import Navbar from "../navbar";
import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className="bg-indigo-50 min-h-screen flex flex-col items-center justify-center py-12">
    <Navbar/>
    {/* Main container for the blog content */}
      <main className="container mx-auto p-4 md:p-10">
        {/* Header section of the blog post */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-blue-900 mb-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            Terms and Conditions of Use 📜
          </h1>
          <p className="text-2xl text-gray-700">
            Understanding your rights and responsibilities on this platform.
          </p>
          <p className="text-lg text-gray-500 mt-4">
            By Abhigya Ajmani &ndash; June 13, 2025
          </p>
        </header>

        {/* Section: Introduction */}
        <section className="section-card bg-white p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-blue-200 hover:translate-y-[-8px] hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-blue-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="Welcome Hand">👋</span> Welcome and Acceptance
          </h2>
          <div className="text-xl text-gray-800">
            <p className="mb-6">
              Welcome to my website and blog! These Terms and Conditions (the &quot;Terms&quot;) govern your access to and use of all content, features, and services provided herein. By accessing or using this website, you (&quot;User&quot; or &quot;You&quot;) agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any part of these Terms, you must not use this website.
            </p>
            <p>
              I reserve the right to modify these Terms at any time without prior notice. Your continued use of the website after any such changes constitutes your acceptance of the new Terms. Please review these Terms periodically for updates.
            </p>
          </div>
        </section>

        {/* Section: Intellectual Property */}
        <section className="section-card bg-gray-50 p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-blue-200 hover:translate-y-[-8px] hover:hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-purple-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="Copyright Symbol">©️</span> Intellectual Property Rights
          </h2>
          <div className="text-xl text-gray-800">
            <p className="mb-6">
              Unless otherwise stated, all content on this website, including but not limited to text, graphics, logos, images, and blog posts (including those detailing MCFleet game modes), is the property of Abhigya Ajmani or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mb-6">
              You may access, view, and print content from this website for your personal, non&ndash;commercial use only. Any other use, including the reproduction, modification, distribution, transmission, republication, display, or performance of the content without my prior written permission, is strictly prohibited.
            </p>
            <p>
              The opinions and views expressed in blog posts are solely those of the author and do not necessarily reflect the official stance or endorsement of MCFleet or any other mentioned entity.
            </p>
          </div>
        </section>

        {/* Section: User Conduct */}
        <section className="section-card bg-white p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-blue-200 hover:translate-y-[-8px] hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-green-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="No Entry Sign">🚫</span> Acceptable Use Policy
          </h2>
          <div className="text-xl text-gray-800">
            <p className="mb-6">
              You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the website. Prohibited behavior includes:
            </p>
            <ul className="list-disc list-inside text-gray-800 ml-8 mt-6 mb-6">
              <li className="mb-2">Engaging in any conduct that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.</li>
              <li className="mb-2">Impersonating any person or entity, or falsely stating or otherwise misrepresenting your affiliation with a person or entity.</li>
              <li className="mb-2">Uploading, posting, emailing, or otherwise transmitting any content that you do not have a right to transmit.</li>
              <li className="mb-2">Interfering with or disrupting the website or servers or networks connected to the website.</li>
              <li className="mb-2">Attempting to gain unauthorized access to any portion or feature of the website, or any other systems or networks connected to the website.</li>
            </ul>
            <p>
              Violation of these terms may result in termination of your access to the website.
            </p>
          </div>
        </section>

        {/* Section: Disclaimer of Warranties */}
        <section className="section-card bg-gray-50 p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-blue-200 hover:translate-y-[-8px] hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-red-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="Warning Sign">⚠️</span> Disclaimer of Warranties
          </h2>
          <div className="text-xl text-gray-800">
            <p className="mb-6">
              This website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties of any kind, either express or implied. I do not warrant that the website will be uninterrupted or error&ndash;free, that defects will be corrected, or that the website or the server that makes it available are free of viruses or other harmful components.
            </p>
            <p className="mb-6">
              I make no warranties or representations regarding the accuracy, reliability, completeness, or timeliness of the content, services, software, text, graphics, or links. The content on this website is for informational purposes only and should not be considered professional advice.
            </p>
          </div>
        </section>

        {/* Section: Limitation of Liability */}
        <section className="section-card bg-white p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-blue-200 hover:translate-y-[-8px] hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-orange-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="Broken Shield">🛡️</span> Limitation of Liability
          </h2>
          <div className="text-xl text-gray-800">
            <p className="mb-6">
              In no event shall Abhigya Ajmani or its affiliates, partners, or licensors be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc list-inside text-gray-800 ml-8 mt-6 mb-6">
                <li className="mb-2">Your access to or use of or inability to access or use the website.</li>
                <li className="mb-2">Any conduct or content of any third party on the website.</li>
                <li className="mb-2">Any content obtained from the website.</li>
                <li className="mb-2">Unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not I have been informed of the possibility of such damage.</li>
            </ul>
          </div>
        </section>

        {/* Section: Governing Law */}
        <section className="section-card bg-gray-50 p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-blue-200 hover:translate-y-[-8px] hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-teal-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="Balance Scales">⚖️</span> Governing Law
          </h2>
          <div className="text-xl text-gray-800">
            <p className="mb-6">
              These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction, e.g., India, or a specific state/province if applicable], without regard to its conflict of law provisions.
            </p>
            <p>
              My failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our website and supersede and replace any prior agreements we might have had regarding the website.
            </p>
          </div>
        </section>

        {/* Closing note */}
        <div className="text-center mt-16">
          <p className="text-2xl text-gray-700 font-semibold">
            Thank you for reviewing our Terms and Conditions. Your understanding ensures a positive experience for all! 👍
          </p>
          <p className="text-lg text-gray-500 mt-6">
            (This is a blog post for informational purposes and does not feature active navigation or external links.)
          </p>
        </div>
      </main>

      {/* Global styles */}
      <style jsx global>{`
        body {
            font-family: 'Inter', sans-serif;
            background-color: #e0e7ff; /* Lighter blue for a gaming theme */
            color: #2c3e50; /* Darker text for contrast */
            margin: 0;
            padding: 0;
            line-height: 1.8; /* Increased line height for readability */
        }
        .container {
            max-width: 950px; /* Slightly wider container */
        }
        .section-card {
            background-color: #ffffff;
            padding: 3rem; /* More padding */
            border-radius: 1.5rem; /* rounded-3xl */
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15); /* Stronger shadow */
            margin-bottom: 2.5rem; /* More margin */
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            border: 2px solid #a7c5ed; /* Subtle border */
        }
        .section-card:hover {
            transform: translateY(-8px); /* More pronounced lift on hover */
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        }
        .icon {
            font-size: 4rem; /* Even larger icon size */
            margin-bottom: 1.5rem;
            display: inline-block;
            vertical-align: middle;
            line-height: 1;
        }
      `}</style>
    </div>
  );
};

export default TermsAndConditionsPage;
