import React from "react";
import HTML from "../assets/images/HTML.png";
import JavaScript from "../assets/images/JavaScript.png";
import MongoDB from "../assets/images/MongoDB.png";
import Node from "../assets/images/Node.png";
import ReactJS from "../assets/images/React.png";
import TailwindCSS from "../assets/images/TailwindCSS.png";

export default function ContinuousScroll() {
  return (
    <div className="logoScroll">
      <div className="bg-[#d4e6e90f] overflow-hidden h-30 flex rounded-3xl">
        <div className="flex pl-6 pt-4 pb-2 justify-items-center space-x-16 animate-loop-scroll">
          <img
            loading="lazy"
            className="object-contain object-center w-[120px] self-center shrink-0 max-w-none my-auto aspect-[1.11]"
            src={HTML}
            alt="HTML"
          />
          <img
            loading="lazy"
            className="object-contain object-center self-center shrink-0 w-[120px] max-w-none my-auto aspect-[1.11]"
            src={JavaScript}
            alt="JavaScript"
          />
          <img
            loading="lazy"
            className="object-contain object-center  w-[120px] self-center shrink-0 max-w-none my-auto aspect-[1.11]"
            src={MongoDB}
            alt="MongoDB"
          />
          <img
            loading="lazy"
            className="object-contain object-center  w-[120px] self-center shrink-0 max-w-none my-auto aspect-[1.11]"
            src={Node}
            alt="Node"
          />
          <img
            loading="lazy"
            className="object-contain object-center  w-[120px] self-center shrink-0 max-w-none my-auto aspect-[1.11]"
            src={ReactJS}
            alt="ReactJS"
          />
          <img
            loading="lazy"
            className="object-contain object-center  w-[120px] self-center shrink-0 max-w-none my-auto aspect-[1.11]"
            src={TailwindCSS}
            alt="TailwindCSS"
          />
        </div>
        <div className="flex pl-6 pt-4 pb-2 justify-items-center space-x-16 animate-loop-scroll aria-hidden:true">
          <img
            loading="lazy"
            className="object-contain object-center w-[120px] self-center shrink-0 max-w-none my-auto aspect-[1.11]"
            src={HTML}
            alt="HTML"
          />
          <img
            loading="lazy"
            className="object-contain object-center self-center shrink-0 w-[120px] max-w-none my-auto aspect-[1.11]"
            src={JavaScript}
            alt="JavaScript"
          />
          <img
            loading="lazy"
            className="object-contain object-center  w-[120px] self-center shrink-0 max-w-none my-auto aspect-[1.11]"
            src={MongoDB}
            alt="MongoDB"
          />
          <img
            loading="lazy"
            className="object-contain object-center  w-[120px] self-center shrink-0 max-w-none my-auto aspect-[1.11]"
            src={Node}
            alt="Node"
          />
          <img
            loading="lazy"
            className="object-contain object-center  w-[120px] self-center shrink-0 max-w-none my-auto aspect-[1.11]"
            src={ReactJS}
            alt="ReactJS"
          />
          <img
            loading="lazy"
            className="object-contain object-center  w-[120px] self-center shrink-0 max-w-none my-auto aspect-[1.11]"
            src={TailwindCSS}
            alt="TailwindCSS"
          />
        </div>
      </div>
    </div>
  );
}
