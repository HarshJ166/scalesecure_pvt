import { cn } from "../../utils/cn";
import React from "react";
import { useState } from "react";

const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  img,
  hasBorder,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento shadow-input dark:shadow-none p-4 dark:bg-[#03193D] dark:border-[#D5E3F8]/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 transform hover:-translate-x-2 hover:-translate-y-2 transition-transform duration-300 ;",
        className,
        { border: hasBorder }
      )}
      style={{
        transition: "box-shadow 0.3s ease-in-out",
        boxShadow: isHovered ? "13px 11px 0px rgba(3, 25, 61, 1)" : "none",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

export { BentoGrid, BentoGridItem };
