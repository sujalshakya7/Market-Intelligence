import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Tourism = () => {
    return (
        <>
            <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">Tourism Industry Research</h1>
                <p>Infography Technologies, provide reliable data and research across<br />
                    industries to help you stay informed and ahead of the competition.
                </p>
            </div>
            <div className="p-4 flex items-center justify-between relative">
                {/* Heading */}
                <div className="mb-4">
                    <h1 className="font-medium text-xl">Tourism</h1>
                    <h1 className="font-bold text-3xl">Categories</h1>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-1/3">
                    <input
                        type="text"
                        placeholder="Looking for something specific?"
                        className="w-full px-4 pr-10 py-2 border rounded-full bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />

                    {/* input field to icon */}
                    <CiSearch
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                    />

                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 w-full">
                {/* card 1 */}
                <div className="flex-1 bg-blue-100 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ml-5">
                    <h2 className="text-xl font-bold mb-2 pt-3">Trekking Industry Reports</h2>
                    <p className="text-gray-600">
                        The Infography Technologies’ Trekking Reports are essential for understanding market trends<br />
                        ,traveler behavior, and destination performance in the global trekking industry.
                    </p>
                    <hr className="border-t-2 border-black mt-4" />

                    <h2 className='pt-7 font-bold'>Recently Added Reports</h2>

                    {/* Report list */}
                    <ul className="mt-3 space-y-4">
                        <li className="flex justify-between items-start">
                            <div>
                                <span className="text-gray-500 text-xs block">Report Title</span>
                                <span className="font-medium text-blue-500 hover:text-blue-800 cursor-pointer">
                                    Global Trekking Market Overview-2025 Trends & Forecasts
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="text-gray-500 text-xs block">Date</span>
                                <span className="text-gray-500 text-sm">Oct 10, 2025</span>
                            </div>
                        </li>
                        <hr className="border-t-2 border-gray-300 mt-4" />

                        <li className="flex justify-between items-start">
                            <div>
                                <span className="font-medium  text-blue-500 hover:text-blue-800 cursor-pointer">Global Trekking Market Overview-2025 Trends & Forecasts</span>
                            </div>
                            <div className="text-right">

                                <span className="text-gray-500 text-sm">Sep 28, 2025</span>
                            </div>
                        </li>
                        <hr className="border-t-2 border-gray-300 mt-4" />

                        <li className="flex justify-between items-start">
                            <div>

                                <span className="font-medium  text-blue-500 hover:text-blue-800 cursor-pointer">Global Trekking Market Overview-2025 Trends & Forecasts</span>
                            </div>
                            <div className="text-right">

                                <span className="text-gray-500 text-sm">Sep 15, 2025</span>
                            </div>
                        </li>
                    </ul>
                    <div className="mt-6 flex justify-end">
                        <Link
                            to="/trekking-reports"
                            className="px-6 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-600 transition"
                        >
                            View All
                        </Link>
                    </div>

                </div>

                {/* Card 2 */}
                <div className="flex-1 bg-blue-100 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                    <h2 className="text-xl font-bold mb-2 pt-3">Trekking Industry Reports</h2>
                    <p className="text-gray-600">
                        The Infography Technologies’ Trekking Reports are essential for understanding market trends<br />
                        ,traveler behavior, and destination performance in the global trekking industry.
                    </p>
                    <hr className="border-t-2 border-black mt-4" />

                    <h2 className='pt-7 font-bold'>Recently Added Reports</h2>

                    {/* Report list */}
                    <ul className="mt-3 space-y-4">
                        <li className="flex justify-between items-start">
                            <div>
                                <span className="text-gray-500 text-xs block">Report Title</span>
                                <span className="font-medium text-blue-500 hover:text-blue-800 cursor-pointer">
                                    Global Trekking Market Overview-2025 Trends & Forecasts
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="text-gray-500 text-xs block">Date</span>
                                <span className="text-gray-500 text-sm">Oct 10, 2025</span>
                            </div>
                        </li>
                        <hr className="border-t-2 border-gray-300 mt-4" />

                        <li className="flex justify-between items-start">
                            <div>

                                <span className="font-medium  text-blue-500 hover:text-blue-800 cursor-pointer">Global Trekking Market Overview-2025 Trends & Forecasts</span>
                            </div>
                            <div className="text-right">

                                <span className="text-gray-500 text-sm">Sep 28, 2025</span>
                            </div>
                        </li>
                        <hr className="border-t-2 border-gray-300 mt-4" />

                        <li className="flex justify-between items-start">
                            <div>

                                <span className="font-medium  text-blue-500 hover:text-blue-800 cursor-pointer">Global Trekking Market Overview-2025 Trends & Forecasts</span>
                            </div>
                            <div className="text-right">

                                <span className="text-gray-500 text-sm">Sep 15, 2025</span>
                            </div>
                        </li>
                    </ul>
                    <div className="mt-6 flex justify-end">
                        <button className="px-6 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-600 transition">
                            View All
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="flex-1 bg-blue-100 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 mr-5">
                    <h2 className="text-xl font-bold mb-2 pt-3">Trekking Industry Reports</h2>
                    <p className="text-gray-600">
                        The Infography Technologies’ Trekking Reports are essential for understanding market trends<br />
                        ,traveler behavior, and destination performance in the global trekking industry.
                    </p>
                    <hr className="border-t-2 border-black mt-4" />

                    <h2 className='pt-7 font-bold'>Recently Added Reports</h2>

                    {/* Report list */}
                    <ul className="mt-3 space-y-4">
                        <li className="flex justify-between items-start">
                            <div>
                                <span className="text-gray-500 text-xs block">Report Title</span>
                                <span className="font-medium text-blue-500 hover:text-blue-800 cursor-pointer">
                                    Global Trekking Market Overview-2025 Trends & Forecasts
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="text-gray-500 text-xs block">Date</span>
                                <span className="text-gray-500 text-sm">Oct 10, 2025</span>
                            </div>
                        </li>
                        <hr className="border-t-2 border-gray-300 mt-4" />

                        <li className="flex justify-between items-start">
                            <div>

                                <span className="font-medium  text-blue-500 hover:text-blue-800 cursor-pointer">Global Trekking Market Overview-2025 Trends & Forecasts</span>
                            </div>
                            <div className="text-right">

                                <span className="text-gray-500 text-sm">Sep 28, 2025</span>
                            </div>
                        </li>
                        <hr className="border-t-2 border-gray-300 mt-4" />

                        <li className="flex justify-between items-start">
                            <div>

                                <span className="font-medium  text-blue-500 hover:text-blue-800 cursor-pointer">Global Trekking Market Overview-2025 Trends & Forecasts</span>
                            </div>
                            <div className="text-right">

                                <span className="text-gray-500 text-sm">Sep 15, 2025</span>
                            </div>
                        </li>
                    </ul>
                    <div className="mt-6 flex justify-end">
                        <button className="px-6 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-600 transition">
                            View All
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Tourism