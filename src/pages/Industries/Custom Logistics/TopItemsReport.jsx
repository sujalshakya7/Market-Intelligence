import React, { useEffect, useRef } from "react";

// Hardcoded data parsed from the CSV file
const exportData = [
  { product: "Refined Palm Oil", value_2078_79: 41.06, value_2079_80: 20.51 },
  { product: "Synthetic Yarn", value_2078_79: 12.57, value_2079_80: 12.2 },
  { product: "Woolen Carpet", value_2078_79: 11.59, value_2079_80: 9.5 },
  { product: "Refined Soya-bean Oil", value_2078_79: 48.12, value_2079_80: 8.48 },
  { product: "Cardamom", value_2078_79: 4.81, value_2079_80: 8.28 },
  { product: "Readymade Garments", value_2078_79: 7.14, value_2079_80: 7.82 },
  { product: "Iron Sheet", value_2078_79: 2.55, value_2079_80: 7.2 },
  { product: "Juice", value_2078_79: 6.08, value_2079_80: 6.64 },
  { product: "Jute Goods", value_2078_79: 4.94, value_2079_80: 5.23 },
  { product: "Jute Fabric", value_2078_79: 6.05, value_2079_80: 4.77 },
];

const importData = [
  { product: "Diesel", value_2078_79: 168.23, value_2079_80: 153.77 },
  { product: "Petrol", value_2078_79: 71.39, value_2079_80: 66.84 },
  { product: "L.P. Gas", value_2078_79: 65.58, value_2079_80: 58.18 },
  { product: "Gold", value_2078_79: 42.7, value_2079_80: 43.91 },
  { product: "Pure Iron", value_2078_79: 23.98, value_2079_80: 43.6 },
  { product: "Crude Soya-bean Oil", value_2078_79: 56.18, value_2079_80: 35.58 },
  { product: "Other Coal", value_2078_79: 35.96, value_2079_80: 27.12 },
  { product: "Mobile Telephone", value_2078_79: 41.16, value_2079_80: 26.51 },
  { product: "Polythene Granules", value_2078_79: 30.38, value_2079_80: 25.93 },
  { product: "Crude palm oil", value_2078_79: 59.31, value_2079_80: 25.92 },
];

const TopItemsReport = () => {
  const exportChartRef = useRef(null);
  const importChartRef = useRef(null);
  const exportChartInstance = useRef(null);
  const importChartInstance = useRef(null);

  useEffect(() => {
    // Destroy previous chart instances if they exist
    if (exportChartInstance.current) {
      exportChartInstance.current.destroy();
    }
    if (importChartInstance.current) {
      importChartInstance.current.destroy();
    }
    
    const createChart = (canvasRef, chartInstanceRef, data, label) => {
      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx) return;

      const labels = data.map((item) => item.product);
      const data2078_79 = data.map((item) => item.value_2078_79);
      const data2079_80 = data.map((item) => item.value_2079_80);

      chartInstanceRef.current = new window.Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Value 2078/79 (Rs. Billion)",
              data: data2078_79,
              backgroundColor: "rgba(54, 162, 235, 0.6)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
            {
              label: "Value 2079/80 (Rs. Billion)",
              data: data2079_80,
              backgroundColor: "rgba(255, 99, 132, 0.6)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: label,
              font: {
                size: 18,
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Value (Rs. Billion)",
              },
            },
          },
        },
      });
    };

    createChart(exportChartRef, exportChartInstance, exportData, "Top 10 Exported Commodities Comparison");
    createChart(importChartRef, importChartInstance, importData, "Top 10 Imported Commodities Comparison");

    // Cleanup function to destroy charts on component unmount
    return () => {
      if (exportChartInstance.current) {
        exportChartInstance.current.destroy();
      }
      if (importChartInstance.current) {
        importChartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section className="wrapper py-20 font-general-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Import and Export Trends
        </h1>
        <div className="space-y-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <canvas ref={exportChartRef}></canvas>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <canvas ref={importChartRef}></canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopItemsReport;
