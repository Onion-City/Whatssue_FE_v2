import { Text } from "@/components/atoms/text";
// import { useModalContext } from "@/components/organisms/Modal/ModalProvider";
import { useJoinCancelMutation } from "@/hook/clubJoin/useJoinCancelMutation";
import { useJoinRejectedQuery } from "@/hook/clubJoin/useJoinRejectedQuery";
import useSwipeItemHandles from "@/hook/user/useSwipeItemHandles";
import { ApprovalStatus, RequestedJoinClubInfo } from "@/types/club";
import { useState } from "react";
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
  // const { isOpen, openModal, closeModal } = useModalContext();
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const { mutate: cancelMutate } = useJoinCancelMutation(clubJoinRequestId);
  const { data: rejectedData, isLoading } =
    useJoinRejectedQuery(clubJoinRequestId, status);

  const rejectedDataText = rejectedData?.rejectionReason;

  const handleOpenModal = () => {
    openModal();
  };
  const requestData = {
    title: clubName,
    date: updatedAt,
    content: rejectedDataText || "",
    // : HOME_JOIN_CANCLE.content,
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
      onTouchStart={!isSwipe ? handleTouchStart : undefined}
      onMouseDown={!isSwipe ? handleMouseDown : undefined}
      onTouchMove={!isSwipe ? handleTouchMove : undefined}
      onMouseMove={!isSwipe ? handleMouseMove : undefined}
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
        cancelMutate={cancelMutate}
      />
    </div>
  );
};

export default RequestedMeetingItem;
