import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate, useLocation } from "react-router-dom";

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
    <div className="wrapper2 h-[45rem] py-32 font-general-sans">
      {/* Breadcrumb */}
      <ul className="flex items-center space-x-2 text-sm md:text-base mt-3 mb-0 md:mb-3">
        <li><Link to="/" className="text-stone-400">Home</Link></li>
        <li><IoIosArrowForward /></li>
        <li><Link to="/industries" className="text-stone-400">Industries</Link></li>
        <li><IoIosArrowForward /></li>
        <li className="text-stone-400">Tourism</li>
        <li><IoIosArrowForward /></li>
        <li className="text-stone-900">Trekking Industry Report</li>
      </ul>

      <div className="flex h-auto max-w-full gap-6 flex-col">
        <div className="w-full">
          <h3 className="font-medium text-[36px] mb-6">
            {reportData?.title || "Trekking Industry Reports"}
          </h3>

          <div className="mb-5 flex justify-between items-center px-5 mt-3">
            {/* Left buttons */}
            <div className="flex gap-5">
              <button
                className="inline-flex items-center gap-2 px-4 py-1 bg-white text-black rounded-full border border-black hover:bg-blue-200 transition"
                onClick={() => navigate("/tourism")}
              >
                All <RxCross1 size={18} />
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-1 bg-white text-black rounded-full border border-black hover:bg-blue-200 transition">
                Popular
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-1 bg-white text-black rounded-full border border-black hover:bg-blue-200 transition">
                Recently Updated
              </button>
            </div>

            {/* Right buttons */}
            <div className="flex gap-3 items-center">
              <button
                className="inline-flex items-center gap-2 px-4 py-1 bg-white text-black rounded-md border hover:bg-blue-200 transition"
                style={{ borderColor: "oklch(0.6209 0.1802 257.04)", color: "oklch(0.6209 0.1802 257.04)" }}
              >
                <img src="/filter.svg" alt="Filter icon" className="w-4 h-4" /> Filter By
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-1 bg-blue-500 text-white rounded-md border hover:bg-blue-600 transition">
                Download Report
              </button>
            </div>
          </div>


          <div className="p-6">
            {loading ? (
              <p className="text-gray-500 text-center mt-10 text-lg">Loading dataset...</p>
            ) : dataset.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dataset.map((item) => (
                  <div
                    key={item.id}
                    className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
                  >
                    <h2 className="text-xl font-semibold mb-2">
                      {item.article?.title || "Untitled Report"}
                    </h2>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {item.article?.abstract || "No description available."}
                    </p>
                    <div className="flex justify-between items-center border-t border-gray-300 pt-3 mt-3">
                      <a
                        href={`https://ezexplanation.com${item.dataset}`}
                        download
                        className="text-blue-500 hover:text-blue-700 text-sm underline"
                      >
                        Download File
                      </a>
                      <span className="text-gray-500 text-xs">
                        {item.created_at
                          ? new Date(item.created_at).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                          : ""}
                      </span>
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
  );
};

export default TrekkingReport;
