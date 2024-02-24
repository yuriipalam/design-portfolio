"use client";

import Image from "next/image";
import { useRef } from "react";
import { useHover } from "@react-hooks-library/core";
import classNames from "classnames";
import { Code2, EyeIcon, GlobeIcon } from "lucide-react";
import { PreviewAction } from "@/app/_components/project-card/preview-action";
import { motion } from "framer-motion";
import Link from "next/link";
import { useImagesSliderStore } from "@/stores/store";
import { useRouter } from "next/navigation";

interface PreviewImageProps {
  src: string;
  alt: string;
  previewUrl?: string;
  sourceUrl?: string;
}

export function PreviewImage(props: PreviewImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isHovered = useHover(ref);

  const setShowImagesSlider = useImagesSliderStore(
    (state) => state.setShowImagesSlider
  );

  return (
    <div className="relative" ref={ref}>
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
            <Link href={props.previewUrl} target="_blank">
              <PreviewAction isVisible={isHovered}>
                <GlobeIcon strokeWidth={1} className="text-slate-200" />
              </PreviewAction>
            </Link>
          )}
          <PreviewAction
            isVisible={isHovered}
            onClick={() => {
              setShowImagesSlider(true);
            }}
          >
            <EyeIcon strokeWidth={1} className="text-slate-200" />
          </PreviewAction>
          {props.sourceUrl && (
            <Link href={props.sourceUrl} target="_blank">
              <PreviewAction isVisible={isHovered}>
                <Code2 strokeWidth={1} className="text-slate-200" />
              </PreviewAction>
            </Link>
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
