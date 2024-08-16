"use client";
import Image from "next/image";
import React from "react";
import logoMini from "@/public/assets/images/logo-mini.png";
import Link from "next/link";
import MainMenu from "./MainMenu";

const MobileMenu = ({
  toggleSubMenu,
  isMobileSidebarOpen,
  openMobileSidebar,
  closeMobileSidebar,
  isMenuSticky,
}) => {
  return (
    <>
      <div
        className={`mobile-menu-area d-block d-lg-none ${
          isMenuSticky ? "sticky-nav" : ""
        }`}
      >
        <div className="header-top d-flex justify-content-between align-items-center">
          <button onClick={openMobileSidebar}>
            <i className="bi bi-list"></i>
          </button>
          <div className="header-logo">
            <Link href="/">
              <Image src={logoMini} alt="logo" />
            </Link>
          </div>
          <div className="eulding-btn about position-relative">
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
        <div
          className={`mobile-sidebar-wrap ${isMobileSidebarOpen ? "show" : ""}`}
        >
          <div className="sidebar-top d-flex justify-content-between align-items-center">
            <div className="mobile-sidebar-logo">
              <Link href="/">
                <Image src={logoMini} alt="logo" />
              </Link>
            </div>
            <div className="sidebar-icon">
              <button onClick={closeMobileSidebar}>
                <i className="bi bi-x-circle"></i>
              </button>
            </div>
          </div>
          <div className="sidebar-body">
            <MainMenu toggleSubMenu={toggleSubMenu} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
