import Image from 'next/image';
import React from 'react';

const SingleAboutV1 = ({ about }) => {
    const { thumb, title, text } = about

    return (
        <>
            <div className="about-single-box">
                <div className="about-icon">
                    <Image src={`/assets/images/about/${thumb}`} width={35} height={35} alt="image" />
                </div>
                <div className="about-text">
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};

export default SingleAboutV1;