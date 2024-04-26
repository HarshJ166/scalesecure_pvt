import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ContinuousScroll from "../components/ContinuousScroll";
import InfiniteMovingCardsDemo from "../components/InfiniteMovingCards";
import MovingCardPhone from "../components/MovingCardPhone";
import MovingCard from "../components/MovingCard";

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);
  return (
    <div className="bg-[#D8E7F0] font-body">
      <div>
        <Navbar />
      </div>
      <div className="px-5">
        <HeroSection />
      </div>
      <div className="p-5 m-5 bg-[#c3d3e1] rounded-3xl">
        <ContinuousScroll />
      </div>

      <div>BentoGrid</div>
      <div>Carousel</div>
      <div>Subscribers Card Stack</div>
      <div>Grid</div>

      {/* Moving-Card */}
      <div
        className={
          width <= 768
            ? "w-full h-full flex justify-center items-center p-5"
            : "hidden"
        }
      >
        <div className="w-[99%] h-[95%] flex justify-center items-center bg-white rounded-3xl p-5">
          <div className="w-3/4 flex flex-col items-center justify-center m-4">
            <div className="font-body text-lg flex my-5 font-bold items-center justify-start">
              Worried about migration? We’ve got you covered.
            </div>

            <div className="border border-[#cacaca] w-[75%] rounded-lg m-5"></div>
            <div className="flex justify-center flex-col">
              <MovingCardPhone />
              <MovingCardPhone />
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          width > 768
            ? "w-full h-full flex justify-center items-center p-5"
            : "hidden"
        }
      >
        <div className="w-[99%] h-[95%] flex justify-center items-center bg-white rounded-3xl p-5">
          <div className="w-3/4 flex flex-col items-center justify-center p-5 m-4">
            <div className="font-body text-2xl flex my-5 font-bold text-center items-center justify-center">
              New to subscriptions? Worried about migration? We’ve got you
              covered.
            </div>

            <div className="border border-[#cacaca] w-[75%] rounded-lg m-5"></div>
            <div className="flex justify-center">
              <MovingCard />
            </div>
          </div>
        </div>
      </div>

      <div>Shopify</div>

      {/* InfiniteMovingCard */}
      <div>
        <div className="items-center justify-center flex flex-col">
          <h2 className="font-body text-4xl leading-10 m-3 text-[#ABABAB]">
            Some proof we really know what we’re doing
          </h2>
          <InfiniteMovingCardsDemo />
          <button className="px-8 justify-center items-center box-border bg-black text-white text-sm rounded-md font-body hover:bg-black/[0.8] hover:shadow-lg p-5 mt-6">
            See all case Studies
          </button>
        </div>
      </div>
      <div>Get Smartrr</div>
      <div>Footer</div>
    </div>
  );
}
