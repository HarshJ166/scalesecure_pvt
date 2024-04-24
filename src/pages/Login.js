import React from "react";

import { Label } from "../components/ui/Login/label";
import { Input } from "../components/ui/Login/input";
import { cn } from "../utils/cn";
import logo from "../assets/logo2.png";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen custom-font bg-[#D8E7F0]">
      {/* Left side - Scale Secure logo */}
      <div className="md:w-1/2 bg-[#03193D] flex items-center justify-center">
        <img src={logo} alt="Scale Secure" className="w-96" />
      </div>
      {/* Right side - Login form */}
      <div className="md:w-1/2 bg-[#D8E7F0] font-primarybold flex items-center justify-center">
        <div className="max-w-md w-full mx-auto md:mx-0 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#D8E7F0] dark:bg-[#03193D]">
          <h2 className="font-primarybold text-xl md:text-2xl text-gray-800 dark:text-gray-200">
            Welcome to Scale Secure
          </h2>
          <p className="text-white dark:text-white text-md md:text-lg max-w-sm mt-2">
            Login to Scale Secure to access your account
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 ">
              <LabelInputContainer>
                <Label htmlFor="Username">Username</Label>
                <Input id="Username" placeholder="Username" type="text" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Login →
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
        </div>
      </div>
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

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Login;
