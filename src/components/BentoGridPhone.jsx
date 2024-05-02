import React from "react";
import { useState } from "react";

const BentoPhone = () => {
  const [gridOneHovered, setgridOneHovered] = useState(false);
  const [gridTwoHovered, setgridTwoHovered] = useState(false);
  const [gridThreeHovered, setgridThreeHovered] = useState(false);
  const [gridFourHovered, setgridFourHovered] = useState(false);
  const [gridFiveHovered, setgridFiveHovered] = useState(false);
  const [gridSixHovered, setgridSixHovered] = useState(false);

  return (
    <div className="bg-white rounded-3xl py-6">
      <div className="px-7 py-2.5">
        {/* Written Section  */}
        <div className="flex flex-col justify-start items-start py-5 ">
          <h1 className="custom-font font-bold text-3xl text-start">
            The subscription features you need, all in one place
          </h1>
        </div>
        <div className="flex">
          <p>
            Smartrr pairs flexible subscription offerings with analytics, 24/7
            support, and powerful post-purchase engagement tools, giving you
            what you need to grow subscribers with confidence.
          </p>
        </div>
        <div className="my-5">
          <button className="px-8 justify-center items-center box-border bg-[#03193D] text-white text-sm rounded-md font-body hover:bg-black/[0.8] hover:shadow-lg p-3">
            Tour the Platform
          </button>
        </div>
      </div>
      {/* Box-1 */}
      <div className="px-5 py-2.5">
        <div className="  row-span-1 bg-indigo-200 rounded-3xl ">
          <img
            src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65eb4030662288a1c19cba4f_1.%20Tailored%20Subscriptions.svg"
            alt="1"
            className="rounded-3xl"
          />
          <div className=" text-left px-6 py-5">
            <h1 className="font-medium custom-font ">Tailored subscriptions</h1>
            <p>
              We offer tailored subscriptions to suit your needs. Choose from
              our monthly or yearly plans to get started.
            </p>
          </div>
        </div>
      </div>

      {/* Box-2 */}
      <div className="px-5 py-2.5">
        <div className=" row-span-1 bg-indigo-200 rounded-3xl">
          <img
            src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65eeaf0c4a0b7ff56cfbe1eb_2.%20Bundle%20Builder-p-500.png"
            alt="2"
            className="rounded-3xl"
          />
          <div className=" text-left px-6 py-5">
            <h2 className="custom-font font-medium">Bundle Builder</h2>
            <p>
              Increase AOV and let customers curate their own recurring orders
              with “build-a-box” styled subscriptions.
            </p>
          </div>
        </div>
      </div>

      {/* Box-3 */}
      <div className="px-5 py-2.5">
        <div className=" row-span-2 bg-indigo-200 rounded-3xl">
          <img
            src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65eeaef2a22a2ed701312fe5_4.%20Smartrr%20Retention%20Actions-p-500.png"
            alt="3"
            className="rounded-3xl"
          />
          <div className=" text-left px-5 py-5">
            <h2 className="custom-font font-medium">
              Scale Secure Retention Actions
            </h2>
            <p>
              Reduce churn with special offers or marketing actions tailored to
              the specific cancellation or pause reason given by a customer.
            </p>
          </div>
        </div>
      </div>

      {/* Box-4 */}
      <div className="px-5 py-2.5">
        <div className=" row-span-2 bg-indigo-200 rounded-3xl">
          <img
            src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65eeaeadfb1009ccce30ae0e_5.%20Analytics%20%26%20Insights.svg"
            alt="4"
            className="rounded-3xl"
          />
          <div className=" text-left px-5 py-5 ">
            <h2 className="custom-font font-medium ">Analytics & Insights</h2>
            <p>
              Actionable data and insights you can use everyday to grow your
              business. No advanced math degree required.
            </p>
          </div>
        </div>
      </div>

      {/* Box-5 */}
      <div className="px-5 py-2.5">
        <div className=" row-span-1 bg-indigo-200 rounded-3xl">
          <img
            src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65eeaf2475f23110e2d3c289_3.%2024-7%20Support-p-500.png"
            alt="5"
            className="rounded-3xl"
          />
          <div className=" text-left px-5 py-5">
            <h2 className="custom-font font-medium">24/7 Support</h2>
            <p>
              Smartrr is available 24/7 from the moment you sign up with an
              average first response time of under one minute.
            </p>
          </div>
        </div>
      </div>

      {/* Box-6 */}
      <div className="px-5 py-2.5">
        <div className="row-span-1 col-span-2 bg-indigo-200 rounded-3xl">
          <div className="flex sm:flex-row-reverse space-x-5 flex-col-reverse">
            <div className=" w-full  ">
              <img
                src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65eeaf3f6a8f8ff05f938675_6.%20The%20Most%20Engaging%20Customer%20Portal-p-500.png"
                alt="6"
                className="rounded-3xl "
              />
            </div>
            <div className="w-[98%] py-5">
              <h2 className="custom-font font-medium ">
                The Most Engaging Customer Portal
              </h2>
              <p>
                Take your customers’ subscription experience to another level
                with a fully branded customer portal that feels like a true
                extension of your online store experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoPhone;
