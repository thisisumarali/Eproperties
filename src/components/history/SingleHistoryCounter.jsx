"use client"
import React from 'react';
import CountUp from 'react-countup';

const SingleHistoryCounter = ({ history }) => {
    const { end, title, operator } = history

    return (
        <>
            <div className="counter-single-box">
                <div className="counter-numbar">
                    <h4 className="counter"><CountUp end={end} enableScrollSpy />{operator && <span>{operator}</span>}</h4>
                </div>
                <div className="counter-content">
                    <h5>{title}</h5>
                </div>
            </div>
        </>
    );
};

export default SingleHistoryCounter;