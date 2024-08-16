"use client";
import React, { useState } from "react";
import CurrentAttendance from "./components/CurrentAttendance";
import TodaySchedule from "./components/TodaySchedule";

const AttendancePage: React.FC = () => {
  const [attendanceUpdated, setAttendanceUpdated] = useState(false);

  const handleAttendanceUpdate = () => {
    setAttendanceUpdated(!attendanceUpdated); // 상태 변경
  };

  return (
    <>
      <CurrentAttendance
        attendanceUpdated={attendanceUpdated}
        onAttendanceUpdate={handleAttendanceUpdate}
      />
      <TodaySchedule
        attendanceUpdated={attendanceUpdated}
        onAttendanceUpdate={handleAttendanceUpdate}
      />
    </>
  );
};

export default AttendancePage;
