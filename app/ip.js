"use client"
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
const Ip = () => {
  return (
      <div className="flex w-[80%] flex-col justify-center items-center gap-2 p-4 my-8 bg-gray-950 text-white">
    <AnimateOnScroll animationClass="opacity-0 scale-75 " visibleClass="w-full justify-center items-center opacity-100 scale-100"
>
        <div className="bg-gray-950 border-b-2 flex w-[100%] justify-between border-b-black items-center font-bold text-xl ">IP: <Image src="/copy.svg" className="invert" width={50} height={50} alt="copy" onClick={()=>navigator.clipboard.writeText("play.mcfleet.net")}></Image></div>
        <div className="flex justify-center items-center text-center w-[100%] p-2">play.mcfleet.net</div>
      </AnimateOnScroll>
      </div>
  )
}

export default Ip
