import Image from 'next/image';
import React from 'react';
import ContactV1Data from '../../../public/assets/jsonData/contact/ContactV1Data.json'
import contactThumb from '@/public/assets/images/resource/contact-thumb.png'
import contactShape from '@/public/assets/images/resource/contact-shape.png'
import Link from 'next/link';

const ContactV1 = () => {
    return (
        <>
            <div className="contact-area animate__animated animate__slideInUp">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-12">
                            <div className="section-title">
                                <div className="section-main-title contact">
                                    <h2>{ContactV1Data.title1}</h2>
                                    <h2>{ContactV1Data.title2}</h2>
                                </div>
                            </div>
                            <div className="contact-discription">
                                <p>{ContactV1Data.text} </p>
                            </div>
                            <div className="eulding-btn">
                                <Link href="/contact">{ContactV1Data.btnText} <i className={ContactV1Data.btnIcon}></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="contact-thumb animate__animated animate__slideInRight">
                                <Image src={contactThumb} alt="image" />
                                <div className="contact-shape bounce-animate">
                                    <Image src={contactShape} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactV1;