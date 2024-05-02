import { CURRENT_ATTENDANCE_TITLE } from "../constants/const";
import AttendanceItem from "@/components/molecules/attendanceBox/AttendanceItem";
import { currentAttendanceList } from "../constants/dummy";
import { Text } from "@/components/atoms/text";
import "./Attendance.css";

const CurrentAttendance = () => {
  return (
    <div>
      <Text
        color="#FFF"
        fontSize="1.1875rem"
        fontWeight="600"
        className="current_attendance"
      >
        {CURRENT_ATTENDANCE_TITLE}
      </Text>
      {currentAttendanceList.map((attendance) => (
        <AttendanceItem
          key={attendance.id}
          attendanceAddress="manager"
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

export default CurrentAttendance;
