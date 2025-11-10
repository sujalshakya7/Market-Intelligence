import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Tourism = () => {
  const navigate = useNavigate();

  // States
  const [articles, setArticles] = useState([]);
  const [loadingStates, setLoadingStates] = useState({});

  // Config for all tourism cards
  const cardsConfig = [
    {
      articleId: 2,
      datasetApi:
        "https://ezexplanation.com/api/intel/article/dataset/trekking-arrival-vs-tourist-arrival/",
    },
    {
      articleId: 3,
      datasetApi:
        "https://ezexplanation.com/api/intel/article/dataset/trekking-gears/",
    },
    {
      articleId: 4,
      datasetApi:
        "https://ezexplanation.com/api/intel/article/dataset/trekking-news/",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://ezexplanation.com/api/intel/article/");
        const data = await res.json();

        const fetchedArticles = await Promise.all(
          cardsConfig.map(async (card) => {
            setLoadingStates((prev) => ({ ...prev, [card.articleId]: true }));

            try {
              const article = data.find((d) => d.id === card.articleId);

              // Fetch datasets for this article
              const datasetRes = await fetch(card.datasetApi);
              const datasetData = await datasetRes.json();

              const result = { ...article, datasets: datasetData };

              setLoadingStates((prev) => ({
                ...prev,
                [card.articleId]: false,
              }));

              return result;
            } catch (err) {
              console.error(
                `Error fetching dataset for article ${card.articleId}:`,
                err
              );
              setLoadingStates((prev) => ({
                ...prev,
                [card.articleId]: false,
              }));
              return null;
            }
          })
        );

        setArticles(fetchedArticles.filter(Boolean));
      } catch (err) {
        console.error("Error fetching articles:", err);
      }
    };

    fetchData();
  }, []);

  return (
     <div className=" wrapper2 py-32 font-general-sans overflow-hidden ">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Tourism Industry Research</h1>
        <p>
          Infography Technologies provides reliable data and research across
          industries to help you stay informed and ahead of the competition.
        </p>

      </div>
      {/* Filter ko part */}
      <div className="mb-5 flex justify-between items-center pl-5 pr-5 mt-3">
        <div className="flex gap-5">
          <button className="inline-flex items-center gap-2 px-4 py-1 bg-white text-black rounded-full border border-black hover:bg-blue-200 transition">
            All
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-1 bg-white text-black rounded-full border border-black hover:bg-blue-200 transition">
            Popular
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-1 bg-white text-black rounded-full border border-black hover:bg-blue-200 transition">
            Recently Updated
          </button>
        </div>
        <div className="flex gap-3 items-center">
          <button className="inline-flex items-center gap-2 px-4 py-1 bg-white text-black rounded-md border hover:bg-blue-200 transition" style={{ borderColor: "oklch(0.6209 0.1802 257.04)", color: "oklch(0.6209 0.1802 257.04)", }} >
            <img src="/filter.svg" alt="Filter icon" className="w-4 h-4" /> Filter By </button> <button className="inline-flex items-center gap-2 px-4 py-1 bg-blue-500 text-white rounded-md border hover:bg-blue-600 transition">
            Download Report
          </button>
        </div>
      </div>


      <div className="flex flex-col md:flex-row gap-6 w-full">
        {cardsConfig.map((card) => {
          const article = articles.find((a) => a.id === card.articleId);
          const isLoading = loadingStates[card.articleId];

          return (
            <div
              key={card.articleId}
              className="flex-1 bg-blue-100 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              {isLoading ? (
                <p className="text-gray-500 text-sm mt-3 animate-pulse">
                  Loading report data...
                </p>
              ) : article ? (
                <>
                  <h2 className="text-xl font-bold mb-2 pt-3">
                    {article.title}
                  </h2>
                  <p className="text-gray-600">{article.abstract}</p>
                  <hr className="border-t-2 border-black mt-4" />

                  <h2 className="pt-7 font-bold">Recently Added Reports</h2>
                  <ul className="mt-3 space-y-4">
                    {article.datasets && article.datasets.length > 0 ? (
                      article.datasets.map((datasetItem) => (
                        <li
                          key={datasetItem.id}
                          className="flex justify-between items-start"
                        >
                          <div>
                            <span className="text-gray-500 text-xs block">
                              Report Title
                            </span>
                            <a
                              href={`https://ezexplanation.com${datasetItem.dataset}`}
                              download
                              className="font-medium text-blue-500 hover:text-blue-800 cursor-pointer"
                            >
                              {datasetItem.article?.title || "Untitled Report"}
                            </a>
                          </div>
                          <div className="text-right">
                            <span className="text-gray-500 text-xs block">
                              Date
                            </span>
                            <span className="text-gray-500 text-sm">
                              {new Date(
                                datasetItem.created_at
                              ).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                        </li>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">
                        No datasets available.
                      </p>
                    )}
                  </ul>

                  <hr className="border-t-2 border-gray-300 mt-4" />
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() =>
                        navigate("/trekking-reports", {
                          state: {
                            reportData: { ...article, apiKey: card.articleId },
                          },
                        })
                      }
                      className="px-6 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-600 transition"
                    >
                      View All
                    </button>
                  </div>

                </>
              ) : (
                <p className="text-red-500 text-sm mt-3">
                  Failed to load report data.
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tourism;
