"use client";

import React, { useState, useEffect } from "react";
import { ATTENDANCE_MODAL, TODAY_SCHEDULE_TITLE } from "../constants/const";
import AttendanceItem from "@/components/molecules/attendanceItem/AttendanceItem";
import { Text } from "@/components/atoms/text";
import "./Attendance.css";
import { useTodayScheduleListQuery } from "@/hook/attendance/manager/useTodayScheduleListQuery";
import { useAttendanceStartQuery } from "@/hook/attendance/manager/useAttendanceStartQuery";
import { ScheduleContent } from "@/types/schedule";
import { Modal } from "@/components/organisms/Modal/Modal";
import { useModalContext } from "@/components/organisms/Modal/ModalProvider";

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

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const {
    data: todayScheduleData,
    isError: isTodayScheduleError,
    refetch: refetchTodaySchedule,
  } = useTodayScheduleListQuery({
    clubId: clubId,
    startDate: getCurrentDate(),
    endDate: getCurrentDate(),
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

  const handleRefetchAttendance = async () => {
    try {
      const { data } = await refetchAttendance();
      console.log(data); // 여기서 응답 본문을 필요한 대로 처리할 수 있습니다
      // 응답 데이터를 처리하기 위한 추가 로직
    } catch (error) {
      console.error("출석 데이터를 다시 가져오는 중 에러 발생:", error);
      // 에러를 필요한 대로 처리
    }
  };

  useEffect(() => {
    if (startAttendance && selectedSchedule) {
      refetchAttendance().then(() => {
        onAttendanceUpdate();
        refetchTodaySchedule();
        handleRefetchAttendance();
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
