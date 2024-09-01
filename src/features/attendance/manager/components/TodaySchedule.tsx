"use client";

import { Text } from "@/components/atoms/text";
import AttendanceItem from "@/components/molecules/attendanceItem/AttendanceItem";
import { Modal } from "@/components/organisms/Modal/Modal";
import { useAttendanceStartQuery } from "@/hook/attendance/manager/useAttendanceStartQuery";
import { useTodayScheduleListQuery } from "@/hook/attendance/manager/useTodayScheduleListQuery";
import { ScheduleContent } from "@/types/schedule";
import React, { useEffect, useState } from "react";
import { ATTENDANCE_MODAL, TODAY_SCHEDULE_TITLE } from "../constants/const";
import "./Attendance.css";
import { useRouter } from "next/navigation";
import { FormatClubId } from "@/utils/extractPathElements";

interface TodayScheduleProps {
  attendanceUpdated: boolean;
  onAttendanceUpdate: () => void;
}

const TodaySchedule: React.FC<TodayScheduleProps> = ({
  attendanceUpdated,
  onAttendanceUpdate,
}) => {
  const router = useRouter();
  const [selectedSchedule, setSelectedSchedule] =
    useState<ScheduleContent | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
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
    clubId: FormatClubId(),
    startDate: getCurrentDate(),
    endDate: getCurrentDate(),
    page: 0,
    size: 10,
  });

  const { refetch: refetchAttendance } = useAttendanceStartQuery({
    clubId: FormatClubId(),
    scheduleId: selectedSchedule?.scheduleId || 0,
    enabled: false,
  });

  const handleOpenModal = (schedule: ScheduleContent) => {
    console.log("handleOpenModal called with schedule:", schedule);
    if (schedule.attendanceStatus === "BEFORE") {
      setSelectedSchedule(schedule);
      openModal();
      console.log("Modal opened with schedule:", schedule);
    } else {
      router.push(`/club/attendance/status?scheduleId=${schedule.scheduleId}`);
      console.log("Redirected to attendance status page:", schedule);
    }
  };

  const handleAttendanceStart = () => {
    console.log("handleAttendanceStart called");
    if (selectedSchedule) {
      setStartAttendance(true);
    }
  };

  const handleRefetchAttendance = async () => {
    try {
      const { data } = await refetchAttendance();
      console.log(data);
    } catch (error) {
      console.error("출석 데이터를 다시 가져오는 중 에러 발생:", error);
    }
  };

  useEffect(() => {
    refetchTodaySchedule();
  }, [attendanceUpdated, refetchTodaySchedule]);

  useEffect(() => {
    if (startAttendance && selectedSchedule) {
      refetchAttendance().then(() => {
        onAttendanceUpdate();
        refetchTodaySchedule();
        handleRefetchAttendance();
        closeModal();
        setStartAttendance(false);
        console.log("Attendance started and modal closed");
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
        <Modal.Header closeModal={closeModal}>
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
