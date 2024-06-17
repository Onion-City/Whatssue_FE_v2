"use client"; // 클라이언트 컴포넌트로 지정

import React, { useState } from "react";
import { TODAY_SCHEDULE_TITLE } from "../constants/const";
import AttendanceItem from "@/components/molecules/attendanceItem/AttendanceItem";
import { todayScheduleList } from "../constants/dummy";
import { Text } from "@/components/atoms/text";
import "./Attendance.css";
import { useAttendanceStartQuery } from "@/hook/attendance/manager/useAttendanceStartQuery";

interface Schedule {
  id: number;
  status: string;
  title: string;
  date: string;
  time: string;
}

const TodaySchedule: React.FC = () => {
  const handleAttendanceStart = (attendance: Schedule) => {
    useAttendanceStartQuery({ clubId: 1, scheduleId: 13 });
  };

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
      {todayScheduleList.map((attendance: Schedule) => (
        <AttendanceItem
          key={attendance.id}
          attendanceAddress="attendance"
          id={attendance.id}
          status={attendance.status}
          title={attendance.title}
          date={attendance.date}
          time={attendance.time}
          onClick={() => handleAttendanceStart(attendance)}
        />
      ))}
    </div>
  );
};

export default TodaySchedule;
