"use client";

import { IProject } from "@/utils/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

interface ProjectBoxProps {
  project: IProject;
}

const ProjectBox = ({ project }: ProjectBoxProps) => {
  const { id, images, title, projectPeriod, headCount, techStacks, link } =
    project;
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
          className="rounded-md w-full"
        />
      </div>
      <div className="flex flex-col md:w-1/2 ">
        <p className="text-center text-3xl font-500 md:text-start">{title}</p>
        <p className="text-center md:text-start">
          {projectPeriod} ({headCount})
        </p>
        <div className="space-x-2 leading-8 text-center md:text-start">
          {techStacks.map((stack, idx) => (
            <span
              className="mr-1 p-1 rounded-md bg-gray-300 text-xs font-semibold"
              key={idx}
            >
              {stack}
            </span>
          ))}
        </div>
        <div></div>
        <div className="mt-auto space-x-2 flex justify-center md:justify-start">
          <button
            className="px-12 py-2 border rounded-3xl"
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
// className="mr-1 p-1 rounded-md bg-gray-300"
