"use client"; //set으로 만들고 해당을 제거

import { useRouter } from "next/navigation";
import { AttendanceItemProps } from "../../../features/member/attendance/components/AttendanceItemProps";
import { Text } from "@/components/atoms/text";
import "./AttendanceItem.css";
import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { useAttendanceStartQuery } from "@/hook/attendance/manager/useAttendanceStartQuery";

const AttendanceItem = ({
  attendanceAddress,
  id,
  status,
  title,
  date,
  time,
  onClick,
}: AttendanceItemProps) => {
  const router = useRouter();
  const { data } = useAttendanceStartQuery({
    clubId: 1,
    scheduleId: 13,
  });
  console.log(data);
  const handleRouteAttendance = (AttendanceId: number) => {
    // if (attendanceAddress === "manager") {
    //   router.push("/manager/attendance/status");
    // } else {
    //   router.push(`/${attendanceAddress}/attendance`);
    // }
  };

  return (
    <div className="attendance_item" onClick={() => handleRouteAttendance(id)}>
      <div className="attendance_item__content">
        <div className="attendance_item__status">
          <Text color="#2B2B2B" fontSize="0.5625rem" fontWeight="600">
            {status}
          </Text>
        </div>

        <Text
          color="#FFF"
          fontSize="1.1875rem"
          fontWeight="600"
          className="attendance_item__title"
        >
          {title}
        </Text>

        <div>
          <Text
            color="#FFF"
            fontSize="0.9375rem"
            fontWeight="500"
            className="attendance_item__date"
          >
            {date}
          </Text>

          <Text
            color="#D9D9D9"
            fontSize="0.8125rem"
            fontWeight="500"
            className="attendance_item__time"
          >
            {time}
          </Text>
        </div>
      </div>
      <Image src={IMAGES.link} alt="link" className="attendance_item__link" />
    </div>
  );
};

export default AttendanceItem;
