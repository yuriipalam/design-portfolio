import { Typography } from "@/app/(portfolio)/_ui/typography";
import { getProjects } from "@/app/(portfolio)/_entities/project/api";
import { ProjectCard } from "@/app/(portfolio)/_components";

async function Projects() {
  const projects = await getProjects();

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
        className="grid max-w-fit grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
      >
        {projects &&
          projects.map((project) => {
            return (
              <ProjectCard
                projectId={project._id}
                key={project._id}
                title={project.title}
                description={project.description}
                previewImage={project.previewImage}
                previewUrl={project.previewUrl}
                sourceUrl={project.sourceUrl}
              />
            );
          })}
      </div>
    </div>
  );
}

export { Projects };
