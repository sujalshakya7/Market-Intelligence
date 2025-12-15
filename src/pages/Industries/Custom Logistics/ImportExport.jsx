import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../../../components/Navigation/Breadcrumb";
const ImportExport = () => {
  const navigate = useNavigate();

  // States
  const [articles, setArticles] = useState([]);
  const [loadingStates, setLoadingStates] = useState({});
  const cardsRef = useRef(null);

  // Config for all tourism cards
  const cardsConfig = [
    {
      articleId: 9,
      datasetApi:
        "https://ezexplanation.com/api/intel/article/import-and-export-report/",
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
    <section className="bg-slate-100 pb-10 wrapper">
      <div className="wrapper mt-10 font-general-sans overflow-hidden ">
        {/* Tourism Industry Research section */}
        <div className="my-9 relative ">
          {/* Image container with overlay text */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/customLogistics.png"
              alt="Logistics"
              className="w-full h-[75vh] md:h-auto max-h-[600px] object-cover"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            {/* Breadcrumbs at top-left */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
              <div className="text-white [&_a]:!text-white [&_span]:!text-white [&_svg]:!text-white">
                <Breadcrumb />
              </div>
            </div>

            {/* Overlay text - bottom left, responsive */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white max-w-full md:max-w-2xl ">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Custom Logistics
              </h2>
              <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl opacity-90">
                Tailored logistics insights covering movement patterns,
                destination demand, sustainability practices, and evolving
                tourism trends.
              </p>

              {/* Optional buttons */}
              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-start">
                {/* <button

                                    className="px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition"
                                >
                                    Get in Touch
                                </button> */}
                <button
                  onClick={() => {
                    cardsRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className=" px-6 sm:px-8 py-2 sm:py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium rounded-full border border-white/40 transition"
                >
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tourism Categories Section */}
        <h1 ref={cardsRef} className="xs:text-2xl md:text-4xl font-medium mb-8">
          Custom Logistics Categories
        </h1>
        {/* Filters */}
        <div className="mb-5 flex justify-between items-center mt-3">
          <div className="flex gap-5">
            {/* <button className="inline-flex items-center gap-2 xs:px-2 md:px-4 py-1 bg-white text-black rounded-full border border-black">
                            All
                        </button> */}
            <button className="inline-flex items-center gap-2 xs:px-2 md:px-4 py-1 bg-white text-black rounded-full border border-black">
              Recently Updated
            </button>
          </div>
          {/* <div className="flex gap-3 items-center">
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
                    </div> */}
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
                      <li className="justify-between items-start">
                        <div className="flex flex-col">
                          <hr className="border-t-2 border-slate-100 mb-2" />

                          <div className="flex justify-between">
                            <div className="font-regular w-[10rem] text-blue-500 cursor-pointer">
                              {article?.title || "Untitled Report"}
                            </div>

                            <span className="text-gray-500 text-sm">
                              {new Date(article.created_at).toLocaleDateString(
                                "en-US",
                                {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                }
                              )}
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <hr className="border-t-2 border-gray-100 mt-4" />
                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() =>
                          navigate(
                            "/customlogistics/import-and-export-report",
                            {
                              state: {
                                reportData: {
                                  ...article,
                                  apiKey: card.articleId,
                                },
                              },
                            }
                          )
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

export default ImportExport;
