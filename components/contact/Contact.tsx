"use client";

import React from "react";
import EmailForm from "./EmailForm";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  const clickHandler = (linkType: string) => {
    if (linkType === "github") {
      window.open("https://github.com/jinsollee2023", "_blank");
    } else if (linkType === "instagram") {
      window.open("https://www.instagram.com/1eejinsol/", "_blank");
    }
  };
  return (
    <section id="contact" className="mx-auto px-[5%] md:px-[15%] py-20">
      <h2 className="text-center mb-24 text-3xl font-semibold">Contact</h2>
      <div className="md:flex">
        <EmailForm />
        <span className="w-1 h-30 border-l mx-6 hidden md:inline-block"></span>
        <span className="w-full h-1 border-b my-6 inline-block md:hidden"></span>
        <div className="p-6 space-y-3 md:w-[30%]">
          <div className="text-center md:text-left">
            <label className="font-normal">Email</label>
            <p>jins2ol@naver.com</p>
          </div>

          <div className="text-center md:text-left">
            <label className="font-normal">Address</label>
            <p>Donjack-gu, Seoul</p>
          </div>

          <div className="text-center md:text-left">
            <label className="font-normal">Social</label>
            <div className="space-x-1 flex items-center justify-center md:justify-start">
              <button onClick={() => clickHandler("github")}>
                <FaGithub size={18} />
              </button>
              <button onClick={() => clickHandler("instagram")}>
                <AiFillInstagram size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
