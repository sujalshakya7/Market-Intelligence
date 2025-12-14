import React, { useEffect, useState } from "react";

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

        // responses = [data1, data2, data3]
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
      <div className="text-center mt-10 text-red-500">
        No news available.
      </div>
    );
  }

  return (
    <section className="wrapper mt-10 font-general-sans">
      <h1 className="text-3xl font-medium mb-6">
        Custom Logistics News
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl h-[600px] shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition"
          >
            {/* TITLE */}
            <h2 className="text-xl font-semibold mb-2">
              {item.article?.title}
            </h2>

            {/* ABSTRACT */}
            <p className="text-gray-600 text-sm mb-4">
              {item.article?.abstract}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {item.article?.image_path}
            </p>

            {/* DESCRIPTION (HTML) */}
            <div className="h-[20%] overflow-hidden mb-4">
            {item.content && (
              <div
                className="prose prose-sm max-w-full
                           prose-img:rounded-lg prose-img:shadow-md"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            )}
            </div>

            {/* FOOTER */}
            <div className="flex justify-between items-center mt-auto pt-4 border-t">
              {/* <a
                href={`https://ezexplanation.com${item.dataset}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
                download
              >
                Download PDF
              </a> */}

              <span className="text-xs text-gray-500">
                {new Date(item.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
