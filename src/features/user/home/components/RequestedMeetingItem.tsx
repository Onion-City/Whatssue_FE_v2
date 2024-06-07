import { Modal } from "@/components/atoms/modal";
import { Text } from "@/components/atoms/text";
import useSwipeItemHandles from "@/hook/user/useSwipeItemHandles";
import { ApprovalStatus, RequestedJoinClubInfo } from "@/types/club";
import { useState } from "react";
import { HOME_CANCEL } from "../constants/const";
import "./RequestedMeetingItem.css";

const RequestedMeetingItem = ({
  clubJoinRequestId,
  clubId,
  clubName,
  status,
  updatedAt,
}: RequestedJoinClubInfo) => {
  const [openCancelModal, setOpenCancelModal] = useState(false);
  const handleRejectedModal = (clubId: number) => {
    if (status == ApprovalStatus.Rejected) {
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
  const handleOpenCancelModal = () => {
    setOpenCancelModal((prop) => !prop);
  };
  const handleCancel = () => {
    setOpenCancelModal((prop) => !prop);
    // 신청내역 취소
  };
  const handleDelete = () => {
    // 해당 신청 내역 삭제 요청
  };
  return (
    <div
      className="home__content__Requeste__box_wrapper"
      onClick={() => handleRejectedModal(clubId)}
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
            {clubName}
          </Text>
          <Text
            color="#b8b8b8"
            fontSize="0.6875rem"
            fontWeight="500"
            className="home__content__Requeste__left_date"
          >
            신청일: {updatedAt}
          </Text>
        </div>
        <Text
          color={`${status == ApprovalStatus.Rejected ? `#f44` : `#fff`}`}
          fontSize="0.8125rem"
          fontWeight="600"
          className="home__content__Requeste__right"
        >
          {status == ApprovalStatus.Approved
            ? "승인"
            : status == ApprovalStatus.Waiting
              ? "승인 대기 중"
              : "거절됨"}
        </Text>
      </div>

      <div
        className={`home__content__swipe_box_wrapper ${showDeletePopup ? "home__content__swipe_box__select" : ""}`}
      >
        <div className="delete-popup-inner">
          <Text color="#fff" fontSize="0.8125rem" fontWeight="600">
            {status == ApprovalStatus.Waiting && (
              <div onClick={handleOpenCancelModal}>신청 취소</div>
            )}
            {(status == ApprovalStatus.Rejected ||
              status == ApprovalStatus.Approved) && (
              <div onClick={handleDelete}>삭제</div>
            )}
          </Text>
        </div>
      </div>
      {openCancelModal && (
        <Modal
          title={HOME_CANCEL.title}
          subtitle={HOME_CANCEL.subtitle}
          agree={HOME_CANCEL.agree}
          denial={HOME_CANCEL.denial}
          agreeVoid={handleCancel}
          denialVoid={handleOpenCancelModal}
        />
      )}
    </div>
  );
};

export default RequestedMeetingItem;
