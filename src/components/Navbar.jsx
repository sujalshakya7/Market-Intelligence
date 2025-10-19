import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav>
      {/* ---------------------------------- container ---------------------------------- */}
      <div className=" wrapper flex justify-between items-center font-general-sans">
        {/* ---------------------------------- Left ---------------------------------- */}
        <div className="">
          <img src="/logo.svg" alt="Logo" className=" object-cover  " />
        </div>
        {/* ---------------------------------- right ---------------------------------- */}
        <div className="text-gray-500">
          <div className="space-x-8 flex items-center font-normal text-[0.9rem]  ">
            <Link to="/" className="hover:text-gray-900">
              Home
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
    </nav>
  );
};

export default Navbar;
