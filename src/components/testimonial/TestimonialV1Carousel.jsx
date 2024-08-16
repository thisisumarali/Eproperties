"use client"
import React, { useState } from 'react';
import Slider from 'react-slick';
import TestimonialV1Data from '../../../public/assets/jsonData/testimonial/TestimonialV1Data.json'

const TestimonialV1Carousel = () => {

    const [slider, setSlider] = useState(null);

    // Custom arrow components
    const handlePrevious = () => {
        slider?.slickPrev();
    };

    const handleNext = () => {
        slider?.slickNext();
    };

    const settings = {
        infinite: true,
        autoplay: false,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <>
            <div className="testi_list">
                <Slider {...settings} ref={setSlider}>
                    {TestimonialV1Data.testimonialData.map(testimonial =>
                        <div className="col-lg-12" key={testimonial.id} >
                            <div className="testi-text">
                                <p>{testimonial.text}</p>
                            </div>

                        </div >
                    )}
                </Slider >
                <div className="testimonial-nav">
                    <button className="nav-prev" onClick={handlePrevious}>
                        <i className="bi bi-chevron-left"></i></button>
                    <button className="nav-next" onClick={handleNext}>
                        <i className="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default TestimonialV1Carousel;