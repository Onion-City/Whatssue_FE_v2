import { Text } from "@/components/atoms/text";
import useSwipeItemHandles from "@/hook/user/useSwipeItemHandles";
import "./RequestedMeetingItem.css";

enum ApprovalStatus {
  Approved = "ACCEPTED",
  Waiting = "WAITING",
  Rejected = "REJECTED",
}
export interface MeetingItemProps {
  id: number;
  title: string;
  date: string;
  approval: string;
}
// - 신청 취소 (승인 대기중 신청 스와이프 시)
// - 거절 사유 조회 (거절 신청 클릭 시)
// - 내역 삭제 (거절됨, 승인됨 스와이프 시)
const RequestedMeetingItem = ({
  id,
  title,
  date,
  approval,
}: MeetingItemProps) => {
  const handleRejectedModal = (clubId: number) => {
    if (approval == ApprovalStatus.Rejected) {
      // 거절 사유 조회 모달 열기
    }
  };
  const {
    handleTouchStart,
    handleMouseDown,
    handleTouchMove,
    handleMouseMove,
    showDeletePopup,
  } = useSwipeItemHandles();
  const handleCancel = () => {
    // 신청 취소 모달 열기
  };
  const handleDelete = () => {
    // 해당 신청 내역 삭제 요청
  };
  return (
    <div
      className="home__content__Requeste__box_wrapper"
      onClick={() => handleRejectedModal(id)}
      onTouchStart={handleTouchStart}
      onMouseDown={handleMouseDown}
      onTouchMove={handleTouchMove}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`home__content__Requeste__box ${showDeletePopup ? "home__content__Requeste__box__select" : ""}`}
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
          color={`${approval == ApprovalStatus.Rejected ? `#f44` : `#fff`}`}
          fontSize="0.8125rem"
          fontWeight="600"
          className="home__content__Requeste__right"
        >
          {approval == ApprovalStatus.Approved
            ? "승인"
            : approval == ApprovalStatus.Waiting
              ? "승인 대기 중"
              : "거절됨"}
        </Text>
      </div>

      <div
        className={`home__content__swipe_box_wrapper ${showDeletePopup ? "home__content__swipe_box__select" : ""}`}
      >
        <div className="delete-popup-inner">
          <Text color="#fff" fontSize="0.8125rem" fontWeight="600">
            {approval == ApprovalStatus.Waiting && (
              <div onClick={handleCancel}>신청 취소</div>
            )}
            {(approval == ApprovalStatus.Rejected ||
              approval == ApprovalStatus.Approved) && (
              <div onClick={handleDelete}>삭제</div>
            )}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default RequestedMeetingItem;
