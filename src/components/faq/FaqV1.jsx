"use client"
import Image from 'next/image';
import React from 'react';
import faqImg from '@/public/assets/images/resource/faq-img.png'
import FaqV1Data from '../../../public/assets/jsonData/faq/FaqV1Data.json'
import SingleFaqV1 from './SingleFaqV1';

const FaqV1 = () => {
    return (
        <>
            <div className="faq-area animate__animated animate__slideInUp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="section-title animate__animated animate__slideInUp">
                                <div className="section-main-title">
                                    <h2>Our Brief History, Our</h2>
                                    <h2>Goals & Motivation</h2>
                                </div>
                            </div>
                            <div className="faq-thumb">
                                <Image src={faqImg} alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="tab_container animate__animated animate__slideInUp">
                                <div className="accordion" id="accordionExample">
                                    {FaqV1Data.map(faq =>
                                        <SingleFaqV1 faq={faq} key={faq.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqV1;