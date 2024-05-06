import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ContinuousScroll from "../components/ContinuousScroll";
import BentoGridPhone from "../components/BentoGridPhone";
import BentoGrid from "../components/BentoGrid";
import Carousel from "../components/Carousel";
import CarouselPhone from "../components/CarouselPhone";
import MovingCardPhone from "../components/MovingCardPhone";
import MovingCard from "../components/MovingCard";
import InfiniteMovingCardsDemo from "../components/InfiniteMovingCards";
import Shopify from "../components/Shopify";
import Footer from "../components/Footer";
import WhyScale from "../components/WhyScale";
import WhyScalePhone from "../components/WhyScalePhone";

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
      {/* Navbar */}
      <div className="mx-5 z-20 bg-[#D8E7F0] ">
        <Navbar />
      </div>
      {/* Navbar */}
      {/* HeroSection */}
      <div className="pt-24 bg-[#D8E7F0] md:pt-0">
        <div className="flex justify-center items-center bg-[#03193D] rounded-3xl sm:h-[784px] h-full mx-2 mb-2 sm:mx-5 sm:mb-5 md:mt-0 ">
          <HeroSection />
        </div>
      </div>
      {/* HeroSection */}
      {/* Continuous Scroll */}
      <div className="px-5 py-2.5 m-5 bg-[#c3d3e1] rounded-3xl">
        <ContinuousScroll />
      </div>
      {/* Continuous Scroll */}
      {/* BentoGrid */}
      {/* Phone Element */}
      <div
        className={
          width <= 768
            ? "w-full h-full flex justify-center items-center px-5 py-2.5"
            : "hidden"
        }
      >
        <BentoGridPhone />
      </div>
      {/* Desktop Element */}
      <div
        className={
          width > 768
            ? "w-full h-full flex justify-center items-center px-5 py-2.5"
            : "hidden"
        }
      >
        <BentoGrid />
      </div>
      {/* BentoGrid */}
      {/* Carousel */}
      {/* Phone Element */}
      <div
        className={
          width <= 768
            ? "w-full h-full flex justify-center items-center px-5 py-2.5"
            : "hidden"
        }
      >
        <div className="w-full h-full flex justify-center items-center">
          <CarouselPhone />
        </div>
      </div>
      {/* Desktop Element */}
      <div
        className={
          width > 768
            ? "w-full h-full flex justify-center items-center px-5 py-2.5"
            : "hidden"
        }
      >
        <div className="w-full h-full flex justify-center items-center">
          <Carousel />
        </div>
      </div>
      {/* Carousel */}
      <div>Subscribers Card Stack</div>
      {/* Card Section */}
      {/* Phone Element */}
      <div
        className={
          width <= 768
            ? "w-full h-full flex justify-center items-center px-5 py-2.5"
            : "hidden"
        }
      >
        <WhyScalePhone />
      </div>
      {/* Desktop Element */}
      <div
        className={
          width > 768
            ? "w-full h-full flex justify-center items-center px-5 py-2.5"
            : "hidden"
        }
      >
        <WhyScale />
      </div>
      {/* Card Section */}
      {/* Moving-Card*/}
      {/* Phone Element */}
      <div
        className={
          width <= 768
            ? "w-full h-full flex justify-center items-center px-5 py-2.5"
            : "hidden"
        }
      >
        <div className="w-[99%] h-[95%] flex justify-center items-center bg-white rounded-3xl p-5">
          <div className="w-3/4 flex flex-col items-center justify-center m-5">
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
      {/* laptop Element */}
      <div
        className={
          width > 768
            ? "w-full h-full flex justify-center items-center px-5 py-2.5"
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
      {/* Moving Card  */}
      <div className="px-5 py-2.5">
        <div>
          <Shopify />
        </div>
      </div>
      {/* InfiniteMovingCard */}
      <div>
        <div className="items-center justify-center flex flex-col">
          <h2 className="font-body text-4xl w-full text-left px-5 py-2.5 sm:m-3 text-[#ABABAB] sm:text-center sm:w-2/3">
            Some proof we really know what we’re doing
          </h2>
          <InfiniteMovingCardsDemo />
          <button className="px-8 justify-center items-center box-border bg-black text-white text-sm rounded-md font-body hover:bg-black/[0.8] hover:shadow-lg p-3">
            See all case Studies
          </button>
        </div>
      </div>
      {/* InfiniteMovingCard */}
      {/* Footer */}
      <div className="px-5 py-2.5">
        <Footer />
      </div>
    </div>
  );
}
