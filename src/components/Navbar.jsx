import React, { useState } from "react";
import Logo from "../assets/images/ScaleSecurelogoblack.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
// import Button from "./Button";

const Navbar = () => {
  let Links = [
    { name: "PLATFORM", link: "/" },
    { name: "WHY SCALESECURE", link: "/" },
    { name: "PRICING", link: "/Pricing" },
    { name: "RESOURCES", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="w-full top-0 left-0">
      <div className="md:flex items-center justify-between md:px-5 pt-2.5">
        <div className="cursor-pointer flex items-center">
          <img src={Logo} alt="Logo" className="h-7" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <MenuIcon name={open ? "close" : "menu"} />
        </div>

        <div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 md:my-0 my-7">
                <Link
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Link to="/Login">
            <button className="bg-[#cbdaf1] text-black py-1 px-3 rounded md:mr-2 hover:bg-[#03193D] hover:text-white duration-500">
              Login
            </button>
          </Link>
          <Link to="Register">
            <button className="bg-[#E0F445] text-black py-1 px-3 rounded hover:bg-[#03193D] hover:text-white duration-500">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
