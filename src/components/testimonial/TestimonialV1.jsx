import React from 'react';
import Image from 'next/image';
import sectionShape from '@/public/assets/images/about/section-shape.png'
import TestimonialV1Data from '../../../public/assets/jsonData/testimonial/TestimonialV1Data.json'
import SingleTestimonialV1 from './SingleTestimonialV1';
import TestimonialV1Carousel from './TestimonialV1Carousel';

const TestimonialV1 = () => {
    return (
        <>
            <div className="testimonial-area animate__animated animate__slideInUp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="section-title">
                                <div className="section-shape">
                                    <Image src={sectionShape} alt="image" />
                                </div>
                                <div className="section-sub-title">
                                    <h4>{TestimonialV1Data.subTitle}</h4>
                                </div>
                                <div className="section-main-title">
                                    <h2>{TestimonialV1Data.title}</h2>
                                    <h2>{TestimonialV1Data.title2}</h2>
                                </div>
                            </div>
                            <div className="row">
                                <TestimonialV1Carousel />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 d-none d-lg-block">
                            <div className="row">
                                {TestimonialV1Data.testimonialData.map(testimonial =>
                                    <div className="col-lg-6 col-md-6" key={testimonial.id}>
                                        <SingleTestimonialV1 testimonial={testimonial} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV1;