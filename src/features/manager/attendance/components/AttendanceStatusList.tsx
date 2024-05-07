"use client";
import { Text } from "@/components/atoms/text";
import {
  ATTENDANCE_STATUS_ARR,
  ATTENDANCE_STATUS_TITLE,
} from "../constants/const";
import { attendanceStatusDummy } from "../constants/dummy";
import AttendanceStatusItem from "./AttendanceStatusItem";
import "./Attendance.css";
import { useState } from "react";

const AttendanceStatusList = () => {
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
    <div className="attendance_status_list">
      <Text color="#FFF" fontSize="1.1875rem" fontWeight="600">
        {ATTENDANCE_STATUS_TITLE}
      </Text>
      <div className="attendance_status_list__content">
        <div className="attendance_status_list__content_title">
          {ATTENDANCE_STATUS_ARR.map((status) => (
            <Text
              key={status}
              color="#FFF"
              fontSize="0.875rem"
              fontWeight="400"
            >
              {status}
            </Text>
          ))}
        </div>
        <div className="attendance_status_list__content_people">
          {ATTENDANCE_STATUS_ARR.map((status) => (
            <Text
              key={status}
              color="#51F8C4"
              fontSize="0.875rem"
              fontWeight="400"
            >
              {countPeopleByStatus(status)}명
              <Text color="#9D9D9D" fontSize="0.6875rem" fontWeight="400">
                &nbsp;/ {attendanceStatusDummy.length}명
              </Text>
            </Text>
          ))}
        </div>

        <select
          onChange={(e) => setSelectedStatus(e.target.value)}
          value={selectedStatus || ""}
          className="attendance_status_list__content_select"
        >
          <option value="">전체</option>
          {ATTENDANCE_STATUS_ARR.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      {filteredAttendanceStatus.map((attendanceStatus) => (
        <AttendanceStatusItem
          key={attendanceStatus.id}
          name={attendanceStatus.name}
          status={attendanceStatus.status}
        />
      ))}
    </div>
  );
};

export default AttendanceStatusList;