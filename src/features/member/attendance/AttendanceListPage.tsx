// import AttendanceEmpty from "./components/AttendanceEmpty";
import { Nav } from "@/components/organisms/Nav";
import AttendanceList from "./components/AttendanceList";

export default function AttendanceListPage() {
  return (
    <>
      {/* <AttendanceEmpty /> */}
      <AttendanceList />
      <Nav />
    </>
  );
}
