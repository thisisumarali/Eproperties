import Image from 'next/image';
import React from 'react';
import sliderThumb from '@/./public/assets/images/slider/slider-thumb.png'
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const BannerV1 = () => {
    return (
        <>
            <div className="slider-area d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="slider-content animate__animated animate__slideInLeft">
                                <div className="slider-sub-title">
                                    <h4>Great Experience In Building</h4>
                                </div>
                                <div className="slider-main-title">
                                    <h1>The Best Solution</h1>
                                    <h1>Industry Business</h1>
                                </div>
                                <div className="slider-discripton">
                                    <p>I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of high-quality parts and accessories.of high-quality parts and</p>
                                </div>
                                <div className="eulding-btn">
                                    <Link href="#" onClick={handleSmoothScroll}>Read More <i className="bi bi-arrow-up-right-circle-fill"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="slider-thumb animate__animated animate__slideInRight">
                                <Image src={sliderThumb} alt="slider-thumb" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;