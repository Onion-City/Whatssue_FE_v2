import React from "react";
import { Nav } from "@/components/organisms/Nav";
import AttendanceList from "./components/AttendanceList";
import { ToastContainer } from "react-toastify";

const AttendanceListPage: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <AttendanceList />
      {/* <Nav /> */}
    </>
  );
};

export default AttendanceListPage;
