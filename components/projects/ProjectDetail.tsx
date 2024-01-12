"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { projects } from "../../data/projectsData";
import Image from "next/image";
import "./styles.css";

const ProjectDetail = () => {
  const pathname = usePathname();
  const prefix = "/projects/";
  const projectSlug = pathname.substring(prefix.length);
  const project = projects.find((project) => project.id === projectSlug);
  const { summary, images, mainFunction, myFunctions, description } = project!;

  return (
    <div className="mt-20 px-[10%] py-12">
      {/* <div className="w-full p-6 rounded-2xl bg-blue-100"></div> */}
      <div className="read-more-box">
        <p className="read-more-title">SUMMARY</p>
        <p>{summary}</p>
      </div>

      <div className="read-more-box">
        <p className="read-more-title">주요 기능</p>
        <div className="flex">
          {images.map((image) => {
            return (
              <Image
                src={image}
                alt="프로젝트 이미지"
                width={400}
                height={300}
              />
            );
          })}
          <p>{mainFunction}</p>
        </div>
      </div>

      <div className="read-more-box">
        <p className="read-more-title">담당 기능</p>
        {myFunctions.map((func) => {
          return (
            <div>
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
    </div>
  );
};

export default ProjectDetail;
