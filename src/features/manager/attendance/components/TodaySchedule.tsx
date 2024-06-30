"use client"; // 클라이언트 컴포넌트로 지정

import { Text } from "@/components/atoms/text";
import AttendanceItem from "@/components/molecules/attendanceItem/AttendanceItem";
import { Modal } from "@/components/organisms/Modal/Modal";
import { useModalContext } from "@/components/organisms/Modal/ModalProvider";
import { useAttendanceStartQuery } from "@/hook/attendance/manager/useAttendanceStartQuery";
import { useTodayScheduleListQuery } from "@/hook/attendance/manager/useTodayScheduleListQuery";
import { ScheduleContent } from "@/types/schedule";
import React, { useEffect, useState } from "react";
import { ATTENDANCE_MODAL, TODAY_SCHEDULE_TITLE } from "../constants/const";
import "./Attendance.css";

interface TodayScheduleProps {
  attendanceUpdated: boolean;
  onAttendanceUpdate: () => void;
}

const TodaySchedule: React.FC<TodayScheduleProps> = ({
  attendanceUpdated,
  onAttendanceUpdate,
}) => {
  const clubId = 1;
  const [selectedSchedule, setSelectedSchedule] =
    useState<ScheduleContent | null>(null);
  const { isOpen, openModal, closeModal } = useModalContext();
  const [startAttendance, setStartAttendance] = useState(false);

  const {
    data: todayScheduleData,
    isLoading: isTodayScheduleLoading,
    isError: isTodayScheduleError,
    refetch: refetchTodaySchedule,
  } = useTodayScheduleListQuery({
    clubId: clubId,
    startDate: "2024-05-28",
    endDate: "2024-05-28",
    page: 0,
    size: 10,
  });

  const { refetch: refetchAttendance } = useAttendanceStartQuery({
    clubId: clubId,
    scheduleId: selectedSchedule?.scheduleId || 0,
    enabled: false,
  });

  const handleOpenModal = (schedule: ScheduleContent) => {
    console.log("handleOpenModal called with schedule:", schedule); // 디버깅 로그 추가
    if (schedule.attendanceStatus === "BEFORE") {
      setSelectedSchedule(schedule);
      openModal();
      console.log("Modal opened with schedule:", schedule); // 디버깅 로그 추가
    }
  };

  const handleAttendanceStart = () => {
    console.log("handleAttendanceStart called"); // 디버깅 로그 추가
    if (selectedSchedule) {
      setStartAttendance(true);
    }
  };

  useEffect(() => {
    if (startAttendance && selectedSchedule) {
      refetchAttendance().then(() => {
        onAttendanceUpdate();
        refetchTodaySchedule();
        closeModal();
        setStartAttendance(false);
        console.log("Attendance started and modal closed"); // 디버깅 로그 추가
      });
    }
  }, [
    startAttendance,
    selectedSchedule,
    refetchAttendance,
    onAttendanceUpdate,
    refetchTodaySchedule,
  ]);

  if (isTodayScheduleError) {
    return (
      <div>
        <Text
          color="#FFF"
          fontSize="1.1875rem"
          fontWeight="600"
          className="today_schedule"
        >
          {TODAY_SCHEDULE_TITLE}
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
        className="today_schedule"
      >
        {TODAY_SCHEDULE_TITLE}
      </Text>

      {todayScheduleData &&
        todayScheduleData.data &&
        todayScheduleData.data.content?.map((schedule) => (
          <AttendanceItem
            key={schedule.scheduleId}
            attendanceAddress="attendance"
            scheduleId={schedule.scheduleId}
            attendanceStatus={schedule.attendanceStatus}
            scheduleName={schedule.scheduleName}
            scheduleDate={schedule.scheduleDate}
            scheduleTime={schedule.scheduleTime}
            onClick={() => handleOpenModal(schedule)}
          />
        ))}

      <Modal isOpen={isOpen}>
        <Modal.Dimmed />
        <Modal.Header>
          <Modal.Title>{ATTENDANCE_MODAL.start}</Modal.Title>
        </Modal.Header>
        <Modal.Content></Modal.Content>
        <Modal.Footer>
          <Modal.Button onClick={handleAttendanceStart}>
            {ATTENDANCE_MODAL.yes}
          </Modal.Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TodaySchedule;
