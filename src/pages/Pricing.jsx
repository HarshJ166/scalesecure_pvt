import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import PricingSection from "../components/PricingSection";
import Carousel from "../components/Carousel";
import CarouselPhone from "../components/CarouselPhone";
import { PureIncrement } from "pure_counter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

export default function Pricing() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div className="font-body w-full h-full bg-[#D8E7F0]">
      <div className="px-5 py-2.5">
        <Navbar />
      </div>
      {/* <Table /> */}
      <div className="flex justify-center items-center">
        <PricingSection />
      </div>
      <div className="flex flex-col md:items-center justify-center text-left space-y-9 py-5 m-5 ">
        <p className="text-[#03193D]">We've processed over</p>
        <PureIncrement
          start={0}
          end={200000000}
          duration={4}
          className="purecounter font-extrabold md:text-8xl text-2xl"
        />

        {/* <div className="font-extrabold text-8xl">$200,000,000</div> */}
        <div>In subscription GMV, and we're just getting started.</div>
      </div>
      {/* Carousel section */}
      <div>
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
      </div>
      {/* Carousel Section */}

      {/* FAQ Section */}
      <div className=" flex flex-col justify-center items-center px-5 py-2.5">
        <div className="font-extrabold text-4xl">Frequently Asked Question</div>
        <div className="bg-white flex flex-row space-x-5 h-full rounded-xl w-7/12 p-5 my-2 justify-between">
          <div className="flex">
            When does the 14-day free trial of Smartrr start?
          </div>
          <button className="flex bg-[#bcb6b6] rounded-lg">
            <ArrowDropDownIcon />
          </button>
        </div>
        <div className="bg-white flex flex-row space-x-5 h-full rounded-xl w-7/12 p-5 my-2 justify-between">
          <div className="flex">
            When does the 14-day free trial of Smartrr start?
          </div>
          <button className="flex bg-[#bcb6b6] rounded-lg">
            <ArrowDropDownIcon />
          </button>
        </div>
        <div className="bg-white flex flex-row space-x-5 h-full rounded-xl w-7/12 p-5 my-2 justify-between">
          <div className="flex">
            When does the 14-day free trial of Smartrr start?
          </div>
          <button className="flex bg-[#bcb6b6] rounded-lg">
            <ArrowDropDownIcon />
          </button>
        </div>
        <div className="bg-white flex flex-row space-x-5 h-full rounded-xl w-7/12 p-5 my-2 justify-between">
          <div className="flex">
            When does the 14-day free trial of Smartrr start?
          </div>
          <button className="flex bg-[#bcb6b6] rounded-lg">
            <ArrowDropDownIcon />
          </button>
        </div>
      </div>

      <div className="px-5 py-2.5">
        <div className="bg-[#03193D] rounded-2xl h-80 flex flex-col justify-center items-center  text-[#ABABAB] mb-5">
          <h1 className=" text-white font-body text-3xl font-semibold mx-3">
            Custom Pricing Model
          </h1>
          <div className="mx-3 mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore ad
            possimus commodi esse, debitis rem voluptatem nostrum harum ab
            labore .
          </div>
          <div className=" flex items-center justify-center  px-2 py-4">
            <Link to="/register">
              <button className="px-8 justify-center items-center box-border bg-[#E0F445] text-black text-sm rounded-md font-body hover:bg-[#E0F445]/[0.8] hover:shadow-lg p-2">
                Get a Demo
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="px-5 py-2.5">
        <Footer />
      </div>
    </div>
  );
}
