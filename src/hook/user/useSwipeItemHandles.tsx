import { useState } from "react";

// 가로 스와이프 
const useSwipeItemHandles = () => {
  const [showDeletePopup, setShowDeletePopup] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].pageX);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setStartX(e.pageX);
  };

  const handleSetStateFalse = () => {
    setShowDeletePopup(false);
  };

  const handleSwipe = (endX: number) => {
    const diffX = startX - endX;
    if (diffX > 50) {
      setShowDeletePopup(true);
    } else if (showDeletePopup && diffX < 50) {
      setShowDeletePopup(false);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleSwipe(e.touches[0].pageX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleSwipe(e.pageX);
  };
  return {
    handleTouchStart,
    handleMouseDown,
    handleTouchMove,
    handleMouseMove,
    handleSetStateFalse,
    showDeletePopup,
  };
};
export default useSwipeItemHandles;
