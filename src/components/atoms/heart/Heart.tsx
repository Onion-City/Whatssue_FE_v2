import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import Image from "next/image";
import "./Hearts.css";
export interface ChipProps {
  hearts: number;
  isHeart: boolean;
  eventOn?: boolean; // 클릭 이벤트가 있는지 없는지 구성
  onClick?: () => void;
}

export function Heart({
  hearts,
  isHeart = false,
  eventOn = false,
  onClick,
}: ChipProps) {
  return (
    <div className="hearts" onClick={onClick}>
      <Image src={isHeart ? ICONS.heartColor : ICONS.heartNone} alt="hearts" />
      <Text color="#fff" fontSize="0.6875rem" fontWeight="500">
        {hearts}
      </Text>
    </div>
  );
}
