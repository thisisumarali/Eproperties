"use client"
import Image from 'next/image';
import React from 'react';
import SlicedTitle from './SlicedTitle';

const SinglePopularPost = ({ blog }) => {
    const { miniThumb, month, date, dateIcon2, commentIcon, comments, title } = blog

    return (
        <>
            <div className="sidber-widget-recent-post mb-30">
                <div className="recent-widget-thumb">
                    <Image src={`/assets/images/blog/${miniThumb}`} width={110} height={110} alt="image" />
                </div>
                <div className="recent-widget-content">
                    <div className="recent-widget-meta">
                        <span><i className={dateIcon2}></i> {month} {date}</span>
                        <span><i className={commentIcon}></i> ({comments})</span>
                    </div>
                    <div className="recent-widget-title">
                        <SlicedTitle title={title} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePopularPost;