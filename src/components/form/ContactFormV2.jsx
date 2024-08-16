"use client"
import React from 'react';
import { toast } from 'react-toastify';

const ContactFormV2 = () => {

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
                        <div className="form-box">
                            <input type="text" name="name" placeholder="First Name" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-box">
                            <input type="text" name="name" placeholder="Last Name" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-box">
                            <input type="number" name="phone" className='no-arrows' placeholder="Phone" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-box">
                            <input type="email" name="email" placeholder="Email Address" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-box">
                            <input type="text" name="subject" placeholder="Subject" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-box">
                            <input type="text" name="website" placeholder="Website" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-box">
                            <textarea name="massage" id="massage" cols="30" rows="10" placeholder="Comment" autoComplete='off' required></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-box-button inner">
                            <button type="Submit">Send Message</button>
                        </div>
                    </div>
                </div>
            </form>
            <div id="status"></div>
        </>
    );
};

export default ContactFormV2;