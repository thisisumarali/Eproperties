import React from 'react';
import SocialShare from '../utilities/SocialShare';
import logo2 from '@/public/assets/images/logo2.png'
import Image from 'next/image';
import Link from 'next/link';

const HeaderSidebar = ({ isSidebarOpen, handleSidebarClose }) => {
    return (
        <>
            <div className={`sidebar-group info-group ${isSidebarOpen? "isActive": ""}`} >
                <div className="sidebar-widget">
                    <div className="sidebar-widget-container">
                        <div className="widget-heading">
                            <Link href="#" className="close-side-widget" onClick={handleSidebarClose} scroll={false}>
                                <i className="bi bi-x-lg"></i>
                            </Link>
                        </div>
                        <div className="sidebar-textwidget">
                            <div className="sidebar-info-contents">
                                <div className="content-inner">
                                    <div className="sidebar-logo">
                                        <Link href="/"><Image src={logo2} alt="logo" /></Link>
                                    </div>
                                    <div className="about-box">
                                        <h2>About Us</h2>
                                        <p className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                                            inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                    </div>
                                    <div className="contact-info">
                                        <h2>Contact Info</h2>
                                        <ul className="list-style-one">
                                            <li><i className="bi bi-geo-alt-fill"></i>6391 Elgin St. Celina, Delaware</li>
                                            <li><i className="bi bi-telephone-fill"></i><a href="tel:+001123456789">(+001) 123-456-789</a></li>
                                            <li><i className="bi bi-envelope"></i> <a href="mailto:info@example.com">info@example.com</a></li>
                                            <li><i className="bi bi-alarm-fill"></i> Week Days: 08.00 to 10.00
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className="social-box">
                                        <SocialShare />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSidebar;