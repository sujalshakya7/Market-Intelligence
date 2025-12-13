import React, { useEffect, useState } from "react";

const News = () => {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          "https://ezexplanation.com/api/intel/article/report/import-and-export-news/"
        );
        const data = await res.json();

        setNewsData(data);
      } catch (err) {
        console.error("Error fetching news data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-10 text-gray-500">Loading news...</div>
    );
  }

  if (!newsData) {
    return (
      <div className="text-center mt-10 text-red-500">
        Failed to load news data.
      </div>
    );
  }

  return (
    <section className="wrapper mt-10 font-general-sans">
      <h1 className="text-3xl font-medium mb-4">{newsData.article?.title}</h1>
      <p className="text-gray-600 mb-6">{newsData.article?.abstract}</p>

      {/* Display the content */}
      <div className="w-[50%] mx-auto md-4">
      <div
        className="prose max-w-full font-general-sans 
        "
        dangerouslySetInnerHTML={{ __html: newsData.content }}
      />
      </div>
    </section>
  );
};

export default News;
