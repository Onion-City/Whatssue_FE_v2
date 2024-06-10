import React from "react";
import { useAttendanceList } from "@/hook/attendance/useAttendanceList";
import AttendanceItem from "../../../../components/molecules/attendanceItem/AttendanceItem";
import AttendanceEmpty from "./AttendanceEmpty";

const AttendanceList: React.FC = () => {
  const clubId = "club123"; // 실제 클럽 ID를 사용하세요
  const { data, isLoading, isError, error } = useAttendanceList({ clubId });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || data.length === 0) {
    return <AttendanceEmpty />;
  }

  return (
    <div>
      {data.map((attendance) => (
        <AttendanceItem
          key={attendance.id}
          attendanceAddress="member"
          id={attendance.id}
          status={attendance.status}
          title={attendance.title}
          date={attendance.date}
          time={attendance.time}
        />
      ))}
    </div>
  );
};

export default AttendanceList;
