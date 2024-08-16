import React from 'react';
import BlogV1Data from '../../../public/assets/jsonData/blog/BlogV1Data.json'
import SinglePopularPost from './SinglePopularPost';

const PopularPostWidget = () => {
    return (
        <>
            <div className="widget-categories-box">
                <div className="widget-catagories-title">
                    <h4>{BlogV1Data.widgetTitle}</h4>
                </div>
                {BlogV1Data.blogData.slice(0, 3).map(blog =>
                    <SinglePopularPost blog={blog} key={blog.id} />
                )}
            </div>
        </>
    );
};

export default PopularPostWidget;