import React from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const TrekkingReport = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="font-general-sans mx-4 ">
        <ul className="flex items-center  space-x-2 text-sm md:text-base  mt-3 mb-0 md:mb-3">
          <li>
            <Link to="/" className="text-stone-400 cursor:pointer">
              Home
            </Link>
          </li>
          <li>
            <IoIosArrowForward />
          </li>
          <li>
            <Link to="/industries" className="text-stone-400 cursor:pointer">
              Industries
            </Link>
          </li>
          <li>
            <IoIosArrowForward />
          </li>
          <li className="text-stone-400 cursor:pointer">Tourism</li>
          <li>
            <IoIosArrowForward />
          </li>
          <li className="text-stone-900 cursor:pointer">
            Trekking Industry Report
          </li>
        </ul>

        <div className="flex  h-[100vh] max-w-full gap-6 ">
          {/* -----------------------------Left side ( Title, Filter view, Lists of pages )----------------------------- */}
          <div className="w-[90rem]">
            <div>
              {/*  ------------title----------------- */}
              <h3 className="font-medium text-[48px] ">
                Trekking Industry Reports
              </h3>
              <Link
                to="/tourism"
                className="mt-3 inline-flex items-center gap-2 px-4 py-1 bg-white text-black rounded-full border border-black hover:bg-blue-200 transition"
              >
                All
                <RxCross1 size={18} />
              </Link>
            </div>

            {/*  ----------------------------- Card  ----------------------------- */}

            <div className="flex items-center mt-5 bg-blue-100 rounded-xl  p-6 hover:shadow-sm transition-shadow duration-300 ">
              <div className="flex flex-col">
                <h1 className="text-3xl font-medium mb-2 pt-3">
                  Trekking Arrivals Vs Tourist Arrival
                </h1>
                <p className="text-slate-500 mr-16">
                  In 2024, trekking tourist arrivals reached 28,894, up 322%
                  from 2023, while total tourist arrivals grew 13%, highlighting
                  a strong surge in trekking interest.
                </p>
                <div className="flex gap-3">
                  <Link
                    to=""
                    className="mt-3 inline-flex items-center gap-2 px-4 py-1  text-black rounded-full border border-black hover:bg-blue-200 transition"
                  >
                    People
                  </Link>
                  <Link
                    to=""
                    className="mt-3 inline-flex items-center gap-2 px-4 py-1  text-black rounded-full border border-black hover:bg-blue-200 transition"
                  >
                    Year
                  </Link>
                  <Link
                    to=""
                    className="mt-3 inline-flex items-center gap-2 px-4 py-1  text-black rounded-full border border-black hover:bg-blue-200 transition"
                  >
                    Basic Plan
                  </Link>
                </div>
              </div>

              <div>
                <button onClick={() => navigate("/data")} className="">
                  <img
                    src="/Arrow.svg"
                    alt="Arrow"
                    className=" bg-primary-blue w-[10rem]  cursor-pointer"
                  />
                </button>
              </div>
            </div>
          </div>
          {/* -----------------------------right side ( search bar and filter )----------------------------- */}

          <div className=" w-1/2">
            {/* --------------------------Search Bar -------------------------- */}
            <div className="w-full flex  border-0 rounded-full bg-blue-100 items-center px-5 py-2  ">
              <input
                type="text"
                placeholder="Looking for something specific?"
                className="w-full px-4 pr-10 py-2 text-[0.9rem] text-slate-600   focus:outline-none "
              />
              <CiSearch className=" text-black-400" size={20} />
            </div>

            {/* --------------------------Filter-=---------------------------- */}

            <div className="   mt-4 bg-white border border-slate-200 rounded-sm px-5 py-4 w-full h-full">
              <h1 className="font-medium text-[1.5rem] text-black">Filters</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrekkingReport;
