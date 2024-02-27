import { RefObject, useEffect, useRef } from "react";
import { useImagesSliderStore } from "@/app/(portfolio)/_entities/project/model";

const useClickOutsideForMany = (
  imageRefs: RefObject<(HTMLDivElement | null)[]>,
  callback: () => void
): void => {
  const handleClickOutside = (event: MouseEvent) => {
    const isOutside = imageRefs.current?.every((refElement) => {
      return refElement && !refElement.contains(event.target as Node);
    });
    if (isOutside) {
      callback();
      useImagesSliderStore.setState({ images: [] });
      useImagesSliderStore.setState({ showImagesSlider: false });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
};

export { useClickOutsideForMany };
