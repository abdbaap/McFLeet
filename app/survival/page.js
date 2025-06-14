import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "../AnimateOnScroll";

const Page = () => {
  return (
    <div className="survival flex flex-col text-center py-8 my-8 items-center gap-2">
    <span className="text-3xl font-bold bg-blue-900 text-white -skew-1 mx-4 p-4 my-4 rounded-xl"><AnimateOnScroll animationClass="opacity-0 translate-x-[100px]" // Example animation class
          visibleClass="opacity-100 translate-x-0"     // Example visible class
          duration="duration-700"
         > Extensive Survival Mode</AnimateOnScroll> </span>
      <div className="flex flex-col justify-center w-[100%] items-center gap-8">

        {/* Section 1: Lag-free Performance and Introduction */}
        <div className="sec1 flex-col-reverse shadow-xl md:shadow-sm hover:shadow-xl bg-gray-50 border-r-8 px-8 border-r-yellow-300 rounded-xl w-[80%] flex  sm:flex-row justify-evenly items-center gap-8">
       <AnimateOnScroll  animationClass="fade-up-hidden"
          visibleClass="fade-up-visible"
          duration="duration-900"
         >  <span>
            Welcome to MCFleet's truly extensive Survival Mode! Prepare for an unparalleled Minecraft adventure with our state-of-the-art server infrastructure, specifically engineered to provide a lag-free performance. You'll experience incredibly smooth gameplay and minimal network issues, ensuring your building, exploring, and thriving are never interrupted. Our dedicated setup guarantees a stable and consistently enjoyable environment for every single player, allowing you to immerse yourself fully in the world.
          </span></AnimateOnScroll> 
          <Image src="/survival2.jpg" width={400} height={400} alt="survival overview" className="rounded-xl"></Image>
        </div>

        {/* Section 2: Shop and Auction System */}
        <div className="sec1 flex-col-reverse shadow-xl md:shadow-sm hover:shadow-xl bg-gray-50 border-l-8 px-8 border-l-red-600 rounded-xl w-[80%] flex  sm:flex-row-reverse justify-evenly items-center gap-8">
       <AnimateOnScroll  animationClass="fade-up-hidden"
          visibleClass="fade-up-visible"
          duration="duration-900"
         >  <span>
            Dive deep into MCFleet's dynamic and player-driven economy. Our comprehensive shop allows you to effortlessly purchase a wide array of items, enhancing your gameplay and giving you an edge in survival. When you've gathered valuable resources, you can easily sell them for in-game currency. For those looking to secure the best deals or offload rare finds, our robust auction system is perfect. Place your bids on coveted items or set up your own auctions, fostering a vibrant and engaging marketplace driven by the community.
          </span></AnimateOnScroll> 
          <Image src="/survival3.jpg" width={400} height={400} alt="shop and auction" className="rounded-xl"></Image>
        </div>

        {/* Section 3: AFK Zone and Shards */}
        <div className="sec1 flex-col-reverse shadow-xl md:shadow-sm hover:shadow-xl bg-gray-50 border-r-8 px-8 border-r-blue-600 rounded-xl w-[80%] flex  sm:flex-row justify-evenly items-center gap-8">
       <AnimateOnScroll  animationClass="fade-up-hidden"
          visibleClass="fade-up-visible"
          duration="duration-900"
         >  <span>
            Maximize your in-game efficiency with MCFleet's thoughtfully designed features. Take advantage of our dedicated AFK (Away From Keyboard) zone, a safe area where you can remain connected and productive even when you need a break from active gameplay. As you explore the vast survival world, keep an eye out for mysterious shards. These unique collectibles can be traded for valuable spawners, offering a significant boost to your resource gathering and mob farming endeavors, helping you progress faster.
          </span></AnimateOnScroll> 
          <Image src="/survival4.jpg" width={400} height={400} alt="afk zone and shards" className="rounded-xl"></Image>
        </div>

        {/* Section 4: Teleport Functions and Homes */}
        <div className="sec1 flex-col-reverse shadow-xl md:shadow-sm hover:shadow-xl bg-gray-50 border-l-8 px-8 border-l-green-600 rounded-xl w-[80%] flex sm:flex-row-reverse justify-evenly items-center gap-8">
       <AnimateOnScroll  animationClass="fade-up-hidden"
          visibleClass="fade-up-visible"
          duration="duration-900"
         >  <span>
            Navigating MCFleet's expansive world is incredibly easy with our comprehensive suite of teleport functions. Instantly jump to new, undiscovered areas using the /rtp command for random teleportation, perfect for finding fresh resources or scouting out new building spots. For your ultimate convenience, you can also set multiple homes at your preferred locations and teleport back to them whenever you desire, ensuring quick and efficient access to your bases, farms, or any other important points.
          </span></AnimateOnScroll> 
          <Image src="/survival5.jpg" width={400} height={400} alt="teleport and homes" className="rounded-xl"></Image>
        </div>

        {/* Section 5: PvP Arena, Teams, and Leaderboards (New Section 1) */}
        <div className="sec1 flex-col-reverse shadow-xl md:shadow-sm hover:shadow-xl bg-gray-50 border-r-8 px-8 border-r-yellow-300 rounded-xl w-[80%] flex  sm:flex-row justify-evenly items-center gap-8">
       <AnimateOnScroll  animationClass="fade-up-hidden"
          visibleClass="fade-up-visible"
          duration="duration-900"
         >  <span>
            Unleash your competitive spirit and engage in thrilling combat within our dedicated PvP arena. Test your skills against other players in intense battles, proving your mastery in player-versus-player combat. You can also form powerful teams with your friends to conquer challenges together, strategize, and climb the ranks. Our dynamic leaderboards, featuring statistics on kills, team deaths, and accumulated money, update rapidly to showcase the top players and teams, fueling healthy competition.
          </span></AnimateOnScroll> 
          <Image src="/survival6.jpg" width={400} height={400} alt="pvp and leaderboards" className="rounded-xl"></Image>
        </div>

        {/* Section 6: Grind, Build, Earn, PvP Loop (New Section 2) */}
        <div className="sec1 flex-col-reverse shadow-xl md:shadow-sm hover:shadow-xl bg-gray-50 border-l-8 px-8 border-l-red-600 rounded-xl w-[80%] flex  sm:flex-row-reverse justify-evenly items-center gap-8">
       <AnimateOnScroll  animationClass="fade-up-hidden"
          visibleClass="fade-up-visible"
          duration="duration-900"
         >  <span>
            MCFleet's Survival offers a truly holistic and rewarding experience. Here, you're encouraged to grind for valuable resources, meticulously build intricate houses and expansive bases, and earn money through a myriad of in-game activities. Beyond the peaceful aspects, you can also engage in exhilarating PvP battles, making it a well-rounded and exciting environment. It's a world where your creativity knows no bounds, where hard work is rewarded, and where every type of player can find their perfect adventure and carve out their unique legacy.
          </span></AnimateOnScroll> 
          <Image src="/survival1.jpg" width={400} height={400} alt="grind build earn pvp" className="rounded-xl"></Image>
        </div>
 <Link href="/"  className="text-xl bg-blue-800 text-white font-bold px-8 rounded-4xl py-4">Start Adventure Now!</Link>

      </div>
    </div>
  );
};

export default Page;
