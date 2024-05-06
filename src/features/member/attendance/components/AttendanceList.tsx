import { dummyList } from "../constants/dummy";
import AttendanceItem from "../../../../components/molecules/attendanceItem/AttendanceItem";

const AttendanceList = () => {
  return (
    <div>
      {dummyList.map((attendance) => (
        <AttendanceItem
          key={attendance.id}
          attendanceAddress="member"
          id={attendance.id}
          status={attendance.status}
          title={attendance.title}
          date={attendance.date}
          time={attendance.time}
        />
      ))}
    </div>
  );
};

export default AttendanceList;
