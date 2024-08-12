import { useEffect, useRef, useState } from "react";

// export function useScrollHandler(onScrollEnd: () => void) {
//   return useCallback(
//     (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
//       const target = e.currentTarget;
//       const isBottom =
//         target.scrollHeight - target.scrollTop <= target.clientHeight;
//       if (isBottom) {
//         console.log("끝");
//         onScrollEnd();
//       }
//     },
//     [onScrollEnd]
//   );
// }

export function useScrollHandler(onScrollEnd: () => void) {
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return; // IntersectionObserver 지원 확인용

    const handleIntersect = ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setIsEnd(true);
      }
    };

    // IntersectionObserver를 초기화하고 handleIntersect 콜백 연결
    observer.current = new IntersectionObserver(handleIntersect, {
      root: null, // viewport를 root로 설정
      rootMargin: "0px", // root와 대상 요소 사이의 여백 설정
      threshold: 1.0, // 요소의 100%가 보일 때 트리거
    });

    const currentObserver = observer.current;
    const targetElement = targetRef.current;

    if (currentObserver && targetElement) {
      currentObserver.observe(targetElement);
    }

    return () => {
      if (currentObserver && targetElement) {
        currentObserver.unobserve(targetElement);
      }
    };
  }, []);

  useEffect(() => {
    if (isEnd) {
      onScrollEnd();
      setIsEnd(false);
    }
  }, [isEnd, onScrollEnd]);

  return targetRef;
}
