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
  images: [],
  setImages: (images) => set({ images: images })
}));

const getShowImagesSlider = () =>
  useImagesSliderStore((state) => state.showImagesSlider);
const setShowImagesSlider = (show: boolean) => {
  useImagesSliderStore.setState({ showImagesSlider: show });
};
const getImages = () => useImagesSliderStore((state) => state.images);
const setImages = (images: string[]) =>
  useImagesSliderStore.setState({ images: images });

export { getShowImagesSlider, setShowImagesSlider, getImages, setImages };
export type { ProjectType } from "./types";
