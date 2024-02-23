"use client";

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// import type {} from "@redux-devtools/extension"; // required for devtools typing

interface ImagesSliderState {
  showImagesSlider: boolean;
  setShowImagesSlider: (show: boolean) => void;
  images: string[];
  setImages: (images: string[]) => void;
}

const useImagesSliderStore = create<ImagesSliderState>()(
  // devtools(

  (set) => ({
    showImagesSlider: false,
    setShowImagesSlider: (show) => set({ showImagesSlider: show }),
    images: [
      "/project-placeholder.png",
      "/project-placeholder.png",
      "/project-placeholder.png"
    ],
    setImages: (images) => set({ images: images })
  }),
  {
    name: "images-slider-storage"
  }

  // )
);

export { useImagesSliderStore };
