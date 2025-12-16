import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Navigation/Breadcrumb";

const Tourism = () => {
  const navigate = useNavigate();
  const cardsRef = useRef(null);

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

  // Single state to track loading, data, error per card
  const [cardsData, setCardsData] = useState(
    cardsConfig.map((card) => ({
      articleId: card.articleId,
      data: null,
      loading: true,
      error: null,
    }))
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://ezexplanation.com/api/intel/article/");
        const allArticles = await res.json();

        const updatedCardsData = await Promise.all(
          cardsConfig.map(async (card) => {
            try {
              const article = allArticles.find((a) => a.id === card.articleId);
              const datasetRes = await fetch(card.datasetApi);
              const datasetData = await datasetRes.json();

              return {
                articleId: card.articleId,
                data: { ...article, datasets: datasetData },
                loading: false,
                error: null,
              };
            } catch (err) {
              console.error(`Error fetching card ${card.articleId}:`, err);
              return {
                articleId: card.articleId,
                data: null,
                loading: false,
                error: "Failed to load report data",
              };
            }
          })
        );

        setCardsData(updatedCardsData);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setCardsData((prev) =>
          prev.map((card) => ({
            ...card,
            loading: false,
            error: "Failed to load report data",
          }))
        );
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-slate-100 pb-10">
      <div className="wrapper mt-10 font-general-sans overflow-hidden">
        {/* Tourism Industry Research section */}
        <div className="my-9 relative">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/Tourismimg.png"
              alt="Tourism"
              className="w-full h-[75vh] md:h-auto max-h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
              <div className="text-white [&_a]:!text-white [&_span]:!text-white [&_svg]:!text-white">
                <Breadcrumb />
              </div>
            </div>

            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white max-w-full md:max-w-2xl">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Tourism Industry Research
              </h2>
              <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl opacity-90">
                Discover insights into traveler behavior, emerging destinations,
                sustainability, and market trends shaping the future of tourism.
              </p>

              <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-start">
                <button
                  onClick={() => {
                    cardsRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className="px-6 sm:px-8 py-2 sm:py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium rounded-full border border-white/40 transition"
                >
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tourism Categories Section */}
        <h1
          id="tourism-categories"
          ref={cardsRef}
          className="xs:text-2xl md:text-4xl font-medium mb-8"
        >
          Tourism Categories
        </h1>

        <div className="mb-5 flex justify-between items-center mt-3">
          <div className="flex gap-5">
            <button className="inline-flex items-center gap-2 xs:px-2 md:px-4 py-1 bg-white text-black rounded-full border border-black">
              Recently Updated
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full">
          {cardsConfig.map((card) => {
            const cardState = cardsData.find(
              (c) => c.articleId === card.articleId
            );

            return (
              <div
                key={card.articleId}
                className="flex flex-col justify-between bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition-shadow duration-300"
              >
                {cardState?.loading && (
                  <p className="text-gray-500 text-xl mt-3 animate-pulse">
                    Loading report data...
                  </p>
                )}

                {!cardState?.loading && cardState?.data && (
                  <>
                    <h2 className="text-xl font-medium mb-2">
                      {cardState.data.title}
                    </h2>
                    <p className="font-regular text-sm text-gray-600">
                      {cardState.data.abstract}
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
                      {cardState.data.datasets &&
                      cardState.data.datasets.length > 0 ? (
                        cardState.data.datasets.map((datasetItem) => (
                          <li
                            key={datasetItem.id}
                            className="justify-between items-start"
                          >
                            <div className="flex flex-col">
                              <hr className="border-t-2 border-slate-100 mb-2" />
                              <div className="flex justify-between">
                                <div className="font-regular w-[10rem] text-blue-500 cursor-pointer">
                                  <a
                                    href={`https://ezexplanation.com${datasetItem.dataset}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 underline w-[10rem] hover:text-blue-700"
                                    download
                                  >
                                    {datasetItem.article?.title ||
                                      "Untitled Report"}
                                  </a>
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

                    {card.articleId === 2 && (
                      <div className="mt-6 flex justify-end">
                        <button
                          onClick={() =>
                            navigate("/tourism/trekking-reports", {
                              state: {
                                reportData: {
                                  ...cardState.data,
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
                    )}
                  </>
                )}

                {!cardState?.loading && cardState?.error && (
                  <p className="text-red-500 text-sm mt-3">{cardState.error}</p>
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
