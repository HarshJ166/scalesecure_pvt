import React from "react";
import logo from "../assets/images/ScaleSecurelogoblack.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center bg-[#D8E7F0] text-black py-4 px-4">
      {/* Left part of the navbar */}
      <div className="flex items-center space-x-6 space-y-2 md:space-x-3 md:space-y-2">
        <div>
          <img src={logo} alt="Logo" className="h-7" />
        </div>
        <div className="flex space-x-6">
          <Link to="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link to="/services" className="hover:text-gray-300">
            Services
          </Link>
          <Link to="/pricing" className="hover:text-gray-300">
            Pricing
          </Link>
        </div>
      </div>

      {/* Right part of the navbar */}
      <div className="flex flex-flow space-x-2 space-y-1 items-center md:items-end">
        {/* Links to login and signup */}
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
