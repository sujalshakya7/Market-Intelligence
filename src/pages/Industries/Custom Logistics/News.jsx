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

  return (
    <section className="wrapper mt-10 font-general-sans">
      <h1 className="text-3xl font-medium mb-6">Custom Logistics News</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsData.map((item, index) => {
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
    </section>
  );
};

export default News;
