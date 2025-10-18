import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Tourism = () => {
  const [dataItem1, setDataItem1] = useState(null); // For Card 1 (id: 6)
  const [dataItem2, setDataItem2] = useState(null); // For Card 2 (id: 4)
  const [dataItem3, setDataItem3] = useState(null); // For Card 2 (id: 4)

  useEffect(() => {
    fetch("https://ezexplanation.com/api/intel/article/dataset/trekking/")
      .then((res) => res.json())
      .then((data) => {
        setDataItem1(data.find((d) => d.id === 6)); // Card 1
        setDataItem2(data.find((d) => d.id === 4)); // Card 2
        setDataItem3(data.find((d) => d.id === 3)); // Card 2
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);
  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Tourism Industry Research</h1>
        <p>
          Infography Technologies, provide reliable data and research across
          <br />
          industries to help you stay informed and ahead of the competition.
        </p>
      </div>

      <div className="p-4 flex items-center justify-between relative">
        <div className="mb-4">
          <h1 className="font-medium text-xl">Tourism</h1>
          <h1 className="font-bold text-3xl">Categories</h1>
        </div>

        <div className="relative w-full md:w-1/3">
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

      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Card 1 */}
        <div className="flex-1 bg-blue-100 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 ml-5">
          {dataItem1 ? (
            <>
              <h2 className="text-xl font-bold mb-2 pt-3">{dataItem1.description}</h2>
              <p className="text-gray-600">
                The Infography Technologies’ Trekking Reports are essential for understanding
                market trends, traveler behavior, and destination performance in the global
                trekking industry.
              </p>
              <hr className="border-t-2 border-black mt-4" />

              <h2 className="pt-7 font-bold">Recently Added Reports</h2>
              <ul className="mt-3 space-y-4">
                <li className="flex justify-between items-start">
                  <div>
                    <span className="text-gray-500 text-xs block">Report Title</span>
                    <a
                      href={`https://ezexplanation.com${dataItem1.dataset}`} download
                      className="font-medium text-blue-500 hover:text-blue-800 cursor-pointer"
                    >
                      {dataItem1.description}
                    </a>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 text-xs block">Date</span>
                    <span className="text-gray-500 text-sm">
                      {new Date(dataItem1.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </li>
              </ul>
              <hr className="border-t-2 border-gray-300 mt-4" />
              <div className="mt-6 flex justify-end">
                <Link
                  to="/trekking-reports"
                  className="px-6 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-600 transition"
                >
                  View All
                </Link>
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-sm mt-3">Loading latest report...</p>
          )}
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-blue-100 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          {dataItem2 ? (
            <>
              <h2 className="text-xl font-bold mb-2 pt-3">{dataItem2.description}</h2>
              <p className="text-gray-600">
                The Infography Technologies’ Trekking Reports are essential for understanding
                market trends, traveler behavior, and destination performance in the global
                trekking industry.
              </p>
              <hr className="border-t-2 border-black mt-4" />

              <h2 className="pt-7 font-bold">Recently Added Reports</h2>
              <ul className="mt-3 space-y-4">
                <li className="flex justify-between items-start">
                  <div>
                    <span className="text-gray-500 text-xs block">Report Title</span>
                    <a
                      href={`https://ezexplanation.com${dataItem2.dataset}`}
                      download
                      className="font-medium text-blue-500 hover:text-blue-800 cursor-pointer"
                    >
                      {dataItem2.description}
                    </a>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 text-xs block">Date</span>
                    <span className="text-gray-500 text-sm">
                      {new Date(dataItem2.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </li>
              </ul>
              <hr className="border-t-2 border-gray-300 mt-4" />
              <div className="mt-6 flex justify-end">
                <Link
                  to="/trekking-reports"
                  className="px-6 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-600 transition"
                >
                  View All
                </Link>
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-sm mt-3">Loading latest report...</p>
          )}
        </div>
          {/* Card 3 */}
        <div className="flex-1 bg-blue-100 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 mr-5">
          {dataItem3 ? (
            <>
              <h2 className="text-xl font-bold mb-2 pt-3">{dataItem3.description}</h2>
              <p className="text-gray-600">
                The Infography Technologies’ Trekking Reports are essential for understanding
                market trends, traveler behavior, and destination performance in the global
                trekking industry.
              </p>
              <hr className="border-t-2 border-black mt-4" />

              <h2 className="pt-7 font-bold">Recently Added Reports</h2>
              <ul className="mt-3 space-y-4">
                <li className="flex justify-between items-start">
                  <div>
                    <span className="text-gray-500 text-xs block">Report Title</span>
                    <a
                      href={`https://ezexplanation.com${dataItem3.dataset}`}
                      download
                      className="font-medium text-blue-500 hover:text-blue-800 cursor-pointer"
                    >
                      {dataItem3.description}
                    </a>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-500 text-xs block">Date</span>
                    <span className="text-gray-500 text-sm">
                      {new Date(dataItem3.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </li>
              </ul>
              <hr className="border-t-2 border-gray-300 mt-4" />
              <div className="mt-6 flex justify-end">
                <Link
                  to="/trekking-reports"
                  className="px-6 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-600 transition"
                >
                  View All
                </Link>
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-sm mt-3">Loading latest report...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Tourism;
