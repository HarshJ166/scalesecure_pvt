import React from "react";
import Navbar from "../components/navbar";
import { BentoGridDemo } from "../components/BentoGridDemo";
import ScalesecureBanner from "../components/ScalesecureBanner";
import WhyScale from "../components/WhyScale";

const Home = () => {
  return (
    <div className="  bg-[#D8E7F0] px-2.5 py-3">
      <Navbar />
      <BentoGridDemo />
      <WhyScale />
      <ScalesecureBanner />
    </div>
  );
};

export default Home;
