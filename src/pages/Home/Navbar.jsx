import React, { useState, useRef, useEffect } from "react";
import img from "../../assets/Frame.svg";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between mb-10 sm:mb-20 items-center sm:items-start space-y-4 sm:space-y-0 px-4">
      
      {/* Logo */}
      <div className="flex space-x-1 items-center">
        <img src={img} alt="Logo Icon" className="h-6 w-6 md:h-8.5 md:w-8.5" />
        <img src={logo} alt="Logo" className="h-6 w-20 md:h-9 md:w-27.5" />
      </div>

      {/* Navigation + Dropdown */}
      <div className="flex items-center space-x-4">
        {/* Dropdown Menu */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center space-x-1 px-3 py-2 rounded-lg border border-white/50 bg-[linear-gradient(241deg,_rgba(255,255,255,0.5)_-7.37%,_rgba(255,255,255,0.1)_89.52%)] backdrop-blur-[6.67px]"
          >
            <span className="text-sm sm:text-base">Menu</span>
            <img
              src={arrow}
              alt=""
              className={`bg-white p-1 rounded-full h-6 w-6 sm:h-7 sm:w-7 transition-transform ${
                menuOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Links */}
          <div
            className={`absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg overflow-hidden z-50 transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <a href="#about" className="block px-4 py-3 text-gray-800 hover:bg-gray-100">
              About
            </a>
            <a href="#services" className="block px-4 py-3 text-gray-800 hover:bg-gray-100">
              Services
            </a>
            <a href="#projects" className="block px-4 py-3 text-gray-800 hover:bg-gray-100">
              Projects
            </a>
          </div>
        </div>

        {/* Contact Us Button */}
        <div className="flex items-center max-md:hidden space-x-1 rounded-[45.333px] px-3 py-2.5 border border-white/50 bg-[linear-gradient(241deg,_rgba(255,255,255,0.5)_-7.37%,_rgba(255,255,255,0.1)_89.52%)] backdrop-blur-[6.67px]">
          <h2 className="text-sm sm:text-base">Contact Us</h2>
          <img
            src={arrow}
            alt=""
            className="bg-white p-1 rounded-full h-6 w-6 sm:h-7 sm:w-7"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
