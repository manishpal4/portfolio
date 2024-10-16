import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillMediumCircle } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi"; // For the hamburger menu icons
import { NavLink } from "react-router-dom";
import Logo from "./logo"; // Import the Logo component

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 z-20 bg-black/30 backdrop-blur-sm px-4 py-3 rounded-lg">
      <div className="flex justify-between items-center">
        {/* Logo Section (Clickable Link to Home) */}
        <Logo />

        {/* Hamburger Menu (Only visible on Small Screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navbar Links */}
        <div className="font-heading">
        <ul
          className={`md:flex gap-6 text-white items-center md:static absolute bg-black/30 md:bg-transparent w-full md:w-auto left-0 transition-all duration-500 ease-in ${
            isOpen ? "top-16 flex flex-col px-4" : "top-[-200px] hidden"
          } md:flex md:flex-row`} // Always show links on large screens
        >
          <li>
            <NavLink
              to="/My_Stack"
              className={({ isActive }) =>
                isActive ? "font-bold text-lg underline" : "text-lg"
              }
              onClick={() => setIsOpen(false)} // Close menu when a link is clicked
            >
              My Stack
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Works"
              className={({ isActive }) =>
                isActive ? "font-bold text-lg underline" : "text-lg"
              }
              onClick={() => setIsOpen(false)}
            >
              Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Experience"
              className={({ isActive }) =>
                isActive ? "font-bold text-lg underline" : "text-lg"
              }
              onClick={() => setIsOpen(false)}
            >
              Experience
            </NavLink>
          </li>
          <a className="text-lg " href="https://drive.google.com/file/d/1uGJKR1SjruHLujfqJVXuf43UUhrJNRQX/view?usp=sharing" target="_blank">Resume</a>
          
        </ul>
        </div>

        {/* Social Media Links (Always Visible) */}
        <div className="flex gap-4 text-white text-2xl">
          <a href="https://medium.com/@Mann_eei" className="hover:text-gray-400">
            <AiFillMediumCircle />
          </a>
          <a href="https://github.com/manishpal4" className="hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/manish0kumar/" className="hover:text-gray-400">
            <IoLogoLinkedin />
          </a>
          <a href="https://www.instagram.com/mann_eei/" className="hover:text-gray-400">
            <BsInstagram />
          </a>
        </div>
      </div>
    </nav>
  );
};
