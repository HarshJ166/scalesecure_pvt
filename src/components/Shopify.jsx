import React from "react";

export default function Shopify() {
  return (
    <div className="bg-[#03193D] rounded-2xl p-7">
      <div className="flex flex-col justify-center items-center ">
        <div className="font-body text-2xl sm:text-4xl text-white font-medium text-left sm:text-center my-5">
          Definitely, 100% Shopify Native. Most Likely Integrated With Your Tech
          Stack.
        </div>
        <div>
          <img
            src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65ea25d04a36a4fafaf8b5c3_Group%20543.svg"
            alt="shopifyImage"
            className=""
          />
        </div>
      </div>
      <div className="flex justify-end items-end m-1">
        <button className="box-border bg-[#E0F445] text-black text-sm rounded-md font-body hover:bg-[#E0F445]/[0.8] hover:shadow-lg px-5 py-2 sm:p-3">
          See all Partners
        </button>
      </div>
    </div>
  );
}
