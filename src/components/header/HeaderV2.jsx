"use client"

import React from 'react';
import logo2 from '@/public//assets/images/logo2.png'
import Image from 'next/image';
import Link from 'next/link';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';
import useStickyMenu from '@/src/hooks/useStickyMenu';
import useMobileSidebarMenu from '@/src/hooks/useMobileSidebarMenu';
import useSubMenuToggle from '@/src/hooks/useSubMenuToggle';
import HeaderSearchContent from './HeaderSearchContent';
import useSearchBox from '@/src/hooks/useSearchBox';

const HeaderV2 = ({ headerClass }) => {

    const toggleSubMenu = useSubMenuToggle();
    const { isMobileSidebarOpen, openMobileSidebar, closeMobileSidebar } = useMobileSidebarMenu();
    const isMenuSticky = useStickyMenu();
    const { handleSearchOpen, handleSearchClose } = useSearchBox()

    return (
        <>
            <div className={`header-area style-two ${headerClass} ${isMenuSticky ? "sticky-menu" : ""}`} id="navbar">
                <div className="container-fluid p-90">
                    <div className="row align-items-center">
                        <div className="col-lg-2">
                            <div className="header-logo">
                                <Link href="/"><Image src={logo2} alt="logo" width={187} height={60} /></Link>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="header-munu style-two">
                                <MainMenu />
                                <div className="header-social style-two">
                                    <ul>
                                        <li className="upper">
                                            <Link href="#" className="search-box-btn search-box-outer" scroll={false} onClick={handleSearchOpen}><i className="bi bi-search"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="header-call-section">
                                    <div className="header-call-icon">
                                        <i className="bi bi-telephone-plus"></i>
                                    </div>
                                    <div className="header-call-title">
                                        <span>Need help?  Call us: </span>
                                        <span><a href="tel:1234567890">(+800) 1234 5678 90</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HeaderSearchContent handleSearchClose={handleSearchClose} />
            <MobileMenu toggleSubMenu={toggleSubMenu} isMobileSidebarOpen={isMobileSidebarOpen} openMobileSidebar={openMobileSidebar} closeMobileSidebar={closeMobileSidebar} isMenuSticky={isMenuSticky} />
        </>
    );
};

export default HeaderV2;