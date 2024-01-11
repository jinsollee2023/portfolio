import React from "react";
import ProjectBox from "./ProjectBox";
import { projects } from "../../data/projectsData";
import { IProject } from "@/utils/types";

const Projects = () => {
  return (
    <section className="py-24 px-[10%] space-y-6 bg-blue-100">
      <h2 className="text-center mb-16 text-3xl font-black">Projects</h2>
      {projects.map((project: IProject, idx: number) => {
        return <ProjectBox project={project} key={idx} />;
      })}
    </section>
  );
};

export default Projects;
