import classNames from "classnames/bind";
import { Text } from "../text";
import css from "./AttendanceChip.module.css";

const cn = classNames.bind(css);

const Status = {
  WAITING: "미승인",
  ACCEPTED: "승인완료",
  REJECTED: "승인거절",
};

interface AttendanceChipProps {
  type: "WAITING" | "ACCEPTED" | "REJECTED";
}

const AbsenceChip = ({ type }: AttendanceChipProps) => {
  const AttendanceStatue = Status[type];
  return (
    <span
      className={cn(
        "attendanceChip",
        type === "ACCEPTED" ? "wt" : type === "WAITING" ? "gr" : "rd"
      )}
    >
      <Text color="#2b2b2b" fontSize="0.5625rem" fontWeight="700">
        {AttendanceStatue}
      </Text>
    </span>
  );
};

export default AbsenceChip;
