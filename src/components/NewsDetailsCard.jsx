import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  // console.log(news);
  return (
    <div>
      <h3 className="text-xl font-semibold">Dragon News</h3>
      <div className="mt-5 border border-gray-200 p-5 rounded">
        <img
          className="w-full h-[500px] object-cover rounded"
          src={news.image_url}
          alt=""
        />
        <h2 className="text-2xl mt-5 font-semibold">{news.title}</h2>
        <p className="py-5 text-accent">{news.details}</p>
        <Link className="btn btn-secondary" to={`/category/${news.category_id}`}><FaArrowLeft></FaArrowLeft> All news in this category</Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
