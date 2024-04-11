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
        <span className="home__content__Requeste__left_title">{title}</span>
        <span className="home__content__Requeste__left_date">
          신청일: {date}
        </span>
      </div>
      <div
        className={`home__content__Requeste__right ${approval ? `` : `refuse`}`}
      >
        {approval ? "승인 대기 중" : "거절됨"}
      </div>
    </div>
  );
};

export default RequestedMeetingItem;
