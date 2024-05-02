import { ClubHeader } from "@/components/organisms/Header/ClubHeader";
import CurrentAttendance from "./components/CurrentAttendance";
import TodaySchedule from "./components/TodaySchedule";

export default function Attendance() {
  return (
    <>
      <ClubHeader />
      <CurrentAttendance />
      <TodaySchedule />
    </>
  );
}
