import React from 'react';
import { FaStar } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';

const NewsCard = ({ news }) => {
  return (
    <div className="card  bg-base-100 shadow-xl mb-5">
      <figure>
        <img src={news.thumbnail_url} alt="News Thumbnail" className="" />
      </figure>
      <div className="card-body">
        <div className="flex items-center mb-4">
          <img
            src={news.author.img}
            alt="Author"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold text-gray-700">{news.author.name}</p>
            <p className="text-sm text-gray-500">{new Date(news.author.published_date).toLocaleDateString()}</p>
          </div>
        </div>
        <h2 className="card-title text-lg font-bold text-gray-800">{news.title}</h2>
        <p className="text-gray-600 text-sm mb-4">
          {news.details.slice(0, 150)}... <span className="text-blue-500 cursor-pointer">Read More</span>
        </p>
        <div className="card-actions justify-between items-center">
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                className={`$ {
                  index < Math.round(news.rating.number) ? 'text-yellow-500' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">{news.rating.number}</span>
          </div>
          <div className="flex items-center space-x-1">
            <AiOutlineEye className="text-gray-500" />
            <span className="text-sm text-gray-600">{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;