'use client'
import React from 'react';
import BrandV1Data from '../../../public/assets/jsonData/brand/BrandV1Data.json'
import Image from 'next/image';
import Slider from 'react-slick';
import Link from 'next/link';
import handlePreventClick from '../click/handlePreventClick';

const BrandV1 = () => {

    const settings = {
        infinite: true,
        autoplay: false,
        arrows: false,
        speed: 1500,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <>
            <div className="brand-area animate__animated animate__slideInUp">
                <div className="container-fluid">
                    <div className="row">
                        <div className="brand_list ">
                            <Slider {...settings}>
                                {BrandV1Data.map(brand =>
                                    <div className="col-lg-12" key={brand.id}>
                                        <div className="brand-thumb">
                                            <Link href={{ javascript: void (0) }} onClick={handlePreventClick}><Image src={`/assets/images/brand/${brand.brandThumb}`} alt="image" width={274} height={94} /></Link>
                                        </div>
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandV1;