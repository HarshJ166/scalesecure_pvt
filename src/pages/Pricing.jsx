import React, { useEffect, useState } from "react";
import PricingSection from "../components/PricingSection";
import { PureIncrement } from "pure_counter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import Pricingcomparison from "../components/Pricecomparison";
import { motion } from "framer-motion";
import Carousel from "../components/Carousel";
import CarouselPhone from "../components/CarouselPhone";
export default function Pricing() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null); // State for tracking active dropdown

  // Function to toggle the active dropdown index
  const toggleText = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Array of FAQ questions and answers
  const faqData = [
    {
      question: "When does the 14-day free trial of Smartrr start?",
      answer: "The trial starts immediately upon sign-up.",
    },
    {
      question: "How can I upgrade my subscription?",
      answer:
        "You can upgrade your subscription by visiting the Subscription section in your account settings.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes, we have a mobile app available for both iOS and Android devices. You can download it from the App Store or Google Play Store.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept payments via credit/debit cards and PayPal.",
    },
  ];

  return (
    <div className="font-body w-full h-full bg-[#D5E3F8] ">
      {/* Navbar Section */}
      <div className="px-5 py-2.5">
        <Navbar />
      </div>
      {/* Navbar Section */}

      {/* Pricing Section  */}
      <div className="flex flex-col justify-center items-center">
        <PricingSection />
        <div className="px-5 py-2">
          <div className="bg-[#03193D] rounded-xl h-80 w-max-screen-xl mt-10 flex flex-col justify-center items-center  text-[#ABABAB] mb-5">
            <h1 className=" text-white font-body text-3xl font-semibold mx-3">
              Custom Pricing Model
            </h1>
            <div className="mx-3 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              ad possimus commodi esse, debitis rem voluptatem nostrum harum ab
              labore .
            </div>
            <div className=" flex items-center justify-center  px-2 py-4">
              <Link to="/register">
                <button className="px-8 justify-center items-center box-border bg-[#E0F445] text-black text-sm rounded-md font-body hover:bg-[#E0F445]/[0.8] hover:shadow-lg p-2">
                  Get a Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Section  */}

      {/* Pricing Comparison Section */}
      <div>
        <Pricingcomparison />
      </div>
      {/* Pricing Comparison Section */}

      {/*  Counter Section */}
      <div className="flex flex-col md:items-center justify-center text-left space-y-9 py-5 m-5 custom-font">
        <p className="text-[#03193D]">We've processed over</p>
        <div className="flex">
          <h1 className=" font-extrabold md:text-8xl text-2xl">$</h1>
          <PureIncrement
            start={0}
            end={200}
            duration={2}
            className="purecounter font-extrabold md:text-8xl text-2xl"
          />
          <h1 className=" font-extrabold md:text-8xl text-2xl">,000,000</h1>
        </div>
        <div>In subscription GMV, and we're just getting started.</div>
      </div>
      {/* Carousel section */}
      <div>
        {/* Phone Element */}
        <div
          className={
            width <= 768
              ? "w-full h-full flex justify-center items-center px-5 py-2.5"
              : "hidden"
          }
        >
          <div className="w-full h-full flex justify-center items-center">
            <CarouselPhone />
          </div>
        </div>
        {/* Desktop Element */}
        <div
          className={
            width > 768
              ? "w-full h-full flex justify-center items-center px-5 py-2.5"
              : "hidden"
          }
        >
          <div className="w-full h-full flex justify-center items-center">
            <Carousel />
          </div>
        </div>
      </div>
      {/* Carousel Section */}

      {/* FAQ Section */}
      <div className="flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center px-5 py-2.5 custom-font">
          <div className="font-extrabold text-5xl p-6">
            Frequently Asked Questions
          </div>
          {/* FAQ Items */}
          {faqData.map((faq, index) => (
            <div className=" bg-white flex flex-col space-y-2.5 rounded-lg w-[35rem] h-auto p-5 my-2 text-left">
              <button onClick={() => toggleText(index)}>
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  // className="bg-white flex flex-col space-y-2.5 rounded-lg w-[35rem] h-auto "
                >
                  <div className="flex items-center justify-between text-left">
                    <div className="flex">{faq.question}</div>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.1 }}
                      className="flex bg-[#bcb6b6] rounded-lg"
                    >
                      <ArrowDropDownIcon />
                    </motion.div>
                  </div>
                  {activeIndex === index && (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.1 }}
                      className="mt-2 text-left"
                    >
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                        className="text-sm text-gray-500 text-left"
                      >
                        {faq.answer}
                      </motion.span>
                    </motion.div>
                  )}
                </motion.div>
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* FAQ Section */}

      {/* Footer Section  */}
      <div className="px-5 py-2.5">
        <Footer />
      </div>
      {/* Footer Section  */}
    </div>
  );
}
