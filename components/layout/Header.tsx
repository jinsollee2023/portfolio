"use client";

import "./styles.css";
import React, { useState } from "react";

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  return (
    <>
      <div className="container max-w-full mx-auto px-[10%] py-6">
        <nav className="flex items-center justify-between">
          <div>J I N S O L</div>
          <div className="hidden h-8 md:flex md:space-x-8">
            <div className="group">
              <a href="#">Home</a>
              <div className="mx-2 group-hover:border-b group-hover:border-white"></div>
            </div>
            <div className="group">
              <a href="#">About</a>
              <div className="mx-2 group-hover:border-b group-hover:border-white"></div>
            </div>
            <div className="group">
              <a href="#">Projects</a>
              <div className="mx-2 group-hover:border-b group-hover:border-white"></div>
            </div>
            <div className="group">
              <a href="#">Contact</a>
              <div className="mx-2 group-hover:border-b group-hover:border-white"></div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              id="menu-btn"
              type="button"
              className="z-40 block hamburger md:hidden focus:outline-none"
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            >
              <span
                className={`${isHamburgerOpen ? "open" : ""} hamburger-top`}
              ></span>
              <span
                className={`${isHamburgerOpen ? "open" : ""} hamburger-middle`}
              ></span>
              <span
                className={`${isHamburgerOpen ? "open" : ""} hamburger-bottom`}
              ></span>
            </button>
          </div>
        </nav>
      </div>
      <div
        id="menu"
        className={`${
          isHamburgerOpen ? "" : "hidden"
        } absolute w-full py-6 flex flex-col space-y-6 text-lg bg-white text-black uppercase `}
      >
        <div className="text-center	cursor-pointer hover:text-pink-400">
          Home
        </div>
        <div className="text-center cursor-pointer hover:text-pink-400">
          About
        </div>
        <div className="text-center cursor-pointer hover:text-pink-400">
          Projects
        </div>
        <div className="text-center cursor-pointer hover:text-pink-400">
          Contact
        </div>
      </div>
    </>
  );
};

export default Header;
