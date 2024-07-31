import { Text } from "@/components/atoms/text";
import { Modal } from "@/components/organisms/Modal/Modal";
import { ICONS } from "@/constants/images";
import { ABSENT_BOX, ABSENT_MODAL } from "@/features/info/absent/constants";
import { COLORS } from "@/styles";
import { AbsenceMemberData } from "@/types/absence/types";
import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import { ABSENT_REQUEST_MODAL } from "../constants/const";

import AbsenceChip from "@/components/atoms/chip/AbsenceChip";
import "../../../absent/components/MemberAbsent.css";

interface AbsenceProps {
    data: AbsenceMemberData
};

// 공결 신청 현황 item
export const ManageAbsentHistoryItem = ({data}: AbsenceProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);


    return(
        <>
        <div className="absentBox" onClick={openModal}>
            <div className="absentBox__status-wrapper">
              {/* <span className="absentBox__status"> */}
                <AbsenceChip 
                  type={data.officialAbsenceRequestType}
                />
              {/* </span> */}
              <Image 
                  src={ICONS.arrowRight}
                  alt="arrow"
              />
            </div>
            <Text
                color="#FFFFFF"
                fontSize="1.1875rem"
            >{data.scheduleName}</Text>
            <div className="absentBox__date">
              <span className="absentBox__date-title">
                <Text
                    color="#989898"
                    fontSize="0.75rem"
                    fontWeight="500"
                >{ABSENT_BOX.memberName}</Text>
              </span>
              <span className="absentBox__date-content">
                <Text
                    color="#FFFFFF"
                    fontSize="0.75rem"
                    fontWeight="500"
                >{data.officialAbsenceRequestType}</Text>
              </span>
            </div>
            <div className="absentBox__date">
                <Text
                    color="#989898"
                    fontSize="0.75rem"
                    fontWeight="500"
                >{ABSENT_BOX.createAt}</Text>
                <Text
                    color="#FFFFFF"
                    fontSize="0.75rem"
                    fontWeight="500"
                >{moment(data.createAt).format("YYYY년 MM월 DD일")}</Text>
            </div>
            <div className="absentBox__date">
                <Text
                    color="#989898"
                    fontSize="0.75rem"
                    fontWeight="500"
                >{ABSENT_BOX.updateAt}</Text>
                <Text
                    color="#FFFFFF"
                    fontSize="0.75rem"
                    fontWeight="500"
                >{moment(data.updateAt).format("YYYY년 MM월 DD일")}</Text>
            </div>
        </div>

        <Modal isOpen={isOpen}>
            <Modal.Dimmed />
            <Modal.Header closeModal={closeModal}>
                <Modal.Title>{data.scheduleName}</Modal.Title>
                <Modal.Subtitle>{data.officialAbsenceRequestType} / {moment(data.createAt).format("YYYY.MM.DD")}</Modal.Subtitle>
            </Modal.Header>
            <Modal.Content>
                <div className="absentBox__modal-content">
                    <Text
                        fontSize="0.6875rem"
                        color="#666666"
                    >{ABSENT_REQUEST_MODAL.contentTitle}</Text>
                    <Text
                        fontWeight="500"
                    >{data.officialAbsenceContent}</Text>
                </div>
            </Modal.Content>
            <Modal.Footer>
                <Modal.Button
                  onClick={closeModal}
                  size="pr"
                  backgroundColor={COLORS.lightBackground}
                  color={COLORS.white}
                >{ABSENT_MODAL.btn}</Modal.Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}