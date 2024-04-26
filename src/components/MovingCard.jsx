import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function MovingCard() {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div className="flex space-x-3">
      {/* left container */}
      <div
        className={`child flex-grow transition-all duration-300 transform border-2 rounded-3xl w-1/2 p-4 justify-center items-center ${
          hovered
            ? "bg-[#D5E3F8] text-[#ABABAB]"
            : "bg-[#03193D] text-[#ABABAB]"
        }`}
      >
        <div>
          <img
            src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65ea25d04a36a4fafaf8b5c2_Vector%20(3).svg"
            alt="image1"
          />
        </div>
        <div className="justify-between">
          <div className="text-3xl w-[90%]">
            <h3>Launch Subscriptions with Smartrr</h3>
          </div>
          <div className="w-[90%]">
            Every big brand starts somewhere. We’ve taken brands from 0 to over
            100k subscribers. We’d love to help you do the same.
          </div>
          <button className="p-2 rounded-full tracking-widest bg-[#D5E3F8] hover:text-white dark:text-neutral-200 flex hover:bg-[#E0F445] transition duration-200 space-x-2 m-5 hover:flex-row-reverse hover:duration-300">
            <div className="rounded-full bg-[#E0F445] transform transition-transform duration-300">
              <ArrowForwardIcon />
            </div>
            <div>Why Launch with Smartrr</div>
          </button>
        </div>
      </div>

      {/* right-container */}
      <div
        className={`child flex-grow transition-all duration-300 transform rounded-3xl p-4 w-1/4 hover:w-3/4 bg-[#03193D] text-[#ABABAB] justify-center items-center ${
          hovered
            ? "bg-[#03193D] text-[#ABABAB] w-3/4"
            : "bg-[#D5E3F8] text-[#ABABAB] w-1/4"
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className="justify-between">
          <div className="text-3xl">
            <h3>Launch Subscriptions with Smartrr</h3>
          </div>

          <div>
            Every big brand starts somewhere. We’ve taken brands from 0 to over
            100k subscribers. We’d love to help you do the same.
          </div>
        </div>

        <div>
          <img
            src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65ea25d04a36a4fafaf8b5c2_Vector%20(3).svg"
            alt="image1"
          />
        </div>

        <button className="p-2 rounded-full tracking-widest bg-[#D5E3F8] hover:text-white dark:text-neutral-200 flex hover:bg-[#E0F445] transition duration-200 space-x-2 m-3 mt-5 hover:flex-row-reverse hover:duration-300">
          <div className="rounded-full bg-[#E0F445] transform transition-transform duration-300">
            <ArrowForwardIcon />
          </div>
          <div>Why Launch with Smartrr</div>
        </button>
      </div>
    </div>
  );
}
