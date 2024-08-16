import { Button } from "@/components/atoms/button";
import { Textarea } from "@/components/atoms/textarea";
import { Modal } from "@/components/organisms/Modal/Modal";
import { useAbsenceReqMutation } from "@/hook/absence/useAbsenceReqMutation";
import { COLORS } from "@/styles";
import { FormatClubId } from "@/utils/extractPathElements";
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
  scheduleName,
}: CalendarDetailBtnProps) => {
  const path = usePathname();
  const clubId = FormatClubId();

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [absenceReason, setAbsenceReason] = useState("");
  const { mutate } = useAbsenceReqMutation({
    clubId: clubId,
    scheduleId: +path.split("/")[3],
  });

  const onSubmit = () => {
    closeModal();
    setAbsenceReason("");
    mutate({
      officialAbsenceContent: absenceReason,
    });
  };

  return (
    <div className="calendarDetailBtn">
      <Button backgroundColor="#fff" onClick={openModal}>
        {CALENDAR_BTN.absent}
      </Button>

      {/* Modal */}
      <Modal isOpen={isOpen}>
        <Modal.Header closeModal={closeModal}>
          <Modal.Title>{scheduleName ?? ""}</Modal.Title>
          <Modal.Subtitle>{ABSENT_MODAL.member_subtitle}</Modal.Subtitle>
        </Modal.Header>
        <Modal.Content>
          <div className="calendarDetailBtn__textarea">
            <Textarea
              backgroundColor={COLORS.white}
              color={COLORS.background}
              size="pr"
              height="80%"
              isBorder={true}
              value={absenceReason}
              onChange={(value: string) => setAbsenceReason(value)}
            ></Textarea>
          </div>
        </Modal.Content>
        <Modal.Footer>
          <Modal.Button onClick={onSubmit}>
            {ABSENT_MODAL.member_btn}
          </Modal.Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CalendarDetailBtn;
