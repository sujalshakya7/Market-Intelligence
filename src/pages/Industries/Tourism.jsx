import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Navigation/Breadcrumb";
import TourismChart from "./Tourism/TourismChart";

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
    <section className="bg-slate-100 pb-10">
      <div className="wrapper mt-10 font-general-sans overflow-hidden">
        <Breadcrumb />

        {/* Tourism Industry Research section */}
        <div className="my-9">
          <h1 className="xs:text-2xl md:text-4xl font-medium mb-4">
            Tourism Industry Research
          </h1>
          <p className="max-w-4xl text-justify text-gray-700">
            Infography Technologies provides reliable data and research across
            industries, helping businesses make informed decisions. Our insights
            keep you ahead of market trends, identify opportunities, and
            anticipate challenges, ensuring you stay competitive in a rapidly
            changing business environment.
          </p>
        </div>

        {/* Tourism Categories Section */}
        <h1 className="xs:text-2xl md:text-4xl font-medium mb-8">
          Tourism Categories
        </h1>
        {/* Filters */}
        <div className="mb-5 flex justify-between items-center mt-3">
          <div className="flex gap-5">
            <button className="inline-flex items-center gap-2 xs:px-2 md:px-4 py-1 bg-white text-black rounded-full border border-black">
              All
            </button>
            <button className="inline-flex items-center gap-2 xs:px-2 md:px-4 py-1 bg-white text-black rounded-full border border-black">
              Recently Updated
            </button>
          </div>
          <div className="flex gap-3 items-center">
            <button
              className="inline-flex items-center gap-2 xs:px-2 md:px-4 py-1 bg-white text-black rounded-md border hover:bg-blue-200 transition"
              style={{
                borderColor: "oklch(0.6209 0.1802 257.04)",
                color: "oklch(0.6209 0.1802 257.04)",
              }}
            >
              <img src="/filter.svg" alt="Filter icon" className="w-4 h-4" />{" "}
              Filter By{" "}
            </button>{" "}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full">
          {cardsConfig.map((card) => {
            const article = articles.find((a) => a.id === card.articleId);
            const isLoading = loadingStates[card.articleId];

            return (
              <div
                key={card.articleId}
                className="flex flex-col justify-between bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition-shadow duration-300"
              >
                {isLoading ? (
                  <p className="text-gray-500 text-xl mt-3 animate-pulse">
                    Loading report data...
                  </p>
                ) : article ? (
                  <>
                    <h2 className="text-xl font-medium mb-2 ">
                      {article.title}
                    </h2>
                    <p className="font-regular text-sm text-gray-600">
                      {article.abstract}
                    </p>
                    <hr className="border-t-2 border-slate-100 mt-4" />

                    <h2 className="pt-7 text-sm font-medium">
                      Recently Reports
                    </h2>
                    <div className="flex justify-between mt-2">
                      <span className="text-gray-500 text-xs block">
                        Report Title
                      </span>
                      <span className="text-gray-500 text-xs block">Date</span>
                    </div>
                    <ul className="flex flex-col mt-3 space-y-4">
                      {article.datasets && article.datasets.length > 0 ? (
                        article.datasets.map((datasetItem) => (
                          <li
                            key={datasetItem.id}
                            className=" justify-between items-start"
                          >
                            <div className="flex flex-col">
                              <hr className="border-t-2 border-slate-100  mb-2" />

                              <div className=" flex  justify-between">
                                <div className="font-regular w-[10rem] text-blue-500  cursor-pointer">
                                  {datasetItem.article?.title ||
                                    "Untitled Report"}
                                </div>

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
                            </div>
                          </li>
                        ))
                      ) : (
                        <p className="text-gray-500 text-sm">
                          No datasets available.
                        </p>
                      )}
                    </ul>

                    <hr className="border-t-2 border-gray-100 mt-4" />
                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() =>
                          navigate("/tourism/trekking-reports", {
                            state: {
                              reportData: {
                                ...article,
                                apiKey: card.articleId,
                              },
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
    </section>
  );
};

export default Tourism;
