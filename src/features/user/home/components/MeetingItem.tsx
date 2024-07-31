import Person from "@/assets/images/ic_person_gray.png";
import { Text } from "@/components/atoms/text";
import { setClub, setClubId } from "@/redux/slices/club";
import { Club } from "@/types/club";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import "./MeetingItem.css";

const MeetingItem = ({
  clubId,
  clubName,
  clubProfileImage,
  createdAt,
  role = "MEMBER",
  memberCount = 0,
}: Club) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleRouteBoard = (clubId: number) => {
    console.log(clubId,
      clubName,
      clubProfileImage,
      createdAt,
      role,
      memberCount);
    dispatch(setClubId(clubId));
    dispatch(setClub({
      memberId: -1,
      memberName: "",
      memberProfileImage: "",
      role: role,
      clubProfileImage: clubProfileImage,
      clubName: clubName,
    }))
    router.push(`/club`);
  };
  const roleName = role === "MANAGER" ? "관리자" : "일반";
  return (
    <div
      className="home__content__meeting__box"
      onClick={() => handleRouteBoard(clubId)}
    >
      <div className="home__content__meeting__left">
        <Text
          color="#fff"
          fontSize="1rem"
          fontWeight="600"
          className="home__content__meeting__left_title"
        >
          {clubName}
        </Text>
        <Text
          color="#b8b8b8"
          fontSize="0.6875rem"
          fontWeight="500"
          className="home__content__meeting__left_date"
        >
          모임 가입일: {createdAt}
        </Text>
        <div className="home__content__meeting__left_bottom">
          <Image src={Person} alt="person" />
          <Text color="#fff" fontSize="0.6875rem" fontWeight="500">
            {memberCount} 명{/* 수정 필요 */}
          </Text>
          <div className="home__content__meeting__left_bottom_tag">
            <Text
              color="#2b2b2b"
              fontSize="0.5625rem"
              fontWeight="600"
              className="home__content__meeting__left_bottom_tag"
            >
              {roleName}
            </Text>
          </div>
        </div>
      </div>
      {clubProfileImage && (
        <Image
          src={clubProfileImage}
          alt="contentImg"
          className="home__content__meeting__right_img"
          width={100}
          height={100}
        />
      )}
    </div>
  );
};

export default MeetingItem;
