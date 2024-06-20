import React from "react";
import { Nav } from "@/components/organisms/Nav";
import AttendanceList from "./components/AttendanceList";

const AttendanceListPage: React.FC = () => {
  return (
    <>
      {/* <AttendanceEmpty /> */}
      <AttendanceList />
      <Nav />
    </>
  );
};

export default AttendanceListPage;
