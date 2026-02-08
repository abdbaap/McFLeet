"use client"
// A single, self-contained Next.js server-side component page.

import Link from 'next/link';
import Image from 'next/image';

const getInitialProps = async () => {
    // This is a server-side component, so we don't need getInitialProps
    // or getServerSideProps. The component will be rendered on the server by default.
    return {};
};

const HomePage = () => {
    return (
        <div className="bg-gray-900 text-gray-100 antialiased">
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PN347P89"
                    height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
            </noscript>

            <nav className="sticky top-0 z-50 bg-gray-800 shadow-lg py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="#home" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition duration-300">
                        Wordora
                    </Link>
                    <div className="hidden md:flex md:space-x-4 lg:space-x-8 text-sm md:text-base">
                        <Link href="#home" className="text-gray-200 hover:text-yellow-400 transition duration-300 font-medium whitespace-nowrap">Home</Link>
                        <Link href="#features" className="text-gray-200 hover:text-yellow-400 transition duration-300 font-medium whitespace-nowrap">Features</Link>
                        <Link href="#system-requirements" className="text-gray-200 hover:text-yellow-400 transition duration-300 font-medium whitespace-nowrap">Requirements</Link>
                        <Link href="#how-to-install" className="text-gray-200 hover:text-yellow-400 transition duration-300 font-medium whitespace-nowrap">How to Install</Link>
                        <Link href="#our-websites" className="text-gray-200 hover:text-yellow-400 transition duration-300 font-medium whitespace-nowrap">Our Websites</Link>
                        <Link href="#download" className="text-gray-200 hover:text-yellow-400 transition duration-300 font-medium whitespace-nowrap">Download</Link>
                        <Link href="#comments" className="text-gray-200 hover:text-yellow-400 transition duration-300 font-medium whitespace-nowrap">Comments</Link>
                    </div>
                    <button id="mobile-menu-button" className="md:hidden text-gray-200 focus:outline-none">
                        <i className="fas fa-bars text-xl"></i>
                    </button>
                </div>
                <div id="mobile-menu" className="hidden md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-2">
                    <Link href="#home" className="block text-gray-200 hover:text-yellow-400 transition duration-300 font-medium py-2">Home</Link>
                    <Link href="#features" className="block text-gray-200 hover:text-yellow-400 transition duration-300 font-medium py-2">Features</Link>
                    <Link href="#system-requirements" className="block text-gray-200 hover:text-yellow-400 transition duration-300 font-medium py-2">Requirements</Link>
                    <Link href="#how-to-install" className="block text-gray-200 hover:text-yellow-400 transition duration-300 font-medium py-2">How to Install</Link>
                    <Link href="#our-websites" className="block text-gray-200 hover:text-yellow-400 transition duration-300 font-medium py-2">Our Websites</Link>
                    <Link href="#download" className="block text-gray-200 hover:text-yellow-400 transition duration-300 font-medium py-2">Download</Link>
                    <Link href="#comments" className="block text-gray-200 hover:text-yellow-400 transition duration-300 font-medium py-2">Comments</Link>
                </div>
            </nav>

            <header id="home" className="relative bg-gradient-to-r from-gray-800 to-gray-900 py-20 md:py-32 text-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                    <span className="text-[10rem] md:text-[15rem] lg:text-[20rem] font-extrabold text-yellow-500 opacity-5 select-none">FOR FREE</span>
                </div>
                <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1626861219502-d98f7e70390a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyMHx8YWRvYmUlMjBpbGx1c3RyYXRvciUyMHdvcmt8ZW58MHx8fHwxNzE2NDcwMjA1fDA&ixlib=rb-4.0.3&q=80&w=2000&h=1000')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div className="relative z-10 container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 leading-tight mb-4 animate-fade-in-up">
                        Download Adobe Illustrator 2022 &#x2736; Free via GetIntoPC
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
                        Unleash your creative potential with the definitive vector graphics software! Get the 2022 version now, totally free, and transform your visions into stunning reality.
                    </p>
                    <Link href="https://getintopc.com/?s=Adobe+Illustrator+2022" target="_blank" rel="noopener noreferrer"
                        className="inline-block bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transform hover:scale-105 transition duration-300 ease-in-out animate-fade-in-up delay-400">
                        Get Illustrator Now! <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 md:py-16">

                <section id="why-illustrator" className="mb-16 animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 text-center">Why Adobe Illustrator 2022 is Your Next Creative Powerhouse</h2>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                            <Image src="/adobe (1).webp" alt="Unleash Creative Freedom with Illustrator" width={800} height={450} className="rounded-lg shadow-md w-full h-64 md:h-96 object-cover animate-image-on-scroll" />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                                Adobe Illustrator has been the industry leader for vector graphics for ages, and the 2022 version takes things to a whole new level! It&apos;s packed with mind-blowing features and performance boosts that will make your design work faster and more fun. Whether you&apos;re whipping up a snazzy logo, crafting detailed illustrations, perfecting text, or creating scalable graphics for anything from a website to a giant billboard, Illustrator 2022 has your back. Your designs will always look crisp and sharp, no matter how big or small you make them!
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                This version builds on Illustrator&apos;s incredible legacy, offering a super intuitive and efficient workspace. Plus, it plays nice with all your other Adobe Creative Cloud apps, so your workflow is smooth as silk. Moving from idea to final masterpiece is a breeze, without any annoying hiccups. With Illustrator 2022, you&apos;re not just designing; you&apos;re exploring a creative universe where your imagination is the only limit. Get ready to bring your wildest ideas to life with incredible precision and artistic flair!
                            </p>
                        </div>
                    </div>
                </section>

                <section id="features" className="mb-16 animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 text-center">Explore What&apos;s New: Key Features of Illustrator 2022</h2>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                        <div className="flex flex-col md:flex-row items-center mb-8">
                            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                                <Image src="/adobe (2).webp" alt="Illustrator 3D Features" width={800} height={450} className="rounded-lg shadow-md w-full h-64 md:h-96 object-cover animate-image-on-scroll" />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="text-2xl font-semibold text-yellow-300 mb-3">Amazing 3D and Materials Panel</h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Get ready to make your designs pop with Illustrator 2022&apos;s super-charged 3D and Materials panel! This game-changing feature lets you turn your flat vector art into awesome 3D objects with ease. Just &quot;extrude,&quot; &quot;revolve,&quot; or &quot;inflate,&quot; your designs, then dress them up with a huge library of materials—think realistic wood, shiny metal, clear glass, or even cool fabric textures. You also get full control over lighting and shadows, so you can create mind-blowing 3D scenes right inside Illustrator. No more jumping between different 3D programs; it&apos;s all here, making your design life so much simpler and your creations way more impressive!
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row-reverse items-center mb-8">
                            <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0">
                                <Image src="/adobe (3).webp" alt="Illustrator Contextual Task Bar" width={800} height={450} className="rounded-lg shadow-md w-full h-64 md:h-96 object-cover animate-image-on-scroll" />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="text-2xl font-semibold text-yellow-300 mb-3">Smart Contextual Task Bar: Design Faster!</h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Who likes wasting time searching for tools? Illustrator 2022&apos;s Contextual Task Bar is a genius! It pops up with exactly the tools you need, right when you need them, based on what you&apos;re working on. Selecting text? Boom, text tools appear. Reshaping a design? Bam, shape tools are there. This smart bar slashes clicks and speeds up your design process like crazy, keeping you in the creative zone without interruption. Focus on making awesome art, not hunting for buttons!
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                                <Image src="/adobe (4).webp" alt="Illustrator Collaboration" width={800} height={450} className="rounded-lg shadow-md w-full h-64 md:h-96 object-cover animate-image-on-scroll" />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="text-2xl font-semibold text-yellow-300 mb-3">Team Up Seamlessly & Supercharged Performance!</h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Working with your team has never been easier in Illustrator 2022! Cloud documents let everyone collaborate in real-time on the same project. Sharing designs for feedback is a breeze, meaning faster changes and quicker project finishes. But that&apos;s not all – this version is seriously fast under the hood! Enjoy lightning-quick rendering, super smooth zooming and panning, and a snappier feel overall, even with your most complex masterpieces. Get ready for a design flow that&apos;s totally fluid and free from technical slowdowns!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="system-requirements" className="mb-16 animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 text-center">Fuel Your Creativity: Illustrator 2022 System Requirements</h2>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                            <Image src="/adobe (5).webp" alt="System Requirements Graphic" width={800} height={450} className="rounded-lg shadow-md w-full h-64 md:h-96 object-cover animate-image-on-scroll" />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                                To truly unleash the full power of Adobe Illustrator 2022, your computer needs to be up to the task! While the minimum specs will get it running, going for the recommended hardware will make your design experience incredibly smooth. This is especially true when you&apos;re juggling complex files, diving into 3D features, or working with multiple artboards at once. A powerful system means Illustrator keeps pace with your brilliant ideas, reducing annoying lag and crashes.
                            </p>
                            <ul className="list-disc list-inside text-lg text-gray-300 space-y-2 pl-4">
                                <li><strong>Operating System:</strong> Windows 10 (64-bit, version 20H2 or later) or macOS Catalina (10.15) and up. Apple Silicon (M1/M2) rocks!</li>
                                <li><strong>Processor:</strong> A modern multi-core Intel or AMD 64-bit processor.</li>
                                <li><strong>RAM:</strong> 8 GB is the bare minimum, but trust us, 16 GB or more is a game-changer for big projects!</li>
                                <li><strong>Graphics Card:</strong> A GPU with 2 GB VRAM (4 GB+ for heavy lifting) and DirectX 12 (Windows) or Metal (macOS) support.</li>
                                <li><strong>Hard Disk Space:</strong> At least 2 GB for installation, but an SSD (Solid State Drive) is a must-have for lightning-fast loading and responsiveness.</li>
                                <li><strong>Display:</strong> Minimum 1280x800, but 1920x1080 or higher is way better for comfort and detail.</li>
                                <li><strong>Internet Connection:</strong> Required for activation, updates, and online goodies.</li>
                            </ul>
                            <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                                Keep your operating system and graphics drivers updated for the best performance and compatibility. Get your rig ready, and let&apos;s create some magic!
                            </p>
                        </div>
                    </div>
                </section>

                <section id="how-to-install" className="mb-16 animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 text-center">Your Easy Guide to Installation: Step-by-Step with GetIntoPC</h2>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                        <div className="flex flex-col md:flex-row-reverse items-center mb-8">
                            <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0">
                                <Image src="/adobe (6).webp" alt="Download and Install Guide" width={800} height={450} className="rounded-lg shadow-md w-full h-64 md:h-96 object-cover animate-image-on-scroll" />
                            </div>
                            <div className="md:w-1/2">
                                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                                    Getting software from sites like GetIntoPC is straightforward, but you need to follow each step carefully for a smooth ride. Always be smart and understand what you&apos;re doing when downloading from non-official sources. This guide will walk you through everything, from finding the download to getting it set up.
                                </p>
                                <h3 className="text-2xl font-semibold text-yellow-300 mb-3">Ready to Download? Here&apos;s How:</h3>
                                <ol className="list-decimal list-inside text-lg text-gray-300 space-y-2 pl-4">
                                    <li><strong>Head to GetIntoPC:</strong> Pop open your browser and securely visit the official GetIntoPC website.</li>
                                    <li><strong>Search for Illustrator 2022:</strong> Use their search bar to find &quot;Adobe Illustrator 2022.&quot; Double-check you&apos;re on the right page!</li>
                                    <li><strong>Find the Download Link:</strong> Scroll down a bit; the download link is usually prominent, often near the bottom of the article.</li>
                                    <li><strong>Start Downloading:</strong> Click that link! You&apos;ll typically get a compressed file (like a .zip or .rar). Make sure your internet connection is solid to avoid any hiccups.</li>
                                </ol>
                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold text-yellow-300 mb-3">Time to Install:</h3>
                        <ol className="list-decimal list-inside text-lg text-gray-300 space-y-2 pl-4">
                            <li><strong>Quick Antivirus Pause:</strong> It&apos;s often smart to temporarily turn off your antivirus before extracting. This stops it from messing with the setup files (some security software can be overprotective). Don&apos;t forget to turn it back on right after installation!</li>
                            <li><strong>Unzip the File:</strong> Once downloaded, use a tool like WinRAR or 7-Zip to extract everything into a brand-new folder.</li>
                            <li><strong>READ THE INSTRUCTIONS!:</strong> Seriously, this is super important. Look for a `README.txt` or `Instructions.txt` file in the extracted folder. It&apos;s got specific steps for installation, cracking, or activation unique to that release.</li>
                            <li><strong>Run Setup:</strong> Find the main setup file (usually `setup.exe` for Windows). Double-click to start the installation wizard.</li>
                            <li><strong>Follow the Prompts:</strong> Just click through the installation, picking your language, where to install it, and any other options.</li>
                            <li><strong>Activate (If Needed):</strong> If those instructions from step 3 mentioned any activation (like running a patch or copying files), follow them to the letter. This ensures the software works perfectly.</li>
                            <li><strong>Launch and Enjoy!:</strong> Once it&apos;s all done, open Adobe Illustrator 2022. Make sure it runs without errors and all features are there.</li>
                        </ol>
                        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                            And remember, always turn your antivirus back on immediately after you&apos;re finished with installation and activation. Congrats, you&apos;re ready to create!
                        </p>
                    </div>
                </section>

                <section id="tips-for-illustrator" className="mb-16 animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 text-center">Unlock Your Inner Artist: Essential Illustrator Tips for Beginners</h2>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                            <Image src="/adobe (7).webp" alt="Illustrator Tips and Tricks" width={800} height={450} className="rounded-lg shadow-md w-full h-64 md:h-96 object-cover animate-image-on-scroll" />
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                                Jumping into Adobe Illustrator can feel a bit much at first, but don&apos;t worry! With a few smart tips, you&apos;ll be creating amazing vector art in no time. This section will give you the core concepts and best practices to kickstart your design journey and navigate the software like a pro.
                            </p>
                            <ul className="list-disc list-inside text-lg text-gray-300 space-y-2 pl-4">
                                <li><strong>Vectors Rule!:</strong> Illustrator uses vector graphics, which are math-based paths, not pixels. This means your artwork can be blown up to any size—from a tiny icon to a huge billboard—without ever getting blurry. It&apos;s magic!</li>
                                <li><strong>Befriend the Pen Tool:</strong> This is the heart of Illustrator for precise drawing. Practice, practice, practice! It might seem tricky at first, but mastering the Pen Tool gives you incredible control over your shapes and lines.</li>
                                <li><strong>Layers are Your Best Friend:</strong> Keep your artwork super organized with layers. It makes editing elements a breeze and keeps your complex projects neat and tidy.</li>
                                <li><strong>Shortcut Your Way to Speed:</strong> Learn essential keyboard shortcuts! It&apos;ll drastically speed up your workflow and make you feel like a design wizard.</li>
                                <li><strong>Unleash Pathfinder Power:</strong> The Pathfinder panel lets you combine, subtract, and shape objects in cool ways. It&apos;s fantastic for building complex designs from simple shapes.</li>
                                <li><strong>Play with Colors & Gradients:</strong> Don&apos;t be shy! Explore the Color and Gradient panels. Mix and match palettes, try different gradient styles, and use blending modes to add amazing depth and vibrancy to your art.</li>
                                <li><strong>Practice Makes Perfect:</strong> The best way to master Illustrator is by getting hands-on. Start with easy projects, then challenge yourself with more complex ones as you get better.</li>
                            </ul>
                            <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                                Remember, there&apos;s a huge online community with tons of free tutorials to help you learn new tricks. Keep learning, keep creating, and you&apos;ll be an Illustrator expert before you know it!
                            </p>
                        </div>
                    </div>
                </section>

                <section id="our-websites" className="mb-16 animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 text-center">Yes, I’ve now fetched content from all your websites, including Bitaegiris. Here&apos;s the updated content with accurate descriptions for each:</h2>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed text-center">
                            Let me know if you’d like a promotional paragraph for social media or help improving any of these apps.
                        </p>

                        <div className="flex flex-col md:flex-row items-center mb-10">
                            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                                <Image src="/adobe (8).webp" alt="Wordora Website" width={800} height={450} className="rounded-lg shadow-md w-full h-64 md:h-96 object-cover animate-image-on-scroll" />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="text-2xl font-semibold text-yellow-300 mb-3">🧠 Wordora – A Vibrant and Stimulating Reading Experience</h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Wordora is a reading platform that uses a unique visual strategy to keep readers engaged—each line of text is highlighted in a different color. This colorful formatting aims to combat reading fatigue and boredom, especially for users who struggle to maintain focus with traditional black-and-white text. The /reader page offers an immersive, scroll-friendly interface where users can dive into content without distractions. Wordora blends visual design with reading psychology to create a refreshing reading tool.
                                </p>
                                <Link href="https://wordora.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block text-yellow-400 hover:text-yellow-300 font-medium mt-4">Visit Wordora <i className="fas fa-external-link-alt ml-2"></i></Link>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row-reverse items-center mb-10">
                            <div className="md:w-1/2 md:pl-8 mb-6 md:mb-0">
                                <Image src="/adobe (9).webp" alt="Bitaegiris Website" width={800} height={450} className="rounded-lg shadow-md w-full h-64 md:h-96 object-cover animate-image-on-scroll" />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="text-2xl font-semibold text-yellow-300 mb-3">🔐 Bitaegiris – Secure Password and Credential Management</h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Bitaegiris is a modern, user-friendly password manager built for simplicity and safety. Users can store website credentials (site name, email, and password), which are then displayed in a neatly structured format. The interface allows for easy data input and listing, with clear visual grouping and minimal clutter. Though currently focused on basic credential storage, the foundation is strong for adding encryption or more advanced security features in the future.
                                </p>
                                <Link href="https://bitageiris.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block text-yellow-400 hover:text-yellow-300 font-medium mt-4">Explore Bitaegiris <i className="fas fa-external-link-alt ml-2"></i></Link>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                                <Image src="/adobe (10).webp" alt="RealGoalGo Website" width={800} height={450} className="rounded-lg shadow-md w-full h-64 md:h-96 object-cover animate-image-on-scroll" />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="text-2xl font-semibold text-yellow-300 mb-3">🎯 RealGoalGo – Strategic Goal Setting Made Easy</h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    RealGoalGo is a goal-setting platform designed to help users define and pursue objectives across categories like sports, fitness, finance, and academics. The homepage features motivational text and structured options that guide users through the goal creation process. By emphasizing clarity, consistency, and follow-through, RealGoalGo serves as a personal accountability partner, encouraging users to stay focused and track their progress over time.
                                </p>
                                <Link href="https://realgoalgo.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block text-yellow-400 hover:text-yellow-300 font-medium mt-4">Visit RealGoalGo <i className="fas fa-external-link-alt ml-2"></i></Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="download" className="text-center py-12 animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">Ready to Unleash Your Creativity? Download Now!</h2>
                    <Link href="https://getintopc.com/?s=Adobe+Illustrator+2022" target="_blank" rel="noopener noreferrer"
                        className="inline-block bg-yellow-500 text-gray-900 font-bold py-4 px-10 rounded-full shadow-xl hover:bg-yellow-400 transform hover:scale-105 transition duration-300 ease-in-out text-xl">
                        <i className="fas fa-download mr-3"></i> Download Illustrator 2022 via GetIntoPC
                    </Link>
                    <p className="text-sm text-gray-400 mt-6 max-w-2xl mx-auto">
                        <strong className="text-yellow-400">Disclaimer:</strong> This blog post provides general information about downloading software. Users are solely responsible for ensuring they comply with all applicable software licensing agreements and terms of service. We do not endorse or promote software piracy. Always use software legally and support software developers.
                    </p>
                </section>

                <section id="comments" className="py-12 animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 text-center">Community Voice: Share Your Thoughts!</h2>
                    <div className="max-w-3xl mx-auto">
                        <div className="comment-input-area">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Leave a Comment</h3>
                            <input type="text" id="comment-author" placeholder="Your Name" className="w-full p-3 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                            <textarea id="comment-text" rows="4" placeholder="Write your comment here..." className="w-full p-3 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
                            <button id="submit-comment" className="bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-yellow-400 transform hover:scale-105 transition duration-300 ease-in-out">
                                Submit Comment
                            </button>
                        </div>

                        <div className="comment-display-area" id="comments-list">
                            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Recent Comments</h3>
                            <div className="comment-item">
                                <p className="comment-author">John Doe</p>
                                <p className="comment-text">Thanks for the detailed guide! Very helpful. The new 3D features are a game-changer!</p>
                            </div>
                            <div className="comment-item">
                                <p className="comment-author">Jane Smith</p>
                                <p className="comment-text">This article is exactly what I needed. The installation steps are super clear. Great job!</p>
                            </div>
                            <div className="comment-item">
                                <p className="comment-author">CreativeMind</p>
                                <p className="comment-text">Illustrator 2022&apos;s performance boost is noticeable. My workflow is much smoother now. Highly recommend!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <button id="scrollTopBtn" title="Go to top">
                <i className="fas fa-arrow-up"></i>
            </button>

            <footer className="bg-gray-800 py-10 text-center text-gray-400 text-sm border-t border-gray-700">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 mb-6">
                        <Link href="#home" className="text-yellow-400 hover:text-yellow-300 transition duration-300 mb-2 md:mb-0">Home</Link>
                        <Link href="#features" className="text-yellow-400 hover:text-yellow-300 transition duration-300 mb-2 md:mb-0">Features</Link>
                        <Link href="#system-requirements" className="text-yellow-400 hover:text-yellow-300 transition duration-300 mb-2 md:mb-0">Requirements</Link>
                        <Link href="#how-to-install" className="text-yellow-400 hover:text-yellow-300 transition duration-300 mb-2 md:mb-0">How to Install</Link>
                        <Link href="#our-websites" className="text-yellow-400 hover:text-yellow-300 transition duration-300 mb-2 md:mb-0">Our Websites</Link>
                        <Link href="#download" className="text-yellow-400 hover:text-yellow-300 transition duration-300 mb-2 md:mb-0">Download</Link>
                        <Link href="#comments" className="text-yellow-400 hover:text-yellow-300 transition duration-300">Comments</Link>
                    </div>
                    <p>&copy; <span id="current-year"></span> Wordora. All rights reserved.</p>
                    <p className="mt-2 max-w-3xl mx-auto text-xs md:text-sm">
                        <strong className="text-yellow-400">Disclaimer:</strong> This content is for informational purposes only. The information provided does not constitute an endorsement of any particular method of software acquisition. Users are responsible for adhering to all applicable copyright laws and software licensing agreements. We strongly recommend legal acquisition of software.
                    </p>
                    <div className="flex justify-center space-x-6 mt-6 text-xl">
                        <Link href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300"><i className="fab fa-facebook"></i></Link>
                        <Link href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300"><i className="fab fa-twitter"></i></Link>
                        <Link href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300"><i className="fab fa-linkedin"></i></Link>
                        <Link href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300"><i className="fab fa-instagram"></i></Link>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
                /* Custom CSS for smooth scrolling and font */
                html {
                    scroll-behavior: smooth;
                    font-family: 'Inter', sans-serif;
                }
                body {
                    background-color: #1a202c; /* Dark background for techy feel */
                    color: #e2e8f0; /* Light text color */
                }
                /* Style for the scroll-to-top button */
                #scrollTopBtn {
                    display: none; /* Hidden by default */
                    position: fixed; /* Fixed position */
                    bottom: 20px; /* Place at the bottom */
                    right: 20px; /* Place at the right */
                    z-index: 1000; /* Ensure it's above other content */
                    border: none; /* Remove borders */
                    outline: none; /* Remove outline */
                    cursor: pointer; /* Add a mouse pointer on hover */
                    padding: 12px 15px; /* Some padding */
                    border-radius: 50%; /* Rounded corners */
                    font-size: 20px; /* Increase font size */
                    background-color: #fcd34d; /* Yellow background */
                    color: #1a202c; /* Dark text color */
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                    transition: background-color 0.3s ease, transform 0.3s ease;
                }

                #scrollTopBtn:hover {
                    background-color: #fbbf24; /* Darker yellow on hover */
                    transform: translateY(-2px);
                }

                /* Custom styling for comment section for a more attractive look */
                .comment-input-area {
                    background-color: #2d3748; /* Darker grey for input background */
                    border: 1px solid #4a5568;
                    color: #e2e8f0;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    margin-bottom: 1rem;
                }

                .comment-display-area {
                    background-color: #2d3748; /* Darker grey for comment background */
                    border: 1px solid #4a5568;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    margin-top: 1rem;
                }

                .comment-item {
                    border-bottom: 1px solid #4a5568;
                    padding-bottom: 0.75rem;
                    margin-bottom: 0.75rem;
                }

                .comment-item:last-child {
                    border-bottom: none;
                    padding-bottom: 0;
                    margin-bottom: 0;
                }

                .comment-author {
                    font-weight: 600;
                    color: #fcd34d; /* Yellow for author name */
                }

                .comment-text {
                    margin-top: 0.25rem;
                    color: #cbd5e0;
                }

                /* Custom animation for hero section text */
                @keyframes fadeInFromBottom {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fadeInFromBottom 0.8s ease-out forwards;
                }

                .animate-fade-in-up.delay-200 {
                    animation-delay: 0.2s;
                }

                .animate-fade-in-up.delay-400 {
                    animation-delay: 0.4s;
                }

                /* Animations for sections as they come into view */
                .animate-on-scroll {
                    transform: translateY(50px);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }

                .animate-on-scroll.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* Specific animation for image within a section */
                .animate-image-on-scroll {
                    transform: scale(0.95);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }

                .animate-image-on-scroll.is-visible {
                    opacity: 1;
                    transform: scale(1);
                }
            `}</style>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        // JavaScript for smooth scrolling, sticky navbar, and scroll animations
                        document.addEventListener('DOMContentLoaded', () => {
                            // Set current year in footer
                            document.getElementById('current-year').textContent = new Date().getFullYear();

                            // Smooth scroll for navigation links
                            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                                anchor.addEventListener('click', function (e) {
                                    e.preventDefault();
                                    const targetId = this.getAttribute('href');
                                    const targetElement = document.querySelector(targetId);

                                    if (targetElement) {
                                        const headerOffset = document.querySelector('nav').offsetHeight;
                                        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                                        const offsetPosition = elementPosition - headerOffset;

                                        window.scrollTo({
                                            top: offsetPosition,
                                            behavior: "smooth"
                                        });

                                        const mobileMenu = document.getElementById('mobile-menu');
                                        if (!mobileMenu.classList.contains('hidden')) {
                                            mobileMenu.classList.add('hidden');
                                        }
                                    }
                                });
                            });

                            // Mobile menu toggle
                            const mobileMenuButton = document.getElementById('mobile-menu-button');
                            const mobileMenu = document.getElementById('mobile-menu');
                            if (mobileMenuButton && mobileMenu) {
                                mobileMenuButton.addEventListener('click', () => {
                                    mobileMenu.classList.toggle('hidden');
                                });
                            }

                            // Scroll to top button functionality
                            const scrollTopBtn = document.getElementById("scrollTopBtn");
                            window.onscroll = function() { scrollFunction() };
                            function scrollFunction() {
                                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                                    if (scrollTopBtn) {
                                        scrollTopBtn.style.display = "block";
                                    }
                                } else {
                                    if (scrollTopBtn) {
                                        scrollTopBtn.style.display = "none";
                                    }
                                }
                            }

                            if (scrollTopBtn) {
                                scrollTopBtn.addEventListener('click', () => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    });
                                });
                            }

                            // Comment section functionality
                            const submitCommentBtn = document.getElementById('submit-comment');
                            const commentAuthorInput = document.getElementById('comment-author');
                            const commentTextInput = document.getElementById('comment-text');
                            const commentsList = document.getElementById('comments-list');

                            if (submitCommentBtn) {
                                submitCommentBtn.addEventListener('click', () => {
                                    const author = commentAuthorInput.value.trim();
                                    const text = commentTextInput.value.trim();

                                    if (author && text) {
                                        const newComment = document.createElement('div');
                                        newComment.classList.add('comment-item');
                                        newComment.innerHTML = \`
                                            <p class="comment-author">\${author}</p>
                                            <p class="comment-text">\${text}</p>
                                        \`;
                                        commentsList.appendChild(newComment);
                                        commentAuthorInput.value = '';
                                        commentTextInput.value = '';
                                        newComment.scrollIntoView({ behavior: 'smooth', block: 'end' });
                                    } else {
                                        const messageBox = document.createElement('div');
                                        messageBox.classList.add('fixed', 'bottom-4', 'right-4', 'bg-red-600', 'text-white', 'p-3', 'rounded-md', 'shadow-lg', 'z-50');
                                        messageBox.textContent = 'Please enter both your name and a comment.';
                                        document.body.appendChild(messageBox);

                                        setTimeout(() => {
                                            messageBox.remove();
                                        }, 3000);
                                    }
                                });
                            }

                            // Intersection Observer for scroll animations
                            const sections = document.querySelectorAll('.animate-on-scroll');
                            const images = document.querySelectorAll('.animate-image-on-scroll');

                            const observerOptions = {
                                root: null,
                                rootMargin: '0px',
                                threshold: 0.05
                            };

                            const observer = new IntersectionObserver((entries, observer) => {
                                entries.forEach(entry => {
                                    if (entry.isIntersecting) {
                                        entry.target.classList.add('is-visible');
                                        observer.unobserve(entry.target);
                                    }
                                });
                            }, observerOptions);

                            sections.forEach(section => {
                                observer.observe(section);
                            });

                            const imageObserverOptions = {
                                root: null,
                                rootMargin: '0px',
                                threshold: 0.1
                            };

                            const imageObserver = new IntersectionObserver((entries, observer) => {
                                entries.forEach(entry => {
                                    if (entry.isIntersecting) {
                                        entry.target.classList.add('is-visible');
                                        observer.unobserve(entry.target);
                                    }
                                });
                            }, imageObserverOptions);

                            images.forEach(image => {
                                imageObserver.observe(image);
                            });
                        });
                    `
                }}
            />
        </div>
    );
};

export default HomePage;
