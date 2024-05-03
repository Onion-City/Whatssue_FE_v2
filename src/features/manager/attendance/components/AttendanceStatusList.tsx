import { attendanceStatusDummy } from "../constants/dummy";
import AttendanceStatusItem from "./AttendanceStatusItem";

const AttendanceStatusList = () => {
  return (
    <div>
      {attendanceStatusDummy.map((attendanceStatus) => (
        <AttendanceStatusItem
          key={attendanceStatus.id}
          name={attendanceStatus.name}
          status={attendanceStatus.status}
        />
      ))}
    </div>
  );
};

export default AttendanceStatusList;
