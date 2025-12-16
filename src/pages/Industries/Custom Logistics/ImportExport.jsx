import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../../components/Navigation/Breadcrumb";

const ImportExport = () => {
  const navigate = useNavigate();

  const [articles, setArticles] = useState([]);
  const [loadingStates, setLoadingStates] = useState({});
  const cardsRef = useRef(null);

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
              const datasetRes = await fetch(card.datasetApi);
              const datasetData = await datasetRes.json();

              setLoadingStates((prev) => ({
                ...prev,
                [card.articleId]: false,
              }));

              return { ...article, datasets: datasetData };
            } catch (err) {
              console.error(err);
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
      {/* ================= HERO SECTION ================= */}
      <div className="relative rounded-lg overflow-hidden shadow-2xl mt-10">
        <img
          src="/customLogistics.png"
          alt="Logistics"
          className="w-full h-[75vh] max-h-[600px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="absolute top-6 left-6 z-10 text-white">
          <Breadcrumb />
        </div>

        <div className="absolute bottom-8 left-8 text-white max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-semibold">
            Custom Logistics
          </h1>
          <p className="mt-4 text-lg opacity-90">
            Tailored logistics insights covering trade flows, destination
            demand, and market intelligence.
          </p>

          <button
            onClick={() =>
              cardsRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-6 px-8 py-3 bg-white/20 hover:bg-white/30 rounded-full border border-white/40"
          >
            Explore More
          </button>
        </div>
      </div>

      {/* ================= CONTENT INTRO ================= */}
      <div className="my-12">
        <h2 className="text-4xl font-medium mb-4">
          Custom Logistics Intelligence
        </h2>
        <p className="max-w-4xl text-justify text-gray-700">
          Infography Technologies provides reliable data and research across
          industries, helping businesses make informed decisions and stay ahead
          of market trends.
        </p>
      </div>

      {/* ================= CATEGORY SECTION ================= */}
      <h2 ref={cardsRef} className="text-4xl font-medium mb-8">
        Custom Logistics Categories
      </h2>

      <div className="mb-6">
        <button className="px-4 py-1 bg-white border rounded-full">
          Recently Updated
        </button>
      </div>

      {/* ================= CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsConfig.map((card) => {
          const article = articles.find((a) => a.id === card.articleId);
          const isLoading = loadingStates[card.articleId];

          return (
            <div
              key={card.articleId}
              className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition"
            >
              {isLoading ? (
                <p className="animate-pulse text-gray-500">
                  Loading report data...
                </p>
              ) : article ? (
                <>
                  <h3 className="text-xl font-medium mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-600">{article.abstract}</p>

                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() =>
                        navigate("/customlogistics/import-and-export-report", {
                          state: {
                            reportData: {
                              ...article,
                              apiKey: card.articleId,
                            },
                          },
                        })
                      }
                      className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                    >
                      View Report
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-red-500">Failed to load report data.</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ImportExport;
