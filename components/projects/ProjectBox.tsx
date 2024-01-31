"use client";

import { IProject } from "@/utils/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import "./styles.css";
import { notoSansKr } from "@/app/font";

interface ProjectBoxProps {
  project: IProject;
}

const ProjectBox = ({ project }: ProjectBoxProps) => {
  const {
    id,
    images,
    title,
    projectPeriod,
    headCount,
    techStacks,
    link,
    summary,
  } = project;
  const mainImage = images[0];
  const router = useRouter();

  const clickHandler = (linkType: string) => {
    if (linkType === "github") {
      window.open(link.gitHub, "_blank");
    } else if (linkType === "website") {
      window.open(link.website, "_blank");
    } else if (linkType === "readMore") {
      router.push(`/projects/${id}`);
    }
  };
  return (
    <article key={id} className="p-6 rounded-2xl bg-white md:flex md:space-x-4">
      <div className="flex justify-center md:w-1/2 md:justify-start">
        <Image
          src={mainImage}
          alt="프로젝트 대표 이미지"
          width={400}
          height={300}
          className="rounded-md w-full mb-4 md:mb-0"
        />
      </div>
      <div className="space-y-4 md:w-1/2">
        <div>
          <p
            className={`${notoSansKr.className} text-center font-normal text-xl sm:text-2xl  md:text-start`}
          >
            {title}
          </p>
          <p className="text-sm text-center sm:text-md md:text-start">
            {projectPeriod} ({headCount})
          </p>
        </div>
        <div className="my-2 flex flex-wrap justify-center md:justify-start">
          {techStacks.map((stack, idx) => (
            <span className="stack-text" key={idx}>
              {stack}
            </span>
          ))}
        </div>
        <div className="hidden sm:block">
          <p>{summary}</p>
        </div>

        <div className="mt-auto space-x-2 flex justify-center md:justify-start">
          <button
            className="px-4 py-2 sm:px-12 sm:py-2 border rounded-3xl"
            onClick={() => clickHandler("readMore")}
          >
            자세히보기
          </button>
          <button
            className="py-2 px-3 border rounded-3xl"
            onClick={() => clickHandler("github")}
          >
            <FaGithub />
          </button>
          <button
            className="py-2 px-3 border rounded-3xl"
            onClick={() => clickHandler("website")}
          >
            <IoIosLink />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectBox;
