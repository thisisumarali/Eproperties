"use client"
import React from 'react';
import Slider from 'react-slick';
import BannerV3Data from '../../../public/assets/jsonData/banner/BannerV3Data.json'
import SingleBannerV3 from './SingleBannerV3';

const BannerV3 = () => {

    const settings = {
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplaySpeed: 5000
    }

    return (
        <>
            <section className="banner-section style-three">
                <div className="banner-carousel">
                    <Slider {...settings}>
                        {BannerV3Data.map(banner =>
                            <SingleBannerV3 banner={banner} key={banner.id} sliderNumber="three" />
                        )}
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default BannerV3;