import { ClubHeader } from "@/components/organisms/Header/ClubHeader";
// import AttendanceEmpty from "./components/AttendanceEmpty";
import AttendanceList from "./components/AttendanceList";

export default function AttendanceListPage() {
  return (
    <>
      <ClubHeader />
      {/* <AttendanceEmpty /> */}
      <AttendanceList />
    </>
  );
}
