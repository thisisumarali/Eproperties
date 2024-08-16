"use client"
import React from 'react';
import { toast } from 'react-toastify';

const BlogForm = () => {

    const handleComment = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks For Your Comment")
    }

    return (
        <>
            <div className="col-lg-12">
                <div className="blog-contact-box mt-40">
                    <div className="blog-contact-title">
                        <h4>Leave A Comment</h4>
                    </div>
                    <form onSubmit={handleComment}>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-box">
                                    <input type="text" name="name" placeholder="Your Name" autoComplete='off' required />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-box">
                                    <input type="email" name="email" placeholder="Email Address" autoComplete='off' required />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-box">
                                    <input type="text" name="website" placeholder="Website" autoComplete='off' required />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-box">
                                    <textarea name="massage" id="massage" cols="30" rows="10" placeholder="Comment" autoComplete='off' required />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-box-button">
                                    <button type="Submit">Post Comments</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div id="status"></div>
                </div>
            </div>
        </>
    );
};

export default BlogForm;