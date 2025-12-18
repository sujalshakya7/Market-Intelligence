import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Extract first image src from HTML content
 */
const extractImageFromContent = (html) => {
  if (!html) return null;
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
};

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("latest");
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");



  const API_URLS = [
    "https://ezexplanation.com/api/intel/article/report/custom-logistics-news-1/",
    "https://ezexplanation.com/api/intel/article/report/custom-logistics-news-2/",
    "https://ezexplanation.com/api/intel/article/report/custom-logistics-news-3/",
  ];

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        const responses = await Promise.all(
          API_URLS.map((url) => fetch(url).then((res) => res.json()))
        );

        setNewsData(responses.filter(Boolean));
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllNews();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-10 text-gray-500">
        Loading news...
      </div>
    );
  }

  if (!newsData.length) {
    return (
      <div className="text-center mt-10 text-red-500">No news available.</div>
    );
  }
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const years = Array.from(
    new Set(newsData.map(item => new Date(item.created_at).getFullYear()))
  );
  const filteredAndSortedNews = [...newsData]
    .filter(item => {
      const date = new Date(item.created_at);
      const matchMonth =
        selectedMonth === "all" || date.getMonth() === Number(selectedMonth);
      const matchYear =
        selectedYear === "all" || date.getFullYear() === Number(selectedYear);
      return matchMonth && matchYear;
    })
    .sort((a, b) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);
      return sortOrder === "latest" ? dateB - dateA : dateA - dateB;
    });


  return (
    <section className="wrapper mt-20 font-general-sans">
      <h1 className="text-3xl font-medium mb-6">Custom Logistics News</h1>
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Sort Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-3 py-2 rounded-md text-sm"
        >
          <option value="latest">Latest First</option>
          <option value="oldest">Oldest First</option>
        </select>

        {/* Month Dropdown */}
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="border px-3 py-2 rounded-md text-sm"
        >
          <option value="all">All Months</option>
          {months.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>

        {/* Year Dropdown */}
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border px-3 py-2 rounded-md text-sm"
        >
          <option value="all">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>



      {filteredAndSortedNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {filteredAndSortedNews.map((item, index) => {
            const imageUrl = extractImageFromContent(item.content);

            return (
              <Link
                key={index}
                to={`/news/${item.article.slug}`} // ✅ FIXED
                className="bg-white rounded-md shadow-sm px-3 pt-3 pb-5 flex flex-col hover:shadow-2xl transition cursor-pointer"
              >
                {/* IMAGE */}
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={item.article.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                )}

                {/* TITLE */}
                <h2 className="text-xl font-semibold">{item.article.title}</h2>

                {/* DATE */}
                <div className="pt-4 mb-2">
                  <span className="text-xs text-gray-500">
                    {new Date(item.created_at).toLocaleDateString()}
                  </span>
                </div>

                {/* ABSTRACT */}
                <p className="text-gray-600 text-sm">{item.article.abstract}</p>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center mt-10 text-gray-500">
          No news available for the selected date.
        </div>
      )}
    </section>
  );
};

export default News;
