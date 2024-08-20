"use client";
import { Button } from "@/components/atoms/button";
import { Text } from "@/components/atoms/text";
import { useAttendanceMemberListQuery } from "@/hook/attendance/manager/useAttendanceMemberListQuery";
import { FormatClubId } from "@/utils/extractPathElements";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import {
  ATTENDANCE_STATUS_ARR,
  ATTENDANCE_STATUS_EDIT_BTN,
  ATTENDANCE_STATUS_TITLE,
} from "../constants/const";
import AttendanceStatusItem from "../molecules/AttendanceStatusItem";
import "./Attendance.css";

const AttendanceStatusList: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const scheduleId = searchParams.get("scheduleId");
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const { data, error } = useAttendanceMemberListQuery({
    clubId: FormatClubId(),
    scheduleId: Number(scheduleId),
  });
  if (error) return <Text>오류가 발생했습니다.</Text>;

  const filteredAttendanceStatus = selectedStatus
    ? data?.data?.data.filter(
        (attendanceStatus: any) =>
          attendanceStatus.attendanceType === selectedStatus
      )
    : data?.data.data;

  const countPeopleByStatus = (status: string) => {
    if (Array.isArray(data?.data.data)) {
      return data.data.data.filter(
        (attendanceStatus) => attendanceStatus.attendanceType === status
      ).length;
    }
    return [];
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
                &nbsp;/ {data?.data.data.length}명
              </Text>
            </Text>
          ))}
        </div>

        <label htmlFor="attendance_status_select" style={{ display: "none" }}>
          출석 현황 선택
        </label>
        <select
          id="attendance_status_select"
          onChange={(e) => setSelectedStatus(e.target.value)}
          value={selectedStatus || ""}
          className="attendance_status_list__select"
        >
          <option value="">전체</option>
          {ATTENDANCE_STATUS_ARR.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="attendance_status_list__item">
        {filteredAttendanceStatus &&
          filteredAttendanceStatus.map((attendanceStatus, idx) => (
            <AttendanceStatusItem
              key={idx}
              name={attendanceStatus.clubMemberName}
              status={attendanceStatus.attendanceType}
            />
          ))}
      </div>

      <div className="attendance_status_list__edit_btn">
        <Button
          onClick={() => router.push(`status/edit?scheduleId=${scheduleId}`)}
        >
          {ATTENDANCE_STATUS_EDIT_BTN}
        </Button>
      </div>
    </div>
  );
};

export default AttendanceStatusList;
