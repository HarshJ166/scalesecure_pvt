import React from "react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic plan",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 12,
      isMostPop: false,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
    {
      name: "Startup",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 35,
      isMostPop: true,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
    {
      name: "Enterprise",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 60,
      isMostPop: false,
      features: [
        "Curabitur faucibus",
        "massa ut pretium maximus",
        "Sed posuere nisi",
        "Pellentesque eu nibh et neque",
        "Suspendisse a leo",
        "Praesent quis venenatis ipsum",
        "Duis non diam vel tortor",
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center custom-font">
      <section className="flex flex-col">
        <div className="text-[#03193D] flex flex-col justify-self-center items-center w-7/12 space-y-4 mx-auto mb-10">
          <h1 className="font-bold text-4xl">
            The smartest way to invest in your repeat customers.
          </h1>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 text-black md:px-8 space-y-10">
          <div className="relative max-w-xl mx-auto sm:text-center"></div>
          <div className="mt-20 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3 ">
            {plans.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex-1 flex items-stretch flex-col rounded-3xl bg-white border-2 mt-6 sm:mt-0 ${
                  item.isMostPop ? "mt-10" : ""
                }`}
                style={
                  item.isMostPop
                    ? { transform: "translateY(-.75rem) scale(1.09)" }
                    : {}
                }
              >
                {item.isMostPop && (
                  <span className="w-[50%] absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-xl border shadow-md bg-[#03193D] text-center text-white text-sm font-semibold">
                    Most popular
                  </span>
                )}
                <div className="p-8 space-y-4 border-b">
                  <span className="text-[#03193D] font-medium">
                    {item.name}
                  </span>
                  <div className="text-[#03193D] text-3xl font-semibold">
                    ${item.price}{" "}
                    <span className="text-xl text-gray-600 font-normal">
                      /mo
                    </span>
                  </div>
                  <p>{item.desc}</p>
                  <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-black bg-[#E0F445] hover:bg-[#dde88e] active:bg-[#E0F445]">
                    Get Started
                  </button>
                </div>
                <ul className="p-8 space-y-3">
                  <li className="pb-2 text-[#03193D] font-medium">
                    <p>Features</p>
                  </li>
                  {item.features.map((featureItem, idx) => (
                    <li key={idx} className="flex items-center gap-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {featureItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
