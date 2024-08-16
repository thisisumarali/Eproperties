"use client";
import React from "react";
import Link from "next/link";

const MainMenu = ({ toggleSubMenu }) => {
  return (
    <> 
      <ul>
        <li className="dropdown-on">
          <Link href="/" onClick={toggleSubMenu} scroll={false}>
            Home
          </Link>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
        <li className="dropdown-on">
          <Link href="/pricing" onClick={toggleSubMenu} scroll={false}>
            Pricing
          </Link>
        </li>
        <li className="dropdown-on">
          <Link href="/service-details/1">Services</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
