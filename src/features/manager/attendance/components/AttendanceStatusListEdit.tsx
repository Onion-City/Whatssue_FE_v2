"use client";
import { Button } from "@/components/atoms/button";
import { useAttendanceMemberListQuery } from "@/hook/attendance/manager/useAttendanceMemberListQuery";
import { FormatClubId } from "@/utils/extractPathElements";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { ATTENDANCE_STATUS_EDIT } from "../constants/const";
import AttendanceStatusEditItem from "../molecules/AttendanceStatusEditItem";
import "./Attendance.css";

interface AttendanceStatus {
  id: number;
  name: string;
  status: string;
}

const AttendanceStatusListEdit: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const scheduleId = searchParams.get("scheduleId");
  const { data, isLoading, error } = useAttendanceMemberListQuery({
    clubId: FormatClubId(),
    scheduleId: Number(scheduleId),
  });
  const [attendanceStatus, setAttendanceStatus] = useState<AttendanceStatus[]>(
    data?.data.data.map((item) => ({
      id: item.clubMemberId,
      name: item.clubMemberName,
      status: item.attendanceType,
    })) || []
  );

  const handleStatusChange = (name: string, status: string) => {
    setAttendanceStatus((prevStatus) =>
      prevStatus.map((item) =>
        item.name === name ? { ...item, status } : item
      )
    );
  };

  return (
    <div className="attendance_status_list_edit">
      <div className="attendance_status_list__item">
        {attendanceStatus.map((attendanceStatus) => (
          <AttendanceStatusEditItem
            key={attendanceStatus.id}
            name={attendanceStatus.name}
            status={attendanceStatus.status}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>

      <div className="attendance_status_list__edit_btn">
        <Button
          backgroundColor="#404040"
          color="#fff"
          size="sm"
          onClick={() => router.back()}
        >
          {ATTENDANCE_STATUS_EDIT.cancle}
        </Button>
        <Button onClick={() => router.push("/manager/attendance/status")}>
          {ATTENDANCE_STATUS_EDIT.done}
        </Button>
      </div>
    </div>
  );
};

export default AttendanceStatusListEdit;
