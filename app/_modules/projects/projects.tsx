import React from "react";
import { ProjectCard } from "../../_components/project-card";
import { Typography } from "@/app/_ui/typography";

function Projects() {
  return (
    <div className="flex flex-col items-center">
      <Typography
        variant="h3"
        className="mb-12 text-center font-light uppercase tracking-wider"
      >
        Projects
      </Typography>
      <div className="grid max-w-fit grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <ProjectCard
          title="Food Delivery Service"
          description="Complete UI/UX design created on Figma. The project was created as a part of the university course."
          previewImage="/project-placeholder.png"
          previewUrl="#"
          sourceUrl="#"
        />
      </div>
    </div>
  );
}

export default Projects;
