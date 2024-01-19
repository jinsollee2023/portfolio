"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { projects } from "../../data/projectsData";
import "./styles.css";
import ImageBox from "./ImageBox";

const ProjectDetail = () => {
  const pathname = usePathname();
  const prefix = "/projects/";
  const projectSlug = pathname.substring(prefix.length);
  const project = projects.find((project) => project.id === projectSlug);
  const { title, summary, images, mainFunction, myFunctions, description } =
    project!;
  //  py-12
  return (
    <>
      <div className="read-more-box mt-20 bg-blue-50">
        <p className="read-more-title">SUMMARY</p>
        <div className="lg:flex lg:space-x-6">
          <ImageBox images={images} />
          <div className="lg:w-[60%]">{summary}</div>
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
