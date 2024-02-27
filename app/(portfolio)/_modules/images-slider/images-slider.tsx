"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { X } from "lucide-react";
import { useImagesSliderStore } from "@/app/(portfolio)/_entities/project/model";
import { Skeleton } from "@/components/ui/skeleton";
import { useClickOutsideForMany } from "@/app/(portfolio)/_hooks";
import { Loader } from "@/app/(portfolio)/_ui/loader";

function ImagesSlider() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        useImagesSliderStore.setState({ showImagesSlider: false });
        useImagesSliderStore.setState({ images: [] });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const projectImages = useImagesSliderStore((state) => state.images);
  const showImagesSlider = useImagesSliderStore(
    (state) => state.showImagesSlider
  );
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const loadState = projectImages.reduce<Record<number, boolean>>(
      (acc, _, index) => {
        acc[index] = false;
        return acc;
      },
      {}
    );
    setImagesLoaded(loadState);
  }, [projectImages]);

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => ({ ...prev, [index]: true }));
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", showImagesSlider);
  }, [showImagesSlider]);

  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    imageRefs.current = projectImages.map(
      (_, i) => imageRefs.current[i] || null
    );
  }, [projectImages]);

  useClickOutsideForMany(imageRefs, () => {
    useImagesSliderStore.setState({ images: [] });
    useImagesSliderStore.setState({ showImagesSlider: false });
  });

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
              onClick={() => {
                useImagesSliderStore.setState({ showImagesSlider: false });
                useImagesSliderStore.setState({ images: [] });
              }}
            />
            <div className="fixed left-0 top-0 z-10 h-screen w-screen overflow-y-auto">
              <div className="flex flex-col items-center px-12">
                <div className="my-8 flex max-w-[1280px] flex-col gap-8 md:my-12 md:gap-12">
                  {projectImages.length === 0 && showImagesSlider && (
                    <div className="fixed left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                      <Loader textColor="light" />
                    </div>
                  )}
                  {projectImages.map((src, index) => {
                    return (
                      <div key={index} className="relative">
                        <div
                          className={classNames(
                            "absolute h-full w-full transition-opacity duration-200",
                            imagesLoaded[index] ? "opacity-0" : "opacity-100"
                          )}
                        >
                          <Skeleton
                            className={classNames(
                              "h-full w-full rounded-3xl bg-neutral-900/50"
                            )}
                          />
                        </div>
                        <Image
                          ref={(el) => (imageRefs.current[index] = el)}
                          src={src}
                          width={1280}
                          height={720}
                          alt={"Preview " + index + 1}
                          className={classNames(
                            "aspect-video rounded-3xl object-cover object-center transition-opacity duration-200",
                            imagesLoaded[index] ? "opacity-100" : "opacity-0"
                          )}
                          onLoad={() => handleImageLoad(index)}
                        />
                      </div>
                    );
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

export { ImagesSlider };
