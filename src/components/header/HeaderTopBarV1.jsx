import React from 'react';
import SocialShare from '../utilities/SocialShare';
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const HeaderTopBarV1 = () => {
    return (
        <>
            <div className="topbar-area d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="topbar-discription">
                                <p># 1 building & Renovation Company of Losangle City.</p>
                                <Link href="#" onClick={handleSmoothScroll} className='ms-1'>Get Appointment Today</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="topbar-social-icon">
                                <ul>
                                    <SocialShare />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="topbar-btn">
                        <Link href="/contact">Book Schedule Now</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopBarV1;