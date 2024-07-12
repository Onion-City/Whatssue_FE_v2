"use client";
import React, { useEffect, useRef, useState } from "react";
import { useAttendanceListQuery } from "@/hook/attendance/useAttendanceListQuery";
import AttendanceItem from "../../../../components/molecules/attendanceItem/AttendanceItem";
import AttendanceEmpty from "./AttendanceEmpty";
import { Modal } from "@/components/organisms/Modal/Modal";
import { useModalContext } from "@/components/organisms/Modal/ModalProvider";
import { ATTEND_BTN, ATTEND_MODAL } from "../constants/const";
import { CodeInput } from "@/components/atoms/input/CodeInput";
import { AttendanceListItem } from "@/types/attendance/types";
import { useAttendanceReqMutation } from "@/hook/attendance/member/useAttendanceMutationReqQuery";
import { FormatClubId } from "@/utils/extractPathElements";

const AttendanceList: React.FC = () => {
  const { isOpen, openModal, closeModal } = useModalContext();
  const [codeValues, setCodeValues] = useState<string[]>(Array(3).fill(""));
  const [isComplete, setIsComplete] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [selectedAttendance, setSelectedAttendance] =
    useState<AttendanceListItem | null>(null);

  const { data, isError } = useAttendanceListQuery(FormatClubId());
  console.log(data);

  const { mutate: requestAttendance } = useAttendanceReqMutation({
    clubId: FormatClubId(),
    scheduleId: selectedAttendance?.scheduleId || 0,
  });

  const onSubmit = () => {
    closeModal();
    if (isComplete && selectedAttendance) {
      const attendanceNum = parseInt(codeValues.join(""));
      const attendanceData = { attendanceNum };
      requestAttendance(attendanceData);
    }
  };

  const setFocus = (index: number) => {
    if (index >= 0 && index < inputRefs.current.length) {
      inputRefs.current[index]?.focus();
    }
  };

  const handleRef = (index: number): React.RefCallback<HTMLInputElement> => {
    return (el) => {
      inputRefs.current[index] = el;
    };
  };

  const handleValueChange = (index: number, value: string) => {
    const newValues = [...codeValues];
    newValues[index] = value;
    setCodeValues(newValues);
  };

  useEffect(() => {
    const allFilled = codeValues.every((value) => value.length > 0);
    setIsComplete(allFilled);

    if (allFilled) {
      inputRefs.current.forEach((input) => input?.blur());
    }
  }, [codeValues]);

  if (isError) {
    return <div>Error loading attendance list.</div>;
  }

  return (
    <div>
      {data && data.data && data.data.data && data?.data?.data?.length > 0 ? (
        data.data.data.map((attendance) => (
          <AttendanceItem
            key={attendance.scheduleId}
            scheduleId={attendance.scheduleId}
            attendanceStatus={attendance.attendanceStatus}
            scheduleName={attendance.scheduleName}
            scheduleDate={new Date(
              attendance.scheduleDateTime
            ).toLocaleDateString()}
            scheduleTime={new Date(
              attendance.scheduleDateTime
            ).toLocaleTimeString()}
            onClick={() => {
              setSelectedAttendance(attendance);
              openModal();
            }}
          />
        ))
      ) : (
        <AttendanceEmpty />
      )}

      {/* Modal */}
      {selectedAttendance && (
        <Modal isOpen={isOpen}>
          <Modal.Dimmed />
          <Modal.Header>
            <Modal.Title>{selectedAttendance.scheduleName}</Modal.Title>
            <Modal.Subtitle>{ATTEND_MODAL}</Modal.Subtitle>
          </Modal.Header>
          <Modal.Content>
            <div className="attendance__code">
              {[...Array(3)].map((_, index) => (
                <CodeInput
                  key={index}
                  name={`attendanceCode${index + 1}`}
                  index={index}
                  setFocus={setFocus}
                  onValueChange={handleValueChange}
                  ref={handleRef(index)}
                />
              ))}
            </div>
          </Modal.Content>
          <Modal.Footer>
            <Modal.Button onClick={onSubmit}>{ATTEND_BTN}</Modal.Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default AttendanceList;
