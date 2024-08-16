"use client"
import React, { useEffect, useState, useRef } from 'react';

const SingleProgress = ({ progress }) => {
    const { title, end } = progress;
    const progressRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);
    const [progressWidth, setProgressWidth] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            setIsVisible(entries[0].isIntersecting);
        });

        observer.observe(progressRef.current);

        return () => {
            observer.disconnect();
        };
    }, [progressRef]);

    useEffect(() => {
        if (isVisible) {
            setProgressWidth(end);
        }
    }, [isVisible, end]);

    return (
        <div className="progress-box" ref={progressRef}>
            <h5>{title}</h5>
            <div className="progress">
                <div className={`progress-bar animated-bar`}
                    role="progressbar"
                    data-width={end}
                    style={{
                        width: `${progressWidth}%`,
                        transition: `width 2s ease-in-out`
                    }}
                >
                    <span>{end}%</span>
                </div>
            </div>
        </div>
    );
};

export default SingleProgress;

