import { Text } from "@/components/atoms/text";
// import { useModalContext } from "@/components/organisms/Modal/ModalProvider";
import { useJoinCancelMutation } from "@/hook/clubJoin/useJoinCancelMutation";
import { useJoinDeleteMutation } from "@/hook/clubJoin/useJoinDeleteMutation";
import { useJoinRejectedQuery } from "@/hook/clubJoin/useJoinRejectedQuery";
import useSwipeItemHandles from "@/hook/user/useSwipeItemHandles";
import { ApprovalStatus, RequestedJoinClubInfo } from "@/types/club";
import { useState } from "react";
import { HOME_JOIN_CANCLE } from "../constants/const";
import HomeRequestedModal from "./HomeRequestedModal";
import "./RequestedMeetingItem.css";

const RequestedMeetingItem = ({
  clubJoinRequestId,
  clubId,
  clubName,
  status,
  updatedAt,
}: RequestedJoinClubInfo) => {
  const isSwipe = status == ApprovalStatus.Rejected;
  const StateEqualRejectedOrCanceled =
    status == ApprovalStatus.Cancel || status == ApprovalStatus.Rejected;
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const { mutate: cancelMutate } = useJoinCancelMutation(clubJoinRequestId);
  const { mutate: deleteMutate } = useJoinDeleteMutation(clubJoinRequestId);
  const { data: rejectedData, isLoading } = useJoinRejectedQuery(
    clubJoinRequestId,
    status
  );

  const rejectedDataText =
    rejectedData?.data.rejectionReason || HOME_JOIN_CANCLE.content;

  const handleOpenModal = () => {
    openModal();
  };
  const {
    handleTouchStart,
    handleMouseDown,
    handleTouchMove,
    handleMouseMove,
    showDeletePopup,
  } = useSwipeItemHandles();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className="home__content__Requeste__box_wrapper"
      onTouchStart={
        !StateEqualRejectedOrCanceled ? handleTouchStart : undefined
      }
      onMouseDown={!StateEqualRejectedOrCanceled ? handleMouseDown : undefined}
      onTouchMove={!StateEqualRejectedOrCanceled ? handleTouchMove : undefined}
      onMouseMove={!StateEqualRejectedOrCanceled ? handleMouseMove : undefined}
    >
      <div
        className={`home__content__Requeste__box ${showDeletePopup ? "home__content__Requeste__box__select" : ""}`}
        onClick={isSwipe ? handleOpenModal : undefined}
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
          color={`${StateEqualRejectedOrCanceled ? `#f44` : `#fff`}`}
          fontSize="0.8125rem"
          fontWeight="600"
          className="home__content__Requeste__right"
        >
          
          {status == ApprovalStatus.Approved
            ? "승인"
            : status == ApprovalStatus.Waiting
              ? "승인 대기 중"
              : status == ApprovalStatus.Rejected
                ? "거절됨"
                : "취소됨"}
        </Text>
      </div>

      <div
        className={`home__content__swipe_box_wrapper ${showDeletePopup ? "home__content__swipe_box__select" : ""}`}
      >
        <div className="delete-popup-inner">
          <Text color="#fff" fontSize="0.8125rem" fontWeight="600">
            {status == ApprovalStatus.Waiting && (
              <div onClick={handleOpenModal}>신청 취소</div>
            )}
            {status == ApprovalStatus.Approved && (
              <div onClick={handleOpenModal}>삭제</div>
            )}
          </Text>
        </div>
      </div>
      <HomeRequestedModal
        isOpen={isOpen}
        closeModal={closeModal}
        title={clubName}
        date={updatedAt}
        content={rejectedDataText || ""}
        cancelMutate={
          status == ApprovalStatus.Waiting ? cancelMutate : deleteMutate
        }
      />
    </div>
  );
};

export default RequestedMeetingItem;
