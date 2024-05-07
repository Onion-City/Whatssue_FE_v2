import { TODAY_SCHEDULE_TITLE } from "../constants/const";
import AttendanceItem from "@/components/molecules/attendanceItem/AttendanceItem";
import { todayScheduleList } from "../constants/dummy";
import { Text } from "@/components/atoms/text";
import "./Attendance.css";

const TodaySchedule = () => {
  return (
    <div>
      <Text
        color="#FFF"
        fontSize="1.1875rem"
        fontWeight="600"
        className="today_schedule"
      >
        {TODAY_SCHEDULE_TITLE}
      </Text>
      {todayScheduleList.map((attendance) => (
        <AttendanceItem
          key={attendance.id}
          attendanceAddress="attendance"
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

export default TodaySchedule;
