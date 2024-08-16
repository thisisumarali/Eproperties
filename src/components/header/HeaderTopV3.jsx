import Link from 'next/link';
import React from 'react';

const HeaderTopV3 = () => {
    return (
        <>
            <div className="topbar-area style-three d-flex align-items-center">
                <div className="container-fluid p-90">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="topbar-adress">
                                <ul>
                                    <li className="line">Address : 3517 W. Gray St. Utica, Pennsylvania 57867</li>
                                    <li><a href="mailto:info@example.com">info@example.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="topbar-menu">
                                <ul>
                                    <li className="line"><Link href="/contact">Help</Link></li>
                                    <li><Link href="/contact">Support</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopV3;