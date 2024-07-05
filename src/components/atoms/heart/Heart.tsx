import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import {
  useHeartCancleMutation,
  useHeartMutation,
} from "@/hook/post/useheartMutation";
import { formatClubId, formatPostId } from "@/utils/extractPathElements";
import Image from "next/image";
import "./Hearts.css";
export interface ChipProps {
  hearts: number;
  isHeart: boolean;
  eventOn?: boolean; // 클릭 이벤트가 있는지 없는지 구성
}
export function Heart({ hearts, isHeart = false, eventOn = false }: ChipProps) {
  const postItem = {
    clubId: formatClubId(),
    postId: formatPostId(),
  };
  const { mutate: isHaertMutate } = useHeartMutation(postItem);
  const { mutate: isCancelHaertMutate } = useHeartCancleMutation(postItem);
  const handleIsHeart = () => {
    isHeart ? isCancelHaertMutate() : isHaertMutate();
  };
  return (
    <div className="hearts" onClick={handleIsHeart}>
      <Image src={isHeart ? ICONS.heartColor : ICONS.heartNone} alt="hearts" />
      <Text color="#fff" fontSize="0.6875rem" fontWeight="500">
        {hearts}
      </Text>
    </div>
  );
}
