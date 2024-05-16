import { Text } from "@/components/atoms/text";
import { ICONS } from "@/constants/images";
import Image from "next/image";
import "./Attendance.css";
import { useState } from "react";
import { ATTENDANCE_STATUS_ARR } from "../constants/const";

interface AttendanceStatusEditItemProps {
  name: string;
  status: string;
  onStatusChange: (name: string, status: string) => void;
}

const AttendanceStatusEditItem: React.FC<AttendanceStatusEditItemProps> = ({
  name,
  status,
  onStatusChange,
}) => {
  let iconColorClass = "";

  if (status === "출석") {
    iconColorClass = "green";
  } else if (status === "결석") {
    iconColorClass = "red";
  } else if (status === "공결") {
    iconColorClass = "yellow";
  }

  const [selectedStatus, setSelectedStatus] = useState<string | null>(status); // 선택된 상태

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
    onStatusChange(name, newStatus); // 부모 컴포넌트에 상태 변경 알림
  };

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

      <label
        htmlFor={`attendance_status_edit_select_${name}`}
        style={{ display: "none" }}
      >
        출석 현황 선택
      </label>
      <select
        id={`attendance_status_edit_select_${name}`}
        onChange={handleChange}
        value={selectedStatus || ""}
        className="attendance_status_list__select"
      >
        <option value="">전체</option>
        {ATTENDANCE_STATUS_ARR.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AttendanceStatusEditItem;
