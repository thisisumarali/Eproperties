import Link from 'next/link';
import React from 'react';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const HeaderTopBarV2 = ({ topBarClass }) => {
    return (
        <>
            <div className={`topbar-area ${topBarClass ? topBarClass : ""} d-flex align-items-center`}>
                <div className="container-fluid p-90">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="topbar-adress">
                                <ul>
                                    <li className="line"><Link href="#" onClick={handleSmoothScroll}>Address : 3517 W. Gray St. Utica, Pennsylvania 57867</Link></li>
                                    <li><a href="mailto:info@example.com" onClick={handleSmoothScroll}>info@example.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="topbar-menu">
                                <ul>
                                    <li className="line"><Link href="/contact" >Help</Link></li>
                                    <li><Link href="/contact">Support</Link></li>
                                    <li><Link href="/contact" onClick={handleSmoothScroll}>Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopBarV2;