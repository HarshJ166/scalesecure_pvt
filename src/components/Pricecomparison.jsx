import { useState } from "react";

const Pricingcomparison = () => {
  const minusIcon = (
    <svg
      className="w-5 h-5 mx-auto text-[#03193D]"
      fill="[#03193D]"
      viewBox="0 0 20 20"
    >
      <path d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" />
    </svg>
  );
  const checkIcon = (
    <img
      src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65ef70fa1cdf16989b064e68_noun-checkmark-5978148-3B1E33.svg"
      alt="checkmark"
      className="w-8 h-8 mx-auto"
    />
  );

  const plans = [
    {
      name: "Launch",
      desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
      price: "15",
    },
    {
      name: "Grow",
      desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
      price: "20",
    },
    {
      name: "Excel",
      desc: "Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.",
      price: "50",
    },
  ];

  const tables = [
    {
      label: "Features",
      label_icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      items: [
        {
          id: 1,
          name: "Aliquam finibus",
          basic: checkIcon,
          business: checkIcon,
          enterprise: checkIcon,
        },
        {
          id: 2,
          name: "Vestibulum tristique",
          basic: minusIcon,
          business: checkIcon,
          enterprise: checkIcon,
        },
        {
          id: 3,
          name: "Aliquam finibus",
          basic: minusIcon,
          business: minusIcon,
          enterprise: checkIcon,
        },
        {
          id: 4,
          name: "Praesent aliquet",
          basic: minusIcon,
          business: "150GB",
          enterprise: "Unlimited",
        },
      ],
    },
    {
      label: "Analytics",
      label_icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
      items: [
        {
          id: 5,
          name: "Aliquam finibus",
          basic: checkIcon,
          business: checkIcon,
          enterprise: checkIcon,
        },
        {
          id: 6,
          name: "Vestibulum tristique",
          basic: minusIcon,
          business: checkIcon,
          enterprise: checkIcon,
        },
        {
          id: 7,
          name: "Aliquam finibus",
          basic: minusIcon,
          business: minusIcon,
          enterprise: checkIcon,
        },
        {
          id: 8,
          name: "Lorinto dinor",
          basic: "30",
          business: "60",
          enterprise: "Custom",
        },
        {
          id: 9,
          name: "Praesent aliquet",
          basic: "Limited",
          business: "Limited",
          enterprise: checkIcon,
        },
        {
          id: 10,
          name: "Praesent aliquet",
          basic: minusIcon,
          business: "150GB",
          enterprise: "Unlimited",
        },
      ],
    },
    {
      label: "Support",
      label_icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
      ),
      items: [
        {
          id: 11,
          name: "Aliquam finibus",
          basic: checkIcon,
          business: checkIcon,
          enterprise: checkIcon,
        },
        {
          id: 12,
          name: "Vestibulum tristique",
          basic: minusIcon,
          business: checkIcon,
          enterprise: checkIcon,
        },
        {
          id: 13,
          name: "Aliquam finibus",
          basic: minusIcon,
          business: minusIcon,
          enterprise: checkIcon,
        },
        {
          id: 14,
          name: "Praesent aliquet",
          basic: minusIcon,
          business: "150GB",
          enterprise: "Unlimited",
        },
      ],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(plans[0].name);

  return (
    <section className="py-14 text-[#03193D] custom-font">
      <div className="">
        <div className="mt-16 custom-font">
          <div className="py-6 border-b bg-[#D5E3F8] sticky top-0 z-20">
            <div className="flex flex-row max-w-screen-xl mx-auto h-5/6">
              <div className="w-[35%]">
                <p className="w-[50%] text-[#03193D] text-4xl custom-font font-extrabold sm:text-5xl ">
                  Pricing Breakdown
                </p>
              </div>
              <div className="">
                <ul className="ml-auto flex gap-x-8 px-4 md:px-8 lg:max-w-3xl">
                  {plans.map((item, idx) => (
                    <li
                      key={idx}
                      className={`space-y-4 w-full ${
                        item.name !== selectedPlan ? "hidden lg:block" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between custom-font text-xl font-extrabold ">
                        <span className="text-[#03193D] font-bold text-2xl">
                          {item.name}
                        </span>
                        <div className="relative lg:hidden">
                          <svg
                            className="w-5 h-5 text-gray-500 absolute right-0 inset-y-0 my-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <select
                            value="Switch plan"
                            className="bg-transparent appearance-none outline-none px-8 cursor-pointer"
                            onChange={(e) => setSelectedPlan(e.target.value)}
                          >
                            <option disabled selected>
                              Switch plan
                            </option>
                            {plans.map((option, idx) => (
                              <option key={idx}>{option.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="flex  flex-col text-[#03193D] text-5xl font-semibold bg-[#D5E3F8] py-6 border-b">
                        ${item.price}{" "}
                        <h3 className=" flex justify-start items-start text-sm text-[#03193D] font-normal py-2.5 ">
                          per month
                        </h3>
                      </div>

                      <div>
                        <p className="text-sm">{item.desc}</p>
                        <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-black bg-[#E0F445] hover:bg-[#dae86f] active:bg-[#E0F445] mt-5">
                          Get Started
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Tables  */}
          <div className="max-w-screen-xl mx-auto mt-10 space-y-4 px-4 overflow-auto md:overflow-visible md:px-8">
            {tables.map((table, tableIdx) => (
              <table
                key={tableIdx}
                className="w-full table-auto text-sm text-left"
              >
                <thead className="text-[#03193D] font-normal border-b">
                  <tr>
                    <th className="z-20 top-12 py-6 lg:">
                      <div className="flex items-center gap-x-3">
                        <div className="w-12 h-12 text-[#03193D] rounded-full border-spacing-1 flex items-center justify-center">
                          {table.label_icon}
                        </div>
                        <h4 className="text-[#03193D] text-xl font-medium">
                          {table.label}
                        </h4>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[#03193D] divide-y">
                  {table.items.map((item, itemIdx) => (
                    <tr
                      key={itemIdx}
                      className={itemIdx % 2 === 0 ? "bg-[#85a0b1]" : ""}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.name}
                      </td>

                      {/* For large devices */}
                      <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                        {item.basic}
                      </td>
                      <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                        {item.business}
                      </td>
                      <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                        {item.enterprise}
                      </td>

                      {/* For small devices */}
                      <td className="text-center w-[250px] px-6 py-4 whitespace-nowrap lg:hidden">
                        {item[selectedPlan.toLowerCase()]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricingcomparison;
