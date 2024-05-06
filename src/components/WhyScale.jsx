import React from "react";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const WhyScale = () => {
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightTopHovered, setRightTopHovered] = useState(false);
  const [rightBottomHovered, setRightBottomHovered] = useState(false);

  return (
    <div className="h-full rounded-2xl flex flex-row bg-[#03193D] space-x-1 p-6 custom-font">
      {/* Left Container */}
      <div className="w-1/2 flex flex-col items-center justify-start">
        <p className="  text-white text-5xl custom-font mt-20 mb-12  w-[75%]">
          Why ScaleSecure is a no-brainer.
        </p>
        <div className="flex items-center justify-center">
          <div
            className="bg-white rounded-2xl w-[85%] flex flex-col item-center p-5 transform hover:-translate-x-2 hover:-translate-y-2 transition-transform duration-300 ;"
            style={{
              transition: "box-shadow 0.3s ease-in-out",
              boxShadow: leftHovered
                ? "13px 11px 0px rgba(224, 244, 69, 1)"
                : "none",
            }}
            onMouseEnter={() => setLeftHovered(true)}
            onMouseLeave={() => setLeftHovered(false)}
          >
            <p>24/7 support you can actually count on.</p>
            <p>
              Our average chat response time is minute. We're not making that
              up. In addition to that, you'll have a dedicated Customer Success
              Manager who is your true partner in growth. With Scale Secure, you
              can rest assured your subscription business is in great hands.
            </p>
            <button className="p-2 w-1/4 rounded-full tracking-widest bg-[#D5E3F8]  hover:text-black dark:text-neutral-200 flex hover:bg-[#E0F445] transition duration-200 space-x-2 m-5 hover:flex-row-reverse hover:duration-300">
              <div className="rounded-full text-black bg-[#E0F445] transform transition-transform duration-300">
                <ArrowForwardIcon />
              </div>
              <div className="text-black">Lets Talk</div>
            </button>
            <img
              src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65ea25d04a36a4fafaf8b5e0_SVG-1.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Right Container */}
      <div className="w-1/2 flex flex-col justify-center item-center  ">
        <div className="flex flex-col space-y-6 h-auto">
          <div
            className="bg-white rounded-2xl p-3 w-[85%] transform hover:-translate-x-2 hover:-translate-y-2 transition-transform duration-300 ;"
            style={{
              transition: "box-shadow 0.3s ease-in-out",
              boxShadow: rightTopHovered
                ? "13px 11px 0px rgba(224, 244, 69, 1)"
                : "none",
            }}
            onMouseEnter={() => setRightTopHovered(true)}
            onMouseLeave={() => setRightTopHovered(false)}
          >
            <p>24/7 support you can actually count on.</p>
            <p>
              Our average chat response time is minute. We're not making that
              up. In addition to that, you'll have a dedicated Customer Success
              Manager who is your true partner in growth. With Scale Secure, you
              can rest assured your subscription business is in great hands.
            </p>
            <button className="p-2 w-1/4 rounded-full tracking-widest bg-[#D5E3F8]  hover:text-black dark:text-neutral-200 flex hover:bg-[#E0F445] transition duration-200 space-x-2 m-5 hover:flex-row-reverse hover:duration-300">
              <div className="rounded-full text-black bg-[#E0F445] transform transition-transform duration-300">
                <ArrowForwardIcon />
              </div>
              <div className="text-black">Lets Talk</div>
            </button>

            <img
              src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65ea25d04a36a4fafaf8b5e0_SVG-1.svg"
              alt=""
            />
          </div>
          <div
            className="bg-white rounded-2xl w-[85%] p-3 transform hover:-translate-x-2 hover:-translate-y-2 transition-transform duration-300 ;"
            style={{
              transition: "box-shadow 0.3s ease-in-out",
              boxShadow: rightBottomHovered
                ? "13px 11px 0px rgba(224, 244, 69, 1)"
                : "none",
            }}
            onMouseEnter={() => setRightBottomHovered(true)}
            onMouseLeave={() => setRightBottomHovered(false)}
          >
            <p>24/7 support you can actually count on.</p>
            <p>
              Our average chat response time is minute. We're not making that
              up. In addition to that, you'll have a dedicated Customer Success
              Manager who is your true partner in growth. With Scale Secure, you
              can rest assured your subscription business is in great hands.
            </p>
            <button className="p-2 w-1/4 rounded-full tracking-widest bg-[#D5E3F8]  hover:text-black dark:text-neutral-200 flex hover:bg-[#E0F445] transition duration-200 space-x-2 m-5 hover:flex-row-reverse hover:duration-300">
              <div className="rounded-full text-black bg-[#E0F445] transform transition-transform duration-300">
                <ArrowForwardIcon />
              </div>
              <div className="text-black">Lets Talk</div>
            </button>
            <img
              src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65ea25d04a36a4fafaf8b5e0_SVG-1.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyScale;
