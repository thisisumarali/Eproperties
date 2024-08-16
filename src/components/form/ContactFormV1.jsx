"use client"
import React from 'react';
import { toast } from 'react-toastify';

const ContactFormV1 = () => {

    const handleMessage = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks For Your Message!")
    }

    return (
        <>
            <form onSubmit={handleMessage}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="form-box team">
                            <input type="text" name="name" placeholder="Name*" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-box team">
                            <input type="email" name="email" placeholder="E-mail*" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-box team">
                            <input type="text" name="email" placeholder="Website*" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-box team">
                            <textarea name="massage" id="massage" cols="30" rows="10" placeholder="Your Comments*" autoComplete='off' required></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-box-button team">
                            <button type="Submit">Send Message</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactFormV1;