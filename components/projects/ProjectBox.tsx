"use client";

import { IProject } from "@/utils/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface ProjectBoxProps {
  project: IProject;
  key: number;
}

const ProjectBox = ({ project, key }: ProjectBoxProps) => {
  const { images, title, projectPeriod, headCount, techStacks, link } = project;
  const mainImage = images[0];
  const router = useRouter();

  const clickHandler = (linkType: string) => {
    if (linkType === "github") {
      window.open(link.gitHub, "_blank");
    } else if (linkType === "website") {
      window.open(link.website, "_blank");
    } else if (linkType === "readMore") {
      router.push(`/projects/${title}`);
    }
  };
  return (
    <article
      key={key}
      className="p-6 rounded-2xl bg-white md:flex md:space-x-4"
    >
      <Image
        src={mainImage}
        alt="프로젝트 대표 이미지"
        width={400}
        height={300}
        className="w-1/2 rounded-md"
      />
      <div className="w-1/2">
        <p>{title}</p>
        <p>{projectPeriod}</p>
        <p>{headCount === 1 ? "개인 프로젝트" : headCount}</p>
        {techStacks.map((stack) => (
          <span>{stack}</span>
        ))}
        <button onClick={() => clickHandler("github")}>gitHub</button>
        <button onClick={() => clickHandler("website")}>website</button>
        <div>
          <button onClick={() => clickHandler("readMore")}>자세히보기</button>
        </div>
      </div>
    </article>
  );
};

export default ProjectBox;
