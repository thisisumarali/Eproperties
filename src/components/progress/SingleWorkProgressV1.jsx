import Image from 'next/image';
import React from 'react';

const SingleWorkProgressV1 = ({ progress }) => {
    const { thumb, shape, number, title, text } = progress

    return (
        <>
            <div className="work-process-single-box">
                <div className="work-process-thumb">
                    <Image src={`/assets/images/resource/${thumb}`} width={233} height={233} alt="image" />
                    <div className="work-process-shape rotateme">
                        <Image src={`/assets/images/resource/${shape}`} width={300} height={300} alt="image" />
                    </div>
                    <div className="work-process-number">
                        <h4>{number}</h4>
                    </div>
                    <div className="work-process-content">
                        <h4>{title}</h4>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleWorkProgressV1;