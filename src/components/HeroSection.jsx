import React from "react";
import ThreeDCard from "./ThreeDCard";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="flex justify-center items-center">
      <div className="rounded-3xl lg:max-w-7xl lg:mx-auto p-3 flex flex-col lg:flex-row text-[#ABABAB] justify-center items-center">
        {/* left-container */}
        <div className="w-full h-full lg:place-content-center p-2 lg:p-12">
          <div className="flex flex-row items-center mb-4">
            <div className="flex flex-row m-1">
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} />
              ))}
            </div>
            <div className="m-1 mr-2 ml-2 text-sm">RATED 5 STARS ON THE</div>
            <img
              src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65ea25d04a36a4fafaf8b5ad_Shopify%20App%20Store%201.svg"
              alt="appstore"
              className="m-1"
            />
          </div>
          <div className="text-4xl tracking-wide font-extrabold lg:text-3xl mb-3 mt-3">
            The subscription platform for growing Shopify brands
          </div>
          <div className="text-xs lg:text-base mb-3 font-para">
            Generate predictable, recurring revenue and increase brand loyalty
            with subscriptions tailored to how you sell and your customers
            buy–all without the difficult development work.
          </div>
          <button className="px-6 lg:px-8 py-3 text-black text-sm rounded-md font-semibold bg-[#E0F445] ">
            <Link to="/Register">Get a Demo</Link>
          </button>
        </div>

        {/* right-container */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <ThreeDCard />
        </div>
      </div>
    </div>
  );
}
