import IconHeartColor from "@/assets/images/ic_heartColor.png";
import IconHeartNone from "@/assets/images/ic_heartWhite.png";
import { Text } from "@/components/atoms/text";
import Image from "next/image";

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
    <>
      <Image src={isHeart ? IconHeartColor : IconHeartNone} alt="hearts" />
      <Text color="#fff" fontSize="0.6875rem" fontWeight="500">
        {hearts}
      </Text>
    </>
  );
}
