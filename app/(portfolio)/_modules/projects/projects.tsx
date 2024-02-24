"use client";

import React, { useEffect, useState } from "react";
import { ProjectCard } from "../../_components/project-card";
import { Typography } from "@/app/(portfolio)/_ui/typography";
import { createClient } from "next-sanity";
import { structureTool } from 'sanity/structure'

function Projects() {
  const client = createClient({
    projectId: "fz5gfpod",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: false,
  });

  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const projects = async () => {
      return await client.fetch(
        `*[_type == "project"]{..., "previewImage": previewImage.asset->url}`
      );
    };

    projects().then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Typography
        variant="h3"
        className="mb-12 text-center font-light uppercase tracking-wider"
      >
        Projects
      </Typography>
      <div
        id="projects"
        className="grid max-w-fit grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        {projects &&
          projects.map((project) => {
            console.log(project);
            return (
              <ProjectCard
                key={project._id}
                title={project.title}
                description={project.description}
                previewImage={project.previewImage}
                previewUrl={project.previewUrl}
                sourceUrl={project.sourceUrl}
              />
            );
          })}
        {/*<ProjectCard*/}
        {/*  title="Food Delivery Service"*/}
        {/*  description="Complete UI/UX design created on Figma. The project was created as a part of the university course."*/}
        {/*  previewImage="/project-placeholder.png"*/}
        {/*  previewUrl="#"*/}
        {/*  sourceUrl="#"*/}
        {/*/>*/}
      </div>
    </div>
  );
}

export default Projects;
