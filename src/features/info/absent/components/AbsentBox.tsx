import { Text } from "@/components/atoms/text";
import { Modal } from "@/components/organisms/Modal/Modal";
import { ICONS } from "@/constants/images";
import { Absence, AbsenceMemberData } from "@/types/absence/types";
import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import { ABSENT_BOX, ABSENT_MODAL } from "../constants";

import "./MemberAbsent.css";

interface AbsenceProps {
    data: AbsenceMemberData
};

export const AbsentBox = ({data}: AbsenceProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return(
        <>
        <div className="absentBox" onClick={openModal}>
            <div className="absentBox__status-wrapper">
                <span className="absentBox__status">
                    <Text
                        color="#2B2B2B"
                        fontSize="0.5625rem"
                    >{Absence[data.officialAbsenceRequestType]}</Text>
                </span>
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
            {
                data.createAt !== data.updateAt &&
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
            }
        </div>

        <Modal isOpen={isOpen}>
            <Modal.Dimmed />
            <Modal.Header closeModal={closeModal}>
                <Modal.Title>{data.scheduleName}</Modal.Title>
                <Modal.Subtitle>{moment(data.createAt).format("YYYY.MM.DD")}</Modal.Subtitle>
            </Modal.Header>
            <Modal.Content>
                <div className="absentBox__modal-content">
                    <Text
                        fontSize="0.6875rem"
                        color="#666666"
                    >{ABSENT_MODAL.title}</Text>
                    <Text
                        fontWeight="500"
                    >{data.officialAbsenceContent}</Text>
                </div>
            </Modal.Content>
            <Modal.Footer>
                <Modal.Button
                    onClick={closeModal}
                >{ABSENT_MODAL.btn}</Modal.Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}