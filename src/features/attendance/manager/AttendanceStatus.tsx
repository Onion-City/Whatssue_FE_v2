"use client";
import { HistoryHeader } from "@/components/organisms/Header";
import { Suspense } from "react";
import AttendanceStatusList from "./components/AttendanceStatusList";

const AttendanceStatus: React.FC = () => {
  return (
    <>
      <HistoryHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <AttendanceStatusList />
      </Suspense>
    </>
  );
};

export default AttendanceStatus;
