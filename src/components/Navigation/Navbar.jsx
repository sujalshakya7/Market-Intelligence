import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { PiChartBarHorizontal } from "react-icons/pi";
import { BiTachometer } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";

const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [isSolutionHover, setIsSolutionHover] = useState(false);
  const [isIndustryHover, setIsIndustryHover] = useState(false);
  const lastScrollY = useRef(0);

  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (menu) => {
    setOpenSubmenu((prev) => (prev === menu ? null : menu));
  };

  // Hide / show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full backdrop-blur-2xl bg-white shadow-sm z-50
        transition-all duration-500
        ${show ? "translate-y-0" : "-translate-y-full"}
        ${isIndustryHover || isSolutionHover ? "h-auto" : "h-[5rem]"}
      `}
      onMouseLeave={() => {
        setIsIndustryHover(false);
        setIsSolutionHover(false);
      }}
    >
      {/* TOP NAVBAR */}
      <div className="wrapper2 max-w-7xl mx-auto px-6 flex justify-between items-center font-general-sans h-[5rem]">
        {/* Logo */}
        <Link to="/">
          <img src="/logolong.svg" className="xs:w-24 sm:w-auto" alt="Logo" />
        </Link>

        {/* HAMBURGER ICON */}
        <div className="lg:hidden">
          <RxHamburgerMenu
            className="w-8 h-8 cursor-pointer"
            onClick={() => {
              setIsSideMenuOpen(true);
              document.body.style.overflow = "hidden"; // Disable scrolling
            }}
          />
        </div>

        {/* BACKDROP CLICK TO CLOSE */}
        <div
          className={`
    fixed inset-0  z-40 transition-all duration-300 lg:hidden
    ${isSideMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
  `}
          onClick={() => {
            setIsSideMenuOpen(false);
            document.body.style.overflow = "auto";
          }}
        ></div>

        {/* SLIDING SIDE MENU FROM RIGHT */}
        <div
          className={`
   fixed top-0 bottom-0 right-0 w-80 h-screen bg-white z-50 shadow-xl
    transition-transform duration-300 lg:hidden
    translate-x-0
    ${isSideMenuOpen ? "translate-x-0" : "translate-x-full"}
  `}
        >
          {/* CLOSE BUTTON */}
          <button
            className="absolute top-4 right-4 text-3xl cursor-pointer"
            onClick={() => {
              setIsSideMenuOpen(false); // Close the menu
              document.body.style.overflow = "auto"; // Re-enable scrolling
            }}
          >
            ×
          </button>

          {/* MENU ITEMS */}
          <div className="pt-20 px-6 flex flex-col space-y-6 text-gray-700 bg-white ">
            <Link
              to="/"
              className="py-3 border-b border-gray-100"
              onClick={() => {
                setIsSideMenuOpen(false);
                document.body.style.overflow = "auto";
              }}
            >
              Helping You Decide
            </Link>

            {/* SOLUTIONS SUBMENU */}
            <div>
              <button
                className="py-3 border-b border-gray-100 w-full text-left flex justify-between items-center"
                onClick={() => toggleSubmenu("solutions")}
              >
                Solutions
                <FaAngleDown
                  className={`transition-transform ${
                    openSubmenu === "solutions" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openSubmenu === "solutions" && (
                <div className="ml-4 mt-2 space-y-4 py-2">
                  <Link
                    to="/coming"
                    className="block py-2 px-4  rounded-lg"
                    onClick={() => {
                      setIsSideMenuOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <PiChartBarHorizontal className="text-blue-600 w-6 h-6" />
                      <span className="font-semibold">
                        Market Intelligence Dashboard
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 ml-9">
                      Real-time market insights in one place
                    </p>
                  </Link>

                  <Link
                    to="/coming"
                    className="block py-2 px-4  rounded-lg"
                    onClick={() => {
                      setIsSideMenuOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <BiTachometer className="text-blue-600 w-6 h-6" />
                      <span className="font-semibold">
                        Brand Performance Analytics
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 ml-9">
                      Measure your brand's position and growth
                    </p>
                  </Link>

                  <Link
                    to="/coming"
                    className="block py-2 px-4  rounded-lg"
                    onClick={() => {
                      setIsSideMenuOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <HiOutlineUserGroup className="text-blue-600 w-6 h-6" />
                      <span className="font-semibold">
                        On Demand Data Collection
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 ml-9">
                      Tailored data collection for your goals
                    </p>
                  </Link>
                </div>
              )}
            </div>

            {/* INDUSTRIES SUBMENU BUTTON */}
            <div>
              <button
                className="py-3 border-b border-gray-100 w-full text-left flex justify-between items-center"
                onClick={() => toggleSubmenu("industries")}
              >
                Industries
                <FaAngleDown
                  className={`transition-transform ${
                    openSubmenu === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openSubmenu === "industries" && (
                <div className="ml-4 mt-2 space-y-2 py-2">
                  <Link
                    to="/tourism"
                    className="block py-2 px-4  rounded-lg"
                    onClick={() => {
                      setIsSideMenuOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    Tourism
                  </Link>
                  <Link
                    to="/coming"
                    className="block py-2 px-4  rounded-lg"
                    onClick={() => {
                      setIsSideMenuOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    Technology
                  </Link>
                  <Link
                    to="/coming"
                    className="block py-2 px-4  rounded-lg"
                    onClick={() => {
                      setIsSideMenuOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    Finance
                  </Link>
                  <Link
                    to="/coming"
                    className="block py-2 px-4  rounded-lg"
                    onClick={() => {
                      setIsSideMenuOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    Healthcare
                  </Link>
                  <Link
                    to="/coming"
                    className="block py-2 px-4  rounded-lg"
                    onClick={() => {
                      setIsSideMenuOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    Media
                  </Link>
                  <Link
                    to="/coming"
                    className="block py-2 px-4  rounded-lg"
                    onClick={() => {
                      setIsSideMenuOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    Education
                  </Link>
                  <Link
                    to="/coming"
                    className="block py-2 px-4  rounded-lg"
                    onClick={() => {
                      setIsSideMenuOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    Energy
                  </Link>
                  <Link
                    to="/coming"
                    className="block py-2 px-4  rounded-lg"
                    onClick={() => {
                      setIsSideMenuOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    Food & Beverage
                  </Link>
                  <Link
                    to="/coming"
                    className="block py-2 px-4  rounded-lg"
                    onClick={() => {
                      setIsSideMenuOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    Agriculture
                  </Link>
                  <Link
                    to="/coming"
                    className="block py-2 px-4  rounded-lg"
                    onClick={() => {
                      setIsSideMenuOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    Automobile
                  </Link>
                  <Link
                    to="/coming"
                    className="block py-2 px-4  rounded-lg"
                    onClick={() => {
                      setIsSideMenuOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    Insurance
                  </Link>
                  <Link
                    to="/coming"
                    className="block py-2 px-4  rounded-lg"
                    onClick={() => {
                      setIsSideMenuOpen(false);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    Logistics
                  </Link>
                </div>
              )}
            </div>

            {/* NORMAL LINKS */}
            <Link
              to="/coming"
              className="py-3 border-b border-gray-100"
              onClick={() => {
                setIsSideMenuOpen(false);
                document.body.style.overflow = "auto";
              }}
            >
              Blog
            </Link>

            <Link
              to="/coming"
              className="py-3 border-b border-gray-100"
              onClick={() => {
                setIsSideMenuOpen(false);
                document.body.style.overflow = "auto";
              }}
            >
              Pricing
            </Link>

            {/* AUTH BUTTONS */}
            <div className="flex flex-col gap-3 pt-4">
              <Link
                to="/coming"
                className="py-3 px-4 text-center border border-slate-300 bg-white rounded-sm hover:border-primary transition-all"
                onClick={() => {
                  setIsSideMenuOpen(false);
                  document.body.style.overflow = "auto";
                }}
              >
                Sign In
              </Link>

              <Link
                to="/coming"
                className="py-3 px-4 text-center bg-primary text-white rounded-sm hover:bg-blue-800"
                onClick={() => {
                  setIsSideMenuOpen(false);
                  document.body.style.overflow = "auto";
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex space-x-8 text-gray-600 text-sm items-center h-full">
          <Link to="/" className="hover:text-gray-900">
            Helping You Decide
          </Link>

          {/* SOLUTIONS MENU */}
          <div className="relative">
            <button
              className="hover:text-gray-900 flex items-center gap-2"
              onClick={() => {
                setIsSolutionHover((prev) => !prev);
                setIsIndustryHover(false);
              }}
              onMouseEnter={() => {
                setIsSolutionHover(true);
                setIsIndustryHover(false);
              }}
            >
              Solutions
              <FaAngleDown
                className={`transition-transform duration-300 ${
                  isSolutionHover ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>

          {/* Industries Button */}
          <button
            className="hover:text-gray-900 flex items-center gap-2"
            onClick={() => {
              setIsIndustryHover((prev) => !prev);
              setIsSolutionHover(false);
            }}
            onMouseEnter={() => {
              setIsIndustryHover(true);
              setIsSolutionHover(false);
            }}
          >
            Industries
            <FaAngleDown
              className={`transition-transform duration-300 ${
                isIndustryHover ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          <Link to="/coming" className="hover:text-gray-900">
            Blog
          </Link>
          <Link to="/coming" className="hover:text-gray-900">
            Pricing
          </Link>

          <div className="flex h-10 items-center gap-4">
            <Link
              to="/coming"
              className="py-3 px-4 h-full flex items-center text-black border border-slate-300 bg-white/60 rounded-sm hover:border-primary hover:bg-slate-100 transition-all duration-300"
            >
              Sign In
            </Link>

            <Link
              to="/coming"
              className="py-3 px-3 flex items-center h-full bg-primary text-white rounded-sm hover:bg-blue-800"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* EXPANDED AREA WHEN SOLUTIONS HOVER/CHECKED */}
      {isSolutionHover && (
        <div
          className="bg-white shadow-inner px-10 py-10"
          onMouseLeave={() => setIsSolutionHover(false)}
        >
          <div className="flex justify-between">
            <div className="flex gap-8">
              <div className="w-[20rem]">
                <h1 className="text-xl font-semibold">Our Solution</h1>
                <p className="mt-5 text-slate-600">
                  Our solutions are designed to provide actionable insights,
                  real-time analytics, and strategic guidance to help businesses
                  thrive.
                </p>
              </div>
              <hr className="mr-12 w-[0.1rem] h-auto bg-slate-300 rounded-full"></hr>
            </div>

            <div className="flex gap-x-30 text-gray-700 text-[1rem]">
              <div className="flex justify-between w-full gap-10">
                <Link
                  to="/coming"
                  className="bg-primary/10 border border-primary opacity w-full px-6 py-5 flex flex-col  rounded-sm"
                >
                  <PiChartBarHorizontal className=" text-blue-600 mb-3  w-10 h-10 border border-primary p-2 rounded-sm " />
                  <div className=" text-slate-900 hover:text-primary mb-2 font-semibold">
                    Market Intelligence Dashboard
                  </div>
                  <p>
                    Real-time market insights in one place. Track trends and
                    make smarter decisions with customizable dashboards
                  </p>
                </Link>

                <Link
                  to="/coming"
                  className="bg-primary/10 border border-primary opacity px-5 py-5 flex flex-col w-full  rounded-sm"
                >
                  <BiTachometer className=" text-blue-600 mb-3  w-10 h-10 border border-primary p-2 rounded-sm " />
                  <div className=" text-slate-900 hover:text-primary mb-2 font-semibold">
                    Brand Performance Analytics
                  </div>
                  <p>
                    Measure your brand's position and growth. Track visibility
                    and engagement across all channels
                  </p>
                </Link>

                <Link
                  to="/coming"
                  className="bg-primary/10 border border-primary w-full opacity px-5 py-5 flex flex-col  rounded-sm"
                >
                  <HiOutlineUserGroup className=" text-blue-600 mb-3  w-10 h-10 border border-primary p-2 rounded-sm " />
                  <div className=" text-slate-900 hover:text-primary mb-2 font-semibold">
                    On Demand Data Collection
                  </div>
                  <p>
                    We collect and analyze the exact data you need — tailored to
                    your goals and verified for accuracy
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EXPANDED AREA WHEN HOVERING FOR INDUSTRIES*/}
      {isIndustryHover && (
        <div
          className="bg-white shadow-inner px-10 py-10"
          onMouseLeave={() => setIsIndustryHover(false)}
        >
          <div className="flex justify-between">
            <div className="flex gap-8">
              <div className="w-[15rem]">
                <img
                  src="/industries.png"
                  alt="industries"
                  className="w-full h-[10rem] object-cover object-right-top rounded-sm "
                />
                <p className="mt-5 text-slate-600 text-sm">
                  Our industries are built on early intelligence, expanding
                  datasets, and continuous refinement. As the platform develops,
                  these insights will grow into powerful tools for future
                  decisions.
                </p>
              </div>
              <hr className="ml-15 w-[0.1rem] h-auto bg-slate-300 rounded-full"></hr>
            </div>

            <div className="flex gap-x-30 text-gray-700 text-[1rem]">
              <div className="flex flex-col">
                <Link
                  to="/tourism"
                  className="mb-15 text-slate-900 hover:text-primary"
                >
                  Tourism
                </Link>

                <Link
                  to="/coming"
                  className="mb-15 text-slate-900 hover:text-primary"
                >
                  Technology
                </Link>

                <Link
                  to="/coming"
                  className="mb-15 text-slate-900 hover:text-primary"
                >
                  Finance
                </Link>
              </div>
              <div className="flex flex-col">
                <Link
                  to="/coming"
                  className="mb-15 text-slate-900 hover:text-primary"
                >
                  Healthcare
                </Link>

                <Link
                  to="/coming"
                  className="mb-15 text-slate-900 hover:text-primary"
                >
                  Media
                </Link>

                <Link
                  to="/coming"
                  className="mb-15 text-slate-900 hover:text-primary"
                >
                  Education
                </Link>
              </div>

              <div className="flex flex-col">
                <Link
                  to="/coming"
                  className="mb-15 text-slate-900 hover:text-primary"
                >
                  Energy
                </Link>

                <Link
                  to="/coming"
                  className="mb-15 text-slate-900 hover:text-primary"
                >
                  Food & Beverage
                </Link>

                <Link
                  to="/coming"
                  className="mb-15 text-slate-900 hover:text-primary"
                >
                  Agriculture
                </Link>
              </div>

              <div className="flex flex-col">
                <Link
                  to="/coming"
                  className="mb-15 text-slate-900 hover:text-primary"
                >
                  Automobile
                </Link>

                <Link
                  to="/coming"
                  className="mb-15 text-slate-900 hover:text-primary"
                >
                  Insurance
                </Link>

                <Link
                  to="/coming"
                  className="mb-15 text-slate-900 hover:text-primary"
                >
                  Logistics
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
