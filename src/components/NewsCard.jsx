import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaShareAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details, tags } =
    news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="card bg-base-100 shadow-md rounded-2xl overflow-hidden">
      {/* Author Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt="Author"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <CiBookmark className="text-gray-500 cursor-pointer hover:text-primary" />
          <FaShareAlt className="text-gray-500 cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* News Content */}
      <div className="px-4">
        <h2 className="font-bold text-lg mb-3 leading-snug">{title}</h2>
        <figure className="mb-4">
          <img
            src={thumbnail_url}
            alt="News Thumbnail"
            className="w-full rounded-lg object-cover"
          />
        </figure>
        <p className="text-gray-600 text-sm mb-2">{details.slice(0, 200)}...</p>
        <button className="text-primary font-medium text-sm hover:underline mb-3">
          Read More
        </button>
      </div>

      {/* Footer Info */}
      <div className="border-t border-gray-200 flex items-center justify-between px-4 py-3 text-sm">
        <div className="flex items-center gap-1 text-warning">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "" : "text-gray-300"}
            />
          ))}
          <span className="text-gray-700 font-medium ml-1">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
