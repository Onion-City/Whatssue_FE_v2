"use client";
import { ATTENDANCE_MODAL, CURRENT_ATTENDANCE_TITLE } from "../constants/const";
import { Text } from "@/components/atoms/text";
import "./Attendance.css";
import AttendanceItem from "@/components/molecules/attendanceItem/AttendanceItem";
import { useAttendanceListQuery } from "@/hook/attendance/useAttendanceListQuery";
import { useState, useEffect } from "react";
import { AttendanceListItem } from "@/types/attendance/types";
import { useModalContext } from "@/components/organisms/Modal/ModalProvider";
import { Modal } from "@/components/organisms/Modal/Modal";
import { useAttendanceEndMutationQuery } from "@/hook/attendance/manager/useAttendanceEndMutationQuery";

interface CurrentAttendanceProps {
  attendanceUpdated: boolean;
}

const CurrentAttendance: React.FC<CurrentAttendanceProps> = ({
  attendanceUpdated,
}) => {
  const { data, isError, refetch } = useAttendanceListQuery({
    clubId: 1,
  });

  const [selectedAttendance, setSelectedAttendance] =
    useState<AttendanceListItem | null>(null);

  const { isOpen, openModal, closeModal } = useModalContext();

  const { mutate: endAttendance } = useAttendanceEndMutationQuery({
    clubId: 1,
    scheduleId: 13,
  });

  useEffect(() => {
    refetch();
  }, [attendanceUpdated, refetch]);

  const handleEndAttendance = () => {
    if (selectedAttendance) {
      endAttendance("", {
        onSuccess: () => {
          console.log("Attendance ended successfully");
          closeModal();
        },
        onError: (error) => {
          console.error("Error ending attendance:", error);
        },
      });
    }
  };

  if (isError) {
    return (
      <div>
        <Text
          color="#FFF"
          fontSize="1.1875rem"
          fontWeight="600"
          className="today_schedule"
        >
          {CURRENT_ATTENDANCE_TITLE}
        </Text>
        Error loading schedules
      </div>
    );
  }

  return (
    <div>
      <Text
        color="#FFF"
        fontSize="1.1875rem"
        fontWeight="600"
        className="current_attendance"
      >
        {CURRENT_ATTENDANCE_TITLE}
      </Text>

      {data && data.data && data.data?.length > 0 ? (
        data.data.map((attendance) => (
          <AttendanceItem
            key={attendance.scheduleId}
            attendanceAddress="member"
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
        <div style={{ width: "auto", height: "7.125rem" }}></div>
      )}

      {/* Modal */}
      {selectedAttendance && (
        <Modal isOpen={isOpen}>
          <Modal.Dimmed />
          <Modal.Header>
            <Modal.Title>{ATTENDANCE_MODAL.end}</Modal.Title>
          </Modal.Header>
          <Modal.Content></Modal.Content>
          <Modal.Footer>
            <Modal.Button onClick={handleEndAttendance}>
              {ATTENDANCE_MODAL.yes}
            </Modal.Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default CurrentAttendance;
