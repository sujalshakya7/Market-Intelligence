import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";


function Footer({ onExploreIndustries }) {
    const navigate = useNavigate();

    const handleExploreIndustries = () => {
    // Navigate to home and pass state
    navigate("/", { state: { scrollToIndustries: true } });
  };
  return (
    <section className="wrapper">
      <footer className="font-general-sans flex flex-col gap-10 bg-white mt-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between xs:gap-10 sm:gap-5 lg:gap-20">
          {/* Left Section */}
          <div className="flex flex-col items-start  lg:text-left w-full lg:w-1/3">
            <img src="logolong.svg" alt="logo" className="w-40 mb-4" />
            <p className="max-w-sm mb-2 text-sm md:text-base text-gray-700">
              We provide market data and insights to help you make better
              business decisions.
            </p>
            <button
              onClick={handleExploreIndustries}
              className="bg-primary rounded-md px-8 py-5 mt-3 flex items-center gap-3 text-md text-white hover:bg-primary/90 transition  md:text-base">
              Explore Industries
            </button>
          </div>

          {/* Right Section (Links) */}
          <div className="flex  sm:flex lg:justify-end  xs:flex-wrap xs:gap-10 sm:justify-between   sm:gap-5 text-sm md:text-base w-full ">
            {/* Quick Links */}
            {/* <div className="flex flex-col gap-3 min-w-[150px] mr-10">
              <h2 className="h2 text-lg font-semibold mb-2">Quick Links</h2>
              <Link to="/">Helping You Decide</Link>
              <Link to="/coming">Blog</Link>
              <Link to="/coming">Pricing</Link>
              <Link to="/coming">FAQ & Support</Link>
            </div> */}

            {/* Solutions */}
            <div className="flex flex-col gap-3 min-w-[150px] mr-10 ">
              <h2 className="h2 text-lg font-semibold mb-2">Solutions</h2>
              <Link to="/coming">Market Intelligence Dashboard</Link>
              <Link to="/coming">Brand Performance Analytics</Link>
              <Link to="/coming">On Demand Data Collection</Link>
            </div>

            {/* Get in Touch */}
            <div className="flex flex-col gap-3 min-w-[150px]  lg:items-start ">
              <h2 className="h2 text-lg font-semibold mb-2">Get in Touch</h2>
              <Link
                to="mailto:infography@gmail.com"
                className="hover:underline"
              >
                infographytech9@gmail.com
              </Link>

              <Link
                to="https://www.linkedin.com/company/infographytechnologies/"
                className="hover:underline"
              >
                Linkden
              </Link>
              {/* <div className="flex gap-3">
                <Link
                  to="/linkedin"
                  className="p-2 bg-primary text-white rounded-sm hover:bg-primary/90 transition"
                  aria-label="Linkedin Icon"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  to="/coming"
                  className="p-2 bg-primary text-white rounded-sm hover:bg-primary/90 transition"
                  aria-label="Twitter Icon"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  to="/coming"
                  className="p-2 bg-primary text-white rounded-sm hover:bg-primary/90 transition"
                  aria-label="Youtube Icon"
                >
                  <FiYoutube />
                </Link>
              </div> */}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t mt-10 border-gray-300 w-full" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between  sm:text-left gap-5 py-5 text-sm md:text-base text-gray-600">
          <p>&copy; 2025 Infography Technologies, All Rights Reserved</p>
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
    </section>
  );
}

export default Footer;
