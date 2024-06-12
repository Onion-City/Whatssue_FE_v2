import { ClubHeader } from "@/components/organisms/Header/ClubHeader";
import CurrentAttendance from "./components/CurrentAttendance";
import TodaySchedule from "./components/TodaySchedule";

const Attendance: React.FC = () => {
  return (
    <>
      <ClubHeader />
      <CurrentAttendance />
      <TodaySchedule />
    </>
  );
};

export default Attendance;
