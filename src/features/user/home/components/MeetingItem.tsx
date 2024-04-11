import Person from "@/assets/images/ic_person_gray.png";
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
    router.push(`/home/${clubId}`);
  };
  return (
    <div
      className="home__content__meeting__box"
      onClick={() => handleRouteBoard(id)}
    >
      <div className="home__content__meeting__left">
        <span className="home__content__meeting__left_title">{title}</span>
        <span className="home__content__meeting__left_date">
          모임 가입일: {date}
        </span>
        <div className="home__content__meeting__left_bottom">
          <Image src={Person} alt="person" />
          <label>{member} 명</label>
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
