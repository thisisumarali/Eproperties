import Image from 'next/image';
import React from 'react';

const SingleTestimonialV1 = ({ testimonial }) => {
    const { testimonialClass, animation, thumb, name, designation, text, icon } = testimonial

    return (
        <>
            <div className={`testi-single-box ${testimonialClass} ${animation}`}>
                <div className="testi-items-box">
                    <div className="testi-content">
                        <div className="testi-thumb">
                            <Image src={`/assets/images/testimonial/${thumb}`} width={60} height={60} alt="image" />
                        </div>
                        <div className="testi-title">
                            <h4>{name}</h4>
                            <span>{designation}</span>
                        </div>
                        <div className="testi-discription">
                            <p>{text.split(" ").slice(0, 18).join(" ")}</p>
                        </div>
                        <div className="testi-icon-thumb">
                            <Image src={`/assets/images/testimonial/${icon}`} width={41} height={33} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTestimonialV1;