import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import Latestbullietins from "./latestbullietins";
import Ip from "./ip";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Home() {
  // JavaScript string literals should still use regular quotes as they are part of JS syntax.
  // Converting these to &quot; or &apos; would cause syntax errors.
  let features=[
  {
    "gameMode": "bedwars",
    "heading": "Conquer the Sky: Bedwars Unleashed",
    "paragraph": "Prepare for intense, tactical showdowns in MCFleet's optimized Bedwars arenas. Join your squad on sky-high islands, strategically gathering resources, building impenetrable defenses around your bed, and launching decisive strikes against enemy strongholds. Our low-ping environment ensures every bridge you build, every diamond you collect, and every final kill is executed with precision, letting your strategy shine. Dominate the skies, protect your core, and lead your team to victory in the most fluid Bedwars experience tailored for Indian players.",
    "imageUrl": "/bedwarscard.jpg"
  },
  {
    "gameMode": "survival",
    "heading": "Forge Your Saga: Ultimate Survival",
    "paragraph": "Embark on an expansive, lag-free Survival journey on MCFleet. Our world offers boundless opportunities to explore vast biomes, gather rare resources, and construct your dream base without the frustration of network issues. Whether you're battling menacing mobs, delving into treacherous caves, or collaborating with fellow players to build monumental projects, our stable server ensures a seamless and immersive adventure. This isn't just survival; it's your chance to carve out your own legendary story in a world built for endless possibilities.",
    "imageUrl": "/survivalcard.jpg"
  },
  {
    "gameMode": "arcade",
    "heading": "Instant Fun: The Arcade Playground",
    "paragraph": "Need a quick burst of adrenaline or a casual break from intense battles? MCFleet's Arcade section is your ultimate destination. Dive into a constantly evolving collection of unique mini-games, from lightning-fast PvP challenges to quirky, engaging puzzles and competitive skill tests. With new games regularly introduced, there's always something fresh to discover. Enjoy seamless gameplay and instant action, perfect for quick matches with friends or honing your skills across a diverse range of thrilling experiences.",
    "imageUrl": "/arcadecard.jpg"
  }
]
  return (
    <div className="flex flex-col main justify-center w-[100%]  items-center m-0 p-0">
      <div className="relative flex flex-col main justify-center w-[100%]  items-center m-0 p-0">
   <video
  src="/herosection.mp4"
  autoPlay
  loop
  muted
  playsInline
  className=" absolute brightness-50 w-[100%] h-[100%] top-0 -z-10 object-cover"
>
  Your browser does not support the video tag.
</video>
      <Navbar />
      <div className="  flex flex-col shadow-sm hover:shadow-xl shadow-yellow-50 text-center w-[100%] justify-center items-center  my-0 p-4 ">
        <div className="flex w-[100%] flex-col p-8 gap-4 md:my-16 justify-center items-center ">
          <span className="text-3xl text-white font-bold font-bold">
Experience Minecraft. The Indian Way. No Lag. Pure Thrills.</span>
          <span className="text-xl text-white font-bold font-bold ">Dive into MCFleet, India&apos;s leading Minecraft server designed for modern gamers. Forget lag and network issues &ndash; we deliver seamless Bedwars battles, epic Survival adventures, diverse Arcade games, and challenging Parkour. Join a thriving community where every moment is about pure fun and competitive play.
</span>
          <button className="text-xl bg-blue-800 drop-shadow-2xl text-white font-bold px-8 rounded-4xl py-4">Start Adventure Now!</button>
        </div>
      </div></div><AnimateOnScroll>
            <div className="intro sm:flex-row flex flex-col-reverse md:flex-row justify-evenly items-center gap-4 md:p-16 p-8 my-8">
        <div className="text flex flex-col justify-center items-center gap-4"><span className="text-3xl font-bold">
Discover MCFleet: Built for Gamers, By Gamers.</span>
        <span className="text">
MCFleet stands as India&apos;s premier Minecraft server, meticulously crafted by the renowned Indian YouTuber and gamer, Gamerfleet. Designed to address the common pain points of online gaming, MCFleet prides itself on offering a virtually lag-free and stable experience, ensuring that Indian players can immerse themselves without the frustration of connectivity issues. This vibrant server boasts a diverse array of game modes to cater to every kind of player, from the strategic battles of Bedwars and the expansive exploration of Survival, to a dynamic Arcade section brimming with a multitude of engaging mini-games. Beyond the core offerings, MCFleet also features a unique mini parkour game, challenging players&apos; agility and precision. To further fuel competition and community engagement, the server incorporates a comprehensive leaderboard system, allowing players to track their progress and compete for top honors across all their favorite game modes.</span></div>
<Image src="/survivalcardoption.jpg" width={400} height={400} alt="survival series image" className="rounded-xl"></Image>
      </div>
      </AnimateOnScroll>
      <div className="flex flex-col justify-center items-center text-center w-[100%]  my-8"><span className="text-3xl font-bold">Features</span>

  <AnimateOnScroll animationClass="opacity-0 -translate-y-10" visibleClass="opacity-100 translate-y-0">
      <div id="blogs" className="flex flex-wrap gap-4 p-4 justify-center items-center text-center w-[100%]">
{features.map((card) => {
  return <div className="card flex flex-col md:w-[35%] sm:w-[60%] w-[90%] relative p-6 gap-2 justify-center overflow-hidden items-center rounded-xl" key={card.gameMode}>
  <Image src={card.imageUrl} objectFit="cover" alt="survival.webp"fill="true" className=" absolute w-[100%] height-[100%] top-0 -z-10 cardimg brightness-50 "></Image>
  <span className="text-xl text-white font-bold font-bold">
{card.heading}</span>
  <span className="text text-white font-bold">{card.paragraph}
</span>
     <button className="text-xl bg-blue-800 text-white drop-shadow-2xl px-8 rounded-4xl md:py-4 py-2">
  <Link href={`/${card.gameMode}`}>Explore Now!</Link>
</button>
</div>

}
)}
      </div>
</AnimateOnScroll>
      </div>

        <div className="founder sm:flex-row flex flex-col md:flex-row justify-evenly items-center gap-4 md:p-16 p-8 my-8 w-[100%]">
<Image src="/founder.jfif" width={400} height={400} alt="survival series image" className="rounded-xl w-[400px]"></Image><AnimateOnScroll animationClass="opacity-0 -translate-y-10" visibleClass="opacity-100 translate-y-0">

        <div className="text flex flex-col justify-center items-center gap-4"><span className="text-3xl font-bold">
Meet the Visionary: Anshu Bisht (Gamerfleet)</span>
        <span className="text">

MCFleet stands as a testament to the vision and dedication of Anshu Bisht, better known to millions as the beloved Indian gaming YouTuber, Gamerfleet. As the astute mind behind MCFleet, Anshu recognized a critical need within the Indian Minecraft community: a premium server experience free from the persistent lag and network frustrations that often plagued local players. His passion for gaming, combined with an unwavering commitment to his audience, drove him to establish MCFleet &ndash; a platform built from the ground up to offer unparalleled stability, diverse game modes, and a thriving, competitive environment. Anshu&apos;s leadership ensures that MCFleet remains at the forefront of Indian Minecraft, consistently delivering an optimized, engaging, and genuinely fun space for gamers nationwide.</span>
</div>
</AnimateOnScroll>
      </div>
      <Latestbullietins/>
      <Ip/>
      </div>
  );
    }
        
