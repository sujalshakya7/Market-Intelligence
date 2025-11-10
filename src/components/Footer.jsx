import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <footer className="wrapper2 font-general-sans mt-20">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between xs:gap-10 sm:gap-5 lg:gap-20">
        {/* Left Section */}
        <div className="flex flex-col items-start  lg:text-left w-full lg:w-1/3">
          <img src="logolong.svg" alt="logo" className="w-40 mb-4" />
          <p className="max-w-sm mb-2 text-sm md:text-base text-gray-700">
            We provide market data and insights to help you make better business
            decisions.
          </p>
          <button className="bg-primary rounded-full px-8 py-5 flex items-center gap-3 text-white hover:bg-primary/90 transition text-sm md:text-base">
            Explore Industries
            <GoArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Section (Links) */}
        <div className="flex   xs:flex-wrap sm:justify-between xs:gap-10  sm:gap-5 text-sm md:text-base w-full lg:w-2/3">
          {/* Quick Links */}
          <div className="flex flex-col gap-3 min-w-[150px]">
            <h2 className="h2 text-lg font-semibold mb-2">Quick Links</h2>
            <Link to="/">Helping You Decide</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/solutions">FAQ & Support</Link>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-3 min-w-[150px]">
            <h2 className="h2 text-lg font-semibold mb-2">Solutions</h2>
            <Link to="/">Market Intelligence Dashboard</Link>
            <Link to="/blog">Brand Performance Analytics</Link>
            <Link to="/pricing">On Demand Data Collection</Link>
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col gap-3 min-w-[150px]  lg:items-start">
            <h2 className="h2 text-lg font-semibold mb-2">Get in Touch</h2>
            <Link to="mailto:infography@gmail.com" className="hover:underline">
              infography@gmail.com
            </Link>
            <div className="flex gap-3">
              <Link
                to="/linkedin"
                className="p-2 bg-primary text-white rounded-sm hover:bg-primary/90 transition"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="/twitter"
                className="p-2 bg-primary text-white rounded-sm hover:bg-primary/90 transition"
              >
                <FaXTwitter />
              </Link>
              <Link
                to="/youtube"
                className="p-2 bg-primary text-white rounded-sm hover:bg-primary/90 transition"
              >
                <FiYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t mt-10 border-gray-300 w-full" />

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between  sm:text-left gap-5 py-5 text-sm md:text-base text-gray-600">
        <p>© 2025 Mentora, All rights reserved</p>
        <div className="flex justify-between gap-4">
          <Link to="/" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link to="/" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
