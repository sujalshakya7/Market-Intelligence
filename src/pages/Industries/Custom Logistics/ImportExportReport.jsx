import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ImportExportReport = () => {
    const navigate = useNavigate();

    const [articles, setArticles] = useState([]);
    const [loadingStates, setLoadingStates] = useState({});

    const cardsConfig = [
        {
            articleId: 8,
            datasetApi:
                "https://ezexplanation.com/api/intel/article/dataset/import-and-export-items/",
            path: "/customlogistics/import-and-export-report/top-items",
        },
        {
            articleId: 7,
            datasetApi:
                "https://ezexplanation.com/api/intel/article/dataset/import-and-export-news/",
            path: "/customlogistics/import-and-export-report/news",
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
                            let datasetData = await datasetRes.json();

                            // ⭐ Sort & keep latest three datasets
                            datasetData = datasetData
                                .sort(
                                    (a, b) =>
                                        new Date(b.created_at) - new Date(a.created_at)
                                )
                                .slice(0, 3);

                            const result = {
                                ...article,
                                datasets: datasetData,
                            };

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

                <div className="my-9">
                    <h1 className="xs:text-2xl md:text-4xl font-medium mb-4">
                        Import And Export
                    </h1>
                </div>

                {/* Cards */}
                <div className="flex flex-col md:flex-row gap-6 w-full">
                    {cardsConfig.map((card) => {
                        const article = articles.find((a) => a.id === card.articleId);
                        const isLoading = loadingStates[card.articleId];

                        return (
                            <div
                                key={card.articleId}
                                className="flex flex-col justify-between bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition-shadow duration-300 flex-1 min-h-[300px]"
                            >
                                {/* LOADING */}
                                {isLoading ? (
                                    <p className="text-gray-500 text-xl mt-3 animate-pulse">
                                        Loading report data...
                                    </p>
                                ) : article ? (
                                    <>
                                        <h2 className="text-xl font-medium mb-2 ">
                                            {article.title}
                                        </h2>

                                        <p className="text-sm text-gray-600">
                                            {article.abstract}
                                        </p>

                                        <hr className="border-t-2 border-slate-100 mt-4" />

                                        <h2 className="pt-7 text-sm font-medium">
                                            Recent Reports
                                        </h2>
                                        <div className="flex justify-between mt-2">
                                            <span className="text-gray-500 text-xs block">
                                                Report Title
                                            </span>
                                            <span className="text-gray-500 text-xs block">Date</span>
                                        </div>
                                        <ul className="mt-3 space-y-4">
                                            {article.datasets?.length > 0 ? (
                                                article.datasets.map((ds) => (
                                                    <li key={ds.id}>
                                                        <hr className="border-t-2 border-slate-100 mb-2" />
                                                        <div className="flex justify-between">
                                                            <a
                                                                href={`https://ezexplanation.com${ds.dataset}`}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-400 underline w-[10rem] hover:text-blue-700"
                                                                download
                                                            >
                                                                {ds.article?.title || "Untitled Report"}
                                                            </a>


                                                            <span className="text-gray-500 text-sm">
                                                                {new Date(
                                                                    ds.created_at
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
                                                <p className="text-xs text-gray-500">
                                                    No recent reports available.
                                                </p>
                                            )}
                                        </ul>

                                        <hr className="border-t-2 border-gray-100 mt-4" />

                                        <div className="mt-6 flex justify-end">
                                            <button
                                                onClick={() => navigate(card.path)}
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
        </section >
    );
};

export default ImportExportReport;
