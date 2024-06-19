"use client";
import { useRouter } from "next/navigation";
import { AttendanceItemProps } from "../../../features/member/attendance/components/AttendanceItemProps";
import { Text } from "@/components/atoms/text";
import "./AttendanceItem.css";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { AttendanceSchedule } from "@/types/attendance";

const AttendanceItem = ({
  attendanceAddress,
  scheduleId,
  attendanceStatus,
  scheduleName,
  scheduleDate,
  scheduleTime,
  onClick,
}: AttendanceSchedule) => {
  // const router = useRouter();
  const handleRouteAttendance = (AttendanceId: number) => {
    // if (attendanceAddress === "manager") {
    //   router.push("/manager/attendance/status");
    // } else {
    //   router.push(`/${attendanceAddress}/attendance`);
    // }
  };

  return (
    <div
      className="attendance_item"
      onClick={() => handleRouteAttendance(scheduleId)}
    >
      <div className="attendance_item__content">
        <div className="attendance_item__status">
          <Text color="#2B2B2B" fontSize="0.5625rem" fontWeight="600">
            {attendanceStatus}
          </Text>
        </div>

        <Text
          color="#FFF"
          fontSize="1.1875rem"
          fontWeight="600"
          className="attendance_item__title"
        >
          {scheduleName}
        </Text>

        <div>
          <Text
            color="#FFF"
            fontSize="0.9375rem"
            fontWeight="500"
            className="attendance_item__date"
          >
            {scheduleDate}
          </Text>

          <Text
            color="#D9D9D9"
            fontSize="0.8125rem"
            fontWeight="500"
            className="attendance_item__time"
          >
            {scheduleTime}
          </Text>
        </div>
      </div>
      <Image src={IMAGES.link} alt="link" className="attendance_item__link" />
    </div>
  );
};

export default AttendanceItem;
