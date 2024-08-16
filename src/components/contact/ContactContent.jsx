"use client"
import React from 'react';
import ContactFormV2 from '../form/ContactFormV2';
import LocationMaps from '../utilities/LocationMaps';

const ContactContent = () => {
    return (
        <>
            <div className="contact-us-area">
                <div className="container">
                    <div className="row mb-150">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-single-box">
                                <div className="contact-icon">
                                    <i className="bi bi-telephone-x"></i>
                                </div>
                                <div className="contact-content">
                                    <h4>Phone Number</h4>
                                    <span><a href="tel:012-345-6789">012-345-6789</a></span>
                                    <span><a href="tel:539-737-1380">539-737-1380</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-single-box">
                                <div className="contact-icon">
                                    <i className="bi bi-envelope-open"></i>
                                </div>
                                <div className="contact-content">
                                    <h4>E-mail</h4>
                                    <span><a href="mailto:inquiry@example.com<">inquiry@example.com</a></span>
                                    <span><a href="mailto:info@example.com" >info@example.com</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-single-box two">
                                <div className="contact-icon">
                                    <i className="bi bi-geo-alt"></i>
                                </div>
                                <div className="contact-content">
                                    <h4>Address</h4>
                                    <span>27 Division St, New York</span>
                                    <span>NY 10002, USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row contact">
                        <div className="contact-box">
                            <div className="contact-title">
                                <h2>Have be any question?</h2>
                                <h2>feel free to Contact</h2>
                            </div>
                            <ContactFormV2 />
                        </div>
                    </div>
                </div>
            </div>
            <LocationMaps />
        </>
    );
};

export default ContactContent;