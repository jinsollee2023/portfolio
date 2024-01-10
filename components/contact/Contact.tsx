import React from "react";
import EmailForm from "./EmailForm";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="mx-auto px-[10%] py-24">
      <h2 className="text-center mb-24 text-3xl font-black">Contact</h2>
      <div className="md:flex">
        <EmailForm />
        <span className="w-1 h-30 border-l mx-6 hidden md:inline-block"></span>
        <div className="w-[30%] p-6 ">
          <label>Email</label>
          <p>jins2ol@naver.com</p>

          <label>Address</label>
          <p>Donjack-gu, Seoul</p>

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
    </section>
  );
};

export default Contact;
