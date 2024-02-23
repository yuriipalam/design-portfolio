"use client";

import { create } from "zustand";

interface ImagesSliderState {
  showImagesSlider: boolean;
  setShowImagesSlider: (show: boolean) => void;
  images: string[];
  setImages: (images: string[]) => void;
}

const useImagesSliderStore = create<ImagesSliderState>()((set) => ({
  showImagesSlider: false,
  setShowImagesSlider: (show) => set({ showImagesSlider: show }),
  images: [
    "/project-placeholder.png",
    "/project-placeholder.png",
    "/project-placeholder.png"
  ],
  setImages: (images) => set({ images: images })
}));

export { useImagesSliderStore };
