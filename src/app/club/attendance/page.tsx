"use client";

import AttendanceListPage from "@/features/attendance/member/AttendanceListPage";
import Attendance from "@/features/attendance/manager/Attendance";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Nav } from "@/components/organisms/Nav";

const UserAttendanceList = () => {
  const role = useSelector((state: RootState) => state.club.children.role);
  console.log(role);
  return (
    <>
      {role === "MANAGER" ? <Attendance /> : <AttendanceListPage />}
      <Nav />
    </>
  );
};

export default UserAttendanceList;
