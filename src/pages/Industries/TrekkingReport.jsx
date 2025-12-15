import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Navigation/Breadcrumb";

const TrekkingReport = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const reportData = location.state?.reportData;

  const [dataset, setDataset] = useState([]);
  const [loading, setLoading] = useState(true);

  // Map API keys to URLs
  const datasetAPIs = {
    2: "https://ezexplanation.com/api/intel/article/dataset/trekking-arrival-vs-tourist-arrival/",
    3: "https://ezexplanation.com/api/intel/article/dataset/trekking-gears/",
    4: "https://ezexplanation.com/api/intel/article/dataset/trekking-news/",
  };

  useEffect(() => {
    if (!reportData?.apiKey) {
      setLoading(false);
      return;
    }

    const apiUrl = datasetAPIs[reportData.apiKey];

    if (!apiUrl) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (Array.isArray(data)) {
          // Sort by created_at descending and latest 3 data pick garxa
          const latestThree = data
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, 3);

          setDataset(latestThree);
        } else {
          setDataset([]);
        }
      } catch (err) {
        console.error("Error fetching dataset:", err);
        setDataset([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [reportData]);

  return (
    <section className="bg-slate-100 pb-10">
      <div className="wrapper font-general-sans mt-10">
        {/* Breadcrumb */}
        <Breadcrumb />

        <div className="flex gap-6 flex-col mt-4">
          <div className="w-full">
            <h3 className="font-medium text-4xl">
              {reportData?.title || "Trekking Industry Reports"}
            </h3>

            <div className="flex xs:flex-col md:flex-row gap-5 justify-between items-center mt-8">
              {/* Left buttons */}
              <div className="flex gap-5">
                <button
                  className="inline-flex items-center gap-2 xs:px-2 md:px-4 py-1 bg-white text-black rounded-full border border-black hover:bg-blue-200 transition"
                  onClick={() => navigate("/tourism")}
                >
                  All <RxCross1 size={18} />
                </button>
                {/* <button className="inline-flex items-center gap-2 xs:px-2 md:px-4 py-1 bg-white text-black rounded-full border border-black hover:bg-blue-200 transition">
                  Popular
                </button> */}
                <button className="inline-flex items-center gap-2 xs:px-2 md:px-4 py-1 bg-white text-black rounded-full border border-black">
                  Recently Updated
                </button>
              </div>

              {/* Right buttons */}
              {/* <div className="flex gap-3 items-center">
                <button
                  className="inline-flex items-center gap-2 px-4 py-1 bg-white text-black rounded-md border hover:bg-blue-200 transition"
                  style={{
                    borderColor: "oklch(0.6209 0.1802 257.04)",
                    color: "oklch(0.6209 0.1802 257.04)",
                  }}
                >
                  <img
                    src="/filter.svg"
                    alt="Filter icon"
                    className="w-4 h-4"
                  />{" "}
                  Filter By
                </button>
                <button
                  onClick={() => navigate("/tourism/trekking-reports/data", { state: { apiKey: 2 } })}
                  className="inline-flex items-center gap-2 px-4 py-1 bg-blue-500 text-white rounded-md border hover:bg-blue-600 transition"
                >
                  Download Report
                </button>
              </div> */}
            </div>

            <div className="mt-8 mb-20">
              {loading ? (
                <p className="text-gray-500 text-center mt-10 text-lg">
                  Loading dataset...
                </p>
              ) : dataset.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dataset.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
                    >
                      <h2 className="text-[1.6rem] font-medium mb-4">
                        {item.article?.title || "Untitled Report"}
                      </h2>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                        {item.article?.abstract || "No description available."}
                      </p>
                      <div className="flex justify-between items-end border-t border-gray-300 pt-3 mt-10">
                        <span className="text-gray-500 text-xs  ">
                          {item.created_at
                            ? new Date(item.created_at).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                }
                              )
                            : ""}
                        </span>
                        <button
                          onClick={() =>
                            navigate("/tourism/trekking-reports/data", {
                              state: { apiKey: item.article?.id },
                            })
                          }
                          className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600 transition inline-flex items-center gap-2"
                        >
                          View Report <FaArrowRightLong size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center mt-10 text-lg">
                  No dataset available for this report.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrekkingReport;
