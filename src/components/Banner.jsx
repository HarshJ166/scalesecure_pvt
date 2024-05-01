import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div>
      <div className="bg-[#03193D] rounded-2xl h-80 flex flex-col justify-center items-center  text-[#ABABAB]">
        <h1 className=" text-white font-body text-3xl font-semibold mx-3">
          Ready to Get Scale Secure ?
        </h1>
        <div className=" flex items-center justify-center  px-2 py-4">
          <Link to="/Register">
            <button className="px-8 justify-center items-center box-border bg-[#E0F445] text-black text-sm rounded-md font-body hover:bg-black/[0.8] hover:shadow-lg p-2">
              Get a Demo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
