import React from "react";
import Image from "next/image";
import profile from "../../public/images/profile.jpg";
import "./styles.css";

const About = () => {
  return (
    <section className="px-[10%] py-24">
      <h2 className="text-center mb-24 text-3xl font-black">About</h2>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex justify-center md:w-[30%]">
          <Image src={profile} alt="프로필 이미지" width={300} height={400} />
        </div>
        <div className="m-4 space-y-8 md:w-[70%] ">
          <div>
            <h3 className="profile-title">Lorem, ipsum dolor.</h3>
            <p className="profile-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              adipisci perspiciatis saepe accusamus? Doloremque molestias velit
              vel sapiente, nostrum beatae!
            </p>
          </div>
          <div>
            <h3 className="profile-title">Lorem, ipsum dolor.</h3>
            <p className="profile-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              adipisci perspiciatis saepe accusamus? Doloremque molestias velit
              vel sapiente, nostrum beatae!
            </p>
          </div>
          <div>
            <h3 className="profile-title">Lorem, ipsum dolor.</h3>
            <p className="profile-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              adipisci perspiciatis saepe accusamus? Doloremque molestias velit
              vel sapiente, nostrum beatae!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
