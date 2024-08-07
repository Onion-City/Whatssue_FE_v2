"use client";
import AttendanceChip from "@/components/atoms/chip/AttendanceChip";
import { Text } from "@/components/atoms/text";
import { IMAGES } from "@/constants/images";
import { AttendanceSchedule } from "@/types/attendance";
import Image from "next/image";
import "./AttendanceItem.css";

const AttendanceItem = ({
  scheduleId,
  attendanceStatus,
  scheduleName,
  scheduleDate,
  scheduleTime,
  onClick,
}: AttendanceSchedule) => {
  return (
    <div className="attendance_item" onClick={onClick}>
      <div className="attendance_item__content">
        <div className="attendance_item__status">
          {/* <Text color="#2B2B2B" fontSize="0.5625rem" fontWeight="600">
            {attendanceStatus}
          </Text> */}
          <AttendanceChip type={attendanceStatus} />
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
