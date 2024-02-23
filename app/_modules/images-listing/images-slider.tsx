"use client";

import Image from "next/image";
import { useClickOutside } from "@react-hooks-library/core";
import { useImagesSliderStore } from "@/stores/store";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import classNames from "classnames";
import { X } from "lucide-react";

function ImagesSlider() {
  const showImagesSlider = useImagesSliderStore(
    (state) => state.showImagesSlider
  );
  const images = useImagesSliderStore((state) => state.images);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", showImagesSlider);
  }, [showImagesSlider]);

  const ref = useRef<HTMLDivElement | null>(null);
  useClickOutside(ref, () => {
    useImagesSliderStore.setState({ showImagesSlider: false });
  });

  return (
    <AnimatePresence>
      {showImagesSlider && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: showImagesSlider ? 1 : 0
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={classNames(
            "absolute",
            !showImagesSlider && "pointer-events-none"
          )}
        >
          <X
            className="fixed left-3 top-3 z-20 text-slate-300 transition-colors hover:cursor-pointer hover:text-white 2xl:left-5 2xl:top-5"
            onClick={() =>
              useImagesSliderStore.setState({ showImagesSlider: false })
            }
          />
          <div className="fixed left-0 top-0 z-10 h-screen w-screen overflow-y-auto bg-black/75 backdrop-blur-md">
            <div className="flex flex-col items-center justify-center px-12">
              <div
                className="mt-8 flex max-w-[1280px] flex-col md:mt-12"
                ref={ref}
              >
                {images.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    width={1280}
                    height={720}
                    alt={"Preview " + index + 1}
                    className="mb-8 max-h-[720px] rounded-3xl md:mb-12"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ImagesSlider;
