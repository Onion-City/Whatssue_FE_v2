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

const TodaySchedule: React.FC = () => {
  const clubId = 1;
  const [selectedSchedule, setSelectedSchedule] =
    useState<ScheduleContent | null>(null);
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
  } = useTodayScheduleListQuery({
    clubId: clubId,
    // sDate: formattedToday,
    // eDate: formattedToday,
    sDate: "2024-05-28",
    eDate: "2024-05-28",
  });

  const handleOpenModal = (schedule: any) => {
    setSelectedSchedule(schedule);
    openModal();
  };

  const handleAttendanceStart = (clubId: number, scheduleId: number) => {
    useAttendanceStartQuery({ clubId, scheduleId });
    closeModal();
  };

  if (isTodayScheduleError) {
    return <div>Error loading schedules</div>;
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
            <Modal.Button
              onClick={() => {
                handleAttendanceStart(clubId, selectedSchedule.scheduleId);
              }}
            >
              {ATTENDANCE_MODAL.yes}
            </Modal.Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default TodaySchedule;
