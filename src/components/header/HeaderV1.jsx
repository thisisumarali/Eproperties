"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/assets/images/logo.png";
import HeaderTopBarV1 from "./HeaderTopBarV1";
import Link from "next/link";
import MainMenu from "./MainMenu";
import HeaderSearchContent from "./HeaderSearchContent";
import HeaderSidebar from "./HeaderSidebar";
import useStickyMenu from "@/src/hooks/useStickyMenu";
import MobileMenu from "./MobileMenu";
import useSubMenuToggle from "@/src/hooks/useSubMenuToggle";
import useSearchBox from "@/src/hooks/useSearchBox";
import useMobileSidebarMenu from "@/src/hooks/useMobileSidebarMenu";
import useSidebarInfo from "@/src/hooks/useSidebarInfo";

const HeaderV1 = () => {
  const isMenuSticky = useStickyMenu();
  const toggleSubMenu = useSubMenuToggle();
  const { isMobileSidebarOpen, openMobileSidebar, closeMobileSidebar } =
    useMobileSidebarMenu();
  const { handleSearchOpen, handleSearchClose } = useSearchBox();
  const { isSidebarOpen, handleSidebarOpen, handleSidebarClose } =
    useSidebarInfo();

  return (
    <>
      <HeaderTopBarV1 />
      <div
        className={`header-area ${isMenuSticky ? "sticky-nav" : ""}`}
        id="sticky-header"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6">
              <div className="header-logo">
                <Link href="/">
                  <Image src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="header-munu">
                <MainMenu />
                <div className="header-social">
                  <ul>
                    <li>
                      <Link
                        className="search-box-btn search-box-outer"
                        href="#"
                        onClick={handleSearchOpen}
                        scroll={false}
                      >
                        <i className="bi bi-search"></i>
                      </Link>
                    </li>
                    <li className="line">
                      <Link
                        className="navSidebar-button"
                        href="#"
                        onClick={handleSidebarOpen}
                        scroll={false}
                      >
                        <i className="bi bi-grid-3x3-gap-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeaderSearchContent handleSearchClose={handleSearchClose} />
      <HeaderSidebar
        isSidebarOpen={isSidebarOpen}
        handleSidebarClose={handleSidebarClose}
      />
      <MobileMenu
        toggleSubMenu={toggleSubMenu}
        isMobileSidebarOpen={isMobileSidebarOpen}
        openMobileSidebar={openMobileSidebar}
        closeMobileSidebar={closeMobileSidebar}
        isMenuSticky={isMenuSticky}
      />
    </>
  );
};

export default HeaderV1;
