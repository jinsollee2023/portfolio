"use client";

import { usePathname, useRouter } from "next/navigation";
import "./styles.css";
import React, { useState } from "react";
import { scrollToSection } from "@/utils/commonFunc";

const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuClickHandler = (sectionId: string) => {
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
    }

    if (isHamburgerOpen) {
      setIsHamburgerOpen(false);
    }

    scrollToSection(sectionId);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full mx-auto px-[10%] py-6 bg-white shadow-sm">
        <nav className="flex items-center justify-between">
          <div
            onClick={() => menuClickHandler("intro")}
            className="cursor-pointer"
          >
            J I N S O L
          </div>
          <div className="hidden h-8 md:flex md:space-x-8">
            <div className="group">
              <button onClick={() => menuClickHandler("intro")}>Home</button>
              <div className="mx-2 group-hover:border-b group-hover:border-white"></div>
            </div>
            <div className="group">
              <button onClick={() => menuClickHandler("about")}>About</button>
              <div className="mx-2 group-hover:border-b group-hover:border-white"></div>
            </div>
            <div className="group">
              <button onClick={() => menuClickHandler("projects")}>
                Projects
              </button>
              <div className="mx-2 group-hover:border-b group-hover:border-white"></div>
            </div>
            <div className="group">
              <button onClick={() => menuClickHandler("contact")}>
                Contact
              </button>
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
        } fixed top-16 w-full py-6 flex flex-col space-y-6 text-lg bg-white text-black uppercase md:hidden`}
      >
        <div
          onClick={() => menuClickHandler("intro")}
          className="text-center	cursor-pointer hover:text-pink-400"
        >
          Home
        </div>
        <div
          onClick={() => menuClickHandler("about")}
          className="text-center cursor-pointer hover:text-pink-400"
        >
          About
        </div>
        <div
          onClick={() => menuClickHandler("projects")}
          className="text-center cursor-pointer hover:text-pink-400"
        >
          Projects
        </div>
        <div
          onClick={() => menuClickHandler("contact")}
          className="text-center cursor-pointer hover:text-pink-400"
        >
          Contact
        </div>
      </div>
    </>
  );
};

export default Header;
