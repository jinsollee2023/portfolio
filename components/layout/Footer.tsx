"use client";

import { scrollToSection } from "@/utils/commonFunc";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="max-w-full text-center py-6 bg-blue-100 ">
      <div className="flex justify-center mb-4">
        <IoIosArrowUp
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection("intro")}
        />
      </div>
      <div className="md:flex md:justify-center">
        <p className="mr-2">Copyright 2024. Jinsol Lee.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
