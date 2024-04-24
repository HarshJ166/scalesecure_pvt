import React from "react";
import { Link } from "react-router-dom";

export default function ScalesecureBanner() {
  return (
    <div className=" bg-[#D8E7F0] px-2.5 py-3">
      <div className=" flex items-center justify-center  px-2 py-4">
        <button className="bg-[#03193D] rounded-xl h-20">
          <p className="text-white custom-font text-sm mx-2">
            See All Features
          </p>
        </button>
      </div>
      <div className="bg-[#03193D] grid grid-col rounded-2xl h-80  justify-center items-center  text-[#ABABAB]">
        <p
          className=" position-start
         text-xl custom-font text-white mx-2"
        >
          Scale High with
        </p>
        <h1 className="text-6xl font-bold text-white custom-font mx-3">
          Scale Secure
        </h1>
        <div className=" flex items-center justify-center  px-2 py-4">
          <button className="bg-[#D8E7F0] rounded-xl h-10">
            <p className="text-black custom-font text-sm mx-2">
              <Link to="/signup">Register Now</Link>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
