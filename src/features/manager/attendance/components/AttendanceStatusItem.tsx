import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import Image from "next/image";
import "./Attendance.css";

const AttendanceStatusItem = ({
  name,
  status,
}: {
  name: string;
  status: string;
}) => {
  let iconColorClass = "";

  if (status === "출석") {
    iconColorClass = "green";
  } else if (status === "결석") {
    iconColorClass = "red";
  } else if (status === "공결") {
    iconColorClass = "yellow";
  }

  return (
    <div className="attendance_status_item">
      <Image
        src={ICONS.memberProfileNone}
        alt="link"
        className="attendance_status_item__profile"
      />

      <Text
        color="#FFF"
        fontSize="1.0625rem"
        fontWeight="600"
        className="attendance_status_item__name"
      >
        {name}
      </Text>

      <span className={`attendance_status_item__icon ${iconColorClass}`}></span>

      <Text
        color="#FFF"
        fontSize="0.6875rem"
        fontWeight="600"
        className="attendance_status_item__status"
      >
        {status}
      </Text>
    </div>
  );
};

export default AttendanceStatusItem;
