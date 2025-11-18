import React, { useEffect, useState, useRef } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa6";
import { GrDownload } from "react-icons/gr";
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const TourismChart = () => {
    const chartRef = useRef(null);
    const [data, setData] = useState(null);
    const [pdfUrl, setPdfUrl] = useState("");

    // Download chart as PNG
    const downloadChart = () => {
        const chart = chartRef.current;
        if (!chart) return console.error("Chart ref not ready");

        const canvas = chart.canvas;
        if (!canvas) return console.error("Canvas not ready");

        const url = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = url;
        link.download = "tourism_trekking_chart.png";
        link.click();
    };
    //To Download pdf Download Report use garera
    const downloadPdf = () => {
        if (!pdfUrl) return;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "trekking_report.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    // Fetch chart data
    useEffect(() => {
        const cached = localStorage.getItem("trekkingData");
        if (cached) {
            setData(JSON.parse(cached));
            return;
        }

        fetch("/Data/Trekking_Basic.json")
            .then((res) => res.json())
            .then((dataset) => {
                setData(dataset);
                localStorage.setItem("trekkingData", JSON.stringify(dataset));
            })
            .catch((err) => console.error("Error fetching dataset JSON:", err));
    }, []);

    // Fetch PDF dataset from new API
    useEffect(() => {
        fetch("https://ezexplanation.com/api/intel/article/dataset/trekking-arrival-vs-tourist-arrival/")
            .then((res) => res.json())
            .then((json) => {
                const pdfData = json.find(item => item.id === 17);
                if (pdfData) {
                    setPdfUrl("https://ezexplanation.com" + pdfData.dataset);
                }
            })
            .catch((err) => console.error("Error fetching PDF dataset:", err));
    }, []);

    if (!data) return <p className="text-center text-gray-500 mt-10">Loading chart...</p>;

    const labels = data.map((item) => item.year || item.Year || item["Year"]);
    const totalTourists = data.map((item) => item["Total Tourist Arrivals"] || 0);
    const trekkingTourists = data.map((item) => item["Trekking Tourist Arrivals"] || 0);


    const chartData = {
        labels,
        datasets: [
            { label: "Total Tourist Arrivals", data: totalTourists, backgroundColor: "rgba(54, 162, 235, 0.6)" },
            { label: "Trekking Tourist Arrivals", data: trekkingTourists, backgroundColor: "rgba(255, 99, 132, 0.6)" },

        ]
    };

    const options = {
        responsive: true,
        animation: false,
        plugins: { legend: { position: "top" }, title: { display: true, text: "Tourism & Trekking Data" } },
        scales: { y: { beginAtZero: true } }
    };

    return (
        <>
            <div className="wrapper2 pt-20">
                <ul className="flex items-center space-x-2 text-sm md:text-base mt-3 mb-0 md:mb-3">
                    <li><Link to="/" className="text-stone-400">Home</Link></li>
                    <li><IoIosArrowForward /></li>
                    <li><Link to="/tourism" className="text-stone-400">Tourism</Link></li>
                    <li><IoIosArrowForward /></li>
                    <li className="text-stone-400">Trekking Industry Report</li>
                    <li><IoIosArrowForward /></li>
                    <li className="text-stone-900">Trekking Arrival VS Tourist Arrival</li>
                </ul>

                <h1 className="font-general-sans font-semibold text-3xl mb-6">
                    Trekking Arrival VS Tourist Arrival
                </h1>

                <div className="flex gap-6 pt-4">
                    <div className="w-2/3">
                        <div className="border border-gray-300 rounded-lg p-4  bg-white relative" style={{ height: "480px" }}>
                            <Bar data={chartData} options={options} ref={(el) => { chartRef.current = el; }} />
                            <button onClick={downloadChart} className="absolute bottom-8 right-2 bg-primary shadow-md p-2 rounded-md hover:bg-blue-800">
                                <GrDownload size={16} color="white" />
                            </button>
                        </div>
                        <div className=" bg-white rounded-lg mt-3 mb-8">
                            <h3 className="text-xl font-semibold mb-3">Analyst Opinion</h3>

                            <p className="text-gray-700 text-sm mb-4">
                                In 2024, Nepal’s tourism industry saw a strong rebound, welcoming around
                                1.15 million international visitors — nearly matching pre-pandemic levels.
                                Trekking arrivals surged alongside, showing the adventure segment’s growing
                                importance within overall tourism.
                            </p>

                            <h4 className=" text-lg mt-4">Overall Tourism Recovery</h4>
                            <p className="text-gray-700 text-sm mb-4">
                                Nepal recorded roughly 1.147 million arrivals in 2024, marking a 13–14%
                                rise from 2023 and reaching about 96% of pre-COVID numbers. This reflects
                                restored air connectivity and renewed traveler confidence.
                            </p>

                            <h4 className=" text-lg mt-4">Trekking on the Rise</h4>
                            <p className="text-gray-700 text-sm mb-4">
                                The Annapurna Region alone hosted ~244,000 trekkers in 2024 — its highest
                                figure ever. Demand for adventure and nature-based travel continues to
                                outpace general leisure tourism.
                            </p>

                            <h4 className=" text-lg mt-4 ">Economic Significance of Trekkers</h4>
                            <p className="text-gray-700 text-sm mb-4">
                                Trekking tourists typically spend more and stay longer, directly supporting
                                rural economies through guides, lodges, and local services, creating higher
                                economic impact per visitor.
                            </p>

                            <h4 className=" text-lg mt-4 mb-2">Short-Term Risks Ahead</h4>
                            <p className="text-gray-700 text-sm">
                                Despite the rebound, political unrest and travel advisories in 2025 have
                                already led to booking cancellations, posing near-term risks to both
                                overall tourism and trekking arrivals.
                            </p>
                        </div>
                        {/* Embedded PDF viewer */}
                        {pdfUrl && (
                            <div className="border border-gray-300 rounded-lg mt-4 mb-8 h-[600px]">
                                <iframe
                                    src={pdfUrl}
                                    width="100%"
                                    height="100%"
                                    title="Trekking PDF Report"
                                    style={{ border: "none" }}
                                />
                            </div>
                        )}
                    </div>
                    <div className="w-1/3">
                        <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm border border-gray-300 overflow-hidden">
                            {/* Header with Dropdown */}
                            <div className="px-6 pt-6 pb-4 border-b border-gray-200">
                                <div className="relative">
                                    <select
                                        defaultValue=""
                                        className="w-full appearance-none bg-gray-50 border border-gray-300 text-gray-400 py-3 px-4 pr-10 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500 cursor-pointer text-base font-medium"
                                    >
                                        <option value="" disabled>
                                            More Industries
                                        </option>
                                        <option>Technology</option>
                                        <option>Healthcare</option>
                                        <option>Finance</option>
                                    </select>
                                    <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                                </div>
                            </div>
                            <hr className="border-b border-gray-300 mx-5.5" />


                            {/* Download Button */}
                            <div className="px-6 py-5">
                                <button
                                    onClick={downloadPdf}
                                    className="w-full bg-primary hover:bg-blue-800 text-white font-medium py-3.5 px-6 rounded-lg transition-colors duration-200 shadow-sm">
                                    Download Report
                                </button>
                            </div>

                            {/* Related Reports Section */}
                            <div className="px-6 pb-6 related-section">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Reports</h2>
                                <ul className="space-y-3">
                                    <li><a href="">Trekking Stays</a></li>
                                    <li><a href="">Trekking gears</a></li>
                                    <li><a href="">Trekking paths</a></li>
                                    <li><a href="">Trekking funds</a></li>
                                    <li><a href="">Government in Trekking</a></li>
                                    <li><a href="" className="flex items-center">More…</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default TourismChart;
