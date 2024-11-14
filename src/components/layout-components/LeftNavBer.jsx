import React, { useEffect, useState } from 'react';

const LeftNavBer = () => {
    const [categories,setCategories]=useState([])

    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res=>res.json())
        .then(data=>setCategories(data.data.news_category
        ))
    },[])
    // {
    //     "category_id": "08",
    //     "category_name": "All News"
    //   }
    return (
        <div>
            <h2 className='font-semibold'>All Category: {categories.length}</h2>

            <div className='flex flex-col gap-2 mt-3'>
                {
                    categories.map(category=> (
                    <button className='btn' key={category.category_id}>{category.category_name}</button>))
                }
            </div>
        </div>
    );
};

export default LeftNavBer;