import classNames from "classnames/bind";
import { Text } from "../text";
import css from "./AttendanceChip.module.css";

const cn = classNames.bind(css);

const Status = {
  BEFORE: "미출석",
  ONGOING: "출석중",
  COMPLETE: "출석완료",
};

interface AttendanceChipProps {
  type: "BEFORE" | "ONGOING" | "COMPLETE";
}

const AttendanceChip = ({ type }: AttendanceChipProps) => {
  const AttendanceStatue = Status[type];
  return (
    <span
      className={cn(
        "attendanceChip",
        type === "BEFORE" ? "wt" : type === "ONGOING" ? "gr" : "rd"
      )}
    >
      <Text color="#2b2b2b" fontSize="0.75rem" fontWeight="500">
        {AttendanceStatue}
      </Text>
    </span>
  );
};

export default AttendanceChip;
