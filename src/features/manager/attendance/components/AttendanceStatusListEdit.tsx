"use client";
import { ATTENDANCE_STATUS_EDIT } from "../constants/const";
import { attendanceStatusDummy } from "../constants/dummy";
import "./Attendance.css";
import { useState } from "react";
import { Button } from "@/components/atoms/button";
import AttendanceStatusEditItem from "../molecules/AttendanceStatusEditItem";
import { useRouter } from "next/navigation";

interface AttendanceStatus {
  id: number;
  name: string;
  status: string;
}

const AttendanceStatusListEdit: React.FC = () => {
  const router = useRouter();
  const [attendanceStatus, setAttendanceStatus] = useState<AttendanceStatus[]>(
    attendanceStatusDummy
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
