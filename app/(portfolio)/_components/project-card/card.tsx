import { Typography } from "@/app/(portfolio)/_ui/typography";
import { PreviewImage } from "./preview-image";

interface ProjectCardProps {
  projectId: string;
  title: string;
  previewImage: string;
  description: string;
  previewUrl?: string;
  sourceUrl?: string;
}

function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="flex max-w-[300px] flex-col gap-2">
      <PreviewImage
        projectId={props.projectId}
        src={props.previewImage}
        alt={props.title}
        previewUrl={props.previewUrl}
        sourceUrl={props.sourceUrl}
      />
      <div className="flex max-w-[90%] flex-col pl-1">
        <Typography className="font-medium">{props.title}</Typography>
        <Typography className="text-sm">{props.description}</Typography>
      </div>
    </div>
  );
}

export { ProjectCard };
