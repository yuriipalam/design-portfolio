"use client";

import Image from "next/image";
import { useClickOutside } from "@react-hooks-library/core";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import classNames from "classnames";
import { X } from "lucide-react";
import {
  getImages,
  setShowImagesSlider,
  getShowImagesSlider
} from "@/app/(portfolio)/_entities/project/model";

function ImagesSlider() {
  const projectImages = getImages();
  const showImagesSlider = getShowImagesSlider();

  useEffect(() => {
    console.log("useEffect", showImagesSlider);
    document.body.classList.toggle("overflow-hidden", showImagesSlider);
  }, [showImagesSlider]);

  const ref = useRef<HTMLDivElement | null>(null);
  useClickOutside(ref, () => {
    setShowImagesSlider(false);
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowImagesSlider(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const animationConfig = {
    initial: { opacity: 0 },
    animate: (show: boolean) => ({
      opacity: show ? 1 : 0
    }),
    exit: { opacity: 0 },
    transition: { duration: 0.2 }
  };

  return (
    <>
      <motion.div
        {...animationConfig}
        animate={animationConfig.animate(showImagesSlider)}
        className={classNames(
          "fixed left-0 top-0 z-10 h-screen w-screen bg-black/75 backdrop-blur-md",
          !showImagesSlider && "pointer-events-none"
        )}
      />
      <AnimatePresence>
        {showImagesSlider && (
          <motion.div
            {...animationConfig}
            animate={animationConfig.animate(showImagesSlider)}
            className={classNames(
              "absolute z-20",
              !showImagesSlider && "pointer-events-none"
            )}
          >
            <X
              className="fixed left-3 top-3 z-20 text-slate-300 transition-colors hover:cursor-pointer hover:text-white 2xl:left-5 2xl:top-5"
              onClick={() => setShowImagesSlider(false)}
            />
            <div className="fixed left-0 top-0 z-10 h-screen w-screen overflow-y-auto">
              <div className="flex flex-col items-center px-12">
                <div
                  className="mt-8 flex max-w-[1280px] flex-col md:mt-12"
                  ref={ref}
                >
                  {projectImages.map((src, index) => {
                   console.log(src);
                    return <Image
                      key={index}
                      src={src}
                      width={1280}
                      height={720}
                      alt={"Preview " + index + 1}
                      className="mb-8 max-h-[720px] rounded-3xl md:mb-12"
                    />
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ImagesSlider;
