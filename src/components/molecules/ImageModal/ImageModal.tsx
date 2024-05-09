import { Arrow } from "@/components/atoms/arrow";
import { Text } from "@/components/atoms/text";
import _ from "lodash";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import "./ImageModal.css";
interface ImageModalProps {
  imageList: StaticImageData[];
  clickIndex: number;
  onClose: () => void;
}
export const ImageModal = ({ imageList, clickIndex, onClose }: ImageModalProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(clickIndex);
  const [startX, setStartX] = useState<number>(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].pageX);
  };

  const handleSwipe = (endX: number) => {
    const diffX = startX - endX;
    if (diffX > 50) {
      handlePrevNext(-1);
    } else if (diffX < -50) {
      handlePrevNext(1);
    }
  };
  const debouncedSwipe = _.debounce(handleSwipe, 300);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    debouncedSwipe(e.touches[0].pageX);
  };
  const handlePrevNext = (delta: number) => {
    const newIndex = currentIndex + delta;
    if (newIndex >= 0 && newIndex < imageList.length) setCurrentIndex(newIndex);
  };

  return (
    <div
      className="image__modal__wrapper"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="image__modal__top">
        <Text
          color="#fff"
          fontSize="1.0625rem"
          fontWeight="600"
          className="image__modal__currentIndex"
        >
          {currentIndex + 1}/{imageList.length}
        </Text>
        <div className="image__modal__close" onClick={onClose}>
          <Text color="#fff" fontSize="1.0625rem" fontWeight="600">
            X
          </Text>
        </div>
      </div>
      <div className="image__modal__content">
        <div className="image__modal__img__wrapper">
          <Image
            src={imageList[currentIndex]}
            alt="contentImg"
            className="image__modal__image"
          />
          <div className="image__modal__control">
            <Arrow onClick={() => handlePrevNext(-1)} isLeft={true} />
            <Arrow onClick={() => handlePrevNext(1)} />
          </div>
        </div>
      </div>
    </div>
  );
};

