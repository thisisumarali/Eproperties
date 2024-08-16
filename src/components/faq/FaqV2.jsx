import React from 'react';
import FaqVideo from '../video/FaqVideo';
import SingleFaqV1 from './SingleFaqV1';
import FaqV1Data from '../../../public/assets/jsonData/faq/FaqV1Data.json'

const FaqV2 = () => {
    return (
        <>
            <div className="faq-area style-two animate__animated animate__slideInUp">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="faq-content">
                                <div className="section-title">
                                    <div className="section-sub-title faq">
                                        <h4>Frequently Asked Questions</h4>
                                    </div>
                                    <div className="section-main-title faq">
                                        <h2>Questions & Answers</h2>
                                    </div>
                                    <div className="faq-discripition">
                                        <p>Providing legal advice, contract drafting, compliance assistance, intellectual property protection, and other legal support for businesses. Creating visual content, such as logos, brochures, infographics. The timeline for seeing results depends on the specific services you choose and the current state of your business. </p>
                                    </div>
                                </div>
                                <div className="tab_container animate__animated animate__slideInUp">
                                    <div className="accordion" id="accordionExample">
                                        {FaqV1Data.map(faq =>
                                            <SingleFaqV1 faq={faq} key={faq.id} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <FaqVideo />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqV2;