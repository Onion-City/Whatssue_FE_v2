import { Text } from "@/components/atoms/text";
import { Modal } from "@/components/organisms/Modal/Modal";
import { ICONS } from "@/constants/images";
import { ABSENT_BOX } from "@/features/info/absent/constants";
import { COLORS } from "@/styles";
import { AbsenceMemberData } from "@/types/absence/types";
import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import { ABSENT_REQUEST_MODAL } from "../constants/const";

import { useAbsenceAcceptMutation } from "@/hook/absence/useAbsenceAcceptMutation";
import { useAbsenceRejectMutation } from "@/hook/absence/useAbsenceRejectMutation";
import { FormatClubId } from "@/utils/extractPathElements";
import "../../../absent/components/MemberAbsent.css";

interface AbsenceProps {
  data: AbsenceMemberData;
}

// 공결 신청 현황 item
export const ManageAbsentCurrentItem = ({ data }: AbsenceProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const clubId = FormatClubId();
  const { mutate: acceptMutate } = useAbsenceAcceptMutation({
    clubId: clubId,
  });
  const { mutate: rejectMutate } = useAbsenceRejectMutation({
    clubId: clubId,
  });

  // 공결 수락
  const acceptAbsence = (officialAbsenceId: number) => () => {
    const res = acceptMutate(officialAbsenceId);
    console.log(res);
    closeModal();
  };

  // 공결 거절
  const rejectAbsence = (officialAbsenceId: number) => () => {
    const res = rejectMutate(officialAbsenceId);
    console.log(res);
    closeModal();
  };

  return (
    <>
      <div className="absentBox" onClick={openModal}>
        <div className="absentBox__status-wrapper">
          <Text color="#FFFFFF" fontSize="1.1875rem">
            {data.scheduleName}
          </Text>
          <Image src={ICONS.arrowRight} alt="arrow" />
        </div>
        <div className="absentBox__date">
          <span className="absentBox__date-title">
            <Text color="#989898" fontSize="0.75rem" fontWeight="500">
              {ABSENT_BOX.memberName}
            </Text>
          </span>
          <span className="absentBox__date-content">
            <Text color="#FFFFFF" fontSize="0.75rem" fontWeight="500">
              {data.clubMemberName}
            </Text>
          </span>
        </div>
        <div className="absentBox__date">
          <Text color="#989898" fontSize="0.75rem" fontWeight="500">
            {ABSENT_BOX.createAt}
          </Text>
          <Text color="#FFFFFF" fontSize="0.75rem" fontWeight="500">
            {moment(data.createdAt).format("YYYY년 MM월 DD일")}
          </Text>
        </div>
      </div>

      <Modal isOpen={isOpen}>
        <Modal.Dimmed />
        <Modal.Header closeModal={closeModal}>
          <Modal.Title>{data.scheduleName}</Modal.Title>
          <Modal.Subtitle>
            {data.officialAbsenceRequestType} /{" "}
            {moment(data.createdAt).format("YYYY.MM.DD")}
          </Modal.Subtitle>
        </Modal.Header>
        <Modal.Content>
          <div className="absentBox__modal-content">
            <Text fontSize="0.6875rem" color="#666666">
              {ABSENT_REQUEST_MODAL.contentTitle}
            </Text>
            <Text fontWeight="500">{data.officialAbsenceContent}</Text>
          </div>
        </Modal.Content>
        <Modal.Footer>
          <div className="modalBtn__wrapper">
            <Modal.Button
              onClick={rejectAbsence(data.officialAbsenceId)}
              size="lt"
              backgroundColor={COLORS.whitegrey}
              color={COLORS.lightBackground}
            >
              {ABSENT_REQUEST_MODAL.btn.reject}
            </Modal.Button>
            <Modal.Button
              onClick={acceptAbsence(data.officialAbsenceId)}
              size="rt"
              backgroundColor={COLORS.lightBackground}
              color={COLORS.white}
            >
              {ABSENT_REQUEST_MODAL.btn.accept}
            </Modal.Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
