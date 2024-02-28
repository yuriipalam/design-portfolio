"use client";

import Image from "next/image";
import { useRef } from "react";
import { useHover } from "@react-hooks-library/core";
import classNames from "classnames";
import { Code2, EyeIcon, Figma, GlobeIcon } from "lucide-react";
import { PreviewAction } from "@/app/(portfolio)/_components/project-card/preview-action";
import { motion } from "framer-motion";
import Link from "next/link";
import { useImagesSliderStore } from "@/app/(portfolio)/_entities/project/model";
import { getProjectImages } from "@/app/(portfolio)/_entities/project/api";

interface PreviewImageProps {
  projectId: string;
  src: string;
  alt: string;
  previewUrl?: string;
  sourceUrl?: string;
  figmaUrl?: string;
}

export function PreviewImage(props: PreviewImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isHovered = useHover(ref);

  const fetchImages = async () =>
    await getProjectImages(props.projectId).then((images) =>
      useImagesSliderStore.setState({ images })
    );

  return (
    <div className="relative [filter:drop-shadow(0px_0px_10px_#00000024)]" ref={ref}>
      <motion.div
        className={classNames(
          "absolute flex h-full w-full items-center justify-center rounded-3xl bg-black/50 backdrop-blur-sm"
        )}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          transition: { duration: 0.2 }
        }}
      >
        <div className={classNames("z-10 flex gap-4")}>
          {props.previewUrl && (
            <Link href={props.previewUrl} target="_blank" aria-label="Open demo website">
              <PreviewAction isVisible={isHovered} arialLabel="Open demo website">
                <GlobeIcon strokeWidth={1} className="text-slate-200" />
              </PreviewAction>
            </Link>
          )}
          <PreviewAction
            isVisible={isHovered}
            onClick={() => {
              fetchImages();
              useImagesSliderStore.setState({ showImagesSlider: true });
            }}
            arialLabel="Open image slider"
          >
            <EyeIcon strokeWidth={1} className="text-slate-200" />
          </PreviewAction>
          {props.sourceUrl && (
            <Link href={props.sourceUrl} target="_blank" aria-label="Open source code">
              <PreviewAction isVisible={isHovered} arialLabel="Open source code">
                <Code2 strokeWidth={1} className="text-slate-200" />
              </PreviewAction>
            </Link>
          )}
          {props.figmaUrl && (
            <Link href={props.figmaUrl} target="_blank" aria-label="Open on Figma">
              <PreviewAction isVisible={isHovered} arialLabel="Open on Figma">
                <Figma strokeWidth={1} className="text-slate-200" />
              </PreviewAction>
            </Link>
          )}
        </div>
      </motion.div>
      <Image
        src={props.src}
        quality={90}
        width={300}
        height={300}
        alt={props.alt}
        className="aspect-square h-full w-full rounded-3xl object-cover object-center"
      />
    </div>
  );
}
