"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { projects } from "../../data/projectsData";
import "./styles.css";
import ImageBox from "./ImageBox";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { notoSansKr } from "@/app/layout";

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
    description,
    techStacks,
  } = project!;
  //  py-12
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
                <button>
                  <IoIosLink />
                </button>
                <button>
                  <FaGithub />
                </button>
              </div>
            </div>
            <p>{summary}</p>
            <div className="space-y-1">
              <p className={`${notoSansKr.className} `}>주요 기능</p>
              <p>{mainFunction}</p>
            </div>
            <div className="space-y-1">
              <p className={`${notoSansKr.className} `}>기술 스택</p>
              <div className="flex flex-wrap">
                {techStacks.map((stack) => {
                  return <span className="stack-text">{stack}</span>;
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
            <div key={index}>
              <p className="text-xl font-normal">{func.title}</p>
              {func.desc.map((item, subIndex) => (
                <p key={subIndex}>{item}</p>
              ))}
            </div>
          );
        })}
      </div>
      <div className="read-more-box">
        <p className="read-more-title">DESCRIPTION</p>
        <p>{description}</p>
      </div>
    </>
  );
};

export default ProjectDetail;
