import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { Text } from "@/components/atoms/text";
import "./Attendance.css";

const AttendanceEmpty = () => {
  return (
    <div className="attendance_empty">
      <Image
        src={IMAGES.attendance}
        alt="attendance"
        className="attendance__icon"
      />
      <Text
        color="#fff"
        fontSize="1.0625rem"
        fontWeight="600"
        className="no__attendance"
      >
        현재 진행 중인
        <br />
        출석이 없어요
      </Text>
    </div>
  );
};

export default AttendanceEmpty;
