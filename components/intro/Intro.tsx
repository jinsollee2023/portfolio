"use client";

import React from "react";

const Intro = () => {
  const handleClick = (linkType: string) => {
    if (linkType === "resume") {
      window.open(
        "https://clever-acorn-45d.notion.site/c0876e3481be4ab5b099ac0780593b4f?pvs=4",
        "_blank"
      );
    } else if (linkType === "github") {
      window.open("https://github.com/jinsollee2023", "_blank");
    }
  };

  return (
    <main id="intro" className="h-[75vh] mt-20 bg-blue-100 flex items-center">
      <div className="mx-auto py-12">
        <h1 className="text-8xl font-black text-center">JINSOL</h1>
        <p className="mt-6 text-xl text-center">
          프론트엔드 개발자, 이진솔입니다.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <button
            className="font-extrabold"
            onClick={() => handleClick("resume")}
          >
            Resume
          </button>
          <button
            className="font-extrabold"
            onClick={() => handleClick("github")}
          >
            gitHub
          </button>
        </div>
      </div>
    </main>
  );
};

export default Intro;
