import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "../AnimateOnScroll";

const Page = () => {
  return (
    <div className="survival flex flex-col text-center py-8 my-8 items-center gap-2">
    <span className="text-3xl font-bold bg-blue-900 text-white -skew-1 mx-4 p-4 my-4 rounded-xl"> <AnimateOnScroll animationClass="scale-hidden"
          visibleClass="scale-visible"
          duration="duration-800"
          >MCFleet Bedwars: Defend, Destroy, Conquer!</AnimateOnScroll></span>
      <div className="flex flex-col justify-center w-[100%] items-center gap-8">
    {/* Section 1: Introduction to Bedwars and Core Gameplay */}
        <div className="sec1 flex-col-reverse shadow-xl md:shadow-sm hover:shadow-xl bg-gray-50 border-r-8 px-8 border-r-yellow-300 rounded-xl w-[80%] flex sm:flex-row justify-evenly items-center gap-8">
        <AnimateOnScroll animationClass="slide-left-hidden"
          visibleClass="slide-left-visible"
          duration="duration-700"
        >  <span>
            Welcome to MCFleet&apos;s thrilling Bedwars experience! Prepare for intense team&ndash;based combat where your ultimate goal is to protect your own team&apos;s bed while strategically destroying the beds of your opponents. Eliminate all members of a team after their bed is gone to secure victory. This popular game mode combines strategic planning, resource gathering, and fast&ndash;paced player versus player action, ensuring every match is a unique and exciting challenge.
          </span></AnimateOnScroll>
          <Image src="/bedwars1.jpg" width={400} height={400} alt="Bedwars Overview" className="rounded-xl"></Image>
        </div>

        {/* Section 2: Diverse Game Modes (1v1 to 4v4) */}
        <div className="sec1 flex-col-reverse shadow-xl md:shadow-sm hover:shadow-xl bg-gray-50 border-l-8 px-8 border-l-red-600 rounded-xl w-[80%] flex sm:flex-row-reverse justify-evenly items-center gap-8">
        <AnimateOnScroll animationClass="slide-left-hidden"
          visibleClass="slide-left-visible"
          duration="duration-700"
        >  <span>
            MCFleet&apos;s Bedwars offers a variety of game modes to suit every playstyle, from solo battles to large&ndash;scale team engagements. Challenge your individual skills in 1v1 matches, or team up with a partner for tactical 2v2 duos. For larger coordinated assaults, jump into 3v3 or even massive 4v4 team battles. Each mode requires different strategies, encouraging you to adapt and master various team compositions and individual combat techniques to emerge victorious across all scenarios.
          </span></AnimateOnScroll>
          <Image src="/bedwars2.jpg" width={400} height={400} alt="Bedwars Game Modes" className="rounded-xl"></Image>
        </div>

        {/* Section 3: Strategic Bed Protection and Destruction */}
        <div className="sec1 flex-col-reverse shadow-xl md:shadow-sm hover:shadow-xl bg-gray-50 border-r-8 px-8 border-r-blue-600 rounded-xl w-[80%] flex sm:flex-row justify-evenly items-center gap-8">
        <AnimateOnScroll animationClass="slide-left-hidden"
          visibleClass="slide-left-visible"
          duration="duration-700"
        >  <span>
            The heart of Bedwars lies in the defense and destruction of beds. Your team&apos;s bed is your lifeline; as long as it exists, you can respawn. Protect it with a variety of blocks and traps, building impenetrable defenses that can withstand enemy assaults. Conversely, your mission is to infiltrate enemy islands, break through their defenses, and destroy their beds. Once a bed is shattered, that team&apos;s players cannot respawn, making them vulnerable to final elimination. Master both defense and offense for true dominance.
          </span></AnimateOnScroll>
          <Image src="/bedwars3.jpg" width={400} height={400} alt="Bed Protection" className="rounded-xl"></Image>
        </div>

        {/* Section 4: Powerful Upgrades with Diamonds */}
        <div className="sec1 flex-col-reverse shadow-xl md:shadow-sm hover:shadow-xl bg-gray-50 border-l-8 px-8 border-l-green-600 rounded-xl w-[80%] flex sm:flex-row-reverse justify-evenly items-center gap-8">
        <AnimateOnScroll animationClass="slide-left-hidden"
          visibleClass="slide-left-visible"
          duration="duration-700"
        >  <span>
            Enhance your gameplay and gain a significant advantage through powerful upgrades. As you collect diamonds scattered across the map, you can exchange them for crucial team upgrades that boost your abilities. These include improved armor, sharper weapons, stronger tools, and even enhancements for your base generators. Strategic use of diamonds is key to outfitting your team, fortifying your defenses, and overwhelming your opponents with superior equipment and capabilities.
          </span></AnimateOnScroll>
          <Image src="/bedwars4.jpg" height={400} width={400} alt="Diamond Upgrades" className="rounded-xl"></Image>
        </div>

        {/* Section 5: Leaderboards and Player Stats */}
        <div className="sec1 flex-col-reverse shadow-xl md:shadow-sm hover:shadow-xl bg-gray-50 border-r-8 px-8 border-r-yellow-300 rounded-xl w-[80%] flex sm:flex-row justify-evenly items-center gap-8">
        <AnimateOnScroll animationClass="slide-left-hidden"
          visibleClass="slide-left-visible"
          duration="duration-700"
        >  <span>
            Track your progress and compare your skills against the best players on MCFleet&apos;s comprehensive Bedwars leaderboards. Our detailed stats system allows you to view individual performance metrics, including wins, eliminations, beds destroyed, and more. Compete for the top spot and see where you rank among the community. These leaderboards foster a vibrant competitive environment, motivating players to refine their strategies and climb their way to becoming a Bedwars legend.
          </span></AnimateOnScroll>
          <Image src="/bedwars5.jpg" height={400} width={400} alt="Leaderboards and Stats" className="rounded-xl"></Image>
        </div>

        {/* Section 6 (formerly Arcade Games section) now integrated or repurposed for Bedwars */}
        {/* I've re-purposed the last section to describe the overall Bedwars loop/experience */}
        <div className="sec1 flex-col-reverse shadow-xl md:shadow-sm hover:shadow-xl bg-gray-50 border-l-8 px-8 border-l-red-600 rounded-xl w-[80%] flex sm:flex-row-reverse justify-evenly items-center gap-8">
        <AnimateOnScroll animationClass="slide-left-hidden"
          visibleClass="slide-left-visible"
          duration="duration-700"
        >  <span>
            MCFleet&apos;s Bedwars delivers a dynamic and immersive experience that constantly challenges your teamwork and individual prowess. From the initial rush for resources and strategic bridge building, to the tension of base defense and the thrill of an enemy bed rush, every moment is packed with action. Coordinate with your team, gather resources, upgrade your gear, protect your bed at all costs, and lead your team to victory by eliminating all opposition. Join the battle and create your legacy in the ultimate Bedwars arena!
          </span></AnimateOnScroll>
          <Image src="/bedwars6.jpg" height={400} width={400} alt="Bedwars Gameplay Loop" className="rounded-xl"></Image>
        </div>

        <Link href="/" className="text-xl bg-blue-800 text-white font-bold px-8 rounded-full py-4">Start Your Bedwars Conquest Now!</Link>

      </div>
    </div>
  );
};

export default Page;
