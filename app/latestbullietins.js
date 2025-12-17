"use client";
import React, { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const Latestbullietins = () => {
  const [bulletins, setBulletins] = useState([
    {
      id: 1,
      heading: "Breaking News: MCFleet is LIVE!",
      content: `The wait is officially over, Gamers! MCFleet, the groundbreaking Indian Minecraft server by Anshu Bisht (Gamerfleet), has officially launched! Gamerfleet himself confirmed the public release, opening the gates to a lag-free, high-performance Minecraft experience this very month. Dive in now to explore optimized Bedwars, vast Survival worlds, thrilling Arcade mini-games, and challenging Parkour courses. Your ultimate Indian Minecraft adventure has begun – connect today and join the Fleet!`,
    },
    {
      id: 2,
      heading: "How to Claim Blocks in Survival on MCFleet",
      content: `New to MCFleet Survival and wondering how to protect your builds? It's simple! You can claim blocks using a Golden Shovel. Just right-click with a Golden Shovel in your hand to define the corners of your claim. This will protect your valuable creations from griefing and ensure your base remains safe. Happy building!`,
    },
    {
      id: 3,
      heading: "Queue Issues: Gamerfleet's Solution Incoming!",
      content: `We understand that long queues can be frustrating and bore players. Gamerfleet is actively planning to address this concern with the public launch! The primary solution being explored is expanding the world size, which will allow more players to join simultaneously without experiencing significant wait times. Get ready for a smoother entry into MCFleet!`,
    },
    {
      id: 4,
      heading: "Parkour Mode: When is it Coming Back?",
      content: `For those eager to test their agility, we know Parkour mode has been down for some time. Good news! There's a strong possibility that the Parkour mode will return and be fully operational during the official public release day. Get ready to jump, dash, and conquer those challenging courses!`,
    },
  ]);

  const [expandedBulletinId, setExpandedBulletinId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedBulletinId(expandedBulletinId === id ? null : id);
  };

  return (
    <div className="flex flex-col latestbullietins text-center justify-center items-center gap-4 my-8 w-[100%]">
      <span className="text-3xl font-bold">Latest Bulletins</span>

      {bulletins.map((bulletin, index) => {
        // Determine the background and text colors based on the index
        const isEven = index % 2 === 0;
        const bgColor = isEven ? "bg-yellow-50" : "bg-blue-950"; // Cream (your yellow-50) or Dark Blue
        const textColor = isEven ? "text-black" : "text-white"; // Black for cream, White for dark blue

        return (<AnimateOnScroll 
            key={bulletin.id} animationClass="opacity-0 scale-75" visibleClass=" flex flex-col w-[100%] justify-center items-center opacity-100 scale-100"
>          <div
            key={bulletin.id}
            className={`bullitein rounded-xl w-[90%] relative group p-16 flex flex-col gap-4 justify-center text-left items-center cursor-pointer transition-all duration-300 ease-in-out
            ${bgColor} ${textColor}
            ${expandedBulletinId === bulletin.id ? "h-auto" : "h-[50px] overflow-hidden"}`}
            onClick={() => toggleExpand(bulletin.id)}
          >
            <h1 className="heading text-xl font-bold p-4">{bulletin.heading}</h1>
            {expandedBulletinId === bulletin.id && (
              <p className="text-base">{bulletin.content}</p>
            )}
          </div>
      </AnimateOnScroll>
  );
      })}
    </div>
  );
};

export default Latestbullietins;
