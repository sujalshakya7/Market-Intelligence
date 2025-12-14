import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

/**
 * Extract first image src from HTML content
 */
const extractFirstImage = (html) => {
  if (!html) return null;
  const match = html.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : null;
};

/**
 * Extract first h1 from HTML content
 */
const extractFirstTitle = (html) => {
  if (!html) return null;
  const match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  return match ? match[1] : null;
};

/**
 * Remove first image and first h1 from content
 */
const removeFirstImageAndTitle = (html) => {
  if (!html) return html;
  // Remove <figure> with <img>
  let newHtml = html.replace(
    /<figure[^>]*>[\s\S]*?<img[^>]*>[\s\S]*?<\/figure>/i,
    ""
  );
  // Remove first <h1>
  newHtml = newHtml.replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, "");
  return newHtml;
};

const NewsDetail = () => {
  const { newsId } = useParams(); // this should be article.slug
  const [articleData, setArticleData] = useState(null);
  const [otherNews, setOtherNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // All news URLs
  const API_URLS = [
    "https://ezexplanation.com/api/intel/article/report/custom-logistics-news-1/",
    "https://ezexplanation.com/api/intel/article/report/custom-logistics-news-2/",
    "https://ezexplanation.com/api/intel/article/report/custom-logistics-news-3/",
  ];

  useEffect(() => {
    // Fetch the selected article
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `https://ezexplanation.com/api/intel/article/report/${newsId}/`
        );
        if (!response.ok) {
          throw new Error("News article not found");
        }
        const data = await response.json();
        setArticleData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Fetch all news for "More News" section
    const fetchAllNews = async () => {
      try {
        const responses = await Promise.all(
          API_URLS.map((url) => fetch(url).then((res) => res.json()))
        );
        const allNews = responses.filter(Boolean);

        // Exclude current article using article.slug
        setOtherNews(allNews.filter((news) => news.article.slug !== newsId));
      } catch (err) {
        console.error("Error fetching other news:", err);
      }
    };

    fetchArticle();
    fetchAllNews();
  }, [newsId]);

  if (loading) {
    return (
      <div className="text-center mt-20 text-gray-500">Loading article...</div>
    );
  }

  if (error) {
    return <div className="text-center mt-20 text-red-500">{error}</div>;
  }

  const { content, created_at } = articleData;
  const titleFromContent = extractFirstTitle(content);
  const imageFromContent = extractFirstImage(content);
  const cleanContent = removeFirstImageAndTitle(content);

  return (
    <section className="wrapper2 py-20 font-general-sans">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column: Article Content */}
        <div className="lg:w-2/3">
          {/* Title from content */}
          {titleFromContent && (
            <h1
              className="text-4xl font-bold text-gray-800 mb-4"
              dangerouslySetInnerHTML={{ __html: titleFromContent }}
            />
          )}

          {/* Image */}
          {imageFromContent && (
            <img
              src={imageFromContent}
              alt="news"
              className="w-full h-auto max-h-[420px] object-cover rounded-lg mb-6"
            />
          )}

          {/* Date */}
          <p className="text-sm text-gray-500 mb-8">
            Published on {new Date(created_at).toLocaleDateString()}
          </p>

          {/* Full description */}
          <div
            className="prose lg:prose-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: cleanContent }}
          />
        </div>

        {/* Right Column: More News */}
        <aside className="lg:w-1/3">
          <div className="sticky top-24 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">More News</h2>
            <ul>
              {otherNews.map((newsItem) => {
                const imageUrl = extractFirstImage(newsItem.content);
                return (
                  <li key={newsItem.id} className="mb-6">
                    {/* IMAGE */}
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt={newsItem.article.title}
                        className="w-full h-48 object-cover rounded-md mb-2"
                      />
                    )}

                    {/* TITLE LINK */}
                    <Link
                      to={`/news/${newsItem.article.slug}`}
                      className="text-gray-700 font-semibold hover:text-primary transition-colors duration-200"
                    >
                      {newsItem.article.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default NewsDetail;
