import _ from "lodash";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Text } from "../text";
import "./ImageModal.css";
interface ImageModalProps {
  imageList: StaticImageData[];
  clickIndex: number;
  onClose: () => void;
}
const ImageModal = ({ imageList, clickIndex, onClose }: ImageModalProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(clickIndex);
  const [startX, setStartX] = useState<number>(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].pageX);
  };

  const handleSwipe = (endX: number) => {
    const diffX = startX - endX;
    if (diffX > 50) {
      handleNext();
    } else if (diffX < -50) {
      handlePrev();
    }
  };
  const debouncedSwipe = _.debounce(handleSwipe, 300);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    debouncedSwipe(e.touches[0].pageX);
  };
  const handlePrev = () => {
    // 이전 이미지로 이동
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    // 다음 이미지로 이동
    const nextIndex = currentIndex + 1;
    if (nextIndex < imageList.length) setCurrentIndex(nextIndex);
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
          fontSize="2rem"
          fontWeight="700"
          className="image__modal__currentIndex"
        >
          {currentIndex + 1}/{imageList.length}
        </Text>
        <div className="image__modal__close" onClick={onClose}>
          <Text color="#fff" fontSize="2rem" fontWeight="700">
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
            <div onClick={handlePrev}>
              <Text color="#404040" fontSize="2rem" fontWeight="700">
                {"<"}
              </Text>
            </div>

            <div onClick={handleNext}>
              <Text color="#404040" fontSize="2rem" fontWeight="700">
                {">"}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
