import { ICONS } from "@/constants/images";
import Image from "next/image";

interface arrowProps {
  onClick: () => void;
  width?: string;
  height?: string;
  isLeft?: boolean;
}

export const Arrow = ({
  onClick,
  width = "0.875rem",
  height = "1.64063rem",
  isLeft = false,
}: arrowProps) => {
  const style: React.CSSProperties = {
    transform: isLeft ? "rotate(180deg)" : "",
    width: width,
    height: height,
    cursor: "pointer",
  };
  return (
    <div onClick={onClick}>
      <Image src={ICONS.arrowRight} alt="arrowLeft"style={style}/>
    </div>
  );
};
