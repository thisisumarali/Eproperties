"use client"
import Image from 'next/image';
import React from 'react';
import CountUp from 'react-countup';
import about2Thumb from '@/public/assets/images/about/about2.jpg'
import AboutV1Content from './AboutV1Content';

const AboutV2 = () => {
    return (
        <>
            <div className="about-area style-two animate__animated animate__slideInUp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-thumb style-two animate__animated animate__slideInUp">
                                <Image src={about2Thumb} alt="image" />
                                <div className="about-counter">
                                    <div className="about-numbar">
                                        <h4 className="counter"><CountUp end={12} enableScrollSpy /></h4>
                                        <span>+</span>
                                    </div>
                                    <div className="about-counter-text">
                                        <h5>Years of Experience
                                            Construction Services</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <AboutV1Content />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;