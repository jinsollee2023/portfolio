import React from "react";
import ProjectBox from "./ProjectBox";
import { projects } from "../../data/projectsData";
import { IProject } from "@/utils/types";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-[15%] space-y-6 bg-blue-100">
      <h2 className="text-center mb-16 text-3xl font-semibold">Projects</h2>
      {projects.map((project: IProject) => {
        return <ProjectBox project={project} />;
      })}
    </section>
  );
};

export default Projects;
