"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { projects } from "../../data/projectsData";
import "./styles.css";
import ImageBox from "./ImageBox";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { notoSansKr } from "@/app/font";

const ProjectDetail = () => {
  const pathname = usePathname();
  const prefix = "/projects/";
  const projectSlug = pathname.substring(prefix.length);
  const project = projects.find((project) => project.id === projectSlug);
  const {
    title,
    summary,
    images,
    mainFunction,
    myFunctions,
    techDecision,
    techStacks,
    link,
  } = project!;

  const clickHandler = (linkType: string) => {
    if (linkType === "github") {
      window.open(link.gitHub, "_blank");
    } else if (linkType === "website") {
      window.open(link.website, "_blank");
    }
  };
  return (
    <>
      <div className="read-more-box mt-[73px] bg-blue-50 md:mt-20">
        <p className="read-more-title">SUMMARY</p>
        <div className="lg:flex lg:space-x-6">
          <ImageBox images={images} />
          <div className="space-y-3 lg:w-[60%]">
            <div className="flex items-center space-x-3">
              <p className={`${notoSansKr.className} text-2xl`}>{title}</p>
              <div className="space-x-2 flex items-center">
                <button onClick={() => clickHandler("website")}>
                  <IoIosLink />
                </button>
                <button onClick={() => clickHandler("github")}>
                  <FaGithub />
                </button>
              </div>
            </div>
            <p className="pb-2">{summary}</p>
            <div className="space-y-2">
              <p className={`${notoSansKr.className}`}>주요 기능</p>
              <div className="flex flex-wrap">
                {mainFunction.map((func, idx) => {
                  return (
                    <span key={idx} className="stack-text">
                      {func}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="read-more-box">
        <p className="read-more-title">MY FUNCTION</p>
        {myFunctions.map((func, index) => {
          return (
            <div key={index} className="space-y-3">
              <ul className="text-xl font-bold">{func.title}</ul>
              {func.desc.map((item, subIndex) => (
                <li key={subIndex} className="font-[400]">
                  {item}
                </li>
              ))}
            </div>
          );
        })}
      </div>
      <div className="read-more-box">
        <p className="read-more-title">TECH DECISION</p>
        {techDecision.map((tech, index) => {
          return (
            <div key={index} className="space-y-3">
              <ul className="text-xl font-bold">{tech.title}</ul>
              <li className="font-[400]">{tech.desc}</li>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectDetail;
