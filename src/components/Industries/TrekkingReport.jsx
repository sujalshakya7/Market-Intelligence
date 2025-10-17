import React from 'react'
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom';

const TrekkingReport = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4">
                {/* Heading */}
                <div>
                    <h3 className="font-bold text-[25px] ml-[5px]">Trekking Industry Reports</h3>
                    <Link
                        to="/tourism"
                        className="mt-2 inline-flex items-center gap-2 px-5 py-2 bg-white text-blue-600 rounded-full border border-blue-500 hover:bg-blue-200 transition"
                    >
                        All
                        <RxCross1 size={18} />
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-1/3 mt-3 md:mt-0">
                    <input
                        type="text"
                        placeholder="Looking for something specific?"
                        className="w-full px-4 pr-10 py-2 border rounded-full bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <CiSearch
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                    />
                </div>
            </div>
            
            {/* Card */}
            <div className="flex flex-col md:flex-row gap-6 w-full md:w-[1000px]  p-4 md:p-0">
                <div className="flex-1 bg-blue-100 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 md:ml-5">
                    <h2 className="text-xl font-bold mb-2 pt-3">Trekking Arrivals Vs Tourist Arrival</h2>
                    <div className="flex items-start justify-between">
                        <p className="text-gray-600">
                            In 2024, trekking tourist arrivals reached 28,894, up 322% from 2023,
                            while total tourist arrivals grew 13%, highlighting a strong surge in trekking interest.
                        </p>
                        <button
                            onClick={() => navigate("/data")}
                            className="ml-4"
                        >
                            <img src="/Arrow.svg" alt="Arrow" className="w-16 h-16 md:w-25 md:h-25 relative -translate-y-8 cursor-pointer" />
                        </button>
                    </div>
                </div>

                {/* Filter */}
                <div className="ml-0 md:ml-auto mt-4 md:mt-0 bg-white border border-gray-300 rounded-lg px-6 py-4 w-full md:w-auto">
                    <h1 className="font-bold text-lg text-gray-700">Filter</h1>
                </div>
            </div>
        </>
    )
}

export default TrekkingReport
