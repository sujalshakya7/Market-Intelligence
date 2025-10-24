import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // attach listener only once

  return (
    <nav
      className={`fixed top-0 left-0 w-full backdrop-blur-2xl bg-white/55 shadow-sm py-4 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* ---------------------------------- container ---------------------------------- */}
      <div className=" max-w-7xl mx-auto px-6 flex justify-between items-center font-general-sans  ">
        {/* ---------------------------------- Left ---------------------------------- */}
        <div className="  ">
          <Link to="/">
            {" "}
            <img
              src="/logolong.svg"
              alt="Logo"
              className=" object-cover xs:w-24 sm:w-auto xl:w-auto md:w-30 "
            />
          </Link>
        </div>

        {/* hamburger */}
        <div className="lg:hidden">
          <RxHamburgerMenu
            className="w-8 h-8 cursor-pointer"
            onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
          />
        </div>

        {/* Side Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
            isSideMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col space-y-4 font-general-sans">
            {/* Close Button */}
            <button
              className="self-end text-2xl font-bold"
              onClick={() => setIsSideMenuOpen(false)}
            >
              ×
            </button>

            {/* Menu Links */}
            <Link
              to="/"
              className="hover:text-blue-600"
              onClick={() => setIsSideMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/solution"
              className="hover:text-blue-600"
              onClick={() => setIsSideMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              to="/industiries"
              className="hover:text-blue-600"
              onClick={() => setIsSideMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              to="/blog"
              className="hover:text-blue-600"
              onClick={() => setIsSideMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/pricing"
              className="hover:text-blue-600"
              onClick={() => setIsSideMenuOpen(false)}
            >
              Pricing
            </Link>
          </div>
        </div>

        {/* Overlay */}
        {isSideMenuOpen && (
          <div
            className="fixed inset-0 h-screen bg-primary/20 backdrop-blur-xl z-40"
            onClick={() => setIsSideMenuOpen(false)}
          ></div>
        )}

        {/* ---------------------------------- right ---------------------------------- */}
        <div className="text-gray-500 lg:block xs:hidden ">
          <div className="space-x-8 flex items-center font-normal xl:text-[0.9rem]  lg:text-[0.8rem]   ">
            <Link to="/" className="hover:text-gray-900">
              Helping Your Decide
            </Link>
            <Link to="/solution" className="hover:text-gray-900">
              Solutions
            </Link>

            {/* Industries Dropdown (Click garnu parne) mousehover wala dropdown halyo ki hover garna garo xa */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-gray-900 flex items-center"
              >
                Industries ▾
              </button>

              {isDropdownOpen && (
                <div className="absolute top-8 left-0 bg-white rounded-lg shadow-lg py-2 w-40 z-50">
                  <Link
                    to="/tourism"
                    className="block px-4 py-2 hover:bg-blue-100"
                    onClick={() => setIsDropdownOpen(false)} // close dropdown after click
                  >
                    Tourism
                  </Link>
                </div>
              )}
            </div>

            <Link to="/blog" className="hover:text-gray-900">
              Blog
            </Link>
            <Link to="/pricing" className="hover:text-gray-900">
              Pricing
            </Link>

            <Link
              to="/signin"
              className="px-4 py-2 border text-black border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Sign In
            </Link>
            <Link
              to="/getstarted"
              className="px-5 py-3   bg-primary text-white font-normal rounded-md  hover:bg-blue-800 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      {/* Overlay via Portal */}
      {isSideMenuOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-primary/20 backdrop-blur-xs z-40"
            onClick={() => setIsSideMenuOpen(false)}
          ></div>,
          document.body
        )}
    </nav>
  );
};

export default Navbar;
