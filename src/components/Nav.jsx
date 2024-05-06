import React, { useState } from "react";
import logo from "../assets/images/ScaleSecurelogoblack.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className="flex justify-between items-center bg-[#D5E3F8] text-black py-3 px-2 rounded-3xl w-full h-full"
      onMouseLeave={handleMouseLeave}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 justify-center ">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-7" />
        </Link>
        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Hamburger menu items */}
      {showMenu ? (
        <div className="md:hidden custom-font ">
          <div className="bg-white h-10 w-28 rounded-lg flex justify-center items-center text-sm m-1">
            <NavItem
              active={activeItem === "Services"}
              setActive={() => setActiveItem("Services")}
            >
              Services
            </NavItem>
          </div>
          <div className="bg-white h-10 w-28 rounded-lg flex justify-center items-center text-sm m-1">
            <NavItem
              active={activeItem === "Products"}
              setActive={() => setActiveItem("Products")}
            >
              Products
            </NavItem>
          </div>
          <div className="bg-white h-10 w-28 rounded-lg flex justify-center items-center text-sm m-1">
            <Link to="/Pricing">Pricing</Link>
          </div>
          <div className="bg-white h-10 w-28 rounded-lg flex justify-center items-center text-sm m-1">
            <NavItem
              active={activeItem === "Resources"}
              setActive={() => setActiveItem("Resources")}
            >
              Resources
            </NavItem>
          </div>
          <div className="bg-white h-10 w-28 rounded-lg flex justify-center items-center text-sm  m-1">
            <Link to="/login" className="hover:text-black">
              Login
            </Link>
          </div>
          <div className="bg-white h-10 w-28 rounded-lg flex justify-center items-center text-sm  m-1">
            <Link to="/Register" className="hover:text-black">
              Register
            </Link>
          </div>
        </div>
      ) : null}

      {/* Navbar items for medium, large, extra-large, and 2xl screens */}
      <div className="hidden md:flex md:space-x-2 custom-font">
        {/* Navbar items */}
        <div className="bg-white h-10 w-28 rounded-lg flex justify-center items-center text-sm m-1">
          <NavItem
            active={activeItem === "Services"}
            setActive={() => setActiveItem("Services")}
          >
            Services
          </NavItem>
        </div>
        <div className="bg-white h-10 w-28 rounded-lg flex justify-center items-center text-sm m-1">
          <NavItem
            active={activeItem === "Products"}
            setActive={() => setActiveItem("Products")}
          >
            Products
          </NavItem>
        </div>
        <div className="bg-white h-10 w-28 rounded-lg flex justify-center items-center text-sm m-1">
          <Link to="/Pricing">Pricing</Link>
        </div>
        <div className="bg-white h-10 w-28 rounded-lg flex justify-center items-center text-sm m-1">
          <NavItem
            active={activeItem === "Resources"}
            setActive={() => setActiveItem("Resources")}
          >
            Resources
          </NavItem>
        </div>
        {/* Links to login and signup */}
        <div className="bg-white h-10 w-28 rounded-lg flex justify-center items-center text-sm  m-1">
          <Link to="/login" className="hover:text-black">
            Login
          </Link>
        </div>
        <div className="bg-white h-10 w-28 rounded-lg flex justify-center items-center text-sm  m-1">
          <Link to="/Register" className="hover:text-black">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ active, setActive, children }) => {
  return (
    <div onMouseEnter={setActive} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] custom-font"
      >
        {children}
      </motion.p>
      {active && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4"
        >
          <motion.div
            transition={transition}
            layoutId="active"
            className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] shadow-xl"
          >
            {/* Child items */}
            {children === "Services" ? (
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">
                  Interface Design
                </HoveredLink>
                <HoveredLink href="/seo">
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            ) : children === "Products" ? (
              <div className="text-sm grid grid-cols-2 gap-10 p-4 w-max h-full">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
              </div>
            ) : children === "Resources" ? (
              <div className="flex flex-col space-y-4 text-sm w-max h-full p-2">
                <HoveredLink href="/blog">Blog</HoveredLink>
                <HoveredLink href="/podcast">Podcast</HoveredLink>
                <HoveredLink href="/newsletter">Newsletter</HoveredLink>
                <HoveredLink href="/guides">Guides</HoveredLink>
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const ProductItem = ({ title, description, href, src }) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
        style={{ width: "140px", height: "70px" }}
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black">{title}</h4>
        <p className="text-neutral-700 text-sm max-w-[10rem]">{description}</p>
      </div>
    </a>
  );
};

const HoveredLink = ({ children, ...rest }) => {
  return (
    <a {...rest} className="text-neutral-700 hover:text-black">
      {children}
    </a>
  );
};

export default Navbar;
