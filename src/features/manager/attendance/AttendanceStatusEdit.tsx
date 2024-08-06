"use client";
import { HistoryHeader } from "@/components/organisms/Header";
import { Suspense } from "react";
import AttendanceStatusListEdit from "./components/AttendanceStatusListEdit";

const AttendanceStatusEdit: React.FC = () => {
  return (
    <>
      <HistoryHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <AttendanceStatusListEdit />
      </Suspense>
    </>
  );
};

export default AttendanceStatusEdit;
