import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ContinuousScroll from "../components/ContinuousScroll";
import InfiniteMovingCardsDemo from "../components/InfiniteMovingCards";

export default function Home() {
  return (
    <div className="bg-[#D8E7F0]">
      <div>
        <Navbar />
      </div>

      <div className="px-5">
        <HeroSection />
      </div>

      <div className="p-5 m-5 bg-[#c3d3e1] rounded-3xl">
        <ContinuousScroll />
      </div>

      <div className="items-center justify-center flex flex-col">
        <h2 className="font-bold ">
          Some proof we really know what we’re doing
        </h2>
        <InfiniteMovingCardsDemo />
        <button className="px-8  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
          See all case Studies
        </button>
      </div>
    </div>
  );
}
