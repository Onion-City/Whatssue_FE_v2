import { Button } from "@/components/atoms/button";
import { Textarea } from "@/components/atoms/textarea";
import { Modal } from "@/components/organisms/Modal/Modal";
import { useModalContext } from "@/components/organisms/Modal/ModalProvider";
import { useAbsenceReqMutation } from "@/hook/absence/useAbsenceReqMutation";
import { COLORS } from "@/styles";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ABSENT_MODAL, CALENDAR_BTN } from "../constants/const";
import "./Calendar.css";

interface CalendarDetailBtnProps {
    // scheduleId: number;
    scheduleName: string | undefined;
}

const CalendarDetailBtn = ({ 
    // scheduleId,
    scheduleName 
}: CalendarDetailBtnProps) => {
    const path = usePathname();
    const { isOpen, openModal, closeModal } = useModalContext();
    // const { register, handleSubmit } = useForm<AbsenceReasonValues>();
    const [absenceReason, setAbsenceReason] = useState("");
    const { mutate, isSuccess } = useAbsenceReqMutation({
        clubId: 1,
        scheduleId: +path.split("/")[3],
    });

    const onSubmit = () => {
        console.log(absenceReason);
        closeModal();
        mutate({
            clubMemberId: 14,
            scheduleId: +path.split("/")[3],
            officialAbsenceContent: absenceReason
        });
    }

    return (
            <div className="calendarDetailBtn">
                <Button 
                    backgroundColor="#fff"
                    onClick={openModal}
                >{CALENDAR_BTN.absent}</Button>
                <Button>{CALENDAR_BTN.attendance}</Button>

                {/* Modal */}
                <Modal isOpen={isOpen}>
                    <Modal.Dimmed />
                    <Modal.Header>
                        <Modal.Title>{scheduleName ?? ""}</Modal.Title>
                        <Modal.Subtitle>{ABSENT_MODAL.member_subtitle}</Modal.Subtitle>
                    </Modal.Header>
                    <Modal.Content>
                        <Textarea
                            backgroundColor={COLORS.white}
                            color={COLORS.background}
                            size="pr"
                            height="80%"
                            // maxCnt={undefined}
                            isBorder={true}
                            value={absenceReason}
                            onChange={(value: string) => setAbsenceReason(value)}
                        ></Textarea>
                    </Modal.Content>
                    <Modal.Footer>
                        <Modal.Button
                            onClick={onSubmit}
                        >
                            {ABSENT_MODAL.member_btn}
                        </Modal.Button>
                    </Modal.Footer>
                </Modal>
            </div>
    )
};

export default CalendarDetailBtn;