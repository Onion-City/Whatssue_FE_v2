"use client";
import { ATTENDANCE_STATUS_EDIT } from "../constants/const";
import "./Attendance.css";
import { useState, useEffect } from "react";
import { Button } from "@/components/atoms/button";
import { useAttendanceMemberListQuery } from "@/hook/attendance/manager/useAttendanceMemberListQuery";
import { useRouter, useSearchParams } from "next/navigation";
import { FormatClubId } from "@/utils/extractPathElements";
import AttendanceStatusEditItem from "../molecules/AttendanceStatusEditItem";
import { useAttendanceUpdateMutation } from "@/hook/attendance/manager/useAttendanceUpdateMutation";

interface AttendanceStatus {
  id: number;
  name: string;
  status: string;
  isModified: boolean;
}

const AttendanceStatusListEdit: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const scheduleId = searchParams.get("scheduleId");
  const clubId = FormatClubId();

  const { data, isLoading, error } = useAttendanceMemberListQuery({
    clubId: clubId,
    scheduleId: Number(scheduleId),
  });

  const [attendanceStatus, setAttendanceStatus] = useState<AttendanceStatus[]>(
    []
  );

  useEffect(() => {
    if (data) {
      setAttendanceStatus(
        data.data.data.map((item) => ({
          id: item.clubMemberId,
          name: item.clubMemberName,
          status: item.attendanceType,
          isModified: false,
        }))
      );
    }
  }, [data]);

  const handleStatusChange = (name: string, status: string) => {
    setAttendanceStatus((prevStatus) =>
      prevStatus.map((item) =>
        item.name === name ? { ...item, status, isModified: true } : item
      )
    );
  };

  const { mutate: updateAttendance } = useAttendanceUpdateMutation(clubId);

  const handleDone = () => {
    const modifiedData = attendanceStatus
      .filter((item) => item.isModified)
      .map((item) => ({
        memberId: item.id,
        attendanceType: item.status,
        isModified: item.isModified,
      }));

    updateAttendance({
      scheduleId: Number(scheduleId),
      attendmodifyDtoList: modifiedData,
    });

    router.replace(`/manager/attendance/status?scheduleId=${scheduleId}`);
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
        <Button onClick={handleDone}>{ATTENDANCE_STATUS_EDIT.done}</Button>
      </div>
    </div>
  );
};

export default AttendanceStatusListEdit;
