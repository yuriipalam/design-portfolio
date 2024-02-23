import { ProjectCard } from "../../_components/project-card";
import { Typography } from "@/app/_ui/typography";

function Projects() {
  return (
    <>
      <Typography
        variant="h3"
        className="text-center font-light uppercase tracking-wider"
      >
        Projects
      </Typography>
      <ProjectCard
        title="Food Delivery Service"
        description="Complete UI/UX design created on Figma. The project was created as a part of the university course."
        previewImage="/project-placeholder.png"
        previewUrl="#"
        sourceUrl="#"
      />
    </>
  );
}

export default Projects;
