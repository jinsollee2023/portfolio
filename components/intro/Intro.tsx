"use client";

import React, { useEffect, useRef } from "react";
import "./styles.css";

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

  useEffect(() => {
    type();
  }, []);

  const typedTextRef = useRef<HTMLHeadingElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  const textArray = [
    "프론트엔드 개발자,",
    "UI/UX 개선에 집중하는,",
    "클린코드를 지향하는,",
    "커뮤니케이션이 원활한,",
  ];
  const typingDelay = 200;
  const erasingDelay = 100;
  const newTextDelay = 2000;

  let textArrayIndex = 0;
  let charIndex = 0;

  const type = () => {
    if (
      typedTextRef &&
      typedTextRef.current &&
      charIndex < textArray[textArrayIndex].length
    ) {
      if (!cursorRef?.current?.classList.contains("typing"))
        cursorRef?.current?.classList.add("typing");
      typedTextRef.current.innerHTML += textArray[textArrayIndex][charIndex];
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorRef?.current?.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  };

  const erase = () => {
    if (cursorRef && charIndex > 0) {
      if (!cursorRef?.current?.classList.contains("typing"))
        cursorRef?.current?.classList.add("typing");

      typedTextRef!.current!.innerHTML = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursorRef?.current?.classList.remove("typing");
      textArrayIndex = (textArrayIndex + 0.5) % textArray.length;
      setTimeout(type, typingDelay + 1100);
    }
  };

  return (
    <main
      id="intro"
      className="h-[75vh] mt-[72px] mx-auto px-[10%] py-20 bg-blue-100 md:mt-20"
    >
      <div className="py-10 space-y-4 flex flex-col items-center">
        <h1 className="main-text">안녕하세요!</h1>
        <div className="flex">
          <h1 className="typed-text main-text" ref={typedTextRef}></h1>
          <span className="cursor" ref={cursorRef}></span>
        </div>
        <h1 className="main-text">이진솔입니다.</h1>
      </div>
      <div>
        <div className="flex justify-center space-x-4">
          <button
            className="px-4 py-2 border rounded-2xl border-white	bg-white font-normal"
            onClick={() => handleClick("github")}
          >
            연락하기
          </button>
          <button
            className="px-4 py-2 border rounded-2xl border-white	bg-white font-normal"
            onClick={() => handleClick("resume")}
          >
            이력서 바로가기
          </button>
        </div>
      </div>
    </main>
  );
};

export default Intro;
