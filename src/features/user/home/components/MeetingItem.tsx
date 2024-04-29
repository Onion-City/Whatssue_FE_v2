import Person from "@/assets/images/ic_person_gray.png";
import { Text } from "@/components/atoms/text";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import "./MeetingItem.css";

export interface MeetingItemProps {
  id: number;
  title: string;
  date: string;
  member: number;
  tag: string;
  tagStyle?: React.CSSProperties;
  contentImg?: StaticImageData | null;
}

// 태그: 일반일 경우 기본 스타일
const baseTageStyle: React.CSSProperties = {
  color: "#2b2b2b",
  background: "#fff",
};

const MeetingItem = ({
  id,
  title,
  date,
  member,
  tag,
  tagStyle = baseTageStyle,
  contentImg,
}: MeetingItemProps) => {
  const router = useRouter();
  const handleRouteBoard = (clubId: number) => {
    router.push(`/${clubId}`);
  };
  return (
    <div
      className="home__content__meeting__box"
      onClick={() => handleRouteBoard(id)}
    >
      <div className="home__content__meeting__left">
        <Text
          color="#fff"
          fontSize="1rem"
          fontWeight="600"
          className="home__content__meeting__left_title"
        >
          {title}
        </Text>
        <Text
          color="#b8b8b8"
          fontSize="0.6875rem"
          fontWeight="500"
          className="home__content__meeting__left_date"
        >
          모임 가입일: {date}
        </Text>
        <div className="home__content__meeting__left_bottom">
          <Image src={Person} alt="person" />
          <Text color="#fff" fontSize="0.6875rem" fontWeight="500">
            {member} 명
          </Text>
          <div
            className="home__content__meeting__left_bottom_tag"
            style={tagStyle}
          >
            {tag}
          </div>
        </div>
      </div>
      {contentImg && (
        <Image
          src={contentImg}
          alt="contentImg"
          className="home__content__meeting__right_img"
        />
      )}
    </div>
  );
};

export default MeetingItem;
