"use client";

import Image from "next/image";
import { useClickOutside } from "@react-hooks-library/core";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { X } from "lucide-react";
import { useImagesSliderStore } from "@/app/(portfolio)/_entities/project/model";
import { Loader } from "@/app/(portfolio)/_ui/loader";

function ImagesSlider() {
  const projectImages = useImagesSliderStore((state) => state.images);
  const showImagesSlider = useImagesSliderStore(
    (state) => state.showImagesSlider
  );

  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [imagesReady, setImagesReady] = useState(false);

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
    if (
      showImagesSlider &&
      Object.values(imagesLoaded).length > 0 &&
      Object.values(imagesLoaded).every((value) => value)
    ) {
      setImagesReady(true);
    } else if (!showImagesSlider) {
      setImagesReady(false);
    }
  }, [imagesLoaded, showImagesSlider]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", showImagesSlider);
  }, [showImagesSlider]);

  const ref = useRef<HTMLDivElement | null>(null);
  useClickOutside(ref, () => {
    useImagesSliderStore.setState({ showImagesSlider: false });
    useImagesSliderStore.setState({ images: [] });
  });

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
      {showImagesSlider && !imagesReady && (
        <div className="fixed left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2">
          <Loader textColor="light" />
        </div>
      )}
      <AnimatePresence>
        {showImagesSlider && (
          <motion.div
            {...animationConfig}
            animate={animationConfig.animate(imagesReady)}
            className={classNames(
              "absolute z-20",
              !showImagesSlider && "pointer-events-none"
            )}
          >
            <X
              className="fixed left-3 top-3 z-20 text-slate-300 transition-colors hover:cursor-pointer hover:text-white 2xl:left-5 2xl:top-5"
              onClick={() =>
                useImagesSliderStore.setState({ showImagesSlider: false })
              }
            />
            <div className="fixed left-0 top-0 z-10 h-screen w-screen overflow-y-auto">
              <div className="flex flex-col items-center px-12">
                <div
                  className="mt-8 flex max-w-[1280px] flex-col md:mt-12"
                  ref={ref}
                >
                  {projectImages.map((src, index) => {
                    return (
                      <Image
                        key={index}
                        src={src}
                        width={1280}
                        height={720}
                        alt={"Preview " + index + 1}
                        className={classNames(
                          "mb-8 aspect-video rounded-3xl object-cover object-center transition-opacity duration-200 md:mb-12",
                          imagesLoaded[index] ? "opacity-100" : "opacity-0"
                        )}
                        onLoad={() => handleImageLoad(index)}
                      />
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
