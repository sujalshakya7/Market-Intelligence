import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GrDownload } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa6";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TradeChart = () => {
    const navigate = useNavigate();
    const exportChartRef = useRef(null);
    const importChartRef = useRef(null);

    const handleTourismClick = (e) => {
        e.preventDefault();
        // Navigate to /tourism first
        navigate("/tourism");
        // Wait a short time for the page to render, then scroll
        setTimeout(() => {
            const el = document.getElementById("tourism-categories");
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 50);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        if (value === "custom-logistics") navigate("/customlogistics");
        else if (value === "tourism") navigate("/tourism");
    };

    const [importAnalysis, setImportAnalysis] = useState({
        title: "",
        abstract: "",
        content: ""
    });

    const [exportAnalysis, setExportAnalysis] = useState({
        title: "",
        abstract: "",
        content: ""
    });

    useEffect(() => {
        // Fetch Import Analysis
        fetch("https://ezexplanation.com/api/intel/article/report/import-analysis/")
            .then((res) => res.json())
            .then((json) => {
                if (json) {
                    setImportAnalysis({
                        title: json.article?.title || "",
                        abstract: json.article?.abstract || "",
                        content: json.content || ""
                    });
                }
            })
            .catch((err) => console.error("Error loading import analysis:", err));

        // Fetch Export Analysis
        fetch("https://ezexplanation.com/api/intel/article/report/export-analysis/")
            .then((res) => res.json())
            .then((json) => {
                if (json) {
                    setExportAnalysis({
                        title: json.article?.title || "",
                        abstract: json.article?.abstract || "",
                        content: json.content || ""
                    });
                }
            })
            .catch((err) => console.error("Error loading export analysis:", err));
    }, []);

    const downloadChart = (chartRef, filename) => {
        const chart = chartRef.current;
        if (!chart) return;
        const canvas = chart.canvas;
        if (!canvas) return;
        const url = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        link.click();
    };

    const exportData = {
        labels: [
            "Refined Palm Oil",
            "Synthetic Yarn",
            "Woolen Carpet",
            "Refined Soya-bean Oil",
            "Cardamom",
            "Readymade Garments",
            "Iron Sheet",
            "Juice",
            "Jute Goods",
            "Jute Fabric"
        ],
        datasets: [
            {
                label: "Export Value (Rs. Billion) – 2079/80",
                data: [20.51, 12.2, 9.5, 8.48, 8.28, 7.82, 7.2, 6.64, 5.23, 4.77],
                backgroundColor: "rgba(54, 162, 235, 0.6)"
            }
        ]
    };

    const importData = {
        labels: [
            "Diesel",
            "Petrol",
            "L.P. Gas",
            "Gold",
            "Pure Iron",
            "Crude Soya-bean Oil",
            "Other Coal",
            "Mobile Telephone",
            "Polythene Granules",
            "Crude Palm Oil"
        ],
        datasets: [
            {
                label: "Import Value (Rs. Billion) – 2079/80",
                data: [153.77, 66.84, 58.18, 43.91, 43.6, 35.58, 27.12, 26.51, 25.93, 25.92],
                backgroundColor: "rgba(255, 99, 132, 0.6)"
            }
        ]
    };

    const options = {
        responsive: true,
        animation: false,
        plugins: { legend: { position: "top" }, title: { display: false } },
        scales: { y: { beginAtZero: true, title: { display: true, text: "Value (Rs. Billion)" } } }
    };

    return (
        <section className="wrapper my-20">
            <h1 className=" h1 font-general-sans font-semibold xs:text-xl md:text-3xl my-6">
                Top 10 Export & Import Commodities (2079/80)
            </h1>
            

            <section className="flex xs:flex-col lg:flex-row gap-6 pt-4">
                {/* Left Content: Charts + Analyst Opinion */}
                <section className="xs:w-full lg:w-2/3">

                    {/* Export Chart */}
                    <section className="border border-gray-300 rounded-lg p-4 bg-white relative xs:h-[250px] md:h-[480px] mb-8">
                        <p>{exportAnalysis.abstract}</p>
                        <Bar
                            data={exportData}
                            options={{ ...options, plugins: { ...options.plugins, title: { display: true, text: "Exports" } } }}
                            ref={(el) => (exportChartRef.current = el)}
                        />
                        <button
                            onClick={() => downloadChart(exportChartRef, "export_chart.png")}
                            className="absolute bottom-8 right-2 bg-primary shadow-md p-2 rounded-md hover:bg-blue-800"
                        >
                            <GrDownload size={16} color="white" />
                        </button>
                    </section>
                    {/* Export Analysis Section */}
                    {(exportAnalysis.title || exportAnalysis.abstract || exportAnalysis.content) && (
                        <section className="bg-white rounded-lg mt-3 mb-8 font-general-sans p-4">
                            <h3 className="xs:text-lg lg:text-2xl font-semibold mb-2">{exportAnalysis.title}</h3>
                        
                            <div
                                className="chart-analysis-paragraph space-y-3"
                                dangerouslySetInnerHTML={{ __html: exportAnalysis.content }}
                            />
                        </section>
                    )}

                    {/* Import Chart */}
                    <section className="border border-gray-300 rounded-lg p-4 bg-white relative xs:h-[250px] md:h-[480px] mb-8">
                        <p className="text-center">{importAnalysis.abstract}</p>
                        <Bar
                            data={importData}
                            options={{ ...options, plugins: { ...options.plugins, title: { display: true, text: "Imports" } } }}
                            ref={(el) => (importChartRef.current = el)}
                        />
                        <button
                            onClick={() => downloadChart(importChartRef, "import_chart.png")}
                            className="absolute bottom-8 right-2 bg-primary shadow-md p-2 rounded-md hover:bg-red-800"
                        >
                            <GrDownload size={16} color="white" />
                        </button>
                    </section>

                    {/* Import Analysis Section */}
                    {(importAnalysis.title || importAnalysis.abstract || importAnalysis.content) && (
                        <section className="bg-white rounded-lg mt-3 mb-8 font-general-sans p-4">
                            <h3 className="xs:text-lg lg:text-2xl font-semibold mb-2">{importAnalysis.title}</h3>
                         
                            <div
                                className="chart-analysis-paragraph space-y-3"
                                dangerouslySetInnerHTML={{ __html: importAnalysis.content }}
                            />
                        </section>
                    )}
                </section>

                {/* Sidebar: Related Reports */}
                <section className="xs:w-full lg:w-1/3">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-300 overflow-hidden">
                        {/* Header with Dropdown */}
                        <div className="px-6 pt-6 pb-4 border-b border-gray-200">
                            <div className="relative">
                                <select
                                    defaultValue=""
                                    onChange={handleChange}
                                    className="w-full appearance-none bg-gray-50 border border-gray-300 text-gray-400 py-3 px-4 pr-10 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer text-base font-medium"
                                >
                                    <option value="" disabled>
                                        More Industries
                                    </option>
                                    <option value="custom-logistics">Custom Logistics</option>
                                    <option value="tourism">Tourism</option>
                                </select>
                                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                            </div>
                        </div>

                        {/* Download Charts Button */}
                        <div className="px-6 py-5">
                            <button
                                onClick={() => {
                                    downloadChart(exportChartRef, "export_chart.png");
                                    downloadChart(importChartRef, "import_chart.png");
                                }}
                                className="w-full bg-primary hover:bg-blue-800 text-white font-medium py-3.5 px-6 rounded-lg transition-colors duration-200 shadow-sm"
                            >
                                Download Charts
                            </button>
                        </div>

                        {/* Related Reports */}
                        <div className="px-6 pb-6 related-section">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Reports</h2>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        to="/tourism"
                                        onClick={handleTourismClick}
                                        className="text-blue-600 hover:underline"
                                    >
                                        Tourism Reports
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/customlogistics/import-and-export-report/news"
                                        className="text-blue-600 hover:underline"
                                    >
                                        Import and Export News
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default TradeChart;
