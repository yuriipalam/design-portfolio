"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useHover } from "@react-hooks-library/core";
import classNames from "classnames";
import { Code2, EyeIcon, GlobeIcon } from "lucide-react";
import { PreviewAction } from "@/app/_components/project-card/preview-action";
import { motion } from "framer-motion";

interface PreviewImageProps {
  src: string;
  alt: string;
  previewUrl?: string;
  sourceUrl?: string;
}

export function PreviewImage(props: PreviewImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isHovered = useHover(ref);

  return (
    <div className="relative" ref={ref}>
      <motion.div
        className={classNames(
          "absolute flex h-full w-full items-center justify-center rounded-3xl bg-black/50 backdrop-blur-sm"
        )}
        animate={{
          opacity: isHovered ? 1 : 0,
          transition: { duration: 0.25 }
        }}
      >
        <div className={classNames("z-10 flex gap-4")}>
          {props.previewUrl && (
            <PreviewAction isVisible={isHovered} onClick={() => {}}>
              <GlobeIcon strokeWidth={1} className="text-slate-200" />
            </PreviewAction>
          )}
          <PreviewAction isVisible={isHovered} onClick={() => {}}>
            <EyeIcon strokeWidth={1} className="text-slate-200" />
          </PreviewAction>
          {props.sourceUrl && (
            <PreviewAction isVisible={isHovered} onClick={() => {}}>
              <Code2 strokeWidth={1} className="text-slate-200" />
            </PreviewAction>
          )}
        </div>
      </motion.div>
      <Image
        src={props.src}
        width={300}
        height={300}
        alt={props.alt}
        className="rounded-3xl"
      />
    </div>
  );
}
