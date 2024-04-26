import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function MovingCard() {
  return (
    <div className="flex">
      <div
        className={
          "child flex-grow transition-all duration-300 transform border-2 rounded-3xl w-1/2 p-4 justify-center items-center bg-[#03193D] text-[#ABABAB]"
        }
      >
        <div>
          <img
            src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65ea25d04a36a4fafaf8b5c2_Vector%20(3).svg"
            alt="image1"
          />
        </div>
        <div className="justify-between">
          <div className="text-3xl ">
            <h3>Launch Subscriptions with Smartrr</h3>
          </div>
          <div>
            Every big brand starts somewhere. We’ve taken brands from 0 to over
            100k subscribers. We’d love to help you do the same.
          </div>
          <button className="rounded-full tracking-widest bg-[#D5E3F8] hover:text-white dark:text-neutral-200 flex hover:bg-[#E0F445] transition duration-200 space-x-2 hover:flex-row-reverse hover:duration-300 p-2 justify-center items-center">
            <div className="rounded-full bg-[#E0F445] transform transition-transform duration-300">
              <ArrowForwardIcon />
            </div>
            <div>Why Launch with Smartrr</div>
          </button>
        </div>
      </div>
    </div>
  );
}
