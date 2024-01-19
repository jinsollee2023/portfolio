import React from "react";
import EmailForm from "./EmailForm";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact" className="mx-auto px-[10%] py-20">
      <h2 className="text-center mb-24 text-3xl font-semibold">Contact</h2>
      <div className="md:flex">
        <EmailForm />
        <span className="w-1 h-30 border-l mx-6 hidden md:inline-block"></span>
        <span className="w-full h-1 border-b my-6 inline-block md:hidden"></span>
        <div className="p-6 md:w-[30%]">
          <div className="text-center md:text-left">
            <label>Email</label>
            <p>jins2ol@naver.com</p>
          </div>

          <div className="text-center md:text-left">
            <label>Address</label>
            <p>Donjack-gu, Seoul</p>
          </div>

          <div className="text-center md:text-left">
            <label>Social</label>
            <div>
              <button>
                <FaGithub />
              </button>
              <button>
                <AiFillInstagram />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
