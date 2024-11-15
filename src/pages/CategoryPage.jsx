import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryPage = () => {

    const {data:news}=useLoaderData()
    console.log(news)
    return (
        <div>
            <h1> {news.length}  news available</h1>
            {
                news.map((singleNews)=> (
                    <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
                ))
            }
        </div>
    );
};

export default CategoryPage;