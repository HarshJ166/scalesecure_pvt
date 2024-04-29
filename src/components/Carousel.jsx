import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Carousel = () => {
  const images = [
    {
      backgroundImage:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      backgroundImage:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      backgroundImage:
        "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      image:
        "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      backgroundImage:
        "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
      image:
        "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      backgroundImage:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [images]);

  const handlePreviousClick = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="relative w-full h-screen justify-center items-center">
      <div
        className="absolute w-full h-full bg-cover bg-center rounded-3xl"
        style={{
          backgroundImage: `url(${images[currentImage].backgroundImage})`,
        }}
      />

      <div>
        <div
          className="flex justify-center items-center absolute p-4 flex-row ease-in-out space-x-2"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div>
            <div className="bg-[#E0F445] rounded-2xl p-1">
              <ArrowBackIcon onClick={handlePreviousClick} />
            </div>
          </div>

          <div className="w-11/12 bg-[#D8E7F0] flex items-center justify-center flex-col rounded-2xl p-3">
            <div className="">
              <img
                src={images[currentImage].image}
                alt="Carousel Image"
                className="object-cover w-32 h-32 rounded-full m-4"
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <h2 className="text-2xl text-gray-800">Hello</h2>
              </div>
              <div className="w-5/6 text-center font-para">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, eligendi? Impedit perferendis debitis qui deleniti
                  ea unde vero asperiores distinctio, commodi, consequatur id
                  aliquam laboriosam, sint aperiam reprehenderit? Libero, sint!
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique, eligendi? Impedit perferendis debitis qui deleniti
                  ea unde vero asperiores distinctio, commodi, consequatur id
                  aliquam laboriosam, sint aperiam reprehenderit? Libero, sint!
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[#E0F445] rounded-2xl p-1">
              <ArrowForwardIcon onClick={handleNextClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
