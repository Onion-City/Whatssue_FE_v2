import { Text } from "@/components/atoms/text";
import { useRouter } from "next/navigation";
import "./RequestedMeetingItem.css";

export interface MeetingItemProps {
  id: number;
  title: string;
  date: string;
  approval: boolean;
}

const RequestedMeetingItem = ({
  id,
  title,
  date,
  approval,
}: MeetingItemProps) => {
  const router = useRouter();
  const handleRouteBoard = (clubId: number) => {
    router.push(`/home/${clubId}`);
  };
  return (
    <div
      className="home__content__Requeste__box"
      onClick={() => handleRouteBoard(id)}
    >
      <div className="home__content__Requeste__left">
        <Text
          color="#fff"
          fontSize="0.9375rem"
          fontWeight="600"
          className="home__content__Requeste__left_title"
        >
          {title}
        </Text>
        <Text
          color="#b8b8b8"
          fontSize="0.6875rem"
          fontWeight="500"
          className="home__content__Requeste__left_date"
        >
          신청일: {date}
        </Text>
      </div>
      <Text
        color={`${approval ? `#fff` : `#f44`}`}
        fontSize="0.8125rem"
        fontWeight="600"
        className="home__content__Requeste__right"
      >
        {approval ? "승인 대기 중" : "거절됨"}
      </Text>
    </div>
  );
};

export default RequestedMeetingItem;
