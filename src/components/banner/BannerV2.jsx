"use client"
import React from 'react';
import Slider from 'react-slick';
import BannerV2Data from '../../../public/assets/jsonData/banner/BannerV2Data.json'
import SingleBannerV2 from './SingleBannerV2';

const BannerV2 = () => {

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
            <section className="banner-section">
                <div className="banner-carousel">
                    <Slider {...settings}>
                        {BannerV2Data.map(banner =>
                            <SingleBannerV2 banner={banner} key={banner.id} />
                        )}
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default BannerV2;