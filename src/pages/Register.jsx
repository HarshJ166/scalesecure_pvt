import React from "react";
import { Label } from "../utils/Register/Label";
import { Input } from "../utils/Register/Input";
import cn from "../utils/cn";
import Logo from "../assets/images/Scale-secure-logo-black.png";

import ContinuousScroll from "../components/ContinuousScroll";
import StarIcon from "@mui/icons-material/Star";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row h-full bg-[#D8E7F0] font-body">
      {/* left-container */}
      <div className="relative w-full lg:w-1/2 h-full bg-[#03193D] text-white p-4 md:p-12 lg:p-12 flex flex-col justify-between">
        {/* Logo */}
        <div className="mb-4 md:mb-8 lg:mb-10 filter invert">
          <img src={Logo} alt="Logo" className="w-24 md:w-72" />
        </div>

        {/* content */}
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row mb-2">
            <div className="flex flex-row m-1">
              {[...Array(5)].map((_, index) => (
                <StarIcon key={index} />
              ))}
            </div>
            <div className="m-1 mr-2 ml-2 text-lg">RATED 5 STAR ON THE</div>
            <img
              src="https://assets-global.website-files.com/65ea25d04a36a4fafaf8b592/65ea25d04a36a4fafaf8b5ad_Shopify%20App%20Store%201.svg"
              alt="appstore"
              className="m-1 w-24 md:w-40"
            />
          </div>

          <div className="mt-2 mb-8 text-3xl leading-8">
            Book a demo with our <br /> subscription experts
          </div>

          <div className="mb-5 flex flex-col">
            <div className="w-layout-hflex align-center flex m-3">
              <div className="text-yellow-400 w-8 h-8 text-center items-center p-1 bg-yellow-400/25 tracking-tight rounded-2xl">
                1
              </div>
              <div className="pl-2">
                Get a curated tour of the Smartrr platform
              </div>
            </div>
            <div className="w-layout-hflex align-center flex m-3">
              <div className="text-yellow-400 w-8 h-8 text-center items-center p-1 bg-yellow-400/25 tracking-tight rounded-2xl">
                2
              </div>
              <div className="pl-2">
                Get a curated tour of the Smartrr platform
              </div>
            </div>
            <div className="w-layout-hflex align-center flex m-3">
              <div className="text-yellow-400 w-8 h-8 text-center items-center p-1 bg-yellow-400/25 tracking-tight rounded-2xl">
                3
              </div>
              <div className="pl-2">
                Get a curated tour of the Smartrr platform
              </div>
            </div>
            <div className="w-layout-hflex align-center flex m-3">
              <div className="text-yellow-400 w-8 h-8 text-center items-center p-1 bg-yellow-400/25 tracking-tight rounded-2xl">
                4
              </div>
              <div className="pl-2">
                Get a curated tour of the Smartrr platform
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-3">You're in a great Company</div>
          <div>
            <ContinuousScroll />
          </div>
        </div>
      </div>

      {/* right-container */}
      <div className="md:w-1/2 bg-[#D8E7F0] font-body flex items-center justify-center ">
        <div className="max-w-md w-full mx-auto md:mx-0 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#D8E7F0] dark:text-gray-800">
          <h2 className="font-body text-2xl text-neutral-800 dark:text-neutral-200 mt-3">
            Let's Get Started
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Register for a Demo to ascertain if you can because we don't have a
            login flow yet
          </p>

          <form onSubmit={handleSubmit} className=" mt-4 w-full">
            <LabelInputContainer className="mb-4 mt-4">
              <Label htmlFor="FirstName">First Name</Label>
              <Input id="firstname" placeholder="First Name" type="text" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4 mt-4">
              <Label htmlFor="LastName">Last Name</Label>
              <Input id="lastname" placeholder="Last Name" type="text" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4 mt-4">
              <Label htmlFor="email">Work Email Address</Label>
              <Input id="email" placeholder="email@company.com" type="email" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4 mt-4">
              <Label htmlFor="URL">Shopify Store URL</Label>
              <Input
                id="StoreUrl"
                placeholder="www.yourshopifystore.com"
                type="text"
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Schedule Demo
              <BottomGradient />
            </button>

            <div className="flex flex-col space-y-4 mt-3">
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Microsoft
                </span>
                <BottomGradient />
              </button>
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Google
                </span>
                <BottomGradient />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
