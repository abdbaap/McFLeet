import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "../AnimateOnScroll";

const Page = () => {
  return (
    <div className="survival flex flex-col text-center py-8 my-8 items-center gap-2">
    <span className="text-3xl font-bold bg-blue-900 text-white -skew-1 mx-4 p-4 my-4 rounded-xl"> <AnimateOnScroll> MCFleet Arcade:  Your Ultimate Mini-Game Hub!</AnimateOnScroll></span>
      <div className="flex flex-col justify-center w-[100%] items-center gap-8">

        {/* Section 1: TNT Run & Block Party (Color) */}
        <div className="sec1 flex-col-reverse shadow-xl md:shadow-sm hover:shadow-xl bg-gray-50 border-r-8 px-8 border-r-yellow-300 rounded-xl w-[80%] flex sm:flex-row justify-evenly items-center gap-8">
          <AnimateOnScroll animationClass="scale-hidden" visibleClass="scale-visible" duration="duration-800"><span>
            Step into the exhilarating world of MCFleet's Arcade, starting with TNT Run! Experience the thrill as blocks disappear beneath your feet. Race against others to be the last player standing on a collapsing arena, demanding quick reflexes and strategic movement. Then, test your speed in Block Party. When a specific color block appears in your inventory, quickly find and stand on a matching block before time runs out and the wrong colors vanish, pushing you to react in an instant.
          </span></AnimateOnScroll>
          <Image src="/arcade1.jpg" width={400} height={400} alt="TNT Run and Block Party" className="rounded-xl"></Image>
        </div>

        {/* Section 2: Temple Run & Block Party (Capture) */}
        <div className="sec1 flex-col-reverse shadow-xl md:shadow-sm hover:shadow-xl bg-gray-50 border-l-8 px-8 border-l-red-600 rounded-xl w-[80%] flex sm:flex-row-reverse justify-evenly items-center gap-8">
          <AnimateOnScroll animationClass="scale-hidden" visibleClass="scale-visible" duration="duration-800"><span>
            Challenge your parkour skills in our thrilling Temple Run. Race through intricate courses, navigate treacherous obstacles, and strive to be the first to reach the finish line, proving your agility and precision. Next, engage in strategic conquest with Block Party (Capture). Claim your territory by expanding your color across the map. The key is strategic placement, as you must claim blocks adjacent to those you have already secured, leading to intense territorial battles.
          </span></AnimateOnScroll>
          <Image src="/arcade2.jpg" width={400} height={400} alt="Temple Run and Block Party Capture" className="rounded-xl"></Image>
        </div>

        {/* Section 3: Quake & Prop Hunt */}
        <div className="sec1 flex-col-reverse shadow-xl md:shadow-sm hover:shadow-xl bg-gray-50 border-r-8 px-8 border-r-blue-600 rounded-xl w-[80%] flex sm:flex-row justify-evenly items-center gap-8">
          <AnimateOnScroll animationClass="scale-hidden" visibleClass="scale-visible" duration="duration-800"><span>
            Prepare for high-octane action in Quake, our fast-paced shooting game where quick reflexes and sharp aim are your best assets. Dominate the arena with precise shots and strategic movement. If you prefer stealth and cunning, Prop Hunt is your game. Transform into various blocks and cleverly hide within the environment, blending in perfectly. Evade the seekers who are desperately trying to find you before time runs out, making every hiding spot a thrilling gamble.
          </span></AnimateOnScroll>
          <Image src="/arcade3.jpg" height={400} width={400} alt="Quake and Prop Hunt" className="rounded-xl"></Image>
        </div>

        {/* Section 4: TNT Tag & Hide and Seek */}
        <div className="sec1 flex-col-reverse shadow-xl md:shadow-sm hover:shadow-xl bg-gray-50 border-l-8 px-8 border-l-green-600 rounded-xl w-[80%] flex sm:flex-row-reverse justify-evenly items-center gap-8">
          <AnimateOnScroll animationClass="scale-hidden" visibleClass="scale-visible" duration="duration-800"><span>
            Experience the chaotic fun of TNT Tag, a thrilling game of hot potato! One player is tagged with a TNT, and they must quickly tag another player to pass it on before it explodes. The last player standing wins in this explosive game of chase. For a more classic challenge, join our Hide and Seek. Hide from the seeker in the vast and intricate arena, utilizing every corner and shadow, or take on the role of the seeker and track down your opponents to claim victory.
          </span></AnimateOnScroll>
          <Image src="/arcade4.jpg" height={400} width={400} alt="TNT Tag and Hide and Seek" className="rounded-xl"></Image>
        </div>

        {/* Section 5: Splago */}
        <div className="sec1 flex-col-reverse shadow-xl md:shadow-sm hover:shadow-xl bg-gray-50 border-r-8 px-8 border-r-yellow-300 rounded-xl w-[80%] flex sm:flex-row justify-evenly items-center gap-8">
          <AnimateOnScroll animationClass="scale-hidden" visibleClass="scale-visible" duration="duration-800"><span>
            Conclude your arcade adventure with Splago, a unique and exciting challenge. In this game, blocks randomly appear above players. Your goal is to quickly reach the safe zone beneath them, as snowballs fall from the sky. Get hit by a snowball, and you are eliminated from the game. This tests your quick thinking and spatial awareness, making every moment a race against the clock and the falling snowballs. MCFleet's Arcade offers a game for every mood and skill level, ensuring fresh and engaging experiences every time you play.
          </span></AnimateOnScroll>
          <Image src="/arcade5.jpg" height={400} width={400} alt="Splago" className="rounded-xl"></Image>
        </div>

        {/* Section 6: Removed as per instructions */}
        {/* <div className="sec1 flex-col-reverse shadow-xl md:shadow-sm hover:shadow-xl bg-gray-50 border-l-8 px-8 border-l-red-600 rounded-xl w-[80%] flex sm:flex-row-reverse justify-evenly items-center gap-8">
             This section has been removed as per your request.
           </div> */}

        <Link href="/" className="text-xl bg-blue-800 text-white font-bold px-8 rounded-full py-4">Start Adventure Now!</Link>

      </div>
    </div>
  );
};

export default Page;