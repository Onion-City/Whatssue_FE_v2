"use client"; // 클라이언트 컴포넌트로 지정

import React, { useState, useEffect } from "react";
import { ATTENDANCE_MODAL, TODAY_SCHEDULE_TITLE } from "../constants/const";
import AttendanceItem from "@/components/molecules/attendanceItem/AttendanceItem";
import { Text } from "@/components/atoms/text";
import "./Attendance.css";
import { useAttendanceStartQuery } from "@/hook/attendance/manager/useAttendanceStartQuery";
import { useTodayScheduleListQuery } from "@/hook/attendance/manager/useTodayScheduleListQuery";
import { ScheduleContent } from "@/types/schedule";
import { useModalContext } from "@/components/organisms/Modal/ModalProvider";
import { Modal } from "@/components/organisms/Modal/Modal";

interface TodayScheduleProps {
  onAttendanceStart: () => void;
}

const TodaySchedule: React.FC<TodayScheduleProps> = ({ onAttendanceStart }) => {
  const clubId = 1;
  const [selectedSchedule, setSelectedSchedule] =
    useState<ScheduleContent | null>(null);
  const [startAttendance, setStartAttendance] = useState(false);
  const { isOpen, openModal, closeModal } = useModalContext();

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const formattedToday = `${yyyy}-${mm}-${dd}`;

  const {
    data: todayScheduleData,
    isLoading: isTodayScheduleLoading,
    isError: isTodayScheduleError,
    refetch: refetchTodaySchedule,
  } = useTodayScheduleListQuery({
    clubId: clubId,
    sDate: "2024-05-28",
    eDate: "2024-05-28",
  });

  const { data: attendanceData, refetch: refetchAttendance } =
    useAttendanceStartQuery({
      clubId: clubId,
      scheduleId: selectedSchedule?.scheduleId || 0,
    });

  const handleOpenModal = (schedule: ScheduleContent) => {
    if (schedule.attendanceStatus === "BEFORE") {
      setSelectedSchedule(schedule);
      openModal();
    }
  };

  const handleAttendanceStart = () => {
    setStartAttendance(true);
  };

  useEffect(() => {
    if (startAttendance && selectedSchedule) {
      refetchAttendance().then(() => {
        setStartAttendance(false);
        onAttendanceStart(); // 상태 변경 함수 호출
        refetchTodaySchedule(); // 데이터 다시 불러오기
        closeModal();
      });
    }
  }, [
    startAttendance,
    selectedSchedule,
    refetchAttendance,
    refetchTodaySchedule,
    closeModal,
    onAttendanceStart,
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

      {selectedSchedule && (
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
      )}
    </div>
  );
};

export default TodaySchedule;
