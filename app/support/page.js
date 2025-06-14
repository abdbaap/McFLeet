"use client"; // This directive is crucial for client-side functionality

import React from 'react';

const SupportPage = () => {
  return (
    <div className="bg-indigo-50 min-h-screen flex flex-col items-center justify-center py-12">
      {/* Main container for the blog content */}
      <main className="container mx-auto p-4 md:p-10">
        {/* Header section of the blog post */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-purple-900 mb-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            Need Assistance? We're Here to Help! 🤝
          </h1>
          <p className="text-2xl text-gray-700">
            Your comprehensive guide to getting support for all your gaming and tech queries.
          </p>
          <p className="text-lg text-gray-500 mt-4">
            By Abhigya Ajmani - June 13, 2025
          </p>
        </header>

        {/* Section: General Inquiries & FAQs */}
        <section className="section-card bg-white p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-purple-200 hover:translate-y-[-8px] hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-purple-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="Question Mark">❓</span> General Inquiries & FAQs
          </h2>
          <div className="text-xl text-gray-800">
            <p className="mb-6">
              Before reaching out, we highly recommend checking our existing content for answers to common questions. Many of your inquiries might already be addressed in our detailed blog posts on game modes like Bedwars, Survival, and Arcade. These articles delve deep into mechanics, strategies, and frequently encountered scenarios. Utilizing the search function on our website (if available) can also quickly pinpoint relevant information.
            </p>
            <p>
              We are constantly expanding our content to cover a wider range of topics, so there is a good chance the solution you are looking for is already at your fingertips.
            </p>
          </div>
        </section>

        {/* Section: Bug Reports & Technical Issues */}
        <section className="section-card bg-gray-50 p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-purple-200 hover:translate-y-[-8px] hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-blue-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="Bug">🐛</span> Bug Reports & Technical Issues
          </h2>
          <div className="text-xl text-gray-800">
            <p className="mb-6">
              Encountered a glitch, a broken mechanic, or a technical issue that is impacting your experience? Your reports are invaluable to us! While we aim for a flawless experience, unforeseen issues can arise. Please provide as much detail as possible when reporting a bug. This includes:
            </p>
            <ul className="list-disc list-inside text-gray-800 ml-8 mt-6 mb-6">
              <li className="mb-2">Exact steps to reproduce the issue.</li>
              <li className="mb-2">Any error messages displayed.</li>
              <li className="mb-2">The specific game mode or section where the issue occurred.</li>
              <li className="mb-2">Your in-game name or relevant identifiers (if applicable).</li>
              <li className="mb-2">Screenshots or short video clips can be extremely helpful.</li>
            </ul>
            <p>
              Your thoroughness in reporting helps us diagnose and resolve problems much faster, contributing to a smoother experience for everyone.
            </p>
          </div>
        </section>

        {/* Section: Suggestions & Feedback */}
        <section className="section-card bg-white p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-purple-200 hover:translate-y-[-8px] hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-green-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="Lightbulb">💡</span> Suggestions & Feedback
          </h2>
          <div className="text-xl text-gray-800">
            <p className="mb-6">
              Do you have a brilliant idea for new content, a feature improvement, or general feedback on how we can make this website and its content even better? We are all ears! Your insights are crucial for our continuous evolution. Whether it's about blog post topics, website usability, or anything else that comes to mind, please do not hesitate to share.
            </p>
            <p>
              Constructive criticism and innovative ideas help us grow and ensure that this platform remains a valuable resource for its community. Your voice matters!
            </p>
          </div>
        </section>

        {/* Section: Community Support & Direct Contact */}
        <section className="section-card bg-gray-50 p-12 rounded-3xl shadow-xl mb-10 transition-all duration-300 border-2 border-purple-200 hover:translate-y-[-8px] hover:shadow-2xl">
          <h2 className="text-5xl font-bold text-center text-red-800 mb-10 flex items-center justify-center gap-6" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
            <span className="text-7xl mb-6 inline-block align-middle leading-none" role="img" aria-label="Speech Bubbles">💬</span> Community & Direct Contact
          </h2>
          <div className="text-xl text-gray-800">
            <p class="mb-6">
                While this specific blog post doesn't feature direct contact forms or community links, in a live website setting, you would typically find avenues like:
            </p>
            <ul class="list-disc list-inside text-gray-800 ml-8 mt-6 mb-6">
                <li class="mb-2">
                    <span class="text-accent">🔗 Official Discord Server:</span> For real-time chat, community discussions, and often, quick answers from experienced players or moderators.
                </li>
                <li class="mb-2">
                    <span class="text-accent">📧 Email Support:</span> For more private, specific, or urgent matters that require direct attention. You can reach us at abhigyaworkspace@gmail.com.
                </li>
                <li class="mb-2">
                    <span class="text-accent"> social media channels:</span> For general announcements and sometimes direct messages for support.
                </li>
            </ul>
            <p class="mb-6">
                For the purpose of this blog, please consider how you would ideally direct users to your preferred support channels. Always aim for clarity and ease of access when providing support avenues.
            </p>
            <p>
              Please note that response times may vary depending on the volume of inquiries and the complexity of the issue. We appreciate your patience as we work to assist everyone effectively.
            </p>
          </div>
        </section>

        {/* Closing note */}
        <div className="text-center mt-16">
          <p className="text-2xl text-gray-700 font-semibold">
            Thank you for being a part of our community. Your experience matters! ✨
          </p>
          <p className="text-lg text-gray-500 mt-6">
            (This is a blog post and does not feature active navigation or external links.)
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
        .text-accent {
            color: #4f46e5; /* A vibrant purple/blue accent */
            font-weight: 700; /* Bold */
        }
      `}</style>
    </div>
  );
};

export default SupportPage;
