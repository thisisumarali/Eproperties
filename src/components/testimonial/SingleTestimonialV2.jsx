import Image from 'next/image';
import React from 'react';
import RatingsV1 from '../utilities/RatingsV1';

const SingleTestimonialV2 = ({ testimonial }) => {
    const { icon, text, reviewer, name, designation, ratings } = testimonial

    return (
        <>
            <div className="testi-itmes-box">
                <div className="testi-itmes-icon">
                    <i className={icon}></i>
                </div>
                <div className="testi-items-discription">
                    <p>{text}</p>
                </div>
                <div className="testi-items-content">
                    <div className="testi-items-thumb">
                        <Image src={`/assets/images/testimonial/${reviewer}`} width={65} height={65} alt="image" />
                    </div>
                    <div className="testi-items-title">
                        <h4>{name}</h4>
                        <span>{designation}</span>
                    </div>
                </div>
                <div className="testi-rating">
                    <RatingsV1 ratings={ratings} />
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV2;