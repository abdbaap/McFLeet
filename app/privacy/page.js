"use client"; // This directive is crucial for client-side functionality

import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-indigo-50 min-h-screen flex flex-col items-center justify-center py-12">
      {/* Main container for the blog content */}
      <main className="container mx-auto p-4 md:p-10">
        {/* Header section of the blog post */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-green-900 mb-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            Privacy and Policy 🔒
          </h1>
          <p className="text-2xl text-gray-700">
            Your data matters. Understanding how we protect your privacy.
          </p>
          <p className="text-lg text-gray-500 mt-4">
            By Abhigya Ajmani &ndash; June 13, 2025
          </p>
        </header>

        {/* Section: Introduction */}
        <section className="section-card bg-white p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-green-200 hover:translate-y-[-8px] hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-green-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="Privacy Lock">🔐</span> Introduction
          </h2>
          <div className="text-xl text-gray-800">
            <p className="mb-6">
              Your privacy is of utmost importance to me. This Privacy Policy describes how I collect, use, and disclose information when you visit and use my website and blog. It also outlines the choices you have regarding your information. By accessing or using this website, you agree to the collection and use of information in accordance with this policy.
            </p>
            <p>
              I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>
        </section>

        {/* Section: Information I Collect */}
        <section className="section-card bg-gray-50 p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-green-200 hover:translate-y-[-8px] hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-blue-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="Magnifying Glass">🔍</span> Information I Collect
          </h2>
          <div className="text-xl text-gray-800">
            <p className="mb-6">
              I collect various types of information for different purposes to provide and improve my website&apos;s content and services.
            </p>
            <h3 className="text-3xl font-semibold mb-4 mt-6">Usage Data</h3>
            <p className="mb-6">
              I may also collect information about how the website is accessed and used (&quot;Usage Data&quot;). This Usage Data may include information such as your computer&apos;s Internet Protocol address (e.g., IP address), browser type, browser version, the pages of my website that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data. This data helps me understand user behavior and improve the website&apos;s performance and content.
            </p>
            <h3 className="text-3xl font-semibold mb-4 mt-6">Cookies and Tracking Technologies</h3>
            <p>
              I use cookies and similar tracking technologies to track the activity on my website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze my website.
            </p>
            <ul className="list-disc list-inside text-gray-800 ml-8 mt-6">
              <li className="mb-2"><strong>Session Cookies:</strong> Used to operate the website.</li>
              <li className="mb-2"><strong>Preference Cookies:</strong> Used to remember your preferences and various settings.</li>
              <li className="mb-2"><strong>Security Cookies:</strong> Used for security purposes.</li>
              <li className="mb-2"><strong>Analytics Cookies:</strong> Used to collect information about how visitors use the website.</li>
            </ul>
            <p className="mt-6">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of my website.
            </p>
          </div>
        </section>

        {/* Section: How I Use Your Information */}
        <section className="section-card bg-white p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-green-200 hover:translate-y-[-8px] hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-purple-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="Gear">⚙️</span> How I Use Your Information
          </h2>
          <div className="text-xl text-gray-800">
            <p className="mb-6">
              I use the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside text-gray-800 ml-8 mt-6">
              <li className="mb-2">To provide and maintain the website.</li>
              <li className="mb-2">To notify you about changes to the website.</li>
              <li className="mb-2">To allow you to participate in interactive features of the website when you choose to do so.</li>
              <li className="mb-2">To provide customer care and support.</li>
              <li className="mb-2">To provide analysis or valuable information so that I can improve the website.</li>
              <li className="mb-2">To monitor the usage of the website.</li>
              <li className="mb-2">To detect, prevent, and address technical issues.</li>
            </ul>
          </div>
        </section>

        {/* Section: How I Share Your Information */}
        <section className="section-card bg-gray-50 p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-green-200 hover:translate-y-[-8px] hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-red-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="Share Icon">📤</span> How I Share Your Information
          </h2>
          <div className="text-xl text-gray-800">
            <p className="mb-6">
              I do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist me in operating my website, conducting my business, or servicing you, so long as those parties agree to keep this information confidential. I may also release your information when I believe release is appropriate to comply with the law, enforce my site policies, or protect my rights or others&apos; rights, property, or safety.
            </p>
            <p>
              Non&ndash;personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
            </p>
          </div>
        </section>

        {/* Section: Data Security */}
        <section className="section-card bg-white p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-green-200 hover:translate-y-[-8px] hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-orange-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="Shield with Checkmark">✅</span> Data Security
          </h2>
          <div className="text-xl text-gray-800">
            <p className="mb-6">
              The security of your data is important to me, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While I strive to use commercially acceptable means to protect your Personal Data, I cannot guarantee its absolute security.
            </p>
          </div>
        </section>

        {/* Section: Your Rights and Choices */}
        <section className="section-card bg-gray-50 p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-green-200 hover:translate-y-[-8px] hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-teal-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="Settings Cog">⚙️</span> Your Rights and Choices
          </h2>
          <div className="text-xl text-gray-800">
            <p className="mb-6">
              You have the right to access, update, or delete the information I have on you. Whenever made possible, you can access, update, or request deletion of your Personal Data directly within your account settings section. If you are unable to perform these actions yourself, please contact me to assist you.
            </p>
            <ul className="list-disc list-inside text-gray-800 ml-8 mt-6">
              <li className="mb-2"><strong>The right to access:</strong> You have the right to request copies of your Personal Data.</li>
              <li className="mb-2"><strong>The right to rectification:</strong> You have the right to request that I correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
              <li className="mb-2"><strong>The right to erasure:</strong> You have the right to request that I erase your Personal Data, under certain conditions.</li>
              <li className="mb-2"><strong>The right to restrict processing:</strong> You have the right to request that I restrict the processing of your Personal Data, under certain conditions.</li>
              <li className="mb-2"><strong>The right to object to processing:</strong> You have the right to object to my processing of your Personal Data, under certain conditions.</li>
              <li className="mb-2"><strong>The right to data portability:</strong> You have the right to request that I transfer the data that I have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
          </div>
        </section>

        {/* Section: Children's Privacy */}
        <section className="section-card bg-white p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-green-200 hover:translate-y-[-8px] hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-blue-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="Children">👶</span> Children&apos;s Privacy
          </h2>
          <div className="text-xl text-gray-800">
            <p className="mb-6">
              My website does not address anyone under the age of 13 (&quot;Children&quot;). I do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your Children have provided me with Personal Data, please contact me. If I become aware that I have collected Personal Data from children without verification of parental consent, I take steps to remove that information from my servers.
            </p>
          </div>
        </section>

        {/* Section: Changes to This Policy */}
        <section className="section-card bg-gray-50 p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-green-200 hover:translate-y-[-8px] hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-purple-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="Document with Arrow">⬆️</span> Changes to This Policy
          </h2>
          <div className="text-xl text-gray-800">
            <p className="mb-6">
              I may update my Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </div>
        </section>

        {/* Section: Contact Information */}
        <section className="section-card bg-white p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-green-200 hover:translate-y-[-8px] hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-red-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="Phone and Email">📧</span> Contact Information
          </h2>
          <div className="text-xl text-gray-800">
            <p className="mb-6">
              If you have any questions about this Privacy Policy, you can contact me:
            </p>
            <ul className="list-disc list-inside text-gray-800 ml-8 mt-6">
              <li className="mb-2"><strong>By email:</strong> abhigyaworkspace@gmail.com</li>
            </ul>
          </div>
        </section>

        {/* Closing note */}
        <div className="text-center mt-16">
          <p className="text-2xl text-gray-700 font-semibold">
            Thank you for reviewing my Privacy Policy. Your trust is paramount! ✨
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

export default PrivacyPolicyPage;
