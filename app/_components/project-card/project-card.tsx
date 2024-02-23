import Image from "next/image";
import { Typography } from "@/app/_ui/typography";
import { PreviewImage } from "./preview-image";

interface ProjectCardProps {
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

export default ProjectCard;
