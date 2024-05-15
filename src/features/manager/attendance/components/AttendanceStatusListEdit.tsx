"use client";
import { Text } from "@/components/atoms/text";
import {
  ATTENDANCE_STATUS_ARR,
  ATTENDANCE_STATUS_EDIT_DONE,
  ATTENDANCE_STATUS_TITLE,
} from "../constants/const";
import { attendanceStatusDummy } from "../constants/dummy";
import AttendanceStatusItem from "./AttendanceStatusItem";
import "./Attendance.css";
import { useState } from "react";
import { Button } from "@/components/atoms/button";
import AttendanceStatusEditItem from "./AttendanceStatusEditItem";

const AttendanceStatusListEdit = () => {
  const [selectedStatus, setSelectedStatus] = useState(null); // 선택된 상태

  // 선택된 상태에 따라 필터링된 출석 상태 리스트 반환
  const filteredAttendanceStatus = selectedStatus
    ? attendanceStatusDummy.filter(
        (attendanceStatus) => attendanceStatus.status === selectedStatus
      )
    : attendanceStatusDummy;

  const countPeopleByStatus = (status: string) => {
    return attendanceStatusDummy.filter(
      (attendanceStatus) => attendanceStatus.status === status
    ).length;
  };

  return (
    <div className="attendance_status_list_edit">
      <div className="attendance_status_list_edit__content">
        {filteredAttendanceStatus.map((attendanceStatus) => (
          <AttendanceStatusEditItem
            key={attendanceStatus.id}
            name={attendanceStatus.name}
            status={attendanceStatus.status}
          />
        ))}
      </div>

      <div className="attendance_status_list__edit_btn">
        <Button>{ATTENDANCE_STATUS_EDIT_DONE}</Button>
      </div>
    </div>
  );
};

export default AttendanceStatusListEdit;
